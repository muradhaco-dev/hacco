import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Mail, Phone, MessageSquare, Send, Copy, Check, ExternalLink, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  selectedServiceKey?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  selectedServiceKey,
  isStandalonePage = false,
}) => {
  const t = translations[currentLang];

  const GMAIL_ADDRESS = 'muradhaco@gmail.com';
  const PHONE_NUMBER = '+90 531 966 6195';
  const PHONE_CLEAN = '905319666195';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedServiceKey || 'web',
    budget: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(GMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const constructEmailBody = () => {
    return encodeURIComponent(
      `Hello Murad,\n\nI would like to discuss an engineering project with hacco.\n\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Email: ${formData.email || 'Not provided'}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Service: ${formData.service}\n` +
      `• Timeline / Budget: ${formData.budget || 'Flexible'}\n\n` +
      `Project Details:\n${formData.message || 'No additional details provided.'}\n\n` +
      `Sent via hacco digital portal.`
    );
  };

  const constructEmailSubject = () => {
    return encodeURIComponent(`[hacco Inquiry] ${formData.service.toUpperCase()} Project - ${formData.name || 'Client'}`);
  };

  const constructWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Murad Haco, I'm reaching out regarding a project with hacco:\n\n` +
      `*Name:* ${formData.name || 'Client'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Message:* ${formData.message || 'I would like to discuss an engineering collaboration.'}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger default mailto automatically for smooth native email client integration
      const mailtoUrl = `mailto:${GMAIL_ADDRESS}?subject=${constructEmailSubject()}&body=${constructEmailBody()}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  const openGmailWeb = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ADDRESS}&su=${constructEmailSubject()}&body=${constructEmailBody()}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const openWhatsApp = () => {
    const waUrl = `https://wa.me/${PHONE_CLEAN}?text=${constructWhatsAppMessage()}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className={`relative ${isStandalonePage ? 'pt-28 pb-20 sm:pt-36 sm:pb-28' : 'py-24 sm:py-32'} bg-[#06080D]/40`}
    >
      {/* Glow gradient blobs */}
      <div className="absolute top-1/3 end-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 start-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-start">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              {/* Card background wallpaper */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06] pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop')` }}
              />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {t.contact.infoTitle}
                </h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                  {t.contact.infoDesc}
                </p>

                <div className="space-y-6">
                {/* Gmail Card */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {t.contact.emailLabel}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition-colors cursor-pointer"
                      title={t.contact.copyEmail}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">{t.contact.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>{t.contact.copyEmail}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${GMAIL_ADDRESS}`}
                    className="block text-base sm:text-lg font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {GMAIL_ADDRESS}
                  </a>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={openGmailWeb}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.contact.openGmail}</span>
                    </button>
                  </div>
                </div>

                {/* WhatsApp & Phone Card */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {t.contact.whatsappLabel}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ONLINE
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/${PHONE_CLEAN}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base sm:text-lg font-mono font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${PHONE_CLEAN}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{t.contact.callNow}</span>
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-white/5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-200">{t.contact.locationLabel}: </span>
                    <span>{t.contact.locationValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Assurance Box */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900 border border-cyan-500/20 p-5 flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-cyan-300 block mb-0.5">Direct Engineering Access</strong>
              All inquiries reach Murad Haco directly without sales intermediaries. Expect an architecture reply within 4 hours.
            </div>
          </div>
        </div>

        {/* Right Column: Modern Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl text-start">
            {/* Form card background image */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04] pointer-events-none bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')` }}
            />
            <div className="relative z-10">
              {submitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t.contact.form.successTitle}
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      {t.contact.form.successMsg}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={openGmailWeb}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.contact.form.sendViaEmail}</span>
                    </button>

                    <button
                      onClick={openWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.form.sendViaWhatsapp}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white transition-colors underline pt-4 cursor-pointer block mx-auto"
                  >
                    {t.contact.form.resetBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                        {t.contact.form.nameLabel} <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                        {t.contact.form.emailLabel} <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Service Requested */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                        {t.contact.form.serviceLabel} <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="web" className="bg-slate-900 text-white">
                          {t.contact.form.servicesList.web}
                        </option>
                        <option value="mobile" className="bg-slate-900 text-white">
                          {t.contact.form.servicesList.mobile}
                        </option>
                        <option value="fullstack" className="bg-slate-900 text-white">
                          {t.contact.form.servicesList.fullstack}
                        </option>
                        <option value="consulting" className="bg-slate-900 text-white">
                          {t.contact.form.servicesList.consulting}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                      {t.contact.form.budgetLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder={t.contact.form.budgetPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Project Overview Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                      {t.contact.form.messageLabel} <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-950/70 hover:shadow-cyan-500/25 transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>{t.contact.form.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 rtl:rotate-180" />
                        <span>{t.contact.form.submitBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
