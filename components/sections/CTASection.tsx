"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ArrowRight, Check } from "lucide-react";

export default function CTASection() {
  const ref         = useRef<HTMLDivElement>(null);
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  return (
    <section ref={ref} id="contact" className="relative py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          style={{ scale }}
          className="relative rounded-3xl overflow-hidden bg-black"
        >
          {/* Editorial background photo */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url("https://images.pexels.com/photos/13633367/pexels-photo-13633367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 pointer-events-none" />

          {/* Retro grid */}
          <RetroGrid
            angle={60}
            cellSize={56}
            opacity={0.1}
            lightLineColor="rgba(196, 164, 124, 0.7)"
            darkLineColor="rgba(196, 164, 124, 0.4)"
            fadeColor="19,17,17"
          />

          {/* Glows */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-amber/8 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[360px] h-[300px] rounded-full bg-ember/8 blur-[90px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 py-24 px-8 md:px-20 text-center">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <span className="block w-5 h-px bg-tan/50" />
              <span className="text-[0.65rem] font-semibold tracking-[0.22em] text-tan uppercase">
                Ready When You Are
              </span>
              <span className="block w-5 h-px bg-tan/50" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-cream leading-[0.92] mb-6 max-w-2xl mx-auto"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Ready to extend
              <br />
              <em className="not-italic text-gradient-amber">your brand?</em>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/40 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed"
            >
              We only work with a small number of partners at a time so we can
              give everything. If that sounds like the kind of commitment you are
              looking for, let&apos;s talk.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mb-14"
            >
              <a
                href="mailto:hello@halfbagel.co"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cream text-black font-semibold text-base hover:bg-linen transition-all duration-300 shadow-warm hover:shadow-warm-lg"
              >
                Get In Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Divider */}
            <div className="w-px h-8 bg-white/10 mx-auto mb-10" />

            {/* Email form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="max-w-sm mx-auto"
            >
              <p className="text-white/25 text-xs tracking-wide mb-4">
                Or drop your email and we&apos;ll reach out when the timing is right.
              </p>

              {submitted ? (
                <div className="flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-sage/15 border border-sage/25 text-sage text-sm">
                  <Check size={14} />
                  <span>Perfect. We will be in touch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-tan/60 focus:bg-white/15 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-3 rounded-full bg-tan text-brown text-sm font-semibold hover:bg-amber hover:text-black transition-all duration-300 disabled:opacity-50 flex-shrink-0 whitespace-nowrap"
                  >
                    {loading ? "..." : "Send"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
