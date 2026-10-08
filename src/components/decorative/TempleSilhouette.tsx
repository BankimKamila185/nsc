import React from 'react';

interface TempleSilhouetteProps {
  className?: string;
  color?: string;
  height?: number;
}

export const TempleSilhouette: React.FC<TempleSilhouetteProps> = ({
  className = '',
  color = '#3A080D',
  height = 90
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-auto block"
        style={{ height: `${height}px` }}
      >
        {/* Repeating terracotta temple shikhar roofs, kalash flags, and arched mandap gates */}
        <path
          d="
            M0 120
            L0 95
            L40 95
            L60 65 L70 65 L75 35 L80 35 L80 15 L82 15 L82 5 L85 10 L88 15 L88 35 L93 35 L98 65 L108 65 L128 95
            L160 95
            L170 80 L185 80 L195 50 L200 50 L200 20 L203 20 L203 10 L206 15 L209 20 L209 50 L214 50 L224 80 L239 80 L249 95
            L280 95
            L300 100
            L320 85 L335 85 L350 45 L355 45 L355 25 L358 25 L358 12 L361 18 L364 25 L364 45 L369 45 L384 85 L399 85 L419 95
            L460 95
            L480 70 L495 70 L510 30 L515 30 L515 8 L518 8 L520 2 L522 8 L525 8 L525 30 L530 30 L545 70 L560 70 L580 95
            L620 95
            L640 85 L655 85 L670 45 L675 45 L675 25 L678 25 L678 12 L681 18 L684 25 L684 45 L689 45 L704 85 L719 85 L739 95
            L780 95
            L790 80 L805 80 L815 50 L820 50 L820 20 L823 20 L823 10 L826 15 L829 20 L829 50 L834 50 L844 80 L859 80 L869 95
            L900 95
            L920 65 L930 65 L935 35 L940 35 L940 15 L942 15 L942 5 L945 10 L948 15 L948 35 L953 35 L958 65 L968 65 L988 95
            L1020 95
            L1040 75 L1055 75 L1070 35 L1075 35 L1075 12 L1078 12 L1080 5 L1082 12 L1085 12 L1085 35 L1090 35 L1105 75 L1120 75 L1140 95
            L1200 95
            L1200 120
            Z
          "
          fill={color}
        />
      </svg>
    </div>
  );
};
