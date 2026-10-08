import React from 'react';
import { PujaScheduleDay } from '../../types';
import { Calendar, Clock, Sparkles } from 'lucide-react';

interface PujaCalendarCardProps {
  day: PujaScheduleDay;
}

export const PujaCalendarCard: React.FC<PujaCalendarCardProps> = ({ day }) => {
  return (
    <div className="clean-card p-6 sm:p-7 flex flex-col justify-between group">
      <div>
        {/* Top Header & Day Stamp */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E8E2D8]/70">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A121D] block mb-1">
              {day.dateStr} • {day.weekday}
            </span>
            <h3 className="text-xl font-serif-clean font-bold text-[#1C1917] tracking-tight">
              {day.dayName}
            </h3>
            {day.dayNameBn && (
              <span className="font-bengali text-xs text-[#57534E] block mt-0.5">
                {day.dayNameBn}
              </span>
            )}
          </div>

          {day.badge && (
            <span className="px-2.5 py-1 rounded-md bg-[#F6F4EE] text-[#7A121D] border border-[#E8E2D8] text-[10px] font-semibold uppercase tracking-wider shrink-0">
              {day.badge}
            </span>
          )}
        </div>

        {/* Timings List */}
        <div className="py-5 space-y-3">
          {day.events.map((ev, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl transition-colors ${
                ev.isKey
                  ? 'bg-[#F6F4EE]/90 border border-[#E8E2D8] text-[#1C1917]'
                  : 'text-[#57534E] hover:bg-[#F6F4EE]/40'
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-bold text-[#7A121D] font-mono tracking-tight shrink-0">
                  {ev.time}
                </span>
                {ev.isKey && (
                  <span className="text-[10px] font-medium text-[#C2922E] flex items-center gap-1 shrink-0">
                    <Sparkles size={10} /> Key Ritual
                  </span>
                )}
              </div>
              <p className="font-medium text-xs sm:text-sm text-[#1C1917] mt-1 leading-snug">
                {ev.title}
              </p>
              {ev.titleBn && (
                <p className="font-bengali text-[11px] text-[#8C827A] mt-0.5">
                  {ev.titleBn}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card Note */}
      {day.note && (
        <div className="pt-3 border-t border-[#E8E2D8]/60 text-[11px] text-[#57534E] leading-relaxed">
          <span className="font-semibold text-[#1C1917]">Note:</span> {day.note}
        </div>
      )}
    </div>
  );
};
