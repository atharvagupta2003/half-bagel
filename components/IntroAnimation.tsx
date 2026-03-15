"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<"show" | "split" | "text" | "exit">("show");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // t0  — bagel fully visible (idle 0.9s)
    const t1 = setTimeout(() => setPhase("split"), 900);
    // t1  — bottom half drops (0.55s animation)
    const t2 = setTimeout(() => setPhase("text"), 1500);
    // t2  — text fades in, hold for ~1.2s
    const t3 = setTimeout(() => setPhase("exit"), 2900);
    // t3  — fade-out (0.65s), then unmount
    const t4 = setTimeout(() => { setVisible(false); onComplete(); }, 3600);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex items-center justify-center select-none"
          style={{ background: "#F5F2EC" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Center lock */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>

            {/* Bagel — two halves stacked, clipped */}
            <div style={{ position: "relative", width: 108, height: 108 }}>

              {/* Top half — stays put */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{
                  overflow: "hidden",
                  height: 54,
                  width: 108,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <BagelSVG size={108} />
              </motion.div>

              {/* Bottom half — drops away */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={
                  phase === "split" || phase === "text" || phase === "exit"
                    ? {
                        y: 260,
                        opacity: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.34, 1.4, 0.64, 1],   // spring-ish bounce
                        },
                      }
                    : { y: 0, opacity: 1 }
                }
                style={{
                  overflow: "hidden",
                  height: 54,
                  width: 108,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Render full SVG but offset up by 54px so only the bottom shows */}
                <div style={{ marginTop: -54 }}>
                  <BagelSVG size={108} />
                </div>
              </motion.div>
            </div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={
                phase === "text" || phase === "exit"
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  color: "#131111",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Half Bagel
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  color: "#C4A47C",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: 5,
                }}
              >
                An extension of your brand
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Full Bagel SVG — drawn at arbitrary size ─────────────── */
function BagelSVG({ size = 108 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="bs" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#3D2D22" floodOpacity="0.16" />
        </filter>
        <radialGradient id="bf" cx="50%" cy="40%" r="54%">
          <stop offset="0%" stopColor="#D9BB94" />
          <stop offset="100%" stopColor="#B5906A" />
        </radialGradient>
        <radialGradient id="bh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F7F4EF" />
          <stop offset="100%" stopColor="#EAE6DE" />
        </radialGradient>
      </defs>

      {/* Outer ring */}
      <circle cx="54" cy="54" r="48" fill="url(#bf)" filter="url(#bs)" />
      {/* Hole */}
      <circle cx="54" cy="54" r="22" fill="url(#bh)" />

      {/* Sesame seeds (distributed around ring) */}
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => {
        const rad  = (deg * Math.PI) / 180;
        const r    = 37;
        const cx   = 54 + r * Math.sin(rad);
        const cy   = 54 - r * Math.cos(rad);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="2.6"
            ry="4.2"
            fill="#8B6835"
            opacity={0.75}
            transform={`rotate(${deg} ${cx} ${cy})`}
          />
        );
      })}

      {/* Highlight arc */}
      <path
        d="M 22 38 Q 54 18 86 38"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cut line (white line across middle) */}
      <line
        x1="6" y1="54"
        x2="102" y2="54"
        stroke="#F5F2EC"
        strokeWidth="1.8"
      />
      {/* Inner cut line across hole */}
      <line
        x1="32" y1="54"
        x2="76" y2="54"
        stroke="#EAE6DE"
        strokeWidth="1.8"
      />
    </svg>
  );
}
