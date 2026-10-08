import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { PujaCalendarCard } from '../components/schedule/PujaCalendarCard';

export const PujaSchedulePage: React.FC = () => {
  const { schedule } = useData();

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="OFFICIAL TIMETABLE 2026"
        titleBn="শ্রী শ্রী সার্বজনীন দুর্গাপূজা ও লক্ষ্মীপূজা নির্ঘণ্ট"
        title="SHREE SHREE SARBAJANIN DURGA PUJA TIME TABLE - 2026"
        subtitle="Complete daily sequence of rituals, Pushpanjali, Sandhi Puja, and Bhog distribution."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schedule.map(day => (
          <div key={day.id} className="flex flex-col">
            <PujaCalendarCard day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};
