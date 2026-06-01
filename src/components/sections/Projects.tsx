import { Code2, ExternalLink, BookText, ArrowUpRight } from "lucide-react";
import type { Project, Link } from "@/lib/schemas";
import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { cn } from "@/lib/utils";

const LINK_ICON = {
  code: Code2,
  demo: ExternalLink,
  docs: BookText,
  external: ArrowUpRight,
} as const;

function ProjectLink({ link }: { link: Link }) {
  const Icon = LINK_ICON[link.kind];
  const primary = link.kind === "demo";
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
        primary
          ? "bg-accent text-bg hover:bg-accent-strong"
          : "border border-line text-text hover:border-accent hover:text-accent",
      )}
    >
      <Icon className="size-4" aria-hidden /> {link.label}
    </a>
  );
}

function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border bg-surface transition-colors",
        project.featured ? "border-accent/30" : "border-line hover:border-accent/40",
      )}
    >
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden bg-surface-2">
        {project.cover ? (
          <Media
            media={project.cover}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          // Branded gradient placeholder for private/no-image projects
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-2 via-surface to-accent/10">
            <span className="text-5xl font-bold text-accent/40">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {project.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-xs font-semibold text-bg">
            Featured
          </span>
        ) : null}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-text">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-accent-soft">{project.summary}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4">
          <TechBadgeList tech={project.tech} />
        </div>

        {project.links.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <ProjectLink key={link.href} link={link} />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.05}>
            <ProjectCard project={project} priority={i < 3} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
