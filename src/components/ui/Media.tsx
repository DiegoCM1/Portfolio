import Image from "next/image";
import type { Media as MediaType } from "@/lib/schemas";
import { cn } from "@/lib/utils";

/**
 * Renders an image or autoplaying muted video that fills its (relative,
 * sized) parent. Videos are muted + playsInline so mobile browsers allow
 * autoplay; images use next/image for optimization.
 */
export function Media({
  media,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  className,
}: {
  media: MediaType;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (media.type === "video") {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label={media.alt}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
