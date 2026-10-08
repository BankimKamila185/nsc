import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface OurJourneyPageProps {
  onNavigate: (route: string) => void;
}

export const OurJourneyPage: React.FC<OurJourneyPageProps> = ({ onNavigate }) => {
  const { history } = useData();

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="HISTORIC TIMELINE (2007 — 2026)"
        titleBn="আমাদের ২০ বছরের গৌরবময় পথচলা"
        title="OUR HERITAGE JOURNEY"
        subtitle="Chronicle of nearly two decades of faith, community bonding, and cultural preservation in Kurar Village, Malad East."
      />

      {/* Clean Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-7 before:w-0.5 before:bg-[#E8E2D8]">
        {history.map((milestone) => (
          <div key={milestone.id} className="relative flex items-start gap-6 sm:gap-8 group">
            {/* Timeline Dot / Year */}
            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#7A121D] text-[#7A121D] font-serif-clean font-bold text-xs sm:text-base flex items-center justify-center shrink-0 z-10 shadow-sm">
              {milestone.year.toString().slice(-2)}
            </div>

            {/* Content Card */}
            <div className="clean-card p-6 sm:p-8 bg-white flex-1 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-[#7A121D]">
                  {milestone.year}
                </span>
                <span className="text-[10px] font-semibold text-[#8C827A] uppercase bg-[#F6F4EE] px-2.5 py-0.5 rounded">
                  {milestone.year === 2026 ? '20th Landmark' : `Edition ${milestone.year - 2006}`}
                </span>
              </div>

              <h3 className="font-serif-clean font-bold text-lg sm:text-xl text-[#1C1917]">
                {milestone.title}
              </h3>
              {milestone.titleBn && (
                <p className="font-bengali text-xs text-[#7A121D]">
                  {milestone.titleBn}
                </p>
              )}

              <p className="text-xs font-medium text-[#C2922E] uppercase tracking-wider">
                {milestone.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {milestone.description}
              </p>

              {milestone.highlights && milestone.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-3 border-t border-[#E8E2D8]">
                  {milestone.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#57534E]">
                      <CheckCircle2 size={12} className="text-[#7A121D] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={() => {
            onNavigate('/durga-puja');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <span>Explore 20th Durga Puja (2026) Celebrations</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};
