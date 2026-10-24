# CLAUDE.md

A pnpm workspace for rowing: two published React libraries for bumps charts, the bumps results data pipeline and a local editor for it, the bumps site behind cambridgebumps.com and oxfordbumps.com, the coxing site behind coxing.co.uk, and the SVG blades site.

| Package | What it is | |
|---|---|---|
| `packages/react-rowing-blades` | SVG blades for each club | published to npm |
| `packages/react-bumps-chart` | The bumps chart (SVG and PDF); uses blades | published to npm |
| `packages/bumps-results-tools` | TG-format results, and the code that processes them and works out the statistics | private |
| `apps/cambridgebumps.com` | The bumps site (Astro); one codebase, two Vercel projects (Cambridge and Oxford) | private |
| `apps/results-editor` | A local Vite app for editing TG files beside a live chart. Not deployed | private |
| `apps/coxing-recordings` | The coxing site (Astro): a searchable list of coxswain recordings. Uses none of the other packages | private |
| `apps/svg-rowing-blades` | The SVG blades site (Astro): every blade, to search and download as an SVG | private |

Read the `CLAUDE.md` in the package you're changing: every package has one. Results terms (Set, Event, Crew, Headship) are defined in `packages/bumps-results-tools/GLOSSARY.md`.

## How the packages connect

- The chart depends on blades, and the bumps site on both, through `workspace:^`. Their `exports` point at `dist/`, so the site sees a library change only after that library is rebuilt. `pnpm -r build` builds everything in dependency order. To work on the chart and the site together, run `pnpm --filter react-bumps-chart exec vite build --watch` beside the site's `dev` script.
- The bumps site builds its results data from the tools' TG files. It imports `bumps-results-tools/results` (every TG file, parsed and processed), `/stats`, `/club-history` and `/clubs` (the one list of clubs, used by the statistics and the club pages alike), which point at the tools' TypeScript source, so the tools need no build. A results fix is one PR to the TG files, and its preview shows the change on the site. On every push to `main` that changes `packages/bumps-results-tools/**`, the Sync downstream workflow opens a PR in `johnwalley/bumps-results` with the TG and AD files.
- The results editor depends on the tools and the chart the same way: the tools through their source (`/bumps`, `/tg-files`, `/types`), the chart through its `dist/`.
- The SVG blades site depends on blades through its `dist/`, and renders every blade to a page and an SVG when it builds.
- Each package keeps its own Prettier, TypeScript and Vite config.

## Workspace rules

- **pnpm 11**, pinned by `packageManager` in the root `package.json` and again in each app's. Vercel builds from the app's folder and reads the pin there. CI checks they all match, so change them together.
- **React comes from the catalog** in `pnpm-workspace.yaml`, so every package gets one copy. In the libraries `catalog:` belongs in `devDependencies`; their `peerDependencies` stay ranges (`^18.0.0 || ^19.0.0`), because `pnpm publish` would write the catalog's exact version into the published package.
- **Every change goes through a PR.** A ruleset on `main` requires CI's `check` job, which runs `pnpm check` (`scripts/check.sh`): formatting, the build, the tests, the chart's `check-exports`, the bumps site's lint, the three sites' typecheck, and the tools' AD-format check. Run `pnpm check` before opening a PR; when it passes, CI's check does too. Add a step to the script, not to `ci.yml`.

## Releasing the libraries

Releases use Changesets. A PR that changes `react-rowing-blades` or `react-bumps-chart` in a way their users would notice adds a changeset (`pnpm changeset`); the private packages never get one.

On `main`, `.github/workflows/release.yml` keeps a "Version Packages" PR open. Merging it publishes the new versions to npm through trusted publishing (no token), creates `<package>@<version>` tags and GitHub releases. npm can take a minute to serve a new version after the job succeeds. Publish only through that workflow: it runs `changeset publish`, which calls `pnpm publish`, which replaces `workspace:^` with a real version range.

## Deploying the sites

The two bumps Vercel projects build `apps/cambridgebumps.com` with the build command in its `vercel.json`, which builds blades and the chart first (not the tools, whose source the site imports directly). The coxing project builds `apps/coxing-recordings` with Vercel's Astro defaults. The SVG blades project builds `apps/svg-rowing-blades` with the build command in its `vercel.json`, which builds blades first. A merge to `main` deploys all four; a PR gets a preview of each.
