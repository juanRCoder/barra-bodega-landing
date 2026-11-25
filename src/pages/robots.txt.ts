import type { APIRoute } from "astro";

// Generated from `site` in astro.config, so the sitemap URL follows the domain in src/config/site.ts.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).href}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
