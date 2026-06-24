import { NextResponse } from "next/server";

/**
 * GET /resume — stable, on-brand entry point for the CV.
 *
 * The CV's source of truth is a Google Doc. This endpoint redirects to the
 * Doc's live PDF *export*, so editing the document updates the site instantly —
 * no redeploy, no re-upload, no version juggling.
 *
 * Requirements:
 *  - The Doc must be shared as "Anyone with the link → Viewer". Otherwise the
 *    export returns Google's sign-in page instead of the PDF.
 *  - Only edit CV_URL if you ever point at a *different* document. Editing the
 *    Doc's contents needs no code change.
 */

// Live Google Doc, exported as PDF on every request.
const CV_URL =
  "https://docs.google.com/document/d/1zYNrg8UpUF1jrW3TFBJ3FST1cNvBotDz1fp0QvZ3iuk/export?format=pdf";

export function GET() {
  // 302 (temporary): the exported content changes whenever the Doc is edited,
  // so this hop must never be cached as permanent.
  return NextResponse.redirect(CV_URL, 302);
}
