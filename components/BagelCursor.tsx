"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BagelCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 280, damping: 28, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 280, damping: 28, mass: 0.5 });

  // Only active while the hero (first viewport) is visible
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onScroll = () => {
      // Switch back to normal cursor once user scrolls past the hero section
      setOnHero(window.scrollY < window.innerHeight * 0.85);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Hide default cursor only while on the hero */}
      {onHero && <style>{`* { cursor: none !important; }`}</style>}

      <motion.div
        animate={{ opacity: onHero ? 1 : 0, scale: onHero ? 1 : 0.5 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 108 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="cf" cx="50%" cy="40%" r="54%">
              <stop offset="0%" stopColor="#D9BB94" />
              <stop offset="100%" stopColor="#B5906A" />
            </radialGradient>
            <radialGradient id="ch" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F7F4EF" />
              <stop offset="100%" stopColor="#EAE6DE" />
            </radialGradient>
            <filter id="cs" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#3D2D22" floodOpacity="0.22" />
            </filter>
          </defs>
          <circle cx="54" cy="54" r="48" fill="url(#cf)" filter="url(#cs)" />
          <circle cx="54" cy="54" r="22" fill="url(#ch)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 37;
            const cx = 54 + r * Math.sin(rad);
            const cy = 54 - r * Math.cos(rad);
            return (
              <ellipse
                key={i}
                cx={cx} cy={cy}
                rx="2.4" ry="3.8"
                fill="#8B6835" opacity={0.7}
                transform={`rotate(${deg} ${cx} ${cy})`}
              />
            );
          })}
          <path
            d="M 24 40 Q 54 20 84 40"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
}
