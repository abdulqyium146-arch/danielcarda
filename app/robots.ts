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
      // OpenAI / ChatGPT
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      // Microsoft / Bing / Copilot
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'BingPreview', allow: '/' },
      { userAgent: 'msnbot', allow: '/' },
      // Google / Gemini
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      // Apple / Siri
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Meta / Llama
      { userAgent: 'meta-externalagent', allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },
      // xAI / Grok
      { userAgent: 'Grokbot', allow: '/' },
      // Cohere
      { userAgent: 'cohere-ai', allow: '/' },
      // You.com
      { userAgent: 'YouBot', allow: '/' },
      // Amazon / Alexa
      { userAgent: 'Amazonbot', allow: '/' },
      // Brave
      { userAgent: 'Brave-Ai-Bot', allow: '/' },
      // DuckDuckGo
      { userAgent: 'DuckAssistBot', allow: '/' },
      // Common Crawl (used by many AI training datasets)
      { userAgent: 'CCBot', allow: '/' },
      // ByteDance / TikTok
      { userAgent: 'Bytespider', allow: '/' },
      // Block low-value scrapers that add no citation value
      { userAgent: 'AhrefsBot', disallow: ['/'] },
      { userAgent: 'SemrushBot', disallow: ['/'] },
      { userAgent: 'MJ12bot', disallow: ['/'] },
      { userAgent: 'DotBot', disallow: ['/'] },
      { userAgent: 'BLEXBot', disallow: ['/'] },
      { userAgent: 'PetalBot', disallow: ['/'] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
