import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../motion/Reveal';
import { foundation, personality } from '@/lib/site-config';

const foundationCards = [
  { ...foundation.purpose, bg: 'bg-accent-sage', icon: 'compass' as const },
  { ...foundation.promise, bg: 'bg-accent-tan', icon: 'shield' as const },
  { ...foundation.positioning, bg: 'bg-accent-amber', icon: 'layers' as const },
];

const personalityBg = ['bg-accent-sage', 'bg-accent-teal', 'bg-accent-tan', 'bg-accent-amber'];

function CardIcon({ name }: { name: 'compass' | 'shield' | 'layers' }) {
  const common = { fill: 'none', stroke: '#15252B', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'compass') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" {...common} />
      </svg>
    );
  }
  if (name === 'shield') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 19 6v5.5c0 4.2-2.9 7-7 9-4.1-2-7-4.8-7-9V6l7-2.5Z" {...common} />
        <path d="M9 12l2 2 4-4.5" {...common} />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z" {...common} />
      <path d="M4 12l8 4.5 8-4.5" {...common} />
      <path d="M4 16l8 4.5 8-4.5" {...common} />
    </svg>
  );
}

export function CompanyOverview() {
  return (
    <section id="company" className="divider bg-midnight py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Company"
            title="What we're building, and why"
            body="Go Technologies designs the operating model first, then the software -- so trust and clarity carry through everything we ship."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {foundationCards.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 90}>
              <div className={`rounded-card ${card.bg} p-8`}>
                <CardIcon name={card.icon} />
                <p className="mt-5 text-ui-label text-midnight">{card.title}</p>
                <p className="mt-3 text-body text-ink/80">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-5 grid overflow-hidden rounded-card sm:grid-cols-4">
            {personality.map((trait, i) => (
              <div key={trait.title} className={`p-8 ${personalityBg[i % personalityBg.length]}`}>
                <p className="text-ui-label text-midnight">{trait.title}</p>
                <p className="mt-2 text-caption text-ink/70">{trait.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
