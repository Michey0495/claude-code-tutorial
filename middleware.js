// Vercel Edge Middleware
// 保護対象（学習コンテンツ本体・準備物・ハンズオンデータ）へのアクセスを
// 署名付きセッションcookieで遮断する。検証は Edge ランタイムの Web Crypto のみ。
// パスワード照合は行わない（それは Node Function /api/login の責務）。

export const config = {
  matcher: [
    '/js/tutorials.js',
    '/assets/projects/:path*',
    '/assets/handson/:path*',
    '/api/_data/:path*',
  ],
};

const COOKIE_NAME = 'cct_sess';
const enc = new TextEncoder();

function b64urlToBytes(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function verifyToken(token, secret) {
  // 形式: v1.<b64url(payload)>.<b64url(hmac)>
  if (!token || !secret) return null;
  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') return null;
  const signed = enc.encode('v1.' + parts[1]);
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const expected = new Uint8Array(await crypto.subtle.sign('HMAC', key, signed));
  const got = b64urlToBytes(parts[2]);
  if (!timingSafeEqual(expected, got)) return null;
  let payload;
  try {
    payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[1])));
  } catch { return null; }
  if (!payload || typeof payload.e !== 'number') return null;
  if (Math.floor(Date.now() / 1000) >= payload.e) return null; // 期限切れ
  return payload;
}

function unauthorized(pathname) {
  // ドキュメント以外（スクリプト/アセット）は素の 401。
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

// Vercel Edge ランタイムの request.cookies は版によって戻り値が
// 文字列だったりオブジェクトだったりするため、Cookie ヘッダを直接
// パースする方が堅牢。失敗したら request.cookies API へフォールバック。
function readCookie(request, name) {
  const header = request.headers && request.headers.get && request.headers.get('cookie');
  if (header) {
    const parts = header.split(';');
    for (const part of parts) {
      const i = part.indexOf('=');
      if (i === -1) continue;
      const k = part.slice(0, i).trim();
      if (k === name) return part.slice(i + 1).trim();
    }
  }
  try {
    const c = request.cookies && request.cookies.get && request.cookies.get(name);
    if (c) return typeof c === 'string' ? c : c.value || null;
  } catch (_) {}
  return null;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 組織テーブルは（認証の有効/無効に関わらず）絶対に配信しない
  if (pathname.includes('/_data/') || pathname.endsWith('orgs.json')) {
    return new Response('Not found', { status: 404 });
  }

  // ログイン機能のスイッチ。AUTH_ENABLED=1 のときだけ保護する。
  // 未設定（既定）は無効＝全コンテンツ公開（再有効化は環境変数1つ）。
  if (process.env.AUTH_ENABLED !== '1') return; // そのまま配信

  const secret = process.env.SESSION_SECRET;
  // 有効時にシークレット未設定ならフェイルクローズ（保護対象を出さない）
  if (!secret) return unauthorized(pathname);

  const token = readCookie(request, COOKIE_NAME);
  const payload = await verifyToken(token, secret);
  if (!payload) return unauthorized(pathname);

  return; // 認証OK → そのまま配信
}
