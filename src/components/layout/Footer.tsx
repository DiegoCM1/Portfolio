import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-10 lg:px-12">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="size-5 text-muted transition-colors hover:text-accent" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="size-5 text-muted transition-colors hover:text-accent" />
          </a>
          <a href={`mailto:${profile.socials.email}`} aria-label="Email">
            <Mail className="size-5 text-muted transition-colors hover:text-accent" />
          </a>
        </div>
      </div>
    </footer>
  );
}
