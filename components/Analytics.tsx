import Script from 'next/script';

// Lean, opt-in analytics: nothing loads unless an env var is set, so the
// site ships with zero third-party scripts by default. Set at most one
// of NEXT_PUBLIC_PLAUSIBLE_DOMAIN / NEXT_PUBLIC_GA_MEASUREMENT_ID per
// deploy target (see .env.example).
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (plausibleDomain) {
    return (
      <Script
        strategy="afterInteractive"
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  if (gaId) {
    return (
      <>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </>
    );
  }

  return null;
}
