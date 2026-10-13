import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface PlotCalculatorSectionProps {
  onOpenEnquiry: (details: string) => void;
}

export const PlotCalculatorSection: React.FC<PlotCalculatorSectionProps> = ({ onOpenEnquiry }) => {
  const [cents, setCents] = useState<number>(3.5);
  const [builtUpCoverage, setBuiltUpCoverage] = useState<number>(1500);
  const [constructionQuality, setConstructionQuality] = useState<'Standard' | 'Premium' | 'Luxury'>('Premium');

  const sqFt = Math.round(cents * 435.6);

  const constructionRatePerSqFt = {
    Standard: 2100,
    Premium: 2600,
    Luxury: 3200,
  }[constructionQuality];

  const estimatedConstructionCost = Math.round(builtUpCoverage * constructionRatePerSqFt);

  return (
    <section className="py-20 bg-[#0B0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#131A24] via-[#101720] to-[#141B25] rounded-3xl border border-brand-borderGold/30 p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Estimator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Estimator</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Plot & Villa Planning Calculator
                </h3>
                <p className="text-brand-sand text-xs sm:text-sm font-light mt-1">
                  Plan your ideal homesite at Forte Uptown. Adjust plot area and planned built-up space to budget your construction accurately.
                </p>
              </div>

              {/* Slider 1: Plot Size in Cents */}
              <div className="bg-[#17202C] p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-sand font-medium">Desired Plot Area:</span>
                  <span className="text-brand-gold font-bold font-serif text-base">
                    {cents} Cents (~{sqFt.toLocaleString()} Sq.Ft)
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="0.5"
                  value={cents}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setCents(val);
                    setBuiltUpCoverage(Math.round(val * 435.6 * 0.85));
                  }}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[11px] text-brand-muted">
                  <span>2.0 Cts (871 sq.ft)</span>
                  <span>3.5 Cts</span>
                  <span>5.0 Cts</span>
                  <span>8.0 Cts (3,485 sq.ft)</span>
                </div>
              </div>

              {/* Slider 2: Planned Built-Up Area */}
              <div className="bg-[#17202C] p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-brand-sand font-medium">Planned Villa Built-up Area:</span>
                  <span className="text-brand-gold font-bold font-serif text-base">
                    {builtUpCoverage.toLocaleString()} Sq.Ft
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="4000"
                  step="100"
                  value={builtUpCoverage}
                  onChange={(e) => setBuiltUpCoverage(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[11px] text-brand-muted">
                  <span>800 Sq.Ft (2BHK)</span>
                  <span>1,800 Sq.Ft (3BHK Duplex)</span>
                  <span>4,000 Sq.Ft (Grand Villa)</span>
                </div>
              </div>

              {/* Construction Quality Selector */}
              <div>
                <label className="block text-xs font-semibold text-brand-sand uppercase tracking-wider mb-2">
                  Specification Standard:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Standard', 'Premium', 'Luxury'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setConstructionQuality(lvl)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                        constructionQuality === lvl
                          ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold'
                          : 'bg-[#17202C] text-brand-sand border-white/10 hover:border-brand-gold/40'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Summary Card */}
            <div className="lg:col-span-5 bg-[#17202D] border border-brand-borderGold/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Budget Projection Summary
                </span>

                <div className="mt-4 pb-4 border-b border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Plot Dimension:</span>
                    <span className="text-white font-medium">{cents} Cents ({sqFt} Sq.Ft)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Villa Built-up Space:</span>
                    <span className="text-white font-medium">{builtUpCoverage.toLocaleString()} Sq.Ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Est. Finish Rate:</span>
                    <span className="text-white font-medium">₹{constructionRatePerSqFt.toLocaleString()}/sq.ft ({constructionQuality})</span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-brand-muted">
                    Est. Villa Construction Cost:
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center mt-1">
                    <span>₹{(estimatedConstructionCost / 100000).toFixed(2)} Lakhs</span>
                  </div>
                  <p className="text-[11px] text-brand-sand/70 mt-1">
                    *Excluding plot price and customized interiors. Contact developer desk for exact plot rates.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() =>
                    onOpenEnquiry(
                      `Plot Inquiry: ${cents} Cents (~${sqFt} Sq.Ft) with ${builtUpCoverage} Sq.Ft Villa Design`
                    )
                  }
                  className="w-full py-3.5 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Official Plot Pricing Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Transparent pricing &bull; Bank loan assistance available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
