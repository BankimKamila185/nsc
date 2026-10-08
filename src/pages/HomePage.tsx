import React from 'react';
import { useData } from '../context/DataContext';
import { ScenicHavenHero } from '../components/hero/ScenicHavenHero';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { ArrowRight, Calendar, Image as ImageIcon, MapPin, Sparkles, Heart, Landmark, Utensils, Users, MoreHorizontal } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { schedule, gallery, siteSettings } = useData();

  return (
    <div className="space-y-0 bg-[#FCFBF9]">
      {/* ============================================================
          1. HAVEN-STYLE MINIMALIST SCENIC HERO SECTION
          ============================================================ */}
      <ScenicHavenHero siteSettings={siteSettings} onNavigate={onNavigate} />

      {/* ============================================================
          2. MAIN CONTENT SHEET OVERLAPPING HERO WITH ROUNDED TOP CORNERS
          ============================================================ */}
      <div className="relative z-20 -mt-10 sm:-mt-16 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4rem] bg-[#FCFBF9] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-white/80 overflow-hidden">
        {/* Subtle pill indicator */}
        <div className="pt-4 sm:pt-6 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-neutral-300/80" />
        </div>

        {/* CLEAN HAVEN / APPLE MINIMALIST ABOUT SECTION */}
        <section id="intro-section" className="pt-8 sm:pt-12 pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#7A121D] uppercase">
                About Our Sangha • Estd. 2007
              </span>

              <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-[1.08]">
                Two decades of devotion & community.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              <p>
                Founded in 2007 at <span className="text-neutral-900 font-medium">Kurar Village, Malad East, Mumbai</span>, Netaji Subhas Chandra Welfare Sangha brings people together through authentic Sarbojanin Durga Puja, Lakshmi Puja, and rich cultural traditions.
              </p>
              <p>
                From grand Maha Prasad distributions to philanthropic initiatives, we create an inclusive sanctuary where heritage is honored, families unite, and lifelong bonds flourish.
              </p>
            </div>

            {/* Minimalist Stats Ribbon */}
            <div className="pt-2 pb-2 grid grid-cols-3 gap-6 border-y border-neutral-200/80 py-6">
              <div>
                <div className="font-sans font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">20+</div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">Years of Heritage</div>
              </div>
              <div className="border-l border-neutral-200/80 pl-6">
                <div className="font-sans font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">10k+</div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">Devotees & Visitors</div>
              </div>
              <div className="border-l border-neutral-200/80 pl-6">
                <div className="font-sans font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">100%</div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">Volunteer Driven</div>
              </div>
            </div>

            {/* Minimalist Pill Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm tracking-wide shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Story</span>
                <ArrowRight size={15} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Cinematic Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] overflow-hidden border border-neutral-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.08)] aspect-[4/5] sm:aspect-[5/6] bg-neutral-900 group">
              <img
                src="/images/durga-pratima-about.jpg"
                alt="Netaji Subhas Chandra Welfare Sangha Traditional Daaker Saaj Durga Pratima"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. OFFICIAL 2026 PUJA TIMETABLE POSTER IMAGE
          ============================================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-neutral-200/80">
        <SectionHeading
          badge="OFFICIAL 2026 TIMETABLE"
          titleBn="শ্রী শ্রী সার্বজনীন দুর্গাপূজা নির্ঘণ্ট — ২০২৬"
          title="SHREE SHREE SARBAJANIN DURGA PUJA TIME TABLE"
          subtitle="Official ceremonial schedule released by Netaji Subhas Chandra Welfare Sangha."
        />

        <div className="mt-8 max-w-2xl mx-auto">
          {/* Framed High-Definition Poster Image */}
          <div className="rounded-3xl overflow-hidden border-2 border-neutral-300 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-neutral-950 group">
            <img
              src="/images/puja-timetable-poster-2026.jpg"
              alt="Netaji Subhas Chandra Welfare Sangha 20th Durga Puja 2026 Official Timetable"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          5. PHOTO GALLERY SPOTLIGHT
          ============================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E2D8]">
        <SectionHeading
          badge="PHOTOGRAPHIC ARCHIVE"
          titleBn="উৎসবের চিত্রশালা"
          title="SANGHA MOMENTS & DEVOTION"
          subtitle="Glimpses of sacred rituals, Sindhur Khela, community prasad, and joyous cultural evenings."
        />

        {/* Pure Image Masonry Waterfall with Varied Pinterest Heights */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3.5 sm:gap-4 [column-fill:_balance]">
          {gallery.slice(0, 8).map((photo, index) => {
            const aspectRatios = [
              'aspect-[3/4]',
              'aspect-[2/3]',
              'aspect-[4/3]',
              'aspect-[9/14]',
              'aspect-square',
              'aspect-[3/5]',
              'aspect-[4/5]',
              'aspect-[3/4]'
            ];
            const aspectClass = aspectRatios[index % aspectRatios.length];

            return (
              <div
                key={photo.id}
                onClick={() => {
                  onNavigate('/gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="break-inside-avoid mb-3.5 sm:mb-4 group cursor-pointer"
              >
                {/* Pure Image Card Container with Staggered Aspect Ratio */}
                <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E9E9E9] shadow-xs hover:shadow-xl transition-all duration-300 select-none ${aspectClass}`}>
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-95 transition-all duration-300 ease-out"
                  />

                  {/* Hover Save Pill */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#E60023] hover:bg-[#AD081B] text-white font-bold text-xs shadow-md">
                      Save
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              onNavigate('/gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full bg-white hover:bg-neutral-900 hover:text-white text-[#1C1917] border border-[#E8E2D8] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <span>Browse Full Photo Gallery</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* ============================================================
          7. CLEAN CONNECT SECTION
          ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="clean-card p-8 sm:p-14 text-center bg-white border border-[#E8E2D8]">
          <span className="text-3xl mb-2 block">🪔</span>
          <h3 className="font-serif-clean font-bold text-2xl sm:text-3xl text-[#1C1917] uppercase">
            CONNECT WITH OUR SANGHA
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto mt-2 mb-6">
            Stay updated with Netaji Subhas Chandra Welfare Sangha on official social channels.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteSettings.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#F6F4EE] hover:bg-[#E8E2D8] text-[#1C1917] border border-[#E8E2D8] font-medium text-xs transition-colors"
            >
              Instagram: {siteSettings.instagramHandle}
            </a>
            <a
              href={siteSettings.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#F6F4EE] hover:bg-[#E8E2D8] text-[#1C1917] border border-[#E8E2D8] font-medium text-xs transition-colors"
            >
              Facebook: {siteSettings.facebookName}
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
