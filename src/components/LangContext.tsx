'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'bn' | 'en';

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: 'bn', toggle: () => {} });

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('bn');
  const toggle = () => setLang((l) => (l === 'bn' ? 'en' : 'bn'));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}
