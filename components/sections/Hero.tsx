'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Shield, Clock, Star, MapPin, ChevronRight } from 'lucide-react'
import { SITE } from '@/lib/constants'

const trustBadges = [
  { icon: Shield, text: 'FL Licensed & Insured' },
  { icon: Clock, text: '20-Min Response' },
  { icon: Star, text: '5.0★ · 14 Reviews' },
  { icon: MapPin, text: 'Seminole County, FL' },
]

const serviceChips = [
  'Car Lockout',
  'House Lockout',
  'Lock Rekeying',
  'Key Replacement',
  'Commercial',
  'Smart Locks',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden bg-hero-pattern"
      aria-label="Hero section"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main electric-blue spotlight — top right */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-blue-500/[0.13] blur-[160px]" />
        {/* Secondary glow — mid left, behind content */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-[550px] h-[550px] rounded-full bg-primary-500/[0.10] blur-[130px]" />
        {/* Gold warmth accent — bottom right corner */}
        <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-amber-400/[0.08] blur-[90px]" />
        {/* Bottom fade for wave transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Subtle diagonal highlight beam */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Emergency badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-emergency-600/20 border border-emergency-500/40 text-emergency-400 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-emergency-500 rounded-full animate-pulse-slow" />
            24/7 Locksmith · Sanford &amp; Seminole County, FL
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-shadow-lg"
          >
            Sanford&apos;s{' '}
            <span className="text-gradient-gold">Most Trusted</span>{' '}
            Locksmith
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xl text-gray-300 leading-relaxed mb-5 max-w-xl"
          >
            Locked out of your car, home, or business? Need a rekey, new lock, or replacement key?
            Daniel Cerda Locksmith is your local, licensed locksmith in Sanford, FL — we respond in{' '}
            <strong className="text-white">20 minutes or less</strong>, day or night.
          </motion.p>

          {/* Service chips */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-2 mb-8"
          >
            {serviceChips.map((chip) => (
              <span
                key={chip}
                className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
          >
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-lg rounded-xl shadow-glow-gold transition-all duration-200 active:scale-95"
            >
              <Phone className="w-5 h-5 animate-ring" />
              Call {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-xl transition-all duration-200"
            >
              Get a Free Quote
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <Icon className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-white font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        >
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-white mb-1">5.0★</div>
            <div className="flex justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-300 text-sm">14 Google Reviews · Since 2008</p>
          </div>
          <div className="border-t border-white/20 pt-4 space-y-2.5 mb-4">
            {[
              'Car Lockout & Key Replacement',
              'House & Business Lockout',
              'Lock Rekeying & Installation',
              'Smart Lock Setup',
              '24/7 Emergency Response',
            ].map((service) => (
              <div key={service} className="flex items-center gap-2.5 text-sm">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-gray-200">{service}</span>
              </div>
            ))}
          </div>
          <a
            href={SITE.phoneHref}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-sm rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now — We&apos;re Open
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 800 0 400 40C200 60 80 80 0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
