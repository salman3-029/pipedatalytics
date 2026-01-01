import { Project, Service, TechItem, Agent } from './types.ts';
import { 
  Database, 
  Layers, 
  Repeat, 
  Cpu, 
  Mic, 
  ShoppingCart, 
  ShieldCheck, 
  Terminal 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'AI Agents', href: '#agents' },
  { name: 'Case Studies', href: '#portfolio' },
  { name: 'Stack', href: '#stack' },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Airflow', category: 'orchestrate' },
  { name: 'dbt', category: 'transform' },
  { name: 'Kubernetes', category: 'platform' },
  { name: 'AWS', category: 'platform' },
  { name: 'Azure', category: 'platform' },
  { name: 'Snowflake', category: 'warehouse' },
  { name: 'MS Fabric', category: 'platform' },
  { name: 'Python', category: 'transform' },
  { name: 'Docker', category: 'platform' },
];

export const SERVICES: Service[] = [
  {
    title: "Modern Data Stack Implementation",
    description: "We deploy comprehensive data platforms on AWS/Azure utilizing Airbyte for ingestion, dbt for modeling, and Airflow on K8s for orchestration.",
    icon: Layers
  },
  {
    title: "Legacy Migration & Modernization",
    description: "Retire fragile Talend/Informatica pipelines. We migrate logic to code-based, version-controlled workflows (CI/CD) that scale.",
    icon: Repeat
  },
  {
    title: "Warehouse Performance Tuning",
    description: "Slow dashboards? We optimize partition strategies, materialize views, and refactor SQL to cut cloud costs and reduce latency.",
    icon: Cpu
  }
];

export const AGENTS: Agent[] = [
  {
    title: "Harper (Service Voice Droid)",
    tag: "Voice Automation",
    description: "Autonomous voice synthesis and recognition engine for high-throughput service pipelines. Sub-500ms response latency with enterprise-grade multi-lingual neural TTS/STT.",
    icon: Mic
  },
  {
    title: "Lucy (Ordering Protocol)",
    tag: "Transaction Processing",
    description: "Point-of-Sale (POS) integration protocol for autonomous voice commerce. Validates complex order structures against dynamic inventory schemas with 99.9% reliability.",
    icon: ShoppingCart
  },
  {
    title: "Polly (Legal & Compliance Core)",
    tag: "RAG / Vector Search",
    description: "Citation-backed RAG engine for legal and compliance corpus processing. Orchestrates vector embeddings and proprietary search mapping to eliminate hallucination.",
    icon: ShieldCheck
  },
  {
    title: "NL2SQL (Data Query Interface)",
    tag: "Natural Language Processing",
    description: "LLM-orchestrated semantic layer for data warehouse interrogation. Maps natural language tokens to optimized SQL queries for multi-billion row distributed datasets.",
    icon: Terminal
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Maritime Fleet Intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=800",
    industry: "Logistics",
    stack: ["Talend", "dbt", "SQL Server"],
    result: "Unified IoT & Financial data; Enabled data-backed charter negotiations.",
    metrics: [
      { label: "Cost Reduction", value: "-22%" },
      { label: "Data Latency", value: "< 5min" }
    ],
    featured: true
  },
  {
    id: "p2",
    title: "Financial Reconciliation Engine",
    image: "https://images.unsplash.com/photo-1611974714158-f89ed39ec564?auto=format&fit=crop&q=80&w=800",
    industry: "FinTech",
    stack: ["Python", "REST APIs", "NetSuite"],
    result: "92% reduction in finance errors; Real-time cash flow visibility.",
    metrics: [
      { label: "Error Rate", value: "-92%" },
      { label: "Accuracy", value: "99.99%" }
    ],
    featured: true
  },
  {
    id: "p3",
    title: "High-Volume Telecom Analytics",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800",
    industry: "Telecom",
    stack: ["Airflow", "Snowflake", "dbt"],
    result: "Reduced report generation from minutes to seconds for 1M+ daily rows.",
    metrics: [
      { label: "Query Speed", value: "+85%" },
      { label: "User Adoption", value: "3x" }
    ]
  }
];
