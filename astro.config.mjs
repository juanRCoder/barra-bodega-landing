// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config/site.ts";

const lastmod = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [
    // lastmod: fecha del build, avisa a Google cuándo cambió la página.
    sitemap({ serialize: (item) => ({ ...item, lastmod }) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
