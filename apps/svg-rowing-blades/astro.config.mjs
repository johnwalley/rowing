// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://svg-rowing-blades.mulberryhousesoftware.com",
  output: "static",
  adapter: vercel(),
  // Renders the blades at build time; no page hydrates a React component.
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
