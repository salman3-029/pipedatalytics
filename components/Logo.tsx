
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, variant = 'dark' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0 group">
        {/* Neon Glow Layer */}
        <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10 w-full h-full drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
        >
          <defs>
            <linearGradient id="pipedata-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D1FF" /> {/* Electric Blue */}
              <stop offset="100%" stopColor="#4ADE80" /> {/* Lime Green */}
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <g filter="url(#glow)">
            {/* The Faceted 'P' Structure */}
            <path 
              d="M60 25 H90 L105 40 V80 L90 95 H60 L60 82 H88 L98 72 V48 L88 38 H60 V25Z" 
              fill="url(#pipedata-grad)" 
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            {/* Internal Facet Lines */}
            <path d="M90 25 L88 38" stroke="#151e2e" strokeWidth="1.5" />
            <path d="M105 40 L98 48" stroke="#151e2e" strokeWidth="1.5" />
            <path d="M105 80 L98 72" stroke="#151e2e" strokeWidth="1.5" />
            <path d="M90 95 L88 82" stroke="#151e2e" strokeWidth="1.5" />
            <path d="M60 25 L60 38" stroke="#151e2e" strokeWidth="1.5" />
            <path d="M60 95 L60 82" stroke="#151e2e" strokeWidth="1.5" />

            {/* Circuitry Section (Left Side) */}
            {/* Top Branch */}
            <path d="M55 25 H45 C40 25 38 23 38 18 V12" stroke="url(#pipedata-grad)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="38" cy="12" r="4.5" fill="url(#pipedata-grad)" />
            
            {/* Middle Branch 1 */}
            <path d="M55 40 H35 C30 40 28 38 28 33" stroke="url(#pipedata-grad)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="28" cy="33" r="4.5" fill="url(#pipedata-grad)" />

            {/* Middle Branch 2 (Main) */}
            <path d="M55 55 H25" stroke="url(#pipedata-grad)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="25" cy="55" r="4.5" fill="url(#pipedata-grad)" />

            {/* Lower Branch 1 */}
            <path d="M55 70 H30 C25 70 23 72 23 77" stroke="url(#pipedata-grad)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="23" cy="77" r="4.5" fill="url(#pipedata-grad)" />

            {/* Bottom Branch */}
            <path d="M55 85 H45 C40 85 38 87 38 92 V105" stroke="url(#pipedata-grad)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="38" cy="105" r="4.5" fill="url(#pipedata-grad)" />
          </g>
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex items-baseline gap-0 tracking-[0.05em] uppercase">
          <span className={`text-xl font-extrabold ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            PIPE
          </span>
          <span className={`text-xl font-normal ${variant === 'dark' ? 'text-slate-100' : 'text-slate-700'}`}>
            DATALYTICS
          </span>
        </div>
      )}
    </div>
  );
};
