import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Zap, Code2, TrendingUp, ShieldAlert, CheckCircle, ShieldCheck } from 'lucide-react';

interface WhyChooseUsProps {
  currentLang: Language;
  isStandalonePage?: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang, isStandalonePage = false }) => {
  const t = translations[currentLang];

  const valuesData = [
    {
      id: 'speed',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      bgPattern: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
      title: t.whyUs.values.highSpeed.title,
      desc: t.whyUs.values.highSpeed.desc,
      metric: t.whyUs.values.highSpeed.metric,
    },
    {
      id: 'clean',
      icon: Code2,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      bgPattern: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop',
      title: t.whyUs.values.cleanCode.title,
      desc: t.whyUs.values.cleanCode.desc,
      metric: t.whyUs.values.cleanCode.metric,
    },
    {
      id: 'scalable',
      icon: TrendingUp,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20',
      bgPattern: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=600&auto=format&fit=crop',
      title: t.whyUs.values.scalable.title,
      desc: t.whyUs.values.scalable.desc,
      metric: t.whyUs.values.scalable.metric,
    },
    {
      id: 'support',
      icon: ShieldCheck,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      bgPattern: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
      title: t.whyUs.values.support247.title,
      desc: t.whyUs.values.support247.desc,
      metric: t.whyUs.values.support247.metric,
    },
  ];

  return (
    <section
      id="why-us"
      className={`relative ${isStandalonePage ? 'pt-36 pb-20 sm:pt-40 sm:pb-28' : 'py-24 sm:py-32'} bg-[#06080D]/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-900/75 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 text-start"
              >
                {/* Background image on card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: `url('${val.bgPattern}')` }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${val.bgColor}`}>
                      <Icon className={`w-6 h-6 ${val.color}`} />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 border border-white/5 text-slate-300">
                      {val.metric}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                  <span>hacco engineering standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
