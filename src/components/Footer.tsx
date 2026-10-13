import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PROJECT_DETAILS } from '../data/projectData';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B0F] border-t border-white/10 pt-16 pb-24 md:pb-16 text-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" />
            
            <p className="text-xs sm:text-sm text-brand-sand/80 font-light leading-relaxed max-w-sm mt-3">
              Forte Uptown is a signature residential gated community offering approved villa plots, underground civil utilities, and integrated multi-sports amenities in Lakshmipuram, Theni.
            </p>

            {/* RERA Badge */}
            <div className="p-4 rounded-xl bg-[#111720] border border-brand-borderGold/30 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-gold">
                <ShieldCheck className="w-4 h-4" />
                <span>Tamil Nadu RERA Approved</span>
              </div>
              <p className="text-[11px] text-brand-muted">
                Registration No: <strong className="text-white font-mono">{PROJECT_DETAILS.reraRegistrationNumber}</strong>
              </p>
              <p className="text-[11px] text-brand-muted">
                Promoters: {PROJECT_DETAILS.promoters}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-brand-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">Project Overview</a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-brand-gold transition-colors">Amenities & Infrastructure</a>
              </li>
              <li>
                <a href="#sports-town" className="hover:text-brand-gold transition-colors">Forte Sports Town</a>
              </li>
              <li>
                <a href="#master-plan" className="hover:text-brand-gold transition-colors">Master Layout & Plots</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors">Visual Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-gold transition-colors">Location & Connectivity</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">Contact Sales Desk</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Contact & Project Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>
                  {PROJECT_DETAILS.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${PROJECT_DETAILS.primaryPhone.replace(/\s/g, '')}`}
                    className="hover:text-white font-medium"
                  >
                    {PROJECT_DETAILS.primaryPhone}
                  </a>
                  <div className="text-[11px] text-brand-muted">
                    Alt: {PROJECT_DETAILS.secondaryPhones.join(' / ')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href={`mailto:${PROJECT_DETAILS.officialEmail}`}
                  className="hover:text-white font-medium"
                >
                  {PROJECT_DETAILS.officialEmail}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PROJECT_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-brand-sand hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-pink-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{PROJECT_DETAILS.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 text-brand-muted" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-muted/80 gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Forte Uptown, Theni. All rights reserved.
            </p>
            <p className="max-w-3xl leading-relaxed text-[10px]">
              Disclaimer: All architectural renders, visuals, and artistic illustrations are for indicative representation. Specifications and layout dimensions are subject to the provisions of Tamil Nadu RERA Registration No: {PROJECT_DETAILS.reraRegistrationNumber}.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenBrochure}
              className="hover:text-brand-gold transition-colors"
            >
              Project Factsheet
            </button>
            <span className="text-white/20">&bull;</span>
            <button
              onClick={onOpenEnquiry}
              className="hover:text-brand-gold transition-colors"
            >
              Enquire
            </button>
            <span className="text-white/20">&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
