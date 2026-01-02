import React from 'react';
import {
  SiApacheairflow,
  SiDbt,
  SiKubernetes,
  SiAmazonwebservices,
  SiGooglecloud,
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

const VertexAiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className={className} role="img" aria-label="Vertex AI">
    <path d="M32 6 8 18v28l24 12 24-12V18L32 6Z" strokeLinejoin="round" />
    <path d="M20 32a12 12 0 0 1 24 0" />
    <circle cx="25" cy="30" r="3" fill="currentColor" stroke="none" />
    <circle cx="39" cy="30" r="3" fill="currentColor" stroke="none" />
    <path d="M24 38c2.5 3 13.5 3 16 0" strokeLinecap="round" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  airflow: SiApacheairflow,
  dbt: SiDbt,
  kubernetes: SiKubernetes,
  aws: SiAmazonwebservices,
  gcp: SiGooglecloud,
  azure: AzureIcon,
  snowflake: SiSnowflake,
  'ms fabric': MsFabricIcon,
  'vertex ai': VertexAiIcon,
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
