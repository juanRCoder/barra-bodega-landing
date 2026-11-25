// ============================================================================
// SITE CONFIG — the only file to edit when cloning this template.
// SEO meta, Open Graph, JSON-LD, robots.txt and the sitemap all read from here.
// Fields left as "" are omitted from the JSON-LD automatically.
// ============================================================================

export const site = {
  // --- Identity -------------------------------------------------------------
  name: "Nombre del Negocio", // TODO: business name
  url: "https://example.com", // TODO: production domain, no trailing slash
  // TODO: schema.org type: LocalBusiness, Store, Restaurant, BarOrPub,
  // ProfessionalService, Organization… (https://schema.org/LocalBusiness)
  type: "LocalBusiness",

  // --- Language -------------------------------------------------------------
  lang: "es", // TODO: <html lang>, e.g. "es-PE", "es-AR"
  locale: "es_ES", // TODO: og:locale, e.g. "es_PE", "es_AR"

  // --- SEO copy -------------------------------------------------------------
  // Title: ~50-60 characters, main keyword + business name.
  title: "Nombre del Negocio | Servicio principal en Ciudad", // TODO
  // Description: ~140-160 characters, what you offer + where + call to action.
  description:
    "Descripción breve del negocio: qué ofrece, dónde y por qué elegirlo. Contáctanos hoy.", // TODO

  // --- Social image (public/og-image.jpg, 1200×630) -------------------------
  ogImage: "/og-image.jpg", // TODO: replace the file in /public
  ogImageAlt: "Descripción de la imagen para compartir", // TODO

  // --- Brand ----------------------------------------------------------------
  themeColor: "#000000", // TODO: mobile browser bar color

  // --- Contact (NAP: keep identical to your Google Business Profile) -------
  email: "", // TODO: contacto@dominio.com
  telephone: "", // TODO: international format, e.g. +51999999999
  address: {
    street: "", // TODO
    city: "", // TODO
    region: "", // TODO
    postalCode: "", // TODO
    country: "", // TODO: ISO code, e.g. "PE", "AR"
  },
  areaServed: [] as string[], // TODO: e.g. ["Lima", "Perú"]

  // --- Services shown in JSON-LD -------------------------------------------
  services: [] as string[], // TODO: e.g. ["Servicio 1", "Servicio 2"]

  // --- Social profiles (empty ones are skipped) -----------------------------
  social: {
    instagram: "", // TODO
    facebook: "", // TODO
    tiktok: "", // TODO
    linkedin: "", // TODO
  },
};
