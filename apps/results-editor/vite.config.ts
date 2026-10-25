import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defaultClientConditions, defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// The TG files the editor lists, through bumps-results-tools/tg-files.
// Ends in a slash so that file names can be appended directly.
const TG_DIR = fileURLToPath(
  new URL(
    "../../packages/bumps-results-tools/results/tg_format/",
    import.meta.url,
  ),
);

const TG_ID = /^[a-z]+[0-9]{4}(?:\.[0-9]+)?_(?:men|women)$/;

// PUT /tg-files/<id> writes the request body to results/tg_format/<id>.txt.
// With `If-None-Match: *` it only creates a file, so saving a new one never
// overwrites one that exists (412). It runs after Vite's own middlewares, so
// their host check and CORS policy keep other sites from reaching it.
function saveTgFiles(): Plugin {
  return {
    name: "save-tg-files",
    apply: "serve",
    configureServer(server) {
      // Vite only watches this app's folder, so without this a new TG file
      // wouldn't join the editor's list until the dev server restarts.
      server.watcher.add(TG_DIR);

      return () => {
        server.middlewares.use("/tg-files/", async (req, res, next) => {
          const id = decodeURIComponent(req.url?.slice(1) ?? "");

          if (req.method !== "PUT" || !TG_ID.test(id)) {
            return next();
          }

          const chunks: Buffer[] = [];

          for await (const chunk of req) {
            chunks.push(chunk);
          }

          try {
            await writeFile(`${TG_DIR}${id}.txt`, Buffer.concat(chunks), {
              flag: req.headers["if-none-match"] === "*" ? "wx" : "w",
            });
            res.statusCode = 204;
            res.end();
          } catch (e) {
            const exists = (e as NodeJS.ErrnoException).code === "EEXIST";
            res.statusCode = exists ? 412 : 500;
            res.end(exists ? `${id}.txt already exists` : String(e));
          }
        });
      };
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), saveTgFiles()],
  // Resolves the chart (and its blades) to their src/, so they need no build
  resolve: { conditions: [...defaultClientConditions, "rowing-source"] },
});
