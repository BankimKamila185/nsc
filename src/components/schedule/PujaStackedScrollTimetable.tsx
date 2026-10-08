import React from 'react';
import { PujaScheduleDay } from '../../types';
import { Sparkles, Clock, Calendar, CheckCircle2, ChevronDown } from 'lucide-react';

interface PujaStackedScrollTimetableProps {
  schedule: PujaScheduleDay[];
  onNavigate: (route: string) => void;
}

export const PujaStackedScrollTimetable: React.FC<PujaStackedScrollTimetableProps> = ({ schedule, onNavigate }) => {
  return (
    <div className="w-full relative space-y-6 sm:space-y-8">
      {/* Cards container with sticky stacking animation */}
      <div className="relative space-y-8 sm:space-y-12">
        {schedule.map((day, index) => {
          const dateParts = day.dateStr.split(' ');
          const dateNum = dateParts[0] || `${15 + index}th`;
          const cleanDateNum = dateNum.replace(/[^\d]/g, '');

          // Calculate sticky top offset for stacking effect
          const topOffset = 96 + index * 16; // 96px, 112px, 128px, etc.

          return (
            <div
              key={day.id}
              style={{
                top: `${topOffset}px`,
                zIndex: index + 1
              }}
              className="sticky rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-neutral-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-10 group overflow-hidden will-change-transform transform-gpu"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-[#7A121D] to-amber-600 opacity-90" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                {/* Left Column: Date Stamp & Main Day Details */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-4">
                    {/* Large Date Number Block */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-900 text-white flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                      <span className="font-sans font-black text-2xl sm:text-3xl leading-none text-amber-300">
                        {cleanDateNum}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-neutral-300 mt-0.5">
                        OCT 2026
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#7A121D]">
                        {day.weekday}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold text-neutral-900 tracking-tight leading-tight">
                        {day.dayName}
                      </h3>
                      {day.dayNameBn && (
                        <p className="font-bengali text-sm text-neutral-500 mt-0.5 font-medium">
                          {day.dayNameBn}
                        </p>
                      )}
                    </div>
                  </div>

                  {day.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-semibold uppercase tracking-wider">
                      <Sparkles size={12} className="text-amber-600" />
                      <span>{day.badge}</span>
                    </div>
                  )}

                  {day.note && (
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-2 border-t border-neutral-100 hidden sm:block">
                      <strong className="text-neutral-900 font-semibold">Observance:</strong> {day.note}
                    </p>
                  )}
                </div>

                {/* Right Column: Ritual Timings Grid */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
                      <Clock size={13} />
                      <span>Preserved Ritual Schedule</span>
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {day.events.length} {day.events.length === 1 ? 'Ritual' : 'Rituals'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {day.events.map((ev, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-300 ${
                          ev.isKey
                            ? 'bg-amber-50/70 border border-amber-200 hover:bg-amber-50 shadow-xs'
                            : 'bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-150'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-[#7A121D] font-mono tracking-tight bg-white px-2.5 py-0.5 rounded-md border border-neutral-200/60 shadow-2xs">
                            {ev.time}
                          </span>
                          {ev.isKey && (
                            <span className="text-[10px] font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Sparkles size={10} className="text-amber-700" />
                              <span>KEY RITUAL</span>
                            </span>
                          )}
                        </div>

                        <p className="font-semibold text-xs sm:text-sm text-neutral-900 leading-snug">
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

                  {day.note && (
                    <p className="text-xs text-neutral-600 leading-relaxed pt-2 sm:hidden">
                      <strong className="text-neutral-900">Note:</strong> {day.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
