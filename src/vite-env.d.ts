/// <reference types="vite/client" />

declare global {
  interface Window {
    scrollSmoother: ScrollSmoother;
    preload: GSAP.core.Timeline;
    // exportRoot: GSAP.core.Timeline;
    heroTl: GSAP.core.Timeline;
  }
}
