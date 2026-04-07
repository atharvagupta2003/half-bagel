"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title:  "Strategic Thinking",
    body:   "We operate at the intersection of brand clarity and commercial reality. Every decision we make is grounded in your business goals, not just aesthetics.",
    accent: "#E5A020",
  },
  {
    number: "02",
    title:  "Creative Ownership",
    body:   "We don't deliver decks and disappear. We take full creative ownership, from positioning to execution, and evolve it as your brand does.",
    accent: "#C4A47C",
  },
  {
    number: "03",
    title:  "Revenue Alignment",
    body:   "Strong branding supports broader business objectives. We align brand strategy with sales infrastructure, partnerships, and measurable commercial outcomes.",
    accent: "#C96B38",
  },
];

export default function PhilosophySection() {
  return (
    <section id="about" className="relative bg-black py-32 overflow-hidden">
      {/* Background editorial image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("https://images.pexels.com/photos/12062759/pexels-photo-12062759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600")` }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 pointer-events-none" />

      {/* Subtle ambient glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber/4 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ember/5 blur-[100px]" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-tan uppercase mb-5">
            Our Philosophy
          </p>
          <h2
            className="font-display font-bold text-cream leading-[0.93] mb-6"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em" }}
          >
            We don&apos;t work{" "}
            <em className="not-italic text-gradient-tan">for</em> you.
            <br />
            We work <em className="not-italic text-gradient-amber">as</em> you.
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-xl">
            The best brand partners aren&apos;t hired guns. They&apos;re embedded voices.
            We integrate with your leadership team so deeply that the line between
            &ldquo;agency&rdquo; and &ldquo;internal&rdquo; disappears entirely.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-black p-10 hover:bg-white/[0.03] transition-colors duration-400"
            >
              {/* Accent bar */}
              <div
                className="w-8 h-[2px] rounded-full mb-8 transition-all duration-300 group-hover:w-12"
                style={{ background: pillar.accent }}
              />

              <p className="text-[0.6rem] font-bold tracking-[0.2em] text-white/20 uppercase mb-4">
                {pillar.number}
              </p>

              <h3 className="font-display text-xl font-bold text-cream mb-4" style={{ letterSpacing: "-0.02em" }}>
                {pillar.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
