# CLAUDE.md

## Project Overview

Tools for manipulating bumps rowing results data (Cambridge Bumps, Oxford Summer Eights, Torpids, Town Bumps). The bumps site in `apps/cambridgebumps.com` builds its results and statistics with this package's code. Related repositories: [bumps-results](https://github.com/johnwalley/bumps-results) (gets this package's TG and AD files; see Downstream sync), [d3-bumps-chart](https://github.com/johnwalley/d3-bumps-chart).

`GLOSSARY.md` defines the results terms: Set, Event, Crew, Position, Headship, Blades. Use them in code, tests and docs. An Event is one results file, not a year.

The package is Node (24+) + TypeScript. Scripts run via `tsx`; tests use Vitest. The package has no UI and nothing to bundle: its build only type-checks, with `tsgo` (`@typescript/native-preview`). The editor for TG files is `apps/results-editor`.

## Commands

```bash
# Type-check (src via tsconfig.json, scripts via tsconfig.scripts.json); build does the same
pnpm run typecheck

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
  - `readFile(path?)` - Reads a TG format file via `node:fs` (or stdin when `path` is omitted) and returns the same shape as `readEvent`. Node builtins are imported lazily inside the function because `bumps.ts` is also bundled into the results editor — keep it that way
  - `processResults(event, debug?)` - Computes crew movements, blades, gains from result codes. Returns `{ event, errors }`; on error it stops and returns the partially processed event. Unrecognised result codes are errors. Problems are returned, never logged — `console.log` is only for `debug` tracing
  - `stepOn(event)` - Generates next year's starting positions from current results
  - `writeString(event)` - Serializes an `Event` back to TG format

- **types.ts** - Zod schemas and TypeScript types for `Event`, `Crew`, and `Statistics`

- **abbreviations.ts** - Club abbreviation mappings per event set: Cambridge colleges (`ccol`), Oxford colleges (`ocol`), Town clubs (`cra`), plus `sets` (short → long name) and a `roman` numeral table

- **clubs.ts** - The one list of clubs: each club's slug, full name, the name the results use, its city, and any `formerly` (renames, mergers, other spellings) and `joint` (combined crews) names, plus `unlisted` (names that deliberately have no club). `clubOf(event, name)` is the club a results name belongs to. The statistics credit a former name's crews to its club, and the bumps site builds a page for each club, so 1st and 3rd counts 1st, 2nd and 3rd Trinity's headships in both. Safe for the browser: it imports nothing. The site imports it as `bumps-results-tools/clubs`

- **clubs.test.ts** - Checks `clubs.ts` against the results: a name that raced in five or more years (or in an event's latest year) needs a club or an `unlisted` entry, every listed name must have raced, a name is only one club's own in an event, and slugs are unique per city. So after adding a new year, a new or renamed club needs an entry in `clubs.ts`

- **results.ts** - `events`: every TG file in `results/tg_format/`, parsed and processed, in file name order. Importing it throws, listing every file's errors, if any file has one. It bundles the files with `import.meta.glob`, so it works only under Vite (the bumps site, the results editor, Vitest), not in `tsx` scripts. The site imports it as `bumps-results-tools/results`

- **tg-files.ts** - `resultFiles`: every TG file in `results/tg_format/` with its set, gender and year, and a `load()` that fetches its text lazily (one chunk per file), so the results editor can list them all without bundling them. Vite only, like `results.ts`. The editor imports it as `bumps-results-tools/tg-files`

- **crews.ts** - `crewResults(event)`: every crew's result in a race (start, positions after each day, finish, gain, blades, spoons, head), worked out once per race. `headOf(event)` is the one headship rule: the best-placed 1st boat that didn't withdraw, in a complete event not flagged `skip_headship`. Blades and spoons count only in complete events. The statistics and the club histories are both built on these

- **stats.ts** - `getRankings(events)`: the statistics pages' tables for one event and category (headships, crewsEntered, headDays, headLong, bladesAwarded), from complete events only, each crew counting for its club (`clubOf`). Days at head are counted per club, from the crew at head after each day's racing, so a run carries on across years and between a club's former names. Ties keep the order the clubs first raced in. `Rankings` and `Statistic` type the tables. The site imports it as `bumps-results-tools/stats`

- **club-history.ts** - `getClubHistory(club, events)`: a club's races under all its names, by event and category, with each crew's chart `line` (a rename carries a line on; a merged club keeps its own). `getSectionRecords` works out a section's records (headships, blades, spoons, highest finish, biggest rises and falls, latest crews), `isCurrent` whether the club still races. The site's club pages import it as `bumps-results-tools/club-history`

- **utils.ts** - `range`, shared by core and scripts

- **bumps.test.ts** - Vitest suite for the core library

- **results.test.ts** - Parses and processes every file in `results/tg_format/`, fails on any error (so a typo in new results data breaks CI), and compares a per-crew summary (daily moves, gain, blades, withdrawn) against `src/__snapshots__/results/<file>`. When a data edit or processor change is meant to alter results, run `pnpm vitest run -u` and review the snapshot diff. New TG files need their snapshot committed, because CI won't write missing snapshots

- **stats.test.ts**, **club-history.test.ts** - Snapshot the statistics tables (`src/__snapshots__/stats/<event>_<gender>.txt`) and what each club page shows (`src/__snapshots__/clubs/<city>/<slug>.txt`), and check the headship rule and the club crediting. A results change moves these snapshots too (the latest year's crews are on every club page), so `pnpm vitest run -u` after a data edit and review what moved

### Scripts (`scripts/`)

- **process_tg_file.ts** - Filter: reads TG from stdin (or a path), runs `processResults`, writes JSON to stdout and errors to stderr (exit 1 on error)
- **step_on_tg_file.ts** - Reads TG from stdin (or a path) and writes next year's starting order as TG to stdout (`stepOn` + `writeString`, as the results editor's "Generate next years starting positions"); exit 1 on error
- **convert_rssbc_to_tg.ts** - Converts the historical RSSBC JSON (under `results/rssbc/`) to TG format
- **download_rssbc_results.ts** - Fetches RSSBC API data into `results/rssbc/`
- **convert_tg_to_ad.ts** - Writes `results/ad_format/` from the TG files (`pnpm run generate:ad`), one AD file per TG file (`mays1848.1_men.txt` → `m1848.1m.txt`). It exits non-zero if two TG files would map to the same AD name, and deletes AD files that no longer have a TG source. The AD files are committed, and CI fails if they don't match what this script produces, so rerun it after editing TG data
- **convert_ad_to_tg.js**, **normalize_ad.js**, **normalize.js** - Legacy converters for the Anu Dudhia (`ad`) format
- **data/** - Cached RSSBC raw text dumps used by the converters

### Results Data

- **results/tg_format/** - Canonical source results in TG format (text files, ~1050 files spanning Eights, Lents, Mays, Torpids, Town from the 1800s onward). To add or correct results, use the `add-results` skill (`.claude/skills/add-results/SKILL.md` at the repo root): it runs the steps the tests, snapshots, `clubs.ts` and AD files need
- **results/rssbc/**, **results/dudhia/**, **results/dudhia_per_crew/**, **results/ad_format/**, **results/mcshane/** - Historical / alternate-format source data used by the conversion scripts in `scripts/`

### How the site uses this package

`package.json` `exports` point at the TypeScript source (`./bumps`, `./club-history`, `./clubs`, `./results`, `./stats`, `./tg-files` and `./types`, each `src/<name>.ts`), so the site's and the results editor's Vite builds compile them and this package never needs building for them. The site processes every TG file when it builds, so a change to a TG file or to the processing reaches the site in the same PR, and a TG file with errors fails the site's build. Keep the modules the site and the editor import free of Node builtins at the top level (see `readFile`).

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
