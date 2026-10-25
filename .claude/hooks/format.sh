#!/usr/bin/env bash
# PostToolUse hook for Edit and Write: formats the file with the repo's
# Prettier, so CI's format:check passes. It runs from the root, where the one
# Prettier config and ignore file are, so ignored and unknown files are left
# alone.
set -euo pipefail

file=$(jq -r '.tool_input.file_path // empty')
[ -n "$file" ] && [ -f "$file" ] || exit 0

root=$(cd "$(dirname "$0")/../.." && pwd)
case "$file" in "$root"/*) ;; *) exit 0 ;; esac

cd "$root"
node_modules/.bin/prettier --write --ignore-unknown --log-level warn "$file" >&2
