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
`#privacy` セクション。CSPメタで connect-src 'none'（フォント以外の外部接続を遮断）。
解析・Cookie・トラッキングなし。localStorage はテーマ/言語のみ。
社内配布用ポリシー雛形: assets/legal/privacy-policy-template.md

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
