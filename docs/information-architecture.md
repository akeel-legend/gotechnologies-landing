# Information architecture

## Site map

```
/                       Homepage (single-page, anchor-linked sections)
  #top                  Hero
  #company              Company overview (purpose / promise / positioning)
  #gochauffeur          Flagship product showcase ("Meet GoChauffeur")
  #about                About Go Technologies (Sri Lanka-first, built to scale)
  #partners             Audience & partnership section (travellers, chauffeurs,
                         travel partners, investors)
  #contact              Contact / interest form
/privacy                Initial privacy policy
/terms                  Initial terms and conditions
(404)                   Custom not-found page
/sitemap.xml            Generated (app/sitemap.ts)
/robots.txt             Generated (app/robots.ts)
```

## Navigation

Primary header nav (`lib/site-config.ts` → `nav`): Company, GoChauffeur,
About, Partners & careers, Contact — each an in-page anchor. A persistent
"Contact us" CTA sits outside the nav list on both desktop and the mobile
menu, so the highest-intent action is always one tap away regardless of
scroll position.

The footer duplicates the primary nav (for users who land at the bottom
via search or a shared link) and adds the two policy routes:

```
Footer
├─ Go Technologies (logo, descriptor, "product of" endorsement)
├─ Company            (mirrors header nav)
├─ Legal              (Privacy, Terms)      <- new in this pass
└─ Contact            (email, location)
```

## Why single-page for `/`, separate routes for policies

The homepage is intentionally one scrolling document rather than split
into `/about`, `/gochauffeur`, `/partners` routes: at this stage the site
has one real call to action (get in touch / register interest), and a
single page keeps that CTA reachable without a navigation decision. This
also matches the "website-first MVP" discipline used in the GoChauffeur
product itself — prove the page converts before fragmenting it.

`/privacy` and `/terms` are separate routes, not anchors, because:

1. They need their own indexable URLs for footer/legal linking from
   third parties (payment providers, app store-style listings, ad
   platforms) that require a stable policy URL.
2. They are legal reference documents, not marketing content — treating
   them as anchors on the homepage would bury them in scroll position and
   make them harder to cite by direct link.
3. The GoChauffeur product (separate repo) will eventually need its own,
   more detailed policies once it has real booking/payment flows; keeping
   this site's policies as clearly-scoped standalone routes now makes
   that split unambiguous later — each site's legal pages describe only
   what that site actually does.

## Future extensibility

The IA is designed to add further Go Technologies products later without
restructuring: a new product gets its own showcase section on the
homepage (or its own route, if it grows past a single section) plus an
entry in `lib/site-config.ts` → `nav`. The `about`/`company` sections stay
product-agnostic on purpose (see `content-structure.md`).
