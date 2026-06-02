import Link from 'next/link'
import { Phone, MessageSquare, MapPin } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function ContactCTA() {
  return (
    <section className="section-padding bg-primary-950 relative overflow-hidden" aria-labelledby="contact-cta-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-primary-800/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            Ready to Get Started?
          </span>
          <h2 id="contact-cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-5">
            Need a Locksmith in{' '}
            <span className="text-gradient-gold">Sanford, FL?</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-10">
            Call us now for immediate assistance or submit a request for scheduled services. Licensed, insured, and always transparent with pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={SITE.phoneHref}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
            >
              <Phone className="w-5 h-5 animate-ring" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="btn-outline-white text-lg px-8 py-4 flex items-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              Send a Message
            </Link>
          </div>

          {/* NAP */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-gray-500" />
            <address className="not-italic">
              <strong className="text-white">{SITE.name}</strong> — {SITE.address.display}
            </address>
          </div>
          <p className="text-gray-500 text-sm mt-2">{SITE.hours.display}</p>
        </div>
      </div>
    </section>
  )
}
