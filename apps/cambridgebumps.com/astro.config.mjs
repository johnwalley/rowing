// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import { buildAstroRedirects } from "./scripts/redirects.mjs";
import { loadSiteEnv } from "./scripts/site-env.mjs";

// Which site are we building? `cambridge` (default) or `oxford`. The choice
// selects the matching `.env.<site>` file.
const fileEnv = loadSiteEnv(process.cwd());

// A value set in the real environment (e.g. a Vercel project variable) always
// beats the checked-in file. Within each source the Astro-style `PUBLIC_` name
// wins, but the Next.js-era names are still read so an existing deployment
// keeps working untouched.
/** @param {...string} names */
const pick = (...names) =>
  names.map((name) => process.env[name]).find(Boolean) ??
  names.map((name) => fileEnv[name]).find(Boolean);

const TITLE = pick("PUBLIC_TITLE", "NEXT_PUBLIC_TITLE") ?? "Cambridge";
const BASE_URL =
  pick("PUBLIC_BASE_URL", "BASE_URL") ?? "https://www.cambridgebumps.com";
const GOOGLE_ANALYTICS_TAG =
  pick("PUBLIC_GOOGLE_ANALYTICS_TAG", "NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG") ?? "";

// Resolves blades and the chart to their `src/` through the `rowing-source`
// export condition, so the site needs neither built. Added to every Vite
// environment (client, ssr, and Astro's own `prerender` and `astro`), after
// Astro has filled in each one's default conditions.
const workspaceSource = () => ({
  name: "workspace-source",
  /**
   * @param {string} _name
   * @param {{ resolve?: { conditions?: string[] } }} config
   */
  configEnvironment(_name, config) {
    config.resolve ??= {};
    config.resolve.conditions = [
      ...(config.resolve.conditions ?? []),
      "rowing-source",
    ];
  },
});

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  output: "static",
  // The adapter writes `.vercel/output/config.json`, turning `redirects` below
  // into real HTTP redirects computed at build time, so the latest-year
  // defaults can never go stale. It also forces `build.format: "directory"`
  // (`charts/mays/men/2025/index.html`), which Vercel serves at the same
  // extensionless URLs. Response headers it doesn't cover live in
  // `vercel.json`, which Vercel merges into the adapter's routes.
  adapter: vercel(),
  // Defined once in `scripts/redirects.mjs`; also served by `astro dev`.
  redirects: buildAstroRedirects({ title: TITLE }),
  // `BaseLayout.astro` swaps pages in place with `<ClientRouter />`; prefetching
  // on hover means the swap usually has the next page already in cache. The
  // hover strategy is debounced and deduplicated, so sweeping the pointer along
  // the year strip only fetches the year the visitor settles on.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss(), workspaceSource()],
    // The workspace catalog already gives every package one React; this
    // keeps a second copy out of the bundle if that ever slips.
    resolve: { dedupe: ["react", "react-dom"] },
    define: {
      "import.meta.env.PUBLIC_TITLE": JSON.stringify(TITLE),
      "import.meta.env.PUBLIC_BASE_URL": JSON.stringify(BASE_URL),
      "import.meta.env.PUBLIC_GOOGLE_ANALYTICS_TAG":
        JSON.stringify(GOOGLE_ANALYTICS_TAG),
    },
  },
});
