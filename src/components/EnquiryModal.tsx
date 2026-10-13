import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, User, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlotType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultPlotType = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotInterest: defaultPlotType || 'Classic Residential Villa Plot (3.5 Cents)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Persist to lead cache and simulate immediate response
    setTimeout(() => {
      try {
        const storedLeads = JSON.parse(localStorage.getItem('forte_leads') || '[]');
        storedLeads.push({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'Website Enquiry Modal',
        });
        localStorage.setItem('forte_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.error('Lead storage error', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C5A46D', '#DFC99F', '#FAF7F2'],
      });
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Forte Uptown, I am interested in ${formData.plotInterest || 'villa plots in Lakshmipuram, Theni'}. My name is ${formData.name || 'a prospective buyer'}. Please share the project layout and pricing details.`;
    const url = `https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#121820] border border-brand-borderGold/40 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-brand-gold/10 border border-brand-gold rounded-full flex items-center justify-center text-brand-gold">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Enquiry Received</h3>
            <p className="text-brand-sand text-sm leading-relaxed mb-6">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. Our relationship manager from Forte Uptown will contact you at <span className="text-brand-gold">{formData.phone}</span> shortly with plot details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors shadow-lg"
              >
                Chat Instantly on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Direct Developer Enquiries
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Enquire About Forte Uptown
              </h3>
              <p className="text-brand-muted text-xs mt-1">
                RERA Registered: {PROJECT_DETAILS.reraRegistrationNumber} &bull; Lakshmipuram, Theni
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-brand-sand mb-1">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-brand-muted absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-brand-muted/60 focus:outline-none transition-colors"
                  />
                </div>
                {errors.name && (
                  <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-medium text-brand-sand mb-1">
                  Mobile Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs font-semibold text-brand-gold border-r border-white/10 pr-2">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl pl-14 pr-4 py-2.5 text-sm text-white placeholder-brand-muted/60 focus:outline-none transition-colors"
                  />
                </div>
                {errors.phone && (
                  <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-medium text-brand-sand mb-1">
                  Email Address <span className="text-brand-muted font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-brand-muted absolute left-3 top-3.5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-brand-muted/60 focus:outline-none transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Preferred Plot Size */}
              <div>
                <label className="block text-xs font-medium text-brand-sand mb-1">
                  Plot Configuration Interest
                </label>
                <select
                  value={formData.plotInterest}
                  onChange={(e) => setFormData({ ...formData, plotInterest: e.target.value })}
                  className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Boutique Villa Plot (2.5 Cents / ~1,089 Sq.Ft)">
                    Boutique Villa Plot (2.5 Cents / ~1,089 Sq.Ft)
                  </option>
                  <option value="Classic Residential Villa Plot (3.5 Cents / ~1,525 Sq.Ft)">
                    Classic Residential Villa Plot (3.5 Cents / ~1,525 Sq.Ft)
                  </option>
                  <option value="Signature Luxury Villa Plot (5.0 Cents / ~2,178 Sq.Ft)">
                    Signature Luxury Villa Plot (5.0 Cents / ~2,178 Sq.Ft)
                  </option>
                  <option value="Estate Villa Plot (7.0+ Cents / ~3,049+ Sq.Ft)">
                    Estate Villa Plot (7.0+ Cents / ~3,049+ Sq.Ft)
                  </option>
                  <option value="Forte Sports Town Membership / Turf Enquiry">
                    Forte Sports Town Membership / Turf Enquiry
                  </option>
                  <option value="General Project Consultation">
                    General Project Consultation
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-brand-sand mb-1">
                  Message / Site Visit Request <span className="text-brand-muted font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-brand-muted absolute left-3 top-3.5" />
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="When would you like to schedule a site inspection?"
                    className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-brand-muted/60 focus:outline-none resize-none transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-sm tracking-wide shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Registering Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Request Official Callback
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Or reach us instantly on WhatsApp: +91 73737 32640
                </button>
              </div>

              <p className="text-[11px] text-brand-muted/70 text-center leading-normal">
                Your details are strictly kept private and solely used for communicating Forte Uptown project information.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
