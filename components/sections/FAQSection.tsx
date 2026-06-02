'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { homepageFAQs } from '@/data/faqs'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-custom">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Get quick answers to the most common questions about our locksmith services in Sanford, FL."
          id="faq-heading"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {homepageFAQs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                'border rounded-xl overflow-hidden transition-colors',
                openIndex === index ? 'border-primary-200 bg-primary-50/50' : 'border-gray-200 bg-white'
              )}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={cn(
                    'font-semibold text-base pr-4',
                    openIndex === index ? 'text-primary-800' : 'text-gray-900'
                  )}
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 flex-shrink-0 transition-transform duration-200',
                    openIndex === index ? 'rotate-180 text-primary-700' : 'text-gray-400'
                  )}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-5 pb-4">
                      <div className="h-px bg-primary-100 mb-4" />
                      <p className="text-gray-600 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-3">Still have questions?</p>
          <a href="/faq" className="btn-secondary inline-flex items-center gap-2 text-sm">
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  )
}
