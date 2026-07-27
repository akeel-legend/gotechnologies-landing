# Site requirements

This document is the requirements record for the Go Technologies corporate
site. It reflects what the site is required to do, not how it is built
(see `design-direction.md` and `content-structure.md` for that). Where a
requirement was intentionally reinterpreted during build, that is noted
inline rather than silently dropped.

## 1. Purpose

Introduce **Go Technologies (Private) Limited** as a credible Sri Lankan
technology company, and present **GoChauffeur** as its flagship upcoming
product — a premium, tourism-focused chauffeur-booking platform currently
in development. The site must not claim GoChauffeur has already launched,
and must not state unverifiable statistics (fleet size, customer counts,
"#1 platform", etc.).

## 2. Objectives

1. Establish Go Technologies as a real technology company, not a travel
   agency or taxi brand.
2. Introduce GoChauffeur as the flagship upcoming product, clearly marked
   "in development" / "launching soon".
3. Build trust with travellers, chauffeurs, tourism businesses and
   partners.
4. Collect interest from prospective travellers, chauffeurs and partners
   through a single contact/enquiry form (see `content-structure.md` for
   why the site uses one routed form rather than two separate forms).
5. Provide a professional online presence credible to partners, agencies
   and early investors.
6. Be structured so additional Go Technologies products can be added
   later without restructuring the information architecture.

## 3. Non-goals for this phase

The site is a static marketing site. It explicitly does **not** include:

- A database, authentication, or booking functionality.
- Payment processing.
- A CMS.
- Docker or a server runtime (the app builds via `output: 'export'`).
- Customer or chauffeur dashboards.
- Complex client-side state management.

These match the parent product's own Phase 1 discipline (see the
GoChauffeur repo's `CLAUDE.md`): validate demand and positioning before
adding operational complexity.

## 4. Required routes

| Route | Status | Notes |
| --- | --- | --- |
| `/` | Done | Single-page corporate site, section anchors for nav |
| `/privacy` | Done | Initial policy, marketing-site scope only |
| `/terms` | Done | Initial terms, marketing-site scope only |
| 404 (`app/not-found.tsx`) | Done | Custom, on-brand |
| `/sitemap.xml`, `/robots.txt` | Done | Generated via `app/sitemap.ts`, `app/robots.ts` |

## 5. Homepage content requirements

The build interpreted "required sections" as required **content
coverage**, not a fixed list of component names. Every topic requested is
present; some were merged where that produced a stronger page (see
`content-structure.md`, section "Section mapping" for the full
requirement-to-component trace). In particular:

- Header, Hero, About Go Technologies, GoChauffeur showcase ("Meet
  GoChauffeur"), audience/use-case coverage, partnership invitation,
  contact/interest capture, and Footer are all present.
- "How GoChauffeur will work" and "Why GoChauffeur" content live inside
  the GoChauffeur showcase section (`ProductShowcase.tsx`) as proof
  points and status framing, rather than as two additional full-width
  sections — this was a deliberate edit to avoid over-lengthening a
  single-page scroll for a pre-launch product with no live demo to walk
  through yet.
- A single "Get in touch" section handles early-access, chauffeur,
  partner and investor interest via one routed form (an `interest`
  select field), rather than a separate early-access form and a separate
  partnership form. This keeps the page shorter and avoids two
  near-duplicate lead forms with no backend differentiation yet.

## 6. Form requirements

- No live backend required at build time.
- Frontend validation via native HTML5 `required`/`type` constraints.
- Accessible labels for every field.
- Loading, success and error UI states.
- Configurable submission handler: posts to Formspree if
  `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set.
- Safe local fallback: if unset, the form is replaced with a direct
  `mailto:` call to action — the site never claims a submission succeeded
  when there is nowhere for it to go.

## 7. SEO requirements

Page titles, meta descriptions, Open Graph and Twitter card metadata,
robots metadata, `sitemap.xml`, semantic heading hierarchy, descriptive
alt text. All centralized in `lib/site-config.ts` plus per-route
`metadata` exports (see `app/privacy/page.tsx`, `app/terms/page.tsx`).
Organization structured data (`schema.org/Organization`) is emitted from
the homepage.

## 8. Accessibility requirements

Keyboard-accessible nav, visible focus states, sufficient contrast on the
dark theme, semantic landmarks, labelled form fields, accessible mobile
menu (`aria-expanded`, `aria-controls`), reduced-motion support (see
`components/motion/Reveal.tsx`), no information conveyed by colour alone.

## 9. Performance requirements

Static export (`next.config.mjs`, `output: 'export'`), server components
by default, `'use client'` only on the header, contact form and
scroll-reveal wrapper, `next/font` for self-hosted fonts, no unoptimized
imagery, no autoplay video, minimal dependency footprint (no UI/animation
libraries beyond Tailwind).

## 10. Placeholders that must be replaced before launch

See the README "First-run checklist" and "Placeholders to replace before
launch" sections — this is the single source of truth for what is still a
placeholder (Formspree form ID, analytics IDs, production domain, social
links, company registration number).
