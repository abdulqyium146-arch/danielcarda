import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ExternalLink, ThumbsUp, Heart, Award, MapPin } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { generateMeta } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = generateMeta({
  title: 'Leave a Review — Daniel Cerda Locksmith',
  description:
    'Happy with our service? Leave a review for Daniel Cerda Locksmith on Google, Yelp, Facebook, or BBB. Your feedback helps Sanford, FL neighbors find a trusted local locksmith.',
  path: '/reviews',
  keywords: [
    'review daniel cerda locksmith',
    'locksmith reviews sanford fl',
    'leave a google review locksmith',
  ],
})

const platforms = [
  {
    name: 'Google',
    description: 'The most impactful place to leave a review. Helps neighbors find us on Google Maps.',
    href: 'https://g.page/danielcerdalocksmith/review',
    color: 'bg-white border-2 border-blue-100 hover:border-blue-400',
    badge: 'Most Helpful',
    badgeColor: 'bg-blue-600 text-white',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.6 5.5 2.7 13.5l7.8 6C12.4 13.1 17.8 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.1z"/>
        <path fill="#FBBC05" d="M10.5 28.5c-.5-1.5-.8-3.2-.8-4.9s.3-3.4.8-4.9l-7.8-6C.9 15.9 0 19.9 0 24s.9 8.1 2.7 11.3l7.8-6.8z"/>
        <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.6-5.9c-2 1.4-4.6 2.2-7.6 2.2-6.2 0-11.5-4.2-13.4-9.8l-7.8 6C6.6 42.5 14.6 48 24 48z"/>
      </svg>
    ),
    steps: [
      'Click the button below to open Google Reviews',
      'Sign in with your Google account',
      'Rate us 1–5 stars',
      'Write a few words about your experience',
      'Click Post',
    ],
  },
  {
    name: 'Yelp',
    description: 'Many customers check Yelp before calling a locksmith. Your review reaches a new audience.',
    href: `${SITE.social.yelp}/writeareview`,
    color: 'bg-white border-2 border-red-100 hover:border-red-400',
    badge: null,
    badgeColor: '',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#D32323"/>
        <path fill="#fff" d="M20.3 26.4l-5.5 2.9c-.6.3-1.3-.2-1.2-.9l.6-6.2c.1-.7.9-1 1.4-.5l4.9 3.3c.5.4.5 1.1-.2 1.4zM22 22.1l-2.2-5.9c-.2-.7.4-1.3 1.1-1.1l6 2.2c.7.2.8 1.1.2 1.5l-3.8 3.7c-.5.5-1.2.3-1.3-.4zM27.7 24l3.8-4.9c.4-.6 1.2-.5 1.5.1l2.1 6.1c.2.7-.3 1.3-1 1.2l-6.3-.7c-.7-.1-.9-.9-.1-1.8zM26.3 26.8l6.3-.7c.7-.1 1.1.6.8 1.2l-3.1 5.5c-.3.6-1.1.7-1.5.1l-3.2-4.9c-.4-.6-.1-1.2.7-1.2zM22.3 27.5l-2.5 5.7c-.3.6.1 1.3.8 1.3h6.5c.7 0 1.1-.7.8-1.3l-2.5-5.7c-.3-.7-1.2-.7-1.5 0-1.6 0-1.6 0 0 0z"/>
      </svg>
    ),
    steps: [
      'Click the button below',
      'Log in or create a free Yelp account',
      'Select your star rating',
      'Share what made your experience great',
      'Click Post Review',
    ],
  },
  {
    name: 'Facebook',
    description: 'Your Facebook network sees your recommendation — great for word-of-mouth referrals.',
    href: `${SITE.social.facebook}/reviews`,
    color: 'bg-white border-2 border-indigo-100 hover:border-indigo-400',
    badge: null,
    badgeColor: '',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#1877F2"/>
        <path fill="#fff" d="M33 24h-6v18h-6V24h-4v-6h4v-4c0-5 3-8 8-8h5v6h-3c-1 0-2 .4-2 2v4h5l-1 6z"/>
      </svg>
    ),
    steps: [
      'Click the button below to open our Facebook page',
      'Click "Reviews" tab then "Yes" to recommend',
      'Write about your experience (optional but helpful)',
      'Set your audience to Public',
      'Click Post',
    ],
  },
  {
    name: 'BBB',
    description: 'A BBB review strengthens our accreditation score and builds trust with new customers.',
    href: 'https://www.bbb.org/us/fl/sanford/profile/locksmith/daniel-cerda-locksmith-and-hardware-0733-90413078#sealclick',
    color: 'bg-white border-2 border-blue-100 hover:border-blue-400',
    badge: null,
    badgeColor: '',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#00508F"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">BBB</text>
      </svg>
    ),
    steps: [
      'Click the button below to open our BBB profile',
      'Click "Write a Review"',
      'Fill in your name and review details',
      'Submit your review',
    ],
  },
]

const stats = [
  { value: '5.0★', label: 'Average Rating' },
  { value: '14+', label: 'Verified Reviews' },
  { value: '2008', label: 'In Business Since' },
  { value: '24/7', label: 'Available' },
]

export default function ReviewsPage() {
  return (
    <>
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Leave a Review' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">Share Your Experience</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leave a Review
            </h1>
            <p className="text-gray-300 text-xl">
              Happy with our service? A quick review helps your Sanford neighbors find a trusted, licensed locksmith when they need one most.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-primary-900 border-b border-primary-800">
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-gold-400 font-bold text-2xl">{s.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform cards */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-primary-950 mb-2">Choose a Platform</h2>
              <p className="text-gray-500 text-sm">
                Google reviews carry the most weight for local search — but any platform helps.
              </p>
            </div>

            <div className="space-y-5">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-2xl p-6 shadow-card transition-all duration-200 ${p.color}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">{p.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                        {p.badge && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{p.description}</p>

                      {/* Steps */}
                      <ol className="space-y-1 mb-5">
                        {p.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 text-gray-500">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>

                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white text-sm font-bold rounded-xl transition-colors"
                      >
                        <Star className="w-4 h-4" />
                        Review on {p.name}
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What to write */}
            <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-card p-8">
              <h2 className="text-xl font-bold text-primary-950 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-gold-500" />
                Not Sure What to Write?
              </h2>
              <p className="text-gray-600 text-sm mb-5">
                A great review mentions specifics — what service we helped with, how fast we arrived, and whether you felt the price was fair. Even two or three sentences makes a big difference.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '"Locked out of my car near Lake Mary — Daniel arrived in 20 minutes and had me back in within 5. Very professional."',
                  '"Rekeyed all my locks after moving into our new Sanford home. Fair price, quick service, and he explained everything."',
                  '"Called at midnight for an emergency lockout. Fast response, no hidden fees, and super friendly. Highly recommend."',
                  '"Had my smart lock installed same-day. He even helped me set up the app. Will definitely call again."',
                ].map((example, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 italic border border-gray-100">
                    {example}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                These are example prompts only — please write your own honest experience in your own words.
              </p>
            </div>

            {/* Why it matters */}
            <div className="mt-8 bg-primary-950 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-gold-400" />
                Why Your Review Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                <div>
                  <div className="text-gold-400 font-semibold mb-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> Helps Neighbors
                  </div>
                  <p className="text-gray-400">
                    When someone in Sanford searches "locksmith near me" at 2 a.m., your review is part of what puts a trusted name in front of them.
                  </p>
                </div>
                <div>
                  <div className="text-gold-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Fights Scammers
                  </div>
                  <p className="text-gray-400">
                    Fake locksmith operations flood search results in Florida. A strong review profile on a licensed business helps push them down.
                  </p>
                </div>
                <div>
                  <div className="text-gold-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Star className="w-4 h-4" /> Costs Nothing
                  </div>
                  <p className="text-gray-400">
                    Two minutes of your time directly supports a local, family-run business that has served Seminole County since 2008.
                  </p>
                </div>
              </div>
            </div>

            {/* Had an issue? */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm">
              <p className="font-semibold text-amber-800 mb-1">Had a concern about your service?</p>
              <p className="text-amber-700">
                We would rather hear from you directly and make it right.{' '}
                <Link href="/contact" className="font-bold underline hover:text-amber-900">
                  Contact us here
                </Link>{' '}
                or call{' '}
                <a href={SITE.phoneHref} className="font-bold underline hover:text-amber-900">
                  {SITE.phone}
                </a>{' '}
                and we will respond within the hour.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
