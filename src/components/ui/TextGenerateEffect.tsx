"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word fade/blur-in, echoing the old hero's "typed AI" feel.
 * `delay` (seconds) staggers multiple lines; honors reduced-motion via CSS.
 */
export function TextGenerateEffect({
  text,
  className,
  delay = 0,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, filter: "blur(6px)", y: 6 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 },
          }}
          transition={{ duration: 0.35 }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
