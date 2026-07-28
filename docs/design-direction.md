# Design direction

The site follows a **warm editorial** direction (v2.0), built from an
approved visual mockup. This document explains that direction and the
decision to supersede the earlier dark-first v1.1 palette, so future
contributors don't need to reverse-engineer it from Tailwind config
comments alone.

## Pivot to warm editorial (v2.0)

The site previously used a dark-first, teal/gold-on-midnight palette
(documented below, kept for history). That direction was deliberately
chosen at the time to avoid reading as "a traditional travel agency
site." The company was then handed a concrete, approved visual mockup —
cream background, serif display type, dark forest-green actions, muted
gold accents, real travel photography — and asked to rebuild the site to
match it exactly.

This is a genuine reversal of the v1.1 rationale below, not a
refinement of it. It's recorded here rather than silently overwritten
because the earlier direction was a considered decision, not an
oversight — a future redesign should know this was a deliberate,
mockup-driven pivot, not two contributors disagreeing by accident.

**Why warm editorial now:** the approved mockup uses light, photographic,
serif-led design — the "traditional travel agency" look the v1.1 doc
explicitly avoided. This was accepted as the new direction because it
was supplied as a concrete, approved reference, not derived from first
principles on this pass. If a future stakeholder wants a return to
dark-first, treat that as a new design decision requiring its own
sign-off, not a "revert."

## Colour (current — v2.0)

Defined in `tailwind.config.ts`, sampled directly from the approved
mockup:

- `cream` (`#FBF8F3`) — default page background.
- `card` (`#F4EEE1`) — slightly deeper cream, for cards/panels on the
  cream page.
- `forest` (`#0C2A1F`, with `forest-hover`) — primary action colour and
  dark full-bleed surfaces (buttons, footer, closing band, product-
  preview card).
- `ink` (`#14201A`) — headline and body text on the cream page.
- `stone` (`#5B584F`) — secondary/paragraph text.
- `line` (`#E7DFCE`) — hairline dividers and card borders on cream.
- `gold` (`#A87D3A`) — eyebrow labels, small dashes/icons. Never large
  surfaces or body text.

The old `teal`/`midnight`/`cloud`/`mist`/`accent.*` tokens are still
declared (so nothing hard-crashes) but are legacy — do not use them in
new work.

## Typography (current — v2.0)

- **Fraunces** (`--font-fraunces`) for headline/display type — the
  mockup's serif, self-hosted via `next/font/google`.
- **Inter** (`--font-inter`) for body copy and UI labels.
- **JetBrains Mono** (`--font-mono`) still reserved for small uppercase
  eyebrow labels only.
- Type scale tokens (`hero`, `page-title`, `section-title`, `body`,
  `ui-label`, `eyebrow`, `caption`) were resized/reweighted for the
  serif display face — use these tokens rather than ad hoc `text-*` +
  `font-*` combinations.

## Spacing, radius, motion

- Spacing still uses Tailwind's default 4px-based scale.
- Two border-radius tokens: `control` is now a full pill (`999px`, for
  buttons/inputs, matching the mockup), `card` is `20px`.
- Motion: `Reveal` (fade + lift on first scroll-into-view) is kept. The
  `Parallax` glow-blob treatment was dropped — it doesn't fit the
  flatter, print-like warm-editorial mockup; the file is still in the
  tree but unused (see its file-header comment).

## Layout

- `Container` still caps content width at `max-w-content` (1180px).
- `.divider` (hairline border, now `border-line`) marks section
  boundaries on cream sections; `.divider-dark` is the equivalent for
  the dark forest sections (footer, closing band).

## Imagery

Two real photographs (Unsplash, credited in `docs/site-copy.md`) replace
the mockup's own photography, which wasn't available as a usable asset:
a driver's-hand-on-wheel shot for the hero, and a chauffeur van at
sunset for the partner banner. The flagship "GoChauffeur" product card is
a coded UI mock, not a photo — see `docs/site-copy.md` for why it's
explicitly labelled "Preview."

## Applying this direction to new pages

`/privacy`, `/terms` and the 404 page reuse the existing primitives
(`Container`, `SectionHeading`/`Eyebrow` pattern, `Button`, `PolicyPage`)
rather than introducing page-specific styles, so they read as part of
the same site.

---

## v1.1 — dark-first (superseded, kept for history)

The prior direction was **dark-first editorial**: `midnight` (`#0B1F2A`)
background, `teal` (`#0D6F68`, Ceylon Teal) primary action colour with
`teal-hover`/`teal-deep` steps, `gold` (`#D8A344`) accent, `cloud`/`mist`/
`ink` for the rare light panel, and an `accent.sage`/`accent.teal`/
`accent.tan`/`accent.amber` card-tint palette. Typography was **Inter**
throughout (no serif), with the same `JetBrains Mono` eyebrow convention.
The rationale at the time: a light, generic "travel startup" look risked
reading as a template or a traditional travel agency, and dark-first
typography signalled "technology company" more clearly. See "Pivot to
warm editorial" above for why this was superseded rather than kept.
