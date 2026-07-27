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
- **Formspree** for the contact form (no backend, no secrets in the repo).
  The form degrades to a `mailto:` link if unconfigured.
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

> Note: this project was scaffolded and its source files written in a
> network-restricted sandbox that could not reach the npm registry, so
> `npm install` / `npm run build` / `npm run lint` have **not** been run
> yet. Run them locally as the first step — see "First-run checklist"
> below.

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
   - Contact form: without `NEXT_PUBLIC_FORMSPREE_FORM_ID` set, it should
     show the "email us directly" fallback rather than a broken form.

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
  sitemap.ts         Generates sitemap.xml at build time
  robots.ts          Generates robots.txt at build time
components/
  layout/            Header, Footer, Container
  sections/          Hero, CompanyOverview, ProductShowcase, About, Audiences, ContactSection
  ui/                 Button, SectionHeading (small reusable primitives)
  ContactForm.tsx     Client component, posts to Formspree
  Analytics.tsx        Env-var-gated Plausible/GA4 loader
  RouteIllustration.tsx  Decorative SVG using the brand's "route grammar"
lib/
  site-config.ts      All copy, nav links, taglines, audience content
public/
  logo/               Brand PNG assets (corporate + GoChauffeur lockups, symbol)
  favicon.ico, icon-*.png, og-image.png   Generated from the brand app icon
```

## Environment variables

See `.env.example`. All variables are `NEXT_PUBLIC_*` because this is a
static export with no server — nothing here is a secret. Set the same
keys in your hosting provider's project settings for production.

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Contact form endpoint | No — form shows an email fallback if unset |
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

## Formspree setup (contact form)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy its form ID (the part after `/f/` in the endpoint) into
   `NEXT_PUBLIC_FORMSPREE_FORM_ID`.
3. Formspree's dashboard lets you set a redirect/notification email —
   point it at whoever should triage traveller, partner, chauffeur and
   investor enquiries.

## What's intentionally not here (Phase 1 scope)

Per the brand guide's governance section ("Now — MVP") and the broader
Go Technologies lean-MVP principle:

- No CMS — copy is in `lib/site-config.ts` as plain TypeScript.
- No blog/careers sub-pages yet — the partners/careers section is a
  single on-page block routing everyone to one contact form.
- No privacy policy / terms pages yet — add these before any paid
  marketing spend or data collection beyond the contact form.
- No component library / Storybook — see brand guide "Later — scale".
