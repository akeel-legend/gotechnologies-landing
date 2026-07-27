import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../motion/Reveal';
import { about } from '@/lib/site-config';

export function About() {
  return (
    <section id="about" className="bg-cloud py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <Reveal>
          <SectionHeading eyebrow="About" title={about.title} />
          <div className="mt-6 space-y-4">
            {about.body.map((paragraph) => (
              <p key={paragraph} className="text-body text-ink/75">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="rounded-card bg-white p-8 shadow-card">
            <p className="text-ui-label text-teal">{about.ambition.title}</p>
            <p className="mt-3 text-body text-ink/80">{about.ambition.body}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
