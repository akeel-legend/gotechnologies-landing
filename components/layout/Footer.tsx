import Image from 'next/image';
import { Container } from './Container';
import { company, footer } from '@/lib/site-config';

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 10v6.2M7.5 7.6v.02M11 16.2v-3.6c0-1.4.9-2.4 2.2-2.4 1.2 0 1.9.9 1.9 2.4v3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.6 21v-6.8h2l.3-2.6h-2.3V9.9c0-.75.2-1.26 1.28-1.26h1.37V6.32c-.24-.03-1.05-.1-2-.1-1.98 0-3.34 1.2-3.34 3.42v1.9H8.9v2.6h1.99V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="divider-dark bg-forest text-cream/70">
      <Container className="py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            src="/logo/corporate-white.png"
            alt="Go Technologies"
            width={700}
            height={300}
            className="h-8 w-auto"
          />

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footer.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-body text-cream/70 hover:text-cream">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {footer.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-cream/60 transition-colors hover:text-cream"
              >
                {socialIcons[item.label]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-caption text-cream/50">
          <p>{company.legalName}</p>
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-2">
            {footer.legalLinks.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden="true">·</span> : null}
                <a href={item.href} className="hover:text-cream">
                  {item.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
