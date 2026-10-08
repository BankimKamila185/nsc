import React, { useRef } from 'react';
import { useData } from '../../context/DataContext';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Award } from 'lucide-react';
import { LotusDecoration } from '../decorative/FestivalMotifs';
import { GoldDivider } from '../decorative/GoldDivider';

interface ArchivesHorizontalSliderProps {
  onNavigate: (route: string) => void;
}

export const ArchivesHorizontalSlider: React.FC<ArchivesHorizontalSliderProps> = ({ onNavigate }) => {
  const { history } = useData();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#F3C969] bg-[#3A080D] px-3.5 py-1 rounded-full border border-[#D69B32]/40 inline-block mb-2">
            🏛️ HERITAGE ARCHIVES
          </span>
          <h2 className="font-serif-royal font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Journey of Two Decades (2007 — 2026)
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF1D2]/80 mt-1">
            Scroll horizontally to explore key milestones of Netaji Subhas Chandra Welfare Sangha.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full bg-[#3A080D] text-[#FFF1D2] hover:text-[#F3C969] hover:bg-[#240407] border border-[#D69B32] transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full bg-[#3A080D] text-[#FFF1D2] hover:text-[#F3C969] hover:bg-[#240407] border border-[#D69B32] transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x"
      >
        {history.map(item => (
          <div
            key={item.id}
            className="min-w-[300px] sm:min-w-[350px] max-w-[350px] p-6 rounded-2xl bg-[#3A080D] border-2 border-[#D69B32] shadow-2xl flex flex-col justify-between snap-start relative group hover:border-[#F3C969] transition-all transform hover:-translate-y-1"
          >
            <div>
              {/* Year Stamp */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-decorative font-black text-4xl text-gold-gradient">
                  {item.year}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#7A1018] text-[#F3C969] px-2.5 py-0.5 rounded-full border border-[#D69B32]/40">
                  {item.year === 2026 ? '20th Landmark' : `Edition ${item.year - 2006}`}
                </span>
              </div>

              <h3 className="font-serif-royal font-bold text-lg text-white mb-1">
                {item.title}
              </h3>
              {item.titleBn && (
                <p className="font-bengali text-xs text-[#F3C969] mb-2 font-medium">
                  {item.titleBn}
                </p>
              )}

              <p className="text-xs text-[#FFF1D2]/80 leading-relaxed font-light line-clamp-4">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D69B32]/30 flex items-center justify-between">
              <span className="text-[11px] text-[#D69B32] font-semibold">
                Kurar Village • Mumbai
              </span>
              <button
                onClick={() => {
                  onNavigate('/history');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-[#F3C969] hover:underline flex items-center gap-1 font-bold cursor-pointer"
              >
                <span>Read Details</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
