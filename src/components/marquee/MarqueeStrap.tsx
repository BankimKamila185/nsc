import React from 'react';
import { LotusDecoration } from '../decorative/FestivalMotifs';

export const MarqueeStrap: React.FC = () => {
  const items = [
    'NETAJI SUBHAS CHANDRA WELFARE SANGHA',
    '২০তম শারদোৎসব ২০২৬',
    'SARBAJANIN DURGA PUJA MAHOTSAV',
    'ESTD. 2007 • KURAR VILLAGE • MALAD EAST',
    'KOJAGARI LAKSHMI PUJA 2026',
    'CELEBRATING 20 YEARS OF DEVOTION & CULTURE',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#240407] py-3.5 border-y-2 border-[#D69B32] select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Set 1 */}
        {items.map((text, idx) => (
          <div key={`set1-${idx}`} className="flex items-center gap-6 mx-4">
            <span className="font-display-regal font-extrabold text-xs sm:text-sm tracking-[0.2em] text-[#FFF1D2] uppercase">
              {text}
            </span>
            <div className="flex items-center gap-1.5 text-[#D69B32]">
              <LotusDecoration size={16} color="#F3C969" />
              <span className="text-xs">✦</span>
            </div>
          </div>
        ))}

        {/* Set 2 (Duplicate for seamless infinite loop) */}
        {items.map((text, idx) => (
          <div key={`set2-${idx}`} className="flex items-center gap-6 mx-4">
            <span className="font-display-regal font-extrabold text-xs sm:text-sm tracking-[0.2em] text-[#FFF1D2] uppercase">
              {text}
            </span>
            <div className="flex items-center gap-1.5 text-[#D69B32]">
              <LotusDecoration size={16} color="#F3C969" />
              <span className="text-xs">✦</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
