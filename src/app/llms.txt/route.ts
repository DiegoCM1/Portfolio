import { buildLlmsTxt } from "@/lib/llms";

/**
 * Serves /llms.txt (see llmstxt.org) generated from /content, so the
 * machine-readable digest can never drift from the rendered page.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
