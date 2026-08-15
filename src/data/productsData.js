import accountizeLogo from "../assets/products/accountize-logo.svg";
import verdureLogo from "../assets/products/verdure-logo.svg";
import nexassistLogo from "../assets/products/nexassist-logo.webp";
import launchpadLogo from "../assets/products/launchpad-logo.webp";
import { Wallet, Cpu, Bot, GraduationCap } from "lucide-react";

export const PRODUCTS = [
  {
    id: "accountize",
    name: "Accountize",
    tagline: "Smart Financial Accounting & Expense Tracking",
    description:
      "A comprehensive cloud accounting platform built for SMEs and enterprises. Streamline ledger management, automated expense categorization, multi-currency invoicing, and real-time financial audit reporting.",
    logo: accountizeLogo,
    icon: Wallet,
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-200",
    badge: "SaaS Product",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    features: [
      "Real-time ledger & transaction audit",
      "Automated PDF & CSV report export",
      "Multi-entity subscription tracking",
      "Role-based security & compliance",
    ],
    link: "https://accountize.in/",
  },
  // {
  //   id: "verdure",
  //   name: "Verdure IoT",
  //   tagline: "Intelligent IoT Sensor Telemetry & Automation",
  //   description:
  //     "Industrial-grade IoT monitoring and telemetry system for smart infrastructure. Experience live sensor data feeds, interactive 3D digital twins, predictive maintenance alerts, and edge device management.",
  //   icon: Cpu,
  //   iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  //   badge: "IoT Platform",
  //   badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  //   features: [
  //     "Real-time sensor telemetry dashboard",
  //     "3D Digital Twin model visualization",
  //     "Automated threshold alert system",
  //     "Low-latency cloud & MQTT sync",
  //   ],
  //   link: "/contact",
  // },
  // {
  //   id: "nexassist",
  //   name: "NexAssist AI",
  //   tagline: "Enterprise AI Assistant & Workflow Engine",
  //   description:
  //     "Next-generation AI orchestration platform that integrates LLM reasoning into daily enterprise operations. Automate customer inquiries, document analysis, knowledge base retrieval, and internal helpdesks.",
  //   icon: Bot,
  //   iconBg: "bg-purple-500/10 text-purple-600 border-purple-200",
  //   badge: "AI Automation",
  //   badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  //   features: [
  //     "Custom RAG knowledge retrieval",
  //     "Multi-modal AI assistant agents",
  //     "Seamless API & CRM integrations",
  //     "Enterprise SLA & data privacy",
  //   ],
  //   link: "/contact",
  // },
  // {
  //   id: "launchpad",
  //   name: "LaunchPad LMS",
  //   tagline: "Enterprise Learning & Skill Development System",
  //   description:
  //     "A scalable LMS and workforce training engine designed for rapid onboarding, course delivery, skill verification, and interactive candidate assessments with progress analytics.",
  //   icon: GraduationCap,
  //   iconBg: "bg-amber-500/10 text-amber-600 border-amber-200",
  //   badge: "EdTech & LMS",
  //   badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  //   features: [
  //     "Interactive course authoring & media",
  //     "Automated assessment & grading",
  //     "Progress tracking & certification",
  //     "White-label corporate portals",
  //   ],
  //   link: "/contact",
  // },
];
