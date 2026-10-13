import React from 'react';
import { Trophy, Award, ArrowRight } from 'lucide-react';
import { SPORTS_FACILITIES } from '../data/projectData';

interface SportsTownSectionProps {
  onOpenEnquiry: () => void;
}

export const SportsTownSection: React.FC<SportsTownSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="sports-town" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Decorative Turf Emerald Glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Signature Lifestyle Amenity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Forte Sports Town
          </h2>
          <p className="text-brand-sand text-sm sm:text-base mt-4 font-light leading-relaxed">
            Theni’s premier multi-sport hub integrated directly with Forte Uptown. Give your family an active, healthy, and championship-calibre sporting lifestyle steps from your doorstep.
          </p>
        </div>

        {/* Feature Grid of Sports Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPORTS_FACILITIES.map((facility, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-[#131A24] border border-white/10 hover:border-brand-gold/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131A24] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                  {facility.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                  {facility.title}
                </h3>
                <p className="text-xs text-brand-sand/80 mt-2 leading-relaxed font-light flex-1">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community & Tournament Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#141F2B] via-[#101720] to-[#14231E] border border-emerald-500/20 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Award className="w-4 h-4" />
              <span>Community Tournament Host & Training Hub</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Home of Regional Tournaments & Sports Leagues
            </h3>
            <p className="text-xs sm:text-sm text-brand-sand/80 max-w-2xl font-light">
              From hosting landmark regional events like the Forte Uptown Pongal Championship to everyday coaching, Forte Sports Town unites neighbours into an energetic community.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Enquire for Sports Town Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
