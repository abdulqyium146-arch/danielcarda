'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function PhoneButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.name} at ${SITE.phone}`}
      className={cn(
        'fixed bottom-24 right-5 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-emergency-600 text-white rounded-full shadow-emergency phone-pulse transition-all duration-300',
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      )}
    >
      <Phone className="w-6 h-6" strokeWidth={2.5} />
    </a>
  )
}
