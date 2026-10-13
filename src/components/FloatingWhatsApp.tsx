import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const prefilledMessage =
    'Hello Forte Uptown, I would like to know more about your property in Lakshmipuram, Theni. Please share the project layout and pricing details.';

  const whatsappUrl = `https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-[#121822] border border-emerald-500/30 rounded-xl shadow-2xl text-xs text-white animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with Forte Uptown Sales Desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-brand-muted hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Enquire on WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/10" />

        {/* Live Status Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-[#0B0F14] rounded-full" />
      </a>
    </div>
  );
};
