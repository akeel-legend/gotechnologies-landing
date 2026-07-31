'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { nav, primaryCta } from '@/lib/site-config';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Go Technologies home">
          <Image
            src="/logo/corporate-dark.png"
            alt="Go Technologies"
            width={700}
            height={300}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ui-label text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryCta.href}
          className="hidden min-h-[44px] items-center justify-center gap-2 rounded-control bg-forest px-5 text-ui-label text-cream transition-colors hover:bg-forest-hover md:inline-flex"
        >
          {primaryCta.label}
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-forest/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="#14201A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="#14201A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-cream md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-control px-2 py-3 text-ui-label text-ink/70 hover:bg-forest/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-control bg-forest px-5 text-ui-label text-cream hover:bg-forest-hover"
            >
              {primaryCta.label}
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
