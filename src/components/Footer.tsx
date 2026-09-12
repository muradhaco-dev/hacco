import React from 'react';
import { Language, NavPage } from '../types';
import { translations } from '../translations';
import { HaccoLogo } from './HaccoLogo';
import { Mail, Phone, MessageSquare, ArrowUp, Github, Linkedin, Twitter, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate?: (page: NavPage) => void;
  activePage?: NavPage;
  onLanguageChange?: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate, activePage, onLanguageChange }) => {
  const t = translations[currentLang];

  const handleNav = (page: NavPage) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      const el = document.querySelector(`#${page === 'home' ? 'home' : page}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerWhatsAppUrl = `https://api.whatsapp.com/send?phone=905319666195&text=${encodeURIComponent(
    currentLang === 'ar'
      ? 'مرحباً مهندس مراد حجو، أتواصل معك عبر موقع hacco بخصوص استفسار عن مشروع برمجيات.'
      : currentLang === 'tr'
      ? 'Merhaba Murad Haco, hacco web sitesi üzerinden bir yazılım projesi hakkında bilgi almak istiyorum.'
      : 'Hello Murad Haco, I am reaching out from the hacco website regarding software development.'
  )}`;

  return (
    <footer className="relative bg-[#040609] border-t border-white/10 text-slate-400 text-sm overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4 text-start">
            <HaccoLogo size="md" showSubtitle={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/8 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/8 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/8 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/8 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3 text-start">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer text-start ${
                    activePage === 'home' ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer text-start ${
                    activePage === 'services' ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer text-start ${
                    activePage === 'portfolio' ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {t.nav.portfolio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer text-start flex items-center gap-1.5 ${
                    activePage === 'reviews' ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{t.nav.reviews}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('why-us')}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer text-start ${
                    activePage === 'why-us' ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {t.nav.whyUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer text-start ${
                    activePage === 'contact' ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3 text-start">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">Custom Web Applications</li>
              <li className="text-slate-300">Native iOS & Android Engineering</li>
              <li className="text-slate-300">Headless E-Commerce Solutions</li>
              <li className="text-slate-300">Cloud Microservices & DevOps</li>
              <li className="text-slate-300">UI/UX Design Systems</li>
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-3 space-y-3 text-start">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.contactInfoTitle}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:muradhaco@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-mono">muradhaco@gmail.com</span>
              </a>
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono">+90 531 966 6195</span>
              </a>
              <a
                href="tel:00905319666195"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-mono">00905319666195</span>
              </a>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.footer.securityBadge}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.rightsReserved}</p>

          <div className="flex items-center gap-3">
            {onLanguageChange && (
              <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-white/8">
                {(['ar', 'tr', 'en'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => onLanguageChange(lang)}
                    className={`px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                      currentLang === lang
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang === 'ar' ? '🇸🇦 AR' : lang === 'tr' ? '🇹🇷 TR' : '🇺🇸 EN'}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/8 hover:border-cyan-500/30 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
