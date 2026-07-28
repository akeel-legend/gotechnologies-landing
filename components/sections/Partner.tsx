import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';
import { partner } from '@/lib/site-config';

export function Partner() {
  return (
    <section id="partners" className="divider bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-card border border-line bg-card md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative h-56 md:h-full">
              <Image
                src={partner.image.src}
                alt={partner.image.alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14">
              <h2 className="font-serif text-section-title text-ink">{partner.title}</h2>
              <p className="mt-4 max-w-xl text-body text-stone">{partner.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={partner.primaryCta.href} variant="primary">
                  {partner.primaryCta.label}
                </Button>
                <Button href={partner.secondaryCta.href} variant="secondary">
                  {partner.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
