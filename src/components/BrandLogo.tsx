import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px] tracking-[0.25em]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px] tracking-[0.3em]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl md:text-3xl', sub: 'text-[11px] tracking-[0.35em]' },
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Architectural Geometric Crest */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size].icon} transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer Octagon Frame */}
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            stroke={variant === 'dark' ? '#11161D' : '#C5A46D'}
            strokeWidth="3.5"
            strokeLinejoin="round"
            className="transition-colors"
          />
          {/* Inner Accent Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke={variant === 'dark' ? '#8D9BAE' : '#DFC99F'}
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.7"
          />
          {/* Stylized Architectural 'F' and 'U' Monogram */}
          <path
            d="M36 28 H64 M36 28 V72 M36 48 H58"
            stroke={variant === 'dark' ? '#11161D' : '#FFFFFF'}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M56 42 V64 C56 69 60 72 65 72 C70 72 74 69 74 64 V42"
            stroke={variant === 'dark' ? '#A1804B' : '#C5A46D'}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none text-left">
        <span
          className={`font-serif font-bold tracking-[0.14em] uppercase ${sizeClasses[size].text} ${
            variant === 'dark'
              ? 'text-gray-900'
              : 'text-white'
          }`}
        >
          Forte <span className="text-brand-gold font-light">Uptown</span>
        </span>
        <span
          className={`font-sans font-medium uppercase mt-0.5 ${sizeClasses[size].sub} ${
            variant === 'dark' ? 'text-gray-600' : 'text-brand-muted'
          }`}
        >
          Lakshmipuram &bull; Theni
        </span>
      </div>
    </div>
  );
};
