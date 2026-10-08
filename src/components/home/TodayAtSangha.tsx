import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Calendar, Clock, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TodayAtSanghaProps {
  onNavigate: (route: string) => void;
}

export const TodayAtSangha: React.FC<TodayAtSanghaProps> = ({ onNavigate }) => {
  const { schedule } = useData();
  const todayIso = new Date().toISOString().split('T')[0];
  const activeToday = schedule.find(day => day.isoDate === todayIso);
  const [selectedDayId, setSelectedDayId] = useState<string>(activeToday ? activeToday.id : 'astami');

  const selectedDay = schedule.find(day => day.id === selectedDayId) || schedule[3];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="clean-card p-6 sm:p-8 bg-white">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D]">
                {activeToday ? "Today's Schedule" : "Festival Day Schedule Explorer"}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-clean font-bold text-[#1C1917]">
              {selectedDay.dayName} <span className="font-bengali text-[#7A121D] text-lg font-normal">({selectedDay.dayNameBn})</span>
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#57534E]">
            <span className="px-3 py-1.5 rounded-full bg-[#F6F4EE] border border-[#E8E2D8] font-medium flex items-center gap-1.5">
              <Calendar size={13} className="text-[#7A121D]" />
              {selectedDay.dateStr} ({selectedDay.weekday})
            </span>
          </div>
        </div>

        {/* Day Switcher Tabs */}
        <div className="my-6 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-2 min-w-max">
            {schedule.map(day => {
              const isSelected = day.id === selectedDayId;
              return (
                <button
                  key={day.id}
                  onClick={() => setSelectedDayId(day.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#7A121D] text-white shadow-sm'
                      : 'bg-[#F6F4EE] text-[#57534E] hover:bg-[#E8E2D8] hover:text-[#1C1917]'
                  }`}
                >
                  {day.dayName.replace('Maha ', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Agenda Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {selectedDay.events.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                item.isKey
                  ? 'bg-[#FCFBF9] border-[#DFC798] text-[#1C1917] shadow-sm'
                  : 'bg-[#F6F4EE]/50 border-[#E8E2D8] text-[#57534E]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold font-mono text-[#7A121D] bg-[#F6F4EE] px-2 py-0.5 rounded border border-[#E8E2D8]">
                  {item.time}
                </span>
                {item.isKey && (
                  <span className="text-[10px] font-medium text-[#C2922E] flex items-center gap-1">
                    <Sparkles size={10} /> Key Ritual
                  </span>
                )}
              </div>

              <h4 className="font-semibold text-sm text-[#1C1917] leading-snug">
                {item.title}
              </h4>
              {item.titleBn && (
                <p className="font-bengali text-xs text-[#8C827A] mt-0.5">
                  {item.titleBn}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Note & Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E2D8] text-xs text-[#57534E]">
          <p className="text-center sm:text-left">
            {selectedDay.note || 'Exact timings preserved in accordance with traditional Bengali customs.'}
          </p>
          <button
            onClick={() => {
              onNavigate('/schedule');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-[#7A121D] hover:underline underline-offset-4 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View Full Timetable</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
