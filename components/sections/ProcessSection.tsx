'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    step: 1,
    icon: Phone,
    title: 'Call or Contact Us',
    description: 'Dial our number or submit a request online. We answer immediately — 24 hours a day. Describe your situation and your location.',
    detail: 'Avg. answer time: under 60 seconds',
    color: 'bg-primary-700',
  },
  {
    step: 2,
    icon: MapPin,
    title: 'We Dispatch Immediately',
    description: 'We identify the nearest available technician and dispatch them to your location right away. No hold music, no scheduling delays.',
    detail: 'Avg. arrival time: 20-30 minutes',
    color: 'bg-gold-500',
  },
  {
    step: 3,
    icon: CheckCircle,
    title: 'Problem Solved',
    description: 'Our licensed technician arrives, quotes you a fair price, and resolves your lock situation professionally. No hidden costs.',
    detail: 'Most jobs completed in under 30 min',
    color: 'bg-emerald-600',
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="process-heading">
      <div className="container-custom">
        <SectionHeader
          label="How It Works"
          title="Get Help in 3 Simple Steps"
          subtitle="Our process is designed to get you help as fast as possible with zero confusion."
          id="process-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary-300 via-gold-300 to-emerald-300" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10`}>
                  <Icon className="w-9 h-9 text-white" strokeWidth={1.8} />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{step.description}</p>
                <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
