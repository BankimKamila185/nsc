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

  // Dynamic document title update based on current page
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Home | Netaji Subhas Chandra Welfare Sangha - 20th Durga Puja 2026',
      '/about': 'About Us | Netaji Subhas Chandra Welfare Sangha',
      '/durga-puja': '20th Durga Puja 2026 | Netaji Subhas Chandra Welfare Sangha',
      '/schedule': 'Puja Schedule & Timetable 2026 | Netaji Subhas Chandra Welfare Sangha',
      '/gallery': 'Photo Gallery | Netaji Subhas Chandra Welfare Sangha',
      '/community': 'Community & Welfare | Netaji Subhas Chandra Welfare Sangha',
      '/committee': 'Executive Committee | Netaji Subhas Chandra Welfare Sangha',
      '/history': 'Our Journey (2007–2026) | Netaji Subhas Chandra Welfare Sangha',
      '/events': 'Events & Celebrations | Netaji Subhas Chandra Welfare Sangha',
      '/lakshmi-puja': 'Kojagari Lakshmi Puja 2026 | Netaji Subhas Chandra Welfare Sangha',
      '/location': 'Location & How to Reach | Netaji Subhas Chandra Welfare Sangha',
      '/contact': 'Contact Us | Netaji Subhas Chandra Welfare Sangha',
    };
    document.title = titles[currentRoute] || 'Netaji Subhas Chandra Welfare Sangha | 20th Durga Puja 2026';
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
