# Go Technologies — Corporate landing page

The corporate marketing site for **Go Technologies (Private) Limited**,
introducing the company and its flagship product, **GoChauffeur**. Built
per `GoChauffeur_GoTechnologies_Brand_Guidelines.pdf` v1.0 (July 2026).

This is a separate repo from the GoChauffeur product (booking app). This
site leads with corporate/investor/partner positioning; GoChauffeur leads
with the consumer booking journey (see brand guide section 16,
co-branding rules).

## Stack

- **Next.js 15** (App Router) + **TypeScript**, statically exported
  (`output: 'export'` in `next.config.mjs`) — no server runtime required.
- **Tailwind CSS** for styling, themed from the brand guideline's colour,
  typography and spacing tokens (`tailwind.config.ts`).
- **Formspree** planned for the contact form (no backend, no secrets in
  the repo) — not wired up yet. The form is fully built and fillable,
  but submission is intentionally disabled until a real endpoint is
  connected; see `components/ContactForm.tsx`.
- Optional **Plausible** or **GA4** analytics, opt-in via env var — the
  site ships with zero third-party scripts by default.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in what you have; all optional
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build       # static export -> ./out
npm run start        # serve the last `next build` output (SSR mode; not used for the static export deploy path)
npm run lint         # eslint (next/core-web-vitals)
npm run typecheck    # tsc --noEmit
```

> Note: this project has been validated with `npm install`, `npm run
> typecheck` and `npm run lint` — all pass with no errors. `npm run
> build` could **not** be verified in either sandbox this site has been
> built in: `next build` hangs indefinitely right after printing the
> Next.js banner, because `next/font/google` (used for Inter, Fraunces and
> JetBrains Mono) needs to fetch font files from `fonts.googleapis.com` /
> `fonts.gstatic.com` at build time, and this sandbox's outbound proxy
> returns `403` for both hosts (confirmed directly with `curl`). This is a
> limitation of the sandbox's network egress rules, not a code issue —
> `typecheck` and `lint` don't need network access and both pass cleanly.
> Run `npm run build` locally (with normal internet access) as the next
> step — see "First-run checklist" below.

## First-run checklist

1. `npm install`
2. `npm run typecheck` — should exit with no errors.
3. `npm run lint` — should exit with no errors/warnings.
4. `npm run build` — should produce a static export in `./out`. Watch for:
   - Any TypeScript/JSX errors (fix in the reported file).
   - Missing image files — all logo/icon PNGs are already in `public/`.
5. `npm run dev` and manually check in a browser:
   - Header nav anchors scroll to the right sections and account for the
     sticky header (no heading hidden underneath it).
   - Mobile menu (resize below `md`) opens/closes and closes on link tap.
   - Contact form: all fields should be fillable, but the "Send message"
     button should render disabled/greyed out, with a small "This form is
     not yet connected" note beneath it — that's expected until
     `SUBMISSION_ENABLED` in `components/ContactForm.tsx` is flipped on.

If anything fails to compile, paste the error back and it can be fixed
directly — the component/config structure is intentionally small (see
"Project structure" below) so issues should be easy to isolate.

## Content editing

Almost all copy lives in **`lib/site-config.ts`** — headline, taglines,
audience descriptions, contact form options, footer text. Edit that file
for copy changes; you shouldn't need to touch component files for text.

**Claims control (per brand guide section 15):** don't add words like
"verified", "instant", "24/7", "guaranteed" or "best price" to this file
without a documented operating definition behind them. The GoChauffeur
section in particular is written to be honest about MVP status — update
`gochauffeur.liveUrl` in `lib/site-config.ts` once the GoChauffeur booking
site is actually live, so the "Visit GoChauffeur" button only appears
once there's somewhere real to send people.

## Project structure

```
app/
  layout.tsx        Root layout: fonts, <head> metadata, Header/Footer/Analytics
  page.tsx           Assembles the one-page site from section components
  globals.css        Tailwind entry + a couple of base rules
  sitemap.ts         Generates sitemap.xml at build time (incl. /privacy, /terms)
  robots.ts          Generates robots.txt at build time
  not-found.tsx       Custom 404 page
  privacy/page.tsx    Initial privacy policy
  terms/page.tsx      Initial terms and conditions
components/
  layout/            Header, Footer, Container
  sections/          Hero, CompanyOverview, ProductShowcase, PlatformVision,
                     Partner, ContactSection, Closing (current, warm-editorial
                     direction) — plus About.tsx/Audiences.tsx/Parallax.tsx/
                     RouteIllustration.tsx, kept in the tree but unused/
                     deprecated, see file-header comments in each
  ui/                 Button, SectionHeading, Eyebrow (small reusable primitives)
  ContactForm.tsx     Server component; full inquiry form, submission
                     intentionally disabled until wired to a backend
  PolicyPage.tsx       Shared chrome for /privacy and /terms
  Analytics.tsx        Env-var-gated Plausible/GA4 loader
lib/
  site-config.ts      All copy, nav links, taglines — kept in sync with
                     docs/site-copy.md, the copy source of truth
public/
  logo/               Brand PNG assets (corporate + GoChauffeur lockups, symbol)
  favicon.ico, icon-*.png, og-image.png   Generated from the brand app icon
docs/
  site-requirements.md, information-architecture.md, design-direction.md,
  content-structure.md, implementation-plan.md, site-copy.md — requirements,
  design record and canonical copy for this site; read these before making
  structural changes
```

## Placeholders to replace before launch

- **Social links** (`footer.social` in `lib/site-config.ts`) — currently
  `href: '#'` for LinkedIn/Instagram/Facebook. No confirmed accounts exist
  yet; the icons are shown because the approved mockup includes them, but
  don't point them at guessed URLs — get the real ones from the team first.
- **Contact form submission** — `SUBMISSION_ENABLED` in
  `components/ContactForm.tsx` is hardcoded `false`. Flip it to `true`
  once a real submit handler (Formspree or otherwise) is wired up and
  tested — see that file's header comment.
- **`NEXT_PUBLIC_FORMSPREE_FORM_ID`**, analytics vars, `NEXT_PUBLIC_SITE_URL`
  — see "Environment variables" below.
- `company.legalName` in `lib/site-config.ts` — confirm once a company
  registration number is available.

## Environment variables

See `.env.example`. All variables are `NEXT_PUBLIC_*` because this is a
static export with no server — nothing here is a secret. Set the same
keys in your hosting provider's project settings for production.

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Contact form endpoint | Not yet used — submission is disabled at the component level regardless of this var; see "Placeholders to replace before launch" |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables Plausible analytics | No |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Enables GA4 (used only if Plausible domain is unset) | No |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata/sitemap/OG tags | Recommended before launch |

## Deployment

### Vercel

1. Import the GitHub repo in the Vercel dashboard.
2. Framework preset: Next.js (Vercel detects `output: 'export'`
   automatically and serves the static output).
3. Add the env vars from `.env.example` under Project Settings →
   Environment Variables.
4. Deploy. No build command changes needed (`next build` is correct).

### Cloudflare Pages

1. Connect the repo in the Cloudflare Pages dashboard.
2. Build command: `npm run build`
3. Build output directory: `out`
4. Add the same env vars under Settings → Environment variables.

Both targets work with the same static `out/` directory — this project
deliberately avoids anything that needs a Node.js server at runtime.

## Formspree setup (contact form) — not yet done

The contact form (`components/ContactForm.tsx`) is fully built but
**submission is intentionally disabled** (`SUBMISSION_ENABLED = false`)
until it's connected to somewhere real. To wire it up:

1. Create a free form at [formspree.io](https://formspree.io) (or choose
   a different collection mechanism).
2. Copy its form ID (the part after `/f/` in the endpoint) into
   `NEXT_PUBLIC_FORMSPREE_FORM_ID`.
3. Formspree's dashboard lets you set a redirect/notification email —
   point it at whoever should triage traveller, partner, chauffeur and
   investor enquiries.
4. In `components/ContactForm.tsx`: set `SUBMISSION_ENABLED = true`,
   mark the file `'use client'` again, and reinstate a submit handler
   that POSTs to `https://formspree.io/f/${formId}` (see git history for
   the version this was simplified from — search for "SUBMISSION_ENABLED"
   in the file's own header comment for the pointer).
5. Re-run the "First-run checklist" and manually re-test the form.

## What's intentionally not here (Phase 1 scope)

Per the brand guide's governance section ("Now — MVP") and the broader
Go Technologies lean-MVP principle:

- No CMS — copy is in `lib/site-config.ts` as plain TypeScript.
- No blog/careers sub-pages yet — the partners/careers section is a
  single on-page block routing everyone to one contact form.
- No component library / Storybook — see brand guide "Later — scale".

`/privacy` and `/terms` do exist (added to close a gap against the full
site spec) but are deliberately an initial, good-faith version scoped to
what this marketing site does today. Get a legal review before relying on
them for anything beyond the current contact-form-only scope — see
`docs/implementation-plan.md`, "Recommended next steps."
