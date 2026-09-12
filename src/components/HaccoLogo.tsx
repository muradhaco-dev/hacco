import React from 'react';

interface HaccoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
}

export const HaccoLogo: React.FC<HaccoLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    hero: 'w-20 h-20 md:w-28 md:h-28',
  };

  const textSizes = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl tracking-tight',
    lg: 'text-3xl tracking-tight',
    hero: 'text-4xl md:text-5xl tracking-tight',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* 3D Shield & Code Emblem inspired by uploaded brand logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        {/* Glow halo behind shield */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-500/25 blur-md -z-10 group-hover:bg-cyan-400/40 transition-colors duration-300" />
        
        <svg
          viewBox="0 0 100 110"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic outer shield gradient */}
            <linearGradient id="shieldMetalOuter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="35%" stopColor="#e2e8f0" />
              <stop offset="65%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Inner shield dark background with cyan glow */}
            <radialGradient id="shieldCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#083344" />
              <stop offset="70%" stopColor="#031525" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            {/* Neon Cyan & Mint Code Brackets */}
            <linearGradient id="neonBrackets" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            {/* Neon circuit line glow filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Shield Rim with metallic bevel */}
          <path
            d="M50 4 L88 18 C88 56 70 88 50 106 C30 88 12 56 12 18 Z"
            fill="url(#shieldMetalOuter)"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Inner Shield Cavity */}
          <path
            d="M50 11 L81 23 C81 53 66 81 50 97 C34 81 19 53 19 23 Z"
            fill="url(#shieldCoreGlow)"
            stroke="#0ea5e9"
            strokeWidth="1.2"
          />

          {/* Glowing Circuit Traces (Circuit Board detail from logo) */}
          <path
            d="M26 30 H36 L42 36 M74 30 H64 L58 36 M24 50 H33 L38 55 M76 50 H67 L62 55 M30 72 L36 66 H44 M70 72 L64 66 H56"
            stroke="#06b6d4"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.65"
          />
          <circle cx="42" cy="36" r="1.5" fill="#38bdf8" />
          <circle cx="58" cy="36" r="1.5" fill="#38bdf8" />
          <circle cx="38" cy="55" r="1.5" fill="#22d3ee" />
          <circle cx="62" cy="55" r="1.5" fill="#22d3ee" />

          {/* Code Angle Brackets: Left `<` */}
          <path
            d="M44 40 L34 52 L44 64"
            stroke="url(#neonBrackets)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#neonGlow)"
          />

          {/* Code Angle Brackets: Right `>` */}
          <path
            d="M56 40 L66 52 L56 64"
            stroke="url(#neonBrackets)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#neonGlow)"
          />

          {/* Center Slash Divider `/` */}
          <path
            d="M52 42 L48 62"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className={`font-black ${textSizes[size]} text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)] tracking-tight`}>
            hacco
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400/80 font-mono mt-0.5 font-semibold">
            Engineering & Solutions
          </span>
        )}
      </div>
    </div>
  );
};
