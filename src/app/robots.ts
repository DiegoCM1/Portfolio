import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * robots.txt — explicitly WELCOMES major AI crawlers in addition to standard
 * search bots, so assistants are permitted to read and cite the site (the
 * point of a credibility tool).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
