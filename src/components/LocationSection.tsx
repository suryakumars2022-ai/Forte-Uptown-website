import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';
import { LANDMARK_DISTANCES, PROJECT_DETAILS } from '../data/projectData';

export const LocationSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Transit', 'Civic & Legal', 'Healthcare', 'Education'];

  const filteredLandmarks = activeFilter === 'All'
    ? LANDMARK_DISTANCES
    : LANDMARK_DISTANCES.filter((item) => item.category === activeFilter);

  return (
    <section id="location" className="py-24 bg-[#0E131A] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Strategic Connectivity
            </span>
            <span className="w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Location & Regional Connectivity
          </h2>
          <p className="text-brand-sand text-sm sm:text-base mt-3 font-light leading-relaxed">
            Nestled in peaceful Lakshmipuram along the prime Periyakulam Road corridor, Forte Uptown offers fast connectivity to Theni city while preserving a calm residential setting.
          </p>
        </div>

        {/* 2-Column Grid: Map & Landmark Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Map Embed + Address Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-brand-borderGold/30 shadow-2xl relative bg-[#131A24] h-[380px]">
              <iframe
                title="Forte Uptown Theni Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.1887019864273!2d77.5303254147942!3d10.052605792815152!2m3!1f0!2f0!3f0!3m2!1i1024!2f786!4m3!3e0!4m5!1s0x3b0714b62db4a11b%3A0xb304b4d7fca13f27!2sLakshmipuram%2C%20Tamil%20Nadu!3m2!1d10.0526!2d77.5303!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale-[40%] contrast-[1.1] opacity-90"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Overlay Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#101720]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    Forte Uptown, Lakshmipuram
                  </h4>
                  <p className="text-[11px] text-brand-muted">
                    Periyakulam Road, Theni District &bull; PIN: 625531
                  </p>
                </div>
                <a
                  href={PROJECT_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-brand-gold text-brand-dark text-xs font-bold flex items-center gap-1 hover:bg-brand-goldLight transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Address & Legal Summary Box */}
            <div className="p-6 rounded-2xl bg-[#131A24] border border-white/5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Registered Site Address
              </h4>
              <p className="text-xs text-brand-sand leading-relaxed">
                <strong>{PROJECT_DETAILS.name}</strong>, {PROJECT_DETAILS.fullAddress}
              </p>
              <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-brand-muted gap-2">
                <span>RERA No: <strong className="text-white">{PROJECT_DETAILS.reraRegistrationNumber}</strong></span>
                <span>Promoters: <strong className="text-white">{PROJECT_DETAILS.promoters}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Distance & Landmark Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Nearby Proximity & Commute Times
              </h3>

              {/* Category Filter Pills */}
              <div className="flex gap-1 overflow-x-auto pb-1 max-w-[280px] sm:max-w-none">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveFilter(c)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                      activeFilter === c
                        ? 'bg-brand-gold text-brand-dark'
                        : 'bg-white/5 text-brand-muted hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {filteredLandmarks.map((landmark, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#131A24] border border-white/5 hover:border-brand-gold/30 hover:bg-[#16202C] transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-brand-muted">
                        {landmark.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white">
                        {landmark.name}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-sand/70 font-light">
                      {landmark.description}
                    </p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-bold text-brand-gold font-serif flex items-center justify-end gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{landmark.time}</span>
                    </div>
                    <div className="text-[11px] text-brand-muted">
                      {landmark.distance}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <a
                href={PROJECT_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold hover:text-white transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps for Turn-by-Turn GPS Navigation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
