import { defineContent, profileSchema } from "@/lib/schemas";

export const profile = defineContent(profileSchema, {
  name: "Luis Diego Colín Mendiola",
  shortName: "Diego",
  title: "Full-Stack AI Engineer",
  tagline:
    "I build production AI systems — agents, RAG, and edge LLMs — end to end.",
  headlineCredential: "Meta Llama Impact Grant Winner · $100K",
  location: "Mexico",
  bio: [
    "I'm a product-focused Full-Stack AI Engineer specializing in agentic workflows (LangGraph) and high-performance backends (FastAPI). I ship production RAG, fine-tuning, and edge AI systems for startups and enterprise.",
    "My path was self-taught. I started in bilingual customer service, moved up to the escalations team at Teleperformance, then left to study programming full-time — which gave me the communication, English fluency, and grit I bring to engineering today.",
    "Now I co-found and build AI products that reach real users: from cloud reasoning with Llama and tool-calling, to quantized edge models that run fully offline when the network goes down.",
  ],
  photo: {
    src: "/media/ME.webp",
    alt: "Portrait of Luis Diego Colín Mendiola",
    type: "image",
  },
  // Stable local path; the /resume route decides where it actually resolves
  // (live Google Drive file when CV_DRIVE_FILE_ID is set, bundled PDF otherwise).
  resumeUrl: "/resume",
  socials: {
    github: "https://github.com/DiegoCM1",
    githubUser: "DiegoCM1",
    linkedin: "https://linkedin.com/in/luis-diego-ai",
    email: "luiscolin764@gmail.com",
  },
});
