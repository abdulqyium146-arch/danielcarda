'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

const serviceLinks = [
  { href: '/services/emergency-locksmith', label: 'Emergency Locksmith' },
  { href: '/services/residential-locksmith', label: 'Residential Locksmith' },
  { href: '/services/commercial-locksmith', label: 'Commercial Locksmith' },
  { href: '/services/automotive-locksmith', label: 'Automotive Locksmith' },
  { href: '/services/car-lockout', label: 'Car Lockout' },
  { href: '/services/house-lockout', label: 'House Lockout' },
  { href: '/services/rekeying', label: 'Rekeying' },
  { href: '/services/smart-lock-installation', label: 'Smart Locks' },
]

const areaLinks = [
  { href: '/service-areas/sanford-fl', label: 'Sanford' },
  { href: '/service-areas/lake-mary-fl', label: 'Lake Mary' },
  { href: '/service-areas/longwood-fl', label: 'Longwood' },
  { href: '/service-areas/oviedo-fl', label: 'Oviedo' },
  { href: '/service-areas/debary-fl', label: 'DeBary' },
  { href: '/service-areas/winter-springs-fl', label: 'Winter Springs' },
  { href: '/service-areas/casselberry-fl', label: 'Casselberry' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', dropdown: serviceLinks },
  { href: '/service-areas', label: 'Service Areas', dropdown: areaLinks },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-950 text-white text-sm py-2 hidden md:block">
        <div className="container-custom flex items-center justify-between">
          <span className="text-gray-300">
            📍 151 Wildwood Dr, Sanford, FL 32773 &nbsp;|&nbsp; Licensed & Insured
          </span>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
        </div>
      </div>

      <header
        ref={navRef}
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-primary-900 shadow-lg'
            : 'bg-primary-900/95 backdrop-blur-sm'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label={`${SITE.name} — Home`}
            >
              <div className="bg-white rounded-lg px-2 py-1 group-hover:bg-gray-100 transition-colors">
                <Image
                  src="/logo.png"
                  alt={SITE.name}
                  width={140}
                  height={44}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        pathname.startsWith(link.href)
                          ? 'text-gold-400'
                          : 'text-gray-300 hover:text-white'
                      )}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          openDropdown === link.label ? 'rotate-180' : ''
                        )}
                      />
                    </button>

                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-primary-900 font-semibold hover:bg-blue-50 border-b border-gray-100 mb-1"
                        >
                          All {link.label}
                        </Link>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              'block px-4 py-2 text-sm hover:bg-blue-50 transition-colors',
                              pathname === item.href
                                ? 'text-primary-700 font-semibold'
                                : 'text-gray-700 hover:text-primary-900'
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'text-gold-400'
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SITE.phoneHref}
                className="btn-primary text-sm py-2.5 px-5"
                aria-label={`Call ${SITE.name} at ${SITE.phone}`}
              >
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center w-10 h-10 bg-gold-500 rounded-lg text-primary-950"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="flex items-center justify-center w-10 h-10 text-white"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-primary-950 z-40 overflow-y-auto pb-20">
            <div className="container-custom py-6 space-y-1">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-3 w-full py-4 bg-gold-500 rounded-xl text-primary-950 font-bold text-lg mb-4"
              >
                <Phone className="w-5 h-5" />
                {SITE.phone}
              </a>

              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-3 px-4 rounded-lg font-medium text-base',
                      pathname === link.href
                        ? 'text-gold-400 bg-primary-800'
                        : 'text-gray-300 hover:text-white hover:bg-primary-800'
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.slice(0, 5).map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 px-4 text-sm text-gray-400 hover:text-gray-200 rounded-lg hover:bg-primary-800/50"
                        >
                          → {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-primary-800">
                <p className="text-gray-500 text-sm px-4 mb-2">📍 Sanford, FL 32773</p>
                <p className="text-gray-500 text-sm px-4">🕐 Open 24/7 — 365 Days a Year</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
