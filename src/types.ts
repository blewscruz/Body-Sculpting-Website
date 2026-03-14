export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  price?: string;
  category: 'main' | 'addon';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'Google' | 'Yelp' | 'Vagaro';
}

export interface FAQItem {
  question: string;
  answer: string;
}
