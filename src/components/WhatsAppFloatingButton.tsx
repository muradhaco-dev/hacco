import React, { useState } from 'react';
import { MessageSquare, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppFloatingButtonProps {
  currentLang: Language;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const titles = {
    en: {
      help: 'Need fast engineering feedback?',
      whatsapp: 'Chat on WhatsApp',
      gmail: 'Email via Gmail',
      call: 'Direct Call',
    },
    ar: {
      help: 'هل تحتاج استشارة برمجية سريعة؟',
      whatsapp: 'محادثة عبر واتساب',
      gmail: 'مراسلة عبر جيميل',
      call: 'اتصال هاتفي مباشر',
    },
    tr: {
      help: 'Hızlı teknik danışmanlık mı lazım?',
      whatsapp: 'WhatsApp\'tan Yazın',
      gmail: 'Gmail ile Gönder',
      call: 'Doğrudan Ara',
    },
  };

  const t = titles[currentLang];

  return (
    <div className="fixed bottom-20 sm:bottom-6 end-4 sm:end-6 z-40 flex flex-col items-end">
      {/* Quick modal popup when opened */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-slate-900/95 border border-cyan-500/30 p-4 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-150 text-start">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Murad Haco (Lead)</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            {t.help}
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/905319666195?text=Hello%20Murad%20Haco,%20I'm%20contacting%20you%20from%20the%20hacco%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>{t.whatsapp}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="mailto:muradhaco@gmail.com?subject=Project%20Inquiry%20-%20hacco"
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-cyan-500/20 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{t.gmail}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:00905319666195"
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{t.call}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">00905319666195</span>
            </a>
          </div>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-2xl shadow-emerald-950/60 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="Contact via WhatsApp or Direct Call"
      >
        <div className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-sm animate-pulse -z-10" />
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
