# CLAUDE.md

## Project Overview

A website showcasing coxswain recordings from rowing competitions. Built with Astro, React, and Tailwind CSS. Live at www.coxing.co.uk.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter coxing-recordings <script>`.

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

## Architecture

**Content Collections**: Recordings are stored as JSON files in `src/content/recordings/`. `src/content.config.ts` loads them with a `glob` loader and validates them with a Zod schema with fields: id, name, year, description, cox, videoId (the 11-character YouTube video ID, from which `Recordings.tsx` builds the embed URL).

**Page Flow**: `src/pages/index.astro` fetches all recordings via `getCollection('recordings')` and passes them to the `Recordings.tsx` React component with `client:load` hydration.

**Recordings Component**: The main interactive component at `src/components/Recordings.tsx` implements search filtering. It renders all recordings but uses CSS to hide non-matching ones (rather than removing from DOM), so a playing video doesn't reload when the search changes. Each card shows the video's thumbnail from `i.ytimg.com` and swaps in the YouTube player (`youtube-nocookie.com`, autoplaying) only when the thumbnail is clicked, so the page loads no YouTube player until a video is played.

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
