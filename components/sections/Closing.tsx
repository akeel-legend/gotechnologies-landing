import Image from 'next/image';
import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { closing } from '@/lib/site-config';

export function Closing() {
  return (
    <section className="bg-forest py-20 text-center text-cream md:py-24">
      <Container className="max-w-2xl">
        <Reveal>
          <h2 className="font-serif text-section-title">{closing.title}</h2>
          <p className="mt-5 text-body text-cream/70">{closing.body}</p>

          <Image
            src="/logo/corporate-white.png"
            alt="Go Technologies"
            width={700}
            height={300}
            className="mx-auto mt-9 h-8 w-auto"
          />
          <p className="mt-3 text-caption text-cream/50">{closing.wordmarkLine}</p>
        </Reveal>
      </Container>
    </section>
  );
}
