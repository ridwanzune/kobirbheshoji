'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangContext';

const words = {
  bn: ['প্রাকৃতিক', 'হার্বাল', 'প্রাচীন', 'বিশুদ্ধ', 'সুস্থতা', 'বাংলাদেশ', 'আসল', 'শক্তি'],
  en: ['Natural', 'Herbal', 'Ancient', 'Pure', 'Wellness', 'Bangladesh', 'Authentic', 'Vitality'],
};

export default function MarqueeBanner() {
  const { lang } = useLang();
  const w = words[lang];

  return (
    <div className="relative py-5 border-y border-[var(--border)] overflow-hidden section-marquee grain">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...w, ...w].map((word, i) => (
          <span
            key={i}
            className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] tracking-[0.18em] uppercase text-[var(--fg-2)]/40`}
          >
            {word}
            <span className="mx-8 text-[var(--accent)]/30">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
