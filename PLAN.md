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

Removed from old stack: CRA / `react-scripts`, `gh-pages` deploy scripts, `emailjs-com`,
duplicate `framer-motion`+`motion`, `web-vitals` boilerplate.

## 4. Folder structure

```
src/
├── app/
│   ├── layout.tsx              # fonts, head defaults, JSON-LD injection
│   ├── page.tsx                # home — composes sections from content
│   ├── globals.css             # Tailwind v4 + theme tokens
│   ├── sitemap.ts              # Next convention
│   ├── robots.ts               # allow Google + AI crawlers (GPTBot, ClaudeBot, ...)
│   ├── opengraph-image.tsx     # dynamic OG card from profile data
│   └── llms.txt/route.ts       # serves generated llms.txt
├── content/                    # ⭐ SINGLE SOURCE OF TRUTH
│   ├── profile.ts              # name, headline, bio, photo, contact, socials
│   ├── experience.ts           # roles (from CV)
│   ├── projects.ts             # curated featured projects
│   ├── achievements.ts         # grant, LlamaCon, TalentLand, NASA, PROYCOMS
│   ├── skills.ts               # grouped skill matrix
│   └── site.ts                 # SEO defaults, domain, OG, nav config
├── lib/
│   ├── schemas.ts              # Zod schemas + inferred TS types
│   ├── github.ts               # GitHub API fetch + merge + ISR
│   ├── jsonld.ts               # builds schema.org/Person
│   └── llms.ts                 # renders llms.txt from content
└── components/
    ├── layout/                 # Navbar, Footer, ThemeToggle
    ├── sections/               # Hero, About, Experience, Projects, Achievements, Skills, Contact
    └── ui/                     # shadcn primitives + ParticlesBackground, TextGenerateEffect

public/
├── cv/Luis-Diego-Colin-CV.pdf
├── media/                      # reuse existing .webp + .mp4 assets
└── favicon / icons
```

## 5. Self-updating engine

**A. GitHub auto-pull** — `lib/github.ts` calls GitHub REST API for `DiegoCM1` repos.
Rendered with ISR (`revalidate = 3600`): new/updated repos appear hourly, zero edits.
Curated `projects.ts` = featured set; GitHub repos fill a secondary "More on GitHub" grid.
A repo `topic` or slug match lets a curated entry enrich its GitHub data instead of duplicating.
Uses read-only `GITHUB_TOKEN` only to raise rate limits.

**B. Content-as-data** — experience/achievements/skills/profile all render from `src/content`.

**C. CV** — on-page Experience renders from `experience.ts`. Downloadable PDF stays a curated
file in `public/cv` for v1. (Stretch, deferred: generate PDF from data via `@react-pdf/renderer`.)

## 6. LLM-friendly layer

| Feature | Purpose |
|---|---|
| SSG content in HTML | Crawlers + LLMs read real text, not an empty shell. |
| JSON-LD `schema.org/Person` | Machine facts: `jobTitle`, `award` (the Grant), `knowsAbout`, `alumniOf`, `sameAs`. |
| `/llms.txt` (llmstxt.org) | Markdown digest of bio + key links, generated from content (never stale). |
| `robots.ts` | Explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended. |
| OG + Twitter meta | Clean DM/social preview cards; dynamic OG image. |
| Semantic HTML | One `<h1>`, landmarks, descriptive `alt` — readable by parsers + a11y. |

## 7. Content (synced to CV)

- **Hero:** "Full-Stack AI Engineer" · "Meta Llama Impact Grant Winner — $100K" · Resume + Projects buttons · photo · constellation bg.
- **About:** product-focused AI engineer + self-taught arc (Teleperformance escalations → programming → AI products).
- **Experience:** BluAI · Dataframe AI Spine · Harris & Frank (SDXL+LoRA) · The Overseer · Verskod.
- **Projects:** curated (BluAI crown jewel, Dataframe, The Overseer, landing pages) + GitHub auto-pull.
- **Achievements:** Meta Llama Impact Grant, LlamaCon 2025, TalentLand (Google Cloud scholarship), NASA Space Apps, PROYCOMS.
- **Skills:** AI&ML (LangGraph, LangChain, RAG, LoRA, Edge/PTE) · Backend (FastAPI, Pydantic, PostgreSQL, Redis, Celery) · Frontend · Deployment · Languages (EN C1 / ES native).
- **Contact:** email + LinkedIn + GitHub via `@emailjs/browser`.

## 8. Confirmed decisions

- Language: **TypeScript** everywhere.
- Product brand: **BluAI** (formerly "BluEye" in old repo — consolidate).
- Canonical URL: **https://diegocm.dev/**.
- Package manager: **pnpm**.
- Scaffold: **fresh** (not in-place CRA migration). Branch: `rebuild/nextjs-v1`.
- Tailwind **v4** + minimal **shadcn/ui**.
- LinkedIn: `linkedin.com/in/luis-diego-ai` (from brief). Email: `luiscolin764@gmail.com` (from CV). *(Confirm if these change.)*

## 9. Build order

1. Scaffold Next.js 15 + TS + Tailwind v4 (pnpm), wire Vercel preview.
2. Zod schemas + `src/content` (port + correct all content from CV). ← foundation
3. Layout + Hero (port particles/text-effect, fix wording).
4. Remaining sections from content.
5. GitHub API + ISR.
6. LLM/SEO layer (metadata, JSON-LD, llms.txt, sitemap, robots, OG image).
7. Asset port, mobile QA, Lighthouse, ship to diegocm.dev.

## 10. Out of scope for v1 (v2+)

- "Chat with my portfolio" RAG agent (build on existing Railway FastAPI assistant).
- PDF generated from data.
- LinkedIn/X auto-sync (no good public API — not worth it).

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
- Visual QA in a real browser (mobile + desktop); tune spacing/animation to taste.
- Point Vercel project at this branch; verify OG preview renders in a DM.
- Decide BluAI vs "MetaQuetzal" repo naming shown on cards.
