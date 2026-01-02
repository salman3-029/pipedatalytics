import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  image?: string;
  industry?: string;
  stack: string[];
  result: string;
  challenge?: string;
  solution?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Agent {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
  subtitle?: string;
  longDescription?: string;
  capabilities?: string[];
  outcomes?: string[];
  stack?: string[];
  safeguards?: string[];
  image?: string;
  businessBenefits?: string[];
  impacts?: { label: string; value: string; description?: string }[];
  queryExample?: {
    question: string;
    sql: string;
    latency?: string;
  };
}

export interface TechItem {
  name: string;
  category: 'ingest' | 'warehouse' | 'transform' | 'orchestrate' | 'visualize' | 'platform';
}
