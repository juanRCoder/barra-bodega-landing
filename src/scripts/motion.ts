// Motion compartido entre secciones. Es null si el usuario pidió reducir el
// movimiento: cada sección cae entonces a su versión sin animación.
import * as Motion from "motion";

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

export const M: typeof Motion | null = reduceMotion ? null : Motion;

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.33, 1, 0.68, 1] as const;
