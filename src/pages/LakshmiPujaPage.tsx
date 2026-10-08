import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { Sun, Moon, Calendar } from 'lucide-react';

interface LakshmiPujaPageProps {
  onNavigate: (route: string) => void;
}

export const LakshmiPujaPage: React.FC<LakshmiPujaPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="KOJAGARI PURNIMA 2026"
        titleBn="শ্রী শ্রী কোজাগরী লক্ষ্মীপূজা"
        title="KOJAGARI LAKSHMI PUJA 2026"
        subtitle="Welcoming Maa Lakshmi, the Divine Goddess of Prosperity, Light, and Harmony."
      />

      {/* Hero Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm aspect-[16/10] bg-[#F6F4EE]">
          <img
            src="/images/lakshmi-puja.jpg"
            alt="Maa Lakshmi Kojagari Purnima Altar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-5 text-[#57534E]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] bg-[#F6F4EE] px-3 py-1 rounded-full border border-[#E8E2D8]">
            25TH OCTOBER 2026 • SUNDAY
          </span>

          <h2 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917]">
            The Auspicious Full Moon Celebration
          </h2>

          <div className="h-[1.5px] w-12 bg-[#7A121D]" />

          <p className="text-sm sm:text-base leading-relaxed">
            Observed on the auspicious full moon night (Kojagari Purnima) in the autumn month of Ashvin, Lakshmi Puja is celebrated with immense devotion by Netaji Subhas Chandra Welfare Sangha.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            The sanctum is decorated with traditional white rice paste alpona depictions of Goddess Lakshmi's sacred footprints (<em>Lakshmir Pa</em>), paddy sheaves (<em>Dhaner Shish</em>), and fragrant naivedya sweets.
          </p>
        </div>
      </div>

      {/* Timetable Cards */}
      <section className="space-y-6">
        <div className="text-center">
          <h3 className="font-serif-clean font-bold text-2xl text-[#1C1917]">
            Official Lakshmi Puja Timetable
          </h3>
          <div className="h-[1.5px] w-12 bg-[#7A121D] mx-auto my-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Pushpanjali Card */}
          <div className="clean-card p-6 sm:p-8 text-center space-y-3 bg-white">
            <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#7A121D] mx-auto flex items-center justify-center border border-[#E8E2D8]">
              <Sun size={20} />
            </div>
            <span className="text-[10px] font-semibold text-[#7A121D] uppercase tracking-wider bg-[#F6F4EE] px-2.5 py-0.5 rounded">
              Daytime Devotion
            </span>
            <h4 className="font-serif-clean font-bold text-lg text-[#1C1917]">
              Maha Pushpanjali
            </h4>
            <p className="font-bengali text-xs text-[#7A121D]">
              পুষ্পাঞ্জলি প্রদান
            </p>
            <div className="py-2.5 px-4 rounded-xl bg-[#F6F4EE] text-[#1C1917] font-bold font-mono text-base border border-[#E8E2D8]">
              12:00 PM (Noon)
            </div>
            <p className="text-xs text-[#57534E]">
              All devotees and neighborhood families are cordially invited for floral offerings.
            </p>
          </div>

          {/* Mayer Puja Card */}
          <div className="clean-card p-6 sm:p-8 text-center space-y-3 bg-[#180507] text-[#FCFBF9]">
            <div className="w-10 h-10 rounded-full bg-[#2A0A0F] text-[#DFC798] mx-auto flex items-center justify-center border border-[#DFC798]/30">
              <Moon size={20} />
            </div>
            <span className="text-[10px] font-semibold text-[#DFC798] uppercase tracking-wider bg-[#2A0A0F] px-2.5 py-0.5 rounded">
              Midnight Kojagari Ritual
            </span>
            <h4 className="font-serif-clean font-bold text-lg text-white">
              Mayer Puja (Midnight Worship)
            </h4>
            <p className="font-bengali text-xs text-[#DFC798]">
              মায়ের নিশীথ পূজা
            </p>
            <div className="py-2.5 px-4 rounded-xl bg-[#2A0A0F] text-[#DFC798] font-bold font-mono text-base border border-[#DFC798]/30">
              10:30 PM to 1:00 AM
            </div>
            <p className="text-xs text-[#8C827A]">
              Traditional nocturnal worship invoking Maa Lakshmi under the autumn moonlight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
