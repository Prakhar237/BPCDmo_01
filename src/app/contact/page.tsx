'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import ProcurementModal from '@/components/common/ProcurementModal';

export default function ContactPage() {
  const [procurementOpen, setProcurementOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    type: 'Institutional Procurement / RFP',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              Contact & Procurement
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Connect with BloodPact Life.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Direct communication channels for hospital procurement teams, chief medical officers, clinical researchers, and healthcare engineering partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F7F5] border border-black/[0.06]">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#29A56C]/10 border border-[#29A56C]/30 flex items-center justify-center mx-auto text-[#29A56C]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0A0A0A]">
                    Inquiry Dispatched
                  </h3>
                  <p className="text-sm text-[#8A8A86] max-w-md mx-auto leading-relaxed">
                    Thank you. Your message has been routed to our clinical biomedical team. A specialist will reply to <strong className="text-black">{formData.email}</strong> within 1 business day.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-black text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-[#0A0A0A] tracking-tight">
                    Clinical Inquiry & Procurement Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8A8A86] mb-1.5">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Dr. Katherine Hayes"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black focus:outline-none focus:border-black/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#8A8A86] mb-1.5">Institutional Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="k.hayes@cardiac-institute.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black focus:outline-none focus:border-black/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8A8A86] mb-1.5">Hospital / Facility Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="St. Augustine Medical Center"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black focus:outline-none focus:border-black/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#8A8A86] mb-1.5">Inquiry Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black focus:outline-none focus:border-black/30"
                      >
                        <option>Institutional Procurement / RFP</option>
                        <option>Biomedical Equipment Evaluation</option>
                        <option>BloodPact Connect HL7 FHIR Integration</option>
                        <option>Clinical AI Research Partnership</option>
                        <option>Maintenance & Technical Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#8A8A86] mb-1.5">Clinical Requirements & Timeline</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify department equipment numbers, clinical integration goals, or desired demonstration timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black focus:outline-none focus:border-black/30 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#8A8A86]">
                      <ShieldCheck className="w-4 h-4 text-[#29A56C]" />
                      <span>Enterprise healthcare confidentiality guaranteed.</span>
                    </div>

                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Proposal Card */}
            <div className="p-8 rounded-3xl bg-[#000000] text-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B11226] font-bold">
                Fast-Track RFP
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Need a formal facility proposal?
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                Use our interactive 5-step proposal wizard to specify facility bed counts, departments, and interoperability mandates in under 2 minutes.
              </p>
              <button
                onClick={() => setProcurementOpen(true)}
                className="w-full py-3 rounded-xl bg-[#B11226] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A0E1E] transition-precision flex items-center justify-center gap-2"
              >
                <span>Launch Proposal Wizard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#F5F5F3] border border-black/[0.06] space-y-4 text-xs">
              <h4 className="font-bold text-sm text-[#0A0A0A]">Global Headquarters & Engineering</h4>
              <div className="space-y-2 text-[#8A8A86]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>BloodPact Life Medical Engineering Center<br />Technologiepark 14, 8001 Zurich, Switzerland</span>
                </div>
                <div className="flex items-center gap-2.5 pt-2">
                  <Mail className="w-4 h-4 text-black shrink-0" />
                  <span className="text-black font-mono">institutional@bloodpact.life</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-black shrink-0" />
                  <span className="text-black font-mono">+41 44 214 8800 (Biomedical Desk)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProcurementModal isOpen={procurementOpen} onClose={() => setProcurementOpen(false)} />
    </main>
  );
}
