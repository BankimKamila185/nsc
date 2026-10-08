export interface PujaScheduleEvent {
  time: string;
  title: string;
  titleBn?: string;
  isKey?: boolean;
}

export interface PujaScheduleDay {
  id: string;
  dayName: string;
  dayNameBn: string;
  dateStr: string; // e.g., "15th Oct. 2026"
  isoDate: string; // "2026-10-15"
  weekday: string; // "Thursday"
  events: PujaScheduleEvent[];
  note?: string;
  badge?: string;
  icon?: 'kalash' | 'trishul' | 'dhak' | 'lotus' | 'diya' | 'sindhur' | 'visarjan';
}

export interface EventItem {
  id: string;
  title: string;
  titleBn?: string;
  category: 'Religious' | 'Cultural' | 'Community' | 'Social' | 'Youth';
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  isFeatured?: boolean;
  scheduleDetails?: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  year: number;
  eventDate?: string;
  imageUrl: string;
  caption: string;
  tags: string[];
  isCover?: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  positionBn?: string;
  category: 'Executive Committee' | 'Advisory Board' | 'Puja Sub-Committee' | 'Youth Wing';
  photoUrl?: string;
  description?: string;
  message?: string;
  phonePlaceholder?: string;
  emailPlaceholder?: string;
  order: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  isUrgent: boolean;
  isActive: boolean;
  actionLink?: string;
  actionText?: string;
}

export interface HistoryMilestone {
  id: string;
  year: number;
  title: string;
  titleBn?: string;
  subtitle: string;
  description: string;
  highlights: string[];
  photoUrl?: string;
}

export interface CommunityPillar {
  id: string;
  title: string;
  titleBn?: string;
  category: string;
  summary: string;
  description: string;
  stats?: string;
  photoUrl: string;
  iconName: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'Facebook' | 'YouTube' | 'WhatsApp';
  handle: string;
  url: string;
  note?: string;
}

export interface SiteSettings {
  orgName: string;
  orgNameBn: string;
  establishedYear: number;
  currentPujaEdition: string;
  celebrationYear: number;
  addressRoom: string;
  addressBuilding: string;
  addressArea: string;
  addressCity: string;
  addressState: string;
  addressPincode: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookName: string;
  facebookUrl: string;
  announcementTicker: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  mobile: string;
  purpose: string;
  message: string;
  timestamp: string;
  status: 'Unread' | 'Replied' | 'Archived';
}
