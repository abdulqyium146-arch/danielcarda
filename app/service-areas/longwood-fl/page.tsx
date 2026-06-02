import type { Metadata } from 'next'
import { getAreaBySlug } from '@/data/service-areas'
import { AreaPageTemplate } from '@/components/sections/AreaPageTemplate'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import { notFound } from 'next/navigation'

const SLUG = 'longwood-fl'

export function generateMetadata(): Metadata {
  const area = getAreaBySlug(SLUG)
  if (!area) return {}
  return generateMeta({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${SLUG}`,
    keywords: area.keywords,
  })
}

export default function AreaPage() {
  const area = getAreaBySlug(SLUG)
  if (!area) notFound()

  const lbSchema = buildLocalBusinessSchema()
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Service Areas', url: `${SITE.url}/service-areas` },
    { name: `${area.city}, ${area.state}`, url: `${SITE.url}/service-areas/${SLUG}` },
  ])

  return (
    <AreaPageTemplate
      area={area}
      slug={SLUG}
      lbSchemaJson={JSON.stringify(lbSchema)}
      breadcrumbSchemaJson={JSON.stringify(breadcrumbSchema)}
    />
  )
}
