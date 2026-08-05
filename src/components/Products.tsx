'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from './LangContext';

const t = {
  bn: {
    tag: 'Harbirod by Noni',
    heading1: 'দুটি মূল।',
    heading2: 'একটি ঐতিহ্য।',
    variants: [
      {
        name: 'জাফরান',
        tagline: 'স্বর্ণ সুতো',
        desc: 'সেরা শস্য থেকে সংগৃহীত প্রিমিয়াম জাফরান এক্সট্র্যাক্ট। শতাব্দী ধরে প্রকৃতির সবচেয়ে মূল্যবান মসলা — এখন দৈনিক সুস্থতার অনুষঙ্গে পরিমার্জিত।',
        cta: 'অর্ডার করুন',
        price: '৳১,২০০',
      },
      {
        name: 'রেড পানাক্স',
        tagline: 'শক্তির মূল',
        desc: 'কোরিয়ান রেড পানাক্স জিনসেং, সর্বোচ্চ শক্তির জন্য ছয় বছর বয়স্ক। একটি অ্যাডাপ্টোজেনিক শক্তি যা প্রজন্ম ধরে বিশ্বাস করা হয়েছে।',
        cta: 'অর্ডার করুন',
        price: '৳১,২০০',
      },
    ],
  },
  en: {
    tag: 'Harbirod by Noni',
    heading1: 'Two roots.',
    heading2: 'One tradition.',
    variants: [
      {
        name: 'Saffron',
        tagline: 'The Golden Thread',
        desc: "Premium saffron extract, hand-harvested from the finest strands. Known for centuries as nature's most precious spice — now refined into a daily wellness ritual.",
        cta: 'Order Now',
        price: '৳1,200',
      },
      {
        name: 'Red Panax',
        tagline: 'The Root of Strength',
        desc: 'Korean Red Panax Ginseng, aged six years for maximum potency. An adaptogenic powerhouse trusted across generations for sustained energy and mental clarity.',
        cta: 'Order Now',
        price: '৳1,200',
      },
    ],
  },
};

export default function Products() {
  const { lang } = useLang();
  const text = t[lang];

  return (
    <section id="products" className="relative">
      <div className="px-6 md:px-12 pt-28 md:pt-40 pb-8 max-w-[1400px] mx-auto">
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
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] max-w-2xl`}
        >
          {text.heading1}
          <br />
          {text.heading2}
        </motion.h2>
      </div>

      {text.variants.map((product, idx) => (
        <ProductSpread key={idx} product={product} index={idx} lang={lang} />
      ))}
    </section>
  );
}

function ProductSpread({ product, index, lang }: { product: { name: string; tagline: string; desc: string; cta: string; price: string }; index: number; lang: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 !== 0;
  const colors = ['#D4A843', '#C44343'];
  const color = colors[index];

  return (
    <div
      ref={ref}
      className={`relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-[${color}]/10 via-[var(--bg)] to-[var(--bg)]`}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none"
        style={{
          [isReversed ? 'right' : 'left']: '-5%',
          fontFamily: lang === 'bn' ? 'var(--font-bangla)' : 'var(--font-display)',
          fontSize: 'clamp(15rem, 30vw, 40rem)',
          lineHeight: 1,
          fontWeight: 800,
          color,
        }}
      >
        {product.name.charAt(0)}
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-20 md:py-0">
        <div className={`flex flex-col justify-center ${isReversed ? 'md:order-2' : ''}`}>
          <motion.span
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-[11px] tracking-[0.18em] uppercase mb-3 block"
            style={{ color }}
          >
            Variant {String(index + 1).padStart(2, '0')}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--fg)] mb-3`}
          >
            {product.name}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0, 0, 1] }}
            className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-lg md:text-xl mb-8 italic`}
            style={{ color }}
          >
            {product.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.2, 0, 0, 1] }}
            className={`${lang === 'bn' ? 'font-bangla' : ''} text-[var(--fg-2)] text-base leading-relaxed max-w-md mb-10`}
          >
            {product.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={`${lang === 'bn' ? 'font-bangla' : ''} px-7 py-3 text-sm tracking-[0.06em] rounded-full border transition-all duration-300`}
              style={{ borderColor: color, color }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = color; e.currentTarget.style.color = 'var(--bg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = color; }}
            >
              {product.cta}
            </a>
            <span className="text-[var(--muted)] text-xs tracking-[0.06em]">{product.price}</span>
          </motion.div>
        </div>

        <div className={`relative flex items-center justify-center ${isReversed ? 'md:order-1' : ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden rounded-lg group"
          >
            <img
              src={index === 0 ? '/Manhood Mixture.jpeg' : '/Nourishment Balm.jpeg'}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-heading text-[10px] tracking-[0.2em] uppercase mb-1 block opacity-60" style={{ color: color }}>Harbirod</span>
              <span className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} text-2xl md:text-3xl tracking-tight text-white font-light block`}>{product.name}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
