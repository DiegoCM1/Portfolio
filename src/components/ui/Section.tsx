import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Consistent section shell: max width, responsive padding, anchor id. */
export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 border-t border-line/60 py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12">
        {title ? <SectionHeading>{title}</SectionHeading> : null}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
      <span className="text-accent">.</span>
    </h2>
  );
}
