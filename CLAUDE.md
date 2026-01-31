# Claude Code Tutorial Website

## プロジェクト概要
Claude Codeの実践的チュートリアルサイト（EZOAI制作）

## ソース素材との同期

### 素材フォルダ
```
/Users/coelaqanth_006/Desktop/01ezoai/Givery/2026/xGN/有用記事/claude-code-tutorial/
├── turtorial/
│   ├── 00_01_Claude_Codeとは何か.md
│   ├── 00_02_エージェントという概念.md
│   ├── ...
│   └── 参考リソース.md
└── ハンズオン/
    ├── 1_sales_data_analytics/
    ├── 2_document_organization/
    └── ...
```

### Webアプリ（本リポジトリ）
```
/Users/coelaqanth_006/Desktop/02forAI/06Demo/claude-code-tutorial/
├── index.html
├── css/style.css
├── js/
│   ├── app.js
│   └── tutorials.js  ← チュートリアルデータ
└── assets/
```

## 同期ルール

### 素材が更新されたとき
1. 素材フォルダの変更内容を確認
2. `js/tutorials.js` の該当セクションを更新
3. 変更をコミット＆プッシュ

### 対応マッピング

| 素材ファイル | tutorials.js の場所 |
|-------------|-------------------|
| 00_xx_*.md | TUTORIALS.intro |
| 01_xx_*.md | TUTORIALS.basic |
| 02_xx_*.md | TUTORIALS.intermediate |
| 03_xx_*.md | TUTORIALS.advanced |
| ハンズオン/N_*/ | HANDSON.nonDev または HANDSON.dev |
| 参考リソース.md | BEST_PRACTICES, OFFICIAL_RESOURCES |

### 整合性チェック項目
- [ ] チュートリアル数が一致
- [ ] タイトルが一致
- [ ] ハンズオンの準備ファイル内容が最新
- [ ] 関連チュートリアルIDが有効
- [ ] 公式リソースリンクが有効

## コマンド

### ビルド・実行
静的サイトのためビルド不要。`index.html` をブラウザで開く。

### デプロイ
```bash
git add .
git commit -m "Update: 説明"
git push origin main
```

## GitHub
- リポジトリ: https://github.com/Michey0495/claude-code-tutorial
