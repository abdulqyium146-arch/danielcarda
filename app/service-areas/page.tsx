import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { serviceAreas } from '@/data/service-areas'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'Locksmith Service Areas in Central Florida',
  description:
    'Daniel Cerda Locksmith serves Sanford, Lake Mary, Longwood, Oviedo, DeBary, Winter Springs, and Casselberry FL. Fast 24/7 locksmith service throughout Seminole County.',
  path: '/service-areas',
  keywords: ['locksmith service areas sanford fl', 'seminole county locksmith', 'central florida locksmith'],
})

export default function ServiceAreasPage() {
  return (
    <>
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Service Areas' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">Where We Serve</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Locksmith Service Areas in Central Florida
            </h1>
            <p className="text-gray-300 text-xl">
              Based in Sanford, FL, Daniel Cerda Locksmith serves a 30-mile radius covering all of Seminole County and portions of Volusia and Orange Counties.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="card group hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-700" />
                  </div>
                  {area.isPrimary && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gold-500 text-primary-950">
                      Home Base
                    </span>
                  )}
                </div>
                <h2 className="font-bold text-primary-950 text-xl mb-1">
                  {area.city}, {area.state}
                </h2>
                <p className="text-primary-600 text-sm font-medium mb-3">{area.distance}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{area.description}</p>
                <div className="flex items-center text-primary-700 text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                  View Services in {area.city}
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-primary-950 mb-1">Not Sure if We Cover Your Area?</h3>
              <p className="text-gray-600 text-sm">
                Our primary service area covers approximately 30 miles from our Sanford, FL base. Call us at{' '}
                <a href={SITE.phoneHref} className="text-primary-700 font-semibold hover:text-primary-900">
                  {SITE.phone}
                </a>{' '}
                and we&apos;ll confirm coverage for your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
