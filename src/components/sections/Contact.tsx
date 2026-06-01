import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/content/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * v1 contact = direct, reliable links (mailto + socials). A form via EmailJS
 * is deferred so we don't ship a contact path that silently fails without
 * configured keys.
 */
export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-base text-muted sm:text-lg">
            Open to roles and collaborations building production AI — agents, RAG, and
            backends. The fastest way to reach me is email.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.socials.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              <Mail className="size-5" aria-hidden /> {profile.socials.email}
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FaLinkedinIn className="size-5" aria-hidden /> LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub className="size-5" aria-hidden /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
