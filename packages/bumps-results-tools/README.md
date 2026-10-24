# Bumps Results Tools

![](https://github.com/johnwalley/bumps-results-tools/workflows/Node%20CI/badge.svg)

Tools for manipulating bumps results data.

Canonicial results data can be found at the [bumps-results](https://github.com/johnwalley/bumps-results) repository.

Use these tools to convert between formats and generate data suitable for use by [d3-bumps-chart](https://github.com/johnwalley/d3-bumps-chart) and [react-bumps-chart](https://github.com/johnwalley/react-bumps-chart). These tools are used to produce the data and charts found at [Cambridge Bumps](https://www.cambridgebumps.com).

## 🛠️ Setup

Requires Node 24+ and [pnpm](https://pnpm.io) (`corepack enable` will provide the pinned version).

```shell
pnpm install
```

Run the tests with:

```shell
pnpm test
```

## 📈 Editing results

The editor for TG files, with a live chart, is in `apps/results-editor`:

```shell
pnpm --filter results-editor dev
```

## 🗂️ Results on the website

The bumps site in `apps/cambridgebumps.com` builds its results and statistics
straight from the TG-format sources under `results/tg_format/`, using
`src/results.ts` and `src/stats.ts`, so there's nothing to regenerate or copy.
Every push to `main` also opens a PR in [bumps-results](https://github.com/johnwalley/bumps-results)
with the TG and AD files (see `.github/workflows/sync-downstream.yml`).
