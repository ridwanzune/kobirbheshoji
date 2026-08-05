'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 400);
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="fixed bottom-6 right-6 z-50 md:hidden pointer-events-none"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] pl-5 pr-6 py-3.5 rounded-full shadow-[0_8px_32px_rgba(136,196,52,0.3)] hover:shadow-[0_8px_40px_rgba(136,196,52,0.45)] transition-shadow duration-300"
      >
        <MessageCircle size={18} />
        <span className="text-sm font-medium tracking-wide">Order Now</span>
      </a>
    </motion.div>
  );
}
