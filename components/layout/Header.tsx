'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { nav } from '@/lib/site-config';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Go Technologies home">
          <Image
            src="/logo/corporate-dark.png"
            alt="Go Technologies"
            width={700}
            height={300}
            className="h-16 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ui-label text-ink/80 transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden min-h-[44px] items-center justify-center rounded-control bg-teal px-5 text-ui-label text-white transition-colors hover:bg-teal-hover md:inline-flex"
        >
          Contact us
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-mist md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="#15252B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="#15252B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-mist bg-white md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-control px-2 py-3 text-ui-label text-ink/80 hover:bg-cloud hover:text-teal"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-control bg-teal px-5 text-ui-label text-white hover:bg-teal-hover"
            >
              Contact us
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
