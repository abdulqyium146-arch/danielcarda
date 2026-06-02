export interface ServiceArea {
  slug: string
  city: string
  state: string
  zip: string[]
  county: string
  distance: string
  description: string
  longDescription: string
  population: string
  landmarks: string[]
  neighborhoods: string[]
  localFacts: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  geo: { lat: number; lng: number }
  isPrimary: boolean
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'sanford-fl',
    city: 'Sanford',
    state: 'FL',
    zip: ['32771', '32772', '32773'],
    county: 'Seminole',
    distance: 'Primary Service Area',
    description: 'Sanford is our home base — we serve all neighborhoods and zip codes throughout the city with the fastest response times in the area.',
    longDescription: `Sanford, Florida is our home and our primary service area. As a licensed locksmith based right here at 151 Wildwood Dr, Daniel Cerda Locksmith provides the fastest response times in Sanford — typically 20 minutes or less for emergency calls.\n\nWe serve every neighborhood in Sanford including Mayfair, Goldsboro, Dreamwold, the Historic Downtown District, Lake Monroe area, Midway, and all surrounding communities. Whether you're locked out of your Sanford home, need your business locks upgraded, or require a car key replaced near the Sanford Airport, we're your closest and fastest option.`,
    population: '62,000+',
    landmarks: [
      'Sanford International Airport',
      'Historic Downtown Sanford',
      'Lake Monroe Waterfront',
      'Seminole Towne Center',
      'Central Florida Zoo',
      'Sanford/Orlando International Airport',
    ],
    neighborhoods: ['Mayfair', 'Goldsboro', 'Dreamwold', 'Midway', 'Lake Monroe', 'Magnolia Square', 'Fort Mellon Park area'],
    localFacts: 'Sanford is the county seat of Seminole County and has a rich history dating back to 1870. As the area continues to grow, property security has become increasingly important for both long-time residents and newcomers.',
    metaTitle: 'Locksmith Sanford FL | #1 Local Locksmith Service 24/7',
    metaDescription: 'Daniel Cerda Locksmith — Sanford FL\'s most trusted local locksmith. 24/7 emergency service, car lockouts, rekeying, smart locks. Licensed & insured. Call now for fast response.',
    keywords: [
      'locksmith sanford fl',
      'locksmith sanford florida',
      'emergency locksmith sanford',
      '24 hour locksmith sanford fl',
      'best locksmith sanford florida',
      'locksmith near me sanford',
      'affordable locksmith sanford fl',
    ],
    geo: { lat: 28.8028, lng: -81.2681 },
    isPrimary: true,
  },
  {
    slug: 'lake-mary-fl',
    city: 'Lake Mary',
    state: 'FL',
    zip: ['32746'],
    county: 'Seminole',
    distance: '8 miles from Sanford',
    description: 'Professional locksmith services in Lake Mary, FL — covering all residential, commercial, and automotive needs.',
    longDescription: `Daniel Cerda Locksmith proudly serves Lake Mary, one of Central Florida's most desirable communities. Located just 8 miles south of our Sanford headquarters, we typically arrive within 25-35 minutes for emergency lockouts in Lake Mary.\n\nLake Mary is known for its planned communities, corporate campuses, and high quality of life. We serve both the residential neighborhoods and the commercial district along International Parkway, providing full locksmith services to homeowners, apartment complexes, office buildings, and retail businesses.`,
    population: '17,000+',
    landmarks: [
      'Lake Mary City Hall',
      'Greeneway and I-4 interchange',
      'Lake Mary SunRail Station',
      'The Village at Lake Mary',
      'Lake Mary Town Center',
    ],
    neighborhoods: ['Heathrow', 'Timacuan', 'Lakewood', 'Markham Woods', 'Country Club of Orlando area'],
    localFacts: 'Lake Mary is consistently ranked among Florida\'s best places to live and has a significant corporate presence, including tech companies and financial institutions, which creates strong demand for commercial security services.',
    metaTitle: 'Locksmith Lake Mary FL | Fast & Professional Lock Services',
    metaDescription: 'Licensed locksmith serving Lake Mary, FL. Car lockouts, home rekeying, smart locks, emergency service. Daniel Cerda Locksmith — 25-min response. Call now.',
    keywords: [
      'locksmith lake mary fl',
      'locksmith lake mary florida',
      'emergency locksmith lake mary',
      'car lockout lake mary fl',
      'residential locksmith lake mary',
    ],
    geo: { lat: 28.7589, lng: -81.3173 },
    isPrimary: false,
  },
  {
    slug: 'longwood-fl',
    city: 'Longwood',
    state: 'FL',
    zip: ['32750', '32779'],
    county: 'Seminole',
    distance: '12 miles from Sanford',
    description: 'Trusted locksmith services in Longwood, FL — residential, commercial, and auto locksmith for the entire Longwood community.',
    longDescription: `Longwood residents and businesses have trusted Daniel Cerda Locksmith for fast, professional locksmith services. Located approximately 12 miles from our Sanford base, we serve all of Longwood — from the historic district near Longwood Drive to the newer developments near State Road 434.\n\nLongwood's mix of established neighborhoods, commercial corridors, and proximity to I-4 means we regularly service a wide range of properties. From rekeying homes in historic Longwood to installing commercial-grade locks for businesses along Ronald Reagan Boulevard, we handle it all.`,
    population: '15,000+',
    landmarks: [
      'Historic District of Longwood',
      'Longwood Village',
      'Wekiva Springs State Park (nearby)',
      'SR 434 commercial corridor',
    ],
    neighborhoods: ['Wekiva', 'Springs Landing', 'Sabal Point', 'Sweetwater Club', 'Brantley Harbor'],
    localFacts: 'Longwood is one of Seminole County\'s oldest incorporated cities and features a variety of housing from historic homes to modern developments, all of which benefit from professional lock maintenance and upgrades.',
    metaTitle: 'Locksmith Longwood FL | 24/7 Lock & Key Services',
    metaDescription: 'Reliable locksmith in Longwood, FL. Emergency lockouts, rekeying, lock installation, car keys. Daniel Cerda Locksmith serves all of Longwood. Licensed & insured. Call now.',
    keywords: [
      'locksmith longwood fl',
      'locksmith longwood florida',
      'emergency locksmith longwood fl',
      'car lockout longwood',
      'residential locksmith longwood fl',
    ],
    geo: { lat: 28.7031, lng: -81.3384 },
    isPrimary: false,
  },
  {
    slug: 'oviedo-fl',
    city: 'Oviedo',
    state: 'FL',
    zip: ['32765', '32766'],
    county: 'Seminole',
    distance: '15 miles from Sanford',
    description: 'Professional locksmith services in Oviedo, FL — serving one of Seminole County\'s fastest-growing communities.',
    longDescription: `Oviedo is one of Central Florida's fastest-growing communities, and Daniel Cerda Locksmith is proud to serve its growing population. Just 15 miles from our Sanford headquarters, we provide comprehensive locksmith services to Oviedo homeowners, businesses, and motorists.\n\nFrom the established neighborhoods near downtown Oviedo to the newer developments along Alafaya Trail, we deliver the same quality and responsiveness that has made us a top-rated locksmith in Seminole County. New homeowners moving to Oviedo frequently call us for rekeying services — a smart first step in any new home.`,
    population: '38,000+',
    landmarks: [
      'Oviedo Town Center',
      'University of Central Florida (nearby)',
      'Oviedo Mall',
      'Black Hammock Adventures',
      'Sweetwater Branch',
    ],
    neighborhoods: ['Live Oak Estates', 'Tuska Ridge', 'Twin Rivers', 'Brantley Place', 'Chapman Groves'],
    localFacts: 'Oviedo is known for its "Oviedo on the Park" mixed-use development and has seen significant population growth due to its proximity to UCF and its excellent school districts.',
    metaTitle: 'Locksmith Oviedo FL | Fast Reliable Lock & Key Services',
    metaDescription: 'Trusted locksmith in Oviedo, FL. 24/7 emergency service, car lockouts, home rekeying, smart lock installation. Daniel Cerda Locksmith. Licensed & insured. Call now.',
    keywords: [
      'locksmith oviedo fl',
      'locksmith oviedo florida',
      'emergency locksmith oviedo',
      'car lockout oviedo fl',
      'locksmith near me oviedo',
    ],
    geo: { lat: 28.6700, lng: -81.2081 },
    isPrimary: false,
  },
  {
    slug: 'debary-fl',
    city: 'DeBary',
    state: 'FL',
    zip: ['32713'],
    county: 'Volusia',
    distance: '10 miles from Sanford',
    description: 'Serving DeBary, FL with fast professional locksmith services — just across the Seminole/Volusia county line.',
    longDescription: `Daniel Cerda Locksmith extends its service area into DeBary, FL — a charming community in Volusia County just 10 miles from our Sanford location. DeBary residents enjoy the same fast response times and professional service we provide throughout Seminole County.\n\nLocated along the St. Johns River and near the Gemini Springs State Park, DeBary is a growing community with a mix of residential neighborhoods and small businesses. Our locksmiths regularly serve DeBary for home lockouts, vehicle lockouts, and security upgrades.`,
    population: '21,000+',
    landmarks: [
      'Gemini Springs State Park',
      'DeBary Hall Historic Site',
      'St. Johns River',
      'SunRail DeBary Station',
      'High Banks Road',
    ],
    neighborhoods: ['DeBary Country Club', 'Enterprise', 'Saxon', 'Springview', 'Kensington Manor'],
    localFacts: 'DeBary is located near I-4 and the SunRail corridor, making it a convenient community for commuters. The city\'s proximity to natural areas like Gemini Springs adds to the quality of life for residents.',
    metaTitle: 'Locksmith DeBary FL | Professional Lock & Key Services',
    metaDescription: 'Reliable locksmith in DeBary, FL. Emergency lockouts, rekeying, car key replacement. Daniel Cerda Locksmith serves DeBary and surrounding Volusia County. Call now.',
    keywords: [
      'locksmith debary fl',
      'locksmith debary florida',
      'emergency locksmith debary',
      'car lockout debary fl',
      'locksmith near me debary',
    ],
    geo: { lat: 28.8870, lng: -81.3262 },
    isPrimary: false,
  },
  {
    slug: 'winter-springs-fl',
    city: 'Winter Springs',
    state: 'FL',
    zip: ['32708'],
    county: 'Seminole',
    distance: '16 miles from Sanford',
    description: 'Locksmith services in Winter Springs, FL — professional, reliable, and available around the clock.',
    longDescription: `Winter Springs is a thriving Seminole County community, and Daniel Cerda Locksmith provides full locksmith services to its residents and businesses. At approximately 16 miles from our Sanford base, we typically arrive for Winter Springs emergencies within 30-40 minutes.\n\nWinter Springs is known for its excellent quality of life, top-rated schools, and family-friendly atmosphere. Many of our Winter Springs clients are homeowners looking to upgrade their security systems, rekey after a move, or install smart locks — as well as motorists who need car lockout or key replacement services.`,
    population: '37,000+',
    landmarks: [
      'Winter Springs Town Center',
      'Trotwood Park',
      'Central Winds Park',
      'Lake Jesup Conservation Area',
      'SR 434 corridor',
    ],
    neighborhoods: ['Tuscawilla', 'The Highlands', 'Vistawilla', 'Stone Gable', 'Moss Cove'],
    localFacts: 'Winter Springs has a high homeownership rate and active community involvement, which aligns well with demand for residential locksmith services including smart home security upgrades.',
    metaTitle: 'Locksmith Winter Springs FL | 24/7 Lock & Key Service',
    metaDescription: 'Professional locksmith in Winter Springs, FL. Home lockouts, rekeying, smart locks, car key replacement. Daniel Cerda Locksmith. Licensed & insured. Fast response. Call now.',
    keywords: [
      'locksmith winter springs fl',
      'locksmith winter springs florida',
      'emergency locksmith winter springs',
      'car lockout winter springs fl',
      'residential locksmith winter springs',
    ],
    geo: { lat: 28.6983, lng: -81.2706 },
    isPrimary: false,
  },
  {
    slug: 'casselberry-fl',
    city: 'Casselberry',
    state: 'FL',
    zip: ['32707', '32730'],
    county: 'Seminole',
    distance: '18 miles from Sanford',
    description: 'Dependable locksmith services in Casselberry, FL — residential, commercial, and automotive.',
    longDescription: `Casselberry residents and business owners count on Daniel Cerda Locksmith for fast, professional locksmith service. About 18 miles from our Sanford home base, we serve all of Casselberry with the same commitment to quality and responsiveness.\n\nCasselberry features a mix of residential neighborhoods, commercial strips, and multifamily housing. We regularly service apartment complexes, small businesses, and homeowners throughout Casselberry for a full range of locksmith needs from simple lockouts to complete security system upgrades.`,
    population: '29,000+',
    landmarks: [
      'Lake Concord Park',
      'Casselberry Sports Complex',
      'Red Bug Lake Road corridor',
      'SR 436 (Semoran Blvd) commercial strip',
    ],
    neighborhoods: ['Sausalito', 'Lake Kathryn', 'Sterling Park', 'Deer Run', 'Camelot'],
    localFacts: 'Casselberry is centrally located within Seminole County and serves as a hub for commuters heading to Orlando, making it an important area for both residential and commercial security services.',
    metaTitle: 'Locksmith Casselberry FL | Trusted 24/7 Lock Services',
    metaDescription: 'Trusted locksmith in Casselberry, FL. Car lockouts, home rekeying, lock installation, emergency service. Daniel Cerda Locksmith. Licensed & insured. Call for fast response.',
    keywords: [
      'locksmith casselberry fl',
      'locksmith casselberry florida',
      'emergency locksmith casselberry',
      'car lockout casselberry fl',
      'residential locksmith casselberry',
    ],
    geo: { lat: 28.6681, lng: -81.3248 },
    isPrimary: false,
  },
]

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug)
}

export function getPrimaryArea(): ServiceArea {
  return serviceAreas.find((a) => a.isPrimary)!
}
