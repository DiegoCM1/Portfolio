# Portfolio v1 Rebuild Plan

> Owner: Luis Diego Colín Mendiola (Diego) — Full-Stack AI Engineer
> Canonical URL: https://diegocm.dev/
> Status: **v1 in progress** (fresh Next.js rebuild). v2 (RAG "chat with my portfolio") is explicitly deferred.
>
> This document is the source of truth for *how the project is built*. It is intentionally
> written to be readable by both future-me and an LLM agent picking up the work.

---

## 1. Goal & positioning

A credibility tool and work sample, primarily for outreach to YC / AI / backend / LangGraph
hiring founders. A founder skims the hero, then clicks into projects + GitHub. The frontend is
*packaging*: load fast, look clean, work on mobile, establish credibility. The weight is on the
AI/backend showcase.

**Positioning:** Full-Stack AI Engineer. Headline credential: **Meta Llama Impact Grant Winner ($100K)**
for **BluAI**. (NOTE: it is a *Grant*, never a "hackathon" — fix this wording everywhere.)

## 2. Guiding principles

| Principle | Practice |
|---|---|
| Single source of truth | All content in typed files under `src/content`. JSX never hardcodes content. One edit updates the page, the PDF link, JSON-LD, and `llms.txt`. |
| LLM-friendly = machine-readable | SSG (content in HTML) + JSON-LD (`schema.org/Person`) + `/llms.txt` + semantic HTML + AI-crawler-friendly `robots`. |
| Self-updating | (a) GitHub repos auto-pulled via API + ISR. (b) Everything else derived from one data model. |
| Ship fast, no over-engineering | No DB, no CMS, no auth. Static-first. v2 excluded. |

## 3. Tech stack (2026 standard)

- **Next.js 16 (App Router) + React 19** — SSR/SSG fixes crawler + link-preview blindness; ISR powers GitHub auto-pull. (Scaffold pinned the current major, 16, not 15.)
- **TypeScript** — everywhere. Typed content is the backbone of self-updating + machine-readability.
- **Tailwind CSS v4** — current major, CSS-first config.
- **shadcn/ui** — selective (Button/Card/Dialog only). We own the code.
- **Framer Motion** (`motion` package, single) — keep hero animation vibe.
- **@tsparticles/react** (v3) — reuse constellation background.
- **Zod** — runtime-validate content so bad data fails the build, not production.
- **pnpm** — package manager (content-addressable store, strict node_modules).
- **Vercel** — hosting (already wired to diegocm.dev).
- **@emailjs/browser** — contact form (replaces deprecated `emailjs-com`).

## 11. Build log — deviations from the plan (v1 shipped)

- **Next.js 16.2** (not 15) — current major at scaffold time. React 19.2, Tailwind v4.3, TypeScript 5.9.
- **shadcn/ui skipped** — hand-rolled lightweight primitives (`Section`, `TechBadge`, `Media`, `Reveal`) instead. Less tooling/config for a handful of components; still "own the code."
- **tsParticles pinned to v3** — v4 replaced `initParticlesEngine` with an unstable Provider API; v3 is the proven, documented version.
- **Dark-only theme** — dropped the light/dark toggle for v1 to keep the surface lean (brief emphasizes the dark AI look).
- **Contact = direct links** (mailto + LinkedIn + GitHub). EmailJS form deferred so we don't ship a contact path that silently fails without configured keys.
- **Icons:** lucide-react for UI chrome (it dropped brand icons in v1.x), `react-icons/si` + `/fa6` for tech/brand logos.
- **pnpm 11.5 build gate:** native build scripts (`sharp`, `unrs-resolver`, `@tsparticles/engine`) approved via `pnpm approve-builds --all` (config keys in `pnpm-workspace.yaml` / `package.json` are no longer honored).
- **GitHub auto-pull removed (post-review):** the "More on GitHub" ISR grid was cut — the curated Projects section already carries the narrative, and a raw repo list risked diluting it. The GitHub profile is still linked in the navbar/contact/footer. `/` is now fully static. Self-updating comes purely from `src/content`.

### Status: v1 builds green, type-checks, lints clean. SSR content, JSON-LD, /llms.txt, /robots.txt (AI-crawler-friendly), /sitemap.xml, and dynamic /opengraph-image all verified.

### Remaining before launch
- Point Vercel project at this branch; verify OG preview renders in a DM.
- Decide BluAI vs "MetaQuetzal" repo naming shown on cards.

## 10. (v2+)

- "Chat with my portfolio" RAG agent (build on existing Railway FastAPI assistant).
- Add metrics where I have them
- diego@diegocm.dev instead of the Gmail. You own the domain now — Cloudflare email routing is free and a custom email looks more senior than luiscolin764@gmail.com. Small thing, on-brand.
- Get link in linkedin updated so it is diegocm, check if it is possible to have the name there as well
- LinkedIn/X auto-sync (no good public API — not worth it). Or somewhere that i can pin my most important videos from build in public
- Add testimonies, maybe Ivan or Diego Peraza