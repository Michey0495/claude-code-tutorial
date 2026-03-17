import hashlib

def hash_password(password):
    # 脆弱性: MD5は非推奨、ソルトなし
    return hashlib.md5(password.encode()).hexdigest()

def verify_password(password, hashed):
    return hash_password(password) == hashed

def create_token(user_id):
    # 脆弱性: 予測可能なトークン
    import time
    return f"token_{user_id}_{int(time.time())}"

def validate_token(token):
    # 脆弱性: トークン検証が不十分
    return token.startswith("token_")
