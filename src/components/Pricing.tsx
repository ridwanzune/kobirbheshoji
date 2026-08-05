'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLang } from './LangContext';

const plans = {
  bn: {
    '15': {
      name: '১৫ দিন',
      price: '৳১,৬৯৯',
      perDay: '৳১১৩',
      perDayLabel: 'প্রতিদিন',
      desc: 'পাওয়ারটা টেস্টকরার জন্য।',
      cta: 'শুরু করুন',
      features: ['১× ম্যানহুড মিক্সচার', '১× নুরিশমেন্ট বাম', 'সারাদেশে ৳১২০ ডেলিভারি', 'WhatsApp সাপোর্ট'],
    },
    '30': {
      name: '৩০ দিন',
      price: '৳২,৯৯৯',
      perDay: '৳১০০',
      perDayLabel: 'প্রতিদিন',
      desc: 'ফুল পারফরম্যান্স রুটিন।',
      cta: 'অর্ডার করুন',
      badge: 'সেরা মূল্য',
      save: '৳১৩ বাঁচান',
      features: ['১× ম্যানহুড মিক্সচার', '১× নুরিশমেন্ট বাম', 'সারাদেশে ৳১২০ ডেলিভারি', 'WhatsApp সাপোর্ট'],
    },
  },
  en: {
    '15': {
      name: '15 Days',
      price: '৳1,699',
      perDay: '৳113',
      perDayLabel: 'per day',
      desc: 'To test the power.',
      cta: 'Get Started',
      features: ['1× Manhood Mixture', '1× Nourishment Balm', '৳120 delivery nationwide', 'WhatsApp support'],
    },
    '30': {
      name: '30 Days',
      price: '৳2,999',
      perDay: '৳100',
      perDayLabel: 'per day',
      desc: 'Full performance routine.',
      cta: 'Order Now',
      badge: 'Best Value',
      save: 'Save ৳13/day',
      features: ['1× Manhood Mixture', '1× Nourishment Balm', '৳120 delivery nationwide', 'WhatsApp support'],
    },
  },
};

const trustItems = {
  bn: [
    { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', label: 'দুটি প্যাকেট অন্তর্ভুক্ত' },
    { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', label: 'সারাদেশে ৳১২০ ডেলিভারি' },
    { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', label: 'WhatsApp-এ পেমেন্ট' },
  ],
  en: [
    { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', label: 'Both packets included' },
    { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', label: '৳120 delivery nationwide' },
    { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', label: 'Pay via WhatsApp' },
  ],
};

const durations = ['15', '30'] as const;

export default function Pricing() {
  const { lang } = useLang();
  const [active, setActive] = useState<'15' | '30'>('30');
  const plan = plans[lang][active] as any;
  const trust = trustItems[lang];

  return (
    <section id="pricing" className="relative section-pricing grain">
      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] radial-spot radial-spot-green opacity-25" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] radial-spot radial-spot-dark opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-20 md:pb-32">
        {/* Two-column layout: heading left, panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — heading */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] block mb-4`}
            >
              {lang === 'bn' ? 'মূল্য' : 'Pricing'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.8rem,6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-[var(--fg)] whitespace-pre-line mb-4 sm:mb-6`}
            >
              {lang === 'bn' ? 'Herbirod\nমূল্য' : 'Herbirod\nPricing'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-sm md:text-base text-[var(--fg-2)] leading-relaxed max-w-md`}
            >
              {lang === 'bn'
                ? 'আপনার পারফরম্যান্সে ইনভেস্ট করুন।'
                : 'Invest in your performance.'}
            </motion.p>

            {/* Trust row — under heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3 mt-6 sm:mt-8"
            >
              {trust.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <svg className="w-3 h-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[var(--fg-2)] text-xs`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — packaging panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="relative rounded-lg overflow-hidden bg-[var(--surface)] border border-white/[0.06] max-w-sm w-full mx-auto lg:ml-auto"
          >
          {/* Product image — top on mobile, left on desktop */}
          <div className="relative h-[20vh] md:h-[220px] overflow-hidden">
            <img
              src="/Product image boxed.jpeg"
              alt="Herbirod Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[var(--surface)]" />

            {/* Floating brand */}
            <div className="absolute bottom-4 left-5 md:bottom-6 md:left-6">
              <span className="font-heading text-[9px] tracking-[0.2em] uppercase text-white/35 block mb-0.5">
                Harbirod by Noni
              </span>
              <span className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-lg text-white/85 tracking-tight`}>
                {lang === 'bn' ? 'হারবিরোদ' : 'Herbirod'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Duration toggle */}
            <div className="flex items-center gap-1 p-0.5 bg-white/[0.03] border border-white/[0.06] rounded-full w-fit mb-4">
              {durations.map((d) => {
                const label = d === '15'
                  ? (lang === 'bn' ? '১৫ দিন' : '15 Days')
                  : (lang === 'bn' ? '৩০ দিন' : '30 Days');
                const isActive = active === d;
                return (
                  <button
                    key={d}
                    onClick={() => setActive(d)}
                    className={`relative ${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] tracking-[0.08em] uppercase px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-full transition-all duration-250 ${
                      isActive
                        ? 'text-[var(--bg)]'
                        : 'text-[var(--muted)] hover:text-[var(--fg-2)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="duration-pill"
                        className="absolute inset-0 bg-[var(--accent)] rounded-full"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Price block — cross-fades */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              >
                {/* Badge + save */}
                <div className="flex items-center gap-2.5 mb-3">
                  {plan.badge && (
                    <span className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)]`}>
                      {plan.badge}
                    </span>
                  )}
                  {plan.save && (
                    <span className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] text-[var(--accent)]`}>
                      {plan.save}
                    </span>
                  )}
                </div>

                {/* Price + per-day */}
                <div className="flex items-end gap-2.5 mb-1">
                  <span className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.8rem,5vw,2.2rem)] leading-[0.85] tracking-[-0.03em] text-[var(--fg)]`}>
                    {plan.price}
                  </span>
                  <div className="flex items-baseline gap-1 pb-0.5">
                    <span className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} text-xs font-light text-[var(--fg)]`}>
                      {plan.perDay}
                    </span>
                    <span className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[10px] text-[var(--muted)]`}>
                      {plan.perDayLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-xs text-[var(--muted)] mb-4`}>
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-xs text-[var(--fg-2)]`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${lang === 'bn' ? 'font-bangla' : ''} btn-primary w-full justify-center min-h-[48px]`}
                >
                  {plan.cta}
                  <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
