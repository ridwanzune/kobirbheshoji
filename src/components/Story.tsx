'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangContext';

const t = {
  bn: {
    tag: 'আমাদের গল্প',
    quote: 'জন্ম বাংলাদেশের বুনো ননি মাটির টানে, তৈরি পুরোপুরি র পাওয়ারের জন্য।',
    founder: 'কবীর ভেষজী',
    role: 'প্রতিষ্ঠাতা',
    blocks: [
      { heading: 'গ্রাম থেকে ভিশন', text: 'বাংলাদেশের গ্রামের কোলে, যেখানে হার্বাল ঐতিহ্য যেকোনো আধুনিক বিজ্ঞানের চেয়ে গভীর, কবীর ভেষজী একটা সিম্পল বিশ্বাস দিয়ে শুরু হয়েছিল: যে রেসিপি গুলো প্রজন্মের পর প্রজন্ম হাতে হাতে দেওয়া হয়েছে, সেগুলো মডার্ন লুকের সাথে মিশে পারে — ঐতিহ্য বদলানো না, সম্মান করে এগিয়ে যাওয়া।' },
      { heading: 'Herbirod by Noni', text: 'আমাদের Herbirod সিরিজের নামটা এসেছে হার্বাল রিফাইনমেন্টের পুরোনো অনুশীলন থেকে। প্রতিটি ভ্যারিয়েন্ট — জাফরান আর রেড পানাক্স — ইচ্ছাকৃতভাবে সংগ্রহ, নিখুঁতভাবে তৈরি, এবং শতাব্দীর সম্মান নিয়ে হাজির করা হয়েছে।' },
      { heading: 'একটা নতুন স্ট্যান্ডার্ড', text: 'আমরা মনে করি সুস্থ থাকাটা প্লাস্টিকের বোতল আর স্টক ফটো দিয়ে আসে না। প্রতিটা ডিটেইল — প্যাকেজিং থেকে এই ওয়েবসাইট পর্যন্ত — আমাদের ভেতরের কোয়ালিটি নিয়ে তৈরি।' },
    ],
  },
  en: {
    tag: 'Our Story',
    quote: 'Born from the wild noni soil of Bangladesh, refined for pure raw power.',
    founder: 'Kobir Bheshoji',
    role: 'Founder',
    blocks: [
      { heading: 'From Village to Vision', text: "In the heart of rural Bangladesh, where herbal traditions run deeper than any modern science, Kobir Bheshoji started with a simple belief: the remedies handed down through generations could meet the modern world — not by replacing tradition, but by moving forward with respect." },
      { heading: 'Herbirod by Noni', text: 'Our Herbirod series is named for the ancient practice of herbal refinement. Each variant — Saffron and Red Panax — is sourced with intention, formulated with precision, and presented with centuries of respect.' },
      { heading: 'A New Standard', text: "We believe wellness doesn't come in a plastic bottle with a stock photo. Every detail — from our packaging to this website — is built to reflect the quality inside." },
    ],
  },
};

export default function Story() {
  const { lang } = useLang();
  const text = t[lang];

  return (
    <section id="story" className="relative section-story grain">
      {/* Glow spot */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] radial-spot radial-spot-green opacity-30 -translate-y-1/2" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 py-16 sm:py-20 md:py-40">
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] mb-6 block`}
            >
              {text.tag}
            </motion.span>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-[clamp(1.6rem,5vw,3.8rem)] leading-[1.1] tracking-[-0.02em] text-[var(--fg)]`}
            >
              &ldquo;{text.quote}&rdquo;
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-12 h-12 overflow-hidden">
                <img src="/logo.png" alt="Kobir Bheshoji" className="h-full w-auto object-contain" />
              </div>
              <div>
                <p className={`${lang === 'bn' ? 'font-bangla' : ''} text-[var(--fg)] text-sm font-medium`}>{text.founder}</p>
                <p className={`${lang === 'bn' ? 'font-bangla' : ''} text-[var(--muted)] text-xs tracking-wider uppercase`}>{text.role}</p>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7 md:pt-12">
            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-8 md:mb-10 rounded-lg overflow-hidden h-[25vh] sm:h-[30vh] md:h-[45vh]"
            >
              <img
                src="/product image .jpeg"
                alt="Herbirod Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              {text.blocks.map((block, i) => (
                <motion.div
                  key={block.heading}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
                >
                  <h3 className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[var(--fg)] text-lg md:text-xl mb-3 tracking-tight`}>{block.heading}</h3>
                  <p className={`${lang === 'bn' ? 'font-bangla' : ''} text-[var(--fg-2)] text-[14px] md:text-base leading-[1.7]`}>{block.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-light)] to-transparent" />
    </section>
  );
}
