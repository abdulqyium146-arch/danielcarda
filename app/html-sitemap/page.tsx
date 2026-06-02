import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'
import { blogPosts } from '@/data/blog-posts'
import { generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Sitemap',
  description: `Complete sitemap for ${SITE.name} — find all service pages, city pages, and resources.`,
  path: '/html-sitemap',
  noIndex: false,
})

const staticLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

export default function HtmlSitemapPage() {
  return (
    <div className="bg-white py-16">
      <div className="container-custom max-w-5xl">
        <h1 className="text-3xl font-bold text-primary-950 mb-2">Site Map</h1>
        <p className="text-gray-500 mb-12">
          Complete directory of all pages on {SITE.name}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Main pages */}
          <div>
            <h2 className="text-lg font-bold text-primary-900 border-b border-gray-100 pb-2 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {staticLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-700 hover:text-primary-700 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-bold text-primary-900 border-b border-gray-100 pb-2 mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                  All Services →
                </Link>
              </li>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-700 hover:text-primary-700 transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h2 className="text-lg font-bold text-primary-900 border-b border-gray-100 pb-2 mb-4">Service Areas</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/service-areas" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                  All Service Areas →
                </Link>
              </li>
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="text-sm text-gray-700 hover:text-primary-700 transition-colors">
                    {a.city}, FL
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h2 className="text-lg font-bold text-primary-900 border-b border-gray-100 pb-2 mb-4">Blog</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                  All Articles →
                </Link>
              </li>
              {blogPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-sm text-gray-700 hover:text-primary-700 transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service × City Matrix */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-primary-950 mb-2">Service by City</h2>
          <p className="text-gray-500 text-sm mb-6">
            Dedicated pages for every service in every city we serve.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">Service</th>
                  {serviceAreas.map((a) => (
                    <th key={a.slug} className="text-left p-3 font-semibold text-gray-700 border border-gray-100 whitespace-nowrap">
                      {a.city}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.slug} className="hover:bg-primary-50/40 transition-colors">
                    <td className="p-3 border border-gray-100 font-medium text-gray-800">{s.shortTitle}</td>
                    {serviceAreas.map((a) => (
                      <td key={a.slug} className="p-3 border border-gray-100">
                        <Link
                          href={`/services/${s.slug}/${a.slug}`}
                          className="text-primary-600 hover:text-primary-900 hover:underline"
                        >
                          {a.city}
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
