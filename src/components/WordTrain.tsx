'use client';

import { motion } from 'framer-motion';

const words = ['শ', 'আসল', 'শক্তি', 'প্রাকৃতিক', 'হার্বাল'];

export default function WordTrain() {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--bg)] py-6 md:py-10">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-16">
            <span className="font-bangla text-[clamp(1.5rem,3vw,2.5rem)] font-light text-[var(--fg)]/20 tracking-tight">
              {word}
            </span>
            <span className="text-[var(--accent)]/30 text-lg">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
