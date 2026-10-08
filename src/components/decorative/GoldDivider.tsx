import React from 'react';
import { LotusDecoration } from './FestivalMotifs';

interface GoldDividerProps {
  variant?: 'lotus' | 'trishul' | 'diamond' | 'simple';
  className?: string;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  variant = 'lotus',
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      {/* Left Line */}
      <div className="h-[1.5px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#D69B32] to-[#D69B32]" />
      
      {/* Center Motif */}
      {variant === 'lotus' && (
        <div className="flex items-center gap-1.5 text-[#D69B32]">
          <span className="text-xs">✦</span>
          <LotusDecoration size={28} />
          <span className="text-xs">✦</span>
        </div>
      )}

      {variant === 'trishul' && (
        <div className="flex items-center gap-2 text-[#D69B32]">
          <span className="text-sm">🔱</span>
        </div>
      )}

      {variant === 'diamond' && (
        <div className="flex items-center gap-1.5 text-[#D69B32]">
          <span className="text-xs">❖</span>
          <span className="text-sm font-bold">◈</span>
          <span className="text-xs">❖</span>
        </div>
      )}

      {variant === 'simple' && (
        <div className="w-2 h-2 rotate-45 bg-[#D69B32]" />
      )}

      {/* Right Line */}
      <div className="h-[1.5px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#D69B32] to-[#D69B32]" />
    </div>
  );
};
