import type { Metadata } from 'next'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { buildFAQSchema } from '@/lib/schema'
import { homepageFAQs, serviceAreaFAQs, eeAtFAQs } from '@/data/faqs'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'Locksmith FAQ — Frequently Asked Questions',
  description:
    'Get answers to common locksmith questions for Sanford, FL residents. Pricing, services, response times, licensing, and more from Daniel Cerda Locksmith.',
  path: '/faq',
  keywords: [
    'locksmith faq sanford fl',
    'locksmith questions sanford florida',
    'how much does a locksmith cost sanford fl',
    'locksmith prices sanford',
  ],
})

const additionalFAQs = [
  {
    question: 'Can a locksmith open a safe?',
    answer:
      'Yes, depending on the type of safe. We can open many residential and small commercial safes. Highly specialized or very large commercial safes may require specific safe-cracking equipment. Call us to discuss your specific situation.',
    category: 'services',
  },
  {
    question: 'What should I do if my key breaks inside the lock?',
    answer:
      'Do not try to pull the key out with pliers — this often pushes it further in. Call a locksmith immediately. We have professional broken key extraction tools that remove the key in most cases without damaging the lock.',
    category: 'general',
  },
  {
    question: 'How do I know if a locksmith is legitimate and not a scammer?',
    answer:
      'A legitimate locksmith will arrive in a marked vehicle (or professional appearance), provide identification, quote you the price BEFORE starting work, give you an itemized receipt, and have a local address. Beware of companies that quote a very low price on the phone and then inflate it dramatically on-site. Daniel Cerda Locksmith is fully licensed by the state of Florida — ask to see our license.',
    category: 'general',
  },
  {
    question: 'Is it worth upgrading to high-security locks?',
    answer:
      'For many homeowners and businesses in Sanford, yes. High-security locks like Medeco and Mul-T-Lock are significantly more resistant to picking, bumping, and key duplication. If you have high-value property or security concerns, the investment is worthwhile. We provide free security assessments.',
    category: 'residential',
  },
  {
    question: 'How long does a smart lock battery last?',
    answer:
      'Most smart locks use AA batteries and last 6-12 months with normal use. You will receive low battery warnings through the app. Smart locks also typically have a physical key backup and/or emergency USB power port so you are never truly locked out.',
    category: 'residential',
  },
  {
    question: 'Can you make keys for mailbox or storage unit locks?',
    answer:
      'Yes. We offer key duplication and replacement for mailbox keys, storage unit locks, padlocks, and many specialty keys. Some HOA mailbox systems require specific coordination — call us to discuss.',
    category: 'services',
  },
]

const allFAQs = [...homepageFAQs, ...additionalFAQs, ...eeAtFAQs, ...serviceAreaFAQs]

export default function FAQPage() {
  const faqSchema = buildFAQSchema(allFAQs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'FAQ' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">Got Questions?</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-xl">
              Answers to the most common locksmith questions from Sanford, FL residents and businesses. Can&apos;t find your answer?{' '}
              <a href={SITE.phoneHref} className="text-gold-400 font-bold hover:text-gold-300">
                Call us directly.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* General FAQs */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">General Questions</h2>
              <div className="space-y-4">
                {[...homepageFAQs, ...additionalFAQs.filter((f) => f.category === 'general')].map(
                  (faq, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-xl p-5 shadow-card"
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <h3
                        className="font-semibold text-gray-900 mb-2 text-base"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Residential FAQs */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Residential Questions</h2>
              <div className="space-y-4">
                {additionalFAQs
                  .filter((f) => f.category === 'residential')
                  .map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-xl p-5 shadow-card"
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2 text-base" itemProp="name">
                        {faq.question}
                      </h3>
                      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Service Questions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Services & Pricing</h2>
              <div className="space-y-4">
                {additionalFAQs
                  .filter((f) => f.category === 'services')
                  .map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-xl p-5 shadow-card"
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2 text-base" itemProp="name">
                        {faq.question}
                      </h3>
                      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Trust & Verification FAQs */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Trust, Licensing & Safety</h2>
              <div className="space-y-4">
                {eeAtFAQs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-5 shadow-card"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 text-base" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Area FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Service Area Questions</h2>
              <div className="space-y-4">
                {serviceAreaFAQs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-5 shadow-card"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 text-base" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
