import React from 'react';

interface MotifProps {
  className?: string;
  size?: number;
  color?: string;
}

export const LotusDecoration: React.FC<MotifProps> = ({
  className = '',
  size = 40,
  color = '#D69B32'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Central Petal */}
      <path
        d="M50 5 C45 25 35 45 50 72 C65 45 55 25 50 5 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="2.5"
      />
      {/* Inner Petals */}
      <path
        d="M50 18 C38 30 25 50 42 70 C48 55 45 35 50 18 Z"
        fill={color}
        fillOpacity="0.35"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M50 18 C62 30 75 50 58 70 C52 55 55 35 50 18 Z"
        fill={color}
        fillOpacity="0.35"
        stroke={color}
        strokeWidth="2"
      />
      {/* Outer Side Petals */}
      <path
        d="M45 32 C25 40 10 58 35 72 C35 60 40 45 45 32 Z"
        fill={color}
        fillOpacity="0.5"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M55 32 C75 40 90 58 65 72 C65 60 60 45 55 32 Z"
        fill={color}
        fillOpacity="0.5"
        stroke={color}
        strokeWidth="2"
      />
      {/* Base Lotus Pad */}
      <path
        d="M25 72 Q50 82 75 72 Q50 75 25 72 Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="50" cy="62" r="3" fill={color} />
    </svg>
  );
};

export const TrishulMotif: React.FC<MotifProps> = ({
  className = '',
  size = 32,
  color = '#D69B32'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Center Prong */}
      <path d="M30 5 L35 25 L32 68 L28 68 L25 25 Z" fill={color} />
      {/* Left Curved Prong */}
      <path
        d="M28 35 C15 32 8 20 12 12 C14 18 20 28 28 30 Z"
        fill={color}
      />
      {/* Right Curved Prong */}
      <path
        d="M32 35 C45 32 52 20 48 12 C46 18 40 28 32 30 Z"
        fill={color}
      />
      {/* Horizontal Bar */}
      <rect x="18" y="42" width="24" height="4" rx="2" fill={color} />
      {/* Handle */}
      <rect x="28" y="45" width="4" height="30" rx="2" fill={color} />
      <circle cx="30" cy="76" r="3" fill={color} />
    </svg>
  );
};

export const DhakMotif: React.FC<MotifProps> = ({
  className = '',
  size = 36,
  color = '#D69B32'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Barrel body */}
      <ellipse cx="40" cy="40" rx="24" ry="16" transform="rotate(-25 40 40)" fill="#7A1018" stroke={color} strokeWidth="2.5" />
      {/* Drum heads */}
      <ellipse cx="22" cy="30" rx="8" ry="14" transform="rotate(-25 22 30)" fill="#FAF3E5" stroke={color} strokeWidth="2" />
      <ellipse cx="58" cy="50" rx="8" ry="14" transform="rotate(-25 58 50)" fill="#B83A24" stroke={color} strokeWidth="2" />
      {/* Tension cords */}
      <line x1="22" y1="20" x2="58" y2="40" stroke={color} strokeWidth="1.5" />
      <line x1="22" y1="40" x2="58" y2="60" stroke={color} strokeWidth="1.5" />
      <line x1="22" y1="30" x2="58" y2="50" stroke={color} strokeWidth="1.5" />
      {/* Feather / Kaash flower decoration */}
      <path d="M58 35 C70 20 75 10 72 8 C68 12 60 25 56 32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M62 38 C75 28 80 18 78 16 C73 20 64 30 60 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const KalashMotif: React.FC<MotifProps> = ({
  className = '',
  size = 36,
  color = '#D69B32'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Coconut on top */}
      <ellipse cx="40" cy="22" rx="10" ry="14" fill="#B83A24" stroke={color} strokeWidth="2" />
      {/* Mango leaves */}
      <path d="M30 30 C20 18 15 15 18 12 C24 15 32 25 34 32" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.5" />
      <path d="M50 30 C60 18 65 15 62 12 C56 15 48 25 46 32" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.5" />
      {/* Pot Rim */}
      <ellipse cx="40" cy="36" rx="14" ry="4" fill={color} />
      {/* Pot Body */}
      <path
        d="M28 38 C18 45 16 65 24 75 C32 82 48 82 56 75 C64 65 62 45 52 38 Z"
        fill="#7A1018"
        stroke={color}
        strokeWidth="2.5"
      />
      {/* Swastik / Sacred symbol mark on pot */}
      <circle cx="40" cy="60" r="5" fill={color} />
      {/* Pot Base */}
      <ellipse cx="40" cy="78" rx="12" ry="3" fill={color} />
    </svg>
  );
};
