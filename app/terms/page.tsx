import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'Terms of Service',
  description: 'Terms of Service for Daniel Cerda Locksmith. Review our service terms, policies, and conditions.',
  path: '/terms',
  noIndex: false,
})

export default function TermsPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <>
      <section className="hero-gradient py-14">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Terms of Service' }]} light className="mb-6" />
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-950 prose-p:text-gray-700 prose-li:text-gray-700">
            <p>
              These Terms of Service govern your use of {SITE.name}&apos;s website and locksmith services. By using our services, you agree to these terms. Please read them carefully.
            </p>

            <h2>Services</h2>
            <p>
              {SITE.name} provides professional locksmith services including but not limited to: residential lockout assistance, commercial lockout services, automotive lockout services, lock rekeying, lock installation, lock repair, key duplication, car key replacement, and smart lock installation.
            </p>
            <p>
              All services are subject to availability in our service area. We reserve the right to decline service at our discretion.
            </p>

            <h2>Pricing and Payment</h2>
            <ul>
              <li>We provide price quotes before beginning any work. Work will not commence until you agree to the quoted price.</li>
              <li>Additional charges may apply if the job scope expands beyond the initial assessment.</li>
              <li>Payment is due upon completion of service unless otherwise arranged.</li>
              <li>We accept cash and major credit/debit cards.</li>
              <li>All prices are in US dollars.</li>
            </ul>

            <h2>Customer Responsibilities</h2>
            <p>By requesting our services, you represent and warrant that:</p>
            <ul>
              <li>You are the legal owner of the property or vehicle, or you have explicit authorization from the owner to request locksmith services.</li>
              <li>You will provide accurate information about the location and nature of the lock/security issue.</li>
              <li>You will provide valid identification when requested, particularly for lockout services.</li>
              <li>You will not use our services for any unlawful purpose.</li>
            </ul>

            <h2>Identity Verification</h2>
            <p>
              For security purposes and to prevent unauthorized entry, we may require proof of identity and/or ownership before performing certain services. We reserve the right to refuse service if satisfactory verification cannot be provided.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              {SITE.name} carries comprehensive liability insurance. In the event of property damage caused by our technicians&apos; negligence during service, we will work with you to address the damage appropriately.
            </p>
            <p>
              We are not liable for: pre-existing damage to locks or property, damage resulting from customer requests to use forcible entry methods, indirect or consequential damages, or circumstances beyond our reasonable control.
            </p>
            <p>
              Our total liability shall not exceed the amount paid for the specific service that gave rise to the claim.
            </p>

            <h2>Warranty</h2>
            <p>
              We warranty our workmanship for 30 days from the date of service. This warranty covers defects in our work but does not cover wear and tear, damage from misuse, or issues unrelated to our service.
            </p>

            <h2>Cancellations</h2>
            <p>
              For scheduled non-emergency services, please notify us as soon as possible if you need to cancel or reschedule. For emergency services, a dispatch fee may apply if our technician is turned away upon arrival.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Seminole County, Florida.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a revised date.
            </p>

            <h2>Contact</h2>
            <p>Questions about these terms? Contact us:</p>
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
