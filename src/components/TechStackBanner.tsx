import React from 'react';
import { techStackLogos } from '../data/mockData';
import { translations } from '../translations';
import { Language } from '../types';

interface TechStackBannerProps {
  currentLang: Language;
}

export const TechStackBanner: React.FC<TechStackBannerProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="relative py-8 border-y border-white/8 bg-[#06080D]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
          {t.hero.techStackTitle}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-6xl mx-auto px-4">
        {techStackLogos.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-xs font-mono font-medium text-slate-300">
              {tech.name}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500 hidden sm:inline">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
