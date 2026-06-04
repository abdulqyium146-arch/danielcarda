import Link from 'next/link'
import { Phone, CheckCircle, Clock, ArrowRight, ChevronRight, MapPin } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { FAQSection } from '@/components/sections/FAQSection'
import { Reviews } from '@/components/sections/Reviews'
import { FactBlock } from '@/components/ui/FactBlock'
import { QuickAnswer } from '@/components/ui/QuickAnswer'
import { SITE } from '@/lib/constants'
import { buildHowToSchema } from '@/lib/schema'
import type { Service } from '@/data/services'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'

interface ServicePageTemplateProps {
  service: Service
  schemaJson: string
  breadcrumbSchema: string
}

export function ServicePageTemplate({ service, schemaJson, breadcrumbSchema }: ServicePageTemplateProps) {
  const relatedServices = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3)

  // Cross-category suggestions — show 3 from other categories
  const crossServices = services
    .filter((s) => s.slug !== service.slug && s.category !== service.category && s.featured)
    .slice(0, 3)

  const howToSchema = JSON.stringify(buildHowToSchema(service))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />

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
              {/* Citation-ready fact panel — parsed by AI crawlers and voice engines */}
              <FactBlock
                title={`${service.shortTitle} — Quick Facts`}
                variant={service.category === 'emergency' ? 'emergency' : 'default'}
                facts={[
                  { label: 'Service Type',    value: service.shortTitle },
                  { label: 'Starting Price',  value: service.price },
                  ...(service.responseTime ? [{ label: 'Response Time', value: service.responseTime }] : []),
                  { label: 'Availability',    value: '24/7 — 365 Days a Year' },
                  { label: 'Coverage Area',   value: '30 miles of Sanford, FL' },
                  { label: 'License',         value: 'Florida Licensed & Insured' },
                ]}
              />

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

              {/* Citation-ready Q&A snippets — optimized for AI Overviews and LLM extraction */}
              <div className="mt-10" data-speakable aria-label="Quick answers about this service">
                <h3 className="text-xl font-bold text-primary-950 mb-4">Quick Answers</h3>
                <QuickAnswer
                  question={`What is ${service.shortTitle} and when do I need it?`}
                  answer={service.description}
                  icon="❓"
                />
                <QuickAnswer
                  question={`How much does ${service.shortTitle} cost in Sanford, FL?`}
                  answer={`${service.shortTitle} in Sanford, FL starts at ${service.price}. Daniel Cerda Locksmith always provides an exact quote before beginning any work — no hidden fees, no bait-and-switch pricing. The final cost depends on the specific lock type, vehicle, or situation involved.`}
                  icon="💰"
                />
                {service.responseTime && (
                  <QuickAnswer
                    question={`How long does ${service.shortTitle} take in Sanford?`}
                    answer={`Our average response time for ${service.shortTitle.toLowerCase()} in Sanford is ${service.responseTime}. We have technicians stationed throughout Seminole County to minimize wait time. Once on site, most jobs are completed within 15–45 minutes depending on the complexity.`}
                    icon="⏱️"
                  />
                )}
                <QuickAnswer
                  question={`Is Daniel Cerda Locksmith licensed for ${service.shortTitle} in Florida?`}
                  answer={`Yes. Daniel Cerda is a Florida-licensed locksmith with 15+ years of experience providing ${service.shortTitle.toLowerCase()} throughout Sanford and Seminole County. All technicians are background-checked, fully insured, and trained in the latest methods. License verifiable through the Florida Department of Agriculture and Consumer Services.`}
                  icon="✅"
                />
              </div>
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
                  '⭐ 5.0★ Google Rating (14 Reviews)',
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

              {/* Cross-category services */}
              {crossServices.length > 0 && (
                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">You May Also Need</h4>
                  <div className="space-y-2">
                    {crossServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-primary-700 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {s.shortTitle}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve for This Service */}
      <section className="bg-surface py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-primary-950 mb-2">
            {service.shortTitle} Available Across Seminole County
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We provide {service.shortTitle.toLowerCase()} in every city we serve. Click your city for local details and response times.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/services/${service.slug}/${area.slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-gray-100 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all group text-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-primary-800 font-medium">
                  {area.city}, FL
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <ContactCTA />
    </>
  )
}
