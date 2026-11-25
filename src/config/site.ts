export const site = {
  name: "BarraBodega",
  url: "https://barrabodega.lat",
  type: "Organization",
  lang: "es-PE",
  locale: "es_PE",

  // --- SEO copy -------------------------------------------------------------
  title: "BarraBodega · Tu bodega en orden, sin cuaderno",
  description:
    "BarraBodega es la app para tiendas de barrio en Perú: escanea productos, registra ventas, controla fiados y sabe cuánto ganaste hoy. Prueba gratis 1 mes.",
  ogImage: "/og-image.jpg",
  logo: "/logo.png",
  ogImageAlt: "BarraBodega: tu bodega en orden, sin cuaderno. Prueba gratis 1 mes.",

  // --- Brand ----------------------------------------------------------------
  themeColor: "#0B1A14",

  // --- Contact (NAP: keep identical to your Google Business Profile) -------
  email: "", // TODO: contacto@dominio.com
  telephone: "51956402456",
  whatsapp: "51956402456",
  whatsappMessage: "Hola, quiero probar BarraBodega gratis por 1 mes en mi bodega.",
  address: {
    street: "",
    city: "Lima",
    region: "",
    postalCode: "",
    country: "PE",
  },
  areaServed: ["Perú"] as string[],

  // --- Services shown in JSON-LD -------------------------------------------
  services: [
    "App de ventas e inventario para bodegas",
    "Control de fiados",
    "Escáner de códigos de barras",
  ] as string[],

  // --- Social profiles (empty ones are skipped) -----------------------------
  social: {
    instagram: "", // TODO
    facebook: "", // TODO
    tiktok: "", // TODO
    linkedin: "", // TODO
  },
};
