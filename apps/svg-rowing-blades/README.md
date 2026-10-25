# svg-rowing-blades

Find and download SVG images of rowing club blades. Running live at https://svg-rowing-blades.mulberryhousesoftware.com/

The blades come from [`react-rowing-blades`](../../packages/react-rowing-blades). The site is built with Astro, which renders every blade to a page and an SVG at build time.

## Getting Started

This site lives in the [rowing](https://github.com/johnwalley/rowing) pnpm workspace. From the repo root:

```bash
pnpm install
pnpm --filter react-rowing-blades build   # the site reads the blades from its dist/
pnpm --filter svg-rowing-blades dev       # dev server at localhost:4321
pnpm --filter svg-rowing-blades build     # production build to ./dist/
```
