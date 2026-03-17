def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    # バグ: ゼロ除算チェックなし
    return a / b

def calculate_average(numbers):
    # バグ: 空リストでエラー
    total = sum(numbers)
    return total / len(numbers)

def parse_number(text):
    # バグ: 例外処理なし
    return int(text)
