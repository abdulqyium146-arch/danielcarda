'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'

const reasons = [
  {
    number: '01',
    title: 'Local Sanford Locksmith',
    description: 'We\'re based right here in Sanford at 151 Wildwood Dr. No dispatch centers or out-of-state franchises — you\'re getting a real local professional who knows your community.',
  },
  {
    number: '02',
    title: 'Truly 24/7 — Every Day of the Year',
    description: 'We don\'t have limited "emergency" hours. Our phone is answered every single minute of every single day, including Thanksgiving, Christmas, and every holiday. Emergencies don\'t take breaks.',
  },
  {
    number: '03',
    title: 'Upfront, Honest Pricing',
    description: 'We quote you the full price before we start any work. No surprises, no bait-and-switch pricing, no mysterious fees. What we say is what you pay.',
  },
  {
    number: '04',
    title: 'Non-Destructive Entry First',
    description: 'Our technicians are trained in non-destructive lock opening techniques. We always try the least invasive method first to protect your property.',
  },
  {
    number: '05',
    title: 'Full-Service Locksmith',
    description: 'One call handles everything — car lockouts, home rekeying, business security, smart lock installation, key programming. We carry it all in our fully stocked vehicles.',
  },
  {
    number: '06',
    title: 'Perfect 5.0-Star Rating',
    description: '14 verified Google reviews — every single one a 5-star. Our reputation is built one satisfied customer at a time, and we take every review seriously.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="The Daniel Cerda Difference"
          title="Why Sanford Trusts Us"
          subtitle="There are many locksmiths in Central Florida. Here's why residents and businesses consistently choose Daniel Cerda Locksmith."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl font-bold text-gold-400/40 mb-3 leading-none">{reason.number}</div>
              <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={SITE.phoneHref}
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5" />
            Call Us Now — {SITE.phone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
