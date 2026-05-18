#!/usr/bin/env bash
# Stop フック: 実行完了時にテーマ別の結果を1行で要約する。
# 外部送信はしない。標準出力に出すだけ。

set -euo pipefail

THEMES_DIR="${THEMES_DIR:-./themes}"
total=0
failed=0
lines=""

for dir in "$THEMES_DIR"/*/; do
  [ -d "$dir" ] || continue
  theme="$(basename "$dir")"
  result="$dir/out/result.json"
  if [ ! -f "$result" ]; then
    failed=$((failed + 1))
    lines="${lines}\n  ${theme}: FAILED (result.json なし)"
    continue
  fi
  # items 配列の件数を雑に数える（jq があれば優先）
  if command -v jq >/dev/null 2>&1; then
    count="$(jq '.items | length' "$result" 2>/dev/null || echo 0)"
    status="$(jq -r '.status' "$result" 2>/dev/null || echo unknown)"
  else
    count="$(grep -o '"theme"' "$result" | wc -l | tr -d ' ')"
    status="unknown"
  fi
  if [ "$status" = "failed" ]; then
    failed=$((failed + 1))
  fi
  total=$((total + count))
  lines="${lines}\n  ${theme}: ${status} (${count} 件)"
done

echo "=== オーケストレーション結果 ==="
echo -e "テーマ別:${lines}"
echo "合計件数: ${total} / 失敗テーマ: ${failed}"
