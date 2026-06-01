import { defineContent, skillGroupSchema } from "@/lib/schemas";

const raw = [
  {
    category: "AI & ML",
    items: [
      "Agentic AI (LangGraph, LangChain)",
      "RAG Pipelines",
      "LLM Fine-tuning (LoRA)",
      "Edge LLM Deployment (ExecuTorch / PTE)",
      "RunPod",
      "OpenAI API",
    ],
    order: 1,
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "Redis", "Celery"],
    order: 2,
  },
  {
    category: "Frontend",
    items: ["Next.js", "React Native", "Tailwind CSS", "TypeScript"],
    order: 3,
  },
  {
    category: "Deployment",
    items: ["Vercel", "Railway", "Docker", "Git", "GitHub", "CI/CD Workflows"],
    order: 4,
  },
  {
    category: "Languages",
    items: ["English (C1)", "Spanish (Native)"],
    order: 5,
  },
];

export const skills = raw
  .map((s) => defineContent(skillGroupSchema, s))
  .sort((a, b) => a.order - b.order);
