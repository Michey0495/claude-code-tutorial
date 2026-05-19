// POST /api/login  { orgId, password }
// 組織ID＋パスワードを検証し、閲覧期間内ならHTTP-only署名cookieを発行する。
// パスワード照合は scrypt（Node crypto）。外部送信は一切なし。

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const COOKIE_NAME = 'cct_sess';
const SESSION_MAX_SEC = 24 * 60 * 60; // セッション最大24h（期間変更が翌日までに反映）
const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 32 };

function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function sign(payloadObj, secret) {
  const payload = b64url(JSON.stringify(payloadObj));
  const data = 'v1.' + payload;
  const hmac = crypto.createHmac('sha256', secret).update(data).digest();
  return data + '.' + b64url(hmac);
}

function readOrgs() {
  const p = path.join(process.cwd(), 'api', '_data', 'orgs.json');
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

// 'YYYY-MM-DD' を UTC の開始/終了秒に
function dayStartSec(d) { return Math.floor(Date.parse(d + 'T00:00:00Z') / 1000); }
function dayEndSec(d) { return Math.floor(Date.parse(d + 'T23:59:59Z') / 1000); }

function verifyPassword(password, saltHex, hashHex) {
  const salt = Buffer.from(saltHex, 'hex');
  const expected = Buffer.from(hashHex, 'hex');
  const got = crypto.scryptSync(password, salt, SCRYPT.keylen, {
    N: SCRYPT.N, r: SCRYPT.r, p: SCRYPT.p, maxmem: 64 * 1024 * 1024,
  });
  return expected.length === got.length && crypto.timingSafeEqual(expected, got);
}

async function readBody(req) {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    res.status(500).json({ ok: false, error: 'server_not_configured' });
    return;
  }

  let body;
  try { body = await readBody(req); }
  catch { res.status(400).json({ ok: false, error: 'bad_request' }); return; }

  const orgId = String(body.orgId || '').trim().toLowerCase();
  const password = String(body.password || '');
  if (!orgId || !password) {
    res.status(400).json({ ok: false, error: 'missing_credentials' });
    return;
  }

  let orgs;
  try { orgs = readOrgs(); }
  catch { res.status(500).json({ ok: false, error: 'org_table_unavailable' }); return; }

  const org = orgs.find(o => String(o.id).toLowerCase() === orgId);
  const now = Math.floor(Date.now() / 1000);

  // 組織不明・PW不一致は同一の応答（情報を漏らさない）
  if (!org || !verifyPassword(password, org.salt, org.passHash)) {
    res.status(401).json({ ok: false, error: 'invalid_credentials' });
    return;
  }

  const startSec = dayStartSec(org.start);
  const endSec = dayEndSec(org.end);
  if (now < startSec) {
    res.status(403).json({ ok: false, error: 'not_started', start: org.start });
    return;
  }
  if (now > endSec) {
    res.status(403).json({ ok: false, error: 'expired', end: org.end });
    return;
  }

  const exp = Math.min(endSec, now + SESSION_MAX_SEC);
  const token = sign({ o: org.id, e: exp }, secret);
  const maxAge = exp - now;

  res.setHeader('Set-Cookie',
    `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${maxAge}`);
  res.status(200).json({
    ok: true,
    org: { id: org.id, name: org.name },
    start: org.start,
    end: org.end,
    expires: new Date(exp * 1000).toISOString(),
  });
};
