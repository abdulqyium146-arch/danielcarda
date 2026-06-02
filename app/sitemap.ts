import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'
import { blogPosts } from '@/data/blog-posts'

// Segmented sitemaps: Next.js generates a sitemap index at /sitemap.xml
// and individual sitemaps at /sitemap/0, /sitemap/1, etc.
export async function generateSitemaps() {
  return [
    { id: 0 }, // static & core pages
    { id: 1 }, // service pages
    { id: 2 }, // service-area pages
    { id: 3 }, // blog posts
    { id: 4 }, // service × city combo pages
  ]
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url
  const now = new Date()

  switch (id) {
    case 0:
      return [
        { url: base,                          lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
        { url: `${base}/services`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
        { url: `${base}/contact`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${base}/service-areas`,       lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${base}/about`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/faq`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${base}/blog`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
        { url: `${base}/html-sitemap`,        lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
        { url: `${base}/privacy-policy`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
        { url: `${base}/terms`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
      ]

    case 1:
      return services.map((s) => ({
        url: `${base}/services/${s.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: s.featured ? 0.92 : 0.82,
      }))

    case 2:
      return serviceAreas.map((a) => ({
        url: `${base}/service-areas/${a.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: a.isPrimary ? 0.9 : 0.82,
      }))

    case 3:
      return blogPosts.map((p) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: 'monthly' as const,
        priority: p.featured ? 0.72 : 0.62,
      }))

    case 4:
      return services.flatMap((s) =>
        serviceAreas.map((a) => ({
          url: `${base}/services/${s.slug}/${a.slug}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: a.isPrimary ? 0.85 : 0.75,
        }))
      )

    default:
      return []
  }
}
