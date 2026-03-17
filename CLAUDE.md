# Claude Code Tutorial Website

## プロジェクト概要
Claude Codeの実践的チュートリアルサイト（EZOAI制作）
2026年3月最新版 / Opus 4.6 / Sonnet 4.6 / Haiku 4.5 / v2.1対応
全40章 + 13種類のハンズオン

## Webアプリ（本リポジトリ）
```
/Users/coelaqanth_006/Desktop/02forAI/06Demo/claude-code-tutorial/
├── index.html           メインHTML
├── css/style.css        Anthropic風デザインシステム
├── js/
│   ├── app.js           アプリケーションロジック、i18n
│   └── tutorials.js     チュートリアル・ハンズオンデータ（全コンテンツ）
├── assets/
│   └── favicon.svg
└── docs/
    ├── Boris_Cherny_Claude_Code_TIPS.md
    └── External_Skills_Hands-on.md
```

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
