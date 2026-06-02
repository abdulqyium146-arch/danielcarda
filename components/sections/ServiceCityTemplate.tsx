import Link from 'next/link'
import { Phone, CheckCircle, Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Reviews } from '@/components/sections/Reviews'
import { SITE } from '@/lib/constants'
import type { Service } from '@/data/services'
import type { ServiceArea } from '@/data/service-areas'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'

interface Props {
  service: Service
  area: ServiceArea
  schemaJson: string
  breadcrumbSchema: string
}

function responseTime(area: ServiceArea) {
  return area.isPrimary ? '20 minutes or less' : '25–40 minutes'
}

export function ServiceCityTemplate({ service, area, schemaJson, breadcrumbSchema }: Props) {
  const relatedServices = services
    .filter((s) => s.slug !== service.slug && s.featured)
    .slice(0, 6)

  const otherCities = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: service.shortTitle, href: `/services/${service.slug}` },
              { label: area.city },
            ]}
            light
            className="mb-6"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emergency-600/20 border border-emergency-500/40 text-emergency-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <Clock className="w-4 h-4" />
              {area.isPrimary ? 'Home Base' : area.distance} · {responseTime(area)} response
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {service.title}{' '}
              <span className="text-gradient-gold">in {area.city}, FL</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Need {service.shortTitle.toLowerCase()} in {area.city}? Daniel Cerda Locksmith is
              your licensed, local expert — we reach {area.city} in{' '}
              <strong className="text-white">{responseTime(area)}</strong>, day or night, 365 days a year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneHref}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
              >
                <Phone className="w-5 h-5 animate-ring" />
                Call {SITE.phone}
              </a>
              <Link href="/contact" className="btn-outline-white py-4 px-8 flex items-center gap-2">
                Request Online
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary-950 mb-5">
                {service.shortTitle} Services in {area.city}, FL
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {area.city} residents and businesses rely on Daniel Cerda Locksmith for fast,
                professional {service.shortTitle.toLowerCase()} service. As a locally based
                locksmith in {area.county} County, we know {area.city}&apos;s neighborhoods and
                respond quickly — typically {responseTime(area)} after your call.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                {service.longDescription.split('\n\n')[0]}
              </p>

              {/* Benefits */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">
                Why {area.city} Residents Choose Daniel Cerda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-3 bg-surface rounded-xl">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Coverage */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">
                Areas We Cover in {area.city}
              </h3>
              <div className="bg-surface rounded-2xl p-6 mb-10">
                {area.neighborhoods.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {area.neighborhoods.slice(0, 6).map((n) => (
                      <div key={n} className="flex items-center gap-2 text-sm text-gray-700">
                        <MapPin className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                        {n}
                      </div>
                    ))}
                  </div>
                )}
                {area.landmarks.length > 0 && (
                  <p className="text-sm text-gray-500">
                    Near {area.landmarks.slice(0, 3).join(', ')} — and all surrounding neighborhoods.
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Serving ZIP codes: {area.zip.join(', ')}.
                </p>
              </div>

              {/* Process */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">
                How It Works in {area.city}
              </h3>
              <div className="space-y-4 mb-10">
                {service.process.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-surface rounded-xl">
                    <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-primary-950 mb-4">
                    {service.shortTitle} FAQ — {area.city}, FL
                  </h3>
                  <div className="space-y-4 mb-10">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-100 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                    <div className="border border-gray-100 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Do you serve all of {area.city}?
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Yes — we cover all ZIP codes in {area.city} ({area.zip.join(', ')}) and
                        serve neighborhoods including{' '}
                        {area.neighborhoods.slice(0, 3).join(', ')}
                        {area.neighborhoods.length > 3 ? ' and more' : ''}. Our average response
                        time is {responseTime(area)}.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* More services in this city */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">
                More Locksmith Services in {area.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/${area.slug}`}
                    className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-primary-200 hover:bg-primary-50 transition-all group"
                  >
                    <span className="font-medium text-gray-900 text-sm group-hover:text-primary-700">
                      {s.shortTitle} in {area.city}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA Card */}
              <div className="bg-primary-950 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-2">
                  Need {service.shortTitle} in {area.city}?
                </h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  We respond in {responseTime(area)}. Licensed, insured, upfront pricing.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="btn-primary w-full justify-center text-base py-3.5 flex items-center gap-2 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Send a Message
                </Link>
                {service.price && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-xs">Starting Price</p>
                    <p className="text-gold-400 font-bold text-lg">{service.price}</p>
                    <p className="text-gray-500 text-xs">Exact quote before work begins</p>
                  </div>
                )}
              </div>

              {/* Trust */}
              <div className="card space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Why Choose Us?</h4>
                {[
                  '✅ Florida Licensed & Insured',
                  `⚡ ${area.isPrimary ? '~20 min' : '25–40 min'} to ${area.city}`,
                  '⭐ 4.9★ Google Rating (163 Reviews)',
                  '💰 Upfront Transparent Pricing',
                  '🔧 Non-Destructive Methods First',
                  '📅 Available 24/7 — 365 Days',
                ].map((badge) => (
                  <p key={badge} className="text-sm text-gray-600">{badge}</p>
                ))}
              </div>

              {/* Same service, other cities */}
              <div className="card">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">
                  {service.shortTitle} in Other Cities
                </h4>
                <div className="space-y-1">
                  {otherCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/services/${service.slug}/${c.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-primary-700 border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {service.shortTitle} in {c.city}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* All areas */}
              <div className="card">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">All Service Areas</h4>
                <div className="space-y-1">
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-primary-700 border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {a.city}, FL
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <ContactCTA />
    </>
  )
}
