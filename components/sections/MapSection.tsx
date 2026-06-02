import { MapPin, Clock, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function MapSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="map-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map embed */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-card-hover border border-gray-100 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27996.755763205172!2d-81.37380522064478!3d28.701775133036666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76d5af263520b%3A0x483b91e40fab2bd4!2sDaniel%20Cerda%20Locksmith%20%26%20Hardware!5e0!3m2!1sen!2s!4v1780422420823!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${SITE.name} location map`}
                aria-label="Google Maps showing our Sanford FL location"
              />
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Find Us</span>
            <h2 id="map-heading" className="text-3xl md:text-4xl font-bold text-primary-950 mb-5">
              Located in the Heart of Sanford, FL
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our Sanford locksmith base allows us to reach you faster than any competitor. We serve all of Seminole County and beyond — no matter where you are in our service area.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Our Address</p>
                  <address className="not-italic text-gray-600">
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Hours of Operation</p>
                  <p className="text-gray-600">{SITE.hours.display}</p>
                  <p className="text-sm text-gray-400 mt-0.5">No appointment needed for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Phone Number</p>
                  <a
                    href={SITE.phoneHref}
                    className="text-gold-600 font-semibold text-lg hover:text-gold-700 transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://maps.google.com/?q=151+Wildwood+Dr+Sanford+FL+32773`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
