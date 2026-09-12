import React, { useState } from 'react';
import { MessageSquare, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppFloatingButtonProps {
  currentLang: Language;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const titles = {
    en: {
      help: 'Chat directly with Murad Haco on WhatsApp:',
      placeholder: 'Type your message or project question...',
      sendNow: 'Send Directly to Phone (+90 531 966 6195)',
      whatsapp: 'Open WhatsApp Chat',
      gmail: 'Email via Gmail',
      call: 'Direct Call',
    },
    ar: {
      help: 'تواصل مباشرة مع المهندس مراد حجو عبر واتساب:',
      placeholder: 'اكتب رسالتك أو استفسارك هنا...',
      sendNow: 'إرسال مباشرة لهاتف المهندس (+90 531 966 6195)',
      whatsapp: 'فتح محادثة واتساب',
      gmail: 'مراسلة عبر جيميل',
      call: 'اتصال هاتفي مباشر',
    },
    tr: {
      help: 'Murad Haco ile WhatsApp\'tan doğrudan görüşün:',
      placeholder: 'Mesajınızı veya proje sorunuzu yazın...',
      sendNow: 'Doğrudan Telefona Gönder (+90 531 966 6195)',
      whatsapp: 'WhatsApp Sohbetini Aç',
      gmail: 'Gmail ile Gönder',
      call: 'Doğrudan Ara',
    },
  };

  const t = titles[currentLang];

  const getWhatsAppUrl = () => {
    const defaultText =
      currentLang === 'ar'
        ? 'مرحباً مهندس مراد حجو، أتواصل معك عبر موقع hacco بخصوص استفسار عن مشروع برمجي.'
        : currentLang === 'tr'
        ? 'Merhaba Murad Haco, hacco web sitesinden bir proje danışmanlığı için yazıyorum.'
        : 'Hello Murad Haco, I am reaching out from the hacco website regarding a software project.';

    const messageToSend = quickMsg.trim() ? quickMsg.trim() : defaultText;
    return `https://api.whatsapp.com/send?phone=905319666195&text=${encodeURIComponent(messageToSend)}`;
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl();
    window.location.href = url;
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 end-4 sm:end-6 z-40 flex flex-col items-end">
      {/* Quick modal popup when opened */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-slate-900/95 border border-emerald-500/30 p-4 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-150 text-start">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-xs font-bold text-white block">Murad Haco</span>
                <span className="text-[10px] font-mono text-emerald-400 block">+90 531 966 6195</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-2 leading-relaxed">
            {t.help}
          </p>

          <form onSubmit={handleQuickSend} className="mb-3 space-y-2">
            <input
              type="text"
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder={t.placeholder}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-400 text-white placeholder-slate-500 text-xs outline-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.sendNow}</span>
            </button>
          </form>

          <div className="space-y-1.5 pt-2 border-t border-white/5">
            <a
              href="mailto:muradhaco@gmail.com?subject=Project%20Inquiry%20-%20hacco"
              className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-cyan-300 text-xs font-medium border border-cyan-500/20 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.gmail}</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href="tel:00905319666195"
              className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
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
