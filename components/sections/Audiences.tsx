import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../motion/Reveal';
import { audiences, type Audience } from '@/lib/site-config';

const cardBg: Record<Audience['key'], string> = {
  travellers: 'bg-accent-sage',
  chauffeurs: 'bg-accent-tan',
  partners: 'bg-accent-amber',
  investors: 'bg-accent-teal',
};

const common = { fill: 'none', stroke: '#15252B', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function AudienceIcon({ audienceKey }: { audienceKey: Audience['key'] }) {
  if (audienceKey === 'travellers') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.25" {...common} />
        <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" {...common} />
      </svg>
    );
  }
  if (audienceKey === 'chauffeurs') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 19 6v5.5c0 4.2-2.9 7-7 9-4.1-2-7-4.8-7-9V6l7-2.5Z" {...common} />
        <path d="M9 12l2 2 4-4.5" {...common} />
      </svg>
    );
  }
  if (audienceKey === 'partners') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="7" width="17" height="12" rx="2" {...common} />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" {...common} />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 17l5-5.5 3.5 3L20 6" {...common} />
      <path d="M14.5 6H20v5.5" {...common} />
    </svg>
  );
}

export function Audiences() {
  return (
    <section id="partners" className="divider bg-midnight py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Partners & careers"
            title="Built for everyone in the journey"
            body="Travellers, chauffeurs, travel partners and investors are all part of the same professional marketplace."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, i) => (
            <Reveal key={audience.key} delayMs={i * 80}>
              <div className={`flex h-full flex-col justify-between rounded-card ${cardBg[audience.key]} p-7`}>
                <div>
                  <AudienceIcon audienceKey={audience.key} />
                  <p className="mt-5 text-ui-label text-midnight">{audience.title}</p>
                  <p className="mt-3 text-body text-ink/70">{audience.body}</p>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-ui-label text-teal-deep hover:text-midnight"
                >
                  {audience.ctaLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
