import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                     lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/services`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/contact`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/service-areas`,  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/about`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,            lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/reviews`,        lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/for-realtors`,   lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/html-sitemap`,   lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: s.featured ? 0.92 : 0.82,
  }))

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${base}/service-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: a.isPrimary ? 0.9 : 0.82,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: p.featured ? 0.72 : 0.62,
  }))

  const serviceCityPages: MetadataRoute.Sitemap = services.flatMap((s) =>
    serviceAreas.map((a) => ({
      url: `${base}/services/${s.slug}/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: a.isPrimary ? 0.85 : 0.75,
    }))
  )

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...blogPages,
    ...serviceCityPages,
  ]
}
