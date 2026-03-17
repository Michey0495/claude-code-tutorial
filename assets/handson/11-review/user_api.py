import sqlite3
import json

def get_user(user_id):
    # セキュリティ問題: SQLインジェクション脆弱性
    conn = sqlite3.connect('users.db')
    cursor = conn.execute(f"SELECT * FROM users WHERE id = {user_id}")
    user = cursor.fetchone()
    conn.close()
    return user

def search_users(query):
    # パフォーマンス問題: N+1クエリ
    conn = sqlite3.connect('users.db')
    users = conn.execute("SELECT id FROM users").fetchall()
    results = []
    for user in users:
        detail = conn.execute(f"SELECT * FROM users WHERE id = {user[0]}").fetchone()
        if query.lower() in str(detail).lower():
            results.append(detail)
    conn.close()
    return results

def update_user(user_id, data):
    # 可読性問題: ネストが深い、エラー処理なし
    conn = sqlite3.connect('users.db')
    if data:
        if 'name' in data:
            if len(data['name']) > 0:
                conn.execute(f"UPDATE users SET name = '{data['name']}' WHERE id = {user_id}")
        if 'email' in data:
            if '@' in data['email']:
                conn.execute(f"UPDATE users SET email = '{data['email']}' WHERE id = {user_id}")
    conn.commit()
    conn.close()
    return True

PASSWORD = "admin123"  # セキュリティ問題: ハードコードされた認証情報
