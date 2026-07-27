// Central copy and content config for the Go Technologies corporate site.
// Sourced from GoChauffeur + Go Technologies Brand Guidelines v1.0 (July
// 2026): sections 01 (brand decision), 02 (brand foundation), 04 (naming
// and messaging hierarchy) and 15 (copy examples). Keep claims here
// consistent with the "claims control" rule in section 15 -- do not add
// "verified", "instant", "24/7" etc. without a documented operating
// definition behind them.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gotechnologies.lk';

export const company = {
  legalName: 'Go Technologies (Private) Limited',
  shortName: 'Go Technologies',
  descriptor: 'Digital platforms for connected journeys.',
  location: 'Colombo, Sri Lanka',
};

export const nav = [
  { label: 'Company', href: '#company' },
  { label: 'GoChauffeur', href: '#gochauffeur' },
  { label: 'About', href: '#about' },
  { label: 'Partners & careers', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Go Technologies',
  headline: 'Digital platforms for connected journeys.',
  body:
    'We build trusted, technology-driven marketplaces for travel -- starting with GoChauffeur, a pre-booked chauffeur platform for Sri Lanka’s inbound tourism, designed from day one to scale to other journeys and other markets.',
  primaryCta: { label: 'Explore GoChauffeur', href: '#gochauffeur' },
  secondaryCta: { label: 'Partner with us', href: '#partners' },
};

export const foundation = {
  purpose: {
    title: 'Purpose',
    body: 'Make professionally planned travel easier to discover, compare and arrange.',
  },
  promise: {
    title: 'Promise',
    body: 'Clear choices, capable people and dependable confirmation, on every platform we build.',
  },
  positioning: {
    title: 'Positioning',
    body: 'A technology company building trusted booking and marketplace layers for planned journeys -- not on-demand, commodity services.',
  },
};

export const personality = [
  {
    title: 'Trusted',
    body: 'Evidence-led, transparent, dependable.',
  },
  {
    title: 'Welcoming',
    body: 'Human, culturally aware, never intimidating.',
  },
  {
    title: 'Capable',
    body: 'Operationally sharp and professionally calm.',
  },
  {
    title: 'Modern',
    body: 'Digital-first without looking like generic fintech.',
  },
];

export const gochauffeur = {
  name: 'GoChauffeur',
  tagline: 'Travel well. Driven by trust.',
  campaignLine: 'Discover Sri Lanka, driven well.',
  proposition:
    'Compare suitable chauffeurs and vehicles, share your itinerary, and receive a confirmed trip plan from our team.',
  proofPoints: [
    'Chauffeur and chauffeur-guide profiles',
    'Vehicle categories for every group size',
    'Language capability and route experience',
    'Airport transfers and multi-day itineraries',
    'Clear human support throughout',
  ],
  status: {
    label: 'MVP in development',
    body:
      'GoChauffeur is a website-first product currently in build, launching first for inbound travellers to Sri Lanka. Trip requests are reviewed and confirmed by our team -- an honest, concierge-assisted marketplace, not an instant-dispatch app.',
  },
  // Set once the GoChauffeur MVP is live. Until then the showcase links
  // to the on-page contact/waitlist form instead of an external URL, so
  // we never point visitors at a product that isn't live yet.
  liveUrl: null as string | null,
};

export const about = {
  title: 'Sri Lanka first, built to scale',
  body: [
    'Go Technologies is a Sri Lankan technology company building digital platforms that can eventually serve international markets. We start with a real, well-understood problem in inbound tourism, and design the operating model and the software so it can extend to new journeys and new geographies through configuration, not rewrites.',
    'We are founder-led at this stage, deliberately lean, and focused on proving demand, supply and operational coordination before adding complexity. Country rules, currencies, vehicle categories and languages are treated as configuration, so the platform is never permanently tied to one market.',
  ],
  ambition: {
    title: 'Ambition',
    body: 'Start with Sri Lanka; scale the operating model and brand system to other travel markets.',
  },
};

export type Audience = {
  key: string;
  title: string;
  body: string;
  ctaLabel: string;
};

export const audiences: Audience[] = [
  {
    key: 'travellers',
    title: 'Travellers',
    body: 'Inbound visitors who value safety, clarity, comfort and local knowledge on longer journeys and multi-day tours.',
    ctaLabel: 'Explore GoChauffeur',
  },
  {
    key: 'chauffeurs',
    title: 'Chauffeurs & vehicle owners',
    body: 'Independent chauffeurs, chauffeur-guides and vehicle owners looking for qualified, planned demand rather than one-off rides.',
    ctaLabel: 'Register your interest',
  },
  {
    key: 'partners',
    title: 'Travel partners & hotels',
    body: 'Agencies, hotels and DMCs who want a dependable, professional chauffeur layer to refer or bundle into itineraries.',
    ctaLabel: 'Talk to us about partnering',
  },
  {
    key: 'investors',
    title: 'Investors',
    body: 'We share evidence-led updates and keep current capability clearly separate from the roadmap. Get in touch for our latest materials.',
    ctaLabel: 'Request investor info',
  },
];

export const contact = {
  title: 'Get in touch',
  body: 'Whether you’re a traveller, a chauffeur, a travel partner or an investor, tell us a little about what you need and we’ll route it to the right person.',
  fallbackEmail: 'hello@gotechnologies.lk',
  interestOptions: [
    'Traveller enquiry',
    'Chauffeur / vehicle partner',
    'Travel agency / hotel partner',
    'Investor',
    'Careers',
    'Other',
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${company.legalName}. All rights reserved.`,
  endorsement: 'GoChauffeur is a product of Go Technologies.',
};
