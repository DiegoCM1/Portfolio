# diegocm.dev — Portfolio

Personal portfolio for **Luis Diego Colín Mendiola** (Diego), Full-Stack AI Engineer.
Next.js (App Router) + Tailwind v4, deployed on Vercel. Data-driven and self-updating.

See [`PLAN.md`](./PLAN.md) for the full architecture rationale.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Zod · Framer Motion (`motion`) · tsParticles v3 · pnpm

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the build
pnpm lint
```

> First install may prompt to approve native build scripts. Run `pnpm approve-builds --all` once.

## Architecture: edit content, not components

All site content is a **single source of truth** under [`src/content`](./src/content), validated
by Zod schemas in [`src/lib/schemas.ts`](./src/lib/schemas.ts). Components render *from* this data —
no copy is hardcoded in JSX. Update a content file and the page, JSON-LD, `llms.txt`, and OG image
all stay in sync.

| File | What it holds |
|------|---------------|
| `src/content/profile.ts` | Name, title, tagline, bio, photo, socials, resume link |
| `src/content/experience.ts` | Work history (timeline) |
| `src/content/projects.ts` | Curated featured projects (priority-ordered) |
| `src/content/achievements.ts` | Awards / recognition |
| `src/content/skills.ts` | Grouped skill matrix |
| `src/content/site.ts` | Canonical URL, SEO defaults, nav, keywords |

Bad data (missing image, malformed URL) throws at **build time** — a broken deploy instead of a
broken live page.

### Adding a project

Add an entry to `src/content/projects.ts`. `cover`/`gallery` reference assets in `public/media`
(`type: "image" | "video"`). Tech is a list of string keys; icons resolve via
`src/components/ui/TechBadge.tsx` (unknown keys render as text — safe).

### Self-updating

All content is derived from a single source under `src/content` — update one file and the page,
JSON-LD, `llms.txt`, and OG image all stay in sync.

## LLM / SEO layer

- `src/app/layout.tsx` — full metadata (OG/Twitter) + `schema.org/Person` JSON-LD ([`src/lib/jsonld.ts`](./src/lib/jsonld.ts))
- `src/app/llms.txt/route.ts` — [llms.txt](https://llmstxt.org) digest generated from content ([`src/lib/llms.ts`](./src/lib/llms.ts))
- `src/app/robots.ts` — explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …)
- `src/app/sitemap.ts` — sitemap
- `src/app/opengraph-image.tsx` — dynamic 1200×630 social card from profile data

