import { ArrowUpRight } from "lucide-react";
import { achievements } from "@/content/achievements";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const Wrapper = item.link ? "a" : "div";
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.05}>
              <Wrapper
                {...(item.link
                  ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-video overflow-hidden bg-surface-2">
                  <Media
                    media={item.images[0]}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    {item.link ? (
                      <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                    ) : null}
                  </div>
                  <p className="mt-1 flex-1 text-sm text-muted">{item.subtitle}</p>
                  <span className="mt-3 text-xs text-muted/70">{item.year}</span>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
