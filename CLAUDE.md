# Portfolio — Project Context (read me first)

Personal portfolio for **Luis Diego Colín Mendiola (Diego)** — Full-Stack AI Engineer.
Live at **https://diegocm.dev**. Next.js 16 (App Router) + React 19 + TS + Tailwind v4, hosted on Vercel.

> The deep "why" of the architecture lives in `PLAN.md`. **This file is the operational
> "set and forget" guide** — how to change things without breaking them.

---

## THE GOLDEN RULE

**All site content lives in `src/content/`. Components NEVER hardcode content.**

To change what the site *says*, you edit a file in `src/content/` — never a component in
`src/components/`. One edit there updates the visible page, the JSON-LD (`schema.org/Person`),
`/llms.txt`, the sitemap, and the OG image, all at once. That folder is the single source of truth.

```
src/content/  ──►  validated by src/lib/schemas.ts (Zod, at build time)
                   │
                   ├─► page UI (src/components/*)
                   ├─► JSON-LD (src/lib/jsonld.ts)
                   ├─► /llms.txt (src/lib/llms.ts)
                   └─► sitemap / robots / OG image
```

If content data is malformed (bad URL, missing image alt, etc.), **the build fails on Vercel**
instead of shipping broken. That's intentional — schemas are the contract.

---

## CONTENT MAP — "what controls what"

| To change… | Edit |
|---|---|
| Name, title, bio, photo, **resume link**, social links | `src/content/profile.ts` |
| Projects (title, description, tech, links, featured) | `src/content/projects.ts` |
| Work experience entries | `src/content/experience.ts` |
| Skills + categories | `src/content/skills.ts` |
| Achievements (Meta grant, etc.) | `src/content/achievements.ts` |
| Site URL, nav, SEO keywords, OG image path | `src/content/site.ts` |
| Field definitions / validation rules for all of the above | `src/lib/schemas.ts` |

---

## HOW TO EDIT (common tasks)

**Pattern:** every content file builds a `raw` array (or object), passes each item through
`defineContent(<schema>, item)`, and usually sorts by an `order` field. To add an entry, copy
an existing object, change the values, and give it the next `order` number. Match the shape in
`src/lib/schemas.ts` exactly — TypeScript + Zod will flag anything wrong.

- **Add a project** → add an object to `raw` in `projects.ts`. `featured: true` renders it large
  and first. `order` controls position (lower = earlier). Media paths point into `public/media/`.
- **Add a job** → add an object to `raw` in `experience.ts` (`order: 1` is most recent/top).
- **New image/video** → drop the file in `public/media/`, reference it as `/media/<file>` with
  descriptive `alt` text (required — it's enforced and feeds accessibility + LLMs).
- **Change nav or SEO** → `site.ts`.

After editing, sanity-check with `pnpm exec tsc --noEmit` (fast) or `pnpm build` (full).

---

## THE CV — fully set-and-forget (already wired)

The "Resume" button is **self-updating from a Google Doc**. You never touch the repo to update it.

- Flow: button → `profile.resumeUrl` (`"/resume"`) → `src/app/resume/route.ts` → 302 redirect →
  the Doc's live PDF export (`docs.google.com/document/d/<ID>/export?format=pdf`).
- **To update your CV: open the Google Doc, edit, save. Done.** The site serves a freshly
  rendered PDF on the next click. No redeploy, no re-upload.

**Do NOT** (these are the only ways to break it):
- Download-as-`.docx`/re-upload, or create a *new* Doc → different file ID → dead link.
  (If the Doc ever genuinely moves, update the one `CV_URL` string in `src/app/resume/route.ts`.)
- Set the Doc's sharing to private → export hits a Google sign-in wall. Keep it
  **"Anyone with the link → Viewer."**

---

## GUARDRAILS

- `profile.resumeUrl` must start with `/` (schema-enforced) and is concatenated as
  `${site.url}${resumeUrl}` in `llms.txt`. Keep it a local path (`/resume`) — never a raw external URL.
- Content is dark-theme only; no light mode (dropped in v1 on purpose — see `PLAN.md`).
- Positioning wording: the Meta Llama prize is a **Grant**, never a "hackathon." ($100K.)
- Don't reintroduce a DB/CMS/auth — static-first is a deliberate constraint.

---

## COMMANDS

```bash
pnpm dev              # local dev (http://localhost:3000)
pnpm build            # production build (run before deploy to catch schema/type errors)
pnpm exec tsc --noEmit  # fast type-only check
pnpm lint             # eslint
```

Deploy = push to the branch Vercel tracks; Vercel builds and ships automatically.
