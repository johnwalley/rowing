# CLAUDE.md

A Next.js 16 (pages router) + React 19 + Tailwind 3 site for finding and downloading each club's blade as an SVG. Live at https://svg-rowing-blades.mulberryhousesoftware.com/.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter svg-rowing-blades <script>`.

```bash
pnpm dev          # Generate the SVGs, then start the dev server at localhost:3000
pnpm build        # Generate the SVGs, then type-check and build to ./.next/ (CI runs this)
pnpm start        # Serve the production build
pnpm typecheck    # Type-check only (next typegen writes next-env.d.ts first)
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

The blades come from `react-rowing-blades`' `dist/`, so build it first (`pnpm --filter react-rowing-blades build`, or `pnpm -r build`).

## How it works

- `pages/index.tsx` lists every club in `clubs` from `react-rowing-blades`, with a search over their short names.
- `pages/club/[club].tsx` shows one blade and its full name, with a Download button that links to `/images/<club>.svg`.
- `scripts/generate-svg-files.mjs` renders each blade at 500px into `public/images/`. `dev` and `build` run it first. The folder is gitignored, so the downloads always match the workspace's blades: don't commit SVGs.

A blade added to `react-rowing-blades` shows up here with no change to this app.
