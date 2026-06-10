import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Phone } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { blogPosts, getPostBySlug } from '@/data/blog-posts'
import { services } from '@/data/services'
import { buildBlogPostSchema } from '@/lib/schema'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

// Parses inline markdown: [text](url) links and **bold** text
function parseInline(text: string, lineIdx: number): ReactNode {
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))

    if (match[1] !== undefined) {
      const isExternal = match[2].startsWith('http')
      nodes.push(
        isExternal ? (
          <a
            key={`${lineIdx}-lnk-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-700 font-semibold hover:text-primary-900"
          >
            {match[1]}
          </a>
        ) : (
          <Link
            key={`${lineIdx}-lnk-${match.index}`}
            href={match[2]}
            className="text-primary-700 font-semibold hover:text-primary-900"
          >
            {match[1]}
          </Link>
        )
      )
    } else {
      nodes.push(
        <strong key={`${lineIdx}-b-${match.index}`} className="text-gray-900">
          {match[3]}
        </strong>
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  if (nodes.length === 0) return text
  if (nodes.length === 1) return nodes[0]
  return nodes
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return generateMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    keywords: post.tags,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const schema = buildBlogPostSchema(post)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const relatedServices = (post.relatedServiceSlugs ?? [])
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean) as typeof services

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero-gradient py-14">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
            light
            className="mb-6"
          />
          <div className="max-w-3xl">
            <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none prose-headings:text-primary-950 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-primary-900 prose-strong:text-primary-900 prose-ul:text-gray-700 prose-li:text-gray-700">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-3xl font-bold text-primary-950 mb-4 mt-8 first:mt-0">{line.slice(2)}</h1>
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold text-primary-950 mb-3 mt-8">{line.slice(3)}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-bold text-primary-950 mb-2 mt-6">{line.slice(4)}</h3>
                  }
                  if (line.startsWith('| ') && line.includes(' | ')) {
                    if (line.match(/^\|[-| ]+\|$/)) return null
                    const cells = line.split('|').filter((c) => c.trim())
                    return (
                      <div key={i} className="contents">
                        {i === line.indexOf('| ') ? null : null}
                      </div>
                    )
                  }
                  if (line.startsWith('- **')) {
                    const match = line.match(/^- \*\*(.*?)\*\*:?\s*(.*)/)
                    if (match) {
                      return (
                        <li key={i} className="text-gray-700 mb-2 ml-4 list-disc">
                          <strong className="text-gray-900">{parseInline(match[1], i)}</strong>
                          {match[2] ? <>{': '}{parseInline(match[2], i)}</> : ''}
                        </li>
                      )
                    }
                  }
                  if (line.startsWith('- ') || line.startsWith('* ')) {
                    return <li key={i} className="text-gray-700 mb-1.5 ml-4 list-disc">{parseInline(line.slice(2), i)}</li>
                  }
                  if (line.trim() === '') {
                    return <br key={i} />
                  }
                  return <p key={i} className="text-gray-700 leading-relaxed mb-3">{parseInline(line, i)}</p>
                })}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* CTA */}
              <div className="bg-primary-950 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-2">Need a Locksmith?</h3>
                <p className="text-gray-300 text-sm mb-5">
                  Serving Sanford, FL and all of Seminole County. Licensed, insured, available 24/7.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="btn-primary w-full justify-center py-3.5 flex items-center gap-2 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Send a Message
                </Link>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Related Services</h4>
                  <div className="space-y-2">
                    {relatedServices.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-primary-700 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {svc.shortTitle}
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="flex items-center gap-1 text-xs text-primary-600 font-semibold hover:text-primary-800 pt-1"
                    >
                      All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="card">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Related Articles</h4>
                  <div className="space-y-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block group"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug mb-0.5">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400">{p.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
