'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangContext';

export default function Footer() {
  const { lang } = useLang();

  const t = {
    bn: {
      brand: 'কবীর ভেষজী',
      tagline: 'Natural wellness tradition.',
      cta: 'WhatsApp-এ অর্ডার করুন',
      sections: [
        {
          title: 'পণ্য',
          links: [
            { label: 'জাফরান', href: '#products' },
            { label: 'রেড পানাক্স', href: '#products' },
            { label: 'উপকরণ', href: '#ingredients' },
          ],
        },
        {
          title: 'কোম্পানি',
          links: [
            { label: 'আমাদের গল্প', href: '#story' },
            { label: 'WhatsApp', href: 'https://wa.me/8801XXXXXXXXX' },
          ],
        },
      ],
      whatsapp: 'WhatsApp-এ মেসেজ করুন',
      phone: '০১XXXXXXXXX',
      bottom: 'Herbirod',
      year: new Date().getFullYear(),
    },
    en: {
      brand: 'Kobir Bheshoji',
      tagline: 'Natural wellness tradition.',
      cta: 'Order on WhatsApp',
      sections: [
        {
          title: 'Products',
          links: [
            { label: 'Saffron', href: '#products' },
            { label: 'Red Panax', href: '#products' },
            { label: 'Ingredients', href: '#ingredients' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'Our Story', href: '#story' },
            { label: 'WhatsApp', href: 'https://wa.me/8801XXXXXXXXX' },
          ],
        },
      ],
      whatsapp: 'Message on WhatsApp',
      phone: '01XXXXXXXXX',
      bottom: 'Herbirod',
      year: new Date().getFullYear(),
    },
  };

  const text = t[lang];

  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/Herbirod unboxed.jpeg" alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#0a0a0c]/90 to-[#0a0a0c]" />
      </div>

      {/* Colored gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,67,27,0.35)] via-transparent to-[rgba(136,196,52,0.08)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(136,196,52,0.06)] to-[rgba(0,67,27,0.2)]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(136,196,52,0.12),transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,67,27,0.25),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 grain" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
        {/* Top: brand + CTA — one tight row */}
        <div className="pt-8 md:pt-10 pb-6 md:pb-8 border-b border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-7 h-7 overflow-hidden shrink-0">
                <img src="/logo.png" alt="Kobir Bheshoji" className="h-full w-auto object-contain" />
              </div>
              <div>
                <span className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-sm tracking-[0.02em] text-white`}>
                  {text.brand}
                </span>
                <span className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} font-light text-xs text-white/40 ml-2`}>
                  {text.tagline}
                </span>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className={`${lang === 'bn' ? 'font-bangla' : ''} btn-footer-cta self-start sm:self-auto w-full sm:w-auto justify-center`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {text.cta}
              <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Links — tight single row */}
        <div className="py-4 md:py-5 border-b border-white/[0.06]">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {text.sections.map((section, si) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: si * 0.05 }}
              >
                <h4 className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[9px] tracking-[0.15em] uppercase text-white/25 mb-2`}>
                  {section.title}
                </h4>
                <ul className="space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[11px] text-white/45 hover:text-[var(--accent)] transition-colors duration-200`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <h4 className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[9px] tracking-[0.15em] uppercase text-white/25 mb-2`}>
                {lang === 'bn' ? 'যোগাযোগ' : 'Contact'}
              </h4>
              <ul className="space-y-1.5">
                <li>
                  <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[11px] text-white/45 hover:text-[var(--accent)] transition-colors duration-200`}>
                    {text.whatsapp}
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className={`${lang === 'bn' ? 'font-bangla' : 'font-body'} text-[11px] text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200`}>
                    {text.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom — ultra tight */}
        <div className="py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/15 text-[10px] tracking-wider">
            &copy; {text.year} {text.bottom}. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-white/15 text-[10px] tracking-wider">
              {lang === 'bn' ? 'বাংলাদেশ থেকে ভালোবাসা দিয়ে' : 'Made with care in Bangladesh'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
