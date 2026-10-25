#!/usr/bin/env bash
# PostToolUse hook for Edit and Write: formats the file with its package's
# Prettier, so CI's format:check passes. Each package has its own Prettier
# config and ignore file, so it runs from the package's folder. Packages
# without a format:check script (blades) and files outside a package are left
# alone.
set -euo pipefail

file=$(jq -r '.tool_input.file_path // empty')
[ -n "$file" ] && [ -f "$file" ] || exit 0

root=$(cd "$(dirname "$0")/../.." && pwd)
case "$file" in "$root"/packages/* | "$root"/apps/*) ;; *) exit 0 ;; esac

dir=$(dirname "$file")
while [ "$dir" != "$root" ] && [ ! -f "$dir/package.json" ]; do
  dir=$(dirname "$dir")
done
[ "$dir" != "$root" ] || exit 0

jq -e '.scripts["format:check"]' "$dir/package.json" > /dev/null || exit 0

cd "$dir"
node_modules/.bin/prettier --write --ignore-unknown --log-level warn "$file" >&2
