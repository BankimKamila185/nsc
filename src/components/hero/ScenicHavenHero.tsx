import React from 'react';
import { ArrowRight, Calendar, Image as ImageIcon, ChevronDown, Sparkles } from 'lucide-react';
import { BengaliAlponaMandala } from '../decorative/AlponaPattern';
import { SiteSettings } from '../../types';

interface ScenicHavenHeroProps {
  siteSettings: SiteSettings;
  onNavigate: (route: string) => void;
}

export const ScenicHavenHero: React.FC<ScenicHavenHeroProps> = ({ siteSettings, onNavigate }) => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('intro-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[96vh] sm:min-h-screen flex items-center justify-center overflow-hidden select-none bg-black">
      {/* Background Durga Idol Image with authentic Daaker Saaj */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/durga-idol-vertical.jpg" />
          <img
            src="/images/durga-idol-hero.jpg"
            alt="Maa Durga Pratima Daaker Saaj - Netaji Subhas Chandra Welfare Sangha"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.05]"
          />
        </picture>
        {/* Soft atmospheric gradient layer for crisp contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-black/40 to-black/80 pointer-events-none" />
      </div>

      {/* Rotating Sacred Alpona Watermark Halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1 opacity-15">
        <BengaliAlponaMandala size={680} color="#DFC798" opacity={0.3} animated={true} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center animate-fade-in-up">
        {/* Official Sangha Crest Badge */}
        <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#DFC798]/35 shadow-xl hover:border-[#DFC798]/60 transition-colors">
          <img
            src="/images/nsc-logo.jpg"
            alt="NSC Welfare Sangha Logo"
            className="w-6 h-6 rounded-full object-cover border border-[#DFC798]/60"
          />
          <span className="text-[11px] font-semibold tracking-wider text-[#DFC798] uppercase">
            Netaji Subhas Chandra Welfare Sangha
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] max-w-4xl">
          20th Sarbojanin Durga Puja 2026
        </h1>

        {/* Subtitle */}
        <div className="mt-5 space-y-1.5 max-w-xl text-center">
          <p className="font-normal text-base sm:text-lg text-white/95 leading-relaxed drop-shadow-sm">
            Celebrating 20 years of devotion, community, and Bengali culture.
          </p>
          <p className="font-normal text-sm sm:text-base text-neutral-300 leading-relaxed drop-shadow-sm">
            Kurar Village, Malad East, Mumbai.
          </p>
        </div>

        {/* Clean Pill CTAs (like 'Get Started →' and 'Watch Demo' in reference) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary Pill Button */}
          <button
            onClick={() => {
              onNavigate('/schedule');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/90"
          >
            <span>View Puja Schedule</span>
            <ArrowRight size={14} className="stroke-[2.5]" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => {
              onNavigate('/gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md border border-white/25 hover:scale-105 active:scale-95"
          >
            <ImageIcon size={14} />
            <span>Explore Gallery</span>
          </button>
        </div>
      </div>

      {/* Bottom Floating Scroll Indicator Pill (like 'SCROLL ↓' in reference) */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-14 sm:bottom-18 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white/90 hover:text-white border border-white/25 text-[10px] font-mono tracking-[0.22em] uppercase transition-all cursor-pointer flex items-center gap-1.5 shadow-md hover:scale-105"
        aria-label="Scroll down to content"
      >
        <span>SCROLL</span>
        <ChevronDown size={12} className="animate-bounce" />
      </button>
    </section>
  );
};
