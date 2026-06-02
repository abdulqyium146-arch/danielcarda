import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Reviews } from '@/components/sections/Reviews'
import { generateMeta } from '@/lib/metadata'
import { buildAboutPageSchema } from '@/lib/schema'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'About Daniel Cerda Locksmith — Licensed Locksmith Sanford, FL',
  description:
    'Daniel Cerda is a Florida-licensed, ALOA-member locksmith with 15+ years of experience serving Sanford, FL and Seminole County. 4.9★ rated, fully insured, 10,000+ jobs completed.',
  path: '/about',
  keywords: [
    'about daniel cerda locksmith',
    'licensed locksmith sanford fl',
    'daniel cerda locksmith owner',
    'aloa member locksmith sanford',
    'experienced locksmith sanford florida',
    'insured locksmith sanford fl',
  ],
})

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We provide honest assessments and transparent pricing every time. If you don\'t need a new lock, we\'ll tell you.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Ongoing training and the latest equipment ensure we deliver the best results on every job.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'We\'re part of the Sanford community. We give back, support local businesses, and take pride in serving our neighbors.',
  },
  {
    icon: Clock,
    title: 'Responsive Service',
    description: 'Fast arrival and efficient work mean less disruption to your day. We respect your time.',
  },
]

const credentials = [
  'Florida State Licensed Locksmith',
  'Comprehensive Liability Insurance',
  'ALOA (Associated Locksmiths of America) Member',
  '15+ Years of Professional Experience',
  'Background Checked & Verified',
  'Ongoing Technical Training & Certification',
]

export default function AboutPage() {
  const aboutSchema = buildAboutPageSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'About' }]}
            light
            className="mb-6"
          />
          <div className="max-w-3xl">
            <span className="section-label text-gold-400">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              About Daniel Cerda Locksmith
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A licensed, community-trusted locksmith serving Sanford and all of Seminole County since 2008. Built on honesty, expertise, and a commitment to keeping our neighbors safe.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Background</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-5">
                Sanford&apos;s Locksmith Since 2008
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Daniel Cerda Locksmith was founded in Sanford, Florida with one simple mission: provide honest, professional locksmith services that the community can genuinely rely on. What began as a one-van operation has grown into one of Seminole County&apos;s most trusted locksmith services — built entirely on referrals, repeat customers, and a 4.9-star reputation earned one job at a time.
                </p>
                <p>
                  Daniel is a Florida licensed locksmith with over 15 years of hands-on experience in residential, commercial, and automotive locksmithing. His background includes training in the latest high-security lock systems, electronic access control, transponder key programming, and smart home security integration.
                </p>
                <p>
                  Every technician on our team shares Daniel&apos;s commitment to non-destructive entry, transparent pricing, and treating every customer&apos;s property with care and respect. We&apos;re not a national franchise or a dispatch service — we&apos;re a real local business staffed by local professionals who live and work in the Sanford area.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={SITE.phoneHref} className="btn-primary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <Link href="/contact" className="btn-secondary flex items-center gap-2">
                  Send a Message
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-primary-950 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '15+', label: 'Years of Experience' },
                  { value: '163+', label: 'Google Reviews' },
                  { value: '4.9★', label: 'Average Rating' },
                  { value: '10K+', label: 'Jobs Completed' },
                  { value: '24/7', label: 'Availability' },
                  { value: '7', label: 'Cities Served' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white rounded-2xl shadow-card">
                    <div className="text-2xl font-bold text-primary-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Credentials & Licensing</span>
              <h2 className="text-3xl font-bold text-primary-950 mb-5">
                Licensed, Insured & Verified
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                When you call Daniel Cerda Locksmith, you can be confident that you&apos;re working with a fully licensed and insured professional — not an unlicensed technician responding from a lead aggregator website.
              </p>
              <ul className="space-y-3">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="card">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EEAT Signals — Experience, Expertise, Authority, Trust */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="section-label">Experience &amp; Authority</span>
            <h2 className="text-3xl font-bold text-primary-950 mt-2 mb-4">
              Why You Can Trust Daniel Cerda Locksmith
            </h2>
            <p className="text-gray-600">
              We don&apos;t just say we&apos;re trustworthy — here&apos;s the verifiable evidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Florida State License',
                body: 'Daniel Cerda holds a current Florida locksmith license, verifiable through the Florida Department of Agriculture and Consumer Services.',
              },
              {
                icon: Award,
                title: 'ALOA Membership',
                body: 'Active member of the Associated Locksmiths of America (ALOA) — the largest professional locksmith association in the world.',
              },
              {
                icon: Star,
                title: '4.9★ on Google',
                body: 'Over 163 verified Google reviews from real Sanford-area customers. Our rating is earned through honest work, not purchased.',
              },
              {
                icon: CheckCircle,
                title: 'Background Verified',
                body: 'All technicians pass thorough background checks. You should always verify your locksmith — and we make that easy.',
              },
              {
                icon: Clock,
                title: '15+ Years Experience',
                body: 'Founded in 2008 and continuously operated in Sanford. Over 10,000 jobs completed across residential, commercial, and automotive services.',
              },
              {
                icon: Users,
                title: 'Local & Independent',
                body: "We're not a national franchise or call center. Every technician lives and works in Seminole County — your neighbor, not a stranger.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Service area cross-links from About */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold text-primary-950 mb-4 text-center">Serving All of Seminole County</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Locksmith in Sanford, FL', href: '/service-areas/sanford-fl' },
                { label: 'Locksmith in Lake Mary, FL', href: '/service-areas/lake-mary-fl' },
                { label: 'Locksmith in Longwood, FL', href: '/service-areas/longwood-fl' },
                { label: 'Locksmith in Oviedo, FL', href: '/service-areas/oviedo-fl' },
                { label: 'Locksmith in DeBary, FL', href: '/service-areas/debary-fl' },
                { label: 'Locksmith in Winter Springs, FL', href: '/service-areas/winter-springs-fl' },
                { label: 'Locksmith in Casselberry, FL', href: '/service-areas/casselberry-fl' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-700 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-4 py-2 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      <ContactCTA />
    </>
  )
}
