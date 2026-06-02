import Link from 'next/link'
import { Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Reviews } from '@/components/sections/Reviews'
import { services } from '@/data/services'
import type { ServiceArea } from '@/data/service-areas'
import { SITE } from '@/lib/constants'

interface AreaPageTemplateProps {
  area: ServiceArea
  slug: string
  lbSchemaJson: string
  breadcrumbSchemaJson: string
}

const allCities = [
  { slug: 'sanford-fl', city: 'Sanford' },
  { slug: 'lake-mary-fl', city: 'Lake Mary' },
  { slug: 'longwood-fl', city: 'Longwood' },
  { slug: 'oviedo-fl', city: 'Oviedo' },
  { slug: 'debary-fl', city: 'DeBary' },
  { slug: 'winter-springs-fl', city: 'Winter Springs' },
  { slug: 'casselberry-fl', city: 'Casselberry' },
]

export function AreaPageTemplate({ area, slug, lbSchemaJson, breadcrumbSchemaJson }: AreaPageTemplateProps) {
  const featuredServices = services.filter((s) => s.featured)
  const otherCities = allCities.filter((c) => c.slug !== slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: lbSchemaJson }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchemaJson }} />

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: `${area.city}, ${area.state}` },
            ]}
            light
            className="mb-6"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>{area.distance}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Locksmith in{' '}
              <span className="text-gradient-gold">{area.city}, {area.state}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {area.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneHref}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call {SITE.phone}
              </a>
              <Link href="/contact" className="btn-outline-white py-4 px-8">
                Request Online
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
                Professional Locksmith Services in {area.city}, FL
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 mb-10">
                {area.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              {/* Landmarks */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">
                Local Landmarks Near Our Service Area
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {area.landmarks.map((landmark) => (
                  <div key={landmark} className="flex items-center gap-3 p-3 bg-surface rounded-xl">
                    <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{landmark}</span>
                  </div>
                ))}
              </div>

              {/* Featured Services */}
              <h3 className="text-2xl font-bold text-primary-950 mb-4">
                Services Available in {area.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/${slug}`}
                    className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:border-primary-200 hover:bg-primary-50 transition-all group"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-primary-700">
                        {service.shortTitle} in {area.city}
                      </p>
                      <p className="text-gray-400 text-xs">{service.price}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0 group-hover:text-primary-600" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA */}
              <div className="bg-primary-950 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-2">
                  Need a Locksmith in {area.city}?
                </h3>
                <p className="text-gray-300 text-sm mb-5">
                  Call now for immediate service. We respond in{' '}
                  {area.isPrimary ? '20-30' : '25-40'} minutes.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="btn-primary w-full justify-center py-3.5 flex items-center gap-2 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Request Online
                </Link>
              </div>

              {/* Coverage Details */}
              <div className="card">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Coverage Details</h4>
                <dl className="space-y-2.5 text-sm">
                  {[
                    { label: 'City', value: `${area.city}, ${area.state}` },
                    { label: 'County', value: `${area.county} County` },
                    { label: 'ZIP Codes', value: area.zip.join(', ') },
                    { label: 'Distance', value: area.distance },
                    { label: 'Population', value: area.population },
                    { label: 'Availability', value: '24/7/365' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <dt className="text-gray-500">{label}</dt>
                      <dd className="font-semibold text-gray-800 text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Other Areas */}
              <div className="card">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Other Service Areas</h4>
                <div className="space-y-1">
                  {otherCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-areas/${c.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-primary-700 border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {c.city}, FL
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
