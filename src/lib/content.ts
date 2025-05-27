export interface EngagementDetailsContent {
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
}

export const engagementDetailsContent: EngagementDetailsContent = {
  date: 'Saturday, October 26, 2024',
  time: '6:00 PM - 10:00 PM',
  venueName: 'The Willow Creek Manor',
  venueAddress: '123 Lovebird Lane, Blissville, CA 90210',
  description: 'Join us for an evening of joy, laughter, and celebration as we mark the beginning of our journey together. Drinks, dinner, and dancing to follow heartfelt toasts!',
  imageUrl: 'https://placehold.co/800x600.png',
  dataAiHint: 'engagement party'
};

export interface Activity {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link?: string;
  dataAiHint: string;
}

export const localActivitiesContent: Activity[] = [
  {
    id: '1',
    name: 'Blissville Botanical Gardens',
    description: 'Explore lush gardens, serene pathways, and beautiful floral displays. A perfect spot for a relaxing afternoon.',
    imageUrl: 'https://placehold.co/600x400.png',
    link: '#',
    dataAiHint: 'botanical garden'
  },
  {
    id: '2',
    name: 'Historic Downtown Blissville',
    description: 'Discover charming boutiques, art galleries, and cozy cafes in the heart of our town.',
    imageUrl: 'https://placehold.co/600x400.png',
    link: '#',
    dataAiHint: 'historic town'
  },
  {
    id: '3',
    name: 'Sunset View Winery',
    description: 'Enjoy wine tasting with breathtaking views, especially magical at sunset.',
    imageUrl: 'https://placehold.co/600x400.png',
    link: '#',
    dataAiHint: 'winery sunset'
  },
];

export interface Accommodation {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  bookingLink: string;
  dataAiHint: string;
}

export const accommodationOptionsContent: Accommodation[] = [
  {
    id: '1',
    name: 'The Grand Bliss Hotel',
    description: 'Luxury accommodations with top-tier amenities, located downtown.',
    imageUrl: 'https://placehold.co/600x400.png',
    bookingLink: '#',
    dataAiHint: 'luxury hotel'
  },
  {
    id: '2',
    name: 'Cozy Corner B&B',
    description: 'A charming bed and breakfast offering a personal touch and homemade treats.',
    imageUrl: 'https://placehold.co/600x400.png',
    bookingLink: '#',
    dataAiHint: 'cozy bed breakfast'
  },
  {
    id: '3',
    name: 'Riverside Inn',
    description: 'Comfortable rooms with scenic river views, perfect for a peaceful stay.',
    imageUrl: 'https://placehold.co/600x400.png',
    bookingLink: '#',
    dataAiHint: 'riverside inn'
  },
];

export interface OurStoryContent {
  coupleName1: string;
  coupleName2: string;
  bio1: string;
  bio2: string;
  howWeMet: string;
  imageUrl: string;
  dataAiHint: string;
}

export const ourStoryContent: OurStoryContent = {
  coupleName1: 'Alex',
  coupleName2: 'Jamie',
  bio1: "Alex, a lover of mountain trails and morning coffees, finds joy in coding innovative solutions and capturing life's moments through a camera lens.",
  bio2: "Jamie, an artist душа with a passion for painting sunsets and exploring hidden city gems, thrives on creative expression and cozy bookstore afternoons.",
  howWeMet: "Our paths first crossed at a local farmer's market, amidst a vibrant tapestry of fresh produce and artisanal crafts. A shared laugh over a dropped avocado sparked a conversation that felt like coming home. From that day on, market strolls turned into shared adventures, and quiet coffees into dreams whispered under starlit skies. We discovered a universe in each other's eyes, a comforting rhythm in our shared silences, and an endless melody in our laughter. And so, our forever began, unexpectedly, beautifully.",
  imageUrl: 'https://placehold.co/800x500.png',
  dataAiHint: 'happy couple'
};
