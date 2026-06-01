import { defineContent, experienceSchema } from "@/lib/schemas";
import { z } from "zod";

const raw = [
  {
    company: "BluAI",
    role: "Co-Founder & Lead AI Engineer",
    period: "2024 — Present",
    highlight: "Winner — Meta Llama Impact Grant ($100K USD)",
    points: [
      "Co-founded and lead technical development for BluAI, a hurricane resilience platform launching to production on Google Play in May 2026, with iOS in active development.",
      "Architected a hybrid AI system: Llama 3.3 (cloud) with RAG and tool-calling for complex reasoning, switching to quantized Llama edge models (PTE) for fully offline inference during connectivity blackouts.",
      "Engineered the full-stack mobile app in React Native + FastAPI, integrating map-based risk visualization, personalized disaster alerts, and a hybrid cloud/edge inference pipeline.",
    ],
    tech: ["react-native", "fastapi", "python", "llama", "rag", "railway"],
    order: 1,
  },
  {
    company: "Dataframe — AI Spine",
    role: "Full-Stack AI Engineer",
    period: "2025",
    points: [
      "Engineered the core architecture for AI SPINE, a platform for building autonomous agents using natural language.",
      "Implemented complex agentic memory and tool-calling workflows using LangChain and LangGraph, enabling agents to retain context across sessions and platforms.",
      "Delivered a modular, production-ready MVP (FastAPI/Python) and executed a full technical handover to the founding team. Retained as technical advisor.",
    ],
    tech: ["python", "fastapi", "langchain", "langgraph", "postgresql"],
    order: 2,
  },
  {
    company: "Harris & Frank",
    role: "Full-Stack AI Engineer",
    period: "2025",
    points: [
      "Built a production web app for sales teams that generates photorealistic suit previews from raw fabric textures, replacing physical photoshoots.",
      "Fine-tuned custom SDXL + LoRA models on RunPod; full-stack architecture in Next.js + FastAPI + Cloudflare R2.",
    ],
    tech: ["python", "fastapi", "nextjs", "lora", "runpod", "cloudflare"],
    order: 3,
  },
  {
    company: "The Overseer",
    role: "Personal Project",
    period: "2026 — Present",
    points: [
      "Built a personal LangGraph agent that enforces task deadlines by polling a source of truth (Notion API), then escalates interventions via Twilio (WhatsApp → calls) as deadlines approach.",
      "Engineered the backend with FastAPI, PostgreSQL (SQLAlchemy), and APScheduler for persistent task state and scheduled polling.",
    ],
    tech: ["langgraph", "fastapi", "python", "postgresql", "twilio", "notion"],
    order: 4,
  },
  {
    company: "Verskod",
    role: "Co-Founder",
    period: "2024 — 2026",
    points: [
      "Co-founded a development consultancy delivering full-stack and AI engineering for early-stage startups.",
      "Led technical scoping and Web + FastAPI + PostgreSQL builds. Exited as co-founder; retained as technical advisor.",
    ],
    tech: ["python", "fastapi", "nextjs", "postgresql"],
    order: 5,
  },
];

export const experience = raw
  .map((e) => defineContent(experienceSchema, e))
  .sort((a, b) => a.order - b.order) satisfies z.infer<typeof experienceSchema>[];
