"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hold for 2s then fade out
    const t = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{ backgroundColor: "#F5F2EC" }}
        >
          <motion.img
            src="/half-bagel/logo-mark.png"
            alt="Half Bagel"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="w-[620px] max-w-[88vw]"
            style={{ marginBottom: "10vh" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
