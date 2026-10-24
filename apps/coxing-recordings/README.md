# Coxing Recordings

Website for www.coxing.co.uk - a curated collection of coxswain recordings from prestigious rowing competitions around the world.

## About

This site showcases audio and video recordings from coxswains during competitive rowing races. Coxswains are responsible for steering the boat and motivating the crew, and these recordings provide insight into race strategy, calls, and the intensity of competitive rowing.

The collection includes recordings from:
- Henley Royal Regatta
- World Rowing Championships
- BUCS Regattas
- Metropolitan Regatta
- Head of the River Race
- And other international competitions

Each recording features detailed information about the race, year, competing crews, and the coxswain.

## Tech Stack

Built with modern web technologies:
- **Astro** - Static site generator
- **React** - UI components
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Zod** - Content schema validation

## Getting Started

This site lives in the [rowing](https://github.com/johnwalley/rowing) pnpm workspace. From the repo root:

```bash
pnpm install
pnpm --filter coxing-recordings dev     # dev server at localhost:4321
pnpm --filter coxing-recordings build   # production build to ./dist/
```

To add a recording, add a JSON file to `src/content/recordings/`; `src/content/config.ts` has the schema.
