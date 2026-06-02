import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { blogPosts } from '@/data/blog-posts'
import { generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Locksmith Blog — Tips, Guides & Security Advice',
  description:
    'Expert locksmith tips, home security guides, and advice from Daniel Cerda Locksmith in Sanford, FL. Learn about lock choices, smart locks, car keys, and more.',
  path: '/blog',
  keywords: ['locksmith blog', 'home security tips sanford fl', 'locksmith advice florida'],
})

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Blog' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">Knowledge Center</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Locksmith Tips & Security Guides
            </h1>
            <p className="text-gray-300 text-xl">
              Expert advice on home security, lock choices, car keys, and more from Daniel Cerda — your local Sanford locksmith.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured Posts */}
          {featured.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((post) => (
                  <article key={post.slug} className="card group hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-gold-100 text-gold-700 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-bold text-primary-950 text-lg mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                        <span>·</span>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-primary-700 text-sm font-semibold group-hover:gap-2 transition-all"
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          {rest.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-primary-950 mb-6">More Articles</h2>
              <div className="space-y-4">
                {rest.map((post) => (
                  <article
                    key={post.slug}
                    className="card flex items-start gap-5 group hover:border-primary-200 transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-bold text-primary-950 text-base mb-1 group-hover:text-primary-700 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex-shrink-0 flex items-center gap-1 text-primary-700 text-sm font-semibold mt-1"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
