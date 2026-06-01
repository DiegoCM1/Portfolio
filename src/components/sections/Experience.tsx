import { Award } from "lucide-react";
import { experience } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadgeList } from "@/components/ui/TechBadge";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
            <article className="relative">
              {/* timeline dot */}
              <span className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[2.35rem]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-lg font-semibold text-text">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>

              {job.highlight ? (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-soft">
                  <Award className="size-3.5" aria-hidden />
                  {job.highlight}
                </div>
              ) : null}

              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted sm:text-base">
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

              {job.tech.length ? (
                <div className="mt-3">
                  <TechBadgeList tech={job.tech} />
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
