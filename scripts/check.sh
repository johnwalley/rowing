#!/usr/bin/env bash
# Everything CI's `check` job runs, in the same order. CI calls this script, so
# a local `pnpm check` that passes means the PR's check will too.
set -euo pipefail

cd "$(dirname "$0")/.."

in_group=
step() {
  if [ -n "${GITHUB_ACTIONS:-}" ]; then
    if [ -n "$in_group" ]; then echo "::endgroup::"; fi
    echo "::group::$1"
    in_group=1
  else
    printf '\n==> %s\n' "$1"
  fi
}

# Workers Builds builds from each app's folder, and Corepack there may read that
# package.json's packageManager instead of the root's.
step "The apps pin the same pnpm as the root"
for app in apps/*/package.json; do
  test "$(jq -r .packageManager package.json)" = "$(jq -r .packageManager "$app")" || { echo "$app pins a different pnpm"; exit 1; }
done

step "Formatting"
pnpm format:check

# In dependency order: blades, chart, tools, then the sites and the results
# editor. The libraries' builds run tsc and the tools' and the editor's run
# tsgo, so this also typechecks them.
step "Build"
pnpm -r build

# CI=true stops Vitest writing snapshots that are missing, so a new TG file
# without its snapshot fails here as it does in CI.
step "Tests"
CI=true pnpm test

# Cloudflare serves the bumps site's redirects from the `_redirects` file the
# build writes; without it, `/charts` and the rest would be 404s.
step "The bumps site's redirects file"
grep -Eq '^/charts /charts/town/men/[0-9]{4} 307$' apps/cambridgebumps.com/dist/_redirects || { echo "dist/_redirects is missing the /charts redirect"; exit 1; }

step "The chart's exports"
pnpm --filter react-bumps-chart check-exports

# The site's types for the libraries come from their dist/, so these run after
# the build.
step "The bumps site's lint"
pnpm --filter cambridgebumps.com lint
step "The bumps site's typecheck"
pnpm --filter cambridgebumps.com typecheck
step "The coxing site's typecheck"
pnpm --filter coxing-recordings typecheck
step "The SVG blades site's typecheck"
pnpm --filter svg-rowing-blades typecheck

# Compares the folder before and after regenerating it, rather than against
# git, so uncommitted TG edits with their regenerated AD files pass locally.
step "The AD files match the TG files"
ad=packages/bumps-results-tools/results/ad_format
ad_hash() { find "$ad" -type f | LC_ALL=C sort | xargs shasum | shasum; }
before=$(ad_hash)
pnpm --filter bumps-results-tools run generate:ad
if [ "$before" != "$(ad_hash)" ]; then
  git status --short -- "$ad"
  echo "generate:ad changed $ad: commit what it wrote"
  exit 1
fi

if [ -n "${GITHUB_ACTIONS:-}" ]; then echo "::endgroup::"; fi
echo "All checks passed"
