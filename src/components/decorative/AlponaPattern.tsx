import React from 'react';

interface AlponaProps {
  className?: string;
  opacity?: number;
  size?: number;
  color?: string;
  animated?: boolean;
}

export const AlponaCircle: React.FC<AlponaProps> = ({
  className = '',
  opacity = 0.15,
  size = 300,
  color = '#D69B32',
  animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${animated ? 'animate-spin-slow will-change-transform' : ''} ${className}`}
      style={{ opacity }}
    >
      {/* Outer concentric rings with dot patterns */}
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="76" stroke={color} strokeWidth="2" />
      
      {/* 8-Petal Mandala Outer */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 24 C90 40 85 60 100 75 C115 60 110 40 100 24 Z"
            fill={color}
            fillOpacity="0.15"
            stroke={color}
            strokeWidth="1.2"
          />
          <circle cx="100" cy="20" r="2.5" fill={color} />
          <path
            d="M93 50 C95 40 100 35 100 35 C100 35 105 40 107 50"
            stroke={color}
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Inner Petal Ring */}
      <circle cx="100" cy="100" r="48" stroke={color} strokeWidth="1.5" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.05" />

      {/* 12-leaf Center Core */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={`inner-${i}`} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 62 C95 72 96 82 100 90 C104 82 105 72 100 62 Z"
            fill={color}
            fillOpacity="0.25"
            stroke={color}
            strokeWidth="0.8"
          />
        </g>
      ))}

      {/* Center Core Bindu */}
      <circle cx="100" cy="100" r="12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.4" />
      <circle cx="100" cy="100" r="4" fill={color} />
    </svg>
  );
};

export const BengaliCornerAlpona: React.FC<AlponaProps & { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  className = '',
  opacity = 0.2,
  size = 120,
  color = '#D69B32',
  position = 'top-left'
}) => {
  const rotation = {
    'top-left': '0deg',
    'top-right': '90deg',
    'bottom-right': '180deg',
    'bottom-left': '270deg'
  }[position];

  return (
    <div
      style={{ transform: `rotate(${rotation})`, opacity }}
      className={`pointer-events-none inline-block ${className}`}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L40 0 C40 20 20 40 0 40 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
        <path d="M0 0 L70 0 C60 30 30 60 0 70 Z" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M15 15 C25 8 35 15 30 25 C25 35 15 25 15 15 Z" fill={color} fillOpacity="0.4" />
        <circle cx="8" cy="8" r="4" fill={color} />
        <circle cx="28" cy="4" r="2" fill={color} />
        <circle cx="4" cy="28" r="2" fill={color} />
      </svg>
    </div>
  );
};

export const BengaliAlponaMandala: React.FC<AlponaProps & { side?: 'right' | 'left' | 'full' | 'top'; reverse?: boolean }> = ({
  className = '',
  opacity = 0.12,
  size = 480,
  color = '#7A121D',
  animated = false,
  reverse = false
}) => {
  // Renders authentic traditional Bengali Alpona with concentric petals, beaded crests, and scalloped finials
  return (
    <svg
      width={size}
      height={size}
      viewBox="-220 -220 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${
        animated ? (reverse ? 'animate-spin-reverse-slow will-change-transform' : 'animate-spin-slow will-change-transform') : ''
      } ${className}`}
      style={{ opacity }}
    >
      {/* Center Core Bindu & Inner Ring */}
      <circle cx="0" cy="0" r="14" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
      <circle cx="0" cy="0" r="5" fill={color} />

      {/* Layer 1: 8 Inner Teardrop Lotus Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={`l1-${deg}`} transform={`rotate(${deg})`}>
          <path
            d="M0 -14 C-10 -26 -8 -46 0 -54 C8 -46 10 -26 0 -14 Z"
            fill={color}
            fillOpacity="0.25"
            stroke={color}
            strokeWidth="1.8"
          />
          <path d="M0 -20 L0 -45" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
        </g>
      ))}

      {/* Concentric Dividing Band */}
      <circle cx="0" cy="0" r="58" stroke={color} strokeWidth="2.5" />
      <circle cx="0" cy="0" r="64" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="0" cy="0" r="72" stroke={color} strokeWidth="2" />

      {/* Layer 2: Radiating Pointed Brush Petals */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <g key={`l2-${deg}`} transform={`rotate(${deg})`}>
          <path
            d="M0 -72 C-14 -88 -12 -114 0 -124 C12 -114 14 -88 0 -72 Z"
            fill={color}
            fillOpacity="0.2"
            stroke={color}
            strokeWidth="2"
          />
          {/* Inner brush grain lines */}
          <path d="M-3 -80 C-5 -96 -2 -112 0 -120" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
          <path d="M3 -80 C5 -96 2 -112 0 -120" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
        </g>
      ))}

      {/* Outer Scallop Connecting Ring */}
      <circle cx="0" cy="0" r="126" stroke={color} strokeWidth="2" />

      {/* Layer 3: Paan/Kalka Crest Crowns with interior 3-bud florets & outer beaded pearls */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={`l3-${deg}`} transform={`rotate(${deg})`}>
          {/* Main Crown Arches */}
          <path
            d="M-32 -126 C-40 -150 -30 -185 0 -200 C30 -185 40 -150 32 -126"
            stroke={color}
            strokeWidth="2.5"
            fill={color}
            fillOpacity="0.1"
          />
          {/* Inner Mini Florette (3 Petals) */}
          <circle cx="0" cy="-155" r="5" fill={color} fillOpacity="0.8" />
          <path d="M-10 -144 C-14 -152 -8 -160 0 -155" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.3" />
          <path d="M10 -144 C14 -152 8 -160 0 -155" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.3" />
          <path d="M0 -170 C-5 -162 0 -155 0 -155 C0 -155 5 -162 0 -170" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.3" />

          {/* Outer Tip Pearl Bindu */}
          <circle cx="0" cy="-206" r="4.5" fill={color} />

          {/* Beaded Pearls lining the arches */}
          <circle cx="-14" cy="-196" r="2.8" fill={color} />
          <circle cx="-25" cy="-184" r="2.8" fill={color} />
          <circle cx="-33" cy="-168" r="2.8" fill={color} />
          <circle cx="-37" cy="-150" r="2.8" fill={color} />

          <circle cx="14" cy="-196" r="2.8" fill={color} />
          <circle cx="25" cy="-184" r="2.8" fill={color} />
          <circle cx="33" cy="-168" r="2.8" fill={color} />
          <circle cx="37" cy="-150" r="2.8" fill={color} />
        </g>
      ))}

      {/* Intermediate Connecting Dots between crowns */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
        <g key={`mid-dot-${deg}`} transform={`rotate(${deg})`}>
          <circle cx="0" cy="-134" r="4" fill={color} fillOpacity="0.7" />
          <circle cx="0" cy="-145" r="2.5" fill={color} fillOpacity="0.5" />
        </g>
      ))}
    </svg>
  );
};

