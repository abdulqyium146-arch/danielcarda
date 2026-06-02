'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Clock, Star, Users, ThumbsUp } from 'lucide-react'

const indicators = [
  {
    icon: Shield,
    value: 'Licensed &',
    label: 'Fully Insured',
    description: 'Florida state licensed locksmith with comprehensive liability coverage.',
    color: 'text-primary-700',
    bg: 'bg-primary-50',
  },
  {
    icon: Clock,
    value: '20-30 Min',
    label: 'Response Time',
    description: 'We arrive faster than any competitor in the Sanford area.',
    color: 'text-gold-600',
    bg: 'bg-gold-50',
  },
  {
    icon: Star,
    value: '5.0★',
    label: '14 Reviews',
    description: 'Perfect 5-star rating on Google from real Sanford-area customers.',
    color: 'text-gold-500',
    bg: 'bg-gold-50',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Over 15 years serving Sanford and Seminole County families and businesses.',
    color: 'text-primary-700',
    bg: 'bg-primary-50',
  },
  {
    icon: Users,
    value: '10,000+',
    label: 'Customers Served',
    description: 'Trusted by thousands of homeowners, businesses, and drivers.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: ThumbsUp,
    value: '100%',
    label: 'Satisfaction Goal',
    description: 'We don\'t leave until the job is done right and you\'re satisfied.',
    color: 'text-primary-700',
    bg: 'bg-primary-50',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}

export function TrustIndicators() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="trust-heading">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="section-label">Why Choose Us</span>
          <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-primary-950">
            Sanford&apos;s Most Trusted Locksmith
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            When you need a locksmith, trust matters. Here&apos;s why thousands of families and businesses throughout Central Florida choose Daniel Cerda Locksmith.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                className="card group hover:border-primary-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className={`text-2xl font-bold ${item.color} mb-0.5`}>{item.value}</div>
                <div className="text-base font-semibold text-gray-800 mb-2">{item.label}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
