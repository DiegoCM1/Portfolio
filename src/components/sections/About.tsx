import { MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p className="flex items-center gap-2 pt-2 text-sm text-muted/80">
            <MapPin className="size-4 text-accent" aria-hidden />
            {profile.location}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
