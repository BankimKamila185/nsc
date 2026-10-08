import React, { useState } from 'react';
import { Download, Sparkles, ExternalLink, ZoomIn, Printer } from 'lucide-react';
import { LotusDecoration } from '../decorative/FestivalMotifs';

interface AuthenticPosterTimetableProps {
  onNavigate?: (route: string) => void;
}

export const AuthenticPosterTimetable: React.FC<AuthenticPosterTimetableProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'vector' | 'image'>('vector');

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* View Switcher Controls */}
      <div className="flex items-center justify-between gap-3 mb-6 pb-2">
        <div className="inline-flex p-1 rounded-full bg-neutral-200/80 border border-neutral-300/80 text-xs font-semibold">
          <button
            onClick={() => setViewMode('vector')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'vector'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            ✨ Ultra-Crisp HD View
          </button>
          <button
            onClick={() => setViewMode('image')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'image'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            🖼️ Original Poster Image
          </button>
        </div>

        <a
          href="/images/puja-timetable-poster-2026.jpg"
          download="NSCWS_20th_Durga_Puja_2026_Timetable.jpg"
          className="px-4 py-1.5 rounded-full bg-[#7A121D] hover:bg-[#9E1B28] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <Download size={13} />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>

      {viewMode === 'image' ? (
        /* Original Raster Image View with Zoom Hint */
        <div className="rounded-3xl overflow-hidden border-2 border-neutral-300 shadow-xl bg-neutral-900 group relative">
          <img
            src="/images/puja-timetable-poster-2026.jpg"
            alt="Netaji Subhas Chandra Welfare Sangha 20th Durga Puja 2026 Official Timetable Poster"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      ) : (
        /* Ultra-Crisp Vector / CSS High Definition Recreation */
        <div className="rounded-3xl overflow-hidden border-4 border-[#8E1C27] shadow-[0_25px_60px_rgba(0,0,0,0.18)] bg-[#4A050B] text-neutral-900 font-sans select-none relative">
          {/* Inner Ornate Gold Border */}
          <div className="m-2 sm:m-3 p-4 sm:p-7 rounded-2xl border-2 border-[#D69B32] bg-gradient-to-b from-[#4A050B] via-[#630912] to-[#2B0307] relative overflow-hidden">
            
            {/* Corner Decorative Alpona Accents */}
            <div className="absolute top-2 left-2 text-[#F3C969] text-xl opacity-60">⚜</div>
            <div className="absolute top-2 right-2 text-[#F3C969] text-xl opacity-60">⚜</div>

            {/* =========================================================
                1. HEADER BANNER WITH MAA DURGA ART & REGAL TITLE
                ========================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b-2 border-[#D69B32]/60">
              {/* Left: Maa Durga Icon & Sacred Motif */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#F3C969] via-[#D69B32] to-[#8C5D0F] p-1 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-[#3A080D] flex flex-col items-center justify-center text-[#FFF1D2] p-2">
                    <span className="text-4xl sm:text-5xl mb-1">🪔</span>
                    <span className="font-serif font-black text-sm text-[#F3C969] tracking-wider uppercase">
                      শ্রী শ্রী দুর্গা
                    </span>
                    <span className="text-[10px] text-amber-200/80 font-mono">
                      MAA DURGA 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Club Name, ESTD, and 20th Celebration Logo */}
              <div className="md:col-span-8 text-center md:text-left space-y-2">
                <div className="inline-flex items-center gap-2">
                  <LotusDecoration size={20} color="#F3C969" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#F3C969]">
                    ESTD. 2007 • MUMBAI
                  </span>
                </div>

                <h1 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#FFF1D2] tracking-wide uppercase leading-tight drop-shadow-md">
                  Netaji Subhas Chandra Welfare Sangha
                </h1>
                
                <p className="text-xs sm:text-sm font-medium text-[#F3C969] tracking-wider uppercase">
                  Kurar Village, Malad East, Mumbai — 400097
                </p>

                {/* 20th Durga Puja Badge */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-[#D69B32] via-[#F3C969] to-[#D69B32] text-[#2B0307] shadow-lg font-serif font-black text-lg sm:text-xl tracking-tight flex items-center gap-2">
                    <span>✨</span>
                    <span>20th Durga Puja 2026</span>
                    <span>🌺</span>
                  </div>
                  <span className="text-xs font-bengali text-[#FFF1D2]/90 font-semibold">
                    সার্বজনীন দুর্গোৎসব ও লক্ষ্মীপূজা
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================================
                2. TIME TABLE RIBBON BANNER
                ========================================================= */}
            <div className="my-6 text-center">
              <div className="inline-block px-8 sm:px-14 py-3 rounded-2xl bg-gradient-to-r from-[#FFF1D2] via-[#FFFDF9] to-[#FFF1D2] border-2 border-[#D69B32] shadow-xl text-[#2B0307]">
                <h2 className="font-serif font-black text-lg sm:text-2xl lg:text-3xl tracking-wide uppercase">
                  SHREE SHREE SARBAJANIN DURGA PUJA
                </h2>
                <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold text-[#7A121D] tracking-[0.2em] mt-0.5">
                  <span>🌸</span>
                  <span>— TIME TABLE - 2026 —</span>
                  <span>🌸</span>
                </div>
              </div>
            </div>

            {/* =========================================================
                3. TIMETABLE SCHEDULE TWO-COLUMN CARDS
                ========================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 bg-[#FFF8EA] p-4 sm:p-6 rounded-2xl border-2 border-[#D69B32] shadow-inner text-[#1C1917]">
              
              {/* LEFT COLUMN (Panchami -> Astami) */}
              <div className="space-y-4">
                
                {/* Maha Panchami */}
                <div className="rounded-xl border border-[#7A121D]/30 overflow-hidden bg-white shadow-xs">
                  <div className="bg-[#7A121D] text-white px-3.5 py-1.5 font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>Maha Panchami — 15th Oct. 2026 (Thursday)</span>
                    <span className="font-bengali text-xs text-amber-200">পঞ্চমী</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm flex items-center justify-between">
                    <span className="font-medium text-[#1C1917]">Debir Agaman (Welcoming)</span>
                    <span className="text-xl">🏺</span>
                  </div>
                </div>

                {/* Maha Sasthi */}
                <div className="rounded-xl border border-[#7A121D]/30 overflow-hidden bg-white shadow-xs">
                  <div className="bg-[#7A121D] text-white px-3.5 py-1.5 font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>Maha Sasthi — 16th Oct. 2026 (Friday)</span>
                    <span className="font-bengali text-xs text-amber-200">ষষ্ঠী</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm space-y-1">
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Bodhan:</strong> 6:12 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Sasthi Puja:</strong> 10:27 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Pushpanjali:</strong> 11:30 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Sandhya Arati:</strong> 7:00 p.m.</span></div>
                  </div>
                </div>

                {/* Maha Saptami */}
                <div className="rounded-xl border border-[#7A121D]/30 overflow-hidden bg-white shadow-xs">
                  <div className="bg-[#7A121D] text-white px-3.5 py-1.5 font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>Maha Saptami — 17th Oct. 2026 (Saturday)</span>
                    <span className="font-bengali text-xs text-amber-200">সপ্তমী</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm space-y-1">
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Ghot Uttlan:</strong> 10:26 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Navapatrika (Kola Bou):</strong> 10:30 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Pushpanjali:</strong> 12:10 p.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Sandhya Arati:</strong> 8:00 p.m.</span></div>
                    <div className="mt-2 pt-2 border-t border-neutral-200 text-[11px] text-[#7A121D] font-medium italic">
                      Note: Maha Saptami Aitrikta Puja — 18th Oct. 2026 (Sunday)
                    </div>
                  </div>
                </div>

                {/* Maha Astami */}
                <div className="rounded-xl border-2 border-[#7A121D] overflow-hidden bg-white shadow-sm ring-1 ring-[#7A121D]/20">
                  <div className="bg-[#7A121D] text-white px-3.5 py-1.5 font-bold text-xs sm:text-sm flex items-center justify-between">
                    <span>Maha Astami — 19th Oct. 2026 (Monday)</span>
                    <span className="font-bengali text-xs text-amber-200">মহা অষ্টমী</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm space-y-1.5 bg-amber-50/40">
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Astami Puja:</strong> 6:00 a.m. to 7:50 a.m.</span></div>
                    <div className="flex items-center gap-2 font-bold text-[#7A121D] bg-amber-100/80 px-2 py-0.5 rounded-md"><span className="text-[#7A121D]">⭐</span> <span>Sandhi Puja: 7:50 a.m. to 8:14 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Balidan:</strong> 7:50 a.m.</span></div>
                    <div className="flex items-center gap-2 font-semibold text-[#1C1917]"><span className="text-[#7A121D]">🌸</span> <span>Pushpanjali: 9:00 a.m. to 12:00 p.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Sandhya Arati:</strong> 8:00 p.m.</span></div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN (Navami -> Laxmi Puja) */}
              <div className="space-y-4">
                
                {/* Maha Navami */}
                <div className="rounded-xl border border-[#7A121D]/30 overflow-hidden bg-white shadow-xs">
                  <div className="bg-[#7A121D] text-white px-3.5 py-1.5 font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>Maha Navami — 20th Oct. 2026 (Tuesday)</span>
                    <span className="font-bengali text-xs text-amber-200">নবমী</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm space-y-1.5">
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Navami Puja:</strong> 9:30 a.m. to 10:00 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Pushpanjali:</strong> 10:30 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Sandhya Arati:</strong> 7:00 p.m.</span></div>
                    <div className="flex items-center gap-2 font-bold text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-md mt-1">
                      <span>🍛</span> <span>8:00 p.m. — MAHA BHANDARA (Grand Bhog)</span>
                    </div>
                  </div>
                </div>

                {/* Maha Dashami */}
                <div className="rounded-xl border border-[#7A121D]/30 overflow-hidden bg-white shadow-xs">
                  <div className="bg-[#7A121D] text-white px-3.5 py-1.5 font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>Maha Dashami — 21st Oct. 2026 (Wednesday)</span>
                    <span className="font-bengali text-xs text-amber-200">বিজয়া দশমী</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm space-y-1.5">
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Dashami Puja:</strong> 9:47 a.m. to 10:30 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>Aparajita Puja:</strong> 11:00 a.m.</span></div>
                    <div className="flex items-center gap-2 font-bold text-[#7A121D] bg-rose-50 px-2 py-0.5 rounded-md">
                      <span>🔴</span> <span>5:00 p.m. — Sindhur Khela (সিঁদুর খেলা)</span>
                    </div>
                    <div className="flex items-center gap-2"><span className="text-[#7A121D]">•</span> <span><strong>9:00 p.m. — Pratima Visarjan (বিসর্জন)</strong></span></div>
                  </div>
                </div>

                {/* Kojagari Laxmi Puja */}
                <div className="rounded-xl border-2 border-amber-600/50 overflow-hidden bg-white shadow-xs">
                  <div className="bg-[#8C5D0F] text-white px-3.5 py-1.5 font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>Laxmi Puja — 25th Oct. 2026 (Sunday)</span>
                    <span className="font-bengali text-xs text-amber-200">কোজাগরী লক্ষ্মীপূজা</span>
                  </div>
                  <div className="p-3 text-xs sm:text-sm space-y-1">
                    <div className="flex items-center gap-2"><span className="text-[#8C5D0F]">•</span> <span><strong>Mayer Puja:</strong> 10:30 p.m. to 1:00 a.m.</span></div>
                    <div className="flex items-center gap-2"><span className="text-[#8C5D0F]">•</span> <span><strong>Pushpanjali:</strong> 12:00 p.m.</span></div>
                  </div>
                </div>

                {/* Sunset Silhouette / Location Footer Card */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-100/70 to-rose-100/70 border border-amber-300 text-center space-y-1">
                  <p className="text-xs font-bold text-[#7A121D]">
                    📍 Venue: Room No. 6, Ganesh Niwas Mitra Mandal
                  </p>
                  <p className="text-[11px] text-[#57534E]">
                    Near B.M.C. Playground, Anand Wadi, Kurar Village, Malad (E), Mumbai - 400097
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Footer Credits Banner */}
            <div className="mt-4 pt-3 border-t border-[#D69B32]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#F3C969]/80 font-medium">
              <span>All devotees and families are cordially invited to seek blessings.</span>
              <span className="font-mono">© 2007–2026 NSCWS</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
