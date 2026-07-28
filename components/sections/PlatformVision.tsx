import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { platformVision } from '@/lib/site-config';

const roadmapIcons = [
  // Mobility — car
  <svg key="mobility" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 15.5 5.4 11a2 2 0 0 1 1.9-1.4h9.4A2 2 0 0 1 18.6 11L20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="15.5" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7.5" cy="19.5" r="1.3" fill="currentColor" />
    <circle cx="16.5" cy="19.5" r="1.3" fill="currentColor" />
  </svg>,
  // Experiences — bag/luggage
  <svg key="experiences" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="8" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 8V6.5A2 2 0 0 1 11 4.5h2a2 2 0 0 1 2 2V8" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  // Hospitality — building
  <svg key="hospitality" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 8h1.5M13.5 8H15M9 12h1.5M13.5 12h1.5M9 16h1.5M13.5 16h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Travel Ecosystem — plane
  <svg key="ecosystem" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3v7.2L4 14v1.8l8-2.4V19l-2.3 1.6V22l3.3-.9 3.3.9v-1.4L14 19v-5.6l8 2.4V14l-8-3.8V3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>,
  // Beyond Borders — globe
  <svg key="borders" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
];

export function PlatformVision() {
  return (
    <section id="ventures" className="divider bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
            <h2 className="font-serif text-section-title text-ink">{platformVision.title}</h2>
            <div className="space-y-4">
              {platformVision.body.map((paragraph) => (
                <p key={paragraph} className="text-body text-stone">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            {platformVision.roadmap.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4 sm:flex-1 sm:flex-col sm:items-center sm:text-center">
                <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                    {roadmapIcons[i]}
                  </span>
                </div>
                <div className="sm:mt-1">
                  <p className="text-ui-label text-ink">{step.title}</p>
                  <p className="mt-1 max-w-[11rem] text-caption text-stone">{step.body}</p>
                </div>
                {i < platformVision.roadmap.length - 1 ? (
                  <span className="mx-2 mt-6 hidden h-px flex-1 self-start bg-line sm:block" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
