export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export interface Event {
  id: number;
  title: string;
  date: Date;
  description: string;
  location: string;
}

export interface StudentSpotlight {
  id: number;
  name: string;
  grade: string;
  achievement: string;
  quote: string;
  imageUrl: string;
}