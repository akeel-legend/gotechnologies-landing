import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from '../ContactForm';
import { contact } from '@/lib/site-config';

export function ContactSection() {
  return (
    <section id="contact" className="bg-cloud py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <SectionHeading eyebrow="Contact" title={contact.title} body={contact.body} />
        <ContactForm />
      </Container>
    </section>
  );
}
