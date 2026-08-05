'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangContext';

const t = {
  bn: {
    tag: 'উপকরণ',
    heading: 'আসল পাওয়ার ননি ফলের।\nবাকিগুলো শুধু পাওয়ার\nবাড়িয়ে দেয় বহু গুণে।',
    items: [
      { name: 'ননি', sub: 'বাংলাদেশ', benefit: 'রোগ প্রতিরোধ, প্রদাহবিরোধী', detail: 'বন্য-সংগৃহীত ফল।', img: '/noni.jpg', color: '#4A9E6B' },
      { name: 'জাফরান', sub: 'কাশ্মীর ও ইরান', benefit: 'মেজাজ উন্নয়ন, অ্যান্টিঅক্সিডেন্ট', detail: 'প্রতিটি শস্য সকালে সংগৃহীত।', img: '/saffron.jpg', color: '#D4A843' },
      { name: 'পানাক্স', sub: 'কোরিয়ান পাহাড়', benefit: 'শক্তি ও মনের স্পষ্টতা', detail: 'ছয় বছর বয়স্ক মূল।', img: '/ginseng.jpg', color: '#C44343' },
      { name: 'শিলাজিৎ', sub: 'হিমালয়', benefit: 'স্ট্যামিনা ও খনিজ', detail: 'প্রাকৃতিক মিনারেল রেসিন।', img: '/silajit.jpg', color: '#8B6914' },
    ],
  },
  en: {
    tag: 'Ingredients',
    heading: 'Noni is the king.\nWhat backs it up\nmakes you unstoppable.',
    items: [
      { name: 'Noni', sub: 'Bangladesh', benefit: 'Immunity + Recovery', detail: 'Wild-harvested fruit.', img: '/noni.jpg', color: '#4A9E6B' },
      { name: 'Saffron', sub: 'Kashmir & Iran', benefit: 'Mood + Antioxidants', detail: 'Hand-picked at dawn.', img: '/saffron.jpg', color: '#D4A843' },
      { name: 'Panax', sub: 'Korean Highlands', benefit: 'Strength + Clarity', detail: 'Six-year aged root.', img: '/ginseng.jpg', color: '#C44343' },
      { name: 'Silajit', sub: 'Himalayas', benefit: 'Stamina + Minerals', detail: 'Ancient mineral resin.', img: '/silajit.jpg', color: '#8B6914' },
    ],
  },
};

export default function Ingredients() {
  const { lang } = useLang();
  const text = t[lang];

  return (
    <section id="ingredients" className="relative section-ingredients grain">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-12 md:pb-20">
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
          className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] whitespace-pre-line`}
        >
          {text.heading}
        </motion.h2>
      </div>

      {/* Ingredient grid — magazine editorial style */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-28 md:pb-40">
        {/* Row 1: two large items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {text.items.slice(0, 2).map((item, i) => (
            <IngredientCard key={item.name} item={item} index={i} lang={lang} large />
          ))}
        </div>

        {/* Row 2: two smaller items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {text.items.slice(2, 4).map((item, i) => (
            <IngredientCard key={item.name} item={item} index={i + 2} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IngredientCard({
  item,
  index,
  lang,
  large = false,
}: {
  item: { name: string; sub: string; benefit: string; detail: string; img: string; color: string };
  index: number;
  lang: string;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${large ? 'h-[30vh] md:h-[36vh]' : 'h-[24vh] md:h-[30vh]'}`}
    >
      {/* Full-bleed image */}
      <img
        src={item.img}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content — bottom left */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
        {/* Accent dot */}
        <div className="w-1.5 h-1.5 rounded-full mb-2" style={{ backgroundColor: item.color }} />

        {/* Large ingredient name */}
        <h3
          className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.4rem,3vw,2.2rem)] leading-[0.95] tracking-[-0.02em] text-white mb-1`}
        >
          {item.name}
        </h3>

        {/* Origin */}
        <span className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[10px] tracking-[0.12em] uppercase text-white/50 mb-2`}>
          {item.sub}
        </span>

        {/* Benefit + detail — revealed on hover */}
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <div className="w-8 h-px" style={{ backgroundColor: item.color }} />
          <div>
            <p className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-sm font-medium`} style={{ color: item.color }}>
              {item.benefit}
            </p>
            <p className={`${lang === 'bn' ? 'font-bangla' : ''} text-xs text-white/40 mt-0.5`}>
              {item.detail}
            </p>
          </div>
        </div>
      </div>

      {/* Number badge — top right */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4">
        <span className="font-display text-[10px] tracking-[0.2em] uppercase text-white/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
}
