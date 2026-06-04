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
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema'
import { homepageFAQs } from '@/data/faqs'
import { reviews } from '@/data/reviews'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Locksmith Near Me Sanford FL | Daniel Cerda — 24/7, 20-Min Response',
  description:
    'Looking for a locksmith near you in Sanford, FL? Daniel Cerda Locksmith is your local licensed 24/7 locksmith — car lockouts, home lockouts, rekeying, car key replacement, smart locks. 20-minute response. Licensed & insured. Call (855) 633-0750.',
  keywords:
    'locksmith near me, locksmith sanford fl, emergency locksmith near me, 24 hour locksmith near me, car locksmith near me, car key replacement near me, locksmith close to me, mobile locksmith near me, residential locksmith near me, commercial locksmith near me, lock repair near me, key duplication near me, local locksmith, auto locksmith near me, locksmith near me open now',
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: 'Locksmith Near Me Sanford FL | Daniel Cerda — 24/7',
    description:
      'Local licensed locksmith in Sanford, FL. Car lockouts, home rekeying, key replacement, smart locks. 20-30 minute response. Call (855) 633-0750.',
    url: SITE.url,
    type: 'website',
  },
}

export default function HomePage() {
  const faqSchema = buildFAQSchema(homepageFAQs)
  // Pass real reviews so the JSON-LD includes aggregateRating + review array.
  // Nested reviews don't require itemReviewed — Google validates them correctly.
  const localBusinessSchema = buildLocalBusinessSchema(reviews.slice(0, 3))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
