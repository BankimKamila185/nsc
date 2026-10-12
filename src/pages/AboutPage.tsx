import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { 
  Award, 
  Heart, 
  Users, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Utensils,
  Music,
  Quote
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { siteSettings, committee } = useData();

  const metrics = [
    {
      value: '20+',
      label: 'Years of Devotion',
      subtext: 'Celebrating 2007 – 2026',
      icon: Award
    },
    {
      value: '10,000+',
      label: 'Annual Devotees',
      subtext: 'Families & pilgrims welcomed',
      icon: Users
    },
    {
      value: '2 Major',
      label: 'Sacred Pujas',
      subtext: 'Durga Puja & Lakshmi Puja',
      icon: Sparkles
    },
    {
      value: '100%',
      label: 'Community Led',
      subtext: 'Volunteer & seva driven',
      icon: Heart
    }
  ];

  const pillars = [
    {
      icon: Sparkles,
      title: 'Sacred Ritual Sanctity',
      description: 'Preserving authentic Vedic mantras, Bodhan, 108-lamp Sandhi Puja, and traditional Daaker Saaj pratima with uncompromised devotion.'
    },
    {
      icon: Music,
      title: 'Cultural Arts & Talent',
      description: 'Providing vibrant platforms for Rabindrasangeet, folk dances, Bengali drama, and dhunuchi dance competitions for youth.'
    },
    {
      icon: Utensils,
      title: 'Maha Bhog & Seva',
      description: 'Organizing grand Maha Bhandara community feasts with wholesome Khichuri bhog, fostering equality and universal fellowship.'
    },
    {
      icon: Users,
      title: 'Youth & Community Unity',
      description: 'Nurturing the next generation with traditional values, cultural pride, and collaborative neighborhood stewardship in Malad East.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14 sm:space-y-20 bg-[#FCFBF9]">
      {/* 1. Page Header */}
      <SectionHeading
        badge="ABOUT OUR SANGHA"
        titleBn="আমাদের সংঘ পরিচিতি ও উদ্দেশ্য"
        title="OUR STORY, DEVOTION & HERITAGE"
        subtitle="Netaji Subhas Chandra Welfare Sangha • Serving the community & keeping Bengali traditions alive in Kurar Village since 2007."
      />

      {/* 2. Hero Split Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-[#57534E] leading-relaxed">
          <h2 className="font-serif-clean font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] tracking-tight leading-snug">
            Two Decades of Faith, Culture, and Neighborhood Unity
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-[#44403C]">
            <strong className="text-[#1C1917] font-semibold">Netaji Subhas Chandra Welfare Sangha</strong> was founded in 2007 by a small, passionate group of residents at Anand Wadi in Kurar Village, Malad East, Mumbai. What began as an intimate neighborhood prayer to worship Maa Durga far away from Bengal has blossomed into one of Malad East’s most revered cultural institutions.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-[#44403C]">
            Over the past twenty years, our Sangha has served as a cultural bridge for Bengali families and the broader multicultural fabric of Mumbai. Every autumn, we come together to celebrate with traditional <span className="text-[#7A121D] font-medium">Daaker Saaj</span> ornamentation, authentic dhak rhythms, and heartfelt pushpanjali.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-[#44403C]">
            Beyond the marquee celebrations of Durga Puja and Kojagari Lakshmi Puja, our Sangha is dedicated to year-round humanitarian assistance, cultural education, youth mentorship, and neighborhood welfare.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => {
                onNavigate('/history');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-[#7A121D] text-white font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore 20-Year Journey</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => {
                onNavigate('/committee');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#F6F4EE] text-neutral-900 border border-[#E8E2D8] font-medium text-xs sm:text-sm tracking-wide hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Executive Committee
            </button>
          </div>
        </div>

        {/* Right Framed Photo & Floating Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-neutral-950 group aspect-[4/5]">
            <img
              src="/images/traditional-daaker-saaj-pratima.jpg"
              alt="Netaji Subhas Chandra Welfare Sangha Traditional Daaker Saaj Pratima"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Tag */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                Sacred Tradition
              </span>
              <p className="font-serif-clean font-bold text-sm sm:text-base leading-snug">
                Daaker Saaj Durga Pratima at Anand Wadi Mandap
              </p>
            </div>
          </div>

          {/* Floating Pill Accent */}
          <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8E2D8] shadow-lg items-center gap-2.5">
            <img
              src="/images/nsc-logo.jpg"
              alt="NSC Welfare Sangha Logo"
              className="w-7 h-7 rounded-full object-cover border border-[#DFC798]/60 shadow-xs"
            />
            <div>
              <p className="text-[10px] font-bold text-[#7A121D] uppercase tracking-wider leading-tight">Landmark Year</p>
              <p className="text-xs font-bold text-[#1C1917]">20th Durga Puja (2026)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Key Milestone Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white rounded-3xl border border-[#E8E2D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#F6F4EE] group-hover:bg-[#7A121D] text-[#7A121D] group-hover:text-white mx-auto flex items-center justify-center transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
                {metric.value}
              </h3>
              <p className="font-semibold text-xs sm:text-sm text-[#44403C]">
                {metric.label}
              </p>
              <p className="text-[11px] text-[#8C827A]">
                {metric.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* 4. Core Pillars / Mission Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] bg-[#F6F4EE] px-3.5 py-1.5 rounded-full border border-[#E8E2D8]">
            OUR GUIDING PILLARS
          </span>
          <h3 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917] pt-1">
            What Drives Our Sangha
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E]">
            Our vision is to unite devotees through cultural authenticity, continuous community seva, and timeless reverence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E8E2D8] shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F6F4EE] group-hover:bg-[#7A121D] text-[#7A121D] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={22} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif-clean font-bold text-base sm:text-lg text-[#1C1917]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Words from Our Leadership (Hidden for now as requested) */}
      {/* Messages from Leadership section hidden for now */}
      {false && committee.length > 0 && (
        <section className="p-8 sm:p-12 bg-white rounded-3xl border border-[#E8E2D8] shadow-xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A121D] block">
                LEADERSHIP & GUIDANCE • নেতৃত্বের বার্তা
              </span>
              <h3 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917]">
                Messages from Our Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#767676]">
                Reflections from the office bearers on our 20th landmark Durga Puja & community service in Malad East.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('/committee');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F4EE] hover:bg-[#7A121D] text-[#7A121D] hover:text-white border border-[#E8E2D8] text-xs font-semibold tracking-wide transition-all cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>View Full Committee</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committee.slice(0, 3).map(member => (
              <div
                key={member.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#FCFBF9] border border-[#E8E2D8] flex flex-col justify-between hover:shadow-md hover:border-[#DFC798] transition-all duration-300 relative group"
              >
                <div>
                  {/* Member Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#F6F4EE] border border-[#E8E2D8] shrink-0 shadow-xs">
                      {member.photoUrl ? (
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-sm text-[#7A121D]">
                          {member.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#7A121D] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-[#E8E2D8] inline-block">
                        {member.position} {member.positionBn && <span className="font-bengali font-normal">({member.positionBn})</span>}
                      </span>
                      <h4 className="font-serif-clean font-bold text-base text-[#1C1917] leading-snug">
                        {member.name}
                      </h4>
                      <p className="text-[11px] text-[#767676] line-clamp-1">
                        {member.category}
                      </p>
                    </div>
                  </div>

                  {/* Message Quote */}
                  <div className="relative pt-2">
                    <Quote size={20} className="text-[#DFC798] mb-2 opacity-80" />
                    <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed italic font-normal">
                      "{member.message || member.description}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#E8E2D8]/70 flex items-center justify-between text-[11px] text-[#767676]">
                  <span className="font-medium text-[#7A121D]">NSC Welfare Sangha</span>
                  <span>Estd. 2007</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

