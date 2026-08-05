'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLang } from './LangContext';

const t = {
  bn: {
    tag: 'রিভিউ',
    heading: 'যারা রাতে ফুল পারফর্ম করছে,\nতাদের নিজেদের অভিজ্ঞতা।',
    testimonials: [
      { quote: 'মিলনের এক ঘণ্টা আগে ননি মিক্সচারটা খেয়ে বামটা দিলাম, আর ভাই... রেজাল্ট জাস্ট অবিশ্বাস্য! কোনো ডাউনটাইম নাই, আগের চেয়ে অনেক বেশি সময় দিতে পেরেছি। সেক্স লাইফের জন্য এটা একদম মাস-হ্যাভ।', name: 'রাকিব এইচ.', location: 'ঢাকা', variant: 'Saffron' },
      { quote: 'ইদানিং বিছানায় স্ট্যামিনা একটু কমে গেছিল, কিন্তু এই কম্বোটা পুরো আগুন জ্বেলে দিয়েছে। চামচটা খেয়ে বামটা লাগানোর পর পার্টনার নিজেই অবাক হয়ে গেছে। পারফরম্যান্স এখন পুরো অন্য লেভেলে।', name: 'তানভীর এস.', location: 'চট্টগ্রাম', variant: 'Red Panax' },
      { quote: 'কোনো কেমিক্যাল সাইড ইফেক্ট ছাড়া যদি সেক্স লাইফে ন্যাচারাল বুস্ট চান, তবে এটাই বেস্ট। ননি মিক্স ব্লাড ফ্লো ইনস্ট্যান্ট বাড়িয়ে দেয় আর বামটা সেন্সিভিটি ও পাওয়ার ফুল রাখে শেষ মুহূর্ত পর্যন্ত।', name: 'ইমরান কে.', location: 'সিলেট', variant: 'Saffron' },
    ],
  },
  en: {
    tag: 'Reviews',
    heading: 'Real results from men\nwho own the night.',
    testimonials: [
      { quote: "Took the Noni mixture an hour before getting intimate, applied the balm, and man... the difference is unreal. Zero lag, rock solid, and lasted way longer than usual. Absolute game changer for intimacy.", name: 'Rakib H.', location: 'Dhaka', variant: 'Saffron' },
      { quote: "My stamina in bed was dropping lately, but this combo brought the fire right back. Took the spoon, massaged the oil balm, and my partner noticed the change immediately. Unstoppable performance.", name: 'Tanvir S.', location: 'Chittagong', variant: 'Red Panax' },
      { quote: "If you want that natural power boost before sex without any chemical side effects, this is it. The wild noni mix hits the blood flow instantly and the balm keeps everything super sensitive and active.", name: 'Imran K.', location: 'Sylhet', variant: 'Saffron' },
    ],
  },
};

export default function Testimonials() {
  const { lang } = useLang();
  const text = t[lang];
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 sm:py-20 md:py-40 section-testimonials grain">
      {/* Glow spot */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] radial-spot radial-spot-green opacity-20 -translate-y-1/2" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-20">
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
                className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.6rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] whitespace-pre-line`}
              >
                {text.heading}
              </motion.h2>
            </div>

            <div className="flex gap-3 mt-8 md:mt-0">
              {text.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-[var(--accent)] w-7 sm:w-6' : 'bg-[var(--border-light)] hover:bg-[var(--muted)]'}`}
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
              <div className="text-[var(--accent)] text-3xl sm:text-4xl font-display leading-none mb-4 sm:mb-6 opacity-30">&ldquo;</div>
              <blockquote className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.1rem,4vw,2.2rem)] leading-[1.2] tracking-[-0.01em] text-[var(--fg)] mb-8 sm:mb-10`}>
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
