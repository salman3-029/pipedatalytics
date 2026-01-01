import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center group ${className}`}>
      <div className="relative flex items-center">
        {/* Subtle ambient glow on hover */}
        <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        {!hasError ? (
          <img 
            src="/logo.png" 
            alt="Pipedatalytics" 
            loading="eager"
            decoding="sync"
            className="h-12 w-auto object-contain relative z-10 transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-110"
            onError={() => {
              console.warn("Logo image failed to load from /logo.png. Using brand fallback.");
              setHasError(true);
            }}
          />
        ) : (
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00D1FF] to-[#4ADE80] rounded-lg flex items-center justify-center text-slate-950 font-black text-xl shadow-[0_0_20px_rgba(0,209,255,0.4)]">
              P
            </div>
            <div className="flex items-baseline gap-0 tracking-[0.12em] uppercase">
              <span className={`text-xl font-black ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                PIPE
              </span>
              <span className={`text-xl font-light ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                DATALYTICS
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};