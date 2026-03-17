# 脆弱性: 機密情報のハードコード
DATABASE_URL = "postgresql://admin:password123@localhost/myapp"
API_SECRET = "super_secret_key_12345"
DEBUG = True  # 本番でもTrueになっている

ALLOWED_HOSTS = ["*"]  # 脆弱性: ワイルドカード
