import React, { useState, useEffect } from 'react';
import { Calendar, Image as ImageIcon, Sparkles, ChevronLeft, ChevronRight, ChevronDown, MapPin } from 'lucide-react';
import { LotusDecoration } from '../decorative/FestivalMotifs';
import { GoldDivider } from '../decorative/GoldDivider';

interface SlideData {
  image: string;
  line1: string;
  line2: string;
  line2Bn: string;
  subtitle: string;
}

interface CinematicHeroSliderProps {
  onNavigate: (route: string) => void;
}

const slides: SlideData[] = [
  {
    image: '/images/durga-hero.jpg',
    line1: 'TRADITION OF',
    line2: 'BENGAL & MUMBAI',
    line2Bn: 'ঐতিহ্যের পবিত্র বন্ধন',
    subtitle: 'NETAJI SUBHAS CHANDRA WELFARE SANGHA • ESTD. 2007'
  },
  {
    image: '/images/sindhur-khela.jpg',
    line1: 'ARTISTRY MEETS',
    line2: 'DEVOTION',
    line2Bn: 'শিল্প ও ভক্তির মেলবন্ধন',
    subtitle: '20th SARBAJANIN DURGA PUJA MAHOTSAV • 2026'
  },
  {
    image: '/images/community-bhog.jpg',
    line1: 'GRACE BEYOND',
    line2: 'CELEBRATION',
    line2Bn: 'সম্প্রীতি ও সামাজিক সেবা',
    subtitle: 'KURAR VILLAGE • MALAD EAST • MUMBAI – 400097'
  }
];

export const CinematicHeroSlider: React.FC<CinematicHeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative min-h-[92vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#240407] text-[#FFF1D2]">
      {/* Background Slides with crossfade */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={s.image}
            alt={s.line2}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7A1018] via-[#3A080D]/80 to-[#240407]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#240407]/50 to-[#240407]/90 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Top Auspicious Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1018]/90 border border-[#D69B32] shadow-xl backdrop-blur-sm animate-pulse">
          <LotusDecoration size={16} color="#F3C969" />
          <span className="font-bengali text-xs sm:text-sm text-[#F3C969] tracking-wider font-semibold">
            🌸 শুভ আগমনী • ২০তম শারদোৎসব ২০২৬ 🌸
          </span>
          <LotusDecoration size={16} color="#F3C969" />
        </div>

        {/* Established & Location Header */}
        <p className="font-display-regal text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D69B32] uppercase mb-2">
          ESTD. 2007 • KURAR VILLAGE, MALAD EAST, MUMBAI
        </p>

        {/* Main Split Headline (Duttabagan style: Line1 in Serif + Line2 in Large Display) */}
        <div className="my-3 space-y-1">
          <span className="block font-display-regal font-light text-2xl sm:text-3xl md:text-4xl text-[#FFF1D2] tracking-[0.2em] uppercase">
            {slide.line1}
          </span>
          <h1 className="block font-serif-royal font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient uppercase tracking-tight leading-none drop-shadow-lg">
            {slide.line2}
          </h1>
          <p className="font-bengali text-lg sm:text-2xl text-[#F3C969] font-medium pt-2">
            {slide.line2Bn}
          </p>
        </div>

        {/* Organization Name Highlight Banner */}
        <div className="my-6 px-6 sm:px-10 py-3 rounded-2xl bg-[#3A080D]/90 border-2 border-[#D69B32] shadow-2xl gold-border-glow backdrop-blur-md max-w-2xl">
          <p className="font-display-regal font-extrabold text-sm sm:text-lg text-white uppercase tracking-wider">
            NETAJI SUBHAS CHANDRA WELFARE SANGHA
          </p>
          <p className="font-serif-royal text-xs sm:text-sm text-[#D69B32] font-semibold tracking-widest uppercase mt-0.5">
            20th Landmark Durga Puja • October 2026
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2">
          <button
            onClick={() => {
              onNavigate('/schedule');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D69B32] hover:bg-[#F3C969] text-[#3A080D] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar size={18} />
            <span>VIEW 2026 TIMETABLE</span>
          </button>

          <button
            onClick={() => {
              onNavigate('/durga-puja');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#7A1018]/90 hover:bg-[#A61B2B] text-white border-2 border-[#D69B32] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles size={18} className="text-[#F3C969]" />
            <span>20TH PUJA DETAILS</span>
          </button>
        </div>

        {/* Slide navigation dots */}
        <div className="flex items-center gap-3 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-[#D69B32]' : 'w-2.5 bg-[#FFF1D2]/40 hover:bg-[#FFF1D2]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Hint (Duttabagan style) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-80 pointer-events-none">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D69B32]">SCROLL</span>
        <ChevronDown size={16} className="text-[#F3C969] animate-bounce" />
      </div>
    </div>
  );
};
