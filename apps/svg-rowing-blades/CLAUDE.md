# CLAUDE.md

An Astro + Tailwind 4 site for finding and downloading each club's blade as an SVG. Live at https://svg-rowing-blades.mulberryhousesoftware.com/.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter svg-rowing-blades <script>`.

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build to ./dist/ (CI runs this)
pnpm preview      # Preview the production build
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
