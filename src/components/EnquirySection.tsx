import React, { useState } from 'react';
import { Send, Phone, User, Mail, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Classic Villa Plot (3.5 Cents)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    const clean = formData.phone.replace(/\D/g, '');
    if (!clean || clean.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const list = JSON.parse(localStorage.getItem('forte_leads') || '[]');
        list.push({
          ...formData,
          source: 'Homepage Conversion Form',
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('forte_leads', JSON.stringify(list));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C5A46D', '#DFC99F', '#FFFFFF'],
      });
    }, 600);
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hello Forte Uptown, I would like to know more about ${formData.interest}. My name is ${formData.name || 'a prospective buyer'}. Please share the current plot availability and price details.`;
    const url = `https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0E131A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131A24] rounded-3xl border border-brand-borderGold/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-gold" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
                  Direct Developer Access
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Connect with the Forte Uptown Team
              </h2>

              <p className="text-brand-sand text-sm font-light leading-relaxed">
                Whether you want to inspect specific villa plots, review the master layout, or explore the Forte Sports Town facilities, our dedicated team is here to assist you.
              </p>

              {/* Direct Phone Assistance */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#17202C] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-brand-muted uppercase tracking-wider font-semibold">
                      Primary Sales Desk
                    </div>
                    <a
                      href={`tel:${PROJECT_DETAILS.primaryPhone.replace(/\s/g, '')}`}
                      className="font-serif text-lg font-bold text-white hover:text-brand-gold transition-colors"
                    >
                      {PROJECT_DETAILS.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#17202C] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-brand-muted uppercase tracking-wider font-semibold">
                      Alternative Helplines
                    </div>
                    <div className="text-sm font-medium text-white">
                      {PROJECT_DETAILS.secondaryPhones.join(' / ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-brand-muted">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>RERA Registered Project: {PROJECT_DETAILS.reraRegistrationNumber}</span>
              </div>
            </div>

            {/* Right Column: High-Conversion Form */}
            <div className="lg:col-span-7 bg-[#17202D] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Thank You for Your Enquiry
                  </h3>
                  <p className="text-brand-sand text-sm leading-relaxed max-w-md mx-auto mb-6 font-light">
                    Your request has been logged. An official Forte Uptown project consultant will reach out to <strong className="text-white">{formData.phone}</strong> promptly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppEnquiry}
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase transition-colors"
                    >
                      Connect on WhatsApp Now
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs tracking-wider uppercase transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="font-serif text-xl font-bold text-white">
                      Request Project Consultation
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">
                      Receive complete layout blueprints, plot pricing guide, and booking procedure.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-sand mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-brand-muted absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full bg-[#121822] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-sand mb-1">
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
                          placeholder="10-digit number"
                          className="w-full bg-[#121822] border border-white/10 focus:border-brand-gold rounded-xl pl-14 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-sand mb-1">
                        Email Address <span className="text-brand-muted font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-brand-muted absolute left-3 top-3.5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-[#121822] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Plot Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-sand mb-1">
                      Plot Size / Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#121822] border border-white/10 focus:border-brand-gold rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Boutique Villa Plot (2.5 Cents)">Boutique Villa Plot (2.5 Cents / ~1,089 Sq.Ft)</option>
                      <option value="Classic Residential Plot (3.5 Cents)">Classic Residential Plot (3.5 Cents / ~1,525 Sq.Ft)</option>
                      <option value="Signature Luxury Plot (5.0 Cents)">Signature Luxury Plot (5.0 Cents / ~2,178 Sq.Ft)</option>
                      <option value="Estate Villa Plot (7.0+ Cents)">Estate Villa Plot (7.0+ Cents / ~3,049+ Sq.Ft)</option>
                      <option value="Forte Sports Town Turf & Facilities">Forte Sports Town Turf & Facilities</option>
                      <option value="General Layout Enquiry">General Layout Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-sand mb-1">
                      Message / Preferred Site Visit Time <span className="text-brand-muted font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-brand-muted absolute left-3 top-3.5" />
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us when you'd like to visit the site..."
                        className="w-full bg-[#121822] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none resize-none transition-colors"
                      ></textarea>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Request Official Callback
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppEnquiry}
                      className="px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                      title="Enquire directly on WhatsApp"
                    >
                      <Phone className="w-4 h-4" /> WhatsApp
                    </button>
                  </div>

                  <p className="text-[11px] text-brand-muted/70 text-center pt-2">
                    By submitting, you agree to receive official project information from Forte Uptown. Your data remains strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
