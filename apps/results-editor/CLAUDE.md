# CLAUDE.md

A local Vite + React 19 + Tailwind 4 app for editing TG-format results beside a live bumps chart. It isn't deployed anywhere; run it when entering or fixing results.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter results-editor <script>`.

```bash
pnpm dev          # Start the dev server
pnpm build        # Type-check with tsgo, then build to ./dist/ (CI runs this)
pnpm typecheck    # Type-check only
```

The chart comes from `react-bumps-chart`'s `dist/`, so build it first (`pnpm -r build`, or `pnpm --filter react-bumps-chart exec vite build --watch` while changing the chart).

## How it works

`src/App.tsx` is a split-pane editor:

- Left: a `<select>` listing every TG file (grouped by set and gender) and a `<textarea>` for editing its text. Parse and processing errors are listed above it
- Right: a `BumpsChart` that re-renders as the text changes
- "Save" (or Cmd/Ctrl+S) writes the text back to the file
- "Generate next years starting positions" runs `stepOn` + `writeString` on the loaded event and opens the result as a new file named for the next year (`mays2025_men` → `mays2026_men`). It isn't on disk until it's saved

The open file is in the URL's hash, so a reload keeps it. The editor asks before discarding unsaved changes.

Everything about results comes from `bumps-results-tools`, through its TypeScript source: `/bumps` (`readEvent`, `processResults`, `stepOn`, `writeString`), `/types` and `/tg-files` (every TG file in the tools' `results/tg_format/`, loaded lazily). So the editor always shows the canonical data and the real processing. Don't copy TG files into this app.

### Saving

The `save-tg-files` plugin in `vite.config.ts` gives the dev server `PUT /tg-files/<id>`, which writes `packages/bumps-results-tools/results/tg_format/<id>.txt`. It exists only under `pnpm dev`, not in a build. A new file is saved with `If-None-Match: *`, so it's only created and never overwrites one that exists. The editor shows the 412's "already exists" instead. Don't load a new file's name from disk either, or the next save would overwrite it. The plugin also adds `tg_format/` to Vite's watcher, which only watches this folder otherwise. So a saved new file joins the list, and an edit made elsewhere hot-reloads, keeping any unsaved text in the editor.

Saving a file with errors is allowed, so a half-entered day can be kept. The tools' tests and the site's build still fail on it. After saving results, follow the `add-results` skill from its step 2: the tests, the snapshots, `clubs.ts` and the AD files.
