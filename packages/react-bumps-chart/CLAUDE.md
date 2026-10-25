# CLAUDE.md

## Project Overview

React Bumps Chart is a React library for rendering rowing bumps charts - specialized visualizations used in Oxford and Cambridge university rowing events. The library visualizes crew positions and movements over multi-day racing events, supporting both SVG rendering and PDF export.

## Commands

- `pnpm run storybook` - Start Storybook dev server (port 6006) for development
- `pnpm run build` - Compile TypeScript and build with Vite (outputs to `dist/`); always in production mode, whatever `NODE_ENV` says
- `pnpm run check-exports` - Check the packed package's types resolve for Node16 and bundlers with arethetypeswrong (needs a build first)
- `pnpm test` - Run Vitest tests (`test/`, in Node; a file that needs a DOM starts with `// @vitest-environment jsdom`, like `measure-text.client.test.tsx`); `pnpm exec vitest run test/calculate-join.test.ts` for one file, `-u` to update snapshots
- `pnpm run build-storybook` - Build static Storybook

Tests snapshot the pure `src/utils` layout functions against the event fixtures in `stories/*.json`. The workspace CI (the repo root's `.github/workflows/ci.yml`) runs `tsc` (in the build), tests, build and `check-exports` on every PR. Releases go through Changesets; see the root `CLAUDE.md`. No linting is configured.

## Architecture

### Main Components

**BumpsChart** - Single event chart (SVG)

- Props: `data: Event`, `blades?: boolean`, `spoons?: boolean`, `measureText?: MeasureText`, `progress?: number`
- Renders crew trajectories as polylines showing position changes across racing days. `progress` (in days) replays the racing: lines are clipped to it (`calculate-tracks.ts` gives each crew's path, for the dot at its head) and the finishing order is hidden until the end

**BumpsChartMultiYear** - Multiple consecutive years (SVG)

- Props: `data: Event[]`, `blades?: boolean`, `measureText?: MeasureText`
- Handles year labels, coordinate alignment, and visual connections between years

**PDF Components** (`src/components/pdf/`) - Parallel components using `@react-pdf/renderer` for PDF export

**Entry points** - `src/index.ts` (`react-bumps-chart`) exports the SVG components; `src/pdf.ts` (`react-bumps-chart/pdf`) exports the PDF ones. Both export the `Event`/`Crew` types and `*Props` types. Anything public must be exported from these files

### Directory Structure

```
src/
├── components/          # React SVG components
│   ├── blades/         # Rowing blade icons
│   ├── crews/          # Crew name labels
│   ├── division/       # Main chart (polylines, positions)
│   ├── numbers/        # Position numbers
│   ├── stripes/        # Background patterns
│   └── pdf/            # React-PDF versions of above
├── utils/              # Pure calculation functions
│   ├── layout-chart.ts         # Positions every part of a single-event chart
│   ├── layout-chart-multi-year.ts  # Same for consecutive events
│   ├── calculate-divisions.ts  # Core trajectory algorithm
│   ├── measure-text.ts         # SVG text measurement + useMeasureText hook
│   ├── get-string-width.ts     # DOM text measurement (cached)
│   └── ...
└── types.ts            # TypeScript interfaces (Event, Crew)

stories/                # Storybook stories with test data
```

### Key Patterns

- **Namespace pattern for Props**: Components use TypeScript namespaces (e.g., `BumpsChart.Props`)
- **CSS Modules**: Component-scoped styling with `.module.css` files
- **Path aliases**: `@/components` and `@/utils` configured in Vite/TypeScript
- **Shared layout**: SVG and PDF components only render. All positions come from `layoutChart` / `layoutChartMultiYear`, which take a `measureText` function: `useMeasureText()` for SVG (the `measureText` prop if given, on the server and in the browser, with chart text unkerned to match; otherwise estimates on the server, then the DOM after mount in the font the chart's text is drawn in, re-measured when fonts load) and `measurePdfText` (Helvetica metrics) for PDF. Change layout there, not in components
- **Memoization**: `get-string-width.ts` caches DOM measurements (cleared when web fonts load), `useMemo` for layouts
- **Coordinate system**: Canvas-based positioning with scale factor (default: 16)

### Core Data Types

The `Event` interface represents a racing event with properties like `set` (event name), `days`, `crews`, and position data. The `Crew` interface tracks individual boat data including `start`/`end` positions, `gain`, `withdrawn` status, and `blades` highlighting.

### Build Configuration

- **Vite** with SWC compiler, outputting ES modules only
- **TypeScript** strict mode enabled
- **Two entries** (`index`, `pdf`) mapped in package.json `exports`; CSS is emitted at `dist/index.css`, which consumers import directly
- **External dependencies**: React/React-DOM and `@react-pdf/renderer` not bundled. `@react-pdf/renderer` is an optional peer dependency, so the main entry must never import it
- Declarations generated via `vite-plugin-dts`

## Dependencies

Key external libraries:

- `@react-pdf/renderer` - PDF generation
- `d3-*` packages - Data manipulation and scaling
- `react-rowing-blades` - Boat blade SVG icons
