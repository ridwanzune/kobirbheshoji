'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLang } from './LangContext';

const t = {
  bn: {
    tag: 'কণ্ঠস্বর',
    heading: 'যারা অলরেডি ইউজ করে\nরেজাল্ট পেয়েছে,\nতাদের মতামত।',
    testimonials: [
      { quote: 'প্রথমে সন্দেহ ছিল, কিন্তু এক চামচ মিক্স আর বাম — সকালে একদম আলাদা ফিল। ইউজ করে দেখুন।', name: 'তানভীর', location: 'ঢাকা', variant: 'Saffron' },
      { quote: 'মিক্সচার খাওয়ার পর বাম লাগাচ্ছি — পাওয়ার আস্তে আস্তে বাড়ছে, কোনো সাইড ইফেক্ট নেই।', name: 'রাকিব', location: 'চট্টগ্রাম', variant: 'Red Panax' },
      { quote: 'প্যাকেজিং দেখেই বুঝা যায় এটা আসল জিনিস। রেজাল্টও তাই দেখাচ্ছে।', name: 'আরিফ', location: 'সিলেট', variant: 'Herbirod' },
    ],
  },
  en: {
    tag: 'Voices',
    heading: 'Trusted by men\nwho play hard.',
    testimonials: [
      { quote: "Was skeptical at first, but one spoon of the mix followed by the balm — mornings hit different now. Try it.", name: 'Tanvir', location: 'Dhaka', variant: 'Saffron' },
      { quote: "After the mix I apply the balm — power builds gradually, no side effects. Already feeling the difference.", name: 'Rakib', location: 'Chittagong', variant: 'Red Panax' },
      { quote: "Packaging says it's premium, results say it's real. No fake promises — just works.", name: 'Arif', location: 'Sylhet', variant: 'Herbirod' },
    ],
  },
};

export default function Testimonials() {
  const { lang } = useLang();
  const text = t[lang];
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 md:py-40 section-testimonials grain">
      {/* Glow spot */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] radial-spot radial-spot-green opacity-20 -translate-y-1/2" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] block mb-4`}
              >
                {text.tag}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] whitespace-pre-line`}
              >
                {text.heading}
              </motion.h2>
            </div>

            <div className="flex gap-3 mt-10 md:mt-0">
              {text.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-[var(--accent)] w-6' : 'bg-[var(--border-light)] hover:bg-[var(--muted)]'}`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-8 flex items-center">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="max-w-2xl"
            >
              <div className="text-[var(--accent)] text-4xl font-display leading-none mb-6 opacity-30">&ldquo;</div>
              <blockquote className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.3rem,3vw,2.2rem)] leading-[1.2] tracking-[-0.01em] text-[var(--fg)] mb-10`}>
                {text.testimonials[active].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className={`${lang === 'bn' ? 'font-bangla' : ''} text-[var(--fg)] text-sm font-medium`}>{text.testimonials[active].name}</p>
                  <p className={`${lang === 'bn' ? 'font-bangla' : ''} text-[var(--muted)] text-xs tracking-wider`}>
                    {text.testimonials[active].location} · <span className="text-[var(--accent)]">{text.testimonials[active].variant}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
