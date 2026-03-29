"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work",     href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { scrollY }               = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
              scrolled
                ? "bg-cream/90 backdrop-blur-xl border border-tan/20 shadow-glass"
                : "bg-transparent",
            )}
          >
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <img
                src="/half-bagel/logo-nav.png"
                alt="Half Bagel"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-sm font-medium text-black/60 hover:text-black transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-cream text-sm font-semibold hover:bg-brown transition-colors duration-300"
            >
              Work With Us
            </a>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-black rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-px bg-black rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-black rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-cream" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 pt-20">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: i * 0.07 + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold text-black hover:text-ember transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 24 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.32, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 px-8 py-3 rounded-full bg-black text-cream font-semibold text-base hover:bg-brown transition-colors"
          >
            Work With Us
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

