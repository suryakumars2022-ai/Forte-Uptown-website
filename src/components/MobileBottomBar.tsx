import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  const prefilledMessage =
    'Hello Forte Uptown, I would like to know more about your property in Lakshmipuram, Theni. Please share details.';

  const whatsappUrl = `https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#0F151E]/95 backdrop-blur-lg border-t border-white/10 p-3 shadow-2xl flex items-center gap-2">
      {/* Direct Phone Call */}
      <a
        href={`tel:${PROJECT_DETAILS.primaryPhone.replace(/\s/g, '')}`}
        className="flex-1 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-white/5"
      >
        <Phone className="w-4 h-4 text-brand-gold" />
        <span>Call Desk</span>
      </a>

      {/* Direct WhatsApp Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Primary Enquire Button */}
      <button
        onClick={onOpenEnquiry}
        className="flex-1 py-3 px-3 rounded-xl bg-gold-shimmer text-brand-dark text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-gold-glow"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Enquire</span>
      </button>
    </div>
  );
};
