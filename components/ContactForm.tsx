'use client';

import { useState, type FormEvent } from 'react';
import { contact } from '@/lib/site-config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

const inputClass =
  'w-full rounded-control border border-line bg-white px-4 py-3 text-body text-ink placeholder:text-stone/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  // No Formspree form configured yet: degrade to a plain mailto link so
  // the page still ships something usable rather than a dead form.
  if (!formId) {
    return (
      <div className="rounded-card border border-line bg-card p-8">
        <p className="text-body text-stone">
          Our online form is being connected. In the meantime, email us directly and
          we&apos;ll route your message to the right person.
        </p>
        <a
          href={`mailto:${contact.fallbackEmail}`}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-control bg-forest px-6 text-ui-label text-cream hover:bg-forest-hover"
        >
          Email {contact.fallbackEmail}
        </a>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-line bg-card p-8">
        <p className="font-serif text-section-title text-ink">Thank you</p>
        <p className="mt-2 text-body text-stone">
          Your message is with us. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-line bg-card p-8">
      {/* Honeypot field for basic spam protection; hidden from real users. */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-ui-label text-ink/80">
            Name
          </label>
          <input id="name" name="name" type="text" required className={`mt-2 ${inputClass}`} />
        </div>
        <div>
          <label htmlFor="email" className="text-ui-label text-ink/80">
            Email
          </label>
          <input id="email" name="email" type="email" required className={`mt-2 ${inputClass}`} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="text-ui-label text-ink/80">
          I&apos;m getting in touch as a...
        </label>
        <select id="interest" name="interest" required defaultValue="" className={`mt-2 ${inputClass}`}>
          <option value="" disabled>
            Select one
          </option>
          {contact.interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-ui-label text-ink/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`mt-2 ${inputClass}`}
        />
      </div>

      {status === 'error' ? (
        <p role="alert" className="mt-4 text-body text-red-700">
          Something went wrong sending your message. Please try again, or email{' '}
          <a href={`mailto:${contact.fallbackEmail}`} className="underline">
            {contact.fallbackEmail}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-control bg-forest px-6 text-ui-label text-cream transition-colors hover:bg-forest-hover disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
