# Claude Code Tutorial Website

## プロジェクト概要
Claude Codeの実践的チュートリアルサイト
2026年7月最新版 / Opus 5 / Sonnet 5 / Fable 5 / Haiku 4.5 / v2.1.220対応
全50章 + 13種類のハンズオン

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
スイッチ式。環境変数 `AUTH_ENABLED=1` のときのみ有効。**未設定（既定）は無効＝全公開**。
有効時は学習部分（tutorials/handson/projects）と準備物をサーバー側で保護、トップ/プライバシーは公開。
無効時も `api/_data/` と `orgs.json` は常に404（組織表は出さない）。

- `middleware.js`（Vercel Edge）: 保護パスを署名cookie検証で遮断。`js/tutorials.js`・`assets/projects/**`・`assets/handson/**` を matcher 指定
- `api/login.js` `api/logout.js` `api/session.js`（Node Function）: scryptでPW照合、HMAC署名HTTP-onlyセッションcookie、閲覧期間をサーバー判定。`api/session` は orgs.json を都度再確認し取消/期限を即時反映
- 組織テーブル: `api/_data/orgs.json`（静的配信されない位置・ハッシュのみ・コミット可）
- フロント: `index.html` の `#authModal`、`js/app.js` の認証フロー。`js/tutorials.js` は認証成功後に動的ロード

### 運用
- ログイン無効化（既定/現状）: Vercel に `AUTH_ENABLED` を設定しない、または `1` 以外。全公開
- ログイン有効化: Vercel で `AUTH_ENABLED=1` と `SESSION_SECRET`（`node scripts/gen-orgs.mjs secret` で生成）を設定し再デプロイ。`SESSION_SECRET` 未設定のまま有効化すると全保護フェイルクローズ
- 組織追加: `node scripts/gen-orgs.mjs add "<会社名>" <略号2-3字> <開始YYYY-MM-DD> [終了]`
  - 組織ID=略号+開始MMDD、PW=ランダム8桁、期間既定=開始+1ヶ月
  - `api/_data/orgs.json` 更新（commit）＋ `scripts/credentials.{csv,md}`（平文PW・gitignore・配布用）
- 反映: orgs.json をコミットして push → Vercel 自動再デプロイ

## 学習UX機能（2026-07 追加）
すべてクライアント完結・外部依存なし。CSP変更不要。

- 横断検索: ヘッダーの虫眼鏡または `/`（`Cmd/Ctrl+K`も可）で起動。章50＋ハンズオン13＋トラック5＋設定テンプレ30＝98件を対象にタイトル/説明/タグ/IDを部分一致（複数語AND、タイトル一致を優先）。↑↓で移動、Enterで該当を開く、Escで閉じる
- 学習進捗: 章カードとモーダルの完了トグル。レベルタブに `完了/総数`、セクション上部に進捗バーと残り時間の目安。保存キー `cctChapterProgress`
- ディープリンク: `#tutorials/02_05` `#handson/3` `#projects/alpha` `#settings` 形式。リロードで復帰し、研修で「このURLを開いて」と指示できる。トップはハッシュなし。`history.replaceState` 方式で履歴は増やさない
- 章送り: 詳細モーダル下部に前/次の章、キーボード ← → でも移動（検索・チートシート表示中は無効）
- チートシート内絞り込み: 機能名で98行のテーブルを行フィルタ、該当0のテーブルは見出しごと非表示
- 開発トラック選択の永続化: 保存キー `cctSelectedTracks`

## チュートリアル構成
| レベル | 章数 | ID範囲 | 内容 |
|--------|------|---------|------|
| 入門 | 8章 | 00_01〜00_08 | Claude Code概要、モデル、IDE統合 |
| 基礎 | 9章 | 01_01〜01_09 | CLAUDE.md、Plan Mode、ショートカット |
| 中級 | 14章 | 02_01〜02_14 | Skills、Hooks、MCP、Worktree、新コマンド |
| 上級 | 19章 | 03_01〜03_19 | Agent Teams、Agent SDK、CI/CD、コミュニティ |

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
