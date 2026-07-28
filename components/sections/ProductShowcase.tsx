import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../motion/Reveal';
import { gochauffeur } from '@/lib/site-config';

const fieldIcons = {
  pin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  person: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  car: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 15.5 5.4 11a2 2 0 0 1 1.9-1.4h9.4A2 2 0 0 1 18.6 11L20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="15.5" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.5" cy="19.5" r="1.1" fill="currentColor" />
      <circle cx="16.5" cy="19.5" r="1.1" fill="currentColor" />
    </svg>
  ),
};

const whatsappIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 20.5 7.1 16.6A8 8 0 1 1 10.4 19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 9.6c.1-.5.6-.9 1.1-.9.3 0 .5.1.7.5l.5 1c.1.3.1.5-.1.8l-.4.5c-.1.2-.1.4 0 .6.4.7 1.2 1.5 1.9 1.9.2.1.4.1.6 0l.5-.4c.2-.2.5-.2.8-.1l1 .5c.4.2.5.4.5.7 0 .5-.4 1-.9 1.1-1 .3-2.5-.2-3.9-1.6s-1.9-2.9-1.6-3.9Z"
      fill="currentColor"
    />
  </svg>
);

const callIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7.5 4.5 9 8l-1.6 1.6a10.5 10.5 0 0 0 5 5L14 13l3.5 1.5v2.6c0 .9-.8 1.6-1.7 1.4-3.4-.7-6.6-2.5-9-4.9s-4.2-5.6-4.9-9c-.2-.9.5-1.7 1.4-1.7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const valueIcons = [
  // Professional chauffeurs
  <svg key="chauffeur" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3.5 19 6v5.5c0 4.2-2.9 7-7 9-4.1-2-7-4.8-7-9V6l7-2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Flexible private travel
  <svg key="route" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="5.5" cy="18.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.2 17.2C11 13 13 11 16.8 6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0.5 3.5" />
  </svg>,
  // Clearer trip planning
  <svg key="clarity" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4.5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 9.5h8M8 13h8M8 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Local knowledge
  <svg key="local" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8v4l2.6 1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function ProductShowcase() {
  const { preview } = gochauffeur;

  return (
    <section id="gochauffeur" className="divider bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-10 rounded-card border border-line bg-card p-6 sm:p-10 md:grid-cols-2 md:items-center md:p-14">
            <div>
              <Eyebrow>{gochauffeur.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-serif text-section-title text-ink">{gochauffeur.title}</h2>
              <p className="mt-2 font-serif text-xl italic text-gold">{gochauffeur.tagline}</p>

              <div className="mt-5 space-y-3">
                {gochauffeur.body.map((paragraph) => (
                  <p key={paragraph} className="text-body text-stone">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-control border border-gold/40 bg-gold/10 px-4 py-2 text-caption text-ink/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {gochauffeur.status.label}
              </div>
              <p className="mt-3 max-w-md text-caption text-stone/90">{gochauffeur.status.body}</p>

              <div className="mt-7">
                <Button href={gochauffeur.cta.href} variant="primary">
                  {gochauffeur.cta.label}
                </Button>
              </div>
            </div>

            {/* Product-preview card — styled as a real booking-form
               snippet: search fields shown in their empty/placeholder
               state (like an app screenshot before you've typed
               anything), not a filled-in fake trip. See
               lib/site-config.ts for why this is the honesty-safe way to
               look like a real product. */}
            <div className="rounded-card bg-forest p-4 text-cream shadow-card sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2.5">
                  <Image src="/logo/symbol.png" alt="" width={64} height={64} className="h-7 w-7 shrink-0" />
                  <p className="font-serif text-lg tracking-tight">GoChauffeur</p>
                </div>
                <span className="inline-block w-fit shrink-0 rounded-control bg-gold/15 px-3 py-1.5 text-[11px] text-gold">
                  {preview.badge}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 text-caption">
                {preview.tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-control px-2.5 py-1.5 ${
                      i === 0 ? 'bg-cream text-forest' : 'text-cream/55'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-3 rounded-card bg-white/5 p-4">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-cream/45">{fieldIcons.pin}</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-cream/45">
                      {preview.fields.pickup.label}
                    </p>
                    <p className="text-body text-cream/55">{preview.fields.pickup.placeholder}</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-cream/45">{fieldIcons.pin}</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-cream/45">
                      {preview.fields.dropoff.label}
                    </p>
                    <p className="text-body text-cream/55">{preview.fields.dropoff.placeholder}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="min-w-0 rounded-card bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-cream/45">
                    {fieldIcons.calendar}
                    <p className="truncate text-[11px] uppercase tracking-wide">{preview.fields.date.label}</p>
                  </div>
                  <p className="mt-1.5 truncate text-caption text-cream/55">{preview.fields.date.placeholder}</p>
                </div>
                <div className="min-w-0 rounded-card bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-cream/45">
                    {fieldIcons.person}
                    <p className="truncate text-[11px] uppercase tracking-wide">{preview.fields.travellers.label}</p>
                  </div>
                  <p className="mt-1.5 truncate text-caption text-cream/55">{preview.fields.travellers.placeholder}</p>
                </div>
              </div>

              <div className="mt-3 rounded-card bg-white/5 p-4">
                <div className="flex items-center gap-2 text-cream/45">
                  {fieldIcons.car}
                  <p className="text-[11px] uppercase tracking-wide">{preview.fields.vehicle.label}</p>
                </div>
                <p className="mt-1.5 text-caption text-cream/55">{preview.fields.vehicle.placeholder}</p>
              </div>

              <a
                href={preview.cta.href}
                className="mt-4 flex items-center justify-center gap-2 rounded-control bg-gold py-3 text-ui-label text-forest transition-opacity hover:opacity-90"
              >
                {preview.cta.label}
                <span aria-hidden="true">→</span>
              </a>

              <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4 text-caption sm:flex-row sm:items-center sm:justify-center">
                {preview.quickActions.map((action, i) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={`flex items-center justify-center gap-2 whitespace-nowrap rounded-control px-2 py-2.5 text-cream/70 transition-colors hover:bg-white/5 hover:text-cream sm:flex-1 sm:py-2 ${
                      i > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''
                    }`}
                  >
                    {i === 0 ? whatsappIcon : callIcon}
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="mt-16">
            <h3 className="max-w-xl font-serif text-2xl text-ink">{gochauffeur.valuePropsTitle}</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gochauffeur.valueProps.map((item, i) => (
                <div key={item.title}>
                  <div className="text-gold">{valueIcons[i % valueIcons.length]}</div>
                  <p className="mt-4 text-ui-label text-ink">{item.title}</p>
                  <p className="mt-2 text-body text-stone">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
