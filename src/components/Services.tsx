import React from 'react';
import { Language, NavPage } from '../types';
import { translations } from '../translations';
import { Globe, Smartphone, Cloud, Palette, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ServicesProps {
  currentLang: Language;
  onSelectService?: (serviceKey: string) => void;
  onNavigate?: (page: NavPage) => void;
  isStandalonePage?: boolean;
}

export const Services: React.FC<ServicesProps> = ({
  currentLang,
  onSelectService,
  onNavigate,
  isStandalonePage = false,
}) => {
  const t = translations[currentLang];

  const handleSelectService = (serviceKey: string) => {
    if (onSelectService) {
      onSelectService(serviceKey);
    }
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const servicesData = [
    {
      id: 'web',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      title: t.services.webDev.title,
      subtitle: t.services.webDev.subtitle,
      description: t.services.webDev.description,
      features: t.services.webDev.features,
      techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      id: 'mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-indigo-600',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
      title: t.services.mobileDev.title,
      subtitle: t.services.mobileDev.subtitle,
      description: t.services.mobileDev.description,
      features: t.services.mobileDev.features,
      techStack: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'BLE Sensors', 'SQLite'],
    },
    {
      id: 'fullstack',
      icon: Cloud,
      color: 'from-teal-500 to-emerald-600',
      badgeColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      title: t.services.cloudDevOps.title,
      subtitle: t.services.cloudDevOps.subtitle,
      description: t.services.cloudDevOps.description,
      features: t.services.cloudDevOps.features,
      techStack: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Microservices', 'CI/CD'],
    },
    {
      id: 'consulting',
      icon: Palette,
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      bgImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
      title: t.services.uiux.title,
      subtitle: t.services.uiux.subtitle,
      description: t.services.uiux.description,
      features: t.services.uiux.features,
      techStack: ['Figma', 'Design Systems', 'Interactive Prototypes', 'WCAG AA', 'User Testing'],
    },
  ];

  return (
    <section
      id="services"
      className={`relative ${isStandalonePage ? 'pt-36 pb-20 sm:pt-40 sm:pb-28' : 'py-24 sm:py-32'} bg-[#080B10]/50`}
    >
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-900/75 border border-white/10 hover:border-cyan-500/40 p-7 sm:p-8 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/40 text-start"
              >
                {/* Background Image of Card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.bgImage}')` }}
                />

                {/* Top Glowing Gradient Accent */}
                <div
                  className={`absolute top-0 inset-x-8 h-1 rounded-full bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Service Header with Icon */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Project Inquire Button */}
                <div className="pt-6 border-t border-white/8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-[11px] font-mono text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectService(service.id)}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/60 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 hover:border-cyan-400 text-slate-200 text-sm font-semibold transition-all duration-200 group/btn cursor-pointer"
                  >
                    <span>{t.contact.badge}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hidden sm:block">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.services.ctaPrompt}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Direct consultation with Murad Haco via Gmail or WhatsApp for rapid assessment.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleSelectService('web')}
            className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            {t.services.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};
