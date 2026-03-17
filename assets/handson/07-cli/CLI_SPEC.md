# taskman CLI 仕様書

## 概要
コマンドラインでタスクを管理するシンプルなツール

## コマンド一覧

### タスク追加
```bash
taskman add "タスクのタイトル"
```
- 新しいタスクを追加
- IDは自動採番（1から連番）

### タスク一覧
```bash
taskman list
taskman list --status pending
taskman list --status done
```
- すべてのタスクまたはステータスでフィルタ
- 表示形式: [ID] [STATUS] タイトル

### タスク完了
```bash
taskman done <id>
```
- 指定IDのタスクを完了にする

### タスク削除
```bash
taskman remove <id>
```
- 指定IDのタスクを削除

## データ保存
- tasks.json にJSON形式で保存
- 形式:
```json
{
  "tasks": [
    {"id": 1, "title": "タスク1", "status": "pending"},
    {"id": 2, "title": "タスク2", "status": "done"}
  ],
  "next_id": 3
}
```

## エラー処理
- 存在しないIDを指定した場合はエラーメッセージを表示
- ファイルが存在しない場合は新規作成
