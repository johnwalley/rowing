# CLAUDE.md

An Astro + Tailwind 4 site for finding and downloading each club's blade as an SVG. Live at https://svg-rowing-blades.mulberryhousesoftware.com/.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter svg-rowing-blades <script>`.

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build to ./dist/ (CI runs this)
pnpm preview      # Serve ./dist/ as Cloudflare will (wrangler dev, localhost:8787); build first
pnpm typecheck    # Type-check (astro check: .astro and .ts; CI runs this)
```

The blades come from `react-rowing-blades`' `dist/`, so build it first (`pnpm --filter react-rowing-blades build`, or `pnpm -r build`).

## How it works

Every page is rendered at build time. `@astrojs/react` renders the `Blade` components to static SVG, and no page hydrates one, so the site ships no React.

- `src/lib/clubs.ts`: every club in `react-rowing-blades`, with its full and short names.
- `src/pages/index.astro`: the grid of every blade. Its inline script does the search, hiding the cards whose short name doesn't match.
- `src/pages/club/[club].astro`: one page per club, with a Download button that links to `/images/<club>.svg`.
- `src/pages/images/[club].svg.ts`: an endpoint that renders each blade at 500px into `dist/images/`.

A blade added to `react-rowing-blades` gets a card, a page and an SVG with no change to this app.

## Deploying

The site is an assets-only Cloudflare Worker (`wrangler.jsonc`): Cloudflare serves `dist/` with no Worker script. Workers Builds deploys `main` and uploads a preview version for every other branch, building with `pnpm --filter svg-rowing-blades... run build` (which builds blades first) from this folder.

- `html_handling: "drop-trailing-slash"` serves `club/usa/index.html` at `/club/usa`, and redirects `/club/usa/` there.
- `not_found_handling: "404-page"` serves `404.html` with a 404 for any other path.
- `public/_headers` sets the response headers Cloudflare doesn't: `/_astro/*` is cached for a year as immutable.
