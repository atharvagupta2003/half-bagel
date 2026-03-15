"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const ref          = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headY    = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const headOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const springY  = useSpring(headY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-cream flex flex-col"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/videos/8125931/pictures/preview-0.jpeg"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
      >
        <source src="https://videos.pexels.com/video-files/8125931/8125931-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Retro grid background */}
      <div className="absolute inset-0 z-[1]">
        <RetroGrid
          angle={62}
          cellSize={64}
          opacity={0.32}
          lightLineColor="rgba(196, 164, 124, 0.45)"
          darkLineColor="rgba(196, 164, 124, 0.25)"
          fadeColor="245,242,236"
        />
      </div>

      {/* Warm tonal overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-cream/50 via-transparent to-cream/90 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-amber/6 blur-[130px] z-[2] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[380px] h-[380px] rounded-full bg-ember/5 blur-[90px] z-[2] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        <motion.div style={{ y: springY, opacity: headOpacity }} className="max-w-5xl mx-auto w-full">

          {/* Overline label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="block w-6 h-px bg-tan" />
            <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-tan uppercase">
              Embedded Brand Partner
            </span>
            <span className="block w-6 h-px bg-tan" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-black leading-[0.93] mb-7"
            style={{ fontSize: "clamp(3.4rem, 9vw, 7.5rem)", letterSpacing: "-0.03em" }}
          >
            Your brand,{" "}
            <em className="not-italic text-gradient-amber">extended.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="text-black/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light"
          >
            We don&apos;t work for you. We work <em>as</em> you. Half Bagel embeds
            with founders and leadership teams as a long-term brand, marketing
            &amp; growth partner.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-black text-cream text-sm font-semibold hover:bg-brown transition-all duration-300 shadow-warm hover:shadow-warm-lg"
            >
              See Our Work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-tan/40 text-black/70 text-sm font-medium hover:border-tan hover:text-black hover:bg-linen/40 transition-all duration-300"
            >
              How We Work
            </a>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-transparent via-tan to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
