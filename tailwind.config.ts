import type { Config } from 'tailwindcss';

// Tokens sourced from GoChauffeur + Go Technologies Brand Guidelines v1.1
// (see docs update: "Corporate digital direction" addendum). Do not add
// new brand colors here without updating the guidelines doc first.
//
// v1.1 note: the corporate site (this repo) moved to a dark-first,
// editorial visual direction -- bigger/bolder type, a monospace label
// convention, and a small "card accent" palette. The accent colors below
// are *not* new brand hues: they are documented tint/shade steps of
// Ceylon Teal and Journey Gold (see the brand guide's colour ramp table),
// chosen specifically because they stay legible with dark Ink text and
// read as light, saturated patches against the Midnight page background.
// GoChauffeur's own product surfaces are unaffected by this change.
//
// Note: Tailwind's default 0.25rem-based spacing scale already lines up
// with the brand's 4px base scale (1=4px, 2=8px, 3=12px, 4=16px, 6=24px,
// 8=32px, 12=48px, 16=64px, 24=96px), so spacing is intentionally left
// at Tailwind defaults rather than redefined.

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0D6F68', // Ceylon Teal - primary action / Go wordmark
          hover: '#0A5A55',
          deep: '#073A36', // Teal-800: full-bleed section backgrounds (e.g. product showcase)
        },
        midnight: '#0B1F2A', // Default page background (dark-first) / headings on light panels
        gold: '#D8A344', // Journey Gold - waypoints / premium accent (never body text)
        cloud: '#F5F8F7', // Light panels (used sparingly against the dark page)
        mist: '#E4ECEA', // Dividers / icons on light panels
        ink: '#15252B', // Text on light/accent surfaces
        accent: {
          // Card-accent palette: tints of Teal (sage/teal) and Gold
          // (tan/amber). All pass WCAG AA with Ink text (>=6.5:1).
          sage: '#A8CBC9', // Teal tint 200
          teal: '#7CB1AD', // Teal tint 300
          tan: '#EACD9A', // Gold tint 300
          amber: '#E1B971', // Gold tint 400
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        hero: [
          'clamp(2.75rem, 1.9rem + 4.2vw, 6.75rem)',
          { lineHeight: '0.98', fontWeight: '800', letterSpacing: '-0.02em' },
        ],
        'page-title': [
          'clamp(2.25rem, 1.8rem + 2vw, 3.75rem)',
          { lineHeight: '1.02', fontWeight: '800', letterSpacing: '-0.015em' },
        ],
        'section-title': [
          'clamp(1.875rem, 1.55rem + 1.5vw, 3.25rem)',
          { lineHeight: '1.04', fontWeight: '800', letterSpacing: '-0.01em' },
        ],
        body: ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }],
        'ui-label': ['0.9375rem', { lineHeight: '1.3', fontWeight: '600' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.3', fontWeight: '500', letterSpacing: '0.03em' }],
        caption: ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      borderRadius: {
        control: '12px',
        card: '24px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 31, 42, 0.04), 0 8px 24px rgba(11, 31, 42, 0.06)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
