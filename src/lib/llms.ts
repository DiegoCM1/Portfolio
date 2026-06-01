import { achievements } from "@/content/achievements";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skills } from "@/content/skills";

/**
 * Generates an `llms.txt` document (see llmstxt.org) from site content.
 *
 * This is a Markdown digest aimed at LLMs reading the site live (e.g. an
 * assistant a founder asks "tell me about this candidate"). Because it's
 * derived from the same /content source, it can never drift from the page.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${profile.name}`);
  lines.push("");
  lines.push(`> ${profile.title} — ${profile.headlineCredential}. ${profile.tagline}`);
  lines.push("");
  lines.push(profile.bio.join("\n\n"));
  lines.push("");

  lines.push("## Links");
  lines.push(`- Website: ${site.url}`);
  lines.push(`- GitHub: ${profile.socials.github}`);
  lines.push(`- LinkedIn: ${profile.socials.linkedin}`);
  lines.push(`- Email: ${profile.socials.email}`);
  lines.push(`- Resume (PDF): ${site.url}${profile.resumeUrl}`);
  lines.push("");

  lines.push("## Experience");
  for (const e of experience) {
    lines.push(`### ${e.role} — ${e.company} (${e.period})`);
    if (e.highlight) lines.push(`*${e.highlight}*`);
    for (const p of e.points) lines.push(`- ${p}`);
    lines.push("");
  }

  lines.push("## Projects");
  for (const p of projects) {
    lines.push(`### ${p.title}`);
    lines.push(p.description);
    if (p.tech.length) lines.push(`Tech: ${p.tech.join(", ")}`);
    for (const l of p.links) lines.push(`- ${l.label}: ${l.href}`);
    lines.push("");
  }

  lines.push("## Achievements");
  for (const a of achievements) {
    lines.push(`- **${a.title}** (${a.year}) — ${a.subtitle}`);
  }
  lines.push("");

  lines.push("## Skills");
  for (const g of skills) {
    lines.push(`- **${g.category}:** ${g.items.join(", ")}`);
  }
  lines.push("");

  return lines.join("\n");
}
