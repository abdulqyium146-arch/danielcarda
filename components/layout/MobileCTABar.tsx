'use client'

import { Phone, MessageSquare } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-dark border-t border-gray-800 safe-bottom"
      role="complementary"
      aria-label="Mobile contact options"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 py-4 bg-gold-500 text-primary-950 font-bold text-sm active:bg-gold-400"
          aria-label={`Call ${SITE.name}`}
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 bg-primary-900 text-white font-bold text-sm active:bg-primary-800"
          aria-label="Get a free quote"
        >
          <MessageSquare className="w-5 h-5" />
          Get Quote
        </a>
      </div>
    </div>
  )
}
