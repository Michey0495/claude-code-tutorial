#!/usr/bin/env node
// 組織テーブル生成ツール（ローカル実行・外部送信なし）
//
// 使い方:
//   node scripts/gen-orgs.mjs add "<会社表示名>" <略号2-3字> <開始YYYY-MM-DD> [終了YYYY-MM-DD]
//   node scripts/gen-orgs.mjs list
//   node scripts/gen-orgs.mjs secret      # SESSION_SECRET 用の強ランダム値を出力
//
// 規約:
//   組織ID   = 略号(小文字) + 開始日の MMDD   例: abc0601
//   パスワード = ランダム8桁（紛らわしい文字を除外）
//   閲覧期限  = 既定で開始日 + 1ヶ月
//
// 出力:
//   api/_data/orgs.json          … 配信されない組織テーブル（scryptハッシュのみ）
//   scripts/credentials.csv/.md  … 配布用の資格情報（平文PW・gitignore対象）

import { scryptSync, randomBytes, randomInt } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORGS_PATH = join(ROOT, 'api', '_data', 'orgs.json');
const CSV_PATH = join(ROOT, 'scripts', 'credentials.csv');
const MD_PATH = join(ROOT, 'scripts', 'credentials.md');
const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 32 };
const PW_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'; // O0 I l 1 除外

function randomPassword(len = 8) {
  let s = '';
  for (let i = 0; i < len; i++) s += PW_ALPHABET[randomInt(PW_ALPHABET.length)];
  return s;
}

function hashPassword(pw) {
  const salt = randomBytes(16);
  const hash = scryptSync(pw, salt, SCRYPT.keylen, {
    N: SCRYPT.N, r: SCRYPT.r, p: SCRYPT.p, maxmem: 64 * 1024 * 1024,
  });
  return { salt: salt.toString('hex'), passHash: hash.toString('hex') };
}

function loadOrgs() {
  if (!existsSync(ORGS_PATH)) return [];
  try { return JSON.parse(readFileSync(ORGS_PATH, 'utf8')); } catch { return []; }
}

function saveOrgs(orgs) {
  mkdirSync(dirname(ORGS_PATH), { recursive: true });
  writeFileSync(ORGS_PATH, JSON.stringify(orgs, null, 2) + '\n');
}

function addMonth(dateStr) {
  const d = new Date(dateStr + 'T00:00:00Z');
  const day = d.getUTCDate();
  d.setUTCMonth(d.getUTCMonth() + 1);
  if (d.getUTCDate() < day) d.setUTCDate(0); // 月末丸め
  return d.toISOString().slice(0, 10);
}

function isDate(s) { return /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s)); }

function appendCredentialSheet(rec, pw) {
  const header = 'company,org_id,password,start,end\n';
  if (!existsSync(CSV_PATH)) writeFileSync(CSV_PATH, header);
  writeFileSync(CSV_PATH,
    `"${rec.name}",${rec.id},${pw},${rec.start},${rec.end}\n`, { flag: 'a' });

  if (!existsSync(MD_PATH)) {
    writeFileSync(MD_PATH,
      '# 配布用 資格情報（取り扱い注意・gitignore対象）\n\n' +
      '| 会社 | 組織ID | パスワード | 閲覧開始 | 閲覧終了 |\n' +
      '|------|--------|-----------|---------|---------|\n');
  }
  writeFileSync(MD_PATH,
    `| ${rec.name} | \`${rec.id}\` | \`${pw}\` | ${rec.start} | ${rec.end} |\n`,
    { flag: 'a' });
}

const [, , cmd, ...args] = process.argv;

if (cmd === 'secret') {
  console.log(randomBytes(48).toString('base64url'));
  process.exit(0);
}

if (cmd === 'list') {
  const orgs = loadOrgs();
  if (!orgs.length) { console.log('（組織未登録）'); process.exit(0); }
  for (const o of orgs) console.log(`${o.id}\t${o.name}\t${o.start} 〜 ${o.end}`);
  process.exit(0);
}

if (cmd === 'add') {
  const [name, abbrRaw, start, endArg] = args;
  if (!name || !abbrRaw || !start) {
    console.error('使い方: node scripts/gen-orgs.mjs add "<会社名>" <略号2-3字> <開始YYYY-MM-DD> [終了YYYY-MM-DD]');
    process.exit(1);
  }
  const abbr = abbrRaw.toLowerCase();
  if (!/^[a-z]{2,3}$/.test(abbr)) {
    console.error('略号は英字2〜3字にしてください'); process.exit(1);
  }
  if (!isDate(start) || (endArg && !isDate(endArg))) {
    console.error('日付は YYYY-MM-DD 形式で'); process.exit(1);
  }
  const mmdd = start.slice(5, 7) + start.slice(8, 10);
  const id = abbr + mmdd;
  const end = endArg || addMonth(start);
  const pw = randomPassword(8);
  const { salt, passHash } = hashPassword(pw);

  const orgs = loadOrgs().filter(o => o.id !== id);
  const rec = { id, name, start, end, salt, passHash };
  orgs.push(rec);
  orgs.sort((a, b) => a.id.localeCompare(b.id));
  saveOrgs(orgs);
  appendCredentialSheet(rec, pw);

  console.log('登録しました:');
  console.log(`  組織ID    : ${id}`);
  console.log(`  パスワード : ${pw}   ← この場でのみ表示。credentials.csv にも保存`);
  console.log(`  閲覧期間  : ${start} 〜 ${end}`);
  console.log('  ※ orgs.json はコミット可（ハッシュのみ）。credentials.* はgit管理しない');
  process.exit(0);
}

console.error('コマンド: add | list | secret');
process.exit(1);
