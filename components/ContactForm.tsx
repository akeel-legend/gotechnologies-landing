import { contact } from '@/lib/site-config';

// The form itself is fully built out and fillable (all fields real,
// required, no disabled inputs) -- only submission is intentionally
// switched off, because there's no backend wired up yet (no Formspree
// endpoint, no other collection mechanism). The submit button is
// deliberately inert: it does not POST anywhere and does not fall back
// to a mailto: link. Flip this to `true` (and reinstate a real submit
// handler -- Formspree POST, a custom API route, etc. -- this file will
// need `'use client'` and useState again at that point, see git history)
// once there's somewhere for submissions to actually go.
const SUBMISSION_ENABLED = false;

// Pill radius for single-line controls only. A `rows={5}` textarea at a
// 999px pill radius renders as a stadium/capsule shape, which reads as a
// bug rather than a design choice -- multi-line fields use `rounded-card`
// (20px) instead, same as the rest of the site's soft-cornered panels.
const fieldBase =
  'w-full border border-line bg-white px-4 py-3 text-body text-ink placeholder:text-stone/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15';
const pillField = `${fieldBase} rounded-control`;
const panelField = `${fieldBase} rounded-card`;

// Rendered inside ContactSection's shared card panel (no border/shadow of
// its own), stacked single-column -- see ContactSection.tsx.
export function ContactForm() {
  return (
    <form aria-describedby={SUBMISSION_ENABLED ? undefined : 'contact-form-disabled-note'}>
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
        disabled={!SUBMISSION_ENABLED}
        aria-disabled={!SUBMISSION_ENABLED}
        className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-control bg-forest text-ui-label text-cream transition-colors hover:bg-forest-hover disabled:cursor-not-allowed disabled:bg-line disabled:text-stone/60 disabled:hover:bg-line"
      >
        Send message
      </button>

      {!SUBMISSION_ENABLED ? (
        <p id="contact-form-disabled-note" className="mt-3 text-center text-caption text-stone/60">
          This form is not yet connected — submissions are disabled until it is.
        </p>
      ) : null}
    </form>
  );
}
