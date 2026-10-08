import React from 'react';
import { Award, Users, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';
import { BengaliAlponaMandala } from '../decorative/AlponaPattern';

interface Milestone20YearsProps {
  onNavigate: (route: string) => void;
}

export const Milestone20Years: React.FC<Milestone20YearsProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="clean-card p-8 sm:p-14 bg-gradient-to-br from-[#F6F4EE] via-white to-[#F6F4EE] border border-[#E8E2D8] relative overflow-hidden">
        {/* Background Rotating Alpona Watermark */}
        <div className="absolute -right-24 -bottom-24 pointer-events-none opacity-40">
          <BengaliAlponaMandala size={460} color="#DFC798" opacity={0.35} animated={true} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Big Minimal Number */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-white border border-[#E8E2D8] shadow-md relative overflow-hidden group hover:border-[#DFC798] transition-all">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
              <BengaliAlponaMandala size={280} color="#7A121D" opacity={0.3} animated={true} reverse={true} />
            </div>

            <span className="font-serif-clean font-black text-7xl sm:text-8xl lg:text-9xl text-[#7A121D] leading-none tracking-tight relative z-10">
              20
            </span>
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#C2922E] mt-2 relative z-10">
              Years of Devotion
            </span>
            <span className="text-xs text-[#8C827A] mt-1 font-mono relative z-10">
              2007 — 2026
            </span>
            <div className="mt-4 px-3.5 py-1 rounded-full bg-[#F6F4EE] border border-[#E8E2D8] text-[11px] font-semibold text-[#1C1917] uppercase tracking-wider relative z-10 flex items-center gap-1.5 shadow-2xs">
              <Sparkles size={12} className="text-[#C2922E]" />
              <span>20th Durga Puja Landmark</span>
            </div>
          </div>

          {/* Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] block mb-1">
                OUR SACRED MILESTONE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-clean font-bold text-[#1C1917] tracking-tight">
                Two Decades of Culture, Harmony & Togetherness
              </h2>
              <p className="font-bengali text-sm text-[#7A121D] mt-1">
                ২০০৭ থেকে ২০২৬ — দুই দশকের ভক্তি ও সামাজিক ঐক্যের পথচলা
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-normal">
              Founded in 2007 in Kurar Village, Malad East, Mumbai, Netaji Subhas Chandra Welfare Sangha has grown from a humble neighborhood prayer into a cherished cultural institution. In 2026, we celebrate our landmark 20th Sarbojanin Durga Puja.
            </p>

            {/* Clean Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E2D8] text-center">
                <span className="font-serif-clean font-bold text-2xl text-[#1C1917] block">20</span>
                <span className="text-[11px] text-[#57534E] uppercase tracking-wider">Durga Pujas</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E2D8] text-center">
                <span className="font-serif-clean font-bold text-2xl text-[#1C1917] block">19+</span>
                <span className="text-[11px] text-[#57534E] uppercase tracking-wider">Years Active</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E2D8] text-center">
                <span className="font-serif-clean font-bold text-2xl text-[#1C1917] block">500+</span>
                <span className="text-[11px] text-[#57534E] uppercase tracking-wider">Member Families</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('/history');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-[#1C1917] hover:bg-[#7A121D] text-white text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Explore 20-Year Journey</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => {
                  onNavigate('/durga-puja');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-white hover:bg-[#F6F4EE] text-[#1C1917] border border-[#E8E2D8] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                2026 Puja Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
