import React, { useRef, useState, useEffect } from 'react';
import { PujaScheduleDay } from '../../types';
import { ChevronLeft, ChevronRight, Sparkles, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PujaTimetableSliderProps {
  schedule: PujaScheduleDay[];
  onNavigate: (route: string) => void;
}

export const PujaTimetableSlider: React.FC<PujaTimetableSliderProps> = ({ schedule, onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDayId, setActiveDayId] = useState<string>(schedule[0]?.id || 'panchami');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [schedule]);

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToDay = (id: string) => {
    setActiveDayId(id);
    const targetElement = document.getElementById(`schedule-card-${id}`);
    if (targetElement && scrollRef.current) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <div className="w-full relative">
      {/* Top Interactive Day Navigation Bar */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
          {schedule.map((day) => {
            const isActive = activeDayId === day.id;
            return (
              <button
                key={day.id}
                onClick={() => scrollToDay(day.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md scale-105'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
                }`}
              >
                <span>{day.dayName.replace('Maha ', '')}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                  {day.dateStr.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Carousel Arrow Controls */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            onClick={() => scrollToDirection('left')}
            disabled={!canScrollLeft}
            className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center ${
              canScrollLeft
                ? 'bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900 hover:scale-110 shadow-sm'
                : 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollToDirection('right')}
            disabled={!canScrollRight}
            className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center ${
              canScrollRight
                ? 'bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900 hover:scale-110 shadow-sm'
                : 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Animated Scroll Track */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {schedule.map((day, index) => {
          const dateParts = day.dateStr.split(' ');
          const dateNum = dateParts[0] || `${15 + index}th`;
          const monthYear = dateParts.slice(1).join(' ') || 'Oct 2026';

          return (
            <div
              key={day.id}
              id={`schedule-card-${day.id}`}
              className="min-w-[320px] sm:min-w-[380px] max-w-[380px] rounded-3xl bg-white border border-neutral-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-7 snap-start group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-[#7A121D] to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Date & Day Badge */}
                <div className="flex items-start justify-between gap-3 pb-5 border-b border-neutral-100">
                  <div className="flex items-center gap-3.5">
                    {/* Large Date Number Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-neutral-900 text-white flex flex-col items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <span className="font-sans font-extrabold text-base leading-none tracking-tight text-amber-300">
                        {dateNum.replace(/[^\d]/g, '')}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest font-medium text-neutral-300 mt-0.5">
                        OCT
                      </span>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold text-[#7A121D] uppercase tracking-wider">
                        {day.weekday}
                      </div>
                      <h3 className="text-xl font-sans font-bold text-neutral-900 tracking-tight leading-tight">
                        {day.dayName}
                      </h3>
                      {day.dayNameBn && (
                        <p className="font-bengali text-xs text-neutral-500 mt-0.5">
                          {day.dayNameBn}
                        </p>
                      )}
                    </div>
                  </div>

                  {day.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 text-[10px] font-semibold uppercase tracking-wider shrink-0 text-right">
                      {day.badge}
                    </span>
                  )}
                </div>

                {/* Ritual Timings List */}
                <div className="py-5 space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>Ritual Timings</span>
                  </div>

                  {day.events.map((ev, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl transition-all duration-300 ${
                        ev.isKey
                          ? 'bg-amber-50/60 border border-amber-200/70 hover:bg-amber-50'
                          : 'bg-neutral-50/80 hover:bg-neutral-100/70 border border-neutral-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#7A121D] font-mono tracking-tight">
                          {ev.time}
                        </span>
                        {ev.isKey && (
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles size={10} className="text-amber-600" />
                            <span>Key Ritual</span>
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-xs sm:text-sm text-neutral-900 mt-1 leading-snug">
                        {ev.title}
                      </p>
                      {ev.titleBn && (
                        <p className="font-bengali text-[11px] text-neutral-500 mt-0.5">
                          {ev.titleBn}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Note */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                {day.note ? (
                  <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                    <span className="font-semibold text-neutral-700">Note:</span> {day.note}
                  </p>
                ) : (
                  <span className="text-[11px] text-neutral-400">Rituals subject to Panjika</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Bottom Scroll Progress Indicator */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="w-full bg-neutral-200/70 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-neutral-900 rounded-full transition-all duration-300"
            style={{ width: `${Math.max(16, scrollProgress)}%` }}
          />
        </div>
        <span className="text-[11px] text-neutral-400 font-mono shrink-0">
          SWIPE & SCROLL
        </span>
      </div>
    </div>
  );
};
