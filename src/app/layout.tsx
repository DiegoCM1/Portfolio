import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { buildPersonJsonLd } from "@/lib/jsonld";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const titleDefault = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: titleDefault, template: `%s · ${profile.shortName}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: profile.name,
    title: titleDefault,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: site.description,
  },
  // OG/Twitter images are auto-wired by app/opengraph-image.tsx (file convention).
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildPersonJsonLd();
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          // schema.org Person data for search engines + LLMs
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
