import { Service, Review, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cavitation',
    title: 'Cavitation Sculpt',
    category: 'main',
    description: 'The Ultimate Fat Melting & Sculpting Package.',
    details: 'A powerful combination of Ultrasound Cavitation, Radio Frequency (RF), Vacuum Therapy, Colombian Wood Therapy, and Brazilian Lymphatic Drainage.',
    image: 'https://picsum.photos/seed/sculpt1/800/600'
  },
  {
    id: 'signature',
    title: 'Signature Sculpt',
    category: 'main',
    description: 'The Tone & Detox Package.',
    details: 'Focuses on contouring and detoxification using Brazilian Lymphatic Drainage and Colombian Wood Therapy.',
    image: 'https://picsum.photos/seed/sculpt2/800/600'
  },
  {
    id: 'lymphatic',
    title: 'Brazilian Lymphatic Drainage',
    category: 'main',
    description: 'Instant slimming and immune boost.',
    details: 'Reduces bloat, boosts the immune system, and provides an immediate slimming effect through specialized manual techniques.',
    image: 'https://picsum.photos/seed/sculpt3/800/600'
  },
  {
    id: 'post-op',
    title: 'Post-Op Lymphatic Drainage',
    category: 'main',
    description: 'Essential recovery for BBL & Lipo.',
    details: 'Crucial for patient safety, preventing seromas, and speeding up recovery after surgical procedures like BBL or Liposuction.',
    image: 'https://picsum.photos/seed/sculpt4/800/600'
  },
  {
    id: 'rf-facial',
    title: 'RF Skin Tightening Facial',
    category: 'addon',
    description: 'Anti-aging & Collagen boost.',
    details: 'Uses radio frequency to stimulate collagen production for a firmer, more youthful appearance.',
    image: 'https://picsum.photos/seed/facial/800/600'
  },
  {
    id: 'vacuum-butt',
    title: 'Vacuum Butt Therapy',
    category: 'addon',
    description: 'Non-invasive BBL effect.',
    details: 'Plumps and tones the glutes using vacuum suction for a lifted, firmer look without surgery.',
    image: 'https://picsum.photos/seed/butt/800/600'
  },
  {
    id: 'sauna-blanket',
    title: 'Infrared Sauna Blanket',
    category: 'addon',
    description: 'Detox & Calorie burn.',
    details: 'Deep relaxation while burning calories and flushing toxins through infrared heat.',
    image: 'https://picsum.photos/seed/sauna/800/600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'The most relaxing experience. I saw results after just one session of the Cavitation Sculpt!',
    source: 'Google'
  },
  {
    id: '2',
    author: 'Jessica L.',
    rating: 5,
    text: 'Highly recommend for post-op care. She is so knowledgeable and gentle.',
    source: 'Vagaro'
  },
  {
    id: '3',
    author: 'Elena R.',
    rating: 5,
    text: 'The private studio vibe is everything. I felt like a VIP from the moment I walked in.',
    source: 'Yelp'
  },
  {
    id: '4',
    author: 'Amanda K.',
    rating: 5,
    text: 'I was skeptical about wood therapy but the results speak for themselves. My skin feels so much firmer!',
    source: 'Google'
  },
  {
    id: '5',
    author: 'Michelle P.',
    rating: 5,
    text: 'The lymphatic drainage massage is a game changer for bloating. I feel so much lighter.',
    source: 'Vagaro'
  },
  {
    id: '6',
    author: 'Rachel S.',
    rating: 5,
    text: 'Best post-op massage in the city. Professional, clean, and very effective.',
    source: 'Google'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How should I prepare for my appointment?',
    answer: 'Drink at least 2 liters of water the day before and day of. Avoid heavy meals 2 hours prior to your session.'
  },
  {
    question: 'What is the aftercare protocol?',
    answer: 'Continue drinking plenty of water. We recommend 30 minutes of light cardio to help flush the lymphatic system. Avoid alcohol and heavy carbs for 72 hours for best results.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require a 24-hour notice for all cancellations. No-shows or late cancellations will be subject to a fee to protect our sculptor\'s time.'
  },
  {
    question: 'Where are you located?',
    answer: 'We are located in a private studio in Downtown. The exact address and arrival instructions will be provided in your booking confirmation email.'
  }
];
