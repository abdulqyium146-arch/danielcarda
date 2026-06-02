'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { reviews, aggregateRating } from '@/data/reviews'
import { StarRating } from '@/components/ui/StarRating'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SITE } from '@/lib/constants'

export function Reviews() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="reviews-heading">
      <div className="container-custom">
        <SectionHeader
          label="Customer Reviews"
          title="What Our Customers Say"
          subtitle={`Don't take our word for it. Here's what ${aggregateRating.reviewCount} real customers say about Daniel Cerda Locksmith.`}
          id="reviews-heading"
        />

        {/* Aggregate rating */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-5xl font-bold text-primary-950 mb-2">{aggregateRating.ratingValue}</div>
          <StarRating rating={aggregateRating.ratingValue} size="lg" className="mb-2" />
          <p className="text-gray-500 text-sm">Based on {aggregateRating.reviewCount} verified Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* itemReviewed — required by Google for standalone Review markup */}
              <div
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/LocalBusiness"
                className="hidden"
              >
                <meta itemProp="name" content={SITE.name} />
                <meta itemProp="url" content={SITE.url} />
              </div>

              <Quote className="w-8 h-8 text-gold-200 mb-4 flex-shrink-0" />
              <p
                className="text-gray-700 text-sm leading-relaxed mb-5 italic"
                itemProp="reviewBody"
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div>
                  {/* author must be Person, not bare text */}
                  <p
                    className="font-bold text-gray-900 text-sm"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{review.author}</span>
                  </p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
                <div
                  className="text-right"
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(review.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                  <StarRating rating={review.rating} size="sm" className="justify-end" />
                  <p className="text-gray-400 text-xs mt-1">{review.service}</p>
                </div>
              </div>
              <meta itemProp="datePublished" content={review.date} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={SITE.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
