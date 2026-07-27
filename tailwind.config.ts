import type { Config } from 'tailwindcss';

// Tokens sourced from GoChauffeur + Go Technologies Brand Guidelines v1.0
// (July 2026), section 08 (Colour), 09 (Typography) and 13 (Digital
// product design system). Do not add new brand colors here without
// updating the guidelines doc first.
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
        },
        midnight: '#0B1F2A', // Headings / dark surfaces
        gold: '#D8A344', // Journey Gold - waypoints / premium accent (never body text)
        cloud: '#F5F8F7', // Page / UI background
        mist: '#E4ECEA', // Cards / dividers / icons
        ink: '#15252B', // Primary body text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 2rem + 2.2vw, 4.5rem)', { lineHeight: '1.04', fontWeight: '800' }],
        'page-title': ['clamp(2rem, 1.7rem + 1.2vw, 3rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['clamp(1.5rem, 1.35rem + 0.6vw, 2rem)', { lineHeight: '1.2', fontWeight: '700' }],
        body: ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }],
        'ui-label': ['0.9375rem', { lineHeight: '1.3', fontWeight: '600' }],
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
