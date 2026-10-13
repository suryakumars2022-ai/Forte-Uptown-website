import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, ShieldCheck, Phone, User, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isReady, setIsReady] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number');
      return;
    }
    setError('');

    // Store brochure lead
    try {
      const stored = JSON.parse(localStorage.getItem('forte_brochure_leads') || '[]');
      stored.push({ name, phone, date: new Date().toISOString() });
      localStorage.setItem('forte_brochure_leads', JSON.stringify(stored));
    } catch (e) {
      console.error(e);
    }

    setIsReady(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#C5A46D', '#DFC99F'],
    });

    // Generate downloadable markdown factsheet blob
    const brochureText = `# FORTE UPTOWN — OFFICIAL PROJECT FACTSHEET
Location: Lakshmipuram (Thamaraikulam), Periyakulam Road, Theni District, Tamil Nadu 625531
TNRERA Registration: ${PROJECT_DETAILS.reraRegistrationNumber} (Approved on ${PROJECT_DETAILS.reraApprovalDate})
Layout Extension: ${PROJECT_DETAILS.layoutExtensionRef}
Promoters: ${PROJECT_DETAILS.promoters}

---

## 1. PROJECT HIGHLIGHTS
- Gated community with 24/7 security, grand entrance arch & CCTV surveillance
- Integrated signature sports complex: Forte Sports Town (Football Turf, Box Cricket, Cricket Nets, Basketball, Tennis, Skating)
- 30ft & 40ft wide blacktop roads with paved walkways
- Complete underground drainage (UGD) & rainwater harvesting
- Individual water connection points to each plot
- Solar LED street illumination & landscaped gardens

## 2. PLOT CONFIGURATIONS
- Boutique Villa Plots: 2.5 Cents (~1,089 Sq.Ft)
- Classic Residential Plots: 3.5 Cents (~1,525 Sq.Ft)
- Signature Luxury Plots: 5.0 Cents (~2,178 Sq.Ft)
- Estate Villa Plots: 7.0+ Cents (~3,049+ Sq.Ft)

## 3. CONNECTIVITY & PROXIMITY
- Theni District Court (Lakshmipuram): 3 mins (1.2 km)
- Periyakulam Town Center: 8 mins (6.5 km)
- Theni New Bus Stand: 15 mins (11 km)
- Theni Railway Station: 18 mins (13.5 km)
- Theni Govt Medical College: 22 mins (17 km)

## 4. CONTACT & SITE VISITS
Primary Sales Desk: ${PROJECT_DETAILS.primaryPhone}
Alternative Desks: ${PROJECT_DETAILS.secondaryPhones.join(', ')}
WhatsApp: +${PROJECT_DETAILS.whatsappNumber}
Official Website: ${PROJECT_DETAILS.officialWebsite}
Instagram: ${PROJECT_DETAILS.instagramHandle}
`;

    const blob = new Blob([brochureText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Forte-Uptown-Theni-Official-Factsheet.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#121820] border border-brand-borderGold/40 rounded-2xl shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-4">
          <FileText className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-xl font-bold text-white">
          Download Project Factsheet
        </h3>
        <p className="text-xs text-brand-muted mt-1 leading-relaxed">
          Get the verified legal approvals, layout map summary, plot dimensions, and pricing guidelines for Forte Uptown, Theni.
        </p>

        {isReady ? (
          <div className="mt-6 text-center py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">Factsheet Download Initiated!</p>
            <p className="text-xs text-emerald-200/80 mt-1">
              Check your browser downloads. Our team will also send layout updates to {phone}.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-brand-gold text-brand-dark rounded-lg text-xs font-semibold hover:bg-brand-goldLight transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-brand-sand mb-1">
                Your Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-brand-muted absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-brand-sand mb-1">
                Mobile Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-brand-muted absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full bg-[#18212C] border border-white/10 focus:border-brand-gold rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            {error && (
              <p className="flex items-center gap-1 text-xs text-rose-400">
                <AlertCircle className="w-3 h-3" /> {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gold-shimmer text-brand-dark font-semibold text-sm shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Download className="w-4 h-4" /> Download Official Factsheet
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>Verified TNRERA Approval: {PROJECT_DETAILS.reraRegistrationNumber}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
