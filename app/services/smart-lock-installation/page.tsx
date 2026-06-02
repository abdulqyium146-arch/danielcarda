import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate'
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import { notFound } from 'next/navigation'

const SLUG = 'smart-lock-installation'

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG)
  if (!service) return {}
  return generateMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${SLUG}`,
    keywords: service.keywords,
  })
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG)
  if (!service) notFound()

  const serviceSchema = buildServiceSchema(service)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Services', url: `${SITE.url}/services` },
    { name: service.shortTitle, url: `${SITE.url}/services/${SLUG}` },
  ])
  const faqSchema = buildFAQSchema(service.faqs)
  const combinedSchema = JSON.stringify([serviceSchema, faqSchema])

  return (
    <ServicePageTemplate
      service={service}
      schemaJson={combinedSchema}
      breadcrumbSchema={JSON.stringify(breadcrumbSchema)}
    />
  )
}
