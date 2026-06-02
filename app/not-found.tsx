import Link from 'next/link'
import { Phone, Home, Search } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function NotFound() {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center">
      <div className="container-custom text-center py-20">
        <div className="text-8xl font-bold text-white/20 mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 text-xl mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Maybe try one of these instead.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/" className="btn-primary flex items-center gap-2 px-6 py-3">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <a href={SITE.phoneHref} className="btn-outline-white flex items-center gap-2 px-6 py-3">
            <Phone className="w-4 h-4" />
            Call {SITE.phone}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-gray-400 text-sm">
          {[
            { href: '/services', label: 'All Services' },
            { href: '/service-areas', label: 'Service Areas' },
            { href: '/contact', label: 'Contact' },
            { href: '/faq', label: 'FAQ' },
            { href: '/about', label: 'About' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
