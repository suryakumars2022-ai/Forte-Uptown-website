import React from 'react';
import { ShieldCheck, MapPin, Sparkles, Trees, Trophy } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-brand-gold" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
            Project Overview
          </span>
        </div>

        {/* Editorial 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Thoughtfully Planned Residential Enclave at the Heart of Theni.
            </h2>

            <div className="space-y-4 text-brand-sand text-sm sm:text-base leading-relaxed font-light">
              <p>
                Situated at <span className="text-white font-normal">Lakshmipuram (Thamaraikulam)</span> along the scenic Theni-Periyakulam corridor, <strong className="text-brand-gold font-medium">Forte Uptown</strong> brings together the serenity of countryside living with urban civil infrastructure.
              </p>
              <p>
                Promoted with clear legal titles and officially registered under Tamil Nadu RERA (<span className="text-white font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 font-medium">{PROJECT_DETAILS.reraRegistrationNumber}</span>), Forte Uptown provides a secure, future-proof address for families looking to construct bespoke independent villas or build long-term real estate value in the region.
              </p>
              <p>
                What truly sets Forte Uptown apart from typical sub-divided layouts is its dedicated focus on active community living. Integrated right within the project precinct is <strong className="text-white font-medium">Forte Sports Town</strong>—a multi-sports facility equipped with synthetic turf, cricket practice nets, and court games, creating a vibrant sporting lifestyle for children and adults alike.
              </p>
            </div>

            {/* Credibility Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#141B24] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-brand-gold mb-2" />
                <h3 className="text-sm font-semibold text-white">RERA Approved</h3>
                <p className="text-xs text-brand-muted mt-1">
                  Government vetted layout approval with clear documents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141B24] border border-white/5">
                <Trees className="w-5 h-5 text-brand-gold mb-2" />
                <h3 className="text-sm font-semibold text-white">Western Ghats Views</h3>
                <p className="text-xs text-brand-muted mt-1">
                  Picturesque natural backdrop and cleaner micro-climate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141B24] border border-white/5">
                <Trophy className="w-5 h-5 text-brand-gold mb-2" />
                <h3 className="text-sm font-semibold text-white">Active Sports Hub</h3>
                <p className="text-xs text-brand-muted mt-1">
                  Forte Sports Town turf arena integrated within the layout.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all inline-flex items-center gap-2"
              >
                <span>Request Site Inspection</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-brand-borderGold/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary Villa Lifestyle at Forte Uptown"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#101720]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Lakshmipuram &bull; Theni District</span>
                </div>
                <p className="text-xs text-white/90 mt-1">
                  Build your dream home with expansive road frontage, underground utilities, and peaceful mountain air.
                </p>
              </div>
            </div>

            {/* Decorative Offset Frame Element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/20 rounded-2xl -z-10 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
