import {
  defaultClientConditions,
  defaultServerConditions,
  defineConfig,
} from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // Blades' src/, through its `rowing-source` export condition, so the
    // tests, Storybook and the build need no blades build first
    conditions: [...defaultClientConditions, "rowing-source"],
    alias: {
      "@/components": resolve(__dirname, "./src/components"),
      "@/utils": resolve(__dirname, "./src/utils"),
    },
  },
  // The tests run in the server environment
  ssr: {
    resolve: { conditions: [...defaultServerConditions, "rowing-source"] },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        pdf: resolve(__dirname, "src/pdf.ts"),
      },
      formats: ["es"],
      // Keep the stylesheet at dist/index.css, where consumers import it from
      cssFileName: "index",
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@react-pdf/renderer",
      ],
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ["stories/**/*.stories.tsx", "test/**"],
      insertTypesEntry: true,
      // Node16/NodeNext resolution needs file extensions on relative imports in
      // ESM declarations. Every relative import in src points at a file, not a
      // directory index, so appending .js is enough (attw in CI checks this)
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(
          /((?:from|import\()\s*['"])(\.{1,2}\/[^'"]+?)(?<!\.js)(['"])/g,
          "$1$2.js$3",
        ),
      }),
    }),
  ],
});
