
import { Project, Service, TechItem } from './types';
import { Database, Server, Workflow, Repeat, Cpu, Layers } from 'lucide-react';

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
    challenge: "Fragmented data sources across 200+ vessels made it impossible to calculate true voyage profitability in real-time.",
    solution: "Built a centralized Lakehouse architecture that ingests high-frequency IoT sensor data and matches it with ERP financial records using dbt modeling.",
    metrics: [
      { label: "Cost Reduction", value: "-22%" },
      { label: "Data Latency", value: "< 5min" },
      { label: "ROI Realized", value: "4.2x" }
    ],
    featured: true
  },
  {
    id: "p2",
    title: "Financial Reconciliation Engine",
    industry: "FinTech",
    stack: ["Talend", "REST APIs", "NetSuite"],
    result: "92% reduction in finance errors; Real-time cash flow visibility.",
    challenge: "Manual reconciliation of millions of transactions across 15 different payment gateways was causing significant financial drift.",
    solution: "Automated the entire reconciliation pipeline using custom Python validators and an idempotent ingestion framework.",
    metrics: [
      { label: "Error Rate", value: "-92%" },
      { label: "Manual Hours", value: "-140h/mo" },
      { label: "Accuracy", value: "99.99%" }
    ],
    featured: true
  },
  {
    id: "p3",
    title: "High-Volume Telecom Analytics",
    industry: "Telecom",
    stack: ["Airflow", "Airbyte", "Superset", "Redshift"],
    result: "Reduced report generation from 'Time Out' to <1 min for 1M+ daily rows.",
    challenge: "Legacy Redshift instance was misconfigured, causing executive dashboards to timeout during peak usage hours.",
    solution: "Implemented an orchestration layer with Airflow to manage incremental refreshes and optimized Redshift distribution keys.",
    metrics: [
      { label: "Query Speed", value: "+85%" },
      { label: "Cloud Spend", value: "-15%" },
      { label: "User Adoption", value: "3x" }
    ]
  },
  {
    id: "p4",
    title: "SaaS Migration (Ankeri)",
    industry: "SaaS",
    stack: ["Python", "APIs", "Validation Fw"],
    result: "Zero-defect migration of sensitive legal contracts with 100% data integrity.",
    challenge: "Migrating 10 years of sensitive legal data from a legacy on-prem system to a modern SaaS platform without downtime.",
    solution: "Developed a custom ETL framework with built-in checksum validation and automatic rollback capabilities.",
    metrics: [
      { label: "Data Integrity", value: "100%" },
      { label: "Downtime", value: "0s" },
      { label: "Migration Speed", value: "2x" }
    ]
  },
  {
    id: "p5",
    title: "AdTech K8s Platform",
    industry: "AdTech",
    stack: ["EKS", "Airbyte", "dbt", "Cube"],
    result: "Replaced expensive SaaS (TapClicks) with internal warehouse; scaled for Black Friday.",
    challenge: "Prohibitive costs of third-party reporting tools and lack of custom dimensionality.",
    solution: "Deployed a self-hosted modern data stack on EKS, utilizing Cube.js for the semantic layer to serve sub-second queries.",
    metrics: [
      { label: "SaaS Savings", value: "$12k/mo" },
      { label: "Query Latency", value: "<200ms" },
      { label: "Scalability", value: "10x" }
    ]
  },
  {
    id: "p6",
    title: "Omnichannel CX Analytics",
    industry: "Retail",
    stack: ["Airflow", "dbt", "Redshift"],
    result: "Unified Call/Chat/Email data to improve First Call Resolution (FCR).",
    challenge: "Customer support data lived in silos, preventing a 360-degree view of the customer journey.",
    solution: "Integrated Zendesk, Intercom, and Shopify data into a unified star schema for cross-channel analysis.",
    metrics: [
      { label: "FCR Rate", value: "+18%" },
      { label: "CSAT Score", value: "+12" },
      { label: "Data Coverage", value: "100%" }
    ]
  },
  {
    id: "p7",
    title: "AI-Ready Risk Warehouse",
    industry: "Compliance",
    stack: ["MS Fabric", "PowerBI", "Azure"],
    result: "Built foundation for AI Risk Prediction models in a strict compliance environment.",
    challenge: "Strict GDPR and SOC2 requirements prevented the use of standard cloud data services for AI training.",
    solution: "Leveraged Microsoft Fabric's OneLake and sensitive data masking to build a compliant sandbox for data scientists.",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Model Time", value: "-40%" },
      { label: "Storage Efficiency", value: "+30%" }
    ]
  }
];
