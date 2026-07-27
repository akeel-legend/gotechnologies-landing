import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { RouteIllustration } from '../RouteIllustration';
import { hero } from '@/lib/site-config';

export function Hero() {
  return (
    <section id="top" className="bg-cloud">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
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
        </div>

        <div className="relative overflow-hidden rounded-card bg-midnight p-8 shadow-card">
          <RouteIllustration className="h-56 w-full sm:h-64" />
          <p className="mt-6 text-ui-label text-white/70">
            A planned journey, not an impulsive ride.
          </p>
        </div>
      </Container>
    </section>
  );
}
