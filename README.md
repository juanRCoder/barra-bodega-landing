# Astro landing template

Astro 7 + Tailwind 4, with SEO already set up (meta, Open Graph, JSON-LD, sitemap, robots.txt).

## When you clone it

1. **`src/config/site.ts`**: fill in every `TODO` (name, domain, title, description, contact, services, social links).
2. **Images to replace** (keep the same name and size):
   - `public/og-image.jpg`: 1200×630, the image shown when the link is shared
   - `public/favicon.ico` (48×48), `public/favicon-96.png` (96×96), `public/apple-touch-icon.png` (180×180)
   - `src/assets/logo.webp` and `src/assets/hero.webp`
3. `pnpm build` and check `dist/index.html`, `dist/robots.txt` and `dist/sitemap-index.xml`.

## Commands

| Command        | Action                            |
| :------------- | :-------------------------------- |
| `pnpm install` | Install dependencies              |
| `pnpm dev`     | Dev server at `localhost:4321`    |
| `pnpm build`   | Build to `./dist/` (with sitemap) |
| `pnpm preview` | Preview the build                 |
