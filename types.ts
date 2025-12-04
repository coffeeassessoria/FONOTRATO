
export interface Testimonial {
  id: number;
  name: string;
  content: string;
  likes: number;
  timeAgo: string;
  hasReply?: boolean; // To simulate "Reply" links
  imageUrl?: string; // Add optional image URL for profile pictures
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ModuleItem {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BonusItem {
  title: string;
  originalPrice: number;
  description: string;
}

export interface TargetAudienceItem {
  id: number;
  title: string;
  description: string;
  icon: string; // Changed from component to string identifier to avoid JSON errors
}