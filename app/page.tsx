import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { EmergencyCTA } from '@/components/sections/EmergencyCTA'
import { TrustIndicators } from '@/components/sections/TrustIndicators'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection'
import { Reviews } from '@/components/sections/Reviews'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { MapSection } from '@/components/sections/MapSection'
import { buildFAQSchema } from '@/lib/schema'
import { homepageFAQs } from '@/data/faqs'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Daniel Cerda Locksmith | 24/7 Locksmith Sanford FL — Fast & Trusted',
  description:
    'Daniel Cerda Locksmith provides 24/7 emergency locksmith services in Sanford, FL and all of Seminole County. Licensed & insured. Car lockouts, rekeying, smart locks, key replacement. Call for 20-minute response.',
  keywords:
    'locksmith sanford fl, emergency locksmith sanford, 24 hour locksmith sanford florida, car lockout sanford, residential locksmith sanford fl, commercial locksmith sanford',
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: 'Daniel Cerda Locksmith | 24/7 Locksmith Sanford FL',
    description:
      'Licensed & insured locksmith serving Sanford, FL. Emergency lockouts, rekeying, smart locks. 20-30 minute response. Call now.',
    url: SITE.url,
    type: 'website',
  },
}

export default function HomePage() {
  const faqSchema = buildFAQSchema(homepageFAQs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <EmergencyCTA />
      <TrustIndicators />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <ServiceAreasSection />
      <Reviews />
      <FAQSection />
      <MapSection />
      <ContactCTA />
    </>
  )
}
