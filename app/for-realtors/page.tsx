import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Star, Shield, Clock, Key, Home, Users, DollarSign, Mail } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'For Real Estate Agents & Realtors — Locksmith Partner',
  description:
    'Partner with Daniel Cerda Locksmith for your Sanford, FL clients. New homeowner rekey packages, same-day service, and priority scheduling for real estate agents across Seminole County.',
  path: '/for-realtors',
  keywords: [
    'locksmith for realtors sanford fl',
    'new homeowner rekey package seminole county',
    'real estate locksmith partner florida',
    'locksmith referral program sanford',
    'rekey locks after closing sanford fl',
    'locksmith for property managers florida',
  ],
})

const packageFeatures = [
  'Rekey up to 5 lock cylinders (front door, back door, garage, side door, deadbolt)',
  'All new keys cut and tested on-site',
  'Written documentation provided for client records',
  'Certificate of rekeying available on request',
  'Completed same-day or next-day in most cases',
  'Available throughout Seminole County and Orange County',
]

const agentBenefits = [
  {
    icon: <Star className="w-6 h-6 text-gold-500" />,
    title: 'Elevate Your Client Experience',
    body: 'Handing a buyer a move-in-ready home includes knowing their locks are secure. Referring a licensed, insured locksmith is a zero-effort way to add real value at closing.',
  },
  {
    icon: <Clock className="w-6 h-6 text-gold-500" />,
    title: 'Priority Scheduling',
    body: 'Referral partners receive priority booking. Closing-day and next-day appointments are held available for referred clients — no waiting weeks.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-gold-500" />,
    title: 'Fixed, Transparent Pricing',
    body: 'Your clients receive the same quoted price every time — no hidden fees, no surprise add-ons. You can quote it to them with confidence before we arrive.',
  },
  {
    icon: <Shield className="w-6 h-6 text-gold-500" />,
    title: 'Florida Licensed & Insured',
    body: 'Daniel Cerda Locksmith is fully licensed through Florida DACS and carries general liability insurance. You are never putting your reputation on the line by referring us.',
  },
  {
    icon: <Users className="w-6 h-6 text-gold-500" />,
    title: 'Your Clients Become Your Advocates',
    body: 'A smooth, professional rekeying experience reflects on the agent who referred it. Clients remember the details that made moving in seamless.',
  },
  {
    icon: <Home className="w-6 h-6 text-gold-500" />,
    title: 'Works for Property Managers Too',
    body: 'Managing rental units? We offer volume rekeying pricing for property managers with recurring needs. One call handles multiple units across Seminole County.',
  },
]

const process = [
  {
    step: '01',
    title: 'Refer Your Client',
    body: 'Send your client our contact info or have them mention your name when they call. No forms, no paperwork on your end.',
  },
  {
    step: '02',
    title: 'We Schedule Directly',
    body: 'We contact your client, confirm the service, and book a same-day or next-day appointment that fits around the closing schedule.',
  },
  {
    step: '03',
    title: 'Service & Documentation',
    body: 'Our technician rekeys the property, provides all new keys, and issues a service record your client can file with their home paperwork.',
  },
  {
    step: '04',
    title: 'You Look Great',
    body: 'Your client moves into a secured home. They remember the agent who thought of every detail — and they refer you to their network.',
  },
]

const faqs = [
  {
    q: 'How much does the new homeowner rekey package cost?',
    a: 'The standard package — rekeying up to 5 exterior lock cylinders — starts at $149. Final price depends on the number of cylinders. We always quote the exact amount before starting.',
  },
  {
    q: 'How quickly can you schedule after closing?',
    a: 'Referred clients receive priority scheduling. Same-day or next-day service is available throughout Seminole County in most cases. Closing-day appointments can often be arranged with 24-hour notice.',
  },
  {
    q: 'Do you serve areas outside Sanford?',
    a: 'Yes. We serve all of Seminole County including Lake Mary, Longwood, Oviedo, Winter Springs, and Casselberry. We also cover parts of Orange County and Volusia County.',
  },
  {
    q: 'Can I give my clients a printed referral card?',
    a: `Absolutely. Contact us at ${SITE.email} and we will send you a co-branded referral card (digital or print-ready) with your name and our contact info.`,
  },
  {
    q: 'Do you offer commercial locksmith services for investment properties?',
    a: 'Yes. Beyond residential rekeying we provide master key systems, access control, and commercial lock installation for multi-unit properties and investment portfolios.',
  },
]

export default function ForRealtorsPage() {
  return (
    <>
      {/* Structured data for this partnership page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'New Homeowner Rekey Package — Realtor Partner Program',
            description:
              'Priority locksmith rekeying service for real estate agents and property managers in Sanford, FL and Seminole County. Same-day scheduling, transparent pricing, Florida-licensed technicians.',
            provider: {
              '@type': 'LocalBusiness',
              name: SITE.name,
              url: SITE.url,
              telephone: SITE.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sanford',
                addressRegion: 'FL',
                postalCode: '32773',
                addressCountry: 'US',
              },
            },
            areaServed: ['Seminole County, FL', 'Orange County, FL', 'Sanford, FL', 'Lake Mary, FL'],
            audience: {
              '@type': 'Audience',
              audienceType: 'Real Estate Agents, Property Managers, Realtors',
            },
            offers: {
              '@type': 'Offer',
              name: 'New Homeowner Rekey Package',
              price: '149',
              priceCurrency: 'USD',
              description: 'Rekey up to 5 lock cylinders, all new keys, written documentation.',
            },
          }),
        }}
      />

      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'For Realtors & Property Managers' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">Referral Partner Program</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Locksmith Sanford Realtors Trust
            </h1>
            <p className="text-gray-300 text-xl">
              Give every buyer a move-in-ready home with secured, rekeyed locks. Same-day service, fixed pricing, Florida-licensed technicians — and your clients remember who referred them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={SITE.phoneHref}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call to Set Up Referral
              </a>
              <a
                href={`mailto:${SITE.email}?subject=Realtor Partner Program — ${SITE.name}`}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Homeowner Package */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Most Popular</span>
              <h2 className="section-title">New Homeowner Rekey Package</h2>
              <p className="text-gray-600 mb-6">
                Every home changes hands with keys that have been copied, shared, and distributed to contractors, previous owners, real estate agents, and cleaning crews. The only way to guarantee a clean key record is rekeying — and it should happen before your client sleeps in their new home.
              </p>
              <p className="text-gray-600 mb-8">
                Our package covers the complete exterior — up to 5 lock cylinders — with all new keys cut on-site and a written service record your client can file with their home documents.
              </p>
              <div className="space-y-3 mb-8">
                {packageFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary-950 text-white rounded-xl px-5 py-3 text-center">
                  <div className="text-gold-400 text-2xl font-bold">$149</div>
                  <div className="text-gray-400 text-xs">starting price</div>
                </div>
                <div className="text-sm text-gray-500">
                  Up to 5 cylinders · All new keys · Same-day available
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-primary-950 text-lg mb-5 flex items-center gap-2">
                <Key className="w-5 h-5 text-gold-500" />
                Why Rekeying at Closing Matters
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong className="text-gray-900">The average home sale involves 8–12 key holders</strong> — listing agents, showing agents, inspectors, appraisers, contractors, and the previous owner. None of these keys are collected at closing.
                </p>
                <p>
                  Rekeying renders all previous keys useless without replacing the lock hardware. It takes 15–20 minutes per cylinder and costs a fraction of lock replacement.
                </p>
                <p>
                  <strong className="text-gray-900">Florida homeowner's insurance</strong> may require proof of rekeying after a property transfer. Our service record satisfies this documentation requirement.
                </p>
                <p>
                  Some agents include the rekeying cost as a closing gift. Others pass the referral and let the client handle it. Either way, we make the agent look thorough.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <a
                  href={SITE.phoneHref}
                  className="btn-primary w-full justify-center flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Why Partner With Us</span>
            <h2 className="section-title">Built for How Agents Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentBenefits.map((b) => (
              <div key={b.title} className="card group hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4">{b.icon}</div>
                <h3 className="font-bold text-primary-950 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How the Referral Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-primary-950 text-gold-400 rounded-2xl flex items-center justify-center text-xl font-black mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-primary-950 mb-2 text-sm">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-primary-950 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label text-gold-400">Service Coverage</span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Covering Every Listing in Seminole County
              </h2>
              <p className="text-gray-300 mb-6">
                Whether your listings are in Sanford, Lake Mary, Longwood, Oviedo, Winter Springs, or Casselberry — we cover the entire Seminole County market and parts of Orange and Volusia Counties.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  'Sanford', 'Lake Mary', 'Longwood', 'Oviedo',
                  'Winter Springs', 'Casselberry', 'DeBary', 'Heathrow',
                  'Geneva', 'Chuluota', 'Orange County (partial)', 'Volusia County (partial)',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 border border-primary-800">
              <h3 className="font-bold text-white text-xl mb-2">Ready to Partner?</h3>
              <p className="text-gray-400 text-sm mb-6">
                No sign-up, no contracts. Call or email us to set up the referral arrangement and we will take it from there.
              </p>
              <div className="space-y-3">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 w-full px-5 py-3.5 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Realtor Partner Program`}
                  className="flex items-center gap-3 w-full px-5 py-3.5 border border-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {SITE.email}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Send a message via contact form
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-950 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 shadow-card p-5"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm" itemProp="name">
                    {f.q}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                      {f.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
