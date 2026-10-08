import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { events } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Religious', 'Cultural', 'Community', 'Social'];

  const filteredEvents = events.filter(e =>
    selectedCategory === 'All' ? true : e.category === selectedCategory
  );

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="FESTIVAL & CULTURAL CALENDAR"
        titleBn="সংঘের বার্ষিক অনুষ্ঠানসূচী"
        title="EVENTS & CELEBRATIONS"
        subtitle="Discover major religious festivals, stage performances, bhog distributions, and community welfare programs."
      />

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map(cat => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#7A121D] text-white shadow-sm'
                  : 'bg-[#F6F4EE] text-[#57534E] hover:bg-[#E8E2D8] hover:text-[#1C1917]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(ev => (
          <div
            key={ev.id}
            className="clean-card overflow-hidden bg-white flex flex-col justify-between"
          >
            <div>
              {ev.image && (
                <div className="aspect-[16/9] overflow-hidden bg-[#F6F4EE] relative">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[#7A121D] text-[10px] font-semibold uppercase tracking-wider">
                    {ev.category}
                  </span>
                </div>
              )}

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif-clean font-bold text-base text-[#1C1917]">
                    {ev.title}
                  </h3>
                  {ev.titleBn && (
                    <p className="font-bengali text-xs text-[#7A121D] mt-0.5">
                      {ev.titleBn}
                    </p>
                  )}
                </div>

                <div className="space-y-1 text-xs text-[#57534E] bg-[#F6F4EE] p-3 rounded-xl">
                  <div className="flex items-center gap-2 font-medium text-[#1C1917]">
                    <Calendar size={12} className="text-[#7A121D]" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#7A121D]" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#7A121D]" />
                    <span>{ev.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#57534E] leading-relaxed">
                  {ev.description}
                </p>

                {ev.scheduleDetails && ev.scheduleDetails.length > 0 && (
                  <div className="pt-2 border-t border-[#E8E2D8]">
                    <ul className="space-y-1 text-xs text-[#57534E]">
                      {ev.scheduleDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={11} className="text-[#7A121D] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
