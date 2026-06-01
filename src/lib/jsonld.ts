import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { skills } from "@/content/skills";

/**
 * Builds a schema.org/Person JSON-LD object from content.
 *
 * This is the machine-readable layer for search engines' knowledge graphs and
 * LLMs: it states, as structured triples, the job title, the $100K award, what
 * the person knows, and canonical social profiles (`sameAs`). Injected as a
 * <script type="application/ld+json"> in the root layout.
 */
export function buildPersonJsonLd() {
  const knowsAbout = skills.flatMap((group) => group.items);
  const sameAs = [profile.socials.github, profile.socials.linkedin, profile.socials.x].filter(
    Boolean,
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: profile.title,
    description: site.description,
    url: site.url,
    image: `${site.url}${profile.photo.src}`,
    email: `mailto:${profile.socials.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    sameAs,
    knowsAbout,
    award: "Meta Llama Impact Grant ($100K USD)",
  };
}
