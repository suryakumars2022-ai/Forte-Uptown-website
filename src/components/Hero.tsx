import React from 'react';
import { ArrowRight, Compass, ShieldCheck, MapPin, Trophy, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreProperty: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreProperty }) => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Cinematic Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Forte Uptown Theni Luxury Gated Community"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Layered Luxury Gradients for Depth & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0F14]/40 to-[#0B0F14]/90" />
      </div>

      {/* Decorative Golden Line Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Verified RERA & Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-borderGold/40 backdrop-blur-md mb-6 animate-fadeIn">
          <ShieldCheck className="w-4 h-4 text-brand-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-sand">
            TNRERA Registered: <span className="text-brand-gold">{PROJECT_DETAILS.reraRegistrationNumber}</span>
          </span>
          <span className="text-white/30 hidden sm:inline">&bull;</span>
          <span className="text-xs text-brand-muted hidden sm:inline flex items-center gap-1">
            <MapPin className="w-3 h-3 text-brand-gold" /> Lakshmipuram, Theni
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.12]">
          Discover a <span className="text-gold-gradient italic font-normal">Better Way</span> to Live in Theni.
        </h1>

        {/* Supporting Copy reflecting verified details */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-brand-sand/90 max-w-3xl leading-relaxed font-light">
          A master-planned residential gated community featuring premium villa plots, 24/7 security, and the signature{' '}
          <span className="text-white font-medium border-b border-brand-gold/50">Forte Sports Town</span>, nestled picturesquely at the foothills of the Western Ghats.
        </p>

        {/* Key Feature Highlights Pill Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-brand-sand">
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
            <span>Ready-to-Build Villa Plots</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            <Trophy className="w-3.5 h-3.5 text-brand-gold" />
            <span>Integrated Sports Town</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
            <span>15 Mins to Theni Bus Stand</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            <span>Clear Title & Bank Loans</span>
          </div>
        </div>

        {/* Hero Call-to-Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-sm tracking-wider uppercase shadow-luxury hover:shadow-gold-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Enquire About the Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreProperty}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium text-sm tracking-wide transition-all backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>Explore the Property</span>
          </button>
        </div>

        {/* Metrics Grid Overlay at Bottom of Hero */}
        <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          {PROJECT_DETAILS.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#121822]/85 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 transition-all hover:border-brand-gold/40"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-white mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-brand-muted mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-brand-muted hover:text-brand-gold transition-colors text-[10px] tracking-widest uppercase font-semibold gap-1"
          >
            <span>Scroll Down</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
