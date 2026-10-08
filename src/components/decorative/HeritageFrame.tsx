import React from 'react';

interface HeritageFrameProps {
  children: React.ReactNode;
  variant?: 'maroon' | 'cream' | 'gold-border';
  className?: string;
  glow?: boolean;
}

export const HeritageFrame: React.FC<HeritageFrameProps> = ({
  children,
  variant = 'cream',
  className = '',
  glow = false
}) => {
  const styles = {
    maroon: 'bg-[#3A080D] text-[#FFF1D2] border-2 border-[#D69B32]/70 shadow-2xl',
    cream: 'bg-[#FAF3E5] text-[#421015] border-2 border-[#D69B32]/60 shadow-lg',
    'gold-border': 'bg-white/90 backdrop-blur-sm text-[#3A080D] border-2 border-[#D69B32] shadow-xl'
  }[variant];

  return (
    <div className={`relative p-6 sm:p-8 rounded-xl transition-all duration-300 ${styles} ${glow ? 'gold-border-glow' : ''} ${className}`}>
      {/* Corner Filigree Symbols */}
      <span className="absolute top-2 left-2 text-[#D69B32] text-xs leading-none select-none">❖</span>
      <span className="absolute top-2 right-2 text-[#D69B32] text-xs leading-none select-none">❖</span>
      <span className="absolute bottom-2 left-2 text-[#D69B32] text-xs leading-none select-none">❖</span>
      <span className="absolute bottom-2 right-2 text-[#D69B32] text-xs leading-none select-none">❖</span>

      {/* Inner subtle decorative border */}
      <div className="absolute inset-1.5 border border-[#D69B32]/30 rounded-lg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
