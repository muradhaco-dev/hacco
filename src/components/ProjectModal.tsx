import React, { useEffect } from 'react';
import { ProjectItem, Language } from '../types';
import { translations } from '../translations';
import { X, ExternalLink, Check, Calendar, User, Tag, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-slate-900 border border-white/15 shadow-2xl shadow-cyan-950/50 overflow-hidden text-start animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 end-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors z-10 cursor-pointer"
            aria-label={t.portfolio.closeModal}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image overlay */}
          <div className="absolute bottom-4 inset-x-6">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs">
            <div>
              <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.portfolio.client}</span>
              </div>
              <div className="text-white font-semibold">{project.client}</div>
            </div>
            <div>
              <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.portfolio.year}</span>
              </div>
              <div className="text-white font-semibold">{project.year}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Architect</span>
              </div>
              <div className="text-cyan-300 font-semibold">hacco Lead Engineering</div>
            </div>
          </div>

          {/* Summary / Architecture Details */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-400 font-mono font-bold mb-2">
              Architecture Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-400 font-mono font-bold mb-3">
              {t.portfolio.keyDeliverables}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Performance Metrics */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-400 font-mono font-bold mb-3">
              Impact & Engineering Metrics
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                  <div className="text-base sm:text-lg font-bold text-white font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-400 font-mono font-bold mb-2.5">
              {t.portfolio.techStack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-950/40 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-400 hidden sm:inline">
            Direct Lead Developer: muradhaco@gmail.com
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
          >
            {t.portfolio.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
