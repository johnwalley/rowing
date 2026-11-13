# CLAUDE.md

## Project Overview

A website showcasing coxswain recordings from rowing competitions. Built with Astro, React, and Tailwind CSS. Live at www.coxing.co.uk.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter coxing-recordings <script>`.

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Serve ./dist/ as Cloudflare will (wrangler dev, localhost:8787); build first
pnpm typecheck    # Type-check (astro check: .astro, .ts and .tsx)
```

## Architecture

**Content Collections**: Recordings are stored as JSON files in `src/content/recordings/`. `src/content.config.ts` loads them with a `glob` loader and validates them with a Zod schema with fields: id, name, year, description, cox, videoId (the 11-character YouTube video ID, from which `Recordings.tsx` builds the embed URL).

**Page Flow**: `src/pages/index.astro` fetches all recordings via `getCollection('recordings')` and passes them to the `Recordings.tsx` React component with `client:load` hydration.

**Recordings Component**: The main interactive component at `src/components/Recordings.tsx` implements search filtering. It renders all recordings but uses CSS to hide non-matching ones (rather than removing from DOM), so a playing video doesn't reload when the search changes. Each card shows the video's thumbnail from `i.ytimg.com` and swaps in the YouTube player (`youtube-nocookie.com`, autoplaying) only when the thumbnail is clicked, so the page loads no YouTube player until a video is played.

## Deploying

The site is an assets-only Cloudflare Worker (`wrangler.jsonc`): Cloudflare serves `dist/` with no Worker script. Workers Builds deploys `main` and uploads a preview version for every other branch, building with `pnpm --filter coxing-recordings run build` from this folder. `public/_headers` caches `/_astro/*` for a year as immutable; `public/robots.txt` and the sitemap are plain static files.

## Adding New Recordings

Create a JSON file in `src/content/recordings/` following the schema:

```json
{
  "id": "unique-slug",
  "name": "Event Name",
  "year": "2024",
  "description": "Event details",
  "cox": "Coxswain Name",
  "videoId": "BOxYoHi0ugA"
}
```
