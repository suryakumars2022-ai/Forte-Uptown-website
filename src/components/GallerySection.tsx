import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/projectData';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'sports', label: 'Forte Sports Town' },
    { id: 'layout', label: 'Master Layout & Nature' },
    { id: 'villas', label: 'Villa Elevations' },
    { id: 'amenities', label: 'Community Amenities' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0B0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
                Visual Experience
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Visual Property Gallery
            </h2>
            <p className="text-brand-sand text-sm sm:text-base mt-3 max-w-2xl font-light">
              Experience the planned aesthetic of Forte Uptown, from the signature floodlit sports complex to tree-lined avenues and mountain horizon.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-gold text-brand-dark font-bold shadow-gold-glow'
                    : 'bg-[#151D28] text-brand-sand hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            // Find global index in GALLERY_ITEMS for lightbox navigation
            const globalIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#141B24] border border-white/10 hover:border-brand-gold/40 transition-all duration-500 shadow-lg ${
                  item.aspect === 'wide' ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-brand-gold border border-brand-gold/30">
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Zoom Icon on Hover */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                    <Maximize2 className="w-4 h-4 text-brand-gold" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-sand/80 mt-1 line-clamp-2 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-brand-muted/70">
            *Visuals include genuine location attributes, integrated sports arena infrastructure, and conceptual villa design elevations.
          </p>
        </div>
      </div>
    </section>
  );
};
