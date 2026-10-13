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
        title: 'Netaji Subhas Chandra Welfare Sangha (NSCWS) | Malad Durga Puja 2026',
        desc: 'Official website of Netaji Subhas Chandra Welfare Sangha (NSCWS), celebrating the landmark 20th Malad Durga Puja 2026 in Kurar Village, Malad East, Mumbai. Authentic Daaker Saaj darshan, Vedic rituals, Pushpanjali timetable & prasad.'
      },
      '/durga-puja': {
        title: '20th Malad Durga Puja 2026 | NSCWS Netaji Subhas Chandra Welfare Sangha',
        desc: 'Shree Shree Sarbajanin Malad Durga Puja 2026 by NSCWS in Kurar Village, Malad East, Mumbai. Seven days of Vedic rituals, Pushpanjali, Sandhi Puja 108 lamps, and Maha Bhandara prasad.'
      },
      '/schedule': {
        title: 'Malad Durga Puja 2026 Timetable & Pushpanjali Schedule | NSCWS',
        desc: 'Complete day-by-day 2026 Malad Durga Puja timetable from Maha Panchami to Lakshmi Puja. Official ritual timings, Pushpanjali, Sandhi Puja, and Bhog distribution in Malad East by NSCWS.'
      },
      '/about': {
        title: 'About NSCWS & Malad Durga Puja Heritage (Estd. 2007) | Mumbai',
        desc: 'The 20-year story of NSCWS (Netaji Subhas Chandra Welfare Sangha) since 2007. Preserving Vedic rituals, authentic Bengali Daaker Saaj craftsmanship, and Malad Durga Puja community seva.'
      },
      '/gallery': {
        title: 'Malad Durga Puja Photo Gallery & Pratima Darshan | NSCWS',
        desc: 'Photo gallery of sacred Malad Durga Puja moments, authentic Daaker Saaj pratima, illuminated mandap, and celebrations at NSCWS Kurar Village, Malad East.'
      },
      '/committee': {
        title: 'Executive Committee & Leadership | NSCWS Malad Durga Puja',
        desc: 'Executive Committee and leadership of Netaji Subhas Chandra Welfare Sangha (NSCWS) guiding the 20th Sarbojanin Malad Durga Puja 2026 in Kurar Village, Malad East.'
      },
      '/history': {
        title: 'Our 20-Year Journey (2007–2026) | NSCWS Malad Durga Puja',
        desc: '20-year historical chronicle (2007–2026) of NSCWS from modest neighborhood beginnings to a landmark Malad Durga Puja and cultural institution in Mumbai.'
      },
      '/events': {
        title: 'Festival Events & Cultural Programs | NSCWS Malad Durga Puja',
        desc: 'Cultural evenings, Anandamela, Dhunuchi Naach competition, and community celebrations organized by NSCWS at Malad Durga Puja.'
      },
      '/lakshmi-puja': {
        title: 'Kojagari Lakshmi Puja Celebrations 2026 | NSCWS Malad',
        desc: 'Kojagari Lakshmi Puja celebrations at NSCWS Malad Durga Puja with midnight Vedic prayers, sacred alpona artwork, and prasad distribution.'
      },
      '/location': {
        title: 'Malad Durga Puja Location & Directions to Mandap | NSCWS',
        desc: 'Address and directions to NSCWS Anand Wadi Malad Durga Puja Mandap, Kurar Village, Malad East, Mumbai. Easy access via Western Express Highway and Malad station.'
      },
      '/contact': {
        title: 'Contact Us & General Inquiries | NSCWS Malad Durga Puja',
        desc: 'Get in touch with NSCWS (Netaji Subhas Chandra Welfare Sangha) for Malad Durga Puja queries, pushpanjali timings, donations, and volunteer opportunities in Malad East.'
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

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://nscwelfaresangha.vercel.app${currentRoute === '/' ? '' : currentRoute}`);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://nscwelfaresangha.vercel.app${currentRoute === '/' ? '' : currentRoute}`);
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
