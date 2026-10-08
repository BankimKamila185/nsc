import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { PujaCalendarCard } from '../components/schedule/PujaCalendarCard';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface DurgaPujaPageProps {
  onNavigate: (route: string) => void;
}

export const DurgaPujaPage: React.FC<DurgaPujaPageProps> = ({ onNavigate }) => {
  const { schedule } = useData();

  const keyRituals = [
    {
      title: 'Debir Agaman & Bodhan',
      titleBn: 'দেবীর আগমন ও বোধন',
      date: '15 & 16 Oct',
      desc: 'Invoking the Mother Goddess with sacred Chandi Path, ceremonial conch blowing (Shankha), and evocative Dhak beats at dawn.'
    },
    {
      title: 'Navapatrika Snan (Kola Bou)',
      titleBn: 'নবপত্রিকা স্নান',
      date: '17 Oct (10:30 AM)',
      desc: 'Ritual bathing and consecration of nine sacred plants embodying nine divine manifestations of Durga Shakti.'
    },
    {
      title: 'Sandhi Puja & Balidan',
      titleBn: 'সন্ধিপূজা ও বলিদান',
      date: '19 Oct (7:50 AM to 8:14 AM)',
      desc: 'The sacred 24-minute confluence between Astami and Navami with 108 lamps & 108 lotuses.'
    },
    {
      title: 'Maha Bhandara (Prasad)',
      titleBn: 'মহা ভাণ্ডারা',
      date: '20 Oct (8:00 PM)',
      desc: 'Grand community feast serving sanctified Khichuri Bhog, Labra, Payesh, and sweets to all devotees.'
    },
    {
      title: 'Sindhur Khela & Bisarjan',
      titleBn: 'সিঁদুর খেলা ও বিসর্জন',
      date: '21 Oct (5:00 PM)',
      desc: 'Married women celebrate with vermillion offerings and blessings before the farewell procession.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20 bg-[#FCFBF9]">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] bg-[#F6F4EE] px-3.5 py-1 rounded-full border border-[#E8E2D8] inline-block">
          20th SARBAJANIN DURGA PUJA • 2026
        </span>
        <h1 className="font-serif-clean font-bold text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
          Shree Shree Sarbajanin Durga Puja 2026
        </h1>
        <p className="font-bengali text-base sm:text-lg text-[#7A121D]">
          ২০তম ঐতিহাসিক শারদোৎসব ২০২৬ • নেতাজী সুভাষ চন্দ্র ওয়েলফেয়ার সংঘ
        </p>
        <div className="h-[1.5px] w-12 bg-[#7A121D] mx-auto my-3" />
        <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
          Welcome to the 20th edition of Sarbojanin Durga Puja in Kurar Village, Malad East. Join us for seven days of sacred Vedic rituals, Pushpanjali offerings, community feasts, and Bengali cultural unity.
        </p>
      </div>

      {/* Hero Image Showcase */}
      <div className="rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm aspect-[16/9] bg-[#F6F4EE]">
        <img
          src="/images/durga-hero.jpg"
          alt="Maa Durga 20th Puja 2026"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 5 Key Rituals */}
      <section className="space-y-8">
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] bg-[#F6F4EE] px-3 py-1 rounded-full border border-[#E8E2D8]">
            SACRED RITUALS
          </span>
          <h2 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917] mt-2">
            Highlights of the 2026 Mahotsav
          </h2>
          <div className="h-[1.5px] w-12 bg-[#7A121D] mx-auto my-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyRituals.map((ritual, idx) => (
            <div
              key={idx}
              className="clean-card p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-[#7A121D] bg-[#F6F4EE] px-2.5 py-0.5 rounded border border-[#E8E2D8] inline-block mb-3">
                  {ritual.date}
                </span>
                <h3 className="font-serif-clean font-bold text-base text-[#1C1917]">
                  {ritual.title}
                </h3>
                {ritual.titleBn && (
                  <p className="font-bengali text-xs text-[#8C827A] mt-0.5 mb-2">
                    {ritual.titleBn}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {ritual.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Schedule Cards */}
      <section className="space-y-8">
        <SectionHeading
          badge="COMPLETE CALENDAR"
          titleBn="সম্পূর্ণ পূজা দিনপঞ্জি"
          title="2026 COMPLETE PUJA TIMETABLE"
          subtitle="All timings from Maha Panchami (15 Oct) to Lakshmi Puja (25 Oct 2026)."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map(day => (
            <PujaCalendarCard key={day.id} day={day} />
          ))}
        </div>
      </section>
    </div>
  );
};
