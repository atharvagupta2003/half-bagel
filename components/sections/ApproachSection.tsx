"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    number: "01",
    verb:   "We embed.",
    body:   "We join your leadership conversations, attend the real meetings, and understand your brand from the inside out. Not through a brief.",
    accent: "#E5A020",
  },
  {
    number: "02",
    verb:   "We align.",
    body:   "We map your brand positioning to your commercial goals, so creative direction and revenue strategy reinforce each other at every turn.",
    accent: "#C4A47C",
  },
  {
    number: "03",
    verb:   "We build.",
    body:   "We execute campaigns, content, identity, activations, and sales tools with the ownership and care of someone whose name is on the door.",
    accent: "#C96B38",
  },
];

export default function ApproachSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);

  return (
    <section ref={ref} id="work" className="relative bg-cream py-32 overflow-hidden">
      {/* Background warm blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-linen blur-[80px] opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-tan uppercase mb-4">
            The Approach
          </p>
          <h2
            className="font-display font-bold text-black leading-[0.93]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em" }}
          >
            We embed.{" "}
            <em className="not-italic text-gradient-amber">We align.</em>
            <br />
            We build.
          </h2>
        </motion.div>

        {/* Steps + side image layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Side image panel — desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:w-80 xl:w-96 flex-shrink-0 sticky top-32 self-start"
        >
          <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-warm-lg">
            <img
              src="https://images.pexels.com/photos/2453617/pexels-photo-2453617.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
              alt="Creative strategy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-3 px-1">
            <div className="w-2 h-2 rounded-full bg-ember flex-shrink-0" />
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-tan/60 uppercase">
              Embedded. Always.
            </p>
          </div>
        </motion.div>

        {/* Steps with vertical connector line */}
        <div className="relative flex-1 max-w-3xl lg:max-w-none">
          {/* Animated vertical line */}
          <div className="absolute left-[1.9rem] top-0 bottom-0 w-px bg-tan/15 hidden md:block" />
          <motion.div
            className="absolute left-[1.9rem] top-0 w-px bg-gradient-to-b from-amber via-tan to-ember hidden md:block origin-top"
            style={{ scaleY: lineScale, height: "100%" }}
          />

          <div className="space-y-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-8 md:gap-12"
              >
                {/* Step circle */}
                <div className="flex-shrink-0 flex items-start pt-1">
                  <div
                    className="w-[3.8rem] h-[3.8rem] rounded-full border-2 flex items-center justify-center bg-cream z-10 relative"
                    style={{ borderColor: `${step.accent}60` }}
                  >
                    <span
                      className="font-display text-sm font-bold"
                      style={{ color: step.accent }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3
                    className="font-display text-3xl md:text-4xl font-bold text-black mb-4"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {step.verb}
                  </h3>
                  <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-md">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>{/* end flex row */}

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-24 max-w-2xl mx-auto"
        >
          <p
            className="font-display font-bold text-black/15 text-[clamp(1.4rem,3vw,2.2rem)] leading-snug italic"
            style={{ letterSpacing: "-0.02em" }}
          >
            &ldquo;The gap between leadership vision and daily execution is where most brands break. We live in that gap.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
