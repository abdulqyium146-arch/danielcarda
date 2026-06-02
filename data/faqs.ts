export interface FAQ {
  question: string
  answer: string
  category?: string
}

export const homepageFAQs: FAQ[] = [
  {
    question: 'How fast can Daniel Cerda Locksmith arrive in Sanford, FL?',
    answer: 'Our average response time throughout Sanford and Seminole County is 20 to 30 minutes. We have mobile technicians stationed throughout the area to minimize your wait time — day or night.',
    category: 'general',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. Daniel Cerda Locksmith is fully licensed in the state of Florida and carries comprehensive liability insurance. Your home, vehicle, and business are protected throughout our service.',
    category: 'general',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), and debit cards. We never charge hidden fees — our technician provides a full quote before any work begins.',
    category: 'general',
  },
  {
    question: 'Do you service cars as well as homes and businesses?',
    answer: 'Yes. We provide comprehensive automotive, residential, and commercial locksmith services. Whether you need a car unlocked, house rekeyed, or a business master key system installed, we handle it all.',
    category: 'general',
  },
  {
    question: 'What is the difference between rekeying and replacing locks?',
    answer: 'Rekeying changes the internal pins of your existing lock so old keys no longer work — it\'s less expensive and just as effective when your locks are in good condition. Replacing means installing entirely new hardware, which is better when locks are worn, damaged, or you want to upgrade security.',
    category: 'residential',
  },
  {
    question: 'Can you open a lock without a key?',
    answer: 'Yes. Our trained locksmiths use professional picking, bypassing, and opening tools to gain non-destructive entry in most situations. In cases where non-destructive entry is not possible, we will discuss all options with you before proceeding.',
    category: 'general',
  },
  {
    question: 'Do you offer services 24 hours a day, 7 days a week?',
    answer: 'Absolutely. Locksmith emergencies don\'t follow business hours. We provide 24/7 service including nights, weekends, and all major holidays throughout Sanford and surrounding areas.',
    category: 'general',
  },
  {
    question: 'Can you replace my car key if I have lost all copies?',
    answer: 'Yes. Using your vehicle identification number (VIN) and proof of ownership, we can cut and program a new key for most vehicles on-site. Some luxury or specialty vehicles may require additional equipment or dealer coordination.',
    category: 'automotive',
  },
  {
    question: 'What areas do you serve besides Sanford?',
    answer: 'We serve all of Seminole County including Lake Mary, Longwood, Oviedo, Winter Springs, Casselberry, and DeBary. We also cover parts of Volusia and Orange Counties. Call us to confirm coverage for your specific location.',
    category: 'general',
  },
  {
    question: 'How much does a locksmith cost in Sanford, FL?',
    answer: 'Pricing varies by service. Lockouts typically start at $65, rekeying at $25 per lock cylinder, and car key replacement from $75. We always provide a firm quote before starting any work — no surprises on the bill.',
    category: 'general',
  },
]

export const serviceAreaFAQs: FAQ[] = [
  {
    question: 'Do you serve all of Seminole County?',
    answer: 'Yes. We serve all of Seminole County including Sanford, Lake Mary, Longwood, Oviedo, Winter Springs, Casselberry, and the surrounding unincorporated areas.',
    category: 'service-areas',
  },
  {
    question: 'How far will you travel for a locksmith service call?',
    answer: 'Our primary service area covers approximately 30 miles from our Sanford base. For areas outside this range, call us and we\'ll do our best to accommodate you or refer you to a trusted colleague.',
    category: 'service-areas',
  },
]
