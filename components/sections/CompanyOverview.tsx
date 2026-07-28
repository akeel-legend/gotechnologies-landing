import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../motion/Reveal';
import { about } from '@/lib/site-config';

const icons = {
  people: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 19c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.2 14.3c1.9.4 3.3 2 3.3 4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  trust: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 19 6v5.5c0 4.2-2.9 7-7 9-4.1-2-7-4.8-7-9V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  gem: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 9 12 3.5 19.5 9 12 20.5 4.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4.5 9h15M9 9l3 11.5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};

const iconOrder = [icons.people, icons.trust, icons.globe, icons.gem];

export function CompanyOverview() {
  return (
    <section id="company" className="divider bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-serif text-section-title text-ink">{about.title}</h2>
              <p className="mt-5 max-w-xl text-body text-stone">{about.intro}</p>
            </div>
            <div className="space-y-4 md:mt-2 md:border-l md:border-line md:pl-8">
              {about.body.map((paragraph) => (
                <p key={paragraph} className="text-body text-stone">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.beliefs.map((belief, i) => (
              <div key={belief.title} className="rounded-card border border-line bg-card p-7">
                <div className="text-gold">{iconOrder[i % iconOrder.length]}</div>
                <p className="mt-5 font-serif text-lg text-ink">{belief.title}</p>
                <p className="mt-2 text-body text-stone">{belief.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
