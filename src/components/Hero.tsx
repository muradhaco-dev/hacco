import React, { useState } from 'react';
import { Language, NavPage } from '../types';
import { translations } from '../translations';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap,
  Code2,
  Smartphone,
  Cpu,
  Server,
  Activity,
  CheckCircle2,
  Mail,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Flame,
  Globe
} from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onNavigate?: (page: NavPage) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const [activeConsoleTab, setActiveConsoleTab] = useState<'architecture' | 'telemetry' | 'security'>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleAction = (page: NavPage) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      const el = document.querySelector(`#${page}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippet = `// @hacco/enterprise-core v2.8
export const systemCluster = defineSystem({
  engine: 'Next.js 15 AppRouter' | 'Flutter Native',
  architecture: 'Distributed Microservices',
  throughput: '48,500 req/sec',
  persistence: 'PostgreSQL + Redis Edge Cache',
  security: ['Zero-Trust', 'AES-256', 'mTLS'],
  leadEngineer: 'Murad Haco (hacco lead)',
  status: 'ACTIVE_ZERO_DOWNTIME'
});`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Localized hero status badge
  const liveBadgeText = {
    ar: 'متاح حالياً للمشاريع البرمجية الجديدة والاستشارات الهندسية',
    tr: 'Yeni Projeler ve Mimari Danışmanlık İçin Aktif',
    en: 'Available for High-Impact Software Projects & Architecture',
  }[currentLang];

  // Localized interactive console strings
  const consoleStrings = {
    ar: {
      archTab: 'الهندسة المعمارية',
      telemetryTab: 'المؤشرات الحية',
      securityTab: 'الأمان والامتثال',
      p99Latency: 'زمن الاستجابة P99',
      throughput: 'الطلبات في الثانية',
      uptimeMetric: 'موثوقية التشغيل',
      cacheHit: 'كفاءة الـ Cache',
      leadArchitect: 'مراد حاقو • كبير مهندسي البرمجيات',
      directContact: 'تواصل مباشر',
      securityAudited: 'تدقيق أمني شامل (ISO & GDPR)',
      encryptionStandard: 'تشفير كامل للبيانات AES-256',
      zeroDowntime: 'تحديثات حية بدون توقف (Zero-Downtime)',
      exploreCode: 'استكشف البنية البرمجية',
    },
    tr: {
      archTab: 'Yazılım Mimarisi',
      telemetryTab: 'Canlı Telemetri',
      securityTab: 'Güvenlik & Uyum',
      p99Latency: 'P99 Yanıt Süresi',
      throughput: 'Saniyedeki İstek',
      uptimeMetric: 'Çalışma Süresi',
      cacheHit: 'Önbellek Oranı',
      leadArchitect: 'Murad Haco • Baş Yazılım Mimarı',
      directContact: 'Doğrudan İletişim',
      securityAudited: 'Tam Güvenlik Denetimi (ISO & GDPR)',
      encryptionStandard: 'AES-256 Veri Şifreleme',
      zeroDowntime: 'Kesintisiz Canlı Güncellemeler',
      exploreCode: 'Kodu İncele',
    },
    en: {
      archTab: 'Architecture.ts',
      telemetryTab: 'Telemetry.live',
      securityTab: 'Security.audit',
      p99Latency: 'P99 Global Latency',
      throughput: 'Throughput Speed',
      uptimeMetric: 'SLA Reliability',
      cacheHit: 'Edge Cache Hit',
      leadArchitect: 'Murad Haco • Lead Architect',
      directContact: 'Direct Access',
      securityAudited: 'Full Security Audit (ISO & GDPR)',
      encryptionStandard: 'AES-256 End-to-End Encryption',
      zeroDowntime: 'Zero-Downtime Rolling Deploys',
      exploreCode: 'Inspect Architecture',
    },
  }[currentLang];

  return (
    <section id="home" className="relative pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Optical Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] md:w-[1050px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 start-10 w-[450px] h-[450px] bg-teal-500/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 end-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Cyber Optical Grid Line overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Master Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs md:text-sm font-medium mb-5 sm:mb-6 shadow-lg shadow-cyan-950/30 backdrop-blur-xl group hover:border-cyan-400 transition-colors max-w-full">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide truncate sm:whitespace-normal">{liveBadgeText}</span>
            </div>

            {/* Main Grand Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.14] mb-5 sm:mb-6 break-words">
              {t.hero.headlinePart1}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">
                {t.hero.headlineHighlight}
                <span className="absolute -bottom-1 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-60 rounded-full" />
              </span>
              {t.hero.headlinePart2}
            </h1>

            {/* Refined Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300/90 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={() => handleAction('contact')}
                id="hero-contact-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 hover:text-black font-bold text-sm sm:text-base shadow-xl shadow-cyan-950/70 hover:shadow-cyan-500/25 transition-all duration-200 cursor-pointer group"
              >
                <span>{t.hero.contactUs}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleAction('services')}
                id="hero-explore-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer backdrop-blur-xl"
              >
                <span>{t.hero.exploreServices}</span>
              </button>
            </div>

            {/* Lead Architect Direct Contact Bar */}
            <div className="w-full max-w-2xl p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-8 sm:mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono text-sm shrink-0">
                  MH
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Murad Haco</span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      LEAD ARCHITECT
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    muradhaco@gmail.com
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:flex items-center gap-2">
                <a
                  href="https://wa.me/905319666195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:muradhaco@gmail.com"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Gmail</span>
                </a>
              </div>
            </div>

            {/* Metrics & Performance Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full max-w-2xl">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-mono">
                  {t.hero.stats.projects}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {t.hero.stats.projectsLabel}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-mono">
                  {t.hero.stats.uptime}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {t.hero.stats.uptimeLabel}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 font-mono">
                  {t.hero.stats.speed}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {t.hero.stats.speedLabel}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 font-mono">
                  {t.hero.stats.satisfaction}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {t.hero.stats.satisfactionLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: World-Class Interactive Engineering Console */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Outer Glow Backdrop */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-sky-500/20 to-indigo-600/30 opacity-70 blur-2xl -z-10" />

            {/* Top Floating Glass Badge */}
            <div className="absolute -top-5 end-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Architecture 2026</span>
            </div>

            {/* Main Interactive Terminal Window */}
            <div className="relative rounded-2xl bg-[#090E17]/95 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden text-start">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c1422] border-b border-white/10">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Path label */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300">hacco://cluster/prod</span>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">HEALTHY</span>
                </div>
              </div>

              {/* Interactive Console Tabs */}
              <div className="flex items-center bg-[#070b12] border-b border-white/10 px-2 pt-2 gap-1 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveConsoleTab('architecture')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer ${
                    activeConsoleTab === 'architecture'
                      ? 'bg-[#090E17] text-cyan-300 border-t-2 border-t-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{consoleStrings.archTab}</span>
                </button>

                <button
                  onClick={() => setActiveConsoleTab('telemetry')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer ${
                    activeConsoleTab === 'telemetry'
                      ? 'bg-[#090E17] text-cyan-300 border-t-2 border-t-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{consoleStrings.telemetryTab}</span>
                </button>

                <button
                  onClick={() => setActiveConsoleTab('security')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer ${
                    activeConsoleTab === 'security'
                      ? 'bg-[#090E17] text-cyan-300 border-t-2 border-t-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{consoleStrings.securityTab}</span>
                </button>
              </div>

              {/* Console Body Tab 1: Architecture Code */}
              {activeConsoleTab === 'architecture' && (
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto select-text">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] text-slate-400">
                    <span className="text-cyan-400">// production-cluster.config.ts</span>
                    <button
                      onClick={copyCode}
                      className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="text-slate-300 space-y-1">
                    <div>
                      <span className="text-purple-400">export const </span>
                      <span className="text-cyan-300">haccoEngine </span>
                      <span className="text-slate-400">= </span>
                      <span className="text-emerald-400">createEngine</span>
                      <span className="text-slate-400">({'{'}</span>
                    </div>
                    <div className="ps-4">
                      <span className="text-slate-400">core: </span>
                      <span className="text-amber-300">'Next.js 15 AppRouter'</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="ps-4">
                      <span className="text-slate-400">mobile: </span>
                      <span className="text-amber-300">'Flutter 3.24 & React Native'</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="ps-4">
                      <span className="text-slate-400">database: </span>
                      <span className="text-cyan-300">['PostgreSQL', 'Redis Cache']</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="ps-4">
                      <span className="text-slate-400">security: </span>
                      <span className="text-emerald-300">['Zero-Trust', 'AES-256']</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="ps-4">
                      <span className="text-slate-400">leadEngineer: </span>
                      <span className="text-amber-300">'Murad Haco'</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="ps-4">
                      <span className="text-slate-400">availability: </span>
                      <span className="text-emerald-400">99.99</span>
                    </div>
                    <div>
                      <span className="text-slate-400">{'}'});</span>
                    </div>
                  </pre>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">TypeScript 5.6 Strict Mode</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 0 Type Errors
                    </span>
                  </div>
                </div>
              )}

              {/* Console Body Tab 2: Live Telemetry */}
              {activeConsoleTab === 'telemetry' && (
                <div className="p-4 sm:p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-cyan-500/20">
                      <span className="text-[11px] text-slate-400 block">{consoleStrings.p99Latency}</span>
                      <span className="text-xl font-bold font-mono text-cyan-300 mt-1 block">12.4 ms</span>
                      <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">&uarr; 3x faster than industry standard</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/20">
                      <span className="text-[11px] text-slate-400 block">{consoleStrings.throughput}</span>
                      <span className="text-xl font-bold font-mono text-emerald-300 mt-1 block">48,500 /s</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">Zero packet drops</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Server Cluster Load</span>
                      <span className="font-mono text-cyan-400">28% (Optimal)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 w-[28%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Edge CDN Cache Ratio</span>
                      <span className="font-mono text-emerald-400">99.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-300 w-[99.4%]" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/5">
                    <span>Active Pods: 16/16 Healthy</span>
                    <span className="text-cyan-400">Region: Global Anycast</span>
                  </div>
                </div>
              )}

              {/* Console Body Tab 3: Security & Compliance */}
              {activeConsoleTab === 'security' && (
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{consoleStrings.securityAudited}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Architecture complies with GDPR data sovereignty and ISO 27001 secure development cycles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{consoleStrings.encryptionStandard}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Data in transit protected by mTLS & TLS 1.3, encrypted database volumes at rest.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <Server className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{consoleStrings.zeroDowntime}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Automated CI/CD testing pipeline with rollback triggers preventing regression in production.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Console Footer */}
              <div className="px-4 py-3 bg-[#070c14] border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>hacco.dev &bull; Murad Haco</span>
                </div>
                <button
                  onClick={() => handleAction('contact')}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>{consoleStrings.directContact}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* Bottom Floating Google Lighthouse Badge */}
            <div className="absolute -bottom-5 start-4 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl backdrop-blur-xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                100
              </div>
              <div className="text-start">
                <div className="text-xs font-bold text-white">Google Lighthouse 100/100</div>
                <div className="text-[10px] text-slate-400">SEO &bull; Speed &bull; Accessibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

