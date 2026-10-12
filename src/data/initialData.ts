import {
  PujaScheduleDay,
  EventItem,
  GalleryPhoto,
  CommitteeMember,
  Announcement,
  HistoryMilestone,
  CommunityPillar,
  SocialLink,
  SiteSettings,
  ContactMessage
} from '../types';

export const initialSiteSettings: SiteSettings = {
  orgName: 'NETAJI SUBHAS CHANDRA WELFARE SANGHA',
  orgNameBn: 'নেতাজী সুভাষ চন্দ্র ওয়েলফেয়ার সংঘ',
  establishedYear: 2007,
  currentPujaEdition: '20th',
  celebrationYear: 2026,
  addressRoom: 'Room No. 6',
  addressBuilding: 'Ganesh Niwas Mitra Mandal, Near B.M.C. Playground',
  addressArea: 'Anand Wadi, Kurar Village',
  addressCity: 'Malad (East), Mumbai',
  addressState: 'Maharashtra',
  addressPincode: '400097',
  instagramHandle: '@nscwelfare.sangha',
  instagramUrl: 'https://instagram.com/nscwelfare.sangha',
  facebookName: 'Netaji Subhas Chandra Welfare Sangha',
  facebookUrl: 'https://www.facebook.com/share/19chm2MKaR/',
  announcementTicker: '🌸 20th Durga Puja 2026 Celebration at Kurar Village, Malad East • Maha Astami Pushpanjali: 9:00 AM – 12:00 PM • Maha Bhandara: Maha Navami 8:00 PM • All devotees and families are cordially invited!'
};

export const initialPujaSchedule: PujaScheduleDay[] = [
  {
    id: 'panchami',
    dayName: 'Maha Panchami',
    dayNameBn: 'মহা পঞ্চমী',
    dateStr: '15th Oct. 2026',
    isoDate: '2026-10-15',
    weekday: 'Thursday',
    badge: 'Inauguration & Welcoming',
    icon: 'kalash',
    events: [
      { time: 'Throughout the Day', title: 'Debir Agaman (Welcoming the Mother Goddess)', titleBn: 'দেবীর আগমন', isKey: true }
    ],
    note: 'Debir Agaman marks the sacred arrival of Maa Durga to her earthly abode among her devotees.'
  },
  {
    id: 'sasthi',
    dayName: 'Maha Sasthi',
    dayNameBn: 'মহা ষষ্ঠী',
    dateStr: '16th Oct. 2026',
    isoDate: '2026-10-16',
    weekday: 'Friday',
    badge: 'Bodhan & Kalparambha',
    icon: 'diya',
    events: [
      { time: '6:12 a.m.', title: 'Bodhan (Awakening Ritual)', titleBn: 'বোধন', isKey: true },
      { time: '10:27 a.m.', title: 'Sasthi Puja', titleBn: 'ষষ্ঠী পূজা' },
      { time: '11:30 a.m.', title: 'Pushpanjali (Floral Offerings)', titleBn: 'পুষ্পাঞ্জলি', isKey: true },
      { time: '7:00 p.m.', title: 'Sandhya Arati (Evening Lamp Offering)', titleBn: 'সন্ধ্যা আরতি' }
    ],
    note: 'Devotees gather early for the sacred Bodhan ceremony with traditional Dhak rhythms.'
  },
  {
    id: 'saptami',
    dayName: 'Maha Saptami',
    dayNameBn: 'মহা সপ্তমী',
    dateStr: '17th Oct. 2026',
    isoDate: '2026-10-17',
    weekday: 'Saturday',
    badge: 'Navapatrika Snan',
    icon: 'kalash',
    events: [
      { time: '10:26 a.m.', title: 'Ghot Uttlan (Sacred Urn Installation)', titleBn: 'ঘট উত্থাপন' },
      { time: '10:30 a.m.', title: 'Navapatrika (Kola Bou Snan Ritual)', titleBn: 'নবপত্রিকা স্নান', isKey: true },
      { time: '12:10 p.m.', title: 'Pushpanjali (Floral Offerings)', titleBn: 'পুষ্পাঞ্জলি', isKey: true },
      { time: '8:00 p.m.', title: 'Sandhya Arati (Evening Aarti)', titleBn: 'সন্ধ্যা আরতি' }
    ],
    note: 'Special Note: Maha Saptami Aitrikta Puja — 18th Oct. 2026 (Sunday).'
  },
  {
    id: 'astami',
    dayName: 'Maha Astami',
    dayNameBn: 'মহা অষ্টমী',
    dateStr: '19th Oct. 2026',
    isoDate: '2026-10-19',
    weekday: 'Monday',
    badge: 'Sandhi Puja & Maha Pushpanjali',
    icon: 'trishul',
    events: [
      { time: '6:00 a.m. to 7:50 a.m.', title: 'Astami Puja', titleBn: 'অষ্টমী পূজা' },
      { time: '7:50 a.m. to 8:14 a.m.', title: 'Sandhi Puja (Sacred Confluence Ritual)', titleBn: 'সন্ধিপূজা', isKey: true },
      { time: '7:50 a.m.', title: 'Balidan (Symbolic Offering)', titleBn: 'বলিদান', isKey: true },
      { time: '9:00 a.m. to 12:00 p.m.', title: 'Pushpanjali (Floral Offerings for Devotees)', titleBn: 'মহা পুষ্পাঞ্জলি', isKey: true },
      { time: '8:00 p.m.', title: 'Sandhya Arati & Dhunuchi Naach', titleBn: 'সন্ধ্যা আরতি ও ধুনুচি নাচ' }
    ],
    note: 'The most sacred day of Durga Puja. Sandhi Puja requires 108 lotus flowers and 108 earthen lamps.'
  },
  {
    id: 'navami',
    dayName: 'Maha Navami',
    dayNameBn: 'মহা নবমী',
    dateStr: '20th Oct. 2026',
    isoDate: '2026-10-20',
    weekday: 'Tuesday',
    badge: 'Maha Bhandara & Homa',
    icon: 'dhak',
    events: [
      { time: '9:30 a.m. to 10:00 a.m.', title: 'Navami Puja', titleBn: 'নবমী পূজা' },
      { time: '10:30 a.m.', title: 'Pushpanjali', titleBn: 'পুষ্পাঞ্জলি', isKey: true },
      { time: '7:00 p.m.', title: 'Sandhya Arati', titleBn: 'সন্ধ্যা আরতি' },
      { time: '8:00 p.m.', title: 'MAHA BHANDARA (Grand Community Feast & Prasad)', titleBn: 'মহা ভাণ্ডারা / মহাপ্রসাদ বিতরণ', isKey: true }
    ],
    note: 'Maha Bhandara welcomes all community residents and visiting devotees for the grand Bhog distribution.'
  },
  {
    id: 'dashami',
    dayName: 'Maha Dashami',
    dayNameBn: 'মহা দশমী',
    dateStr: '21st Oct. 2026',
    isoDate: '2026-10-21',
    weekday: 'Wednesday',
    badge: 'Sindhur Khela & Bisarjan',
    icon: 'sindhur',
    events: [
      { time: '9:47 a.m. to 10:30 a.m.', title: 'Dashami Puja', titleBn: 'দশমী পূজা' },
      { time: '11:00 a.m.', title: 'Aparajita Puja', titleBn: 'অপরাজিতা পূজা' },
      { time: '5:00 p.m.', title: 'Sindhur Khela (Vermillion Ceremony)', titleBn: 'সিঁদুর খেলা', isKey: true },
      { time: '9:00 p.m.', title: 'Pratima Visarjan (Immersion Procession)', titleBn: 'প্রতিমা বিসর্জন', isKey: true }
    ],
    note: 'Subho Bijoya celebrations with sweets, embrace (Bijoya Kolakoli), and heartfelt farewell to Maa.'
  },
  {
    id: 'laxmi',
    dayName: 'Laxmi Puja',
    dayNameBn: 'কোজাগরী লক্ষ্মী পূজা',
    dateStr: '25th Oct. 2026',
    isoDate: '2026-10-25',
    weekday: 'Sunday',
    badge: 'Kojagari Purnima',
    icon: 'lotus',
    events: [
      { time: '12:00 p.m.', title: 'Pushpanjali (Floral Offerings)', titleBn: 'পুষ্পাঞ্জলি', isKey: true },
      { time: '10:30 p.m. to 1:00 a.m.', title: 'Mayer Puja (Midnight Kojagari Ritual)', titleBn: 'মায়ের পূজা', isKey: true }
    ],
    note: 'Celebrated on the full moon night (Kojagari Purnima) with alpona footprints, lotus blossoms, and coconut sweets.'
  }
];

export const initialEvents: EventItem[] = [
  {
    id: 'event-1',
    title: '20th Sarbojanin Durga Puja 2026',
    titleBn: '২০তম সার্বজনীন দুর্গাপূজা ২০২৬',
    category: 'Religious',
    date: '15 Oct – 21 Oct 2026',
    time: 'Daily from 6:00 AM onwards',
    location: 'Near B.M.C. Playground, Kurar Village, Malad East',
    description: 'Celebrating 20 monumental years of devotion, togetherness, and Bengali heritage in Malad East. Complete traditional rituals, Pushpanjali, Sandhi Puja, Dhunuchi Naach, and cultural nights.',
    image: '/images/durga-hero.jpg',
    isFeatured: true,
    scheduleDetails: ['Debir Agaman: 15 Oct', 'Bodhan: 16 Oct (6:12 AM)', 'Sandhi Puja: 19 Oct (7:50 AM)', 'Maha Bhandara: 20 Oct (8:00 PM)', 'Sindhur Khela: 21 Oct (5:00 PM)']
  },
  {
    id: 'event-2',
    title: 'Kojagari Lakshmi Puja 2026',
    titleBn: 'কোজাগরী শ্রী শ্রী লক্ষ্মী পূজা ২০২৬',
    category: 'Religious',
    date: '25 Oct 2026',
    time: '12:00 PM Pushpanjali • 10:30 PM Mayer Puja',
    location: 'Sangha Mandap, Anand Wadi, Kurar Village',
    description: 'Welcoming the Goddess of Prosperity and Light on Kojagari Purnima. Traditional midnight rituals, alpona decorations, naivedya offerings, and community prayers.',
    image: '/images/lakshmi-puja.jpg',
    isFeatured: true,
    scheduleDetails: ['Pushpanjali: 12:00 PM', 'Mayer Puja: 10:30 PM to 1:00 AM']
  },
  {
    id: 'event-3',
    title: 'Maha Navami Maha Bhandara (Annadanam)',
    titleBn: 'মহা নবমী মহা ভাণ্ডারা ও প্রসাদ বিতরণ',
    category: 'Community',
    date: '20 Oct 2026',
    time: '8:00 PM to 11:00 PM',
    location: 'Community Dining Hall, Kurar Village',
    description: 'Grand community feast serving traditional Khichuri Bhog, Labra, Chutney, and Payesh to thousands of devotees and neighborhood families.',
    image: '/images/community-bhog.jpg',
    isFeatured: true,
    scheduleDetails: ['Bhog Arati: 7:00 PM', 'Distribution: 8:00 PM onwards']
  },
  {
    id: 'event-4',
    title: 'Dashami Sindhur Khela & Bijoya Sanmelan',
    titleBn: 'সিঁদুর খেলা ও শুভ বিজয়া সম্মিলনী',
    category: 'Cultural',
    date: '21 Oct 2026',
    time: '5:00 PM onwards',
    location: 'Main Mandap, Kurar Village',
    description: 'Vibrant celebration where women smear vermillion, exchange blessings, and share sweets before the grand immersion procession to the Arabian Sea.',
    image: '/images/sindhur-khela.jpg',
    isFeatured: false,
    scheduleDetails: ['Sindhur Khela: 5:00 PM', 'Bisarjan Shobhajatra: 9:00 PM']
  },
  {
    id: 'event-5',
    title: 'Annual Bengali Cultural Extravaganza',
    titleBn: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠান',
    category: 'Cultural',
    date: '17 Oct – 19 Oct 2026 (Evenings)',
    time: '8:30 PM to 11:00 PM',
    location: 'Cultural Stage, Near B.M.C. Playground',
    description: 'Rabindrasangeet, folk dance, Bengali drama, recitation, and live instrumental performances featuring local club youth and celebrated artists.',
    image: '/images/community-bhog.jpg',
    isFeatured: false,
    scheduleDetails: ['Sasthi Night: Youth Dance Drama', 'Saptami Night: Classical & Folk Music', 'Astami Night: Dhunuchi Naach Competition']
  }
];

export const initialGallery: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Maa Durga & Mahishasuramardini - Sacred Pratima Darshan',
    category: 'Durga Puja 2026',
    year: 2026,
    eventDate: 'October 2026',
    imageUrl: '/images/durga-idol-darshan-actual.jpg',
    caption: 'Divine close-up darshan of Maa Durga riding her sacred lion and slaying the asura, adorned in golden mukut, traditional ornamentation, and fresh yellow marigold garland.',
    tags: ['Maa Durga', 'Mahishasuramardini', 'Pratima Darshan', 'Durga Puja 2026'],
    isCover: true
  },
  {
    id: 'gal-2',
    title: 'Grand Sarbojanin Durga Puja Pandal & All Deities',
    category: 'Durga Puja 2026',
    year: 2026,
    eventDate: 'October 2026',
    imageUrl: '/images/durga-pandal-full-actual.jpg',
    caption: 'Full panoramic view of the holy mandap stage featuring Maa Durga, Devi Lakshmi, Devi Saraswati, Lord Ganesha, and Lord Kartikeya under ornate festive arches.',
    tags: ['Full Mandap', 'All Deities', 'Durga Pratima', 'Stage View', 'Puja 2026'],
    isCover: true
  },
  {
    id: 'gal-3',
    title: 'Festive Mandap Atmosphere & Devotees Darshan at Anand Wadi',
    category: 'Durga Puja 2026',
    year: 2026,
    eventDate: 'October 2026',
    imageUrl: '/images/durga-mandap-stage-actual.jpg',
    caption: 'Atmospheric view from the devotee hall capturing sacred banana leaf offerings, glowing brass lamps, dhoop incense, and devotees gathered in prayer.',
    tags: ['Devotees Darshan', 'Pushpanjali', 'Anand Wadi', 'Festive Ambiance', 'Puja 2026'],
    isCover: true
  },
  {
    id: 'gal-4',
    title: 'Traditional Daaker Saaj & Sholar Kaaj Durga Pratima',
    category: 'Durga Puja 2026',
    year: 2026,
    eventDate: 'October 2026',
    imageUrl: '/images/traditional-daaker-saaj-pratima.jpg',
    caption: 'Exquisite traditional Daaker Saaj and Sholar Kaaj ornamentation featuring Maa Durga, Lord Shiva chalchitra, green Mahishasura, white lion, and the Panchadevata family.',
    tags: ['Daaker Saaj', 'Sholar Kaaj', 'Traditional Pratima', 'Durga Puja 2026', 'Heritage'],
    isCover: true
  }
];

export const initialCommittee: CommitteeMember[] = [
  {
    id: 'comm-1',
    name: 'Sri Rabindranath Mukherjee',
    position: 'President',
    positionBn: 'সভাপতি',
    category: 'Executive Committee',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    description: 'Providing leadership, visionary guidance, and institutional stewardship to Netaji Subhas Chandra Welfare Sangha.',
    message: 'As we commemorate our landmark 20th year in 2026, Netaji Subhas Chandra Welfare Sangha stands tall as a beacon of Bengali culture, Vedic ritual sanctity, and unconditional community service in Kurar Village. May Maa Durga shower peace, good health, and prosperity on all our families.',
    phonePlaceholder: '+91 98200 XXXXX',
    emailPlaceholder: 'president@nscwsangha.org',
    order: 1
  },
  {
    id: 'comm-2',
    name: 'Sri Soumen Bannerjee',
    position: 'Vice President',
    positionBn: 'সহ-সভাপতি',
    category: 'Executive Committee',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    description: 'Supporting organizational operations, inter-community relations, and welfare outreach programs.',
    message: 'What began two decades ago as an intimate prayer has blossomed into a cherished home for thousands of devotees across Malad East. We warmly invite everyone to partake in our sacred celebrations, Anandamela, and Maha Bhog.',
    phonePlaceholder: '+91 98201 XXXXX',
    emailPlaceholder: 'vicepresident@nscwsangha.org',
    order: 2
  },
  {
    id: 'comm-3',
    name: 'Sri Amitava Sen',
    position: 'General Secretary',
    positionBn: 'সাধারণ সম্পাদক',
    category: 'Executive Committee',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80',
    description: 'Overseeing day-to-day coordination, municipal approvals, vendor relations, and administrative duties.',
    message: 'Our strength is our transparent governance and our tireless volunteer family. From the first sound of the Dhak at Bodhan to the emotional farewell of Dashami Bisarjan, we remain committed to perfection, safety, and heartfelt hospitality.',
    phonePlaceholder: '+91 98202 XXXXX',
    emailPlaceholder: 'secretary@nscwsangha.org',
    order: 3
  },
  {
    id: 'comm-4',
    name: 'Sri Debashis Roy',
    position: 'Vice Secretary',
    positionBn: 'সহ-সম্পাদক',
    category: 'Executive Committee',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    description: 'Assisting the General Secretary in member coordination, documentation, and volunteer dispatch.',
    message: 'Every year, our young volunteers dedicate months of hard work to ensure seamless mandap operations, safety protocols, and joyous celebrations for all visitors.',
    phonePlaceholder: '+91 98203 XXXXX',
    emailPlaceholder: 'vicesecretary@nscwsangha.org',
    order: 4
  },
  {
    id: 'comm-5',
    name: 'Sri Pranab Ghosh',
    position: 'Treasurer',
    positionBn: 'কোষাধ্যক্ষ',
    category: 'Executive Committee',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
    description: 'Managing transparent financial auditing, donations, vendor settlements, and budget allocations.',
    message: 'We maintain absolute financial transparency and integrity, ensuring every rupee contributed by our patrons and devotees directly empowers sacred rituals, maha bhog, and charity initiatives.',
    phonePlaceholder: '+91 98204 XXXXX',
    emailPlaceholder: 'treasurer@nscwsangha.org',
    order: 5
  },
  {
    id: 'comm-6',
    name: 'Sri Subir Bhattacharya',
    position: 'Vice Treasurer',
    positionBn: 'সহ-কোষাধ্যক্ষ',
    category: 'Executive Committee',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80',
    description: 'Assisting in receipts management, coupon accounts, and festival expenditure oversight.',
    order: 6
  },
  {
    id: 'comm-7',
    name: 'Sri Kalyan Dasgupta',
    position: 'Puja Coordinator & Ritual In-Charge',
    positionBn: 'পূজা সমন্বয়কারী',
    category: 'Puja Sub-Committee',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    description: 'Directing priest coordination, traditional samagri procurement, and ritual sanctity adherence.',
    order: 7
  },
  {
    id: 'comm-8',
    name: '[Cultural Convenor Name]',
    position: 'Cultural Secretary',
    positionBn: 'সাংস্কৃতিক সম্পাদক',
    category: 'Puja Sub-Committee',
    description: 'Curating artistic line-ups, music recitals, drama performances, and youth talent competitions.',
    order: 8
  },
  {
    id: 'comm-9',
    name: '[Youth Wing Lead Name]',
    position: 'Youth Wing Convener',
    positionBn: 'যুব শাখা আহ্বায়ক',
    category: 'Youth Wing',
    description: 'Mobilizing student volunteers, social media, crowd management, and emergency response teams.',
    order: 9
  }
];

export const initialAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: '20th Landmark Durga Puja 2026 Schedule Announced',
    content: 'The official timetable for the 20th Shree Shree Sarbajanin Durga Puja 2026 has been published. Please review exact Pushpanjali and Sandhi Puja timings.',
    date: 'October 2026',
    isUrgent: true,
    isActive: true,
    actionLink: '/schedule',
    actionText: 'View Schedule'
  },
  {
    id: 'ann-2',
    title: 'Maha Astami Pushpanjali Timings Notice',
    content: 'Maha Astami Pushpanjali will be conducted from 9:00 AM to 12:00 PM on Monday, 19th October 2026. Devotees are requested to arrive on time with offerings.',
    date: 'October 2026',
    isUrgent: false,
    isActive: true,
    actionLink: '/schedule',
    actionText: 'Timetable'
  },
  {
    id: 'ann-3',
    title: 'Volunteer & Cultural Participation Open',
    content: 'Local residents and youth wishing to participate in the cultural stage programs or volunteer for pandal management are invited to contact the committee.',
    date: 'September 2026',
    isUrgent: false,
    isActive: true,
    actionLink: '/contact',
    actionText: 'Join as Volunteer'
  }
];

export const initialHistory: HistoryMilestone[] = [
  {
    id: 'hist-2007',
    year: 2007,
    title: 'The Foundation in Kurar Village',
    titleBn: 'সংঘের শুভ সূচনা',
    subtitle: 'From a humble gathering to a formal cultural organization',
    description: 'Founded by a passionate group of Bengali residents in Kurar Village, Malad East, with the mission of establishing a home away from home for Bengali cultural heritage, social welfare, and mutual aid.',
    highlights: [
      'Inception of Netaji Subhas Chandra Welfare Sangha at Anand Wadi',
      'Inaugural Sarbojanin Durga Puja organized with deep community warmth',
      'Establishment of regular social welfare and mutual support networks'
    ],
    photoUrl: '/images/durga-hero.jpg'
  },
  {
    id: 'hist-2012',
    year: 2012,
    title: 'Expanding Cultural Horizons',
    titleBn: 'সাংস্কৃতিক প্রসারণ',
    subtitle: '5th Anniversary & Community Consolidation',
    description: 'Introduction of expanded cultural evenings, Rabindra Jayanti celebrations, and children\'s art competitions, making the Sangha a household name in Malad East.',
    highlights: [
      'Addition of formal Lakshmi Puja on Kojagari Purnima',
      'Introduction of community khichuri bhog distribution for all residents',
      'Formation of the dedicated Youth & Women Volunteer Wings'
    ]
  },
  {
    id: 'hist-2015',
    year: 2015,
    title: 'Growing Together',
    titleBn: 'একতার নব রূপ',
    subtitle: 'Strengthening Social Impact & Welfare',
    description: 'The Sangha expanded its welfare mission beyond religious festivals into year-round health camps, educational assistance for underprivileged students, and civic collaboration.',
    highlights: [
      'Free medical health check-up and blood donation drives',
      'Formalized pandal architecture with authentic terracotta themes',
      'Over 2,000 devotees attending Maha Astami Pushpanjali annually'
    ]
  },
  {
    id: 'hist-2020',
    year: 2020,
    title: 'Standing Strong in Times of Need',
    titleBn: 'সেবা ও সংকল্প',
    subtitle: 'Pandemic Relief & Dedicated Service',
    description: 'During the challenging Covid-19 period, the Sangha stepped forward to distribute essential ration kits, medicines, and cooked food to affected families in Kurar Village, keeping devotion alive with simple, heartfelt rituals.',
    highlights: [
      'Distribution of over 1,500 ration and hygiene kits to local families',
      'Virtual live streaming of Pushpanjali to ensure safety of elderly members',
      'Reinforced dedication to human welfare and social solidarity'
    ]
  },
  {
    id: 'hist-2025',
    year: 2025,
    title: 'The 19th Durga Puja Celebration',
    titleBn: '১৯তম দুর্গোৎসব',
    subtitle: 'Grand Prelude to the 20-Year Landmark',
    description: 'A resounding cultural celebration uniting generations, featuring traditional Daker Saaj craftsmanship, soul-stirring Dhunuchi Naach, and vibrant community fellowship.',
    highlights: [
      'Record participation in Dashami Sindhur Khela and cultural drama',
      'Modern digital archive initiatives launched',
      'Laying groundwork for the 20th Landmark Durga Puja'
    ]
  },
  {
    id: 'hist-2026',
    year: 2026,
    title: 'The 20th Landmark Durga Puja',
    titleBn: 'ঐতিহাসিক ২০তম দুর্গোৎসব',
    subtitle: 'Two Decades of Devotion, Culture & Togetherness',
    description: 'A historic milestone for Netaji Subhas Chandra Welfare Sangha. 20 consecutive years of keeping Bengali heritage, devotion to Maa Durga, and community harmony alive in Kurar Village, Malad East, Mumbai.',
    highlights: [
      '20th Edition Grand Sarbojanin Durga Puja Celebration',
      'Comprehensive 7-day festival calendar with traditional timings',
      'Honoring founding members and launching community heritage archive'
    ],
    photoUrl: '/images/durga-hero.jpg'
  }
];

export const initialCommunityPillars: CommunityPillar[] = [
  {
    id: 'pillar-1',
    title: 'Cultural Preservation',
    titleBn: 'সংস্কৃতি চর্চা ও সংরক্ষণ',
    category: 'Heritage',
    summary: 'Preserving Bengali literature, music, arts, and traditional rituals across generations in Mumbai.',
    description: 'We strive to pass down the sacred art of Alpona, Rabindrasangeet, classical instruments, and festival customs to our children and youth, ensuring Bengali roots thrive in the cosmopolitan fabric of Mumbai.',
    stats: '19+ Years of Heritage',
    photoUrl: '/images/sindhur-khela.jpg',
    iconName: 'Sparkles'
  },
  {
    id: 'pillar-2',
    title: 'Community Unity & Togetherness',
    titleBn: 'সামাজিক সম্প্রীতি ও একতা',
    category: 'Community',
    summary: 'Creating a warm, inclusive home for all families and residents of Kurar Village.',
    description: 'Festivals are more than ceremonies — they are an open table where everyone belongs. Regardless of background, our pandal is a place of unconditional warmth, mutual respect, and lifelong friendships.',
    stats: '500+ Member Families',
    photoUrl: '/images/community-bhog.jpg',
    iconName: 'Users'
  },
  {
    id: 'pillar-3',
    title: 'Youth & Next-Gen Involvement',
    titleBn: 'যুবশক্তির সক্রিয় অংশগ্রহণ',
    category: 'Youth',
    summary: 'Empowering young leaders to take charge of organization, stage performances, and logistics.',
    description: 'Our youth wing is the heartbeat of every festival, managing social media, crowd coordination, lighting design, and volunteer support, learning community leadership in action.',
    stats: '50+ Active Youth Volunteers',
    photoUrl: '/images/durga-hero.jpg',
    iconName: 'HeartHandshake'
  },
  {
    id: 'pillar-4',
    title: 'Social Responsibility & Relief',
    titleBn: 'সামাজিক দায়বদ্ধতা ও জনসেবা',
    category: 'Welfare',
    summary: 'Organizing food distributions, aid, and welfare drives for local residents.',
    description: 'True to our founding name "Welfare Sangha", we actively participate in local social assistance, helping neighborhood families during crises and contributing positively to civic development in Malad.',
    stats: 'Year-Round Social Aid',
    photoUrl: '/images/community-bhog.jpg',
    iconName: 'ShieldCheck'
  }
];

export const initialSocialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    handle: '@nscwelfare.sangha',
    url: 'https://instagram.com/nscwelfare.sangha',
    note: 'Follow us for daily Puja photos, reels & live announcements'
  },
  {
    platform: 'Facebook',
    handle: 'Netaji Subhas Chandra Welfare Sangha',
    url: 'https://www.facebook.com/share/19chm2MKaR/',
    note: 'Join our community group for event updates & family memories'
  }
];

export const initialContactMessages: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Priyanka Mukherjee',
    email: 'priyanka.m@example.com',
    mobile: '9820012345',
    purpose: 'Pushpanjali Inquiry',
    message: 'Can non-members also offer Pushpanjali on Maha Astami? What are the required timings?',
    timestamp: '2026-10-01 11:30 AM',
    status: 'Replied'
  },
  {
    id: 'msg-2',
    name: 'Debashis Roy',
    email: 'debashis.roy@example.com',
    mobile: '9819954321',
    purpose: 'Cultural Program Participation',
    message: 'My daughter would like to participate in the Rabindrasangeet evening on Saptami. How can we submit her name?',
    timestamp: '2026-10-02 04:15 PM',
    status: 'Unread'
  }
];
