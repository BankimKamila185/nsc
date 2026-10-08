import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { User, Shield, Phone, Mail, Edit3, Award, Quote } from 'lucide-react';

interface CommitteePageProps {
  onNavigate: (route: string) => void;
}

export const CommitteePage: React.FC<CommitteePageProps> = ({ onNavigate }) => {
  const { committee } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Executive Committee', 'Puja Sub-Committee', 'Youth Wing'];

  const filteredMembers = committee.filter(m =>
    activeCategory === 'All' ? true : m.category === activeCategory
  );

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-12 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="GOVERNANCE & LEADERSHIP"
        titleBn="কার্যকরী পরিষদ ও পরিচালনা সমিতি"
        title="EXECUTIVE COMMITTEE & SANGHA LEADERSHIP"
        subtitle="The dedicated members guiding Netaji Subhas Chandra Welfare Sangha's cultural and community mission in Kurar Village."
      />

      {/* Category Tabs & Admin Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-3xl border border-[#E8E2D8] shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto scrollbar-thin">
          {categories.map(cat => {
            const isSelected = activeCategory === cat;
            const count = cat === 'All' ? committee.length : committee.filter(m => m.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#7A121D] text-white shadow-sm'
                    : 'bg-[#F6F4EE] text-[#57534E] hover:bg-[#E8E2D8] hover:text-[#1C1917]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/25 text-white' : 'bg-[#E8E2D8] text-[#57534E]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            onNavigate('/admin');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-[#7A121D] hover:underline shrink-0 cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6F4EE] border border-[#E8E2D8]"
        >
          <Edit3 size={13} />
          <span>Manage Members in Admin</span>
        </button>
      </div>

      {/* Leadership Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map(member => (
          <div
            key={member.id}
            className="p-6 bg-white rounded-3xl border border-[#E8E2D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Member Top Row: Portrait + Details */}
              <div className="flex items-start gap-4 mb-4">
                {/* Member Portrait */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-[#F6F4EE] border border-[#E8E2D8] shrink-0 shadow-xs">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-base text-[#7A121D]">
                      {member.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="min-w-0 space-y-1">
                  <span className="text-[10px] font-bold text-[#7A121D] uppercase tracking-wider bg-[#F6F4EE] px-2.5 py-0.5 rounded-full border border-[#E8E2D8] inline-block">
                    {member.category}
                  </span>
                  <h3 className="font-serif-clean font-bold text-base sm:text-lg text-[#1C1917] leading-snug truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#7A121D]">
                    {member.position} {member.positionBn && <span className="font-normal font-bengali text-[#8C827A]">({member.positionBn})</span>}
                  </p>
                </div>
              </div>

              {/* Message / Quote if available */}
              {member.message && (
                <div className="mb-3.5 p-3 rounded-2xl bg-[#F6F4EE]/70 border border-[#E8E2D8] text-xs text-[#44403C] italic leading-relaxed relative">
                  <Quote size={13} className="text-[#7A121D] inline mr-1 opacity-70" />
                  "{member.message}"
                </div>
              )}

              {/* Bio description */}
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4 font-normal">
                {member.description || 'Dedicated executive member overseeing Sangha welfare and festival governance.'}
              </p>
            </div>

            {/* Contact info footer */}
            <div className="pt-3 border-t border-[#E8E2D8] flex flex-col gap-1.5 text-[11px] text-[#8C827A]">
              {member.phonePlaceholder && (
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-[#7A121D]" />
                  <span>{member.phonePlaceholder}</span>
                </div>
              )}
              {member.emailPlaceholder && (
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-[#7A121D]" />
                  <span>{member.emailPlaceholder}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
