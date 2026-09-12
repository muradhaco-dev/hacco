export type Language = 'ar' | 'tr' | 'en';
export type Direction = 'rtl' | 'ltr';
export type NavPage = 'home' | 'services' | 'portfolio' | 'reviews' | 'why-us' | 'contact';

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  country: string;
  countryFlag: string;
  rating: number;
  review: string;
  avatar: string;
  projectTag: string;
  date: string;
}

export interface ProjectResultItem {
  id: string;
  projectTitle: string;
  clientName: string;
  industry: string;
  badge: string;
  whatWasRequested: string;
  whatWasDelivered: string;
  tangibleMetrics: { label: string; value: string; detail: string }[];
  clientOpinion: string;
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'fullstack';
  categoryLabel: string;
  description: string;
  fullDetails: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  client: string;
  year: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  badge: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
}
