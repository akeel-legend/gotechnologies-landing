import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { gochauffeur } from '@/lib/site-config';

export function ProductShowcase() {
  return (
    <section id="gochauffeur" className="bg-midnight py-20 md:py-28">
      <Container>
        <div className="grid gap-12 rounded-card bg-white/[0.03] p-8 ring-1 ring-white/10 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-ui-label uppercase tracking-wide text-gold">Flagship product</p>
            <Image
              src="/logo/wordmark-white.png"
              alt={gochauffeur.name}
              width={1200}
              height={300}
              className="mt-4 h-10 w-auto"
            />
            <p className="mt-5 text-page-title text-white">{gochauffeur.tagline}</p>
            <p className="mt-4 max-w-lg text-body text-white/70">{gochauffeur.proposition}</p>

            <ul className="mt-6 space-y-3">
              {gochauffeur.proofPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-body text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href={gochauffeur.liveUrl ?? '#contact'}
                variant="primary"
                {...(gochauffeur.liveUrl ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {gochauffeur.liveUrl ? 'Visit GoChauffeur' : 'Join the launch waitlist'}
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-card bg-midnight/60 p-8 ring-1 ring-white/10">
            <p className="text-ui-label text-gold">{gochauffeur.status.label}</p>
            <p className="mt-3 text-body text-white/75">{gochauffeur.status.body}</p>
            <p className="mt-6 text-caption uppercase tracking-wide text-white/40">
              Campaign line
            </p>
            <p className="mt-1 text-body text-white/70">&ldquo;{gochauffeur.campaignLine}&rdquo;</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
