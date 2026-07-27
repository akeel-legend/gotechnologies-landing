# Design direction

The site follows a **dark-first editorial** direction, documented in code
as "Brand Guidelines v1.1 — Corporate digital direction" (see comments in
`tailwind.config.ts` and `app/globals.css`). This document explains that
direction so future contributors don't need to reverse-engineer it from
Tailwind config comments alone.

## Why dark-first

A light, generic "travel startup" look (soft gradients, rounded
illustrations, pastel cards) reads as a template, and risks looking like
a traditional travel agency site — both explicitly things to avoid here.
Dark-first, editorial typography, and a restrained accent palette instead
signal "technology company," which is the primary positioning job of this
site (GoChauffeur, not Go Technologies, gets the warmer consumer-travel
treatment on its own product surfaces).

## Colour

Defined in `tailwind.config.ts` as brand tokens, not raw hex values in
components:

- `midnight` (`#0B1F2A`) — default page background.
- `teal` (`#0D6F68`, Ceylon Teal) — primary action colour, with `teal-hover`
  and `teal-deep` steps.
- `gold` (`#D8A344`, Journey Gold) — premium accent, used sparingly and
  never for body text or large surfaces.
- `cloud` / `mist` / `ink` — for the rare light panel against the dark
  page.
- `accent.sage` / `accent.teal` / `accent.tan` / `accent.amber` — tint
  steps of teal/gold for small card accents, chosen to hold WCAG AA
  contrast (≥6.5:1) against `ink` text.

Do not introduce new brand hues without updating this document and the
Tailwind config comment together.

## Typography

- **Inter** (`--font-inter`) for all display and body text — chosen for
  legibility at both large editorial headline sizes and small UI label
  sizes, self-hosted via `next/font/google` (no external font requests at
  runtime).
- **JetBrains Mono** (`--font-mono`) reserved for eyebrow labels only — a
  small "technical/editorial" signature, not a body typeface.
- A fixed type scale in `tailwind.config.ts` (`hero`, `page-title`,
  `section-title`, `body`, `ui-label`, `eyebrow`, `caption`) — use these
  tokens rather than ad hoc `text-*` + `font-*` combinations, so the
  scale stays consistent across every new page.

## Spacing, radius, motion

- Spacing uses Tailwind's default 4px-based scale as-is (it already lines
  up with the brand's 4px base scale — see the config comment).
- Two border-radius tokens: `control` (12px, for buttons/inputs) and
  `card` (24px, for content cards/panels).
- Motion is intentionally minimal: `Reveal` (fade + 24px lift on first
  scroll-into-view, once) and `Parallax` (subtle scroll-linked transform).
  Both respect `prefers-reduced-motion` by rendering fully visible/static
  immediately. No decorative looping animation, no autoplay video.

## Layout

- `Container` caps content width at `max-w-content` (1180px) with
  responsive horizontal padding — used on every section and on the new
  `/privacy` and `/terms` pages, so page width stays consistent site-wide.
- One `divider` utility (hairline `border-top`) marks section boundaries
  instead of background-colour blocking, keeping the page feeling like
  one continuous document rather than stacked cards.

## Applying this direction to new pages

`/privacy`, `/terms` and the 404 page reuse the existing primitives
(`Container`, `SectionHeading`/`Eyebrow` pattern, `Button`) rather than
introducing page-specific styles, so they read as part of the same site
rather than bolted-on legal boilerplate.
