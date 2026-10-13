import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_REASONS } from '../data/projectData';

interface WhyChooseSectionProps {
  onOpenEnquiry: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-24 bg-[#0B0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Buyer Confidence & Merit
            </span>
            <span className="w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why Explore Forte Uptown?
          </h2>
          <p className="text-brand-sand text-sm sm:text-base mt-3 font-light leading-relaxed">
            Forte Uptown combines legally sound development with an unparalleled recreational ecosystem, making it a compelling choice for your primary family residence.
          </p>
        </div>

        {/* 6 Differentiators Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_REASONS.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl bg-[#121923] border border-white/5 hover:border-brand-gold/40 hover:bg-[#16202D] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-brand-gold/40 group-hover:text-brand-gold transition-colors">
                  {item.number}
                </span>

                <h3 className="font-serif text-xl font-bold text-white mt-4 mb-3 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-sand/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-brand-muted group-hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-brand-gold mr-2" />
                <span>Verified Fact</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#17202C] via-[#121820] to-[#17202C] border border-brand-borderGold/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-white">
              Experience the Layout in Person
            </h4>
            <p className="text-xs text-brand-sand/80 mt-1 font-light">
              Schedule a personalized site walkthrough with our project advisors in Lakshmipuram, Theni.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3.5 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Book Private Site Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
