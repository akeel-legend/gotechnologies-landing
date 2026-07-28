// Central copy and content config for the Go Technologies corporate site.
// Source of truth for wording is docs/site-copy.md — edit copy there first,
// then mirror the change here. Keep claims consistent with the "claims
// control" rule documented in that file: do not add "verified", "instant",
// "24/7", "guaranteed" etc. without a documented operating definition.
//
// v2.0 note: this file was rebuilt to match the warm-editorial visual
// direction (see docs/design-direction.md, "Pivot to warm editorial").
// Some fields from the prior dark-first pass (foundation/personality/
// audiences) were retired because the new copy and layout superseded them
// — see docs/site-copy.md's "reconciliation" section for what changed and
// why, rather than assuming this is an oversight.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gotechnologies.lk';

export const company = {
  legalName: 'Go Technologies (Private) Limited',
  shortName: 'Go Technologies',
  descriptor: 'Technology for journeys that matter.',
  location: 'Colombo, Sri Lanka',
};

export const nav = [
  { label: 'Company', href: '#company' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'GoChauffeur', href: '#gochauffeur' },
  { label: 'Contact', href: '#contact' },
];

export const primaryCta = { label: 'Discover GoChauffeur', href: '#gochauffeur' };

export const hero = {
  headline: 'Technology for journeys that matter.',
  body: [
    'Go Technologies builds thoughtful digital platforms that improve how people move, connect and experience the world.',
    'Our first venture, GoChauffeur, is creating a more reliable and refined way for international travellers to discover Sri Lanka—with trusted chauffeurs, carefully planned journeys and technology that keeps every trip effortless.',
  ],
  primaryCta,
  secondaryCta: { label: 'Partner with us', href: '#partners' },
  supportingLine: 'Built in Sri Lanka. Designed for the world.',
  image: {
    src: '/images/hero-journey.jpg',
    alt: 'A driver’s hand resting on the wheel of a chauffeured car at dusk',
  },
};

export const about = {
  eyebrow: 'About',
  title: 'We build technology around real human experiences.',
  intro:
    'The most meaningful technology does more than complete a transaction. It removes uncertainty, builds trust and makes complex experiences feel simple.',
  body: [
    'Go Technologies is a Sri Lankan technology venture focused on building scalable, service-led digital platforms. We combine strong product thinking, dependable technology and local market understanding to create businesses capable of growing beyond borders.',
    'Our starting point is travel and mobility—an industry where trust, coordination and service quality matter at every step.',
  ],
  beliefsTitle: 'Better systems create better experiences.',
  beliefs: [
    {
      title: 'Designed around people',
      body: 'We begin with the needs of the people using the service—not the technology behind it.',
    },
    {
      title: 'Built for trust',
      body: 'Clear information, reliable partners and thoughtful operational standards are built into every product.',
    },
    {
      title: 'Local insight, global ambition',
      body: 'We solve problems through a deep understanding of local markets while designing every platform to scale internationally.',
    },
    {
      title: 'Quality over complexity',
      body: 'We believe premium experiences should feel simple, calm and intuitive.',
    },
  ],
};

export const gochauffeur = {
  name: 'GoChauffeur',
  eyebrow: 'Flagship venture',
  title: 'Introducing GoChauffeur',
  tagline: 'See more of Sri Lanka. Leave the journey to us.',
  body: [
    'GoChauffeur is a tourism-focused chauffeur platform designed for travellers who want more than a conventional taxi or pre-packaged tour.',
    'The platform will help visitors plan private journeys, discover suitable vehicles and connect with professional chauffeurs for airport transfers, multi-day tours and personalised travel across Sri Lanka.',
    'From the first enquiry to the final destination, GoChauffeur is being designed to provide greater clarity, confidence and control.',
  ],
  // MVP-status framing — this is where the "launching soon" / concierge-
  // assisted honesty lives. Do not drop the `body` line below when editing
  // this section; it's the claims-control disclosure that keeps the
  // product-preview card from implying a live, instant-dispatch service.
  status: {
    label: 'Launching soon in Sri Lanka',
    body: 'Trip requests will be reviewed and confirmed by our team — an honest, concierge-assisted start, not an instant-dispatch app.',
  },
  cta: { label: 'Explore GoChauffeur', href: '#contact' },
  // Set once the GoChauffeur MVP is live. Until then the CTA above routes
  // to the on-page contact form instead of an external URL, so we never
  // point visitors at a product that isn't live yet.
  liveUrl: null as string | null,
  valuePropsTitle: 'Travel that feels considered from the beginning.',
  valueProps: [
    {
      title: 'Professional chauffeurs',
      body: 'Connect with service-oriented chauffeurs selected for tourism-focused journeys.',
    },
    {
      title: 'Flexible private travel',
      body: 'Plan airport transfers, day journeys and multi-day itineraries around individual travel needs.',
    },
    {
      title: 'Clearer trip planning',
      body: 'Understand the journey, service and expected pricing before confirming.',
    },
    {
      title: 'Local knowledge',
      body: 'Experience Sri Lanka with professionals who understand its destinations, roads and travel realities.',
    },
  ],
  // Product preview card shown alongside the flagship copy — styled as a
  // real booking-form snippet (search fields in their empty/placeholder
  // state, like an app screenshot, not a filled-in fake itinerary). This
  // is the honesty-safe way to look like a real app: an empty form makes
  // no claim about anything. Do not fill these fields with a specific
  // fabricated trip, chauffeur name, rating or count — that's what makes
  // a preview read as fake rather than as "the product, before you've
  // typed anything into it." The MVP/concierge-assisted disclosure still
  // lives in `status` above, outside the card.
  preview: {
    badge: 'It’s free & takes 2 minutes',
    tabs: ['Transfers', 'Day Trips', 'Multi-day'],
    fields: {
      pickup: { label: 'Pick-up location', placeholder: 'Where will we pick you up?' },
      dropoff: { label: 'Drop-off location', placeholder: 'Where will we drop you off?' },
      date: { label: 'Pick-up date', placeholder: 'Select date' },
      travellers: { label: 'Travellers', placeholder: '1 traveller' },
      vehicle: { label: 'Vehicle type', placeholder: 'Any type' },
    },
    cta: { label: 'Plan My Journey', href: '#contact' },
    quickActions: [
      { label: 'Chat on WhatsApp', href: '#contact' },
      { label: 'Request a call', href: '#contact' },
    ],
  },
};

export const platformVision = {
  title: 'Beginning with mobility. Building toward connected travel.',
  body: [
    'GoChauffeur is the first step in a wider vision for tourism technology.',
    'Over time, Go Technologies aims to build an ecosystem that brings together trusted mobility, local expertise and carefully selected travel services through one connected digital experience.',
    'We are starting deliberately—with a focused platform, a strong service foundation and a model designed to expand responsibly.',
  ],
  roadmap: [
    { title: 'Mobility', body: 'Premium chauffeur experiences across Sri Lanka.' },
    { title: 'Experiences', body: 'Curated tours and activities that reveal the best of Sri Lanka.' },
    { title: 'Hospitality', body: 'Seamless stays through trusted hotel partnerships.' },
    { title: 'Travel Ecosystem', body: 'Integrated services for a smooth journey end-to-end.' },
    { title: 'Beyond Borders', body: 'Expanding our platform to connect more destinations.' },
  ],
};

export const partner = {
  title: 'Building the future of travel takes the right partners.',
  body: 'We are interested in working with professional chauffeurs, vehicle owners, tourism businesses, hospitality partners, technology specialists and organisations that share our commitment to dependable service. Whether you would like to join the GoChauffeur network or explore a strategic partnership with Go Technologies, we would be pleased to hear from you.',
  primaryCta: { label: 'Become a partner', href: '#contact' },
  secondaryCta: { label: 'Contact Go Technologies', href: '#contact' },
  image: {
    src: '/images/partner-banner.jpg',
    alt: 'A chauffeur van parked on a Sri Lankan beach at sunset beneath a palm tree',
  },
};

export const contact = {
  title: 'Get in touch',
  body: 'Whether you’re a traveller, a chauffeur, a travel partner or an investor, tell us a little about what you need and we’ll route it to the right person.',
  fallbackEmail: 'hello@gotechnologies.lk',
  // Preserves a distinct path for every audience the old homepage cards
  // used to segment explicitly (travellers/chauffeurs/partners/investors),
  // even though the homepage itself no longer shows four separate cards
  // — see docs/site-copy.md, reconciliation note 2.
  interestOptions: [
    'Traveller enquiry',
    'Chauffeur / vehicle partner',
    'Travel agency / hotel partner',
    'Investor',
    'Careers',
    'Other',
  ],
};

export const closing = {
  title: 'Thoughtful technology. Trusted experiences. Global possibilities.',
  body: 'Go Technologies is creating digital businesses that combine technology with service, trust and meaningful real-world value.',
  wordmarkLine: 'Built in Sri Lanka. Designed for the world.',
};

export const footer = {
  nav: [
    { label: 'Company', href: '#company' },
    { label: 'GoChauffeur', href: '#gochauffeur' },
    { label: 'Partnerships', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Use', href: '/terms/' },
  ],
  // Placeholder — no confirmed social accounts exist yet. Hrefs are '#'
  // on purpose. Replace with real URLs before launch (see README "First-
  // run checklist"); do not point these at unconfirmed accounts.
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} ${company.shortName}. All rights reserved.`,
};
