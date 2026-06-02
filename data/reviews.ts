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
    author: 'Ericka Sanchez',
    location: 'Sanford, FL',
    rating: 5,
    date: '2024-01-05',
    text: "Needed his services a bit after New Years Eve! Eek. He arrived really quickly and got us situated very quickly. Had called other locksmiths that refused to help! Hope to never need one again but if I do we'll definitely reach out to Daniel again!!!",
    service: 'Emergency Lockout',
  },
  {
    id: 'r2',
    author: 'Joe Rodriguez',
    location: 'Sanford, FL',
    rating: 5,
    date: '2019-03-12',
    text: "I had all the locks changed at my house and he came out within the hour and was very knowledgeable and professional. I would highly recommend him.",
    service: 'Lock Change',
  },
  {
    id: 'r3',
    author: 'Matt N',
    location: 'Sanford, FL',
    rating: 5,
    date: '2020-06-20',
    text: "Daniel is a true professional. He inspected my locks, noticed they were really old, presented solutions, and got the job done. His actions definitely saved me money in the long term. He under-promised and over-delivered. I will, without question, recommend him to friends, family, and colleagues.",
    service: 'Lock Inspection & Replacement',
  },
  {
    id: 'r4',
    author: 'Lenox',
    location: 'Longwood, FL',
    rating: 5,
    date: '2019-05-08',
    text: "We live in Longwood and needed a locksmith to not only change some locks, but to give us advice on a new keypad lock we could use for the dog sitter and others where we could change the code when needed. Daniel came over to review our needs and took care of everything perfectly.",
    service: 'Lock Change & Smart Lock',
  },
  {
    id: 'r5',
    author: 'Michael Richards',
    location: 'Sanford, FL',
    rating: 5,
    date: '2021-04-15',
    text: "5/5, would lock myself out of the house again! Wait... ☺️ My neighbor locked herself out of her house, I called this number, and Daniel was there fast and handled everything professionally. Glad I had his number!",
    service: 'House Lockout',
  },
  {
    id: 'r6',
    author: 'Jerry Montes',
    location: 'Sanford, FL',
    rating: 5,
    date: '2022-02-10',
    text: "Best locksmith experience I've ever had. Impeccable customer service, professional and thorough. I will definitely be using Daniel and his team for my future locksmith projects. Right On!",
    service: 'Residential Locksmith',
  },
  {
    id: 'r7',
    author: 'Robert Turner',
    location: 'Sanford, FL',
    rating: 5,
    date: '2022-07-22',
    text: "Locked out of house. Called Daniel's number and got prompt call back. Came to my home in about an hour after finishing another job. Was very polite. Quickly discussed options and gained entry to our house in reasonable time. Seemed very professional. Highly recommend him.",
    service: 'House Lockout',
  },
  {
    id: 'r8',
    author: 'Joe Hartley',
    location: 'Sanford, FL',
    rating: 5,
    date: '2019-08-30',
    text: "Excellent customer service. Very professional and showed up within an hour of us calling him. I would recommend him to anyone in need of a locksmith.",
    service: 'Emergency Locksmith',
  },
  {
    id: 'r9',
    author: 'Phil Gomes',
    location: 'Sanford, FL',
    rating: 5,
    date: '2022-09-14',
    text: "Daniel was quick to get to me and very professional, unlocked my truck and had me on my way ASAP. Thank you!",
    service: 'Car Lockout',
  },
  {
    id: 'r10',
    author: 'JoAnne Ferraro',
    location: 'Sanford, FL',
    rating: 5,
    date: '2020-08-03',
    text: "Excellent service, fast. Daniel came out in the pouring rain & got me in fast & safely. He is the best!",
    service: 'Emergency Lockout',
  },
  {
    id: 'r11',
    author: 'Jami Mollica',
    location: 'Longwood, FL',
    rating: 5,
    date: '2019-11-17',
    text: "Danny was professional and super friendly. He was quick to respond and got us in quickly.",
    service: 'House Lockout',
  },
  {
    id: 'r12',
    author: 'Nina Genovese',
    location: 'Sanford, FL',
    rating: 5,
    date: '2025-03-08',
    text: "Excellent service, fast and efficient, thank you!",
    service: 'Locksmith Service',
  },
  {
    id: 'r13',
    author: 'Venus Hernandez',
    location: 'Sanford, FL',
    rating: 5,
    date: '2024-04-19',
    text: "Quick and reliable — honestly a lifesaver!",
    service: 'Emergency Locksmith',
  },
  {
    id: 'r14',
    author: 'Don Taylor',
    location: 'Sanford, FL',
    rating: 5,
    date: '2021-09-05',
    text: "Professional and quick. Thank you again.",
    service: 'Locksmith Service',
  },
]

export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: 14,
  bestRating: 5,
  worstRating: 1,
}
