# 問題: 1つの関数に複数の責務、マジックナンバー、重複コード
def process_order(order):
    # 割引計算
    total = 0
    for item in order['items']:
        total += item['price'] * item['quantity']

    if order['customer_type'] == 'gold':
        total = total * 0.8  # 20%割引
    elif order['customer_type'] == 'silver':
        total = total * 0.9  # 10%割引

    # 税金計算
    if order['region'] == 'JP':
        total = total * 1.1  # 10%税
    elif order['region'] == 'US':
        total = total * 1.08  # 8%税

    # 送料計算
    if total < 5000:
        shipping = 500
    elif total < 10000:
        shipping = 300
    else:
        shipping = 0

    total = total + shipping

    # メール送信（ハードコード）
    print(f"Order confirmed: {total}")

    return total
