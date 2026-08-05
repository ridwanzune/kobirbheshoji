'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLang } from './LangContext';

const t = {
  bn: {
    brand: 'কবীর ভেষজী',
    headline: 'খেলা হবে! ন্যাচারালি।',
    sub1: 'খাঁটি দেশি ননি ফল, জাফরান আর রেড পানাক্স — আল্টিমেট মিক্সচার আর পাওয়ার বাম। এক চামচ খান, একটু লাগান, খেলার জন্য একদম রেডি।',
    sub2: 'Herbirod by Noni.',
    cta1: 'WhatsApp-এ অর্ডার করুন',
    cta2: 'ঘুরে দেখুন',
  },
  en: {
    brand: 'Kobir Bheshoji',
    headline: 'Khela Hobe! Naturally.',
    sub1: 'Pure Bangladeshi Noni, Saffron & Red Panax — the ultimate mix and the power balm. One spoonful, a quick massage, and you are ready to play.',
    sub2: 'Harbirod by Noni.',
    cta1: 'Order on WhatsApp',
    cta2: 'Explore',
  },
};

export default function Hero() {
  const { lang, toggle } = useLang();
  const text = t[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[var(--bg)] grain"
    >
      {/* Atmospheric glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] radial-spot radial-spot-green opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] radial-spot radial-spot-dark opacity-40" />

      <div className="relative w-full overflow-hidden">
        <motion.div style={{ scale: videoScale }} className="w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
            style={{ marginTop: '-20vw' }}
            poster="/hero-ref.jpeg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/60 via-[var(--bg)]/30 to-[var(--bg)]"
      />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity, paddingTop: '8vh' }}
        className="absolute inset-0 z-10 flex flex-col items-center px-5 sm:px-8 text-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="w-12 h-px bg-[var(--accent)] mb-4 md:mb-6 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0, 0, 1] }}
          className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[var(--fg-2)] text-xs md:text-sm tracking-[0.15em] mb-3 md:mb-4`}
        >
          {text.brand}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.2, 0, 0, 1] }}
          className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.8rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] max-w-[800px]`}
        >
          <span className="text-[var(--accent)]">{text.headline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.2, 0, 0, 1] }}
          className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[var(--fg-2)] text-[13px] sm:text-sm md:text-base max-w-lg mt-4 sm:mt-5 md:mt-8 leading-relaxed`}
        >
          {text.sub1}
          <br className="hidden md:block" />
          {text.sub2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.2, 0, 0, 1] }}
          className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-5 sm:px-0"
        >
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className={`${lang === 'bn' ? 'font-bangla' : ''} btn-accent w-full sm:w-auto justify-center`}
          >
            {text.cta1}
            <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#products"
            className={`${lang === 'bn' ? 'font-bangla' : ''} btn-ghost-capsule w-full sm:w-auto justify-center`}
          >
            {text.cta2}
          </a>
        </motion.div>
      </motion.div>

      {/* Language toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={toggle}
        className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} absolute bottom-20 sm:bottom-6 right-5 sm:right-6 md:bottom-10 md:right-10 z-10 px-4 py-2 text-[11px] tracking-[0.12em] uppercase border border-white/[0.08] rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:border-white/[0.18] hover:bg-white/[0.03] transition-all duration-200`}
      >
        {lang === 'bn' ? 'EN' : 'বাং'}
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-5 h-8 border border-[var(--fg-2)]/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 bg-[var(--fg-2)]/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
    </>
  );
}
