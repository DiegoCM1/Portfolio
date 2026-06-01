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
      "BluAI is an AI-powered hurricane resilience platform and the core deliverable of our $100K Meta Llama Impact Grant. It pairs a Llama 3.3 cloud brain (RAG + tool-calling) with quantized Llama edge models that run fully offline during connectivity blackouts. Built in React Native + FastAPI with map-based risk visualization and personalized, location-aware disaster alerts. Launching to production on Google Play in May 2026, with iOS in active development.",
    tech: ["react-native", "fastapi", "python", "llama", "rag", "railway", "expo"],
    cover: { src: "/media/pcBluEyeMap.webp", alt: "BluAI hurricane risk map interface", type: "image" },
    gallery: [
      { src: "/media/blueye-mvp.mp4", alt: "BluAI mobile app demo", type: "video" },
      { src: "/media/bluEyeMobile.webp", alt: "BluAI mobile alert screen", type: "image" },
    ],
    links: [
      { label: "Code", href: "https://github.com/DiegoCM1/MetaQuetzal", kind: "code" },
      { label: "AI Backend", href: "https://github.com/DiegoCM1/ai-blueye", kind: "code" },
      { label: "Demo (APK)", href: "https://expo.dev/artifacts/eas/vooZNx2xhnMGVyugxTXxR5.apk", kind: "demo" },
    ],
    featured: true,
    repo: "MetaQuetzal",
    order: 1,
  },
  {
    slug: "dataframe-ai-spine",
    title: "Dataframe — AI Spine",
    summary: "Spin up autonomous AI agents from natural language. Heavy LangChain + LangGraph.",
    description:
      "AI SPINE is a platform for building autonomous agents using natural language. I engineered the core architecture and implemented complex agentic memory and tool-calling workflows with LangChain and LangGraph, enabling agents to retain context across sessions and platforms. Delivered a modular, production-ready MVP in FastAPI/Python with a full technical handover; retained as technical advisor. (Contract project — internals private.)",
    tech: ["python", "fastapi", "langchain", "langgraph", "postgresql"],
    links: [],
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
  {
    slug: "bluai-landing",
    title: "BluAI — Official Landing Page",
    summary: "Marketing site for the award-winning hurricane platform.",
    description:
      "The official BluAI landing page communicates the product's purpose and impact with responsive layouts, optimized performance, and compelling storytelling. Built with Next.js + TypeScript, styled with Tailwind CSS, and hosted on Vercel.",
    tech: ["nextjs", "react", "typescript", "tailwind", "vercel"],
    cover: { src: "/media/pcBluEyeLanding.webp", alt: "BluAI landing page on desktop", type: "image" },
    gallery: [{ src: "/media/bluEyeMobile.webp", alt: "BluAI landing page on mobile", type: "image" }],
    links: [
      { label: "Code", href: "https://github.com/DiegoCM1/blueye-landing", kind: "code" },
      { label: "Live", href: "https://blueye-landing.vercel.app/", kind: "demo" },
    ],
    repo: "blueye-landing",
    order: 5,
  },
  {
    slug: "portfolio-ai-assistant",
    title: "AI Portfolio Assistant — Ask Me Anything",
    summary: "Full-stack LLM assistant that answers questions about my work.",
    description:
      "A full-stack AI assistant that answers questions about my background, projects, and skills. Demonstrates backend integration with LLM APIs using FastAPI, OpenRouter, and dynamic prompt handling. (This is the foundation for the upcoming 'Chat with my portfolio' RAG feature.)",
    tech: ["python", "fastapi", "openrouter", "ollama", "railway"],
    cover: { src: "/media/ai-portfolio-working.mp4", alt: "AI portfolio assistant answering a question", type: "video" },
    gallery: [{ src: "/media/idle-ai-portfolio.webp", alt: "AI portfolio assistant idle state", type: "image" }],
    links: [
      { label: "Code", href: "https://github.com/DiegoCM1/portfolio-ai-assistant", kind: "code" },
      {
        label: "Docs",
        href: "https://github.com/DiegoCM1/portfolio-ai-assistant?tab=readme-ov-file#-portfolio-ai-assistant--backend",
        kind: "docs",
      },
    ],
    repo: "portfolio-ai-assistant",
    order: 6,
  },
  {
    slug: "alva",
    title: "Alva — AI Wake-Up Assistant (Landing)",
    summary: "Landing page for a conversational alarm app.",
    description:
      "Modern, responsive landing page for Alva, a conversational alarm app. Built to introduce the product, capture early interest, and drive waitlist sign-ups. Next.js + TypeScript + Tailwind on Vercel.",
    tech: ["nextjs", "react", "typescript", "tailwind", "vercel"],
    cover: { src: "/media/alvaDesktopImage.webp", alt: "Alva landing page on desktop", type: "image" },
    gallery: [{ src: "/media/alvaMobileImage.webp", alt: "Alva landing page on mobile", type: "image" }],
    links: [
      { label: "Code", href: "https://github.com/DiegoCM1/Alva", kind: "code" },
      { label: "Live", href: "https://alvaassistant.vercel.app/", kind: "demo" },
    ],
    repo: "Alva",
    order: 7,
  },
  {
    slug: "verskod-landing",
    title: "Verskod — Official Landing Page",
    summary: "Brand site for my AI development consultancy.",
    description:
      "Landing page for Verskod, the development consultancy I co-founded. Communicates the brand's mission and vision and invites users to join the community. Next.js + TypeScript + Tailwind on Vercel.",
    tech: ["nextjs", "react", "typescript", "tailwind", "vercel"],
    cover: { src: "/media/verskod-landing-pc.webp", alt: "Verskod landing page on desktop", type: "image" },
    gallery: [{ src: "/media/verskod-landing.webp", alt: "Verskod landing page on mobile", type: "image" }],
    links: [
      { label: "Code", href: "https://github.com/DiegoCM1/verskod-landing", kind: "code" },
      { label: "Live", href: "https://verskod-landing.vercel.app/", kind: "demo" },
    ],
    repo: "verskod-landing",
    order: 8,
  },
];

export const projects = raw
  .map((p) => defineContent(projectSchema, p))
  .sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((p) => p.featured);
