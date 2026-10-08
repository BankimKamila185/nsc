import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { Users, Heart, Sparkles, ShieldCheck, HeartHandshake, Award, ArrowRight } from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (route: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const initiatives = [
    {
      title: 'Our Members & Families',
      titleBn: 'আমাদের সদস্য পরিবারবর্গ',
      desc: 'Over 500 member families residing in Kurar Village and Malad East coming together as a close-knit cultural community.',
      icon: Users,
      badge: '500+ Families'
    },
    {
      title: 'Dedicated Volunteer Corps',
      titleBn: 'নিবেদিত স্বেচ্ছাসেবক দল',
      desc: 'Round-the-clock volunteer assistance overseeing pandal safety, elder care, crowd coordination, and bhog service.',
      icon: HeartHandshake,
      badge: '100% Volunteer Driven'
    },
    {
      title: 'Youth Wing Leadership',
      titleBn: 'যুব শাখা ও নতুন প্রজন্ম',
      desc: 'Empowering youngsters to manage modern digital streams, lighting, stage dramas, and traditional music performances.',
      icon: Sparkles,
      badge: 'Youth Leadership'
    },
    {
      title: 'Social & Welfare Initiatives',
      titleBn: 'সামাজিক ও সেবামূলক কর্মকাণ্ড',
      desc: 'Free health diagnostic drives, food distributions, blood donation camps, and educational aid for local children.',
      icon: ShieldCheck,
      badge: 'Social Welfare'
    },
    {
      title: 'Women’s Cultural Forum',
      titleBn: 'মহিলা সাংস্কৃতিক পরিষদ',
      desc: 'Leading traditional Alpona artistry, Bhog preparation, Pushpanjali coordination, and festive Sindhur Khela rituals.',
      icon: Heart,
      badge: 'Cultural Arts'
    },
    {
      title: 'Inter-Community Harmony',
      titleBn: 'সর্বজনীন সম্প্রীতি',
      desc: 'Welcoming residents of every background in Malad East to enjoy the prasad, artistic pandal decor, and music recitals.',
      icon: Award,
      badge: 'Inclusive Mumbai Spirit'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="COMMUNITY & UNITY"
        titleBn="শুধু পূজা নয়, একটি মেলবন্ধন"
        title="MORE THAN A PUJA. A COMMUNITY."
        subtitle="Netaji Subhas Chandra Welfare Sangha is rooted in shared fellowship, mutual support, and cultural pride."
      />

      {/* Hero Editorial */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4 text-[#57534E]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] bg-[#F6F4EE] px-3 py-1 rounded-full border border-[#E8E2D8]">
            TOGETHER SINCE 2007
          </span>
          <h2 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917]">
            A Platform for Friendship, Belonging & Care
          </h2>
          <div className="h-[1.5px] w-12 bg-[#7A121D]" />
          <p className="text-sm sm:text-base leading-relaxed">
            The Sangha is not only about seven days of autumn worship. It represents our shared identity, daily camaraderie, and reciprocal assistance in Kurar Village, Malad East.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Whether celebrating joyous milestones or standing beside members in times of medical distress, our members and volunteers demonstrate the true meaning of <em>Welfare</em> and <em>Sangha</em>.
          </p>
        </div>

        <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm aspect-[16/10] bg-[#F6F4EE]">
          <img
            src="/images/community-bhog.jpg"
            alt="Community fellowship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 6 Wings Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h3 className="font-serif-clean font-bold text-2xl text-[#1C1917]">
            Wings of Our Organization
          </h3>
          <div className="h-[1.5px] w-12 bg-[#7A121D] mx-auto my-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="clean-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold text-[#7A121D] bg-[#F6F4EE] px-2.5 py-0.5 rounded border border-[#E8E2D8]">
                      {item.badge}
                    </span>
                    <div className="p-2 rounded-full bg-[#F6F4EE] text-[#7A121D]">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h4 className="font-serif-clean font-bold text-base text-[#1C1917]">
                    {item.title}
                  </h4>
                  {item.titleBn && (
                    <p className="font-bengali text-xs text-[#8C827A] mt-0.5 mb-2">
                      {item.titleBn}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Minimal CTA */}
      <div className="clean-card p-8 sm:p-12 text-center bg-white">
        <h3 className="font-serif-clean font-bold text-2xl text-[#1C1917]">
          Become a Part of Our Sangha Family
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] max-w-lg mx-auto mt-2 mb-6">
          Whether you want to perform in cultural recitals, volunteer during the 2026 Puja, or support social welfare drives, we welcome you.
        </p>
        <button
          onClick={() => {
            onNavigate('/contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <span>Get in Touch / Join as Volunteer</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};
