# Claude Code Tutorial Website

## プロジェクト概要
Claude Codeの実践的チュートリアルサイト
2026年5月最新版 / Opus 4.7 / Sonnet 4.6 / Haiku 4.5 / v2.1.142対応
全40章 + 13種類のハンズオン

## 自動アップデート
schedule（cron）で月2回（毎月1日・15日 09:00 JST）に最新化。
- 調査: claude-code-guide で公式 changelog / モデル一覧を取得
- 反映: index.html / js/tutorials.js / js/app.js のバージョン表記とモデル一覧を Edit
- デプロイ: git push で Vercel 自動デプロイ
- スクリプト: `scripts/auto-update.md`（プロンプト本体）

## Webアプリ（本リポジトリ）
```
/Users/coelaqanth_006/Desktop/02forAI/06Demo/claude-code-tutorial/
├── index.html           メインHTML
├── css/style.css        Anthropic風デザインシステム
├── js/
│   ├── app.js           アプリケーションロジック、i18n
│   └── tutorials.js     チュートリアル・ハンズオンデータ（全コンテンツ）
├── assets/
│   ├── favicon.svg
│   ├── handson/            ハンズオン配布データ
│   ├── projects/           開発トラック準備物（alpha/beta/gamma/delta/orchestra）
│   └── legal/              プライバシーポリシー雛形
└── docs/
    ├── Boris_Cherny_Claude_Code_TIPS.md
    └── External_Skills_Hands-on.md
```

## 開発トラック（テーマ別パイプライン）
`#projects` セクション。PROJECT_TRACKS / PROJECT_DOWNLOADS（tutorials.js）でデータ定義。
複数テーマ選択 → 準備物一括DL → 学ぶ章へ誘導 → 受入基準と比較ビュー。
T1案件健全性ダッシュボード / T2議事録ToDo / T3提案QA / T4監査自動化 / T5上級オーケストレーション。
企業名はすべて架空。各トラックの作業ファイルは assets/projects/<id>/ に実体配置。

## プライバシー・セキュリティ
`#privacy` セクション。CSPは connect-src 'self'（外部送信先なし／通信は同一オリジン認証APIのみ）。
解析・追跡なし。localStorage はテーマ/言語のみ。社内配布用ポリシー雛形: assets/legal/privacy-policy-template.md

## アクセス制御（組織別・期間制限）
学習部分（tutorials/handson/projects）と準備物をサーバー側で保護。トップ/プライバシーは公開。

- `middleware.js`（Vercel Edge）: 保護パスを署名cookie検証で遮断。`js/tutorials.js`・`assets/projects/**`・`assets/handson/**` を matcher 指定
- `api/login.js` `api/logout.js` `api/session.js`（Node Function）: scryptでPW照合、HMAC署名HTTP-onlyセッションcookie、閲覧期間をサーバー判定。`api/session` は orgs.json を都度再確認し取消/期限を即時反映
- 組織テーブル: `api/_data/orgs.json`（静的配信されない位置・ハッシュのみ・コミット可）
- フロント: `index.html` の `#authModal`、`js/app.js` の認証フロー。`js/tutorials.js` は認証成功後に動的ロード

### 運用
- 必須環境変数: Vercel の `SESSION_SECRET`（未設定だと全保護がフェイルクローズ）。値の生成: `node scripts/gen-orgs.mjs secret`
- 組織追加: `node scripts/gen-orgs.mjs add "<会社名>" <略号2-3字> <開始YYYY-MM-DD> [終了]`
  - 組織ID=略号+開始MMDD、PW=ランダム8桁、期間既定=開始+1ヶ月
  - `api/_data/orgs.json` 更新（commit）＋ `scripts/credentials.{csv,md}`（平文PW・gitignore・配布用）
- 反映: orgs.json をコミットして push → Vercel 自動再デプロイ

## チュートリアル構成
| レベル | 章数 | ID範囲 | 内容 |
|--------|------|---------|------|
| 入門 | 8章 | 00_01〜00_08 | Claude Code概要、モデル、IDE統合 |
| 基礎 | 9章 | 01_01〜01_09 | CLAUDE.md、Plan Mode、ショートカット |
| 中級 | 11章 | 02_01〜02_11 | Skills、Hooks、MCP、Worktree、新コマンド |
| 上級 | 12章 | 03_01〜03_12 | Agent Teams、Agent SDK、CI/CD、コミュニティ |

## コマンド

ビルド不要の静的サイト。`index.html` をブラウザで開く。

### デプロイ
```bash
git add .
git commit -m "Update: 説明"
git push origin main
```

## GitHub
- リポジトリ: https://github.com/Michey0495/claude-code-tutorial
