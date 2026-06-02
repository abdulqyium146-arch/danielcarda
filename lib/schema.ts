import { SITE, SCHEMA_BASE } from './constants'
import type { Review } from '@/data/reviews'
import type { Service } from '@/data/services'
import type { FAQ } from '@/data/faqs'
import type { ServiceArea } from '@/data/service-areas'

export function buildLocalBusinessSchema(reviews?: Review[]) {
  return {
    ...SCHEMA_BASE,
    '@type': ['LocalBusiness', 'Locksmith'],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/logo.png`,
      width: 300,
      height: 80,
    },
    image: `${SITE.url}/opengraph-image`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.founded,
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 10 },
    aggregateRating: reviews
      ? {
          '@type': 'AggregateRating',
          ratingValue: 5.0,
          reviewCount: 14,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    review: reviews?.slice(0, 3).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  }
}

export function buildServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Sanford',
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    url: `${SITE.url}/services/${service.slug}`,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.price,
        priceCurrency: 'USD',
      },
    },
  }
}

export function buildFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: 'US',
    },
    sameAs: [SITE.social.facebook, SITE.social.google, SITE.social.yelp],
  }
}

export function buildHowToSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Get ${service.shortTitle} Service in Sanford, FL`,
    description: service.description,
    step: service.process.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
    })),
    tool: { '@type': 'HowToTool', name: 'Licensed Locksmith' },
  }
}

export function buildServiceCitySchema(service: Service, area: ServiceArea) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${area.city}, FL`,
    description: `Professional ${service.shortTitle} in ${area.city}, Florida by Daniel Cerda Locksmith. Licensed, insured, available 24/7.`,
    serviceType: service.shortTitle,
    provider: {
      '@type': ['LocalBusiness', 'Locksmith'],
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: area.city,
      containedInPlace: { '@type': 'State', name: 'Florida' },
    },
    url: `${SITE.url}/services/${service.slug}/${area.slug}`,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.price,
        priceCurrency: 'USD',
      },
    },
  }
}

export function buildItemListSchema(items: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  }
}

export function buildAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${SITE.name}`,
    url: `${SITE.url}/about`,
    description: `Learn about Daniel Cerda Locksmith — a licensed, insured, and experienced locksmith serving Sanford, FL and all of Seminole County since 2008.`,
    mainEntity: {
      '@type': 'Person',
      name: 'Daniel Cerda',
      jobTitle: 'Licensed Locksmith',
      worksFor: {
        '@type': ['LocalBusiness', 'Locksmith'],
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phone,
      },
      knowsAbout: [
        'Residential Locksmithing',
        'Commercial Locksmithing',
        'Automotive Locksmithing',
        'Smart Lock Installation',
        'Emergency Lockout Services',
        'Lock Rekeying',
        'High Security Locks',
        'Transponder Key Programming',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'Florida State Licensed Locksmith' },
        { '@type': 'EducationalOccupationalCredential', name: 'ALOA Member' },
      ],
    },
  }
}

export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE.name}`,
    url: `${SITE.url}/contact`,
    description: 'Contact Daniel Cerda Locksmith for 24/7 emergency locksmith service in Sanford, FL and Seminole County.',
    mainEntity: {
      '@type': ['LocalBusiness', 'Locksmith'],
      name: SITE.name,
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.url,
      openingHours: 'Mo-Su 00:00-23:59',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: 'US',
      },
    },
  }
}

export function buildBlogPostSchema(post: {
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
      },
    },
    url: `${SITE.url}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  }
}
