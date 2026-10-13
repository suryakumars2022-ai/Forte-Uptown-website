import React from 'react';
import {
  Trophy,
  ShieldCheck,
  Building2,
  Compass,
  Droplets,
  Trees,
  Smile,
  SunMedium,
  Check,
  ArrowRight
} from 'lucide-react';
import { AMENITIES, PROJECT_DETAILS } from '../data/projectData';

interface HighlightsSectionProps {
  onOpenEnquiry: () => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ onOpenEnquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-brand-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-brand-gold" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-brand-gold" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-brand-gold" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-brand-gold" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-brand-gold" />;
      case 'SunMedium':
        return <SunMedium className="w-6 h-6 text-brand-gold" />;
      default:
        return <Building2 className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section id="highlights" className="py-24 bg-[#0E131A] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
                Engineered Infrastructure
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Project Highlights & Amenities
            </h2>
            <p className="text-brand-sand text-sm sm:text-base mt-3 max-w-2xl font-light">
              Every detail at Forte Uptown has been crafted to deliver clean layouts, safe open spaces, and modern utilities that stand the test of time.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-gold hover:text-white border-b border-brand-gold pb-1 transition-colors"
            >
              <span>Download Amenities Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className={`p-6 rounded-2xl transition-all duration-300 relative flex flex-col ${
                amenity.highlight
                  ? 'bg-gradient-to-b from-[#182330] to-[#131B26] border border-brand-borderGold/50 shadow-luxury'
                  : 'bg-[#131A24] border border-white/5 hover:border-brand-gold/30 hover:bg-[#17202B]'
              }`}
            >
              {amenity.highlight && (
                <span className="absolute -top-2.5 right-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-gold text-brand-dark">
                  Signature
                </span>
              )}

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {getIcon(amenity.icon)}
              </div>

              <span className="text-[11px] font-semibold text-brand-muted uppercase tracking-wider mb-1">
                {amenity.category}
              </span>

              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                {amenity.title}
              </h3>

              <p className="text-xs text-brand-sand/80 leading-relaxed font-light mt-auto">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specification Summary Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#141B25] border border-brand-borderGold/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">RERA Approved Plan</h4>
              <p className="text-xs text-brand-muted mt-0.5">
                Registration No. {PROJECT_DETAILS.reraRegistrationNumber} with clear legal titles and immediate registration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Broad Road Networks</h4>
              <p className="text-xs text-brand-muted mt-0.5">
                Engineered with 30-foot & 40-foot wide asphalt blacktop roads designed for easy 2-way vehicular movement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Immediate Ready to Construct</h4>
              <p className="text-xs text-brand-muted mt-0.5">
                Water pipelines, drainage channels, and roadworks in place for hassle-free villa construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
