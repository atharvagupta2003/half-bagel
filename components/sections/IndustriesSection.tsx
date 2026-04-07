"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRIES = [
  {
    label: "Fashion & Luxury",
    desc: "Where identity is the product.",
    img: "https://images.pexels.com/photos/25733/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
  },
  {
    label: "Hospitality",
    desc: "Spaces that tell stories.",
    img: "https://images.pexels.com/photos/11905186/pexels-photo-11905186.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
  },
  {
    label: "Beauty & Wellness",
    desc: "Ritual, trust, and longevity.",
    img: "https://images.pexels.com/photos/12721805/pexels-photo-12721805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
  },
  {
    label: "Consumer Brands",
    desc: "From shelf to culture.",
    img: "https://images.pexels.com/photos/6357475/pexels-photo-6357475.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
  },
  {
    label: "Art & Culture",
    desc: "Meaning before market.",
    img: "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
  },
  {
    label: "Founder-Led Companies",
    desc: "Vision with velocity.",
    img: "https://images.pexels.com/photos/19747906/pexels-photo-19747906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
  },
];

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-linen/60 py-28 border-y border-tan/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-tan uppercase mb-4">
            Industries
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display font-bold text-black leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
            >
              Who we work with.
            </h2>
            <p className="text-black/45 text-sm leading-relaxed max-w-xs">
              We specialise in categories where brand is not just a differentiator,
              it&apos;s the entire game.
            </p>
          </div>
        </motion.div>

        {/* Main layout: sticky image left + rows right */}
        <div className="flex flex-col lg:flex-row lg:gap-16 gap-0 items-start">

          {/* Sticky image preview — desktop only */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0 sticky top-32">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-tan/20">
              {/* Placeholder state */}
              <AnimatePresence>
                {hovered === null && (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-8 h-px bg-tan/40" />
                    <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-tan/40 uppercase">
                      Hover a row
                    </span>
                    <div className="w-8 h-px bg-tan/40" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Image transitions */}
              <AnimatePresence mode="wait">
                {hovered !== null && (
                  <motion.div
                    key={hovered}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={INDUSTRIES[hovered].img}
                      alt={INDUSTRIES[hovered].label}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Label at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-cream text-sm font-semibold" style={{ letterSpacing: "-0.01em" }}>
                        {INDUSTRIES[hovered].label}
                      </p>
                      <p className="text-cream/50 text-xs mt-0.5">
                        {INDUSTRIES[hovered].desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Industry rows */}
          <div className="flex-1">
            <div className="divide-y divide-tan/15">
              {INDUSTRIES.map((industry, i) => (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex items-center justify-between py-7 cursor-default overflow-hidden"
                >
                  {/* Mobile hover bg image */}
                  <div className="lg:hidden absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={industry.img}
                      alt={industry.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/65" />
                  </div>

                  {/* Number + name */}
                  <div className="relative flex items-center gap-5 z-10">
                    <span className="text-[0.6rem] font-bold tracking-[0.15em] text-tan/40 w-6 text-right group-hover:text-tan transition-colors duration-300 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-display text-2xl md:text-3xl font-bold text-black group-hover:text-ember transition-colors duration-300"
                      style={{ letterSpacing: "-0.025em" }}
                    >
                      {industry.label}
                    </h3>
                  </div>

                  {/* Desc + arrow */}
                  <div className="relative z-10 flex items-center gap-4">
                    <p className="text-black/35 text-sm hidden md:block group-hover:text-black/60 transition-colors duration-300">
                      {industry.desc}
                    </p>
                    <div className="w-6 h-6 rounded-full border border-tan/25 flex items-center justify-center group-hover:border-ember group-hover:bg-ember group-hover:text-cream transition-all duration-300 flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
