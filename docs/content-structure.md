# Content structure

All homepage copy is centralized in `lib/site-config.ts`. Component files
should not contain hard-coded marketing copy — if you're editing text and
you're inside a `components/` file, stop and check whether that string
belongs in `lib/site-config.ts` instead.

## Section mapping

| Requirement | Component | Config source |
| --- | --- | --- |
| Header / nav | `components/layout/Header.tsx` | `nav` |
| Hero | `components/sections/Hero.tsx` | `hero` |
| Company overview (purpose/promise/positioning) | `components/sections/CompanyOverview.tsx` | `foundation`, `personality` |
| "Meet GoChauffeur" flagship showcase, incl. proof points and MVP-status framing (covers "how it will work" / "why GoChauffeur") | `components/sections/ProductShowcase.tsx` | `gochauffeur` |
| About Go Technologies | `components/sections/About.tsx` | `about` |
| Audience & partnership section (travellers, chauffeurs, travel partners, investors) | `components/sections/Audiences.tsx` | `audiences` |
| Contact / interest capture (early access, chauffeur, partner, investor, careers — routed via one `interest` field) | `components/sections/ContactSection.tsx` + `components/ContactForm.tsx` | `contact` |
| Footer | `components/layout/Footer.tsx` | `nav`, `company`, `contact`, `footer` |
| Privacy policy | `app/privacy/page.tsx` | inline (legal copy, not marketing copy — kept in the page, not `site-config.ts`) |
| Terms | `app/terms/page.tsx` | inline, same rationale |
| 404 | `app/not-found.tsx` | inline |

## `lib/site-config.ts` field reference

- `siteUrl` — canonical production URL, read from
  `NEXT_PUBLIC_SITE_URL`; drives metadata, sitemap and OG tags.
- `company` — legal name, short name, one-line descriptor, location.
  `legalName` appears in the footer copyright line and should be updated
  the moment a registration number is available (see README).
- `nav` — the shared header/footer nav list (label + anchor href).
- `hero` — eyebrow, headline, body, and the two hero CTAs.
- `foundation` — purpose / promise / positioning, three short editorial
  statements used in the company overview section.
- `personality` — four brand-personality traits (title + one-line body),
  rendered as a small grid.
- `gochauffeur` — name, tagline, campaign line, one-sentence proposition,
  a `proofPoints` list, a `status` object (MVP framing — this is where
  the "launching soon" / concierge-assisted honesty lives), and
  `liveUrl` (`null` until the GoChauffeur product is actually live; the
  showcase CTA routes to the on-page contact form instead of an external
  link while this stays `null`).
- `about` — title, an array of body paragraphs, and an `ambition`
  statement.
- `audiences` — a typed array (`Audience[]`) of the four segments shown:
  travellers, chauffeurs & vehicle owners, travel partners & hotels,
  investors. Adding a fifth segment is additive — just push a new object
  with a unique `key`.
- `contact` — section title/body, the `mailto:` fallback address, and the
  `interestOptions` list used in the form's select field.
- `footer` — computed copyright string and the "product of" endorsement
  line.

## Claims discipline

Per the in-repo brand-guide note ("claims control"): do not add words
like "verified", "instant", "24/7", "guaranteed" or superlative market
claims ("#1", "largest") to `lib/site-config.ts`, `app/privacy/page.tsx`
or `app/terms/page.tsx` without a documented, currently-true operating
definition behind them. This is the same discipline the GoChauffeur
product repo applies to its own MVP scope.

## Legal page copy (new in this pass)

`/privacy` and `/terms` are deliberately scoped to what this site
actually does today: it is a static marketing site with one contact form
(no accounts, no bookings, no payments, no server-side data store beyond
whatever Formspree/analytics vendor is configured). Both pages state
plainly that they are an initial version and that GoChauffeur's own
booking product will carry its own, more detailed policies once it has
real transactional flows. Do not extend these pages to describe booking,
payment or dispatch behaviour — that belongs in the GoChauffeur product's
own policies, not this corporate site's.
