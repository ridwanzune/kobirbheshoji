'use client';

import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="relative section-showcase grain py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.2, 0, 0, 1] }}
          className="relative rounded-xl overflow-hidden group"
        >
          <img
            src="/Herbirod unboxed.jpeg"
            alt="Herbirod Unboxed"
            className="w-full h-auto block group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 via-transparent to-[var(--bg)]/20" />
        </motion.div>
      </div>
    </section>
  );
}
