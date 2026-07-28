import type { Metadata } from 'next';
import { PolicyPage, PolicySection } from '@/components/PolicyPage';
import { company, contact, siteUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Go Technologies collects and uses information submitted through this website.',
  alternates: { canonical: `${siteUrl}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="28 July 2026"
      intro={`This is an initial privacy policy for the ${company.shortName} corporate website (this site). It describes what this website itself collects and does today. It is not the privacy policy for the GoChauffeur product, which will publish its own, more detailed policy once it has live booking, account and payment functionality.`}
    >
      <PolicySection title="1. What this website is">
        <p>
          This website is a static marketing and information site for{' '}
          {company.legalName}. It has no user accounts, no booking system,
          and no payment processing. The only data this site actively
          collects is what you choose to submit through the contact form,
          plus limited, optional analytics described below.
        </p>
      </PolicySection>

      <PolicySection title="2. Information we collect">
        <p>
          <strong className="text-ink/85">Contact form.</strong> When you
          submit the contact form, we collect the name, email address,
          stated interest (traveller, chauffeur/vehicle partner, travel
          agency/hotel partner, investor, careers, or other) and message
          you provide. This is sent to us via Formspree (a third-party
          form-handling service) or, when no form endpoint is configured,
          via a direct email you send us.
        </p>
        <p>
          <strong className="text-ink/85">Analytics (optional).</strong>{' '}
          If enabled, this site may use privacy-focused analytics
          (Plausible) or Google Analytics 4 to understand aggregate
          traffic, such as which pages are visited and general geographic
          region. Whether either is active depends on this deployment&apos;s
          configuration; neither is required for the site to function.
        </p>
        <p>
          We do not use advertising trackers, and we do not sell any
          information collected through this site.
        </p>
      </PolicySection>

      <PolicySection title="3. How we use information">
        <p>
          We use contact-form submissions to respond to your enquiry and
          to route it to the right team (for example, chauffeur onboarding
          versus partnership versus investor relations). We use aggregate
          analytics, where enabled, to understand how the site is used and
          to improve its content and performance. We do not use
          contact-form data for automated decision-making.
        </p>
      </PolicySection>

      <PolicySection title="4. Third-party processors">
        <p>
          Depending on configuration, this site may send data to: Formspree
          (form submission handling), Plausible or Google Analytics
          (aggregate analytics), and standard hosting/CDN infrastructure.
          Each operates under its own privacy policy and terms; we
          configure them to collect no more than is necessary for the
          purpose described above.
        </p>
      </PolicySection>

      <PolicySection title="5. Data retention">
        <p>
          Contact-form submissions are retained only as long as needed to
          respond to your enquiry and for a reasonable period afterward for
          record-keeping, after which they are deleted or anonymized. You
          can ask us to delete information you have submitted at any time
          (see &quot;Contact&quot; below).
        </p>
      </PolicySection>

      <PolicySection title="6. Your choices">
        <p>
          You can decline to submit the contact form and instead email us
          directly. If analytics is enabled on this deployment, you can use
          your browser&apos;s &quot;Do Not Track&quot; or privacy settings,
          or an ad/tracker blocker, to limit collection; this will not
          affect your ability to browse the site.
        </p>
      </PolicySection>

      <PolicySection title="7. Children's privacy">
        <p>
          This site is not directed at children, and we do not knowingly
          collect information from children through the contact form.
        </p>
      </PolicySection>

      <PolicySection title="8. Changes to this policy">
        <p>
          This is an initial, good-faith policy for an early-stage
          marketing site and will be revised as the site and the
          GoChauffeur product evolve — in particular once GoChauffeur adds
          accounts, bookings or payments, which will be covered by its own
          policy, not this one. We will update the &quot;Last
          updated&quot; date above when this policy changes.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact">
        <p>
          Questions about this policy, or requests to access or delete
          information you&apos;ve submitted, can be sent to{' '}
          <a href={`mailto:${contact.fallbackEmail}`} className="text-forest underline underline-offset-4 hover:text-ink">
            {contact.fallbackEmail}
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
