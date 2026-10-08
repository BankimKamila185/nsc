import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  titleBn?: string;
  badge?: string;
  align?: 'center' | 'left' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  titleBn,
  badge,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3 border ${
          isDark
            ? 'bg-[#2A0A0F] text-[#DFC798] border-[#DFC798]/30'
            : 'bg-[#F6F4EE] text-[#7A121D] border-[#E8E2D8]'
        }`}>
          <span>🪔</span>
          {badge}
        </span>
      )}

      {titleBn && (
        <span className={`font-bengali text-sm sm:text-base font-normal tracking-wide mb-1.5 ${
          isDark ? 'text-[#DFC798]/90' : 'text-[#7A121D]'
        }`}>
          {titleBn}
        </span>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-clean font-bold tracking-tight ${
        isDark ? 'text-white' : 'text-[#1C1917]'
      }`}>
        {title}
      </h2>

      <div className="flex items-center gap-2 my-4">
        <div className={`h-[1.5px] w-8 sm:w-12 ${isDark ? 'bg-[#DFC798]/40' : 'bg-[#7A121D]/40'}`} />
        <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#DFC798]' : 'bg-[#7A121D]'}`} />
        <div className={`h-[1.5px] w-8 sm:w-12 ${isDark ? 'bg-[#DFC798]/40' : 'bg-[#7A121D]/40'}`} />
      </div>

      {subtitle && (
        <p className={`text-xs sm:text-sm md:text-base max-w-2xl font-normal leading-relaxed ${
          isDark ? 'text-[#FCFBF9]/70' : 'text-[#57534E]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
