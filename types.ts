import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  industry?: string;
  stack: string[];
  result: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  category: 'ingest' | 'warehouse' | 'transform' | 'orchestrate' | 'visualize' | 'platform';
}