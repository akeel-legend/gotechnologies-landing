import Image from 'next/image';
import { Container } from './Container';
import { nav, company, contact, footer } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="divider bg-midnight text-white/70">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo/corporate-white.png"
              alt="Go Technologies"
              width={700}
              height={300}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-body text-white/60">{company.descriptor}</p>
            <p className="mt-6 text-caption text-white/50">{footer.endorsement}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-eyebrow text-white/50">Company</p>
              <ul className="mt-4 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-body text-white/60 hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-eyebrow text-white/50">Legal</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/privacy/" className="text-body text-white/60 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms/" className="text-body text-white/60 hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-eyebrow text-white/50">Contact</p>
              <ul className="mt-4 space-y-3 text-body text-white/60">
                <li>
                  <a href={`mailto:${contact.fallbackEmail}`} className="hover:text-white">
                    {contact.fallbackEmail}
                  </a>
                </li>
                <li>{company.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-caption text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{company.legalName}</p>
        </div>
      </Container>
    </footer>
  );
}
