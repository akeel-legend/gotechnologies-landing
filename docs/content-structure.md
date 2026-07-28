# Content structure

Wording is centralized in `lib/site-config.ts`, which is compiled from
**`docs/site-copy.md`** — the canonical marketing copy. Edit copy in
`site-copy.md` first, then mirror the change into `site-config.ts`.
Component files should not contain hard-coded marketing copy — if you're
editing text and you're inside a `components/` file, stop and check
whether that string belongs in `site-config.ts` (and `site-copy.md`)
instead.

## Section mapping (current — warm-editorial rebuild)

| Requirement | Component | Config source |
| --- | --- | --- |
| Header / nav | `components/layout/Header.tsx` | `nav`, `primaryCta` |
| Hero | `components/sections/Hero.tsx` | `hero` |
| Company overview + "What We Believe" (merged) | `components/sections/CompanyOverview.tsx` | `about` |
| Flagship venture showcase, value proposition, illustrative product-preview card | `components/sections/ProductShowcase.tsx` | `gochauffeur` |
| Platform vision / roadmap | `components/sections/PlatformVision.tsx` | `platformVision` |
| Partner banner | `components/sections/Partner.tsx` | `partner` |
| Contact / interest capture (traveller, chauffeur, partner, investor, careers — routed via one `interest` field) | `components/sections/ContactSection.tsx` + `components/ContactForm.tsx` | `contact` |
| Closing statement + Footer (merged — see note below) | `components/layout/Footer.tsx` | `closing`, `footer`, `company` |
| Privacy policy | `app/privacy/page.tsx` | inline (legal copy, not marketing copy — kept in the page, not `site-config.ts`) |
| Terms | `app/terms/page.tsx` | inline, same rationale |
| 404 | `app/not-found.tsx` | inline |

**Deprecated, not composed into `app/page.tsx` any more:** `About.tsx`
(merged into `CompanyOverview.tsx`), `Audiences.tsx` (superseded by
`Partner.tsx`), `RouteIllustration.tsx` and `motion/Parallax.tsx`
(dropped with the dark-first hero/showcase glow treatment), and
`Closing.tsx` (merged into `Footer.tsx` — see note below). Each has a
file-header comment explaining why it's still in the tree.

**Why Closing merged into Footer:** the closing statement was originally
its own full-height dark section directly above the footer. Both used
the same `forest` background, a centered layout and the same white
wordmark, so back-to-back they read as two repetitive, half-empty dark
blocks rather than one deliberate close. They're now one continuous
footer with an internal hierarchy — closing statement, then a divider,
then the brand mark (once) + nav + social, then a second divider and the
legal fine print — which is shared layout (`app/layout.tsx`), so it now
also appears on `/privacy` and `/terms`, not just the homepage.

## `lib/site-config.ts` field reference

- `siteUrl` — canonical production URL, read from
  `NEXT_PUBLIC_SITE_URL`; drives metadata, sitemap and OG tags.
- `company` — legal name, short name, one-line descriptor, location.
  `legalName` appears in the footer and should be updated the moment a
  registration number is available (see README).
- `nav` — header nav list (label + anchor href): Company, Ventures,
  GoChauffeur, Contact.
- `primaryCta` — the "Discover GoChauffeur" button shown in the header
  (desktop + mobile) and reused as the hero's primary CTA.
- `hero` — headline, body paragraphs, primary/secondary CTAs, supporting
  line, and `image` (src/alt for the hero photo).
- `about` — powers the merged `#company` section: eyebrow, title, intro
  statement, body paragraphs, and `beliefs` (four "What We Believe"
  cards).
- `gochauffeur` — the flagship venture section: eyebrow, title, tagline,
  body paragraphs, `status` (the "Launching soon" pill + the concierge-
  assisted honesty disclosure — do not drop this when editing), `cta`,
  `liveUrl` (`null` until GoChauffeur is actually live — the CTA routes
  to `#contact` instead of an external link while this stays `null`),
  `valuePropsTitle`/`valueProps` (four cards), and `preview` (the
  illustrative product-mock card content — every field here is a made-up
  example; see the "claims discipline" note in `site-copy.md`).
- `platformVision` — the `#ventures` roadmap section: title, body
  paragraphs, and `roadmap` (five labelled steps).
- `partner` — the `#partners` banner: title, body, primary/secondary
  CTAs, and `image` (src/alt for the banner photo).
- `contact` — section title/body, the `mailto:` fallback address (shown
  as an Email info chip in `ContactSection.tsx`, sourced from
  `company.location` for the Location chip — no phone number exists in
  config, so none is shown; don't invent one), and `interestOptions`
  (still lists Traveller/Chauffeur/Partner/Investor/Careers/Other — this
  is how the old four-audience-card segmentation is preserved after the
  homepage collapsed them into one Partner banner). `ContactSection.tsx`
  and `ContactForm.tsx` compose into one shared card panel (info left,
  stacked form fields right — Name, Email, Phone (optional), interest
  select, Message, full-width submit) rather than two separately-styled
  blocks; see reference structure noted in git history for this pass.
- `closing` — the closing statement band immediately before the footer.
- `footer` — `nav` (its own short link list, not a mirror of the header
  nav), `legalLinks` (Privacy/Terms), `social` (placeholder hrefs — see
  README), and computed `copyright`.

## Claims discipline

Per the in-repo brand-guide note ("claims control"): do not add words
like "verified", "instant", "24/7", "guaranteed" or superlative market
claims ("#1", "largest") to `lib/site-config.ts`, `app/privacy/page.tsx`
or `app/terms/page.tsx` without a documented, currently-true operating
definition behind them. This is the same discipline the GoChauffeur
product repo applies to its own MVP scope. See `docs/site-copy.md` for
how this rule was specifically applied to the new illustrative product-
preview card.

## Legal page copy

`/privacy` and `/terms` are deliberately scoped to what this site
actually does today: it is a static marketing site with one contact form
(no accounts, no bookings, no payments, no server-side data store beyond
whatever Formspree/analytics vendor is configured). Both pages state
plainly that they are an initial version and that GoChauffeur's own
booking product will carry its own, more detailed policies once it has
real transactional flows. Do not extend these pages to describe booking,
payment or dispatch behaviour — that belongs in the GoChauffeur product's
own policies, not this corporate site's.
