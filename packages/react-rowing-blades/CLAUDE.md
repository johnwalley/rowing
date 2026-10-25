# CLAUDE.md

A React library of SVG blades, one per club, published to npm. The chart and the bumps site use it.

## Commands

Run these from this folder, or from the repo root with `pnpm --filter react-rowing-blades <script>`.

```bash
pnpm storybook   # Storybook at localhost:6006: every blade, picked by code
pnpm build       # Type-check with tsc, then build to dist/ (the chart and the site read dist/)
```

There are no tests and no lint here: CI checks this package through its build and the repo's Prettier check. Look at a blade in Storybook to check it.

## How it works

Each club has a three-letter code (`pem`, `ftt`, `mag`), its `ClubCode`. Two files hold everything:

- `src/utils.ts`: the codes, split by category (`cambridge`, `oxford`, `uk`, `international`), each in a type union and in the `clubs.<category>` list, and each code's `names`, `shortNames` and `shortShortNames`. The categories also have `abbreviations`: the club abbreviations the results use, mapped to `shortShortNames`.
- `src/components/Blade.tsx`: one `switch` on the code that sets the blade's `fill` and its `decal`, and below it one `const` per decal (SVG in a 500 × 230 box, clipped to the blade's shape). A club whose men's and women's blades differ branches on the optional `gender` prop inside its `case`, and is listed in `genderedClubs` in `src/utils.ts`, which the sites read to show both blades; without the prop it draws the design it drew before the split.

The bumps site finds a crew's blade by matching its results name to `shortShortNames` (`getCode` in `apps/cambridgebumps.com/src/lib/utils.ts`), so that name must be the one the results use.

## Adding or changing a blade

1. Add the code to its category's type union and `clubs` list in `src/utils.ts`, and give it `names`, `shortNames` and `shortShortNames` entries. The `Record` types fail the build's typecheck until all three are there.
2. Add a `case` to `Blade.tsx`'s `switch` and the decal `const`.
3. Check it in Storybook.
4. Add a changeset (`pnpm changeset` at the root): a new or changed blade is a change users see. See the root `CLAUDE.md`.
