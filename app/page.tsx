"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import IntroAnimation    from "@/components/IntroAnimation";
import BagelCursor       from "@/components/BagelCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navigation        from "@/components/sections/Navigation";
import HeroSection       from "@/components/sections/HeroSection";
import MarqueeSection    from "@/components/sections/MarqueeSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ServicesSection   from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ApproachSection   from "@/components/sections/ApproachSection";
import CTASection        from "@/components/sections/CTASection";
import Footer            from "@/components/sections/Footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <BagelCursor />

      {/* Intro overlay — mounts immediately, unmounts itself after animation */}
      <IntroAnimation onComplete={() => setIntroDone(true)} />

      {/* Main content — always rendered, fades in after intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SmoothScrollProvider>
          <main className="relative overflow-x-hidden bg-cream">
            <Navigation />
            <HeroSection />
            <MarqueeSection />
            <PhilosophySection />
            <ServicesSection />
            <IndustriesSection />
            <ApproachSection />
            <CTASection />
            <Footer />
          </main>
        </SmoothScrollProvider>
      </motion.div>
    </>
  );
}
