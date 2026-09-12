import React, { useState, useEffect } from 'react';
import { HaccoLogo } from './HaccoLogo';
import { Language, NavPage } from '../types';
import { translations } from '../translations';
import {
  Globe,
  Check,
  Code2,
  Layers,
  MessageSquare,
  Sparkles,
  Home,
  ShieldCheck,
  Users,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
  isAllPagesMode?: boolean;
  onToggleAllPagesMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activePage,
  onNavigate,
  isAllPagesMode = false,
  onToggleAllPagesMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [extraMenuOpen, setExtraMenuOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#lang-switcher-btn') && !target.closest('#lang-dropdown-menu')) {
        setLangDropdownOpen(false);
      }
      if (!target.closest('#extra-nav-toggle') && !target.closest('#extra-nav-menu')) {
        setExtraMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: 'ar', label: 'العربية', flag: '🇸🇦', nativeName: 'العربية' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷', nativeName: 'Türkçe' },
    { code: 'en', label: 'English', flag: '🇺🇸', nativeName: 'English' },
  ];

  const handleNavClick = (page: NavPage) => {
    setExtraMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-cyan-950/30 py-2.5 sm:py-3'
          : 'bg-[#080B10]/85 backdrop-blur-xl border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo - Direct Link to Home */}
          <button
            onClick={() => handleNavClick('home')}
            id="brand-logo-link"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg text-start cursor-pointer shrink-0"
            title="hacco Home"
          >
            <HaccoLogo size="md" showSubtitle={false} />
          </button>

          {/* Core Action Buttons - ALWAYS PROMINENT AND VISIBLE IN HEADER (Never Hidden!) */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap justify-center"
          >
            {/* 1. Services Button - Direct Header Button */}
            <button
              id="header-btn-services"
              onClick={() => handleNavClick('services')}
              className={`group flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'services'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>{t.nav.services}</span>
            </button>

            {/* 2. Portfolio / Our Work Button - Direct Header Button */}
            <button
              id="header-btn-portfolio"
              onClick={() => handleNavClick('portfolio')}
              className={`group flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'portfolio'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400 shadow-md shadow-purple-500/20 font-bold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-purple-500/40'
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>{t.nav.portfolio}</span>
            </button>

            {/* 3. Contact Us Button - Direct Glowing Header CTA Button */}
            <button
              id="header-btn-contact"
              onClick={() => handleNavClick('contact')}
              className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 transition-all shadow-lg shadow-cyan-950/70 hover:shadow-cyan-500/30 cursor-pointer overflow-hidden ${
                activePage === 'contact'
                  ? 'ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950'
                  : ''
              } bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200`}
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 group-hover:scale-110 transition-transform" />
              <span className="tracking-tight">{t.nav.contact}</span>
            </button>

            {/* Secondary Desktop Links: Home, Reviews & Results, Why Choose Us */}
            <div className="hidden xl:flex items-center gap-1.5 ms-2 ps-2 border-s border-white/10">
              <button
                id="header-link-home"
                onClick={() => handleNavClick('home')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  activePage === 'home'
                    ? 'text-cyan-300 font-bold bg-white/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Home className="w-3 h-3 text-cyan-400" />
                <span>{t.nav.home}</span>
              </button>

              <button
                id="header-link-reviews"
                onClick={() => handleNavClick('reviews')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  activePage === 'reviews'
                    ? 'text-emerald-300 font-bold bg-white/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Users className="w-3 h-3 text-emerald-400" />
                <span>{t.nav.reviews}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </button>

              <button
                id="header-link-whyus"
                onClick={() => handleNavClick('why-us')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  activePage === 'why-us'
                    ? 'text-amber-300 font-bold bg-white/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>{t.nav.whyUs}</span>
              </button>
            </div>
          </nav>

          {/* Right Action Tools: Language Switcher & More Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* View Mode Switcher Pill (Desktop only) */}
            {onToggleAllPagesMode && (
              <button
                onClick={onToggleAllPagesMode}
                className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 text-[11px] font-mono text-slate-300 transition-all cursor-pointer"
                title="Toggle between Page Switch and Continuous View"
              >
                <span>
                  {isAllPagesMode
                    ? currentLang === 'ar' ? 'نمط الصفحة الواحدة' : 'Single Page'
                    : currentLang === 'ar' ? 'تبديل الصفحات' : 'Page Switch'}
                </span>
              </button>
            )}

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                id="lang-switcher-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
                aria-expanded={langDropdownOpen}
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase font-mono font-bold text-xs">
                  {currentLang}
                </span>
                <span className="text-xs hidden sm:inline">
                  {languages.find((l) => l.code === currentLang)?.flag}
                </span>
              </button>

              {langDropdownOpen && (
                <div
                  id="lang-dropdown-menu"
                  className="absolute top-full mt-2 end-0 w-40 py-1.5 rounded-xl bg-slate-900/98 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-3 py-1 text-[10px] font-semibold text-slate-400 border-b border-white/5 uppercase tracking-wider">
                    {currentLang === 'ar' ? 'اللغة' : 'Language'}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-start transition-colors cursor-pointer ${
                        currentLang === lang.code
                          ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </div>
                      {currentLang === lang.code && (
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Extra Menu for Home, Reviews, Why Us on mobile/tablet screens */}
            <div className="relative xl:hidden">
              <button
                id="extra-nav-toggle"
                onClick={() => setExtraMenuOpen(!extraMenuOpen)}
                className="p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white cursor-pointer flex items-center justify-center"
                aria-label="More options"
                title="More navigation options"
              >
                {extraMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>

              {extraMenuOpen && (
                <div
                  id="extra-nav-menu"
                  className="absolute top-full mt-2 end-0 w-52 py-2 rounded-2xl bg-slate-900/98 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black z-50 animate-in fade-in zoom-in-95 duration-150 text-start"
                >
                  <div className="px-3 py-1 text-[10px] font-semibold text-slate-400 border-b border-white/5 uppercase tracking-wider">
                    {currentLang === 'ar' ? 'أقسام إضافية' : 'More Pages'}
                  </div>

                  <button
                    onClick={() => handleNavClick('home')}
                    className={`w-full px-3.5 py-2.5 text-xs flex items-center gap-2 transition-colors cursor-pointer ${
                      activePage === 'home'
                        ? 'bg-cyan-500/15 text-cyan-300 font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.nav.home}</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('reviews')}
                    className={`w-full px-3.5 py-2.5 text-xs flex items-center gap-2 transition-colors cursor-pointer ${
                      activePage === 'reviews'
                        ? 'bg-emerald-500/15 text-emerald-300 font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="flex-1">{t.nav.reviews}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                      NEW
                    </span>
                  </button>

                  <button
                    onClick={() => handleNavClick('why-us')}
                    className={`w-full px-3.5 py-2.5 text-xs flex items-center gap-2 transition-colors cursor-pointer ${
                      activePage === 'why-us'
                        ? 'bg-amber-500/15 text-amber-300 font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.nav.whyUs}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


