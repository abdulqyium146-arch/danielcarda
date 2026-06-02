export interface Review {
  id: string
  author: string
  location: string
  rating: number
  date: string
  text: string
  service: string
  avatar?: string
}

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    location: 'Sanford, FL',
    rating: 5,
    date: '2024-11-15',
    text: "Daniel arrived within 25 minutes and had me back in my car before I even finished my coffee. Super professional, explained everything he was doing, and the price was completely fair. I kept his number saved — he's my locksmith for life.",
    service: 'Car Lockout',
  },
  {
    id: 'r2',
    author: 'Mike T.',
    location: 'Lake Mary, FL',
    rating: 5,
    date: '2024-10-28',
    text: "Lost my house keys late on a Sunday night and Daniel answered right away. He was at my door in under 30 minutes, got me in without any drama, and even gave me tips on upgrading my deadbolt. Outstanding service when I really needed it.",
    service: 'House Lockout',
  },
  {
    id: 'r3',
    author: 'Jennifer R.',
    location: 'Longwood, FL',
    rating: 5,
    date: '2024-09-05',
    text: "We just bought our first home and wanted to make sure the previous owners couldn't walk in. Daniel rekeyed all four of our exterior locks in about 45 minutes. He was thorough, explained the whole process, and gave us extra keys. Highly recommend for new homeowners.",
    service: 'Rekeying',
  },
  {
    id: 'r4',
    author: 'Carlos V.',
    location: 'Oviedo, FL',
    rating: 5,
    date: '2024-08-19',
    text: "My transponder key stopped working out of nowhere. I was dreading the dealership trip and the $400 bill. Found Daniel online, he came to my house, programmed a new key on-site in about an hour, and charged me half what the dealer would have. Incredible service.",
    service: 'Car Key Replacement',
  },
  {
    id: 'r5',
    author: 'Lisa K.',
    location: 'Sanford, FL',
    rating: 5,
    date: '2024-07-30',
    text: "Needed to upgrade the commercial locks at my boutique after a break-in attempt. Daniel did a thorough security assessment, recommended grade-1 deadbolts for the main entrance, and had everything installed in one afternoon. My staff feels so much safer. Worth every penny.",
    service: 'Commercial Locksmith',
  },
  {
    id: 'r6',
    author: 'Robert A.',
    location: 'Winter Springs, FL',
    rating: 5,
    date: '2024-06-12',
    text: "Installed a Schlage smart lock for us and set up the whole app. My kids can get in without a key now and I get notifications every time someone unlocks the door. Daniel took the time to walk us through all the features. Professional job start to finish.",
    service: 'Smart Lock Installation',
  },
  {
    id: 'r7',
    author: 'Amanda P.',
    location: 'Casselberry, FL',
    rating: 5,
    date: '2024-05-08',
    text: "My deadbolt was completely seized — I couldn't lock my front door. Daniel diagnosed it in minutes: worn springs and a bent strike plate. Fixed on the spot for a very reasonable price. Honestly saved me from buying a whole new lock set.",
    service: 'Lock Repair',
  },
  {
    id: 'r8',
    author: 'David W.',
    location: 'DeBary, FL',
    rating: 5,
    date: '2024-04-22',
    text: "Called at 2 AM with my toddler in the house and me locked outside. Daniel was calm, professional, and at my door in 22 minutes. He got me in without waking my daughter. Can't thank him enough. This is who you want for a true emergency.",
    service: 'House Lockout',
  },
]

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 163,
  bestRating: 5,
  worstRating: 1,
}
