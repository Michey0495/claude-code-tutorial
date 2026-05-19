// GET /api/session
// cookie の署名・期限を検証し、さらに組織テーブルを再確認して
// 「組織が消えた / 期間が縮められた / 期限切れ」を即時に反映する。

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const COOKIE_NAME = 'cct_sess';

function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromB64url(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Buffer.from(s, 'base64');
}

function verifyToken(token, secret) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') return null;
  const data = 'v1.' + parts[1];
  const expected = crypto.createHmac('sha256', secret).update(data).digest();
  const got = fromB64url(parts[2]);
  if (expected.length !== got.length || !crypto.timingSafeEqual(expected, got)) return null;
  let payload;
  try { payload = JSON.parse(fromB64url(parts[1]).toString('utf8')); }
  catch { return null; }
  if (!payload || typeof payload.e !== 'number') return null;
  if (Math.floor(Date.now() / 1000) >= payload.e) return null;
  return payload;
}

function parseCookie(header, name) {
  if (!header) return null;
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i === -1) continue;
    if (part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return null;
}

function readOrgs() {
  const p = path.join(process.cwd(), 'api', '_data', 'orgs.json');
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}
function dayStartSec(d) { return Math.floor(Date.parse(d + 'T00:00:00Z') / 1000); }
function dayEndSec(d) { return Math.floor(Date.parse(d + 'T23:59:59Z') / 1000); }

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const secret = process.env.SESSION_SECRET;
  const fail = (extra) => res.status(200).json(Object.assign({ authenticated: false }, extra || {}));

  if (!secret) { fail({ reason: 'server_not_configured' }); return; }

  const token = parseCookie(req.headers.cookie || '', COOKIE_NAME);
  const payload = verifyToken(token, secret);
  if (!payload) { fail(); return; }

  let org;
  try {
    org = readOrgs().find(o => o.id === payload.o);
  } catch { fail({ reason: 'org_table_unavailable' }); return; }

  const now = Math.floor(Date.now() / 1000);
  if (!org || now < dayStartSec(org.start) || now > dayEndSec(org.end)) {
    // 期間外/取消は未認証扱い（cookieも破棄）
    res.setHeader('Set-Cookie',
      `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`);
    fail({ reason: 'revoked_or_expired' });
    return;
  }

  res.status(200).json({
    authenticated: true,
    org: { id: org.id, name: org.name },
    start: org.start,
    end: org.end,
    expires: new Date(payload.e * 1000).toISOString(),
  });
};
