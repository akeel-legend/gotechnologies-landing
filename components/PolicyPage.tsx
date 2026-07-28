import { type ReactNode } from 'react';
import { Container } from './layout/Container';
import { Eyebrow } from './ui/Eyebrow';

/**
 * Shared chrome for the /privacy and /terms routes: page title, a
 * "last updated" caption, and a prose column for the policy body.
 * Kept separate from SectionHeading (used on the homepage) because
 * these are standalone pages, not anchor-linked homepage sections.
 */
export function PolicyPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-cream py-20 md:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 font-serif text-page-title text-ink">{title}</h1>
        <p className="mt-4 text-caption text-stone/70">Last updated: {lastUpdated}</p>
        <p className="mt-6 text-body leading-relaxed text-stone">{intro}</p>

        <div className="mt-12 space-y-10 divider pt-12">{children}</div>
      </Container>
    </article>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-xl text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-body leading-relaxed text-stone">{children}</div>
    </section>
  );
}
