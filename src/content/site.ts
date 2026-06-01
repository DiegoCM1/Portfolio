import { defineContent, siteSchema } from "@/lib/schemas";

/**
 * Global site configuration: canonical URL, SEO defaults, and nav.
 * Consumed by metadata, sitemap, robots, JSON-LD, and llms.txt.
 */
export const site = defineContent(siteSchema, {
  name: "Luis Diego Colín Mendiola",
  url: "https://diegocm.dev",
  description:
    "Full-Stack AI Engineer and Meta Llama Impact Grant winner ($100K). I build production AI systems — agents, RAG pipelines, and edge LLMs — end to end with LangGraph, FastAPI, and Next.js.",
  ogImage: "/opengraph-image",
  locale: "en_US",
  keywords: [
    "Full-Stack AI Engineer",
    "LangGraph",
    "LangChain",
    "RAG",
    "Agentic AI",
    "FastAPI",
    "Next.js",
    "Meta Llama Impact Grant",
    "Edge LLM",
    "AI Engineer Mexico",
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
});
