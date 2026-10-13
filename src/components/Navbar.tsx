import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PROJECT_DETAILS } from '../data/projectData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenBrochure }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Sports Town', href: '#sports-town' },
    { label: 'Master Layout', href: '#master-plan' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F14]/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="group">
              <BrandLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-widest font-medium text-brand-sand/90 hover:text-brand-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Phone quick link */}
              <a
                href={`tel:${PROJECT_DETAILS.primaryPhone.replace(/\s/g, '')}`}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-brand-ivory transition-colors"
                title="Call Forte Uptown Sales Desk"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{PROJECT_DETAILS.primaryPhone}</span>
              </a>

              {/* Brochure Button */}
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brand-borderGold/50 text-brand-gold hover:bg-brand-gold/10 text-xs font-medium tracking-wide transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Brochure</span>
              </button>

              {/* Enquire Now CTA */}
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenEnquiry}
                className="px-3.5 py-1.5 rounded-full bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-brand-sand hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <BrandLogo size="md" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-brand-muted hover:text-white rounded-full bg-white/5"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 py-8 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-xl font-medium text-brand-sand hover:text-brand-gold transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-brand-muted pb-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>RERA: {PROJECT_DETAILS.reraRegistrationNumber}</span>
              </div>

              <a
                href={`tel:${PROJECT_DETAILS.primaryPhone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                Call {PROJECT_DETAILS.primaryPhone}
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-sm tracking-wide shadow-gold-glow"
              >
                Enquire About Forte Uptown
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-2.5 rounded-xl border border-brand-borderGold/40 text-brand-gold font-medium text-xs tracking-wide"
              >
                Download Factsheet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
