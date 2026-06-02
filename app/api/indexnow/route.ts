import { NextResponse } from 'next/server'
import { SITE } from '@/lib/constants'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'

// IndexNow allows instant indexing notification to Bing, Yandex, and partner engines.
// Key is stored in /public/[INDEXNOW_KEY].txt — value equals the key string.
const KEY = process.env.INDEXNOW_KEY ?? 'dcl8f4e2d1c9b6a5f3e7d0c2b1e9a4f7'
const HOST = new URL(SITE.url).hostname

function buildUrlList(): string[] {
  const base = SITE.url
  const staticUrls = [
    base,
    `${base}/services`,
    `${base}/service-areas`,
    `${base}/about`,
    `${base}/contact`,
    `${base}/faq`,
    `${base}/blog`,
  ]
  const serviceUrls = services.map((s) => `${base}/services/${s.slug}`)
  const areaUrls = serviceAreas.map((a) => `${base}/service-areas/${a.slug}`)
  return [...staticUrls, ...serviceUrls, ...areaUrls]
}

export async function POST() {
  const urlList = buildUrlList()

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${SITE.url}/${KEY}.txt`,
        urlList,
      }),
    })

    return NextResponse.json({ submitted: urlList.length, status: res.status })
  } catch {
    return NextResponse.json({ error: 'IndexNow request failed' }, { status: 500 })
  }
}

// GET returns the key for verification (useful for debugging)
export async function GET() {
  return NextResponse.json({ key: KEY, host: HOST, keyLocation: `${SITE.url}/${KEY}.txt` })
}
