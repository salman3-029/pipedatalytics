import React from 'react';
import {
  SiApacheairflow,
  SiDbt,
  SiKubernetes,
  SiAmazonwebservices,
  SiSnowflake,
  SiPython,
  SiDocker
} from 'react-icons/si';

const AzureIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} role="img" aria-label="Azure">
    <path d="M12 2L3 20h6.2l1.9-4.2h6.1L21 20h-4.8l-2.4-4.2H9.8L12 6.5l2.3 4.4h-3.1l-1 2.2h6.4L12 2z" />
  </svg>
);

const MsFabricIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} role="img" aria-label="Microsoft">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  airflow: SiApacheairflow,
  dbt: SiDbt,
  kubernetes: SiKubernetes,
  aws: SiAmazonwebservices,
  azure: AzureIcon,
  snowflake: SiSnowflake,
  'ms fabric': MsFabricIcon,
  python: SiPython,
  docker: SiDocker
};

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-10 h-10' }) => {
  const Icon = iconMap[name.toLowerCase()];
  if (!Icon) {
    return <div className="w-full h-full bg-slate-700 rounded-full" />;
  }

  return <Icon className={className} />;
};
