import React, { useState, useEffect } from 'react';
import { Language, NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackBanner } from './components/TechStackBanner';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { ReviewsAndResults } from './components/ReviewsAndResults';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CodeMatrixBackground } from './components/CodeMatrixBackground';
import { ArrowRight, Sparkles, Code2, Users, Layers, MessageSquare, CheckCircle2 } from 'lucide-react';
import { translations } from './translations';

export default function App() {
  // Initialize language from saved preference or browser setting, fallback to Arabic with RTL
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('hacco_lang') as Language;
    if (saved && (saved === 'ar' || saved === 'tr' || saved === 'en')) {
      return saved;
    }
    return 'ar'; // Default to Arabic with full RTL support
  });

  // Page navigation state: 'home' | 'services' | 'portfolio' | 'reviews' | 'why-us' | 'contact'
  // Default is page-switching mode per the user's prompt
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [isAllPagesMode, setIsAllPagesMode] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('web');

  const t = translations[currentLang];

  // Sync document attributes (dir and lang) on language change
  useEffect(() => {
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('hacco_lang', currentLang);
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleSelectService = (serviceKey: string) => {
    setSelectedService(serviceKey);
    handleNavigate('contact');
  };

  const handleNavigate = (page: NavPage) => {
    setActivePage(page);

    if (isAllPagesMode) {
      const targetId = page === 'home' ? '#home' : page === 'reviews' ? '#reviews-and-results' : `#${page}`;
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // In Page Switch mode, jump to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleAllPagesMode = () => {
    setIsAllPagesMode((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#080B10] text-[#E2E8F0] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Programmatic Code Matrix Ambient Background for entire site */}
      <CodeMatrixBackground />

      {/* Dynamic Top Navigation Bar (Header) with Page Switcher and Language Switcher */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activePage={activePage}
        onNavigate={handleNavigate}
        isAllPagesMode={isAllPagesMode}
        onToggleAllPagesMode={handleToggleAllPagesMode}
      />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        {isAllPagesMode ? (
          /* Continuous All-in-One View Mode */
          <>
            <Hero currentLang={currentLang} onNavigate={handleNavigate} />
            <TechStackBanner currentLang={currentLang} />
            <Services
              currentLang={currentLang}
              onSelectService={handleSelectService}
              onNavigate={handleNavigate}
            />
            <WhyChooseUs currentLang={currentLang} />
            <Portfolio currentLang={currentLang} />
            <ReviewsAndResults currentLang={currentLang} onNavigate={handleNavigate} />
            <ContactSection
              currentLang={currentLang}
              selectedServiceKey={selectedService}
            />
          </>
        ) : (
          /* Seamless Page Switch Mode (Default requested by user) */
          <>
            {activePage === 'home' && (
              <div className="animate-in fade-in duration-300">
                {/* Hero Header Area */}
                <Hero currentLang={currentLang} onNavigate={handleNavigate} />

                {/* Tech Stack Banner */}
                <TechStackBanner currentLang={currentLang} />

                {/* Quick Interactive Highlights for Home */}
                <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{currentLang === 'ar' ? 'نظام الملاحة السريع' : 'Engineering Portal'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {currentLang === 'ar'
                        ? 'استكشف أقسام وإمكانيات hacco'
                        : currentLang === 'tr'
                        ? "hacco'nun Çözümlerini Keşfedin"
                        : 'Explore hacco Engineering Ecosystem'}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Services Card */}
                    <button
                      onClick={() => handleNavigate('services')}
                      className="group relative overflow-hidden rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 p-6 text-start transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {t.nav.services}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                        {t.services.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-cyan-400 font-semibold">
                        <span>{currentLang === 'ar' ? 'عرض الخدمات' : 'View Services'}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </button>

                    {/* Portfolio Card */}
                    <button
                      onClick={() => handleNavigate('portfolio')}
                      className="group relative overflow-hidden rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 p-6 text-start transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                        <Layers className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {t.nav.portfolio}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                        {t.portfolio.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-purple-400 font-semibold">
                        <span>{currentLang === 'ar' ? 'سابقة الأعمال' : 'View Projects'}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </button>

                    {/* Reviews & Results Card */}
                    <button
                      onClick={() => handleNavigate('reviews')}
                      className="group relative overflow-hidden rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 p-6 text-start transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 cursor-pointer ring-1 ring-cyan-500/20"
                    >
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                        <span>{t.nav.reviews}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                          NEW
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                        {t.reviews.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                        <span>{currentLang === 'ar' ? 'آراء ونتائج العملاء' : 'View Reviews & Results'}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </button>

                    {/* Contact Card */}
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="group relative overflow-hidden rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 p-6 text-start transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {t.nav.contact}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                        {t.contact.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-cyan-400 font-semibold">
                        <span>{currentLang === 'ar' ? 'خيارات التواصل المباشر' : 'Contact Murad Haco'}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>
                </section>
              </div>
            )}

            {activePage === 'services' && (
              <div className="animate-in fade-in duration-300">
                <Services
                  currentLang={currentLang}
                  onSelectService={handleSelectService}
                  onNavigate={handleNavigate}
                  isStandalonePage={true}
                />
                <TechStackBanner currentLang={currentLang} />
              </div>
            )}

            {activePage === 'portfolio' && (
              <div className="animate-in fade-in duration-300">
                <Portfolio currentLang={currentLang} isStandalonePage={true} />
              </div>
            )}

            {activePage === 'reviews' && (
              <div className="animate-in fade-in duration-300">
                <ReviewsAndResults
                  currentLang={currentLang}
                  onNavigate={handleNavigate}
                  isStandalonePage={true}
                />
              </div>
            )}

            {activePage === 'why-us' && (
              <div className="animate-in fade-in duration-300">
                <WhyChooseUs currentLang={currentLang} isStandalonePage={true} />
                <TechStackBanner currentLang={currentLang} />
              </div>
            )}

            {activePage === 'contact' && (
              <div className="animate-in fade-in duration-300">
                <ContactSection
                  currentLang={currentLang}
                  selectedServiceKey={selectedService}
                  isStandalonePage={true}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Dynamic Footer with Page Switching Quick Links */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        activePage={activePage}
        onLanguageChange={handleLanguageChange}
      />

      {/* Floating Quick WhatsApp & Phone Contact Button */}
      <WhatsAppFloatingButton currentLang={currentLang} />
    </div>
  );
}

