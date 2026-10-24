# CLAUDE.md

A pnpm workspace for rowing: two published React libraries for bumps charts, the bumps results data pipeline and a local editor for it, the bumps site behind cambridgebumps.com and oxfordbumps.com, and the coxing site behind coxing.co.uk.

| Package | What it is | |
|---|---|---|
| `packages/react-rowing-blades` | SVG blades for each club | published to npm |
| `packages/react-bumps-chart` | The bumps chart (SVG and PDF); uses blades | published to npm |
| `packages/bumps-results-tools` | TG-format results, and the code that processes them and works out the statistics | private |
| `apps/cambridgebumps.com` | The bumps site (Astro); one codebase, two Vercel projects (Cambridge and Oxford) | private |
| `apps/results-editor` | A local Vite app for editing TG files beside a live chart. Not deployed | private |
| `apps/coxing-recordings` | The coxing site (Astro): a searchable list of coxswain recordings. Uses none of the other packages | private |

Read the `CLAUDE.md` in the package you're changing: the chart, the tools, the editor and both sites each have one.

## How the packages connect

- The chart depends on blades, and the bumps site on both, through `workspace:^`. Each library's `exports` lists a `rowing-source` condition first, pointing at `src/`. The chart, the site and the editor turn it on (Vite's `resolve.conditions`, TypeScript's `customConditions`), so inside the workspace they compile the libraries' source: nothing needs building first, and a library change hot-reloads in the site's `dev` script. npm users never set the condition, so they get `dist/`. Because consumers compile it with their own config, library source follows the rules in the chart's `CLAUDE.md` (Imports in `src/`).
- The bumps site builds its results data from the tools' TG files. It imports `bumps-results-tools/results` (every TG file, parsed and processed), `/stats`, `/club-history` and `/clubs` (the one list of clubs, used by the statistics and the club pages alike), which point at the tools' TypeScript source, so the tools need no build. A results fix is one PR to the TG files, and its preview shows the change on the site. On every push to `main` that changes `packages/bumps-results-tools/**`, the Sync downstream workflow opens a PR in `johnwalley/bumps-results` with the TG and AD files.
- The results editor depends on the tools and the chart the same way, through their source: the tools' `/bumps`, `/tg-files` and `/types`, and the chart through `rowing-source`.
- Each package keeps its own Prettier, TypeScript and Vite config.

## Workspace rules

- **pnpm 11**, pinned by `packageManager` in the root `package.json` and again in each app's. Vercel builds from the app's folder and reads the pin there. CI checks they all match, so change them together.
- **React comes from the catalog** in `pnpm-workspace.yaml`, so every package gets one copy. In the libraries `catalog:` belongs in `devDependencies`; their `peerDependencies` stay ranges (`^18.0.0 || ^19.0.0`), because `pnpm publish` would write the catalog's exact version into the published package.
- **Every change goes through a PR.** A ruleset on `main` requires CI's `check` job, which runs formatting, the build, the tests, the chart's `check-exports`, the bumps site's lint and typecheck, and the tools' AD-format check.

## Releasing the libraries

Releases use Changesets. A PR that changes `react-rowing-blades` or `react-bumps-chart` in a way their users would notice adds a changeset (`pnpm changeset`); the private packages never get one.

On `main`, `.github/workflows/release.yml` keeps a "Version Packages" PR open. Merging it publishes the new versions to npm through trusted publishing (no token), creates `<package>@<version>` tags and GitHub releases. npm can take a minute to serve a new version after the job succeeds. Publish only through that workflow: it runs `changeset publish`, which calls `pnpm publish`, which replaces `workspace:^` with a real version range.

## Deploying the sites

The two bumps Vercel projects build `apps/cambridgebumps.com` with the build command in its `vercel.json`, the site's own `build` script: the site compiles the libraries' and the tools' source, so nothing else is built first. The coxing project builds `apps/coxing-recordings` with Vercel's Astro defaults. A merge to `main` deploys all three; a PR gets a preview of each.
