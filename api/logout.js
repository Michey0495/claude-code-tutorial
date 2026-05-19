// POST /api/logout — セッションcookieを破棄する。

const COOKIE_NAME = 'cct_sess';

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Set-Cookie',
    `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`);
  res.status(200).json({ ok: true });
};
