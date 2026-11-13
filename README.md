# rowing

Code for rowing websites and libraries, in one pnpm workspace: the bumps charts and results behind [cambridgebumps.com](https://www.cambridgebumps.com) and [oxfordbumps.com](https://www.oxfordbumps.com), the coxswain recordings at [coxing.co.uk](https://www.coxing.co.uk), and SVG rowing blades for every club.

## What's here

| Package                                                        | What it is                                                                  |
| -------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`packages/react-rowing-blades`](packages/react-rowing-blades) | React components drawing each club's blades as SVG. On npm                  |
| [`packages/react-bumps-chart`](packages/react-bumps-chart)     | React bumps charts, as SVG or PDF. On npm                                   |
| [`packages/bumps-results-tools`](packages/bumps-results-tools) | The bumps results in TG format, and the code that processes them into stats |
| [`apps/cambridgebumps.com`](apps/cambridgebumps.com)           | The bumps site (Astro), deployed as both Cambridge and Oxford               |
| [`apps/results-editor`](apps/results-editor)                   | A local app for editing results files beside a live chart                   |
| [`apps/coxing-recordings`](apps/coxing-recordings)             | The coxing site (Astro): a searchable list of coxswain recordings           |
| [`apps/svg-rowing-blades`](apps/svg-rowing-blades)             | The blades site (Astro): every blade, to search and download as an SVG      |

The chart uses the blades, and the bumps site uses the chart, the blades and the results. Each package's README says more.

## Getting started

You need Node 24 or later and pnpm 11. `corepack enable` gives you the pinned pnpm version.

```bash
pnpm install
pnpm build   # builds every package, libraries first
pnpm test
```

The sites read the libraries from their built `dist/`, so build before running one. Then, for example:

```bash
pnpm --filter cambridgebumps.com dev          # the Cambridge site
pnpm --filter cambridgebumps.com dev:oxford   # the Oxford site
pnpm --filter results-editor dev              # the results editor
pnpm --filter coxing-recordings dev
pnpm --filter svg-rowing-blades dev
pnpm --filter react-bumps-chart storybook
```

To work on the chart and see it in the site, rebuild it as you go:

```bash
pnpm --filter react-bumps-chart exec vite build --watch
```

## Results

The results live as TG-format text files in [`packages/bumps-results-tools/results/tg_format`](packages/bumps-results-tools/results/tg_format). The bumps site builds its charts and statistics straight from them, so a results fix is a change to those files and nothing else. The [glossary](packages/bumps-results-tools/GLOSSARY.md) defines the terms. Changes to the results are copied to [johnwalley/bumps-results](https://github.com/johnwalley/bumps-results) automatically.

## Contributing

Every change goes through a pull request. Before opening one, run:

```bash
pnpm check
```

It runs what CI runs: formatting, the build, the tests, lint and type checks. `pnpm format` fixes the formatting.

If you change `react-rowing-blades` or `react-bumps-chart` in a way their users would notice, add a changeset with `pnpm changeset`. Releases to npm happen when the "Version Packages" PR is merged.

## Deployment

The four sites deploy to Cloudflare, as assets-only Workers built by Workers Builds. A merge to `main` deploys them, and every PR gets a preview of each.
