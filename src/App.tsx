import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HighlightsSection } from './components/HighlightsSection';
import { SportsTownSection } from './components/SportsTownSection';
import { MasterPlanSection } from './components/MasterPlanSection';
import { PlotCalculatorSection } from './components/PlotCalculatorSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { EnquiryModal } from './components/EnquiryModal';
import { BrochureModal } from './components/BrochureModal';
import { LightboxModal } from './components/LightboxModal';
import { GALLERY_ITEMS } from './data/projectData';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [defaultPlotInterest, setDefaultPlotInterest] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenEnquiry = (plotType?: string) => {
    setDefaultPlotInterest(plotType || '');
    setIsEnquiryOpen(true);
  };

  const handleExploreProperty = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#FAF7F2] font-sans selection:bg-[#C5A46D] selection:text-[#0B0F14]">
      {/* Fixed Luxury Navigation */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onExploreProperty={handleExploreProperty}
        />

        {/* Project Introduction */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Highlights & Infrastructure */}
        <HighlightsSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Forte Sports Town Signature Feature */}
        <SportsTownSection onOpenEnquiry={() => handleOpenEnquiry('Forte Sports Town Inquiry')} />

        {/* Master Layout Plan & Plot Selector */}
        <MasterPlanSection onSelectPlotType={(plot) => handleOpenEnquiry(plot)} />

        {/* Interactive Plot & Villa Calculator */}
        <PlotCalculatorSection onOpenEnquiry={(details) => handleOpenEnquiry(details)} />

        {/* Visual Property Gallery */}
        <GallerySection onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* Location & Connectivity */}
        <LocationSection />

        {/* Why Explore Forte Uptown */}
        <WhyChooseSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* High-Conversion Enquiry Section */}
        <EnquirySection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileBottomBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultPlotType={defaultPlotInterest}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};

export default App;
