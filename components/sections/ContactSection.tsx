import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { ContactForm } from '../ContactForm';
import { Reveal } from '../motion/Reveal';
import { company, contact } from '@/lib/site-config';

const infoItems = [
  {
    label: 'Email',
    value: contact.fallbackEmail,
    href: `mailto:${contact.fallbackEmail}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 6.5 12 13l8-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: company.location,
    href: undefined,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="divider bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-card border border-line bg-card md:grid-cols-2">
            {/* Left: intro + real contact info */}
            <div className="p-8 sm:p-10 md:border-r md:border-line md:p-14">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-3 font-serif text-section-title text-ink">{contact.title}</h2>
              <p className="mt-4 max-w-sm text-body text-stone">{contact.body}</p>

              <div className="mt-10 space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-forest/8 text-forest">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-ui-label text-ink">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block text-body text-stone hover:text-forest">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-body text-stone">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-10 md:p-14">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
