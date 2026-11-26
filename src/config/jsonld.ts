// ┌───────────────                 ─┬───────────────────────────────────────────────────────────────────────┐
// │     Nicho                       │                                 @type                                 │
// ├────────────────                 ┼───────────────────────────────────────────────────────────────────────┤
// │ Clínica dental                  │ Dentist                                                               │
// ├────────────────                 ┼───────────────────────────────────────────────────────────────────────┤
// │ Restaurante                     │ Restaurant (o CafeOrCoffeeShop, FastFoodRestaurant, Bakery, BarOrPub) │
// ├────────────────                 ┼───────────────────────────────────────────────────────────────────────┤
// │ Gimnasio                        │ ExerciseGym                                                           │
// ├────────────────                 ┼───────────────────────────────────────────────────────────────────────┤
// │ Inmobiliaria                    │ RealEstateAgent                                                       │
// ├─────────────────────────────────┼─────────────────────                                                  ┤
// │ SaaS que se usa en el navegador │ WebApplication                                                        │
// ├─────────────────────────────────┼─────────────────────                                                  ┤
// │ App de celular (Android o iOS)  │ MobileApplication                                                     │
// ├─────────────────────────────────┼─────────────────────                                                  ┤
// │ Programa de escritorio o mixto  │ SoftwareApplication                                                   │
// ├─────────────────────────────────┼─────────────────────                                                  ┤
// │ Juego                           │ VideoGame                                                             │
// └─────────────────────────────────┴───────────────────────────────────────────────────────────────────────┘

// Dos cosas que ayudan aunque sea una sección de videos:
// - El texto alrededor del video: el título y la descripción de la sección, con palabras clave como "cómo vender con BarraBodega", ayudan a posicionar la página.
// - YouTube: si quieres que el tutorial aparezca en búsquedas de video, súbelo ahí. Puedes incrustarlo en la landing o dejar tu archivo .mp4 y poner el enlace en la descripción de YouTube.

/*
 * ─── NEGOCIO LOCAL (plantilla) ───────────────────────────────────────────────
 */
export const localBusiness = {
  "@type": "LocalBusiness", // o subtipo: 'Dentist', 'Restaurant', 'ExerciseGym'...
  "@id": "https://barrabodega.lat/#localbusiness", // id único para enlazarlo desde otros objetos
  // --- Imprescindibles --------------------------------------------------------
  name: "BarraBodega", // igual al de tu Google Business Profile
  url: "https://barrabodega.lat/",
  telephone: "+51956402456",
  logo: "https://barrabodega.lat/logo-1200.png",
  image: "https://barrabodega.lat/logo-1200.png",
  address: {
    "@type": "PostalAddress",
    // streetAddress: 'Av. Ejemplo 123',
    addressLocality: "Comas", // ciudad o distrito
    addressRegion: "Lima", // región
    addressCountry: "PE", // código ISO del país
  },
  areaServed: { "@type": "City", name: "Lima" },
  // geo: {
  //   '@type': 'GeoCoordinates',
  //   latitude: -12.0464, // EJEMPLO: clic derecho en Google Maps
  //   longitude: -77.0428,
  // },
  // openingHoursSpecification: [
  //   {
  //     '@type': 'OpeningHoursSpecification',
  //     dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //     opens: '09:00', // EJEMPLO
  //     closes: '18:00',
  //   },
  // ],
  // hasMap: 'https://maps.google.com/?cid=000000', // EJEMPLO: ficha de Google Maps
  // sameAs: [
  //   'https://www.tiktok.com/@ejemplo', // EJEMPLO: redes sociales
  //   'https://www.instagram.com/ejemplo',
  // ],
  // email: 'contacto@ejemplo.com',
  // --- Servicios · OPCIÓN A: hasOfferCatalog --------------------------------
  // Úsala cuando todos los servicios están en UNA sola página y basta con el
  // nombre (y precio opcional). Va DENTRO del negocio.
  // Si usas esta opción, no repitas los mismos servicios en la OPCIÓN B.
  // Solo servicios reales. Si es software, sus funciones NO van aquí, van en
  // featureList de la app.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soporte por WhatsApp",
        },
      },
    ],
  },
};

/*
 * ─── APP ─────────────────────────────────────────────────────────────────────
 * El producto. Aquí van sus FUNCIONALIDADES (featureList) y sus planes (offers).
 */
export const app = {
  "@type": "MobileApplication", // WebApplication si es SaaS en el navegador
  "@id": "https://barrabodega.lat/#app",
  name: "BarraBodega",
  description:
    "App para tiendas de barrio en Perú: ventas, inventario y fiados.",
  url: "https://barrabodega.lat/",
  image: "https://barrabodega.lat/logo-1200.png",
  operatingSystem: "Android",
  applicationCategory: "BusinessApplication",
  inLanguage: "es-PE",
  featureList: [
    "Escáner de códigos de barras",
    "Registro de ventas",
    "Control de inventario",
    "Clientes y fiados ilimitados",
    "Ventas del día, semana y mes",
    "Historial de ventas",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Plan Mensual",
      price: "40.00",
      priceCurrency: "PEN",
    },
    {
      "@type": "Offer",
      name: "Plan Anual",
      price: "400.00",
      priceCurrency: "PEN",
    },
  ],
  publisher: { "@id": "https://barrabodega.lat/#localbusiness" },
};

/*
 * ─── WEBISTE ─────────────────────────────────────────────────────────────────────
 */
export const website = {
  "@type": "WebSite",
  "@id": "https://barrabodega.lat/#website", // id único
  name: "BarraBodega", // nombre que Google muestra en vez de la URL
  alternateName: ["Barra Bodega", "barrabodega"], // otras formas de escribirlo
  url: "https://barrabodega.lat/", // la home, con barra final
  inLanguage: "es-PE", // idioma del sitio
  publisher: { "@id": "https://barrabodega.lat/#localbusiness" }, // enlaza al negocio por su @id
};
/*
 * ─── WEBPAGE ─────────────────────────────────────────────────────────────────
 * primaryImageOfPage: imagen que preferimos como miniatura en Google.
 * og:image (SEO.astro) sigue siendo la del banner para Discord/WhatsApp.
 */
export const webpage = {
  "@type": "WebPage",
  "@id": "https://barrabodega.lat/#webpage",
  url: "https://barrabodega.lat/",
  name: "BarraBodega | App para bodegas: ventas, fiados e inventario",
  inLanguage: "es-PE",
  isPartOf: { "@id": "https://barrabodega.lat/#website" },
  about: { "@id": "https://barrabodega.lat/#app" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://barrabodega.lat/logo-1200.png",
    width: 1200,
    height: 1200,
  },
};

/*
 * ─── BREADCRUMBLIST ──────────────────────────────────────────────────────────
 * Ruta de navegación que Google muestra en el resultado en vez de la URL:
 *   barrabodega.lat › Video
 * Va en cada página interna (no en la home), con un item por nivel.
 */
export const breadcrumblist = {
  "@type": "BreadcrumbList",
  "@id": "https://barrabodega.lat/video/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1, // orden, empieza en 1
      name: "Inicio", // texto que se muestra
      item: "https://barrabodega.lat/", // URL absoluta
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ortodoncia", // la página actual (último nivel)
      item: "https://barrabodega.lat/ortodoncia/", // en el último nivel es opcional
    },
  ],
};

/*
 * ─── SERVICIOS · OPCIÓN B: Service suelto ───────────────────────────────────
 * Úsala cuando cada servicio tiene SU PROPIA página (/ortodoncia/,
 * /implantes/...) o necesitas detallarlo.
 *
 * Para agregar otro servicio, copia un bloque { ... } del array y cambia sus
 * datos (sobre todo @id y url, que deben ser únicos).
 *
 * Uso en el @graph de la página de cada servicio (solo el suyo):
 *   const ortodoncia = services.find((s) => s.url.endsWith("/ortodoncia/"));
 *   "@graph": [localBusiness, website, ortodoncia]
 */
export const services = {
  "@type": "Service",
  "@id": "https://barrabodega.lat/ortodoncia/#service", // EJEMPLO: id único por servicio
  name: "Ortodoncia", // EJEMPLO: nombre del servicio
  serviceType: "Tratamiento dental", // EJEMPLO: categoría general
  description: "Brackets metálicos y estéticos con evaluación gratuita.", // EJEMPLO
  provider: { "@id": "https://barrabodega.lat/#localbusiness" }, // quién lo ofrece
  areaServed: { "@type": "City", name: "Lima" }, // dónde se ofrece
  url: "https://barrabodega.lat/ortodoncia/", // EJEMPLO: la página del servicio
  offers: {
    "@type": "Offer",
    price: "1500.00", // EJEMPLO: sin símbolo, con punto decimal
    priceCurrency: "PEN", // código ISO de la moneda
  },
};
