# Site copy — source of truth

This document is the canonical marketing copy for the Go Technologies
corporate site (`gotechnologies-landing`). It is the reference to build or
update the live site from. When copy changes, edit it here first, then
propagate the change into `lib/site-config.ts` (and any inline legal/page
copy it doesn't cover) so the two never drift apart.

Do not treat `lib/site-config.ts` as the source of truth for wording —
it is the implementation target. This file is what the wording should be;
`site-config.ts` is where it's compiled into.

Last updated: 2026-07-28 (v2 — reconciled against the approved visual
mockup and rebuilt into the live site).

---

## Navigation

**Go Technologies**
Company · Ventures · GoChauffeur · Contact

Primary button: **Discover GoChauffeur** → `#gochauffeur`

---

## Hero

**Technology for journeys that matter.**

Go Technologies builds thoughtful digital platforms that improve how
people move, connect and experience the world.

Our first venture, GoChauffeur, is creating a more reliable and refined
way for international travellers to discover Sri Lanka—with trusted
chauffeurs, carefully planned journeys and technology that keeps every
trip effortless.

- Primary CTA: **Discover GoChauffeur** → `#gochauffeur`
- Secondary CTA: **Partner with us** → `#partners`

Small supporting line: *Built in Sri Lanka. Designed for the world.*

Imagery: driver's-hand-on-wheel photo (Unsplash, why-kei), warm dusk
tones — chosen because the exact hero photo in the mockup wasn't
available as an asset; this stock photo was supplied as the replacement
and reused as `public/images/hero-journey.jpg`.

---

## Company Introduction (section id `#company`, nav label "Company")

**We build technology around real human experiences.**

The most meaningful technology does more than complete a transaction. It
removes uncertainty, builds trust and makes complex experiences feel
simple.

Go Technologies is a Sri Lankan technology venture focused on building
scalable, service-led digital platforms. We combine strong product
thinking, dependable technology and local market understanding to create
businesses capable of growing beyond borders.

Our starting point is travel and mobility—an industry where trust,
coordination and service quality matter at every step.

### What We Believe

**Better systems create better experiences.**

**Designed around people** — We begin with the needs of the people using
the service—not the technology behind it.

**Built for trust** — Clear information, reliable partners and
thoughtful operational standards are built into every product.

**Local insight, global ambition** — We solve problems through a deep
understanding of local markets while designing every platform to scale
internationally.

**Quality over complexity** — We believe premium experiences should feel
simple, calm and intuitive.

---

## Flagship Venture — Introducing GoChauffeur (section id `#gochauffeur`)

**See more of Sri Lanka. Leave the journey to us.**

GoChauffeur is a tourism-focused chauffeur platform designed for
travellers who want more than a conventional taxi or pre-packaged tour.

The platform will help visitors plan private journeys, discover suitable
vehicles and connect with professional chauffeurs for airport transfers,
multi-day tours and personalised travel across Sri Lanka.

From the first enquiry to the final destination, GoChauffeur is being
designed to provide greater clarity, confidence and control.

Status pill: *Launching soon in Sri Lanka*
Disclosure line (kept from the pre-mockup copy pass — see reconciliation
note 4 below): *Trip requests will be reviewed and confirmed by our team
— an honest, concierge-assisted start, not an instant-dispatch app.*

CTA: **Explore GoChauffeur** → `#contact` (no live product yet, so this
routes to the on-page contact form, not an external link)

### GoChauffeur Value Proposition

**Travel that feels considered from the beginning.**

**Professional chauffeurs** — Connect with service-oriented chauffeurs
selected for tourism-focused journeys.

**Flexible private travel** — Plan airport transfers, day journeys and
multi-day itineraries around individual travel needs.

**Clearer trip planning** — Understand the journey, service and expected
pricing before confirming.

**Local knowledge** — Experience Sri Lanka with professionals who
understand its destinations, roads and travel realities.

### Product preview card (new, not in the original text block)

The mockup shows an illustrative "GoChauffeur" booking-widget graphic
next to the flagship copy (route search fields + a "Recommended
chauffeur" card). Built as a static, coded UI mock — not a screenshot of
a real product — labelled **"Preview — GoChauffeur is in development"**
and using a placeholder chauffeur profile (no real name, no real rating,
no stock photo of a person) specifically so it can't be read as a claim
about an actual verified chauffeur network. See reconciliation note 4.

---

## Platform Vision (section id `#ventures`, nav label "Ventures")

**Beginning with mobility. Building toward connected travel.**

GoChauffeur is the first step in a wider vision for tourism technology.

Over time, Go Technologies aims to build an ecosystem that brings
together trusted mobility, local expertise and carefully selected travel
services through one connected digital experience.

We are starting deliberately—with a focused platform, a strong service
foundation and a model designed to expand responsibly.

Roadmap strip: Mobility → Experiences → Hospitality → Travel Ecosystem →
Beyond Borders (five short labelled steps, icon + one-line description
each, matching the mockup).

---

## Partner Section (section id `#partners`)

**Building the future of travel takes the right partners.**

We are interested in working with professional chauffeurs, vehicle
owners, tourism businesses, hospitality partners, technology specialists
and organisations that share our commitment to dependable service.

Whether you would like to join the GoChauffeur network or explore a
strategic partnership with Go Technologies, we would be pleased to hear
from you.

- Primary CTA: **Become a partner** → `#contact`
- Secondary CTA: **Contact Go Technologies** → `#contact`

Imagery: chauffeur van at sunset on a Sri Lankan beach (Unsplash,
sukanya-basu), used as `public/images/partner-banner.jpg` in place of the
mockup's lighthouse/fort photo, which wasn't available as an asset.

---

## Contact (section id `#contact`, nav label "Contact")

Not pictured in the mockup screenshot itself, but required by
`docs/site-requirements.md` (§6, lead-capture form) and kept as the
single routed form for traveller/chauffeur/partner/investor/careers
enquiries — see reconciliation note 2. Sits between the Partner banner
and the Closing statement.

---

## Closing Statement

**Thoughtful technology. Trusted experiences. Global possibilities.**

Go Technologies is creating digital businesses that combine technology
with service, trust and meaningful real-world value.

Go Technologies
*Built in Sri Lanka. Designed for the world.*

Not visible in the mockup screenshot (likely cropped below the fold) but
present in the original copy block; kept as the closing band immediately
before the footer, on the same dark surface as the footer for a smooth
transition.

---

## Footer

Go Technologies (Private) Limited
Company · GoChauffeur · Partnerships · Contact
LinkedIn · Instagram · Facebook
© 2026 Go Technologies. All rights reserved.
Privacy Policy · Terms of Use

Social links are placeholders (`href="#"`) — no confirmed LinkedIn/
Instagram/Facebook accounts exist yet. This conflicts with the prior,
deliberate decision in `implementation-plan.md` ("no social links shown,
by design, until real accounts exist"); the mockup explicitly shows the
icons, so they're included, but wired to `#` and flagged in the README's
placeholder checklist rather than pointed at guessed URLs. Do not fill
these in with invented account URLs — get the real ones from the team
first.

---

## Claims discipline

Checked against the same rule as before: no "verified", "instant",
"24/7", "guaranteed" or superlative market claims ("#1", "largest")
appear above without a documented, currently-true operating definition.
The one addition in this pass (the product-preview card) required an
explicit "Preview" label and a placeholder profile to keep passing this
rule — see reconciliation note 4.

## Reconciliation notes (decisions made when building from the mockup)

These were flagged as open divergences before build; recorded here as
resolved so a future edit doesn't accidentally re-open them.

1. **"Ventures" nav item** now anchors to the Platform Vision roadmap
   section (`#ventures`) — the "beginning with mobility, building toward
   connected travel" content is literally about future ventures, so it
   was the natural target rather than a new empty page.
2. **Audience segmentation** — the homepage no longer shows four separate
   traveller/chauffeur/partner/investor cards (superseded by the single
   Partner banner). The distinct paths are preserved operationally: the
   contact form's `interest` field still lists all four plus Careers, so
   an investor or chauffeur lead is still routed distinctly even though
   there's no dedicated homepage card for them.
3. **Primary CTA wording** — "Discover GoChauffeur" is now the nav +
   hero primary action (→ `#gochauffeur`); "Explore GoChauffeur" is the
   flagship section's own in-context CTA (→ `#contact`, since there's no
   live product to link to yet). Both are kept, matching the mockup
   exactly rather than treating them as a naming inconsistency.
4. **MVP/concierge-assisted disclosure** — carried forward from the prior
   copy pass as a one-line caption under the "Launching soon in Sri
   Lanka" status pill, and reinforced by explicitly labelling the
   flagship section's product-preview card as a "Preview" with a
   placeholder (not real) chauffeur profile. This was not in the mockup
   screenshot or the original text block, but is required to keep the
   section from implying GoChauffeur already has a live, verified,
   instant-booking network — see `docs/site-requirements.md` §1.
