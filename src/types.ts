export interface Game {
  id: string;
  title: string;
  genre: string;
  cover: string;
  description: string;
  longDescription: string;
  releaseDate: string;
  platforms: ('PC' | 'Console' | 'Mobile' | 'VR')[];
  rating: number;
  features: string[];
  screenshots: string[];
  status: 'Released' | 'In Development' | 'Beta';
  demoType: 'combat' | 'hacking' | 'farming';
  downloads?: string;
  specs?: {
    minimum: string;
    recommended: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  cover: string;
  likes: number;
  commentsCount: number;
  tags: string[];
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Feedback {
  name: string;
  email: string;
  subject: string;
  message: string;
  gameInterest?: string;
}
