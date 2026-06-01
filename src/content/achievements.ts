import { defineContent, achievementSchema } from "@/lib/schemas";

const raw = [
  {
    title: "Meta Llama Impact Grant Winner",
    subtitle:
      "Won the $100K Meta Llama Impact Grant with BluAI, an AI-powered hurricane resilience system recognized by Meta for social impact.",
    year: "2024 — 2025",
    link: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/",
    images: [
      { src: "/media/llamaImpactRecipients.webp", alt: "Meta Llama Impact Grant recipients", type: "image" },
      { src: "/media/bluEyeTeam.webp", alt: "The BluAI team", type: "image" },
      { src: "/media/bluEyeLogo.webp", alt: "BluAI logo", type: "image" },
    ],
    order: 1,
  },
  {
    title: "Featured at LlamaCon 2025",
    subtitle: "Showcased BluAI as one of Meta's top AI impact projects at their global LlamaCon event.",
    year: "2025",
    link: "https://ai.meta.com/blog/llamacon-llama-news/",
    images: [
      { src: "/media/llamaCon2025Logo.webp", alt: "LlamaCon 2025 logo", type: "image" },
      { src: "/media/markTalkingLlamaCon2025.webp", alt: "Mark Zuckerberg speaking at LlamaCon 2025", type: "image" },
      { src: "/media/llamaCon2025RecipientTeams.webp", alt: "Llama Impact Grant recipient teams at LlamaCon 2025", type: "image" },
    ],
    order: 2,
  },
  {
    title: "TalentLand 2025 — Google Cloud Scholarship",
    subtitle:
      "Attended on full scholarship. Joined AI, dev, and startup-focused workshops and networking events.",
    year: "2025",
    link: "https://www.linkedin.com/posts/luis-colin-mendiola-974679176_talentland2025-googlecloud-chess-activity-7328112958171979776-byzt",
    images: [
      { src: "/media/talentLandMexicoLogo.webp", alt: "TalentLand Mexico logo", type: "image" },
      { src: "/media/meAtTalentLand.webp", alt: "Diego at TalentLand 2025", type: "image" },
      { src: "/media/expoTalentLand.webp", alt: "TalentLand 2025 expo floor", type: "image" },
    ],
    order: 3,
  },
  {
    title: "NASA Space Apps Challenge — CDMX",
    subtitle:
      "Took part in NASA's global hackathon focused on solving Earth and space challenges using open data. Co-created 'MetaQuetzal'.",
    year: "2024",
    link: "https://www.spaceappschallenge.org/",
    images: [
      { src: "/media/nasaSpaceAppsLogo.webp", alt: "NASA Space Apps Challenge logo", type: "image" },
      { src: "/media/meAtNasaSpaceApps.webp", alt: "Diego at NASA Space Apps Challenge", type: "image" },
      { src: "/media/logoMetaquetzal.webp", alt: "MetaQuetzal project logo", type: "image" },
    ],
    order: 4,
  },
  {
    title: "Speaker at PROYCOMS",
    subtitle: "Spoke at an online conference on stress, work-life balance, and workplace culture.",
    year: "2024",
    link: "https://www.linkedin.com/events/proycoms7265533245801328640/comments/",
    images: [
      { src: "/media/PROYCOMSEvent.webp", alt: "PROYCOMS event", type: "image" },
      { src: "/media/teamCOMS.webp", alt: "PROYCOMS team", type: "image" },
    ],
    order: 5,
  },
];

export const achievements = raw
  .map((a) => defineContent(achievementSchema, a))
  .sort((a, b) => a.order - b.order);
