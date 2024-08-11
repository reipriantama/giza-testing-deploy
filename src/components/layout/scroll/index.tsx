import React from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/src/ScrollSmoother";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

interface ScrollProps {
  children: React.ReactNode;
}

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  useGSAP(() => {
    let smoother: ScrollSmoother | null = null;

    const timer = setTimeout(() => {
      window.scrollSmoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        // normalizeScroll: true,
      });

      // Make the smoother globally accessible
      window.scrollSmoother = smoother;
    }, 3000);
    window.scrollSmoother = window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer);
      if (window.scrollSmoother) {
        window.scrollSmoother.kill();
        window.scrollSmoother = null; // Clean up the global reference
      }
    };
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default Scroll;
