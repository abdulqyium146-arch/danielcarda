import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'DCL Locksmith',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#1E3A8A',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon-16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
