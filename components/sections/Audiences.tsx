import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { audiences } from '@/lib/site-config';

export function Audiences() {
  return (
    <section id="partners" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Partners & careers"
          title="Built for everyone in the journey"
          body="Travellers, chauffeurs, travel partners and investors are all part of the same professional marketplace."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.key}
              className="flex flex-col justify-between rounded-card border border-mist bg-cloud p-7"
            >
              <div>
                <p className="text-ui-label text-midnight">{audience.title}</p>
                <p className="mt-3 text-body text-ink/70">{audience.body}</p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-ui-label text-teal hover:text-teal-hover"
              >
                {audience.ctaLabel}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
