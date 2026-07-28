import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../motion/Reveal';
import { gochauffeur } from '@/lib/site-config';

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

            {/* Illustrative product-preview card — static coded mock, not a
               real screenshot. Explicitly labelled "Preview" and using a
               placeholder chauffeur profile (see lib/site-config.ts). */}
            <div className="rounded-card bg-forest p-5 text-cream shadow-card sm:p-6">
              <div className="flex items-center justify-between">
                <p className="font-serif text-lg">GoChauffeur</p>
                <span className="rounded-control border border-cream/25 px-2.5 py-1 text-[11px] uppercase tracking-wide text-cream/70">
                  {preview.tag}
                </span>
              </div>

              <div className="mt-5 flex gap-2 text-caption">
                {preview.tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-control px-3 py-1.5 ${
                      i === 0 ? 'bg-cream text-forest' : 'text-cream/60'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-3 rounded-card bg-white/5 p-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-cream/50">From</p>
                  <p className="text-body text-cream/90">{preview.from}</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-cream/50">To</p>
                  <p className="text-body text-cream/90">{preview.to}</p>
                </div>
                <div className="flex gap-6 pt-1">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-cream/50">Date</p>
                    <p className="text-caption text-cream/80">{preview.date}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-cream/50">Time</p>
                    <p className="text-caption text-cream/80">{preview.time}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-cream/50">Passengers</p>
                    <p className="text-caption text-cream/80">{preview.passengers}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center rounded-control bg-gold py-3 text-ui-label text-forest">
                {preview.ctaLabel}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-card bg-white/5 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-cream/70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8.5" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-body text-cream/90">{preview.sampleChauffeur.name}</p>
                  <p className="text-caption text-cream/55">
                    {preview.sampleChauffeur.vehicle} · {preview.sampleChauffeur.note}
                  </p>
                </div>
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
