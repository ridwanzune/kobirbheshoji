'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangContext';

const t = {
  bn: {
    tag: 'কী আছে ভেতরে',
    heading: 'মিশ্রণ খান। বাম লাগান।\nখেলার জন্য রেডি।',
    sub: 'বাংলাদেশের বুনো ননি থেকে পাওয়ারড — পুরুষদের জন্য আল্টিমেট ন্যাচারাল হার্বাল কম্বো, যারা পারফর্ম করতে চায় সবচেয়ে ভালোভাবে।',
    packets: [
      {
        name: 'ম্যানহুড মিক্সচার',
        nameEn: 'Manhood Mixture',
        desc: 'পুরো দেশি ননি ফল আর জাফরানের মিশ্রণ। প্রতিদিন এক চামচ খান — শরীর আর মনকে একদম পাওয়ারফুল রাখবে।',
        tag: 'আগে',
        color: '#D4A843',
        img: '/Manhood Mixture.jpeg',
      },
      {
        name: 'নুরিশমেন্ট বাম',
        nameEn: 'Nourishment Balm',
        desc: 'দেশি লতা আর হার্বাল উপকরণ দিয়ে তৈরি। একটু বাম নিন, মার্সাজ করে লাগান — একদম রেডি।',
        tag: 'রেডি',
        color: '#4A9E6B',
        img: '/Nourishment Balm.jpeg',
      },
    ],
    cta: 'WhatsApp-এ অর্ডার করুন',
  },
  en: {
    tag: "What's Inside",
    heading: 'Eat the mix.\nApply the balm.\nReady to play.',
    sub: 'Powered by wild Bangladeshi Noni — the ultimate natural herbal combo for men who want to perform at their absolute best.',
    packets: [
      {
        name: 'Manhood Mixture',
        nameEn: 'Manhood Mixture',
        desc: 'Full Bangladeshi wild noni fruit and saffron mix. Take one spoon every day — keeps body and mind powerful.',
        tag: 'Before',
        color: '#D4A843',
        img: '/Manhood Mixture.jpeg',
      },
      {
        name: 'Nourishment Balm',
        nameEn: 'Nourishment Balm',
        desc: 'Made with desi vines and herbal ingredients. Take a little balm, massage and apply — fully ready.',
        tag: 'Ready',
        color: '#4A9E6B',
        img: '/Nourishment Balm.jpeg',
      },
    ],
    cta: 'Order on WhatsApp',
  },
};

export default function WhatsInside() {
  const { lang } = useLang();
  const text = t[lang];

  return (
    <section className="relative section-whatsinside grain">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/Herbirod unboxed.jpeg"
          alt="Herbirod unboxed"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/80 to-[var(--bg)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-28 md:pb-40">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
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
            className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] whitespace-pre-line mb-6`}
          >
            {text.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[var(--fg-2)] text-base md:text-lg leading-relaxed max-w-lg`}
          >
            {text.sub}
          </motion.p>
        </div>

        {/* Two packets — large asymmetric cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {text.packets.map((packet, i) => (
            <motion.div
              key={packet.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0, 0, 1] }}
              className="group relative overflow-hidden rounded-lg bg-[var(--surface)] border border-[var(--border-light)]/5 hover:border-[var(--border-light)] transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative h-[27vh] md:h-[33vh] overflow-hidden">
                <img
                  src={packet.img}
                  alt={packet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/40 to-transparent" />

                {/* Time tag — top left */}
                <div className="absolute top-5 left-5">
                  <span
                    className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border`}
                    style={{ borderColor: packet.color, color: packet.color, backgroundColor: 'rgba(0,0,0,0.5)' }}
                  >
                    {packet.tag}
                  </span>
                </div>

                {/* Number — top right */}
                <div className="absolute top-5 right-5">
                  <span className="font-display text-[10px] tracking-[0.2em] uppercase text-white/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 -mt-12 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: packet.color }} />
                  <span className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] tracking-[0.15em] uppercase text-[var(--muted)]`}>
                    {packet.nameEn}
                  </span>
                </div>

                <h3 className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1] tracking-[-0.02em] text-[var(--fg)] mb-4`}>
                  {packet.name}
                </h3>

                <p className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[var(--fg-2)] text-sm leading-[1.7] max-w-md`}>
                  {packet.desc}
                </p>

                {/* Accent line */}
                <div className="w-10 h-px mt-6 opacity-40" style={{ backgroundColor: packet.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className={`${lang === 'bn' ? 'font-bangla' : ''} btn-accent`}
          >
            {text.cta}
            <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
