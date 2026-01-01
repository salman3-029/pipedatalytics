
import React from 'react';
import logoImage from './logo_p.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, variant = 'dark' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className={iconOnly ? 'relative h-16 w-16' : 'relative h-20 sm:h-20 md:h-20 w-auto max-w-[560px]'}>
        <img
          src={logoImage}
          alt="Pipedatalytics"
          className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(125,211,252,0.35)] brightness-110"
        />
      </div>
    </div>
  );
};
