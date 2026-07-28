import type { Config } from 'tailwindcss';

// Tokens for the "warm editorial" direction — see docs/design-direction.md,
// "Pivot to warm editorial" for the rationale and the decision to
// supersede the earlier dark-first v1.1 palette below it.
//
// Colour values were sampled directly from the approved mockup (see
// docs/site-copy.md) rather than invented, so this file is the compiled
// version of that visual reference, not a fresh guess.
//
// Note: Tailwind's default 0.25rem-based spacing scale already lines up
// with the brand's 4px base scale, so spacing is intentionally left at
// Tailwind defaults rather than redefined.

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F3', // Default page background (warm ivory)
        card: '#F4EEE1', // Slightly deeper cream, for cards/panels on the cream page
        forest: {
          DEFAULT: '#0C2A1F', // Primary action colour / dark surfaces (buttons, footer, closing band)
          hover: '#0A2118',
        },
        ink: '#14201A', // Headline + body text on the cream page
        stone: '#5B584F', // Secondary/paragraph text, warmer than pure grey
        line: '#E7DFCE', // Hairline dividers / card borders on cream
        gold: '#A87D3A', // Eyebrow labels, dashes, small accents — never large surfaces or body text
        // Legacy dark-first tokens, kept only so any not-yet-migrated
        // component doesn't hard-crash; do not use these in new work.
        teal: {
          DEFAULT: '#0D6F68',
          hover: '#0A5A55',
          deep: '#073A36',
        },
        midnight: '#0B1F2A',
        cloud: '#F5F8F7',
        mist: '#E4ECEA',
        accent: {
          sage: '#A8CBC9',
          teal: '#7CB1AD',
          tan: '#EACD9A',
          amber: '#E1B971',
        },
      },
      fontFamily: {
        // Fraunces for editorial serif headlines (the mockup's display
        // type), Inter for body copy and UI labels.
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        hero: [
          'clamp(2.5rem, 1.9rem + 3vw, 4.5rem)',
          { lineHeight: '1.05', fontWeight: '500', letterSpacing: '-0.01em' },
        ],
        'page-title': [
          'clamp(2rem, 1.6rem + 1.8vw, 3rem)',
          { lineHeight: '1.08', fontWeight: '500', letterSpacing: '-0.01em' },
        ],
        'section-title': [
          'clamp(1.75rem, 1.45rem + 1.3vw, 2.75rem)',
          { lineHeight: '1.1', fontWeight: '500', letterSpacing: '-0.005em' },
        ],
        body: ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        'ui-label': ['0.9375rem', { lineHeight: '1.3', fontWeight: '500' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.08em' }],
        caption: ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      borderRadius: {
        control: '999px', // pill buttons throughout the warm-editorial direction
        card: '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 32, 26, 0.04), 0 12px 32px rgba(20, 32, 26, 0.06)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
