import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiRailway,
  SiVercel,
  SiDocker,
  SiExpo,
  SiPytorch,
  SiTwilio,
  SiCloudflare,
  SiNotion,
  SiOpenai,
  SiOllama,
  SiPython,
} from "react-icons/si";
import { cn } from "@/lib/utils";

/** Human-readable labels for every tech key used in content. */
const LABELS: Record<string, string> = {
  react: "React",
  "react-native": "React Native",
  nextjs: "Next.js",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  javascript: "JavaScript",
  python: "Python",
  fastapi: "FastAPI",
  langchain: "LangChain",
  langgraph: "LangGraph",
  rag: "RAG",
  lora: "LoRA",
  llama: "Llama",
  postgresql: "PostgreSQL",
  redis: "Redis",
  celery: "Celery",
  railway: "Railway",
  vercel: "Vercel",
  docker: "Docker",
  expo: "Expo",
  ollama: "Ollama",
  openrouter: "OpenRouter",
  openai: "OpenAI",
  pytorch: "PyTorch",
  twilio: "Twilio",
  cloudflare: "Cloudflare",
  notion: "Notion",
  runpod: "RunPod",
};

/** Icons only for keys with a reliable react-icons export. */
const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  react: SiReact,
  "react-native": SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  redis: SiRedis,
  celery: SiCelery,
  railway: SiRailway,
  vercel: SiVercel,
  docker: SiDocker,
  expo: SiExpo,
  ollama: SiOllama,
  openai: SiOpenai,
  pytorch: SiPytorch,
  twilio: SiTwilio,
  cloudflare: SiCloudflare,
  notion: SiNotion,
};

export function TechBadge({ tech }: { tech: string }) {
  const label = LABELS[tech] ?? tech;
  const Icon = ICONS[tech];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2/60 px-2.5 py-1",
        "text-xs font-medium text-muted",
      )}
    >
      {Icon ? <Icon className="size-3.5 text-accent-soft" aria-hidden /> : null}
      {label}
    </span>
  );
}

export function TechBadgeList({ tech }: { tech: string[] }) {
  if (!tech.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <TechBadge key={t} tech={t} />
      ))}
    </div>
  );
}
