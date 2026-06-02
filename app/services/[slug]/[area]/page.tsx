import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'
import { ServiceCityTemplate } from '@/components/sections/ServiceCityTemplate'
import { buildServiceCitySchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema'
import { SITE } from '@/lib/constants'

interface Props {
  params: { slug: string; area: string }
}

export function generateStaticParams() {
  return services.flatMap((service) =>
    serviceAreas.map((area) => ({
      slug: service.slug,
      area: area.slug,
    }))
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  const area = serviceAreas.find((a) => a.slug === params.area)
  if (!service || !area) return {}

  const rt = area.isPrimary ? '20 minutes' : '25–40 minutes'
  const title = `${service.shortTitle} in ${area.city}, FL | ${SITE.name}`
  const description = `Need ${service.shortTitle.toLowerCase()} in ${area.city}, FL? Daniel Cerda Locksmith responds in ${rt}. Licensed, insured, available 24/7. Call now.`

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${service.shortTitle.toLowerCase()} ${area.city.toLowerCase()} fl`,
      `${service.shortTitle.toLowerCase()} ${area.city.toLowerCase()} florida`,
      `locksmith ${area.city.toLowerCase()} fl`,
      `24/7 locksmith ${area.city.toLowerCase()}`,
      ...service.keywords.slice(0, 3),
      ...area.keywords.slice(0, 3),
    ].join(', '),
    alternates: {
      canonical: `${SITE.url}/services/${params.slug}/${params.area}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/services/${params.slug}/${params.area}`,
      type: 'website',
    },
  }
}

export default function ServiceCityPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  const area = serviceAreas.find((a) => a.slug === params.area)
  if (!service || !area) notFound()

  const rt = area.isPrimary ? '20 minutes' : '25–40 minutes'

  const serviceSchema = buildServiceCitySchema(service, area)
  const faqSchema = buildFAQSchema([
    ...service.faqs,
    {
      question: `How quickly can you reach ${area.city} for ${service.shortTitle.toLowerCase()}?`,
      answer: `We typically arrive in ${rt} from our Sanford base. We cover all of ${area.city} including ZIP codes ${area.zip.join(', ')}.`,
    },
  ])
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Services', url: `${SITE.url}/services` },
    { name: service.shortTitle, url: `${SITE.url}/services/${params.slug}` },
    { name: `${area.city}, FL`, url: `${SITE.url}/services/${params.slug}/${params.area}` },
  ])

  return (
    <ServiceCityTemplate
      service={service}
      area={area}
      schemaJson={JSON.stringify([serviceSchema, faqSchema])}
      breadcrumbSchema={JSON.stringify(breadcrumbSchema)}
    />
  )
}
