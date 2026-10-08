import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { PujaCalendarCard } from '../components/schedule/PujaCalendarCard';
import { Search, Download, Printer, Check } from 'lucide-react';

export const PujaSchedulePage: React.FC = () => {
  const { schedule } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedDay, setCopiedDay] = useState<string | null>(null);

  const filteredSchedule = schedule.filter(day => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      day.dayName.toLowerCase().includes(query) ||
      day.dayNameBn.toLowerCase().includes(query) ||
      day.weekday.toLowerCase().includes(query) ||
      day.events.some(ev => ev.title.toLowerCase().includes(query) || (ev.titleBn && ev.titleBn.toLowerCase().includes(query)))
    );
  });

  const handlePrint = () => {
    window.print();
  };

  const downloadICS = () => {
    let icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Netaji Subhas Chandra Welfare Sangha//Durga Puja 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:NSCWS Durga Puja 2026 Timetable'
    ];

    schedule.forEach(day => {
      const dtDate = day.isoDate.replace(/-/g, '');
      const eventSummary = `${day.dayName} - Durga Puja 2026 (${day.events.map(e => `${e.time}: ${e.title}`).join(' | ')})`;
      
      icsContent.push(
        'BEGIN:VEVENT',
        `UID:nscws-${day.id}-2026@nscwsangha.org`,
        `DTSTAMP:20261001T000000Z`,
        `DTSTART;VALUE=DATE:${dtDate}`,
        `DTEND;VALUE=DATE:${dtDate}`,
        `SUMMARY:${eventSummary}`,
        `DESCRIPTION:Netaji Subhas Chandra Welfare Sangha 20th Durga Puja at Kurar Village, Malad East, Mumbai.\\n\\nSchedule:\\n${day.events.map(e => `• ${e.time} - ${e.title}`).join('\\n')}`,
        `LOCATION:Room No. 6, Near B.M.C. Playground, Anand Wadi, Kurar Village, Malad East, Mumbai - 400097`,
        'STATUS:CONFIRMED',
        'END:VEVENT'
      );
    });

    icsContent.push('END:VCALENDAR');

    const blob = new Blob([icsContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'NSCWS_Durga_Puja_2026_Schedule.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyDayText = (dayName: string, eventsText: string) => {
    navigator.clipboard.writeText(`${dayName} Timetable (NSCWS Durga Puja 2026):\n${eventsText}\nLocation: Kurar Village, Malad East, Mumbai.`);
    setCopiedDay(dayName);
    setTimeout(() => setCopiedDay(null), 2500);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="OFFICIAL TIMETABLE 2026"
        titleBn="শ্রী শ্রী সার্বজনীন দুর্গাপূজা ও লক্ষ্মীপূজা নির্ঘণ্ট"
        title="SHREE SHREE SARBAJANIN DURGA PUJA TIME TABLE - 2026"
        subtitle="Complete daily sequence of rituals, Pushpanjali, Sandhi Puja, and Bhog distribution."
      />

      {/* Control Bar: Search & Export */}
      <div className="clean-card p-4 sm:p-5 bg-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C827A]" />
          <input
            type="text"
            placeholder="Search ritual (e.g. Pushpanjali)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A121D]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          <a
            href="/images/puja-timetable-poster-2026.jpg"
            download="NSCWS_20th_Durga_Puja_2026_Timetable.jpg"
            className="px-4 py-2 rounded-full bg-[#7A121D] hover:bg-[#9E1B28] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Download size={13} />
            <span>Download Poster Image</span>
          </a>

          <button
            onClick={downloadICS}
            className="px-4 py-2 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download size={13} />
            <span>Add to Calendar (.ics)</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-full bg-white hover:bg-[#F6F4EE] text-[#1C1917] border border-[#E8E2D8] text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer size={13} />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchedule.map(day => (
          <div key={day.id} className="flex flex-col">
            <PujaCalendarCard day={day} />
            <div className="mt-2 text-right">
              <button
                onClick={() =>
                  copyDayText(
                    day.dayName,
                    day.events.map(e => `• ${e.time}: ${e.title}`).join('\n')
                  )
                }
                className="text-[11px] text-[#57534E] hover:text-[#7A121D] font-medium underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
              >
                {copiedDay === day.dayName ? (
                  <>
                    <Check size={12} className="text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <span>Copy {day.dayName} Timings</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
