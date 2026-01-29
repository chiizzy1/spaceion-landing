"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Grid Parallax Effect based on scroll (Subtle)
    lenis.on("scroll", (e: any) => {
      const grid = document.querySelector(".grid-bg") as HTMLElement;
      if (grid) {
        grid.style.backgroundPosition = `0px ${e.scrollY * 0.5}px`;
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
