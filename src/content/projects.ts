import { defineContent, projectSchema } from "@/lib/schemas";

/**
 * Curated projects — the "weight" of the portfolio, rendered in priority order.
 * (`repo` is an optional pointer to the source repo, kept for reference.)
 */
const raw = [
  {
    slug: "bluai",
    title: "BluAI — AI Hurricane Resilience Platform",
    summary: "$100K Meta Llama Impact Grant winner. Hybrid cloud/edge AI hurricane assistant.",
    description:
      "BluAI is an AI-powered hurricane resilience platform and the core deliverable of our $100K Meta Llama Impact Grant. I architected a hybrid AI system — Llama 3.3 in the cloud (RAG + tool-calling) for complex reasoning, switching to quantized Llama edge models (PyTorch ExecuTorch / PTE) for fully offline inference during connectivity blackouts — and built the full-stack mobile app in React Native + FastAPI with map-based risk visualization and personalized disaster alerts. Now live on Google Play, with iOS in active development.",
    tech: ["react-native", "fastapi", "python", "llama", "rag", "pytorch"],
    cover: { src: "/media/pcBluEyeMap.webp", alt: "BluAI hurricane risk map interface", type: "image" },
    gallery: [
      { src: "/media/blueye-mvp.mp4", alt: "BluAI mobile app demo", type: "video" },
      { src: "/media/bluEyeMobile.webp", alt: "BluAI mobile alert screen", type: "image" },
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bluai.app&hl=en", kind: "demo" },
      { label: "Website", href: "https://www.bluai.com.mx/", kind: "external" },
      { label: "Code", href: "https://github.com/DiegoCM1/BluEye", kind: "code" },
    ],
    featured: true,
    repo: "MetaQuetzal",
    order: 1,
  },
  {
    slug: "ai-spine",
    title: "AI Spine — Autonomous Agent Platform",
    summary: "Spin up autonomous AI agents from natural language. Heavy LangChain + LangGraph.",
    description:
      "AI Spine is a platform for building autonomous agents using natural language. I engineered the core architecture and implemented complex agentic memory and tool-calling workflows with LangChain and LangGraph, enabling agents to retain context across sessions and platforms. Delivered a modular, production-ready MVP in FastAPI/Python with a full technical handover; retained as technical advisor. (Contract project for Dataframe — internals private.)",
    tech: ["python", "fastapi", "langchain", "langgraph"],
    links: [{ label: "Website", href: "https://www.aispine.ai/", kind: "demo" }],
    featured: true,
    order: 2,
  },
  {
    slug: "the-overseer",
    title: "The Overseer — LangGraph Productivity Agent",
    summary: "A vigilante agent that enforces deadlines and escalates via WhatsApp & calls.",
    description:
      "A personal LangGraph agent that enforces task deadlines by polling a source of truth (Notion API), then escalates interventions through Twilio (WhatsApp → phone calls) as deadlines approach. Backend built with FastAPI, PostgreSQL (SQLAlchemy), and APScheduler for persistent task state and scheduled polling. A practical demo of agentic state-machine patterns, scheduling, and human-in-the-loop escalation.",
    tech: ["langgraph", "fastapi", "python", "postgresql", "twilio", "notion"],
    links: [],
    featured: true,
    order: 3,
  },
  {
    slug: "harris-and-frank",
    title: "Harris & Frank — AI Suit Visualizer",
    summary: "Photorealistic suit previews generated from raw fabric textures — no photoshoot needed.",
    description:
      "A production web app for sales teams that generates photorealistic suit previews from raw fabric textures, replacing physical photoshoots. I fine-tuned custom SDXL + LoRA models on RunPod, with a full-stack architecture in Next.js + FastAPI + Cloudflare R2. (Client project — internals private.)",
    tech: ["python", "fastapi", "nextjs", "lora", "pytorch", "runpod", "cloudflare"],
    links: [],
    featured: true,
    order: 4,
  },
];

export const projects = raw
  .map((p) => defineContent(projectSchema, p))
  .sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((p) => p.featured);
