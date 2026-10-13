import React, { useState } from 'react';
import { Compass, ArrowRight, Layers } from 'lucide-react';
import { PLOT_CONFIGURATIONS, PROJECT_DETAILS, type PlotConfiguration } from '../data/projectData';

interface MasterPlanSectionProps {
  onSelectPlotType: (plotTitle: string) => void;
}

export const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({ onSelectPlotType }) => {
  const [selectedPlot, setSelectedPlot] = useState<PlotConfiguration>(PLOT_CONFIGURATIONS[1]);

  return (
    <section id="master-plan" className="py-24 bg-[#0E131A] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Master Plan & Configurations
            </span>
            <span className="w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Carefully Sub-Divided Villa Plots
          </h2>
          <p className="text-brand-sand text-sm sm:text-base mt-3 font-light leading-relaxed">
            Choose from an array of plot dimensions designed to accommodate everything from compact tropical townhomes to expansive multi-generational luxury estates.
          </p>
        </div>

        {/* Layout Grid: Configuration Cards + Visual Layout Scheme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Plot Configuration Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Available Plot Types
            </h3>

            {PLOT_CONFIGURATIONS.map((config) => {
              const isSelected = selectedPlot.id === config.id;
              return (
                <div
                  key={config.id}
                  onClick={() => setSelectedPlot(config)}
                  className={`p-5 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#182330] border-brand-gold shadow-gold-glow scale-[1.01]'
                      : 'bg-[#121822] border-white/10 hover:border-brand-gold/40 hover:bg-[#151D28]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-brand-gold font-medium">
                        {config.sizeInCents} Cents &bull; ~{config.approxSqFt.toLocaleString()} Sq.Ft
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white mt-0.5">
                        {config.type}
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        config.status === 'Fast Selling'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : config.status === 'Limited'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {config.status}
                    </span>
                  </div>

                  <p className="text-xs text-brand-sand/80 mt-2 font-light">
                    {config.suitableFor}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-brand-muted">{config.frontage}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPlotType(`${config.type} (${config.sizeInCents} Cents)`);
                      }}
                      className="text-brand-gold hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Plan Visualizer */}
          <div className="lg:col-span-7 bg-[#121822] rounded-2xl border border-brand-borderGold/30 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-gold" />
                  <span className="font-serif text-lg font-semibold text-white">
                    Master Layout Blueprint Overview
                  </span>
                </div>
                <div className="text-[11px] text-brand-muted">
                  TNRERA No: {PROJECT_DETAILS.reraRegistrationNumber}
                </div>
              </div>

              {/* Architectural Vector Schematic Representation */}
              <div className="my-6 relative bg-[#090D12] rounded-xl border border-white/10 p-6 overflow-hidden">
                {/* SVG Master Layout Graphic */}
                <svg
                  viewBox="0 0 600 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-md select-none"
                >
                  {/* Outer Gated Perimeter */}
                  <rect x="20" y="20" width="560" height="280" rx="12" stroke="#C5A46D" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                  
                  {/* Main Central Boulevard (40ft Road) */}
                  <rect x="20" y="140" width="560" height="40" fill="#1C2633" />
                  <line x1="20" y1="160" x2="580" y2="160" stroke="#C5A46D" strokeWidth="1" strokeDasharray="8 6" opacity="0.5" />
                  <text x="300" y="165" fill="#8D9BAE" fontSize="10" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">
                    40 FT MAIN AVENUE
                  </text>

                  {/* Cross Roads (30ft Roads) */}
                  <rect x="180" y="20" width="30" height="280" fill="#17202B" />
                  <rect x="400" y="20" width="30" height="280" fill="#17202B" />

                  {/* Grand Entrance Arch */}
                  <rect x="20" y="130" width="20" height="60" fill="#C5A46D" rx="2" />
                  <text x="30" y="120" fill="#DFC99F" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">
                    GRAND ENTRANCE
                  </text>

                  {/* Forte Sports Town Zone */}
                  <rect x="50" y="35" width="115" height="90" rx="6" fill="#143126" stroke="#25634D" strokeWidth="1.5" />
                  <text x="107" y="70" fill="#5EEAD4" fontSize="11" fontFamily="serif" textAnchor="middle" fontWeight="bold">
                    FORTE SPORTS TOWN
                  </text>
                  <text x="107" y="86" fill="#A7F3D0" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
                    Turf & Sports Hub
                  </text>

                  {/* Central Landscaped Park & Clubhouse */}
                  <rect x="225" y="35" width="160" height="90" rx="6" fill="#182A22" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="305" y="70" fill="#D1FAE5" fontSize="11" fontFamily="serif" textAnchor="middle" fontWeight="bold">
                    CENTRAL BOTANICAL PARK
                  </text>
                  <text x="305" y="86" fill="#6EE7B7" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
                    Clubhouse & Social Pavilion
                  </text>

                  {/* Plot Zones Top Right */}
                  <g>
                    <rect x="445" y="35" width="120" height="40" rx="4" fill="#1F2C3A" stroke="#C5A46D" strokeWidth="1" />
                    <text x="505" y="58" fill="#FFFFFF" fontSize="9" textAnchor="middle">ESTATE PLOTS (7 Cts)</text>

                    <rect x="445" y="85" width="120" height="40" rx="4" fill="#1A2532" stroke="#3A4D62" strokeWidth="1" />
                    <text x="505" y="108" fill="#CBD5E1" fontSize="9" textAnchor="middle">SIGNATURE PLOTS (5 Cts)</text>
                  </g>

                  {/* Plot Zones Bottom */}
                  <g>
                    <rect x="50" y="195" width="115" height="90" rx="4" fill="#1A2532" stroke="#3A4D62" strokeWidth="1" />
                    <text x="107" y="240" fill="#E2E8F0" fontSize="9" textAnchor="middle">CLASSIC PLOTS</text>
                    <text x="107" y="254" fill="#94A3B8" fontSize="8" textAnchor="middle">3.5 Cents</text>

                    <rect x="225" y="195" width="160" height="90" rx="4" fill="#1F2C3A" stroke={selectedPlot.id === 'plot-standard' ? '#C5A46D' : '#3A4D62'} strokeWidth={selectedPlot.id === 'plot-standard' ? '2' : '1'} />
                    <text x="305" y="240" fill="#FFFFFF" fontSize="10" textAnchor="middle" fontWeight="bold">SELECTED SECTOR</text>
                    <text x="305" y="255" fill="#DFC99F" fontSize="9" textAnchor="middle">{selectedPlot.type}</text>

                    <rect x="445" y="195" width="120" height="90" rx="4" fill="#1A2532" stroke="#3A4D62" strokeWidth="1" />
                    <text x="505" y="240" fill="#E2E8F0" fontSize="9" textAnchor="middle">BOUTIQUE PLOTS</text>
                    <text x="505" y="254" fill="#94A3B8" fontSize="8" textAnchor="middle">2.5 Cents</text>
                  </g>
                </svg>

                <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-brand-muted gap-2 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    Sports Town & Parks
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold inline-block" />
                    Selected Villa Zone
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block" />
                    Blacktop Avenues (30ft / 40ft)
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Plot Specifications Details */}
            <div className="p-4 rounded-xl bg-[#17202C] border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    {selectedPlot.type} ({selectedPlot.sizeInCents} Cents)
                  </h4>
                  <p className="text-xs text-brand-sand mt-0.5">
                    Approx. {selectedPlot.approxSqFt.toLocaleString()} Sq.Ft &bull; {selectedPlot.frontage}
                  </p>
                </div>
                <button
                  onClick={() => onSelectPlotType(`${selectedPlot.type} (${selectedPlot.sizeInCents} Cents)`)}
                  className="px-5 py-2.5 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-1.5 flex-shrink-0"
                >
                  <span>Enquire Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
