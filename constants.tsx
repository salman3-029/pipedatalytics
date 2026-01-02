import { Project, Service, TechItem, Agent } from './types.ts';
import { 
  Database, 
  Layers, 
  Repeat, 
  Cpu, 
  Mic, 
  ShoppingCart, 
  ShieldCheck, 
  Terminal,
  BarChart3,
  BrainCircuit
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
  { name: 'GCP', category: 'platform' },
  { name: 'Azure', category: 'platform' },
  { name: 'Vertex AI', category: 'platform' },
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
  },
  {
    title: "Analytics Engineering & BI",
    description: "Production-grade semantic layers, governed metrics, and executive-ready dashboards with dbt + Looker/Tableau. Clean data contracts, auditability, and fast decision cycles.",
    icon: BarChart3
  },
  {
    title: "AI/ML Platform Acceleration",
    description: "Stand up Vertex AI/GCP pipelines, feature stores, and deployment guardrails so teams can ship compliant models quickly with observability, rollback, and cost control.",
    icon: BrainCircuit
  }
];

export const AGENTS: Agent[] = [
  {
    id: "harper",
    title: "Harper (Service Voice Droid)",
    tag: "Voice Automation",
    subtitle: "Omnichannel voice agent for support and service queues.",
    description: "Autonomous voice synthesis and recognition engine for high-throughput service pipelines. Sub-500ms response latency with enterprise-grade multi-lingual neural TTS/STT.",
    longDescription: "Handles inbound and outbound service calls with streaming ASR/TTS, real-time call routing, and CRM actions. Built for noisy environments and multilingual coverage.",
    capabilities: [
      "Streaming ASR + neural TTS with sub-500ms latency and barge-in handling.",
      "Intent detection with retrieval-augmented call flows and escalation logic.",
      "Live actions: CRM lookups, ticketing, appointment booking, knowledge retrieval."
    ],
    outcomes: [
      "First-response time < 1s; call containment improves service throughput.",
      "CSAT uplift via consistent, branded voice and fast escalation when needed.",
      "Reduced agent load with automated after-call summaries and disposition codes."
    ],
    stack: ["Vertex AI", "GCP", "Twilio", "LangChain", "FastAPI"],
    safeguards: [
      "PII scrubbing and redaction before storage.",
      "Policy-based escalation when confidence drops or sensitive intents detected."
    ],
    businessBenefits: [
      "Capture every inbound call with branded voice quality.",
      "Accelerate after-call wrap-up with automatic summaries.",
      "Expand language coverage without hiring surges."
    ],
    impacts: [
      { label: "Missed Calls", value: "-80%", description: "24/7 coverage with instant pickup" },
      { label: "Handle Time", value: "-30%", description: "Automated summaries and routing" },
      { label: "CSAT", value: "+12 pts", description: "Consistent tone and escalations" }
    ],
    image: "https://media.istockphoto.com/id/2226631423/photo/abstract-ai-face-with-data-flow-lines.webp?a=1&b=1&s=612x612&w=0&k=20&c=z-3Klr-vLG6bFGk5k0TuMpKYny4c6QMUi2TkIFGbQyw=",
    icon: Mic
  },
  {
    id: "lucy",
    title: "Lucy (Ordering Protocol)",
    tag: "Transaction Processing",
    subtitle: "Autonomous POS and order orchestration for voice/chat commerce.",
    description: "Point-of-Sale (POS) integration protocol for autonomous voice commerce. Validates complex order structures against dynamic inventory schemas with 99.9% reliability.",
    longDescription: "Captures, validates, and prices complex orders across inventory, promotions, and taxes. Integrates with POS/OMS to execute without human oversight.",
    capabilities: [
      "Cart validation against live catalog, modifiers, and inventory constraints.",
      "Fraud/exception rules with fallback flows and human-in-the-loop triggers.",
      "Payment orchestration with idempotent order commits and audit trails."
    ],
    outcomes: [
      "Order error rate drops as validation happens before commit.",
      "Higher conversion with real-time availability and substitution options.",
      "Executes safely with deterministic retries and clear audit logs."
    ],
    stack: ["Python", "PostgreSQL", "Vertex AI", "Redis", "Kubernetes"],
    safeguards: [
      "Circuit breakers for payment/OMS failures; alerts for anomalies.",
      "Guardrails on upsell/cross-sell language and compliance-sensitive items."
    ],
    businessBenefits: [
      "Fewer order errors with pre-commit validation.",
      "Higher conversion from real-time availability and substitutions.",
      "Clear audit trails across cart, payment, and fulfillment."
    ],
    impacts: [
      { label: "Order Accuracy", value: "99.9%", description: "Schema-aware validation" },
      { label: "Conversion", value: "+18%", description: "Live inventory + dynamic promos" },
      { label: "Chargebacks", value: "-40%", description: "Deterministic commit + audit" }
    ],
    image: "https://plus.unsplash.com/premium_photo-1764691446048-3175317be97b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGh1bWFuJTIwbGlrZSUyMHJvYm90cyUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    icon: ShoppingCart
  },
  {
    id: "polly",
    title: "Polly (Legal & Compliance Core)",
    tag: "RAG / Vector Search",
    subtitle: "Citation-grounded research assistant for policy, legal, and compliance teams.",
    description: "Citation-backed RAG engine for legal and compliance corpus processing. Orchestrates vector embeddings and proprietary search mapping to eliminate hallucination.",
    longDescription: "Ingests contracts, SOPs, and regulatory updates; serves governed answers with explicit citations and confidence. Built for defensible outputs and auditability.",
    capabilities: [
      "Hybrid retrieval (BM25 + vectors) with policy-tuned reranking and citations.",
      "Structured answer templates for obligations, risks, and exceptions.",
      "Redlines and clause comparisons with change summaries."
    ],
    outcomes: [
      "Faster research with transparent citations and confidence bands.",
      "Lower risk of hallucination via strict retrieval + template constraints.",
      "Auditable responses for compliance reviews and legal sign-off."
    ],
    stack: ["Azure", "MS Fabric", "PostgreSQL", "Vector DB", "Vertex AI"],
    safeguards: [
      "Content filters and PII handling tuned to jurisdictional policies.",
      "Policy-based refusal/hand-off for unsupported requests."
    ],
    businessBenefits: [
      "Faster reviews with citation-backed responses.",
      "Consistent interpretations across policies and clauses.",
      "Audit-ready trails for every generated answer."
    ],
    impacts: [
      { label: "Review Time", value: "-55%", description: "Templates + retrieval grounding" },
      { label: "Hallucinations", value: "<1%", description: "Hybrid search + citations" },
      { label: "Compliance", value: "Audit Ready", description: "Traceable evidence chains" }
    ],
    image: "https://media.istockphoto.com/id/2217970715/photo/ai-humanoid-robot-with-facial-mapping-and-neural-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=N54chMQW8sGOl3SZG6BGK1WUSQitJGlV1wmZ2MtHHj8=",
    icon: ShieldCheck
  },
  {
    id: "nl2sql",
    title: "NL2SQL (Data Query Interface)",
    tag: "Natural Language Processing",
    subtitle: "Semantic layer that turns business questions into optimized SQL.",
    description: "LLM-orchestrated semantic layer for data warehouse interrogation. Maps natural language tokens to optimized SQL queries for multi-billion row distributed datasets.",
    longDescription: "Maps natural language to governed metrics and generates tuned SQL with warehouse-aware optimization. Prevents bad joins and unsafe queries before execution.",
    capabilities: [
      "Schema- and metric-aware prompt engineering with dbt lineage context.",
      "Static analysis to block cartesian joins, scans on hot tables, and PII leaks.",
      "Adaptive hinting for Snowflake/BigQuery/Redshift based on cost and latency."
    ],
    outcomes: [
      "Self-serve analytics without sacrificing data contracts or cost controls.",
      "Reduced analyst queue time; faster exploratory analysis for stakeholders.",
      "Consistent answers because metrics resolve through a governed semantic layer."
    ],
    stack: ["dbt", "Snowflake", "BigQuery", "Vertex AI", "Python"],
    safeguards: [
      "Query simulation and cost estimation before execution.",
      "Role-based access control and masking for sensitive columns."
    ],
    businessBenefits: [
      "Self-serve insights without risking warehouse spend.",
      "Governed metrics ensure consistent answers across teams.",
      "Faster exploratory analysis with safe, optimized SQL."
    ],
    impacts: [
      { label: "Time to Insight", value: "-60%", description: "Natural language to governed SQL" },
      { label: "Cost Overruns", value: "-35%", description: "Static analysis + cost guards" },
      { label: "Analyst Queue", value: "-50%", description: "Self-serve semantic layer" }
    ],
    image: "https://media.istockphoto.com/id/1800292591/photo/sql-structured-query-language-technology-concept-icon-virtual-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=FnWQJ_Zz00GNeeKLaFAkXxzGM6gsSVx0Lh3yO5joptM=",
    queryExample: {
      question: "Which 5 countries generated the most revenue last quarter?",
      sql: `SELECT country, SUM(order_total) AS revenue
FROM orders
WHERE order_date >= DATE_TRUNC('quarter', CURRENT_DATE) - INTERVAL '1 quarter'
  AND order_date < DATE_TRUNC('quarter', CURRENT_DATE)
GROUP BY country
ORDER BY revenue DESC
LIMIT 5;`,
      latency: "Results returned in 14ms"
    },
    icon: Terminal
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
  },
  {
    id: "p8",
    title: "Revenue & Growth Intelligence Platform",
    industry: "Analytics / BI",
    stack: ["BigQuery", "dbt", "Looker", "Tableau"],
    result: "Unified revenue truth across acquisition, retention, and monetization.",
    challenge: "Revenue data and KPIs were scattered across marketing, product, and finance, creating inconsistent LTV/CAC reporting.",
    solution: "Consolidated multi-source revenue data into a single dbt semantic layer, standardizing LTV, CAC, ARPU, cohort, and margin definitions consumed via Looker/Tableau.",
    metrics: [
      { label: "Reporting Latency", value: "Weekly -> Daily" },
      { label: "Manual Ops Hours", value: "-80%" },
      { label: "Exec Alignment", value: "Single Source" }
    ]
  },
  {
    id: "p9",
    title: "Retention & Cohort Analytics Engine",
    industry: "Analytics / BI",
    stack: ["BigQuery", "SQL", "dbt", "Python"],
    result: "Clear visibility into churn, repeat behavior, and revenue decay.",
    challenge: "Inability to pinpoint retention drop-offs by package type or pricing changes, blocking defensible forecasts.",
    solution: "Built time-aligned D7/D30/D60/D90 cohort models with Python-based enrichment to quantify second-purchase probability and channel-driven revenue contribution.",
    metrics: [
      { label: "Churn Signal Lead Time", value: "+30d" },
      { label: "Forecast Confidence", value: "+25%" },
      { label: "Pricing Experiments", value: "Data-Driven" }
    ]
  }
];
