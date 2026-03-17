# UserValidator 仕様書

## 概要
ユーザー入力を検証するモジュール

## 検証ルール

### メールアドレス (validate_email)
- @を含む
- ドメイン部分にドットを含む
- 空文字はNG

### パスワード (validate_password)
- 8文字以上
- 大文字、小文字、数字を各1つ以上含む

### ユーザー名 (validate_username)
- 3〜20文字
- 英数字とアンダースコアのみ
- 先頭は英字

## 戻り値
- 有効: True
- 無効: False
