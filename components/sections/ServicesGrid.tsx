'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  AlertCircle, Home, Building2, Car, CarFront, DoorOpen,
  RefreshCw, Wrench, ShieldCheck, Copy, KeySquare, Smartphone, KeyRound, ArrowRight,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const serviceCards = [
  {
    slug: 'emergency-locksmith',
    title: 'Emergency Locksmith',
    description: '24/7 rapid response for any lock emergency. We arrive in 20-30 minutes.',
    icon: AlertCircle,
    badge: '24/7',
    badgeColor: 'bg-emergency-600 text-white',
    featured: true,
  },
  {
    slug: 'residential-locksmith',
    title: 'Residential Locksmith',
    description: 'Complete home security solutions from lock installation to smart locks.',
    icon: Home,
    badge: 'Popular',
    badgeColor: 'bg-gold-500 text-primary-950',
    featured: true,
  },
  {
    slug: 'commercial-locksmith',
    title: 'Commercial Locksmith',
    description: 'Master key systems, access control, and high-security commercial locks.',
    icon: Building2,
    badge: null,
    badgeColor: '',
    featured: true,
  },
  {
    slug: 'automotive-locksmith',
    title: 'Automotive Locksmith',
    description: 'Car lockouts, key replacement, and transponder programming for all vehicles.',
    icon: Car,
    badge: 'Fast',
    badgeColor: 'bg-primary-700 text-white',
    featured: true,
  },
  {
    slug: 'car-lockout',
    title: 'Car Lockout',
    description: 'Locked out of your vehicle? Non-destructive entry in minutes.',
    icon: CarFront,
    badge: null,
    badgeColor: '',
    featured: false,
  },
  {
    slug: 'house-lockout',
    title: 'House Lockout',
    description: 'Fast, professional home lockout service day or night.',
    icon: DoorOpen,
    badge: null,
    badgeColor: '',
    featured: false,
  },
  {
    slug: 'rekeying',
    title: 'Lock Rekeying',
    description: 'Change your locks without replacing them. Great for new homeowners.',
    icon: RefreshCw,
    badge: 'Save Money',
    badgeColor: 'bg-emerald-600 text-white',
    featured: false,
  },
  {
    slug: 'lock-repair',
    title: 'Lock Repair',
    description: 'Fix stuck, broken, or damaged locks quickly and affordably.',
    icon: Wrench,
    badge: null,
    badgeColor: '',
    featured: false,
  },
  {
    slug: 'lock-installation',
    title: 'Lock Installation',
    description: 'Professional deadbolt and high-security lock installation.',
    icon: ShieldCheck,
    badge: null,
    badgeColor: '',
    featured: false,
  },
  {
    slug: 'key-duplication',
    title: 'Key Duplication',
    description: 'Accurate key copies for home, office, and vehicle keys.',
    icon: Copy,
    badge: null,
    badgeColor: '',
    featured: false,
  },
  {
    slug: 'car-key-replacement',
    title: 'Car Key Replacement',
    description: 'Lost car keys cut and programmed on-site. Much less than the dealership.',
    icon: KeySquare,
    badge: 'Save $$$',
    badgeColor: 'bg-emerald-600 text-white',
    featured: false,
  },
  {
    slug: 'smart-lock-installation',
    title: 'Smart Lock Installation',
    description: 'Install and configure smart locks for keyless, app-controlled access.',
    icon: Smartphone,
    badge: null,
    badgeColor: '',
    featured: false,
  },
  {
    slug: 'business-lockout',
    title: 'Business Lockout',
    description: 'Priority response commercial lockout service to get you back to work fast.',
    icon: KeyRound,
    badge: null,
    badgeColor: '',
    featured: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
}

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-custom">
        <SectionHeader
          label="What We Do"
          title="Complete Locksmith Services in Sanford, FL"
          subtitle="From emergency lockouts to complete security upgrades, Daniel Cerda Locksmith handles every lock and key need across Seminole County."
          id="services-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {serviceCards.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block card h-full hover:border-primary-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-primary-700" />
                    </div>
                    {service.badge && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-primary-950 text-base mb-2 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-700 text-sm font-semibold group-hover:text-primary-900 mt-auto">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
