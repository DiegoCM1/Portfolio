import { z } from "zod";

/**
 * Schemas = the contract for all site content.
 *
 * Every file under `src/content` is validated against these at module load,
 * so a malformed entry (missing image, bad URL, empty title) fails the build
 * on Vercel instead of silently shipping a broken page. This is the backbone
 * of the "single source of truth" architecture: edit data here, and the page,
 * JSON-LD, llms.txt, and OG image all stay in sync.
 */

// --- Shared -----------------------------------------------------------------

/** A link with a semantic kind so the UI can pick the right icon/label. */
export const linkSchema = z.object({
  label: z.string(),
  href: z.url(),
  kind: z.enum(["code", "demo", "docs", "external"]).default("external"),
});
export type Link = z.infer<typeof linkSchema>;

/** Image or video asset under /public, with required alt text for a11y + LLMs. */
export const mediaSchema = z.object({
  src: z.string().startsWith("/", "Asset paths must be absolute (served from /public)"),
  alt: z.string().min(1, "Media requires descriptive alt text"),
  /** "image" | "video" — drives whether we render <img> or <video>. */
  type: z.enum(["image", "video"]).default("image"),
});
export type Media = z.infer<typeof mediaSchema>;

// --- Profile ----------------------------------------------------------------

export const profileSchema = z.object({
  name: z.string(),
  shortName: z.string(),
  /** Job title, e.g. "Full-Stack AI Engineer". */
  title: z.string(),
  /** One-line hero subhead. */
  tagline: z.string(),
  /** The headline credential, shown prominently. */
  headlineCredential: z.string(),
  location: z.string(),
  /** About-section paragraphs, in order. */
  bio: z.array(z.string()).min(1),
  photo: mediaSchema,
  resumeUrl: z.string().startsWith("/"),
  socials: z.object({
    github: z.url(),
    githubUser: z.string(),
    linkedin: z.url(),
    email: z.email(),
    x: z.url().optional(),
  }),
});
export type Profile = z.infer<typeof profileSchema>;

// --- Experience -------------------------------------------------------------

export const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  /** Human-readable period, e.g. "2024 — Present". */
  period: z.string(),
  /** Optional one-line highlight (e.g. the grant) shown as a badge. */
  highlight: z.string().optional(),
  /** Bullet points describing the work. */
  points: z.array(z.string()).min(1),
  /** Tech keys (resolved to icons by the TechIcon registry). */
  tech: z.array(z.string()).default([]),
  /** Sort weight — lower shows first. */
  order: z.number().default(0),
});
export type Experience = z.infer<typeof experienceSchema>;

// --- Projects ---------------------------------------------------------------

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  /** Short tagline shown under the title. */
  summary: z.string(),
  description: z.string(),
  tech: z.array(z.string()).default([]),
  /** Primary (desktop/landscape) preview. Optional: private projects render a gradient card. */
  cover: mediaSchema.optional(),
  /** Optional secondary previews (e.g. mobile screenshots/clips). */
  gallery: z.array(mediaSchema).default([]),
  links: z.array(linkSchema).default([]),
  /** Featured projects render large and first. */
  featured: z.boolean().default(false),
  /** Optional GitHub repo name to enrich with live API data (stars, etc.). */
  repo: z.string().optional(),
  order: z.number().default(0),
});
export type Project = z.infer<typeof projectSchema>;

// --- Achievements -----------------------------------------------------------

export const achievementSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  year: z.string(),
  link: z.url().optional(),
  images: z.array(mediaSchema).min(1),
  order: z.number().default(0),
});
export type Achievement = z.infer<typeof achievementSchema>;

// --- Skills -----------------------------------------------------------------

export const skillGroupSchema = z.object({
  category: z.string(),
  /** Skill items: plain labels (icon resolution is best-effort by label). */
  items: z.array(z.string()).min(1),
  order: z.number().default(0),
});
export type SkillGroup = z.infer<typeof skillGroupSchema>;

// --- Site config ------------------------------------------------------------

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const siteSchema = z.object({
  name: z.string(),
  url: z.url(),
  description: z.string(),
  /** OG/Twitter card image path under /public (or a route). */
  ogImage: z.string(),
  locale: z.string().default("en_US"),
  keywords: z.array(z.string()).default([]),
  nav: z.array(navItemSchema).default([]),
});
export type Site = z.infer<typeof siteSchema>;

/**
 * Helper that validates a content object and returns a fully-typed result.
 *
 * Input is `unknown` on purpose: Zod owns runtime validation (and throws at
 * build time on bad data), while the return type `z.output<T>` gives consumers
 * complete type safety. This sidesteps TS literal-widening inside data arrays
 * without weakening the actual guarantee.
 */
export function defineContent<T extends z.ZodType>(schema: T, data: unknown): z.output<T> {
  return schema.parse(data);
}
