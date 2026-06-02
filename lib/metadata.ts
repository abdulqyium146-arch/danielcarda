import type { Metadata } from 'next'
import { SITE } from './constants'

interface MetaOptions {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
  ogImage?: string
}

export function generateMeta({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
  ogImage,
}: MetaOptions): Metadata {
  const url = `${SITE.url}${path}`
  const image = ogImage || `${SITE.url}/og-default.jpg`

  return {
    title: {
      absolute: `${title} | ${SITE.name}`,
    },
    description,
    keywords: [...SITE.keywords, ...keywords].join(', '),
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: `${title} | ${SITE.name}`,
      description,
      siteName: SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
    other: {
      'geo.region': 'US-FL',
      'geo.placename': 'Sanford, Florida',
      'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
      ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
    },
  }
}
