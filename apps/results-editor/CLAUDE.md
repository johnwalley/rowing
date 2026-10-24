# CLAUDE.md

A local Vite + React 19 + Tailwind 4 app for editing TG-format results beside a live bumps chart. It isn't deployed anywhere; run it when entering or fixing results.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter results-editor <script>`.

```bash
pnpm dev          # Start the dev server
pnpm build        # Type-check with tsgo, then build to ./dist/ (CI runs this)
pnpm typecheck    # Type-check only
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

The chart comes from `react-bumps-chart`'s `dist/`, so build it first (`pnpm -r build`, or `pnpm --filter react-bumps-chart exec vite build --watch` while changing the chart).

## How it works

`src/App.tsx` is a split-pane editor:

- Left: a `<select>` listing every TG file (grouped by set and gender) and a `<textarea>` for editing its text. Parse and processing errors are listed above it
- Right: a `BumpsChart` that re-renders as the text changes
- "Generate next years starting positions" runs `stepOn` + `writeString` on the loaded event to seed next year's TG text

Everything about results comes from `bumps-results-tools`, through its TypeScript source: `/bumps` (`readEvent`, `processResults`, `stepOn`, `writeString`), `/types` and `/tg-files` (every TG file in the tools' `results/tg_format/`, loaded lazily). So the editor always shows the canonical data and the real processing. Don't copy TG files into this app.
