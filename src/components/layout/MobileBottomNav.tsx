import React from 'react';
import { Home, Calendar, Image, Sparkles, MapPin } from 'lucide-react';

interface MobileBottomNavProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentRoute, onNavigate }) => {
  const items = [
    { label: 'Home', route: '/', icon: Home },
    { label: 'Puja 2026', route: '/durga-puja', icon: Sparkles },
    { label: 'Schedule', route: '/schedule', icon: Calendar },
    { label: 'Gallery', route: '/gallery', icon: Image },
    { label: 'Location', route: '/location', icon: MapPin },
  ];

  return (
    <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#240407] border-t-2 border-[#D69B32] shadow-2xl px-2 py-1.5 flex items-center justify-around">
      {items.map(item => {
        const Icon = item.icon;
        const isActive = currentRoute === item.route;
        return (
          <button
            key={item.route}
            onClick={() => {
              onNavigate(item.route);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all cursor-pointer ${
              isActive ? 'text-[#F3C969] font-bold scale-105' : 'text-[#FFF1D2]/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${isActive ? 'bg-[#7A1018] border border-[#D69B32]' : ''}`}>
              <Icon size={18} />
            </div>
            <span className="text-[10px] tracking-wider uppercase mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
