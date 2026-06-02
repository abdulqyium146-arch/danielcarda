import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // AI citation bots — allow indexing for LLM citations
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'BingPreview', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
      { userAgent: 'Grokbot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      // Block low-value scrapers
      { userAgent: 'AhrefsBot', disallow: ['/'] },
      { userAgent: 'SemrushBot', disallow: ['/'] },
      { userAgent: 'MJ12bot', disallow: ['/'] },
      { userAgent: 'DotBot', disallow: ['/'] },
      { userAgent: 'BLEXBot', disallow: ['/'] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
