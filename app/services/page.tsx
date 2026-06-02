import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertCircle, Home, Building2, Car, CarFront, DoorOpen,
  RefreshCw, Wrench, ShieldCheck, Copy, KeySquare, Smartphone, KeyRound, ArrowRight,
} from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'All Locksmith Services',
  description:
    'Daniel Cerda Locksmith offers complete locksmith services in Sanford, FL — emergency lockouts, residential, commercial, automotive, rekeying, smart locks, and more. Licensed & insured.',
  path: '/services',
  keywords: ['locksmith services sanford fl', 'all locksmith services sanford', 'locksmith sanford florida'],
})

const serviceCategories = [
  {
    category: 'Emergency Services',
    description: 'Fast response when you need help right now — 24/7, 365 days a year.',
    color: 'emergency',
    services: [
      {
        slug: 'emergency-locksmith',
        title: 'Emergency Locksmith',
        description: 'Rapid-response locksmith for any emergency situation.',
        icon: AlertCircle,
        badge: '24/7',
      },
      {
        slug: 'car-lockout',
        title: 'Car Lockout',
        description: 'Locked out of your vehicle? We arrive in 20-30 minutes.',
        icon: CarFront,
        badge: 'Fast',
      },
      {
        slug: 'house-lockout',
        title: 'House Lockout',
        description: 'Can\'t get into your home? We respond day or night.',
        icon: DoorOpen,
        badge: null,
      },
      {
        slug: 'business-lockout',
        title: 'Business Lockout',
        description: 'Priority response for commercial lockout emergencies.',
        icon: KeyRound,
        badge: null,
      },
    ],
  },
  {
    category: 'Residential Services',
    description: 'Protect your home with professional-grade residential locksmith services.',
    color: 'primary',
    services: [
      {
        slug: 'residential-locksmith',
        title: 'Residential Locksmith',
        description: 'Complete home security solutions for Sanford homeowners.',
        icon: Home,
        badge: 'Popular',
      },
      {
        slug: 'rekeying',
        title: 'Lock Rekeying',
        description: 'Change who can access your home without buying new locks.',
        icon: RefreshCw,
        badge: null,
      },
      {
        slug: 'lock-installation',
        title: 'Lock Installation',
        description: 'Professional deadbolt and security lock installation.',
        icon: ShieldCheck,
        badge: null,
      },
      {
        slug: 'lock-repair',
        title: 'Lock Repair',
        description: 'Fix broken, stuck, or damaged locks quickly.',
        icon: Wrench,
        badge: null,
      },
      {
        slug: 'smart-lock-installation',
        title: 'Smart Lock Installation',
        description: 'Install and configure smart locks for keyless access.',
        icon: Smartphone,
        badge: null,
      },
      {
        slug: 'key-duplication',
        title: 'Key Duplication',
        description: 'Accurate spare keys cut on-site for your home or office.',
        icon: Copy,
        badge: null,
      },
    ],
  },
  {
    category: 'Commercial Services',
    description: 'Protect your business with commercial-grade security solutions.',
    color: 'primary',
    services: [
      {
        slug: 'commercial-locksmith',
        title: 'Commercial Locksmith',
        description: 'Master key systems, access control, and high-security locks.',
        icon: Building2,
        badge: null,
      },
    ],
  },
  {
    category: 'Automotive Services',
    description: 'Car lockouts, key replacement, and transponder programming.',
    color: 'primary',
    services: [
      {
        slug: 'automotive-locksmith',
        title: 'Automotive Locksmith',
        description: 'Full automotive locksmith service for all makes and models.',
        icon: Car,
        badge: null,
      },
      {
        slug: 'car-key-replacement',
        title: 'Car Key Replacement',
        description: 'Lost your car key? We cut and program new ones on-site.',
        icon: KeySquare,
        badge: 'Save $$$',
      },
    ],
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertCircle, Home, Building2, Car, CarFront, DoorOpen,
  RefreshCw, Wrench, ShieldCheck, Copy, KeySquare, Smartphone, KeyRound,
}

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Services' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">What We Do</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Locksmith Services in Sanford, FL
            </h1>
            <p className="text-gray-300 text-xl">
              From emergency lockouts to complete security upgrades — Daniel Cerda Locksmith handles every lock and key need across Seminole County.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {serviceCategories.map((cat) => (
            <div key={cat.category} className="mb-16 last:mb-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary-950 mb-2">{cat.category}</h2>
                <p className="text-gray-600">{cat.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group card hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-700" />
                        </div>
                        {service.badge && (
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gold-500 text-primary-950">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary-700 text-sm font-semibold group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
