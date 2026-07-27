import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../motion/Reveal';
import { foundation, personality } from '@/lib/site-config';

const foundationCards = [foundation.purpose, foundation.promise, foundation.positioning];

export function CompanyOverview() {
  return (
    <section id="company" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Company"
            title="What we're building, and why"
            body="Go Technologies designs the operating model first, then the software -- so trust and clarity carry through everything we ship."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {foundationCards.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 90}>
              <div className="rounded-card bg-mist p-8">
                <p className="text-ui-label text-teal">{card.title}</p>
                <p className="mt-3 text-body text-ink/80">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-6 grid overflow-hidden rounded-card sm:grid-cols-4">
            {personality.map((trait, i) => (
              <div
                key={trait.title}
                className={`p-8 ${i % 2 === 0 ? 'bg-midnight' : 'bg-teal'}`}
              >
                <p className="text-ui-label text-white">{trait.title}</p>
                <p className="mt-2 text-caption text-white/70">{trait.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
