import React, { createContext, useContext, useState, useEffect } from 'react';
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
import {
  initialSiteSettings,
  initialPujaSchedule,
  initialEvents,
  initialGallery,
  initialCommittee,
  initialAnnouncements,
  initialHistory,
  initialCommunityPillars,
  initialSocialLinks,
  initialContactMessages
} from '../data/initialData';

interface DataContextType {
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  
  schedule: PujaScheduleDay[];
  updateScheduleDay: (dayId: string, updated: Partial<PujaScheduleDay>) => void;
  
  events: EventItem[];
  addEvent: (event: Omit<EventItem, 'id'>) => void;
  updateEvent: (id: string, updated: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;
  
  gallery: GalleryPhoto[];
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  updateGalleryPhoto: (id: string, updated: Partial<GalleryPhoto>) => void;
  deleteGalleryPhoto: (id: string) => void;
  
  committee: CommitteeMember[];
  addCommitteeMember: (member: Omit<CommitteeMember, 'id'>) => void;
  updateCommitteeMember: (id: string, updated: Partial<CommitteeMember>) => void;
  deleteCommitteeMember: (id: string) => void;
  
  announcements: Announcement[];
  addAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  updateAnnouncement: (id: string, updated: Partial<Announcement>) => void;
  deleteAnnouncement: (id: string) => void;
  
  history: HistoryMilestone[];
  addHistoryEntry: (entry: Omit<HistoryMilestone, 'id'>) => void;
  updateHistoryEntry: (id: string, updated: Partial<HistoryMilestone>) => void;
  deleteHistoryEntry: (id: string) => void;
  
  communityPillars: CommunityPillar[];
  socialLinks: SocialLink[];
  updateSocialLinks: (links: SocialLink[]) => void;
  
  contactMessages: ContactMessage[];
  addContactMessage: (message: Omit<ContactMessage, 'id' | 'timestamp' | 'status'>) => void;
  updateMessageStatus: (id: string, status: ContactMessage['status']) => void;
  deleteContactMessage: (id: string) => void;
  
  resetAllToDefault: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SETTINGS: 'nscws_settings_v1',
  SCHEDULE: 'nscws_schedule_v1',
  EVENTS: 'nscws_events_v1',
  GALLERY: 'nscws_gallery_v2',
  COMMITTEE: 'nscws_committee_v3',
  ANNOUNCEMENTS: 'nscws_announcements_v1',
  HISTORY: 'nscws_history_v1',
  PILLARS: 'nscws_pillars_v1',
  SOCIALS: 'nscws_socials_v1',
  MESSAGES: 'nscws_messages_v1',
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return saved ? JSON.parse(saved) : initialSiteSettings;
  });

  const [schedule, setSchedule] = useState<PujaScheduleDay[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SCHEDULE);
    return saved ? JSON.parse(saved) : initialPujaSchedule;
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [committee, setCommittee] = useState<CommitteeMember[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMMITTEE);
    return saved ? JSON.parse(saved) : initialCommittee;
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
    return saved ? JSON.parse(saved) : initialAnnouncements;
  });

  const [history, setHistory] = useState<HistoryMilestone[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return saved ? JSON.parse(saved) : initialHistory;
  });

  const [communityPillars] = useState<CommunityPillar[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PILLARS);
    return saved ? JSON.parse(saved) : initialCommunityPillars;
  });

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SOCIALS);
    return saved ? JSON.parse(saved) : initialSocialLinks;
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return saved ? JSON.parse(saved) : initialContactMessages;
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SCHEDULE, JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMMITTEE, JSON.stringify(committee));
  }, [committee]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SOCIALS, JSON.stringify(socialLinks));
  }, [socialLinks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(contactMessages));
  }, [contactMessages]);

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...settings }));
  };

  const updateScheduleDay = (dayId: string, updated: Partial<PujaScheduleDay>) => {
    setSchedule(prev =>
      prev.map(day => (day.id === dayId ? { ...day, ...updated } : day))
    );
  };

  const addEvent = (event: Omit<EventItem, 'id'>) => {
    const newEvent: EventItem = {
      ...event,
      id: 'event-' + Date.now()
    };
    setEvents(prev => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, updated: Partial<EventItem>) => {
    setEvents(prev =>
      prev.map(ev => (ev.id === id ? { ...ev, ...updated } : ev))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
  };

  const addGalleryPhoto = (photo: Omit<GalleryPhoto, 'id'>) => {
    const newPhoto: GalleryPhoto = {
      ...photo,
      id: 'gal-' + Date.now()
    };
    setGallery(prev => [newPhoto, ...prev]);
  };

  const updateGalleryPhoto = (id: string, updated: Partial<GalleryPhoto>) => {
    setGallery(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteGalleryPhoto = (id: string) => {
    setGallery(prev => prev.filter(item => item.id !== id));
  };

  const addCommitteeMember = (member: Omit<CommitteeMember, 'id'>) => {
    const newMember: CommitteeMember = {
      ...member,
      id: 'comm-' + Date.now()
    };
    setCommittee(prev => [...prev, newMember]);
  };

  const updateCommitteeMember = (id: string, updated: Partial<CommitteeMember>) => {
    setCommittee(prev =>
      prev.map(comm => (comm.id === id ? { ...comm, ...updated } : comm))
    );
  };

  const deleteCommitteeMember = (id: string) => {
    setCommittee(prev => prev.filter(comm => comm.id !== id));
  };

  const addAnnouncement = (announcement: Omit<Announcement, 'id'>) => {
    const newAnn: Announcement = {
      ...announcement,
      id: 'ann-' + Date.now()
    };
    setAnnouncements(prev => [newAnn, ...prev]);
  };

  const updateAnnouncement = (id: string, updated: Partial<Announcement>) => {
    setAnnouncements(prev =>
      prev.map(ann => (ann.id === id ? { ...ann, ...updated } : ann))
    );
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(ann => ann.id !== id));
  };

  const addHistoryEntry = (entry: Omit<HistoryMilestone, 'id'>) => {
    const newHist: HistoryMilestone = {
      ...entry,
      id: 'hist-' + Date.now()
    };
    setHistory(prev => [...prev, newHist].sort((a, b) => a.year - b.year));
  };

  const updateHistoryEntry = (id: string, updated: Partial<HistoryMilestone>) => {
    setHistory(prev =>
      prev.map(hist => (hist.id === id ? { ...hist, ...updated } : hist))
    );
  };

  const deleteHistoryEntry = (id: string) => {
    setHistory(prev => prev.filter(hist => hist.id !== id));
  };

  const updateSocialLinks = (links: SocialLink[]) => {
    setSocialLinks(links);
  };

  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'timestamp' | 'status'>) => {
    const newMessage: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now(),
      timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'Unread'
    };
    setContactMessages(prev => [newMessage, ...prev]);
  };

  const updateMessageStatus = (id: string, status: ContactMessage['status']) => {
    setContactMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, status } : m))
    );
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  };

  const resetAllToDefault = () => {
    if (window.confirm('Are you sure you want to reset all data to original official defaults? This will clear custom edits.')) {
      setSiteSettings(initialSiteSettings);
      setSchedule(initialPujaSchedule);
      setEvents(initialEvents);
      setGallery(initialGallery);
      setCommittee(initialCommittee);
      setAnnouncements(initialAnnouncements);
      setHistory(initialHistory);
      setSocialLinks(initialSocialLinks);
      setContactMessages(initialContactMessages);
      localStorage.clear();
      alert('Website data reset to defaults.');
    }
  };

  return (
    <DataContext.Provider
      value={{
        siteSettings,
        updateSiteSettings,
        schedule,
        updateScheduleDay,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        gallery,
        addGalleryPhoto,
        updateGalleryPhoto,
        deleteGalleryPhoto,
        committee,
        addCommitteeMember,
        updateCommitteeMember,
        deleteCommitteeMember,
        announcements,
        addAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        history,
        addHistoryEntry,
        updateHistoryEntry,
        deleteHistoryEntry,
        communityPillars,
        socialLinks,
        updateSocialLinks,
        contactMessages,
        addContactMessage,
        updateMessageStatus,
        deleteContactMessage,
        resetAllToDefault
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
