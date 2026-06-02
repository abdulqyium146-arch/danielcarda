import Link from 'next/link'
import { Phone, CheckCircle, Clock, ArrowRight, ChevronRight } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { FAQSection } from '@/components/sections/FAQSection'
import { Reviews } from '@/components/sections/Reviews'
import { SITE } from '@/lib/constants'
import type { Service } from '@/data/services'
import { services } from '@/data/services'

interface ServicePageTemplateProps {
  service: Service
  schemaJson: string
  breadcrumbSchema: string
}

export function ServicePageTemplate({ service, schemaJson, breadcrumbSchema }: ServicePageTemplateProps) {
  const relatedServices = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3)

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
              { label: service.shortTitle },
            ]}
            light
            className="mb-6"
          />
          <div className="max-w-3xl">
            {service.responseTime && (
              <div className="inline-flex items-center gap-2 bg-emergency-600/20 border border-emergency-500/40 text-emergency-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <Clock className="w-4 h-4" />
                Avg. Response: {service.responseTime}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {service.title}{' '}
              <span className="text-gradient-gold">in Sanford, FL</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {service.description}
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
                About Our {service.shortTitle} Service
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 mb-10">
                {service.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              {/* Benefits */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">What&apos;s Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-3 bg-surface rounded-xl">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Process */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">How It Works</h3>
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

              {/* Service FAQs */}
              {service.faqs.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-primary-950 mb-4">
                    {service.shortTitle} FAQ
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-100 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA Card */}
              <div className="bg-primary-950 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-2">Need {service.shortTitle}?</h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Call us now for immediate service. We serve all of Sanford and Seminole County.
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
                    <p className="text-gray-500 text-xs">Exact price provided before work begins</p>
                  </div>
                )}
              </div>

              {/* Trust badges */}
              <div className="card space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Why Choose Us?</h4>
                {[
                  '✅ Florida Licensed & Insured',
                  '⚡ 20-30 Min Response Time',
                  '⭐ 4.9★ Google Rating (163 Reviews)',
                  '💰 Upfront, Transparent Pricing',
                  '🔧 Non-Destructive Methods First',
                  '📅 Available 24/7 — 365 Days',
                ].map((badge) => (
                  <p key={badge} className="text-sm text-gray-600">{badge}</p>
                ))}
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Related Services</h4>
                  <div className="space-y-2">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-primary-700 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {s.shortTitle}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="flex items-center gap-1 text-xs text-primary-600 font-semibold hover:text-primary-800 pt-1"
                    >
                      All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <ContactCTA />
    </>
  )
}
