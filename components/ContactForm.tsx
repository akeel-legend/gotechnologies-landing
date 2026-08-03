'use client';

import { useState, type FormEvent } from 'react';
import { contact } from '@/lib/site-config';

// Formspree form ID from NEXT_PUBLIC_FORMSPREE_FORM_ID (see .env.example).
// Submission is disabled with an inline note if it's unset, so the form
// never silently fails to go anywhere.
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const SUBMISSION_ENABLED = Boolean(FORMSPREE_FORM_ID);

// Pill radius for single-line controls only. A `rows={5}` textarea at a
// 999px pill radius renders as a stadium/capsule shape, which reads as a
// bug rather than a design choice -- multi-line fields use `rounded-card`
// (20px) instead, same as the rest of the site's soft-cornered panels.
const fieldBase =
  'w-full border border-line bg-white px-4 py-3 text-body text-ink placeholder:text-stone/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15';
const pillField = `${fieldBase} rounded-control`;
const panelField = `${fieldBase} rounded-card`;

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Rendered inside ContactSection's shared card panel (no border/shadow of
// its own), stacked single-column -- see ContactSection.tsx.
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!SUBMISSION_ENABLED) return;

    const form = event.currentTarget;
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
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
      <p className="text-body text-ink">
        Thanks for reaching out — we&apos;ve received your message and will get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby={!SUBMISSION_ENABLED ? 'contact-form-disabled-note' : undefined}
    >
      <div>
        <label htmlFor="name" className="text-ui-label text-ink/80">
          Name
        </label>
        <input id="name" name="name" type="text" required className={`mt-2 ${pillField}`} />
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-ui-label text-ink/80">
          Email
        </label>
        <input id="email" name="email" type="email" required className={`mt-2 ${pillField}`} />
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="text-ui-label text-ink/80">
          Phone <span className="text-stone/50">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" className={`mt-2 ${pillField}`} />
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="text-ui-label text-ink/80">
          I&apos;m getting in touch as a...
        </label>
        <div className="relative mt-2">
          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            className={`appearance-none pr-10 ${pillField}`}
          >
            <option value="" disabled>
              Select one
            </option>
            {contact.interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone/50"
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-ui-label text-ink/80">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`mt-2 resize-none ${panelField}`} />
      </div>

      <button
        type="submit"
        disabled={!SUBMISSION_ENABLED || status === 'submitting'}
        aria-disabled={!SUBMISSION_ENABLED || status === 'submitting'}
        className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-control bg-forest text-ui-label text-cream transition-colors hover:bg-forest-hover disabled:cursor-not-allowed disabled:bg-line disabled:text-stone/60 disabled:hover:bg-line"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {!SUBMISSION_ENABLED ? (
        <p id="contact-form-disabled-note" className="mt-3 text-center text-caption text-stone/60">
          This form is not yet connected — submissions are disabled until it is.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="mt-3 text-center text-caption text-red-600">
          Something went wrong sending your message — please try again, or email us directly.
        </p>
      ) : null}
    </form>
  );
}
