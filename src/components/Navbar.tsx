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
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.lang-dropdown-container')) {
        setLangDropdownOpen(false);
      }
      if (!target.closest('.extra-nav-container')) {
        setExtraMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
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
        {/* Desktop / Tablet Bar (md and above) */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Brand Logo - Direct Link to Home */}
          <button
            onClick={() => handleNavClick('home')}
            id="brand-logo-link"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg text-start cursor-pointer shrink-0"
            title="hacco Home"
          >
            <HaccoLogo size="md" showSubtitle={false} />
          </button>

          {/* Desktop Core Action Buttons - PROMINENT & VISIBLE IN HEADER */}
          <nav
            aria-label="Main Navigation Desktop"
            className="flex items-center gap-2 lg:gap-3 flex-wrap justify-center"
          >
            {/* 1. Services Button */}
            <button
              id="header-btn-services"
              onClick={() => handleNavClick('services')}
              className={`group flex items-center gap-1.5 px-3.5 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'services'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40'
              }`}
            >
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>{t.nav.services}</span>
            </button>

            {/* 2. Portfolio Button */}
            <button
              id="header-btn-portfolio"
              onClick={() => handleNavClick('portfolio')}
              className={`group flex items-center gap-1.5 px-3.5 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'portfolio'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400 shadow-md shadow-purple-500/20 font-bold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-purple-500/40'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>{t.nav.portfolio}</span>
            </button>

            {/* 3. Contact Us Button - Prominent Glowing CTA */}
            <button
              id="header-btn-contact"
              onClick={() => handleNavClick('contact')}
              className={`group relative flex items-center gap-2 px-4 lg:px-5 py-2 rounded-xl text-xs lg:text-sm font-bold text-slate-950 transition-all shadow-lg shadow-cyan-950/70 hover:shadow-cyan-500/30 cursor-pointer overflow-hidden ${
                activePage === 'contact'
                  ? 'ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950'
                  : ''
              } bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200`}
            >
              <MessageSquare className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
              <span className="tracking-tight">{t.nav.contact}</span>
            </button>

            {/* Secondary Desktop Links: Home, Reviews & Results, Why Choose Us */}
            <div className="flex items-center gap-1.5 ms-2 ps-2 border-s border-white/10">
              <button
                id="header-link-home"
                onClick={() => handleNavClick('home')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  activePage === 'home'
                    ? 'text-cyan-300 font-bold bg-white/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Home className="w-3.5 h-3.5 text-cyan-400" />
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
                <Users className="w-3.5 h-3.5 text-emerald-400" />
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
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.nav.whyUs}</span>
              </button>
            </div>
          </nav>

          {/* Desktop Right Action Tools: Language Switcher & View Mode */}
          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Switcher Pill */}
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
            <div className="relative lang-dropdown-container">
              <button
                id="lang-switcher-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
                aria-expanded={langDropdownOpen}
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase font-mono font-bold text-xs">
                  {currentLang}
                </span>
                <span className="text-xs">
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
                      onClick={(e) => {
                        e.stopPropagation();
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
          </div>
        </div>

        {/* Mobile Header (md:hidden) - Engineered with 2 Clean Rows for Perfect Phone Usability */}
        <div className="flex md:hidden flex-col gap-2">
          {/* Row 1: Brand Logo + Direct 1-Tap Language Switcher + Menu */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => handleNavClick('home')}
              id="mobile-brand-logo"
              className="group flex items-center focus:outline-none rounded-lg text-start cursor-pointer shrink-0"
            >
              <HaccoLogo size="sm" showSubtitle={false} />
            </button>

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Direct 1-Tap Segmented Language Switcher on Mobile (Never fails, Instant Tap) */}
              <div
                id="mobile-lang-segmented-bar"
                className="flex items-center p-0.5 rounded-xl bg-slate-900/90 border border-white/15 shadow-inner"
              >
                {languages.map((lang) => {
                  const isActive = currentLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      id={`mobile-lang-${lang.code}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onLanguageChange(lang.code);
                      }}
                      className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 font-bold border border-cyan-400/60 shadow-sm shadow-cyan-500/20'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      aria-pressed={isActive}
                      title={lang.nativeName}
                    >
                      <span className="text-xs">{lang.flag}</span>
                      <span className="uppercase font-mono text-[11px] font-bold">{lang.code}</span>
                    </button>
                  );
                })}
              </div>

              {/* Extra Pages Menu (Reviews, Why Us, Home + Language List) */}
              <div className="relative extra-nav-container">
                <button
                  id="mobile-extra-toggle"
                  type="button"
                  onClick={() => setExtraMenuOpen(!extraMenuOpen)}
                  className="p-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
                  aria-label="Extra menu"
                >
                  {extraMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
                </button>

                {extraMenuOpen && (
                  <div
                    id="mobile-extra-menu"
                    className="absolute top-full mt-2 end-0 w-52 py-2 rounded-2xl bg-slate-900/98 border border-white/15 backdrop-blur-2xl shadow-2xl z-50 text-start"
                  >
                    <div className="px-3 py-1 text-[10px] font-semibold text-slate-400 border-b border-white/5 uppercase tracking-wider">
                      {currentLang === 'ar' ? 'أقسام إضافية' : 'More Pages'}
                    </div>

                    <button
                      onClick={() => handleNavClick('home')}
                      className={`w-full px-3 py-2 text-xs flex items-center gap-2 ${
                        activePage === 'home' ? 'bg-cyan-500/15 text-cyan-300 font-bold' : 'text-slate-300'
                      }`}
                    >
                      <Home className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.nav.home}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('reviews')}
                      className={`w-full px-3 py-2 text-xs flex items-center gap-2 ${
                        activePage === 'reviews' ? 'bg-emerald-500/15 text-emerald-300 font-bold' : 'text-slate-300'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.nav.reviews}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('why-us')}
                      className={`w-full px-3 py-2 text-xs flex items-center gap-2 ${
                        activePage === 'why-us' ? 'bg-amber-500/15 text-amber-300 font-bold' : 'text-slate-300'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.nav.whyUs}</span>
                    </button>

                    {/* Quick Language Switcher inside extra menu */}
                    <div className="mt-2 pt-2 border-t border-white/10 px-3">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        {currentLang === 'ar' ? 'اللغة الحالية' : 'Select Language'}
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        {languages.map((l) => (
                          <button
                            key={l.code}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onLanguageChange(l.code);
                              setExtraMenuOpen(false);
                            }}
                            className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 ${
                              currentLang === l.code
                                ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-400/60 font-bold'
                                : 'bg-slate-800/80 text-slate-300 hover:text-white'
                            }`}
                          >
                            <span>{l.flag}</span>
                            <span className="uppercase text-[10px] font-mono">{l.code}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Row 2: DIRECT VISIBLE HEADER BUTTONS (Never Hidden on Mobile!) */}
          <nav
            aria-label="Mobile Header Primary Buttons"
            className="grid grid-cols-3 gap-1.5 w-full pt-1"
          >
            {/* 1. Services Button */}
            <button
              id="mobile-header-btn-services"
              onClick={() => handleNavClick('services')}
              className={`flex items-center justify-center gap-1 py-2 px-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'services'
                  ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-400 shadow-sm font-bold'
                  : 'bg-slate-900/90 text-slate-200 border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{t.nav.services}</span>
            </button>

            {/* 2. Portfolio Button */}
            <button
              id="mobile-header-btn-portfolio"
              onClick={() => handleNavClick('portfolio')}
              className={`flex items-center justify-center gap-1 py-2 px-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'portfolio'
                  ? 'bg-purple-500/25 text-purple-300 border border-purple-400 shadow-sm font-bold'
                  : 'bg-slate-900/90 text-slate-200 border border-white/10 hover:border-purple-500/30'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{t.nav.portfolio}</span>
            </button>

            {/* 3. Contact Button - Glowing CTA */}
            <button
              id="mobile-header-btn-contact"
              onClick={() => handleNavClick('contact')}
              className={`flex items-center justify-center gap-1 py-2 px-1 rounded-xl text-xs font-bold text-slate-950 transition-all shadow-md shadow-cyan-950/60 cursor-pointer ${
                activePage === 'contact'
                  ? 'ring-2 ring-cyan-300'
                  : ''
              } bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="truncate">{t.nav.contact}</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Floating Bottom Quick Dock for Mobile Phone Users (md:hidden) */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
        <div className="mx-auto max-w-md rounded-2xl bg-slate-950/90 border border-white/15 backdrop-blur-2xl shadow-2xl p-1.5 flex items-center justify-around">
          <button
            onClick={() => handleNavClick('home')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
              activePage === 'home' ? 'text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">{t.nav.home}</span>
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
              activePage === 'services' ? 'text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">{t.nav.services}</span>
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
              activePage === 'portfolio' ? 'text-purple-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">{t.nav.portfolio}</span>
          </button>

          <button
            onClick={() => handleNavClick('reviews')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
              activePage === 'reviews' ? 'text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">{t.nav.reviews}</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
              activePage === 'contact'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                : 'text-cyan-400 hover:text-cyan-300'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">{t.nav.contact}</span>
          </button>
        </div>
      </div>
    </header>
  );
};


