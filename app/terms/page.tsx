import type { Metadata } from 'next';
import { PolicyPage, PolicySection } from '@/components/PolicyPage';
import { company, contact, siteUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms of use for the Go Technologies corporate website.',
  alternates: { canonical: `${siteUrl}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms and Conditions"
      lastUpdated="28 July 2026"
      intro={`These are initial terms of use for the ${company.shortName} corporate website (this site) — an informational and marketing site, not a booking platform. They do not cover GoChauffeur's booking, chauffeur-assignment or payment operations, which is a separate product with its own terms once it is live.`}
    >
      <PolicySection title="1. About this site">
        <p>
          This website is operated by {company.legalName} (&quot;Go
          Technologies&quot;, &quot;we&quot;, &quot;us&quot;). It provides
          information about Go Technologies and its upcoming product,
          GoChauffeur, and lets
          visitors submit an enquiry or express interest. By using this
          site, you agree to these terms.
        </p>
      </PolicySection>

      <PolicySection title="2. No booking or payment service">
        <p>
          This site does not process bookings, reservations or payments,
          and does not connect you with a chauffeur or vehicle. GoChauffeur
          is described here as a product currently in development and
          &quot;launching soon.&quot; Submitting the contact form registers your
          interest or enquiry only; it is not a booking, reservation or
          contract of any kind.
        </p>
      </PolicySection>

      <PolicySection title="3. Accuracy of information">
        <p>
          We aim to keep the content on this site accurate and current, but
          Go Technologies and GoChauffeur are early-stage and details —
          including features, timelines and availability — may change
          without notice. Statements about GoChauffeur describe intended
          functionality and are not guarantees of specific features, dates
          or service levels.
        </p>
      </PolicySection>

      <PolicySection title="4. Acceptable use">
        <p>
          You agree not to misuse this site: no attempting to disrupt its
          operation, no submitting the contact form with false or malicious
          content, and no scraping or automated harvesting of its content
          beyond normal search-engine indexing.
        </p>
      </PolicySection>

      <PolicySection title="5. Intellectual property">
        <p>
          The Go Technologies and GoChauffeur names, logos and the content
          of this site are the property of {company.legalName} unless
          otherwise noted, and may not be reproduced without permission,
          except for normal browsing, linking and fair-use quotation.
        </p>
      </PolicySection>

      <PolicySection title="6. Third-party links and services">
        <p>
          This site may link to third-party services (for example, the
          contact form&apos;s processor) that are governed by their own terms.
          We are not responsible for the content or practices of
          third-party sites we link to.
        </p>
      </PolicySection>

      <PolicySection title="7. Disclaimer and limitation of liability">
        <p>
          This site and its content are provided &quot;as is,&quot; without
          warranties of any kind, to the extent permitted by law. To the
          fullest extent permitted by applicable law, Go Technologies is
          not liable for any indirect, incidental or consequential damages
          arising from use of this site.
        </p>
      </PolicySection>

      <PolicySection title="8. Governing law">
        <p>
          These terms are governed by the laws of Sri Lanka, without
          regard to conflict-of-law principles, unless a different
          governing law is required by the law of your jurisdiction.
        </p>
      </PolicySection>

      <PolicySection title="9. Changes to these terms">
        <p>
          These are initial terms for an early-stage marketing site and
          will be revised as Go Technologies and GoChauffeur evolve. We
          will update the &quot;Last updated&quot; date above when they change.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact">
        <p>
          Questions about these terms can be sent to{' '}
          <a
            href={`mailto:${contact.fallbackEmail}`}
            className="text-teal underline underline-offset-4 hover:text-white"
          >
            {contact.fallbackEmail}
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
