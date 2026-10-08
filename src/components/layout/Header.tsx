import React, { useState } from 'react';
import { Menu, X, Calendar, MapPin, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { LotusDecoration } from '../decorative/FestivalMotifs';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Schedule', route: '/schedule' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Community', route: '/community' },
    { label: 'Location', route: '/location' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleNav = (route: string) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-white/80 flex items-center justify-between transition-all">
        {/* Logo */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-[#7A121D] flex items-center justify-center text-[#DFC798] shadow-sm group-hover:scale-105 transition-transform">
            <LotusDecoration size={16} color="#DFC798" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xs sm:text-sm tracking-tight text-neutral-900 group-hover:text-[#7A121D] transition-colors leading-none">
              NSC Welfare Sangha
            </span>
            <span className="text-[9px] font-medium text-neutral-500 tracking-wider uppercase mt-0.5">
              Estd. 2007 • Mumbai
            </span>
          </div>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.slice(0, 7).map(link => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNav(link.route)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav('/durga-puja')}
            className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-neutral-950 hover:bg-[#7A121D] text-white font-medium text-xs tracking-wide transition-all shadow-sm cursor-pointer items-center gap-1.5 hover:scale-105"
          >
            <span>2026 Puja</span>
            <ArrowUpRight size={13} className="text-[#DFC798]" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/80 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map(link => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNav(link.route)}
                  className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-1.5">
            <button
              onClick={() => handleNav('/schedule')}
              className="w-full py-2 bg-[#7A121D] text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Calendar size={13} />
              <span>Full 2026 Puja Timetable</span>
            </button>
            <button
              onClick={() => handleNav('/admin')}
              className="w-full py-1.5 text-neutral-500 hover:text-neutral-900 text-xs font-medium text-center cursor-pointer flex items-center justify-center gap-1"
            >
              <ShieldCheck size={13} />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
