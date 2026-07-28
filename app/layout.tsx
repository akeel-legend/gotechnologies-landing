import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/Analytics';
import { company, siteUrl } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Editorial serif for headlines — the warm-editorial direction's display
// type (see docs/design-direction.md). Self-hosted via next/font/google,
// optical sizing left to the browser via the variable axis.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

// Used only for the small "eyebrow" labels -- a deliberate editorial/
// technical accent against the serif headlines and Inter body type.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} — ${company.descriptor}`,
    template: `%s — ${company.shortName}`,
  },
  description:
    'Go Technologies builds thoughtful digital platforms that improve how people move, connect and experience the world — starting with GoChauffeur, a tourism-focused chauffeur platform for Sri Lanka.',
  openGraph: {
    title: `${company.shortName} — ${company.descriptor}`,
    description:
      'Go Technologies builds thoughtful digital platforms that improve how people move, connect and experience the world — starting with GoChauffeur, a tourism-focused chauffeur platform for Sri Lanka.',
    url: siteUrl,
    siteName: company.shortName,
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.shortName} — ${company.descriptor}`,
    description:
      'Go Technologies builds thoughtful digital platforms for travel — starting with GoChauffeur in Sri Lanka.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icon-180.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#FBF8F3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
