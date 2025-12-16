import { Project, Service, TechItem } from './types';
import { Database, Server, Workflow, Repeat, Cpu, LineChart, Code2, Layers, Globe, ShieldCheck } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
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

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Maritime Fleet Intelligence",
    industry: "Logistics",
    stack: ["Talend", "dbt", "SQL Server"],
    result: "Unified IoT & Financial data; Enabled data-backed charter negotiations.",
    featured: true
  },
  {
    id: "p2",
    title: "Financial Reconciliation Engine",
    industry: "FinTech",
    stack: ["Talend", "REST APIs", "NetSuite"],
    result: "92% reduction in finance errors; Real-time cash flow visibility.",
    featured: true
  },
  {
    id: "p3",
    title: "High-Volume Telecom Analytics",
    industry: "Telecom",
    stack: ["Airflow", "Airbyte", "Superset", "Redshift"],
    result: "Reduced report generation from 'Time Out' to <1 min for 1M+ daily rows."
  },
  {
    id: "p4",
    title: "SaaS Migration (Ankeri)",
    industry: "SaaS",
    stack: ["Python", "APIs", "Validation Fw"],
    result: "Zero-defect migration of sensitive legal contracts with 100% data integrity."
  },
  {
    id: "p5",
    title: "AdTech K8s Platform",
    industry: "AdTech",
    stack: ["EKS", "Airbyte", "dbt", "Cube"],
    result: "Replaced expensive SaaS (TapClicks) with internal warehouse; scaled for Black Friday."
  },
  {
    id: "p6",
    title: "Omnichannel CX Analytics",
    industry: "Retail",
    stack: ["Airflow", "dbt", "Redshift"],
    result: "Unified Call/Chat/Email data to improve First Call Resolution (FCR)."
  },
  {
    id: "p7",
    title: "AI-Ready Risk Warehouse",
    industry: "Compliance",
    stack: ["MS Fabric", "PowerBI", "Azure"],
    result: "Built foundation for AI Risk Prediction models in a strict compliance environment."
  }
];