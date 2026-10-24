# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tools for manipulating bumps rowing results data (Cambridge Bumps, Oxford Summer Eights, Torpids, Town Bumps). The bumps site in `apps/cambridgebumps.com` builds its results and statistics with this package's code. Related repositories: [bumps-results](https://github.com/johnwalley/bumps-results), [d3-bumps-chart](https://github.com/johnwalley/d3-bumps-chart), [react-bumps-chart](https://github.com/johnwalley/react-bumps-chart).

The repo is a Node (24+) + TypeScript project using pnpm. Scripts run via `tsx`; tests use Vitest. The UI is a Vite + React 19 + Tailwind 4 app under `src/ui/`. Builds use `tsgo` (`@typescript/native-preview`) for type-checking and Vite 8 for bundling.

## Commands

```bash
# Development server (Vite + React UI)
pnpm run dev

# Type-check (src + scripts) + production build
pnpm run build

# Type-check only (src via tsconfig.json, scripts via tsconfig.scripts.json)
pnpm run typecheck

# Format / check formatting (CI runs format:check)
pnpm run format
pnpm run format:check

# Preview the production build
pnpm run preview

# Regenerate results/ad_format/ from the TG files (CI fails if committed files differ)
pnpm run generate:ad

# Run tests
pnpm test

# Run a single test file
pnpm vitest run src/bumps.test.ts
```

## Architecture

### Core Library (`src/`)

- **bumps.ts** - Parser, processor, and serializer. Key functions:
  - `readEvent(text)` - Parses TG format text into `{ event: Event | null, errors }`
  - `readFile(path?)` - Reads a TG format file via `node:fs` (or stdin when `path` is omitted) and returns the same shape as `readEvent`. Node builtins are imported lazily inside the function because `bumps.ts` is also bundled into the browser UI — keep it that way
  - `processResults(event, debug?)` - Computes crew movements, blades, gains from result codes. Returns `{ event, errors }`; on error it stops and returns the partially processed event. Unrecognised result codes are errors. Problems are returned, never logged — `console.log` is only for `debug` tracing
  - `stepOn(event)` - Generates next year's starting positions from current results
  - `writeString(event)` - Serializes an `Event` back to TG format

- **types.ts** - Zod schemas and TypeScript types for `Event`, `Crew`, and `Statistics`

- **abbreviations.ts** - Club abbreviation mappings per event set: Cambridge colleges (`ccol`), Oxford colleges (`ocol`), Town clubs (`cra`), plus `sets` (short → long name) and a `roman` numeral table

- **club-mappings.ts** - Display-name mappings (`clubMapping`, `clubMappingFull`) for normalising historical club names

- **results.ts** - `events`: every TG file in `results/tg_format/`, parsed and processed, in file name order. Importing it throws, listing every file's errors, if any file has one. It bundles the files with `import.meta.glob`, so it works only under Vite (the bumps site, the viewer, Vitest), not in `tsx` scripts. The site imports it as `bumps-results-tools/results`

- **stats.ts** - `getStats(events, combine?)` aggregates per-club statistics (headships, crews entered, blades, highest positions) across an array of `Event`s, counting only complete events. `getRankings(events)` turns them into the statistics pages' tables (headships, crewsEntered, headDays, headLong, bladesAwarded), ranked with Arquero. The site imports it as `bumps-results-tools/stats`

- **math.ts** - Histogram + summary statistics helpers (`mean`, `variance`, `standardDeviation`, histogram variants)

- **utils.ts** - Small helpers (`range`, etc.) shared by core and scripts

- **bumps.test.ts** - Vitest suite for the core library

- **results.test.ts** - Parses and processes every file in `results/tg_format/`, fails on any error (so a typo in new results data breaks CI), and compares a per-crew summary (daily moves, gain, blades, withdrawn) against `src/__snapshots__/results/<file>`. When a data edit or processor change is meant to alter results, run `pnpm vitest run -u` and review the snapshot diff. New TG files need their snapshot committed, because CI won't write missing snapshots

### UI (`src/ui/`)

React app rendered through Vite. `App.tsx` is a split-pane editor:

- Left: a `<select>` listing every TG file (grouped by set and gender) and a `<textarea>` for live editing of TG-format text
- Right: a `BumpsChart` from `react-bumps-chart` that re-renders as the textarea changes
- A "Generate next years starting positions" button runs `stepOn` + `writeString` to seed next year's TG text from the currently loaded event

`src/ui/results.ts` imports TG files straight from `results/tg_format/` via `import.meta.glob` (lazy, one chunk per file), so the UI always matches the canonical data — don't reintroduce copies under `public/`. Styling is Tailwind 4 via `@tailwindcss/vite`.

### Scripts (`scripts/`)

- **process_tg_file.ts** - Filter: reads TG from stdin (or a path), runs `processResults`, writes JSON to stdout and errors to stderr (exit 1 on error)
- **convert_rssbc_to_tg.ts** - Converts the historical RSSBC JSON (under `results/rssbc/`) to TG format
- **download_rssbc_results.ts** - Fetches RSSBC API data into `results/rssbc/`
- **convert_tg_to_ad.ts** - Writes `results/ad_format/` from the TG files (`pnpm run generate:ad`), one AD file per TG file (`mays1848.1_men.txt` → `m1848.1m.txt`). It exits non-zero if two TG files would map to the same AD name, and deletes AD files that no longer have a TG source. The AD files are committed, and CI fails if they don't match what this script produces, so rerun it after editing TG data
- **convert_ad_to_tg.js**, **normalize_ad.js**, **normalize.js** - Legacy converters for the Anu Dudhia (`ad`) format
- **data/** - Cached RSSBC raw text dumps used by the converters

### Results Data

- **results/tg_format/** - Canonical source results in TG format (text files, ~1050 files spanning Eights, Lents, Mays, Torpids, Town from the 1800s onward)
- **results/rssbc/**, **results/dudhia/**, **results/dudhia_per_crew/**, **results/ad_format/**, **results/mcshane/** - Historical / alternate-format source data used by the conversion scripts in `scripts/`

### How the site uses this package

`package.json` `exports` point at the TypeScript source (`./results` → `src/results.ts`, `./stats` → `src/stats.ts`), so the site's Vite build compiles them and this package never needs building for it. The site processes every TG file when it builds, so a change to a TG file or to the processing reaches the site in the same PR, and a TG file with errors fails the site's build. Keep the modules the site imports free of Node builtins at the top level (see `readFile`).

### Downstream sync

The repo root's `.github/workflows/sync-downstream.yml` runs on every push to `main` that touches this package. It regenerates `results/ad_format/` and opens (or updates) a PR on the `sync/bumps-results-tools` branch of johnwalley/bumps-results that copies in `results/tg_format/` and `results/ad_format/` verbatim. No PR is opened when nothing changed. It needs the `DOWNSTREAM_REPOS_TOKEN` secret, a fine-grained PAT with Contents and Pull requests write on johnwalley/bumps-results.

## TG Format

The text-based input format for results:

```
Set,May Bumps
Short,Mays
Gender,Men
Year,2024

Division,Ca,L,M,K,E,Pb,J,...
Division,HH,TH,F,Cr,...

Results
rrurrru uuro3uurruur...
```

Result codes (processed bottom-up, starting from sandwich boat):

- `r` - rowover (no change)
- `u` - bump up
- `o3` - overbump by 3 places
- `e-2` - exact move down 2 places
- `t` - skip division
- `x` - crew withdrawn
- `w3` - washing machine of 3 crews
