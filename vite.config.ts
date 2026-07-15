// @lovable.dev/vite-tanstack-config include gia i plugin necessari.
// Non aggiungere nuovamente i plugin TanStack, React, Tailwind o Cloudflare.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/",
  vite: {
    build: {
      rollupOptions: {
        // Modulo integrato di Cloudflare Workers: viene risolto dal runtime,
        // quindi Rollup non deve cercarlo tra le dipendenze npm.
        external: ["cloudflare:workers"],
      },
    },
  },
});
