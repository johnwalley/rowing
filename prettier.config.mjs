/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      files: "apps/cambridgebumps.com/**",
      options: {
        plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
        // Tailwind v4: point the class-sorting plugin at the stylesheet that imports Tailwind.
        tailwindStylesheet: "./apps/cambridgebumps.com/src/styles/globals.css",
      },
    },
  ],
};

export default config;
