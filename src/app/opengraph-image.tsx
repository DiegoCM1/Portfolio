import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

/**
 * Dynamic 1200x630 social card, generated from profile data at build time.
 * Next auto-wires this to OG + Twitter image tags via the file convention,
 * so DM/social previews render a branded card instead of a blank shell.
 */
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #060910 0%, #0b1120 60%, #0e2030 100%)",
          color: "#e6edf6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#7dd3fc", fontWeight: 600 }}>
          {profile.headlineCredential}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 44, color: "#38bdf8", fontWeight: 700 }}>
          {profile.title}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#9aa7bd", maxWidth: 900 }}>
          {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 24,
            color: "#9aa7bd",
            borderTop: "1px solid #1e2a44",
            paddingTop: 24,
          }}
        >
          diegocm.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
