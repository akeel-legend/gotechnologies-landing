import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';
import { hero } from '@/lib/site-config';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <h1 className="mt-5 font-serif text-hero text-ink">{hero.headline}</h1>
          <div className="mt-6 max-w-xl space-y-4">
            {hero.body.map((paragraph) => (
              <p key={paragraph} className="text-body text-stone">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-caption text-stone/80">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {hero.supportingLine}
          </p>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] rounded-tl-[4px] shadow-card">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
