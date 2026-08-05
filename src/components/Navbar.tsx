'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from './LangContext';

const links = {
  bn: [
    { label: 'পণ্য', href: '#products' },
    { label: 'গল্প', href: '#story' },
    { label: 'উপকরণ', href: '#ingredients' },
  ],
  en: [
    { label: 'Products', href: '#products' },
    { label: 'Story', href: '#story' },
    { label: 'Ingredients', href: '#ingredients' },
  ],
};

const cta = { bn: 'অর্ডার', en: 'Order' };

export default function Navbar() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-12 h-14 sm:h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="group">
            <div className="h-10 sm:h-12 md:h-14 w-auto overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img src="/logo-nav.png" alt="Kobir Bheshoji" className="h-full w-auto object-contain" />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links[lang].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${lang === 'bn' ? 'font-bangla' : 'font-heading'} text-[var(--fg-2)] hover:text-[var(--fg)] text-[13px] tracking-[0.08em] transition-colors duration-300`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={`${lang === 'bn' ? 'font-bangla' : ''} btn-primary text-xs`}
            >
              {cta[lang]}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-[var(--fg-2)] -mr-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg)]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {links[lang].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.2, 0, 0, 1] }}
                onClick={() => setMenuOpen(false)}
                className={`${lang === 'bn' ? 'font-bangla' : 'font-display'} text-3xl sm:text-4xl tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors py-2`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/8801XXXXXXXXX"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: [0.2, 0, 0, 1] }}
              target="_blank"
              rel="noopener noreferrer"
              className={`${lang === 'bn' ? 'font-bangla' : ''} mt-6 btn-primary w-full sm:w-auto justify-center`}
            >
              {cta[lang]}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
