// Animaciones de entrada y ligadas al scroll de toda la landing.
import { M, EASE_OUT } from "./motion";

const root = document.documentElement;

if (!M || root.classList.contains("motion-off")) {
  root.classList.add("motion-off");
} else {
  root.classList.add("motion-ready");
  const { animate, inView, scroll, stagger } = M;
  const spring = { type: "spring", bounce: 0.25, duration: 0.9 } as const;
  const isMobile = window.innerWidth < 640;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const hero = document.getElementById("hero");

  // Hero: el fondo entra con zoom y el titular palabra por palabra.
  animate(
    "#hero-bg img",
    { scale: [1.18, 1.04], opacity: [0, 1] },
    { duration: 1.8, ease: EASE_OUT },
  );
  animate(
    "[data-word]",
    { y: ["110%", "0%"] },
    { ...spring, bounce: 0.2, delay: stagger(0.07, { startDelay: 0.2 }) },
  );
  animate(
    "[data-hero]",
    { opacity: [0, 1], y: [24, 0] },
    { ...spring, delay: stagger(0.1, { startDelay: 0.65 }) },
  );
  animate("#scroll-cue", { opacity: [0, 1] }, { duration: 0.8, delay: 1.4 });

  // Hero ligado al scroll: parallax del fondo y el texto se desvanece al salir.
  if (hero) {
    const heroRange = {
      target: hero,
      offset: ["start start", "end start"],
    } as const;
    scroll(
      animate("#hero-bg", { y: [0, isMobile ? 60 : 140] }, { ease: "linear" }),
      heroRange,
    );
    scroll(
      animate(
        "#hero-content",
        { y: [0, isMobile ? -30 : -80], opacity: [1, 0.15] },
        { ease: "linear" },
      ),
      heroRange,
    );
  }

  // Barra de progreso de lectura.
  scroll(animate("#progress", { scaleX: [0, 1] }, { ease: "linear" }));

  // Grupos que aparecen hijo por hijo.
  inView(
    "[data-stagger]",
    (group) => {
      animate(
        [...group.children],
        { opacity: [0, 1], y: [32, 0] },
        { ...spring, delay: stagger(0.09) },
      );
    },
    { margin: "0px 0px -12% 0px" },
  );

  // Elementos sueltos con su propia entrada.
  const entrances = {
    left: { opacity: [0, 1], x: [-60, 0], rotate: [-2, 0] },
    right: { opacity: [0, 1], x: [60, 0], rotate: [2, 0] },
    scale: { opacity: [0, 1], scale: [0.9, 1], y: [30, 0] },
    pop: { opacity: [0, 1], scale: [0.3, 1] },
    up: { opacity: [0, 1], y: [32, 0] },
  };
  type Entrance = keyof typeof entrances;
  inView(
    "[data-reveal]",
    (el) => {
      const type = ((el as HTMLElement).dataset.reveal || "up") as Entrance;
      animate(el, entrances[type] ?? entrances.up, {
        ...spring,
        bounce: type === "pop" ? 0.55 : 0.25,
        delay: type === "pop" ? 0.35 : 0,
      });
    },
    { margin: "0px 0px -12% 0px" },
  );

  // Video: crece mientras entra en pantalla.
  const videoFrame = document.getElementById("video-frame");
  if (videoFrame) {
    scroll(
      animate(
        videoFrame,
        { scale: [0.86, 1], y: [40, 0], borderRadius: ["44px", "28px"] },
        { ease: "linear" },
      ),
      { target: videoFrame, offset: ["start end", "center center"] },
    );
  }

  // Fotos del antes/después y de los pasos con parallax sutil.
  if (!isMobile) {
    document
      .querySelectorAll<HTMLElement>("[data-parallax]")
      .forEach((img) =>
        scroll(animate(img, { y: [-14, 14] }, { ease: "linear" }), {
          target: img.parentElement!,
          offset: ["start end", "end start"],
        }),
      );
  }

  // CTA: el escáner flota levemente con el scroll.
  const cta = document.getElementById("cta");
  if (cta) {
    scroll(
      animate("#scanner", { y: [40, -30], rotate: [3, -1] }, { ease: "linear" }),
      { target: cta, offset: ["start end", "end start"] },
    );
  }

  // Botones magnéticos (solo con mouse).
  if (finePointer) {
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("pointermove", (event) => {
        const rect = btn.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.35;
        animate(btn, { x, y }, { type: "spring", bounce: 0.3, duration: 0.4 });
      });
      btn.addEventListener("pointerleave", () =>
        animate(
          btn,
          { x: 0, y: 0 },
          { type: "spring", bounce: 0.5, duration: 0.7 },
        ),
      );
    });
  }
}
