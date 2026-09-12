import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { translations } from '../translations';
import { portfolioProjects } from '../data/mockData';
import { ProjectModal } from './ProjectModal';
import { Briefcase, ArrowUpRight, Code, Smartphone, Layers, Eye } from 'lucide-react';

interface PortfolioProps {
  currentLang: Language;
  isStandalonePage?: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ currentLang, isStandalonePage = false }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const t = translations[currentLang];
  const allProjects = portfolioProjects[currentLang] || portfolioProjects.en;

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const filterTabs: { id: 'all' | 'web' | 'mobile' | 'fullstack'; label: string; icon: any }[] = [
    { id: 'all', label: t.portfolio.filters.all, icon: Layers },
    { id: 'web', label: t.portfolio.filters.web, icon: Code },
    { id: 'mobile', label: t.portfolio.filters.mobile, icon: Smartphone },
    { id: 'fullstack', label: t.portfolio.filters.fullstack, icon: Briefcase },
  ];

  return (
    <section
      id="portfolio"
      className={`relative ${isStandalonePage ? 'pt-28 pb-20 sm:pt-36 sm:pb-28' : 'py-24 sm:py-32'} bg-[#080B10]/40`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-slate-900/60 border border-white/8 hover:border-cyan-500/40 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/40 cursor-pointer flex flex-col justify-between"
            >
              {/* Project Image Box */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Category Pill Tag */}
                <div className="absolute top-3.5 start-3.5">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-cyan-300 text-xs font-semibold">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Quick inspect eye icon badge */}
                <div className="absolute top-3.5 end-3.5 p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-300 group-hover:text-cyan-400 transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between text-start">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-800 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-slate-800 border border-white/5 text-[11px] font-mono text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-white/8 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                    <span>{t.portfolio.viewDetails}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          currentLang={currentLang}
        />
      </div>
    </section>
  );
};
