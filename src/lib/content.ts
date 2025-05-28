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
  date: "Saturday, June 21, 2025",
  time: "1:00 PM - 5:00 PM",
  venueName: "Mon Ami",
  venueAddress: "1541 Ocean Ave, Santa Monica, CA 90401",
  description:
    "Join us for an afternoon of joy, laughter, and celebration as we mark a fun milestone in our journey together. We will provide some apps and a round of champagne, but appreciate you helping us celebrate to your hearts desire",
  imageUrl:
    "https://partiful.imgix.net/user/0egHoXSRPdNlQQfrvyPaP8359bw1/73e1600c-affa-4032-ac?fit=clip&w=920&auto=format",
  dataAiHint: "engagement party",
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
    id: "1",
    name: "44 the Musical",
    description:
      "Right next to the venue with stunning ocean views, perfect for a relaxing stay.",
    imageUrl: "/shore_hotel.jpg",
    link: "https://www.shorehotel.com/",
    dataAiHint: "shore hotel ocean view",
  },
  {
    id: "2",
    name: "Historic Downtown Blissville",
    description:
      "Discover charming boutiques, art galleries, and cozy cafes in the heart of our town.",
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    dataAiHint: "historic town",
  },
  {
    id: "3",
    name: "Sunset View Winery",
    description:
      "Enjoy wine tasting with breathtaking views, especially magical at sunset.",
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    dataAiHint: "winery sunset",
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
    id: "1",
    name: "Shore Hotel",
    description:
      "Right next to the venue with stunning ocean views, perfect for a relaxing stay.",
    imageUrl: "/shore_hotel.jpg",
    bookingLink: "https://www.shorehotel.com/",
    dataAiHint: "shore hotel ocean view",
  },
  {
    id: "2",
    name: "Travel Lodge Culver City",
    description: "An affordable option close to our house.",
    imageUrl: "/travel_lodge.png",
    bookingLink:
      "https://www.wyndhamhotels.com/travelodge/culver-city-california/travelodge-culver-city/overview",
    dataAiHint: "travel lodge culver city",
  },
  {
    id: "3",
    name: "Hotel Erwin",
    description:
      "Fun and hip hotel in Venice Beach, perfect for those who value nightlife and beach vibes.",
    imageUrl: "/hotel_erwin.png",
    bookingLink: "https://www.hotelerwin.com/",
    dataAiHint: "hotel erwin venice beach",
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
  coupleName1: "Dylan",
  coupleName2: "Kalvin",
  bio1: "Dylan is a software engineer from Seattle.  A dog lover and adventure enthusiast. She values her community, family, and friends more than words can convey.  She always has a random fact to share!",
  bio2: "Kalvin is a designer and fashion salesman from LA (Compton).  A Christian, book lover, and party hit!  He values all people and tries to make everyones' world a little better every day.  You know he gives the best hugs!",
  howWeMet:
    'Kalvin and Dylan matched on Hinge (a dating app) in May or June of 2022.  They FaceTimed and texted for a few weeks or possibly months before planning a successful first date. Their first date, on July 25th, was a backyard bonfire at Dylan\'s house so that she could watch over her dog, Buddy Holly, as he had recently had surgery.  They talked for probably way too long (as they both tend to) and both gave ample attention to Buddy.  They spent tons of time together going forward but neither were in a rush to put labels on things.  It wasn\'t until Friendsgiving at Fuller House (a friend\'s house) that they finally had the "talk".  As of November 20, 2022 they were officially dating.  In April of the following year Kalvin moved in with Dylan and Buddy Holly.  Sadly Buddy passed away (at nearly 15 years old) the following year.  Both Dylan and Kavlin loved and missed him dearly.  In March of 2024 they foster-failed Mama Mavis, a 7 (?) year old Pit-Bull, Shar Pei mix!  She is the a princess and the light of their lives!  In June of 2024 Kalvin and Dylan went to Greece for a weeding, where Kalvin surprised Dylan with a proposal in front of the Acropolis.  Dylan\'s answer was an enthusiastic "Of course!" The two have been enjoying calling each other "fiancé" and taking their time planning their wedding.  They are so excited to celebrate their engagement with all of you and might ask for your thoughts on what they should do for their wedding!',
  imageUrl: "/sunset.jpeg",
  dataAiHint: "happy couple",
};
