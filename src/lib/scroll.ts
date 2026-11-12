import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  lenisInstance = l;
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, { offset: -70, duration: 1.3 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop() {
  if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.5 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
