import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="bg-midnight py-28 md:py-40">
      <Container className="max-w-2xl text-center">
        <Eyebrow className="justify-center" tone="muted">
          404
        </Eyebrow>
        <h1 className="mt-3 text-page-title text-white">Page not found</h1>
        <p className="mt-4 text-body leading-relaxed text-white/65">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
          Head back to the homepage to explore Go Technologies and
          GoChauffeur.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Back to homepage
          </Button>
          <Button href="/#contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
