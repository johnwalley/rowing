# CLAUDE.md

## Overview

This is an Astro application that displays bumps charts, statistics, and historical data for Cambridge and Oxford rowing races. Pages are Astro components; the interactive parts are React islands, styled with Tailwind CSS and Radix UI components.

The application serves two different sites from a single codebase:

- **cambridgebumps.com** - Cambridge rowing events (Lents, Mays, Town)
- **oxfordbumps.com** - Oxford rowing events (Eights, Torpids)

Configuration is controlled via environment variables in `.env.cambridge` and `.env.oxford` files.

## Development Commands

```bash
# Development server (http://localhost:4321)
pnpm dev

# Development server serving the Oxford configuration
pnpm dev:oxford

# Production build (writes to dist/)
pnpm build
pnpm build:oxford

# Serve the built site locally
pnpm preview

# Lint code
pnpm lint

# Type-check (astro check: .astro, .ts and .tsx)
pnpm typecheck

# Regenerate the chart font's character widths (also runs automatically on prebuild)
pnpm gen:chart-font-metrics

```

`pnpm build` runs a `prebuild` hook that regenerates `src/data/chart-font-metrics.json` (`scripts/generate-chart-font-metrics.mjs`) first.

## Environment Configuration

`SITE` selects which checked-in env file is read (`cambridge` by default, i.e. `.env.cambridge`; `SITE=oxford` reads `.env.oxford`). Both define:

- `PUBLIC_TITLE` — "Cambridge" or "Oxford"; drives the site name throughout
- `PUBLIC_BASE_URL` — the canonical origin
- `PUBLIC_GOOGLE_ANALYTICS_TAG` — the GA measurement ID

`astro.config.mjs` reads them (via `scripts/site-env.mjs`) and injects them into both server and client bundles with `vite.define`, so `import.meta.env.PUBLIC_*` works everywhere — see `src/config/site.ts`.

Variables set in the real environment (Workers Builds variables, a shell export) always beat the checked-in files. The Next.js-era names (`NEXT_PUBLIC_TITLE`, `BASE_URL`, `NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG`) are still read as fallbacks so an existing deployment keeps working.

## Architecture

### Routes

`src/pages` maps directly to URLs:

- `/` — `src/pages/index.astro`
- `/charts/[event]/[gender]/[year]` — single-year bumps charts, from `charts/[event]/[gender]/[year]/[...race].astro`. A year with two races (the Mays to 1886) has a page for each: the first at the year, the second at `/charts/mays/men/[year]/2` (the `[...race]` rest parameter). Link to a race with `raceChartPath` (`src/data/results.ts`), or `chartPath` (`src/lib/utils.ts`) in an island
- `/multi-year-charts/[event]/[gender]` — multi-year bumps charts
- `/statistics/[event]/[gender]` — statistics overview
- `/statistics/[event]/[gender]/[statistic]` — individual statistics pages
- `/clubs` — index of the site's own city's clubs
- `/clubs/[club]` — a club's bumps history across its city's events
- `/about` — `src/pages/about.mdx`, bumps racing explanation. Copy that suits only one city goes in `<ForSite site="Cambridge">` (`src/components/ForSite.astro`)
- `/vocabulary` — rowing terminology
- `src/pages/404.astro` — the not-found page (`noindex`, no canonical)
- `/robots.txt`, `/sitemap.xml` — endpoints (`src/pages/robots.txt.ts`, `sitemap.xml.ts`)
- `/data/results/[event]/[gender].json` — the results feed the multi-year charts fetch

**Route Parameters:**

- `[event]` - One of: `eights`, `torpids`, `lents`, `mays`, `town`
- `[gender]` - Either `men` or `women`
- `[year]` - Historical year (e.g. `2025`, `1887`)

### Static output

The site is a **fully static build** (`output: "static"`): `pnpm build` emits HTML/JS to `dist/` with no server at runtime. Cloudflare serves `dist/` as an assets-only Worker (`wrangler.jsonc`, no Worker script). `astro.config.mjs` sets `build.format: "directory"` (`charts/mays/men/2025/index.html`), and the Worker's `html_handling: "drop-trailing-slash"` serves that at the extensionless `/charts/mays/men/2025` the site has always used, redirecting `/charts/mays/men/2025/` there. `not_found_handling: "404-page"` serves `404.html` for any other path.

- Every dynamic route lists its pages in `getStaticPaths()`
- Results data is processed from the tools' TG files at build time (see Data Organization)
- The per-event/gender summary of available years is **derived in code** at build time (the `summary` export in `src/data/results.ts`), so it can never drift from the underlying results

### Islands

Pages are static HTML by default. React components render to HTML too unless given a `client:*` directive; the hydrated ones are:

- `SiteHeader` (`src/components/site-header.tsx`) — the whole header is one island: main nav, mobile sheet, theme toggle, and the `useRememberEvent` hook that stores the visitor's last event/gender
- `ChartsShell` / `MultiYearChartsShell` — the chart pages' controls plus the chart itself
- `StatisticsNav` — the event/category/statistic pickers
- `BumpsChartsCta` — the home page CTA, whose href depends on the stored preference

Everything else (statistics tables, blades, photos, prose) is rendered at build time and ships no JavaScript. React components used without a directive — `<Blade>` from `react-rowing-blades`, for instance — are server-rendered inside `.astro` files.

### Configuration Files

- `astro.config.mjs` — integrations, redirects (and the inline integration that writes `dist/_redirects`), site URL, env injection
- `wrangler.jsonc` — the Cloudflare Worker: Cambridge is `cambridgebumps`, Oxford is the `oxford` env (`oxfordbumps`). Workers Builds builds both from this folder with `pnpm --filter cambridgebumps.com... --filter '!bumps-results-tools' run build` (which builds blades and the chart first; the tools need no build, since the site imports their source), Oxford with `SITE=oxford`, then runs `wrangler deploy` (Oxford: `--env oxford`)
- `public/_headers` — response headers: `/_astro/*` immutable, and the `/data/results` cache policy. Don't put redirects here or in `public/_redirects`: the build writes `dist/_redirects`
- `src/config/site.ts` - Site metadata (name, description, social links) read from `import.meta.env`
- `src/config/docs.ts` - Navigation structure defining main nav and sidebar items

### Data Organization

The site has no results data of its own. `src/data/results.ts` imports `bumps-results-tools/results`, which parses and processes every TG file in `packages/bumps-results-tools/results/tg_format/` when the site builds (and when `astro dev` starts), and groups the races by event and category. `src/data/stats.ts` runs the tools' `getRankings` over them for the statistics pages. So a results fix is one PR to the TG files, its preview shows it, and a TG file with errors fails the build. Results are fixed in the tools' TG files.

```
src/data/
├── results.ts                 (`results[event][gender]`: the tools' `ProcessedEvent`s, which are also the chart's `Event`; derives the `summary` of years)
├── stats.ts                   (`statisticRows(event, gender, statistic)`: a statistics table's rows, typed)
├── statistic-mapping.ts       (each statistic's labels and fields, keyed by the tools' `Statistic`, and the `statistics` in page order; safe for islands, unlike `stats.ts`)
├── clubs.ts                   (the tools' club list, plus `clubPageUrl`)
└── chart-font-metrics.json    (generated, committed — Roboto Flex character widths)
```

`results.ts` and `stats.ts` hold every race, so only pages, layouts and other server code may import them. An island that imports them, even indirectly, ships the results to the browser. Pages hand islands just what they need as props: the chart pages work out their "Highlight club" choices from the results themselves.

A single year's results are small, so a chart page passes them straight to its island. A whole event's results are megabytes, so the multi-year charts instead fetch `/data/results/[event]/[gender].json`, generated by `src/pages/data/results/[event]/[gender].json.ts`. The multi-year chart renders only in the browser, so nothing is lost by fetching. The single-year chart is rendered at build time.

Both routes pass each race through `slimRace` (`src/lib/slim-results.ts`) before it reaches the browser. It drops every crew's `highlight` (the island recomputes it from the selected club) and leaves out `blades` and `withdrawn` when they are false; every other field passes through. So in the browser `highlight` from the results is never there, and those two flags are `undefined` rather than `false`: test them for truthiness, never `=== false`.

Both size their crew-name columns with `measureChartText` (`src/lib/measure-text.ts`), so the build and the browser lay a chart out identically and it never changes shape on hydration.

**Club pages.** The tools' `src/clubs.ts` lists every club with a page (see that package's `CLAUDE.md`); `src/data/clubs.ts` re-exports it. Each site builds pages only for its own city's clubs. A college's page covers its city's college events (Lents and Mays, or Torpids and Eights); a town club sets `events: ["town"]`. The tools' `src/club-history.ts` works out a club's races and records (see that package's `CLAUDE.md`); `src/lib/club-history.ts` caches each club's history for the build and re-exports the rest. A former name that never shares a race with another of the club's names is a rename, so its crews carry on the club's lines in the chart. Headships use the tools' `headOf`, the statistics pages' rule too. The tools' `clubs.test.ts` fails when the club list and the results disagree, so **after adding a new year**, a new club or a renamed one needs an entry in the tools' `clubs.ts`. `clubPageUrl` (in `clubs.ts`, safe for islands) turns a results name into its club page — a full URL on the other city's site — and links the statistics tables (`ClubName.astro`) and the charts' highlighted club to it.

### Key Components

Most components are named for what they do. The ones whose names don't say enough:

- `src/layouts/BaseLayout.astro` - `<head>` metadata, theme script, header, Google Analytics, and the `history-on-tap` install
- `src/components/bumps-chart.tsx` - wraps the `react-bumps-chart` library; `multi-year-bumps-chart.tsx` fetches its own data
- `src/components/multi-year-chart-guides.tsx` - the year strip (each year linking to its chart) and crew names pinned over a multi-year chart as it scrolls, placed from the library's `layoutChartMultiYear`. They're drawn one pixel per chart unit, like the chart, so they need the chart drawn at that size
- `src/components/ClubPositionChart.astro` - a club page's finishing-positions chart (static SVG, no JS)
- `src/components/ui/` - shadcn/ui components (Radix UI primitives)

### Utilities

What the site knows about each event (its names, its city, whether colleges or town clubs race in it, and whether its men's category is called "Open") comes from the tools' list of Sets, `bumps-results-tools/sets` (safe for islands). Change an event there, not here: the event helpers in `src/lib/utils.ts` (names, category labels, `eventsIn(city)`, `getEventContext()`), `src/config/site.ts`'s event order and `scripts/redirects.mjs` are all worked out from it.

`raceTitle()` (`src/lib/utils.ts`) gives a race's name as its chart page's heading, tab title and correction email show it ("May Bumps 1838 (March race)"); `raceNeighbours()` in `src/data/results.ts` gives the races either side of a chart page, for its previous/next arrows.

`src/lib/theme.ts` holds the light/dark logic that `next-themes` used to provide. The class is applied before first paint by an inline script in `BaseLayout.astro`; the storage key (`theme`) and values (`light`/`dark`/`system`) are unchanged, so returning visitors keep their choice.

### Client-Side Features

Charts support URL search parameters:

- `?club=<clubname>` - Highlights a specific club in the chart
- `?blades=true` - Shows blades (awarded for bumping up every day of the event, or finishing head of the river)
- `?spoons=true` - Shows spoons (awarded for being bumped down every day of the event)
- `?from=<year>&to=<year>` - Multi-year charts only: limits the chart to that span of years (`yearRange` in `src/components/year-range-controls.tsx`). With neither, the chart shows the last 20 years; with only one, the other end is the event's first or last year, so every year is `?from=<first year>`

`src/hooks/use-chart-params.ts` owns them: the shell reads the query string after mount and updates it with `history.replaceState`, so toggling a highlight re-renders the chart without a page load or a new history entry. Links that change event/gender/year carry the current query string along (`withParams`).

**Safari skips pushed history entries.** Safari's back button and swipe skip an entry added by `history.pushState` more than ten seconds after the last tap, and the page before it too, so one such entry sends Back off the site. Chrome and Edge on iOS (WebKit too) skip one added any time after the tap itself. On iOS a native `<select>` changes its value from the system picker with no user gesture, so a change handler must not push an entry: view options use `replaceState`, and the year select loads the page fully (`location.assign`) instead of calling the router's `navigate()`. Page loads and `replaceState` are never skipped.

`<ClientRouter />` pushes its entry only after the new page has arrived, so every link would hit this. `src/lib/history-on-tap.ts`, installed in `BaseLayout.astro`, pushes the entry at the tap instead and turns the router's later push into a `replaceState`. It leans on the router's internals (`astro:before-preparation`, its `loader`); check it still works after upgrading Astro, and remove it once the router pushes before fetching ([withastro/astro#18377](https://github.com/withastro/astro/issues/18377)).

On a single-year chart page the ← and → keys step to the previous and next race, as the arrows beside the heading do, unless focus is in a field or a control that uses the arrows itself (the year strip, the category tabs and radios, the club picker).

### SEO

- `src/pages/robots.txt.ts` → `/robots.txt`. It turns AI crawlers away from the whole site and keeps every other crawler off URLs with a query string: the club pages link to about 11,000 `?club=` chart URLs, the same pages as their canonical URLs, and crawling them multiplied the CDN requests. Add a new AI crawler to its `AI_CRAWLERS`
- `src/pages/sitemap.xml.ts` → `/sitemap.xml`, enumerating every chart, multi-year and statistics page
- `BaseLayout.astro` renders title/description/canonical/Open Graph/Twitter tags; pages pass what they need. Chart pages pre-generated for a year with no results yet set `noindex`.
- Google Analytics via `src/components/GoogleAnalytics.astro` in the base layout

### Fonts

- Geist Sans and Geist Mono self-hosted from `public/fonts/`, declared in `src/styles/globals.css`
- Roboto Flex via `@fontsource-variable/roboto-flex` (latin subset, GRAD axis) for bumps chart rendering. `scripts/generate-chart-font-metrics.mjs` reads its character widths from that same woff2 into `src/data/chart-font-metrics.json`; `measureChartText` passes them to react-bumps-chart as its `measureText`, which the chart uses on the server and in the browser alike. The chart draws unkerned (react-bumps-chart sets `font-kerning: none`), so a name's width is the sum of its characters'. If the chart font changes, change the script's font file with it

## Redirects and the "latest year" default

Redirects are defined once in `scripts/redirects.mjs`. `astro.config.mjs` passes them to Astro's `redirects` (via `buildAstroRedirects`, which expands the `:event`/`:gender` patterns into concrete paths). `astro dev` serves them. The build writes the same rules to `dist/_redirects` (`buildCloudflareRedirects`), which Cloudflare serves as real HTTP redirects; `build.redirects: false` stops Astro writing meta-refresh pages for them. `pnpm preview` (`wrangler dev`) serves a build exactly as Cloudflare will, redirects included.

The default chart year (e.g. the target of `/charts`, `/charts/:event`, `/charts/:event/:gender`) is derived at build time from the latest year among each event/gender's TG file names (`mays2025_men.txt`, read with the tools' `parseTgFileName`), since `astro.config.mjs` runs before Vite can process the results — never hand-edited, and nothing to regenerate.

> [!IMPORTANT]
> **After adding a new year's results**: the results go into `packages/bumps-results-tools/results/tg_format/`, and the site picks them up in the same PR, `astro dev` included. Follow the `add-results` skill: it covers the tools' tests, snapshots, `clubs.ts` and AD files.
