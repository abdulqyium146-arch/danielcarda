'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { serviceAreas } from '@/data/service-areas'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ServiceAreasSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="areas-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="section-label">Where We Serve</span>
            <h2 id="areas-heading" className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
              Locksmith Services Throughout{' '}
              <span className="text-gold-600">Central Florida</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Based in Sanford, FL, Daniel Cerda Locksmith serves a 30-mile radius covering all of Seminole County and parts of Volusia and Orange Counties. Fast response, no matter where you are.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {serviceAreas.map((area, i) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                      <MapPin className="w-4 h-4 text-primary-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-primary-700 transition-colors">
                        {area.city}, {area.state}
                      </p>
                      <p className="text-gray-400 text-xs">{area.distance}</p>
                    </div>
                    {area.isPrimary && (
                      <span className="text-xs bg-gold-100 text-gold-700 font-semibold px-2 py-0.5 rounded-full">
                        Home Base
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Map placeholder + info */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl overflow-hidden border border-primary-100 relative">
              {/* Simple map-style visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-primary-900 font-bold text-xl">Sanford, FL</p>
                  <p className="text-primary-600 text-sm">Home Base</p>
                  <div className="mt-4 inline-block bg-white rounded-xl px-4 py-2 shadow-card">
                    <p className="text-gray-700 text-sm font-medium">30-mile service radius</p>
                    <p className="text-gray-500 text-xs">All of Seminole County</p>
                  </div>
                </div>
              </div>

              {/* Radius circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 border-2 border-primary-200/50 rounded-full" />
                <div className="absolute w-72 h-72 border-2 border-primary-100/50 rounded-full" />
                <div className="absolute w-96 h-96 border border-primary-100/30 rounded-full" />
              </div>
            </div>

            {/* Overlay card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card-hover p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-50 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">7 Cities Served</p>
                  <p className="text-gray-500 text-xs">Seminole & Volusia Counties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
