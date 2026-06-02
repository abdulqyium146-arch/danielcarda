import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Star } from 'lucide-react'
import { SITE } from '@/lib/constants'

const serviceLinks = [
  { href: '/services/emergency-locksmith', label: 'Emergency Locksmith' },
  { href: '/services/residential-locksmith', label: 'Residential Locksmith' },
  { href: '/services/commercial-locksmith', label: 'Commercial Locksmith' },
  { href: '/services/automotive-locksmith', label: 'Automotive Locksmith' },
  { href: '/services/car-lockout', label: 'Car Lockout' },
  { href: '/services/house-lockout', label: 'House Lockout' },
  { href: '/services/rekeying', label: 'Lock Rekeying' },
  { href: '/services/smart-lock-installation', label: 'Smart Locks' },
  { href: '/services/car-key-replacement', label: 'Car Key Replacement' },
  { href: '/services/lock-installation', label: 'Lock Installation' },
]

const areaLinks = [
  { href: '/service-areas/sanford-fl', label: 'Sanford, FL' },
  { href: '/service-areas/lake-mary-fl', label: 'Lake Mary, FL' },
  { href: '/service-areas/longwood-fl', label: 'Longwood, FL' },
  { href: '/service-areas/oviedo-fl', label: 'Oviedo, FL' },
  { href: '/service-areas/debary-fl', label: 'DeBary, FL' },
  { href: '/service-areas/winter-springs-fl', label: 'Winter Springs, FL' },
  { href: '/service-areas/casselberry-fl', label: 'Casselberry, FL' },
]

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Business Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white rounded-lg px-3 py-2 inline-block hover:bg-gray-100 transition-colors">
                <Image
                  src="/logo.png"
                  alt={SITE.name}
                  width={140}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Sanford&apos;s trusted 24/7 locksmith. Licensed, insured, and serving Seminole County and surrounding areas since 2008.
            </p>

            {/* NAP */}
            <address className="not-italic space-y-3 text-sm">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-gray-500" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 text-gray-500 mt-0.5" />
                <span>{SITE.address.display}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>{SITE.hours.display}</span>
              </div>
            </address>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                aria-label="Google Business Profile"
              >
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-gold-500 hover:text-gold-400 font-semibold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm text-gold-500 hover:text-gold-400 font-semibold">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links + CTA */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/html-sitemap', label: 'Site Map' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency CTA */}
            <div className="bg-emergency-800/30 border border-emergency-700/40 rounded-xl p-4">
              <p className="text-white font-bold text-sm mb-1">🔴 24/7 Emergency</p>
              <p className="text-gray-400 text-xs mb-3">Locked out? We respond fast.</p>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. Licensed Locksmith — State of Florida.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/html-sitemap" className="hover:text-gray-300 transition-colors">Site Map</Link>
            <span>Sanford, FL 32773</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
