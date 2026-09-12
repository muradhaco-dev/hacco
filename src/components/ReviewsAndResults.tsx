import React, { useState } from 'react';
import { Language, NavPage } from '../types';
import { translations } from '../translations';
import { clientTestimonials, clientProjectResults } from '../data/mockData';
import {
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  Award,
  Users
} from 'lucide-react';

interface ReviewsAndResultsProps {
  currentLang: Language;
  onNavigate: (page: NavPage) => void;
  isStandalonePage?: boolean;
}

export const ReviewsAndResults: React.FC<ReviewsAndResultsProps> = ({
  currentLang,
  onNavigate,
  isStandalonePage = false,
}) => {
  const t = translations[currentLang];
  const testimonials = clientTestimonials[currentLang] || clientTestimonials.en;
  const projectResults = clientProjectResults[currentLang] || clientProjectResults.en;

  const [activeTab, setActiveTab] = useState<'both' | 'reviews' | 'results'>('both');
  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(0);

  return (
    <section
      id="reviews-and-results"
      className={`relative ${isStandalonePage ? 'pt-36 pb-20 sm:pt-40 sm:pb-28' : 'py-20 sm:py-28'} overflow-hidden`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 start-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 end-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.reviews.subtitle}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/8 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-400">4.98 / 5.0</div>
              <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>50+ Client Reviews</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/8 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">100%</div>
              <div className="text-[11px] text-slate-400">{t.reviews.satisfactionScore}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/8 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-mono font-bold text-sky-400">99.4%</div>
              <div className="text-[11px] text-slate-400">{t.reviews.onTimeRate}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/8 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-mono font-bold text-indigo-400">0 Flaws</div>
              <div className="text-[11px] text-slate-400">Bank-Grade Code Audit</div>
            </div>
          </div>

          {/* View Mode Toggle Filter */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'both'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {currentLang === 'ar' ? 'عرض متكامل (جنباً إلى جنب)' : currentLang === 'tr' ? 'Birlikte Görüntüle' : 'Side-by-Side View'}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.reviews.reviewsTab}
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'results'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.reviews.resultsTab}
            </button>
          </div>
        </div>

        {/* Side-by-Side Content Grid */}
        <div
          className={`grid gap-8 items-start ${
            activeTab === 'both'
              ? 'grid-cols-1 lg:grid-cols-12'
              : 'grid-cols-1'
          }`}
        >
          {/* Column 1: Client Reviews (آراء العملاء) */}
          {(activeTab === 'both' || activeTab === 'reviews') && (
            <div className={activeTab === 'both' ? 'lg:col-span-5 space-y-5 text-start' : 'space-y-6 max-w-4xl mx-auto text-start'}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">
                    {t.reviews.reviewsHeading}
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                  {testimonials.length} Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-4">
                {t.reviews.reviewsSubheading}
              </p>

              {/* Testimonials List */}
              <div className="space-y-4">
                {testimonials.map((testi) => (
                  <div
                    key={testi.id}
                    className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/40 p-5 sm:p-6 transition-all duration-300 bg-slate-900/85 backdrop-blur-xl shadow-xl hover:shadow-cyan-950/30"
                  >
                    {/* Card Programming Wallpaper Texture */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.14] transition-opacity pointer-events-none bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')`,
                      }}
                    />

                    {/* Gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/95 to-slate-950/90 pointer-events-none -z-10" />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      {/* Top Bar: Stars + Country Flag + Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(testi.rating)].map((_, idx) => (
                            <Star
                              key={idx}
                              className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="text-sm">{testi.countryFlag}</span>
                          <span className="font-mono text-[11px] text-slate-500">{testi.date}</span>
                        </div>
                      </div>

                      {/* Review Quote Text */}
                      <div className="relative my-2">
                        <Quote className="w-6 h-6 text-cyan-400/20 absolute -top-2 start-0 rtl:rotate-180 -z-10" />
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed ps-2 font-normal">
                          «{testi.review}»
                        </p>
                      </div>

                      {/* Project Tag Pill */}
                      <div className="my-3">
                        <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
                          {testi.projectTag}
                        </span>
                      </div>

                      {/* Client Profile */}
                      <div className="pt-3 border-t border-white/8 flex items-center gap-3">
                        <img
                          src={testi.avatar}
                          alt={testi.clientName}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-xl object-cover border border-cyan-400/30"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-white truncate">
                              {testi.clientName}
                            </span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title={t.reviews.verifiedClientBadge} />
                          </div>
                          <p className="text-xs text-slate-400 truncate">
                            {testi.clientRole} • <span className="text-slate-300">{testi.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: What Clients Requested vs Delivered Results (نتائج ما طلبه العملاء) */}
          {(activeTab === 'both' || activeTab === 'results') && (
            <div className={activeTab === 'both' ? 'lg:col-span-7 space-y-5 text-start' : 'space-y-6 max-w-4xl mx-auto text-start'}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">
                    {t.reviews.resultsHeading}
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  Measurable ROI
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-4">
                {t.reviews.resultsSubheading}
              </p>

              {/* Result Project Cards */}
              <div className="space-y-5">
                {projectResults.map((result, idx) => (
                  <div
                    key={result.id}
                    className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 bg-slate-900/85 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 shadow-2xl"
                  >
                    {/* Background Code / Server Wallpaper */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.09] group-hover:opacity-[0.15] transition-opacity pointer-events-none bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop')`,
                      }}
                    />

                    {/* Gradient contrast layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/95 to-slate-950/90 pointer-events-none -z-10" />

                    <div className="relative z-10 space-y-4">
                      {/* Header: Title + Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/8 pb-3">
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                            {result.industry} • {result.clientName}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                            {result.projectTitle}
                          </h4>
                        </div>
                        <div className="self-start sm:self-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold shadow-sm">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{result.badge}</span>
                          </span>
                        </div>
                      </div>

                      {/* Request vs Delivery Split */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        {/* 1. What was requested */}
                        <div className="p-4 rounded-xl bg-slate-950/70 border border-red-500/20">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5">
                            <Target className="w-3.5 h-3.5" />
                            <span>{t.reviews.whatClientRequested}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {result.whatWasRequested}
                          </p>
                        </div>

                        {/* 2. What hacco delivered */}
                        <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            <span>{t.reviews.whatHaccoDelivered}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {result.whatWasDelivered}
                          </p>
                        </div>
                      </div>

                      {/* Tangible Metrics Delivered */}
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                          {t.reviews.metricsTitle}:
                        </div>
                        <div className="grid grid-cols-3 gap-2.5">
                          {result.tangibleMetrics.map((met, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-2.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-center"
                            >
                              <div className="text-sm sm:text-base font-mono font-extrabold text-cyan-300">
                                {met.value}
                              </div>
                              <div className="text-[10px] font-semibold text-slate-200 mt-0.5">
                                {met.label}
                              </div>
                              <div className="text-[9px] text-slate-400 truncate mt-0.5 hidden sm:block">
                                {met.detail}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Client Opinion Quote */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/30 to-indigo-950/30 border border-cyan-500/20">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{t.reviews.clientFeedbackQuote}:</span>
                        </div>
                        <p className="text-xs italic text-slate-300 leading-relaxed">
                          {result.clientOpinion}
                        </p>
                      </div>

                      {/* Tech stack used */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {result.techStack.map((st) => (
                          <span
                            key={st}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-white/5 text-slate-300"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Assurance Guarantee Card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-start">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t.reviews.guaranteeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                {t.reviews.guaranteeDesc}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-950/80 transition-all cursor-pointer"
          >
            <span>{t.reviews.ctaReviewBtn}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
