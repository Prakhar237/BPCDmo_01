'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Building2, Stethoscope, FileText, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROCUREMENT_WORKFLOW_STEPS } from '@/data/hospitalSolutions';

interface ProcurementModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function ProcurementModal({
  isOpen,
  onClose,
  defaultProduct,
}: ProcurementModalProps) {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [facilityType, setFacilityType] = useState<string>('Tertiary Care Hospital');
  const [bedCapacity, setBedCapacity] = useState<string>('100 - 300 Beds');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([
    'Intensive Care Unit (ICU)',
    'Operating Theatres',
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'Biomedical Director / Procurement Head',
    phone: '',
    specificRequirements: defaultProduct ? `Inquiry regarding ${defaultProduct}` : '',
  });

  if (!isOpen) return null;

  const toggleDept = (dept: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0A0A0A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
                BloodPact Institutional
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
              Request an Institutional Proposal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-precision"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#29A56C]/10 border border-[#29A56C]/30 flex items-center justify-center mx-auto text-[#29A56C]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-white">
              Institutional Request Received
            </h4>
            <p className="text-sm text-[#8A8A86] max-w-md mx-auto leading-relaxed">
              Your facility requirements have been dispatched to the BloodPact Institutional Engineering Team. A biomedical specialist will contact{' '}
              <strong className="text-white">{formData.email || 'your email'}</strong> with system schematics and technical datasheets within 1 business day.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-xs text-left space-y-1.5 text-white/70">
              <div><strong className="text-white">Facility:</strong> {formData.institution || 'Medical Center'} ({facilityType})</div>
              <div><strong className="text-white">Scope:</strong> {selectedDepartments.join(', ')}</div>
              <div><strong className="text-white">Standard:</strong> ISO 13485 Engineering Dossier Included</div>
            </div>
            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-[#B11226] hover:text-white transition-precision"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Step 1: Facility Profile */}
            {step === 1 && (
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#8A8A86] tracking-wider mb-2">
                    01. Institution Classification
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      'Tertiary Care Hospital',
                      'Super-Specialty Center',
                      'Academic Medical Center',
                      'Trauma Center',
                      'Diagnostic Network',
                      'Government / Military',
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFacilityType(type)}
                        className={`p-3 rounded-xl border text-left transition-precision font-medium ${
                          facilityType === type
                            ? 'border-[#B11226] bg-[#B11226]/10 text-white'
                            : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#8A8A86] tracking-wider mb-2">
                    02. Operational Bed Capacity
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {['< 50 Beds', '50 - 150 Beds', '150 - 500 Beds', '500+ Beds'].map((capacity) => (
                      <button
                        type="button"
                        key={capacity}
                        onClick={() => setBedCapacity(capacity)}
                        className={`p-3 rounded-xl border text-center transition-precision font-medium ${
                          bedCapacity === capacity
                            ? 'border-[#B11226] bg-[#B11226]/10 text-white'
                            : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20'
                        }`}
                      >
                        {capacity}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#8A8A86] tracking-wider mb-2">
                    03. Target Clinical Infrastructure
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Intensive Care Unit (ICU)',
                      'Operating Theatres',
                      'Emergency & Trauma Bay',
                      'Diagnostic Ultrasound & Imaging',
                      'BloodPact Connect Hospital IoT',
                      'Central Telemetry Station',
                    ].map((dept) => {
                      const isSelected = selectedDepartments.includes(dept);
                      return (
                        <button
                          type="button"
                          key={dept}
                          onClick={() => toggleDept(dept)}
                          className={`p-3 rounded-xl border text-left transition-precision flex items-center justify-between ${
                            isSelected
                              ? 'border-[#29A56C] bg-[#29A56C]/10 text-white'
                              : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20'
                          }`}
                        >
                          <span>{dept}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#29A56C]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="text-xs text-[#8A8A86]">Step 1 of 2</span>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#B11226] hover:text-white transition-precision flex items-center gap-1.5"
                  >
                    <span>Next: Procurement Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact & Technical Specifications */}
            {step === 2 && (
              <div className="p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#8A8A86] mb-1.5">Official Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Dr. Michael Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#8A8A86] mb-1.5">Institutional Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="m.sterling@stjudehospital.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#8A8A86] mb-1.5">Hospital / Facility Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Metropolitan Medical Center"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#8A8A86] mb-1.5">Clinical Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-sm text-white focus:outline-none focus:border-white/30"
                    >
                      <option>Biomedical Director / Procurement Head</option>
                      <option>Chief Medical Officer (CMO)</option>
                      <option>Head of Anesthesiology / ICU</option>
                      <option>Hospital Administrator / CEO</option>
                      <option>Biomedical Engineering Specialist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#8A8A86] mb-1.5">Specific Scope & Deployment Timeline</label>
                  <textarea
                    rows={3}
                    placeholder="Specify target equipment quantities, required HL7/FHIR integrations, or request clinical trial datasheets..."
                    value={formData.specificRequirements}
                    onChange={(e) => setFormData({ ...formData, specificRequirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-white/30 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#8A8A86]">
                  <ShieldCheck className="w-4 h-4 text-[#29A56C]" />
                  <span>Confidential institutional procurement under standard enterprise NDA.</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-white/60 hover:text-white transition-precision"
                  >
                    ← Back to Facility
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#B11226] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#8A0E1E] transition-precision flex items-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Proposal Request</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
