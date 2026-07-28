# Implementation plan

## Status (v2 — warm-editorial rebuild)

The site was rebuilt from an approved visual mockup: new colour/type
tokens (`docs/design-direction.md`, "Pivot to warm editorial"), a new
copy source of truth (`docs/site-copy.md`), and new/rebuilt sections —
`CompanyOverview` (merged belief grid), `ProductShowcase` (flagship +
value props + an illustrative, explicitly-labelled product-preview
card), `PlatformVision` (new), `Partner` (replaces `Audiences`), `Closing`
(new). Two Unsplash photos were sourced for the hero and partner banner
since the mockup's own photography wasn't available as an asset — see
`docs/site-copy.md` for credits and `docs/content-structure.md` for the
full section-to-config mapping. `About.tsx`, `Audiences.tsx`,
`RouteIllustration.tsx` and `motion/Parallax.tsx` are deprecated (not
composed into `app/page.tsx`) but left in the tree with file-header
comments, rather than deleted, because the build environment this pass
ran in could not delete files from the mounted repo folder — safe to
delete for real locally.

The rest of this document (below) describes the pre-rebuild state and
an earlier gap-closing pass; it's kept for history.

## Status (original)

The site was scaffolded and largely built in an earlier pass (see git
history: "Scaffold Go Technologies corporate landing page" through
"Rework corporate site to a bolder, dark-first editorial direction").
This document tracks what existed going into the current gap-closing
pass, what this pass adds, and what remains before production launch.

## Already implemented (prior passes)

1. Next.js 15 App Router + TypeScript + Tailwind, static export
   (`output: 'export'`).
2. Design system: colour/type/spacing tokens (`tailwind.config.ts`),
   `Container`, `Button`, `Eyebrow`, `SectionHeading` primitives.
3. Layout: `Header` (with accessible mobile menu), `Footer`.
4. Homepage sections: `Hero`, `CompanyOverview`, `ProductShowcase`
   ("Meet GoChauffeur"), `About`, `Audiences`, `ContactSection`.
5. `ContactForm` — Formspree-backed with `mailto:` fallback when
   unconfigured, honeypot spam field, loading/success/error states.
6. Motion: `Reveal` (scroll-triggered fade/lift) and `Parallax`, both
   `prefers-reduced-motion`-safe.
7. Metadata: root `layout.tsx` sets title template, OpenGraph, Twitter
   card, icons; `app/robots.ts` and `app/sitemap.ts` generate
   `robots.txt` / `sitemap.xml`.
8. `.env.example` documenting all public env vars (Formspree ID,
   Plausible domain, GA4 ID, site URL).
9. `README.md` covering stack, local dev, first-run checklist, and
   content-editing guidance.

## This pass (gap-closing against the full site spec)

1. **`docs/`** — this folder: `site-requirements.md`,
   `information-architecture.md`, `design-direction.md`,
   `content-structure.md`, `implementation-plan.md` (this file),
   documenting the site as actually built.
2. **`/privacy`** — initial privacy policy, scoped to the marketing
   site's actual data collection (contact form + optional analytics).
3. **`/terms`** — initial terms and conditions, scoped the same way.
4. **`app/not-found.tsx`** — custom, on-brand 404 page.
5. **Footer** — add a "Legal" nav group linking to `/privacy` and
   `/terms`.
6. **`app/sitemap.ts`** — add `/privacy` and `/terms` entries.
7. **README** — document the new routes and the `docs/` folder.
8. **Validation** — `npm install`, `npm run typecheck`, `npm run lint`,
   `npm run build`; fix anything that surfaces.

## Deliberately not done in this pass

- No rewrite of existing homepage copy, nav labels or section structure
  — the existing dark-editorial direction and content were kept as the
  source of truth (see the "Extend, don't rebuild" decision behind this
  pass).
- No splitting of the homepage into multiple routes.
- No CMS, backend, or database — still fully static.

## Recommended next steps before deployment

1. Set real values for `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORMSPREE_FORM_ID`,
   and (optionally) one analytics var, in the hosting provider's project
   settings — see README "Environment variables."
2. Confirm `company.legalName` in `lib/site-config.ts` once a company
   registration number is available, and decide whether to display it
   in the footer.
3. Replace social-link placeholders once real accounts exist (none are
   currently shown, by design — do not add unconfirmed accounts).
4. Get a legal review of `/privacy` and `/terms` before relying on them
   in production; they are an initial, good-faith version scoped to what
   the site does today, not legal advice.
5. Once GoChauffeur's own product site is live, set
   `gochauffeur.liveUrl` in `lib/site-config.ts` so the showcase CTA can
   link out to it instead of the on-page contact form.
