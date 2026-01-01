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
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  category: 'ingest' | 'warehouse' | 'transform' | 'orchestrate' | 'visualize' | 'platform';
}
