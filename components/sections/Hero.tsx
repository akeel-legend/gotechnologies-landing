import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { RouteIllustration } from '../RouteIllustration';
import { ParallaxLayer } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { hero } from '@/lib/site-config';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cloud">
      <Container className="relative grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <p className="text-ui-label uppercase tracking-wide text-teal">{hero.eyebrow}</p>
          <h1 className="mt-3 text-hero text-midnight">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-body text-ink/75">{hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={150} className="relative flex flex-col items-center justify-center px-2 py-8 sm:px-8">
          <ParallaxLayer
            speed={-0.15}
            className="pointer-events-none absolute -top-10 left-2 h-48 w-48 rounded-full bg-teal/20 blur-3xl"
            aria-hidden="true"
          />
          <ParallaxLayer
            speed={0.2}
            className="pointer-events-none absolute -bottom-8 right-2 h-56 w-56 rounded-full bg-gold/25 blur-3xl"
            aria-hidden="true"
          />
          <ParallaxLayer speed={0.05} className="relative z-10 w-full max-w-md">
            <RouteIllustration className="h-56 w-full sm:h-72" />
            <p className="mt-6 text-center text-ui-label text-ink/55">
              A planned journey, not an impulsive ride.
            </p>
          </ParallaxLayer>
        </Reveal>
      </Container>
    </section>
  );
}
