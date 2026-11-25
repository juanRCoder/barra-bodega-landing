// Contenido de la landing, separado del marcado para editarlo en un solo lugar.
// Las imágenes se importan en cada sección desde src/assets/images (Astro las optimiza).
import { site } from "../config/site";

export const waUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "#antes-despues", label: "Antes y después" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#video", label: "Video" },
  { href: "#precio", label: "Precio" },
  { href: "#preguntas", label: "Preguntas" },
];

export const heroChecks = [
  "Sin tarjeta",
  "Funciona en tu Android",
  "Cancela cuando quieras",
];

export const marqueeItems = [
  "Vende escaneando el código de barras",
  "Fiados con nombre y monto",
  "Aviso de productos por reponer",
  "Ventas del día, semana y mes",
  "Sin comprar ningún equipo",
];

export const compare = {
  before: {
    tag: "Antes",
    title: "Todo a mano y de memoria",
    alt: "Bodeguera preocupada revisando un cuaderno de cuentas",
    items: [
      "Fiados en un cuaderno que se pierde",
      "No sabes cuánto vendiste hasta cerrar",
      "Te enteras tarde de lo que se acabó",
      "Calculadora en cada venta",
    ],
  },
  after: {
    tag: "Con BarraBodega",
    title: "Todo claro, al instante",
    alt: "Bodeguera sonriente mostrando la app BarraBodega en su celular",
    items: [
      "Cada cliente con su cuenta y su deuda",
      "Tus ventas del día al momento",
      "Aviso de productos por reponer",
      "Escaneas y el total sale solo",
    ],
  },
};

export const steps = [
  {
    title: "Registra tus productos",
    text: "Escanea el código, pon el precio y el stock. Se agrega a tu inventario listo para vender.",
    alt: "Bodeguera escaneando el código de barras de una lata con su celular",
  },
  {
    title: "Vende escaneando",
    text: "Pasa los productos por la cámara y el total se calcula solo. ¿Es fiado? Elige al cliente y queda anotado.",
    alt: "Venta en curso escaneando productos con el celular en la bodega",
  },
  {
    title: "Revisa tus números",
    text: "Mira lo que vendiste hoy, quién te debe y qué productos se están acabando.",
    alt: "Resumen de ventas, cobros pendientes y productos por reponer en la app",
  },
];

export const plans = {
  monthly: {
    pill: "Primer mes gratis",
    name: "Plan Mensual",
    amount: 40,
    per: "/ mes",
    note: "Sin tarjeta y sin contrato. Cancela cuando quieras.",
    message:
      "Hola, quiero probar BarraBodega gratis por 1 mes con el plan mensual (S/ 40).",
    alt: {
      label: "¿Prefieres pagar una vez al año?",
      price: "S/ 400",
      per: "/ año",
      tag: "2 meses gratis · S/ 33.33 al mes",
      cta: "Ver plan anual",
    },
  },
  annual: {
    pill: "2 meses gratis",
    name: "Plan Anual",
    amount: 400,
    per: "/ año",
    note: "Equivale a S/ 33.33 al mes. Incluye tu primer mes gratis.",
    message:
      "Hola, quiero probar BarraBodega gratis por 1 mes con el plan anual (S/ 400).",
    alt: {
      label: "¿Prefieres pagar mes a mes?",
      price: "S/ 40",
      per: "/ mes",
      tag: "Sin compromiso anual",
      cta: "Ver plan mensual",
    },
  },
};

export type PlanKey = keyof typeof plans;

export const planFeatures = [
  "Productos ilimitados",
  "Clientes y fiados ilimitados",
  "Escáner de códigos de barras",
  "Ventas del día, semana y mes",
  "Historial de ventas",
  "Soporte por WhatsApp",
];

export const payMethods = ["Yape", "Transferencia bancaria"];

export const faqs = [
  {
    q: "¿Necesito comprar una lectora de códigos?",
    a: "No. BarraBodega usa la cámara de tu celular para leer los códigos de barras de tus productos.",
  },
  {
    q: "¿Funciona en cualquier celular?",
    a: "Por ahora funciona en celulares Android. La versión para iPhone llegará más adelante.",
  },
  {
    q: "¿Qué pasa cuando termina el mes gratis?",
    a: "Te escribimos para confirmar si quieres continuar. Si sigues, eliges el plan mensual (S/ 40) o el anual (S/ 400) y pagas por Yape o transferencia. Si no, no pagas nada.",
  },
  {
    q: "¿Necesito internet?",
    a: "Sí, la app necesita conexión (datos o wifi) para guardar tus ventas y tenerlas siempre disponibles.",
  },
  {
    q: "¿Puedo vender productos que no tienen código?",
    a: "Sí. Pan, queso o cualquier producto suelto se agrega a la venta a mano, con su nombre y precio.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. En el plan mensual no hay contrato ni permanencia: dejas de pagar y listo.",
  },
];

// Anchos de las barras del código de barras del CTA final.
export const barcodeWidths = [
  3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 2, 1, 4, 1, 1, 3, 1, 2, 1,
  4, 2, 1, 1, 3, 1, 2, 1, 1, 4,
];

// Video de lanzamiento (public/videos). Duración en formato ISO 8601 para el JSON-LD.
export const video = {
  src: "/videos/barrabodega-lanzamiento.mp4",
  title: "BarraBodega: así se vende escaneando desde el celular",
  description:
    "Recorrido rápido por BarraBodega: escanea productos, registra ventas y fiados, y revisa tus números del día.",
  uploadDate: "2026-11-23",
  duration: "PT33S",
};
