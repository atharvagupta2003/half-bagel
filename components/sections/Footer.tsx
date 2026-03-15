"use client";

import { motion } from "framer-motion";

const FOOTER_LINKS = {
  Services: [
    "Brand Strategy",
    "Brand Identity",
    "Social & Content",
    "Campaigns",
    "Creative Oversight",
    "Sales Support",
  ],
  Industries: [
    "Fashion & Luxury",
    "Hospitality",
    "Beauty & Wellness",
    "Consumer Brands",
    "Art & Culture",
  ],
  Company: [
    "About",
    "How We Work",
    "Our Clients",
    "Press",
    "Contact",
  ],
};

const SOCIALS = [
  { label: "IG",  href: "#" },
  { label: "LI",  href: "#" },
  { label: "TT",  href: "#" },
];

function HalfBagelFooterIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="footer-fill" cx="50%" cy="38%" r="52%">
          <stop offset="0%" stopColor="#D4B48C" />
          <stop offset="100%" stopColor="#B8946A" />
        </radialGradient>
        <clipPath id="footer-top">
          <rect x="0" y="0" width="32" height="16" />
        </clipPath>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#footer-fill)" clipPath="url(#footer-top)" />
      <circle cx="16" cy="16" r="6.5" fill="#131111" clipPath="url(#footer-top)" />
      <line x1="2" y1="16" x2="30" y2="16" stroke="#131111" strokeWidth="1.2" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top gradient separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tan/20 to-transparent" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-amber/4 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main grid */}
        <div className="pt-20 pb-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <HalfBagelFooterIcon />
              <span className="font-display text-xl font-bold text-cream" style={{ letterSpacing: "-0.02em" }}>
                Half Bagel
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-8">
              An embedded brand, marketing &amp; growth partner for founders and
              leadership teams who need more than an agency.
            </p>
            <p className="text-tan/70 text-xs font-medium tracking-widest uppercase">
              An extension of your brand.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-8">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-cream hover:border-tan/40 transition-all duration-300 text-[0.6rem] font-bold tracking-wide"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="lg:col-span-2">
              <h4 className="text-white/25 text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-cream link-underline transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h4 className="text-white/25 text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-5">
              Say Hello
            </h4>
            <a
              href="mailto:hello@halfbagel.co"
              className="block text-white/40 text-sm hover:text-cream transition-colors duration-300 mb-2 link-underline"
            >
              hello@halfbagel.co
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full border border-tan/25 text-tan text-xs font-semibold hover:bg-tan hover:text-brown hover:border-tan transition-all duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {year} Half Bagel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms"].map((link) => (
              <a key={link} href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Large ghosted wordmark */}
        <div className="pb-8 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display font-black text-white/[0.03] leading-none tracking-tighter select-none"
            style={{ fontSize: "clamp(4rem, 16vw, 13rem)", letterSpacing: "-0.04em" }}
            aria-hidden
          >
            Half Bagel
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
