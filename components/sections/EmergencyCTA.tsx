import Link from 'next/link'
import { Phone, AlertTriangle, Clock, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function EmergencyCTA() {
  return (
    <section
      className="emergency-gradient py-6 relative overflow-hidden"
      aria-label="Emergency locksmith call to action"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                🔴 LOCKED OUT? We&apos;re Ready Right Now.
              </p>
              <div className="flex items-center gap-2 text-red-100 text-sm mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Available 24/7 — Average 20-30 minute response in Sanford</span>
              </div>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-3">
            <Link
              href="/services/emergency-locksmith"
              className="hidden sm:flex items-center gap-1.5 text-red-100 hover:text-white text-sm font-medium transition-colors"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-3 px-8 py-3.5 bg-white text-emergency-700 font-bold text-lg rounded-xl hover:bg-red-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 animate-ring" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
