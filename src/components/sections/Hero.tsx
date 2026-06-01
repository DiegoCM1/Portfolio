import Image from "next/image";
import { Award, FileText, FolderGit2 } from "lucide-react";
import { profile } from "@/content/profile";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export function Hero() {
  return (
    <header
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <ParticlesBackground />
      {/* soft radial glow, above the particle canvas but behind content */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        {/* Left: copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <TextGenerateEffect
            as="span"
            text={`Hi, I'm ${profile.shortName}`}
            className="text-lg font-medium text-muted sm:text-xl"
          />
          <TextGenerateEffect
            as="h1"
            text={profile.title}
            delay={0.25}
            className="mt-2 text-4xl font-bold leading-tight tracking-tight text-text sm:text-6xl"
          />

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-soft">
            <Award className="size-4" aria-hidden />
            {profile.headlineCredential}
          </div>

          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              <FileText className="size-5" aria-hidden /> Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FolderGit2 className="size-5" aria-hidden /> View Projects
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-accent/40 to-accent-soft/10 blur-md" />
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={520}
            height={620}
            priority
            className="aspect-[4/5] w-full rounded-3xl border border-accent/40 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
