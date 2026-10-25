---
name: add-results
description: Add or correct bumps results in the TG files (packages/bumps-results-tools/results/tg_format). Use for a new year's racing, a fix to a past race, or a new or renamed club in the results.
---

# Add results

Results live only in the tools' TG files. The site, the statistics, the club pages and the AD files are all worked out from them, so one PR carries the whole change. Terms (Set, Event, Crew, Headship) are as in `packages/bumps-results-tools/GLOSSARY.md`, and the TG format and its result codes are in that package's `CLAUDE.md`.

Run the commands from `packages/bumps-results-tools`.

## 1. Write the TG file

A file is one Event, named `<short><year>_<gender>.txt` in lowercase (`mays2026_men.txt`). A year with several Events of a Set numbers them (`mays1827.1_men.txt`, `mays1827.2_men.txt`).

For a new year, seed it from the last year's file. The script writes next year's starting order, which is the results editor's "Generate next years starting positions":

```bash
pnpm exec tsx scripts/step_on_tg_file.ts results/tg_format/mays2025_men.txt > results/tg_format/mays2026_men.txt
```

Then edit it to match what was raced: add the new entries to the bottom divisions, take out crews that didn't enter, and add one `Results` line per day. Use the club abbreviations the earlier files use (`Pb`, `SC`), with a number for lower crews (`Pb2`).

Done when it processes without errors:

```bash
pnpm exec tsx scripts/process_tg_file.ts results/tg_format/mays2026_men.txt > /dev/null
```

## 2. Make the tests pass

```bash
pnpm test
```

When `clubs.test.ts` fails, a name in the results needs an entry in `src/clubs.ts`:

- a new club: a new `Club`
- a club racing under a new name: the old name goes in its `formerly`
- a combined crew: its `joint`
- a name that deliberately has no page: `unlisted`

Done when the only failures are snapshot mismatches.

## 3. Update the snapshots and account for every change

```bash
pnpm exec vitest run -u
git status --short src/__snapshots__ && git diff --stat src/__snapshots__
```

A new year should change only:

- its own new file under `results/`
- the statistics tables for that Set and gender, under `stats/`
- the club pages of the clubs that raced, under `clubs/`

A fix to a past race moves that race's snapshot and whatever follows from it. Read each diff. A moved snapshot you can't explain from the change (another year's results, the other gender's statistics) means the edit did more than intended: fix the TG file, not the snapshot.

Done when every changed snapshot is explained.

## 4. Regenerate the AD files

```bash
pnpm run generate:ad
```

Commit what it writes under `results/ad_format/`. CI fails when the AD files don't match the TG files.

## 5. Look at the chart

Start the bumps site (the `run` skill: Cambridge for Lents, Mays and Town, Oxford for Torpids and Eights) and open `/charts/<event>/<gender>/<year>`. Check the crews' lines and the blades against the published results.

## 6. Run the whole check

From the repo root, run `pnpm check`. Results are private data, so they don't need a changeset. Merging to `main` deploys both bumps sites and opens the downstream PR in johnwalley/bumps-results.
