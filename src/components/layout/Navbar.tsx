"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <a href="#home" className="text-lg font-bold tracking-tight">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-line pl-4">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="size-5 text-muted transition-colors hover:text-accent" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="size-5 text-muted transition-colors hover:text-accent" />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-line/60 transition-all md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-3">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-muted hover:bg-surface-2 hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
