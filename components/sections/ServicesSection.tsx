"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Layers,
  Megaphone,
  Zap,
  Eye,
  TrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    icon:    Lightbulb,
    title:   "Brand Strategy & Positioning",
    short:   "Clarity that drives every decision.",
    desc:    "We uncover what makes your brand irreplaceable, then build the strategic foundation that every campaign, conversation, and creative asset speaks from.",
    accent:  "#E5A020",
  },
  {
    icon:    Layers,
    title:   "Brand Identity & Naming",
    short:   "Identity systems built to last.",
    desc:    "From naming architecture to full visual identity: logos, color systems, typography, and guidelines that define how your brand shows up everywhere.",
    accent:  "#C4A47C",
  },
  {
    icon:    Megaphone,
    title:   "Social Media & Content Direction",
    short:   "Always-on brand voice.",
    desc:    "Editorial content strategy, platform-specific storytelling, and consistent creative direction so your social presence feels like a true extension of your brand.",
    accent:  "#C96B38",
  },
  {
    icon:    Zap,
    title:   "Campaigns, Activations & Pop-Ups",
    short:   "Moments that create memory.",
    desc:    "We design and execute brand experiences, from cultural campaigns to physical activations, that earn attention and build community around your brand.",
    accent:  "#5A6E52",
  },
  {
    icon:    Eye,
    title:   "Creative Oversight",
    short:   "One vision, every touchpoint.",
    desc:    "As your embedded creative director, we review and shape every output: photography, design, copy, and video, ensuring brand coherence across every channel.",
    accent:  "#C4A47C",
  },
  {
    icon:    TrendingUp,
    title:   "Sales Support & Brand-to-Revenue",
    short:   "Brand that converts.",
    desc:    "We bridge the gap between brand equity and commercial output, helping you build pitch materials, sales narratives, and wholesale strategy that turn brand heat into revenue.",
    accent:  "#E5A020",
  },
];

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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
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
          </div>
          <p className="text-black/45 text-base max-w-xs leading-relaxed">
            We handle every dimension of brand, from the story you tell to the
            revenue it generates.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="service-card group rounded-2xl border border-tan/20 bg-linen/50 p-8 hover:border-tan/40 hover:bg-linen transition-all duration-300 cursor-default"
              >
                {/* Front face */}
                <div className="card-front">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${service.accent}15` }}
                  >
                    <Icon size={18} style={{ color: service.accent }} />
                  </div>
                  <h3
                    className="font-display text-[1.05rem] font-bold text-black mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-black/40 text-sm">{service.short}</p>

                  {/* Accent underline */}
                  <div
                    className="mt-6 h-px w-8 rounded-full group-hover:w-full transition-all duration-500"
                    style={{ background: service.accent, opacity: 0.4 }}
                  />
                </div>

                {/* Back face (hover reveal) */}
                <div className="card-back flex flex-col justify-center">
                  <div
                    className="w-6 h-[2px] rounded-full mb-4"
                    style={{ background: service.accent }}
                  />
                  <h3
                    className="font-display text-base font-bold text-black mb-3"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-black/55 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
