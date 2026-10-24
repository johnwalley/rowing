---
name: run
description: Launch an app in this repo to see a change in it: the bumps site (Cambridge or Oxford), the results editor, the coxing site, the SVG blades site, or the chart's or blades' Storybook.
---

# Run an app

Run each dev server in the background and read its ready line for the URL: when its default port is taken, it picks the next one.

| To see | Command, from the repo root | Default URL |
|---|---|---|
| The Cambridge site: Lents, Mays, Town | `pnpm --filter cambridgebumps.com dev` | http://localhost:4321 |
| The Oxford site: Torpids, Eights | `pnpm --filter cambridgebumps.com dev:oxford` | http://localhost:4321 |
| The results editor | `pnpm --filter results-editor dev` | http://localhost:5173 |
| The coxing site | `pnpm --filter coxing-recordings dev` | http://localhost:4321 |
| The SVG blades site | `pnpm --filter svg-rowing-blades dev` | http://localhost:3000 |
| The chart in Storybook | `pnpm --filter react-bumps-chart storybook` | http://localhost:6006 |
| The blades in Storybook | `pnpm --filter react-rowing-blades storybook` | http://localhost:6006 |

## The libraries come from `dist/`

The bumps site, the editor and the SVG blades site read blades and the chart from their `dist/`, so they show a library change only after it's rebuilt:

- **Before the first run**, or after pulling library changes: `pnpm --filter react-bumps-chart... build`. It builds blades, then the chart.
- **While changing the chart**: run `pnpm --filter react-bumps-chart exec vite build --watch` in the background beside the site or the editor, and reload the page after each rebuild.

The tools need no build. The site and the editor compile their TypeScript source, and both reload on a TG file change.

## Pages worth opening on the bumps site

- `/charts/<event>/<gender>/<year>`: one year's chart, e.g. `/charts/mays/men/2025`. Add `?club=<name>&blades=true&spoons=true` to try the highlights.
- `/multi-year-charts/<event>/<gender>`: every year, fetched from `/data/results/<event>/<gender>.json`.
- `/statistics/<event>/<gender>`, `/clubs`, `/clubs/<slug>`.

`<event>` is `lents`, `mays` or `town` on the Cambridge site, and `torpids` or `eights` on the Oxford site. `<gender>` is `men` or `women`.

## The production build

`astro dev` serves the redirects, but `astro preview` doesn't: the Vercel adapter turns off Astro's redirect pages. To check a production build, run `pnpm --filter cambridgebumps.com build` (or `build:oxford`) and then `preview`, and test redirects in the PR's Vercel preview.
