import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Daniel Cerda Locksmith. Learn how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
  noIndex: false,
})

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <>
      <section className="hero-gradient py-14">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} light className="mb-6" />
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-950 prose-p:text-gray-700 prose-li:text-gray-700">
            <p>
              {SITE.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our locksmith services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (phone, email, address)</li>
              <li>Service request details and location information</li>
              <li>Payment information (processed securely through third-party processors)</li>
              <li>Communications you send us via phone, email, or contact forms</li>
            </ul>

            <p>We also automatically collect certain technical information when you visit our website:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website information</li>
              <li>Device and operating system information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, schedule, and complete locksmith services</li>
              <li>Communicate with you about appointments and service updates</li>
              <li>Process payments and send invoices or receipts</li>
              <li>Respond to your questions and support requests</li>
              <li>Improve our services and website experience</li>
              <li>Send occasional promotional communications (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist our operations (payment processors, scheduling software)</li>
              <li>Law enforcement or government authorities when required by law</li>
              <li>Professional advisors (attorneys, accountants) under confidentiality obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to use caution when sharing sensitive information online.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our services constitutes acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> <a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><strong>Address:</strong> {SITE.address.display}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
