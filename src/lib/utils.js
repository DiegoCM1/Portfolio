import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes properly
export function cn(...classes) {
  return twMerge(clsx(classes));
}
