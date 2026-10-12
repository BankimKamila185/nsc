import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DurgaPujaPage } from './pages/DurgaPujaPage';
import { PujaSchedulePage } from './pages/PujaSchedulePage';
import { GalleryPage } from './pages/GalleryPage';
import { CommunityPage } from './pages/CommunityPage';
import { CommitteePage } from './pages/CommitteePage';
import { OurJourneyPage } from './pages/OurJourneyPage';
import { EventsPage } from './pages/EventsPage';
import { LakshmiPujaPage } from './pages/LakshmiPujaPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO metadata updates per page route
  useEffect(() => {
    const seoData: Record<string, { title: string; desc: string }> = {
      '/': {
        title: 'Netaji Subhas Chandra Welfare Sangha | 20th Durga Puja 2026',
        desc: 'Official website of Netaji Subhas Chandra Welfare Sangha (ESTD. 2007), Kurar Village, Malad East, Mumbai. Celebrate the landmark 20th Sarbojanin Durga Puja 2026, Kojagari Lakshmi Puja, authentic Daaker Saaj darshan, and Vedic rituals.'
      },
      '/durga-puja': {
        title: '20th Sarbojanin Durga Puja 2026 | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Shree Shree Sarbajanin Durga Puja 2026 in Kurar Village, Malad East, Mumbai. Seven days of Vedic rituals, Pushpanjali, Sandhi Puja 108 lamps, and Maha Bhandara prasad.'
      },
      '/schedule': {
        title: 'Puja Schedule & Official Timetable 2026 | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Complete day-by-day 2026 Puja timetable from Maha Panchami to Lakshmi Puja. Official ritual timings, Pushpanjali, Sandhi Puja, and Bhog distribution in Malad East.'
      },
      '/about': {
        title: 'About Our Sangha & 20-Year Heritage | Netaji Subhas Chandra Welfare Sangha',
        desc: 'The 20-year story of Netaji Subhas Chandra Welfare Sangha since 2007. Preserving Vedic rituals, authentic Bengali Daaker Saaj craftsmanship, and community seva in Kurar Village.'
      },
      '/gallery': {
        title: 'Durga Puja Photo Gallery & Celebrations | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Photo gallery of sacred Durga Puja moments, authentic Daaker Saaj pratima, illuminated mandap, and joyous celebrations at Netaji Subhas Chandra Welfare Sangha.'
      },
      '/committee': {
        title: 'Executive Committee & Leadership | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Executive Committee and leadership of Netaji Subhas Chandra Welfare Sangha guiding the 20th Sarbojanin Durga Puja 2026 in Kurar Village, Malad East.'
      },
      '/history': {
        title: 'Our 20-Year Journey (2007–2026) | Netaji Subhas Chandra Welfare Sangha',
        desc: '20-year historical chronicle (2007–2026) of Netaji Subhas Chandra Welfare Sangha from modest neighborhood beginnings to a landmark Mumbai cultural institution.'
      },
      '/events': {
        title: 'Festival Events & Cultural Programs | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Cultural evenings, Anandamela, Dhunuchi Naach competition, and community celebrations organized by Netaji Subhas Chandra Welfare Sangha.'
      },
      '/lakshmi-puja': {
        title: 'Kojagari Lakshmi Puja Celebrations 2026 | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Kojagari Lakshmi Puja celebrations at Netaji Subhas Chandra Welfare Sangha with midnight Vedic prayers, sacred alpona artwork, and prasad.'
      },
      '/location': {
        title: 'Location & How to Reach Mandap | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Address and directions to Anand Wadi Durga Puja Mandap, Kurar Village, Malad East, Mumbai. Easy access via Western Express Highway and Malad station.'
      },
      '/contact': {
        title: 'Contact Us & General Inquiries | Netaji Subhas Chandra Welfare Sangha',
        desc: 'Get in touch with Netaji Subhas Chandra Welfare Sangha for puja queries, pushpanjali timings, donations, and volunteer opportunities in Malad East.'
      }
    };

    const currentSeo = seoData[currentRoute] || seoData['/'];
    document.title = currentSeo.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentSeo.desc);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentSeo.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentSeo.desc);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://nsc-plum.vercel.app${currentRoute === '/' ? '' : currentRoute}`);
  }, [currentRoute]);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/durga-puja':
        return <DurgaPujaPage onNavigate={navigateTo} />;
      case '/schedule':
        return <PujaSchedulePage />;
      case '/gallery':
        return <GalleryPage />;
      case '/community':
        return <HomePage onNavigate={navigateTo} />;
      case '/committee':
        return <CommitteePage onNavigate={navigateTo} />;
      case '/history':
        return <OurJourneyPage onNavigate={navigateTo} />;
      case '/events':
        return <EventsPage />;
      case '/lakshmi-puja':
        return <LakshmiPujaPage onNavigate={navigateTo} />;
      case '/location':
        return <LocationPage />;
      case '/contact':
        return <ContactPage />;
      case '/admin':
        return <HomePage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#421015] selection:bg-[#D69B32] selection:text-[#3A080D]">
      {/* Main Sticky Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Main Heritage Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}
