// declare global {
//   interface Window {
//     scrollSmoother: ScrollSmoother;
//     preload: GSAP.core.Timeline;
//     // exportRoot: GSAP.core.Timeline;
//     heroTl: GSAP.core.Timeline;
//   }
// }
interface Window {
    scrollSmoother: any; // Or use a more specific type if available
  }
  