"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      } catch {
        // Lenis not available or not supported, fall back to native scroll
      }
    };

    let cleanupFn: (() => void) | undefined;
    initLenis().then((fn) => {
      cleanupFn = fn;
    });

    return () => {
      cleanupFn?.();
    };
  }, []);

  return <>{children}</>;
}
