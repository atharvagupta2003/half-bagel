"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title:   "Brand Strategy & Positioning",
    short:   "Clarity that drives every decision.",
    desc:    "We uncover what makes your brand irreplaceable, then build the strategic foundation that every campaign, conversation, and creative asset speaks from.",
    img:     "https://images.pexels.com/photos/7688466/pexels-photo-7688466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    accent:  "#E8220A",
    size:    "large", // spans 2 cols
  },
  {
    title:   "Brand Identity & Naming",
    short:   "Identity systems built to last.",
    desc:    "From naming architecture to full visual identity: logos, color systems, typography, and guidelines that define how your brand shows up everywhere.",
    img:     "https://images.pexels.com/photos/26576975/pexels-photo-26576975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    accent:  "#C4A47C",
    size:    "small",
  },
  {
    title:   "Social Media & Content Direction",
    short:   "Always-on brand voice.",
    desc:    "Editorial content strategy, platform-specific storytelling, and consistent creative direction so your social presence feels like a true extension of your brand.",
    img:     "https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    accent:  "#E8220A",
    size:    "small",
  },
  {
    title:   "Campaigns, Activations & Pop-Ups",
    short:   "Moments that create memory.",
    desc:    "We design and execute brand experiences, from cultural campaigns to physical activations, that earn attention and build community around your brand.",
    img:     "https://images.pexels.com/photos/17206910/pexels-photo-17206910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    accent:  "#B71C0F",
    size:    "small",
  },
  {
    title:   "Creative Oversight",
    short:   "One vision, every touchpoint.",
    desc:    "As your embedded creative director, we review and shape every output: photography, design, copy, and video, ensuring brand coherence across every channel.",
    img:     "https://images.pexels.com/photos/9432662/pexels-photo-9432662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    accent:  "#C4A47C",
    size:    "large",
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl overflow-hidden cursor-default group ${
        service.size === "large" ? "md:col-span-2" : "md:col-span-1"
      }`}
      style={{ minHeight: service.size === "large" ? "340px" : "280px" }}
    >
      {/* Image background */}
      <motion.div
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Base overlay — darkens image enough to read text */}
      <div className="absolute inset-0 bg-black/55 transition-opacity duration-500 group-hover:bg-black/30" />

      {/* Coloured accent glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.35 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at bottom left, ${service.accent}80, transparent 70%)` }}
      />

      {/* Border beam effect */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl"
        style={{ boxShadow: `inset 0 0 0 1.5px ${service.accent}60` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-7">
        {/* Accent dot */}
        <motion.div
          animate={{ width: hovered ? 40 : 24 }}
          transition={{ duration: 0.35 }}
          className="h-[2px] rounded-full mb-4"
          style={{ background: service.accent }}
        />

        <h3
          className="font-display text-cream font-bold mb-2"
          style={{
            fontSize: service.size === "large" ? "clamp(1.2rem, 2vw, 1.5rem)" : "1.05rem",
            letterSpacing: "-0.02em",
          }}
        >
          {service.title}
        </h3>

        {/* Short desc always visible */}
        <p className="text-cream/60 text-sm mb-3">{service.short}</p>

        {/* Full desc slides in on hover */}
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-cream/80 text-sm leading-relaxed max-w-md"
        >
          {service.desc}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-tan uppercase mb-4">
            What We Do
          </p>
          <h2
            className="font-display font-bold text-black leading-[0.93]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            Full-spectrum brand<br />
            <em className="not-italic text-gradient-amber">partnership.</em>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
