'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Phone, Building2 } from 'lucide-react';

interface InstitutionalCTASectionProps {
  onRequestProposal: () => void;
}

export default function InstitutionalCTASection({ onRequestProposal }: InstitutionalCTASectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl bg-[#000000] border border-white/15 p-8 sm:p-16 overflow-hidden">
          {/* Background subtle millimeter grid */}
          <div className="absolute inset-0 medical-grid-dense-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-[#8A8A86]">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span>INSTITUTIONAL PROCUREMENT DIRECTORY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-white leading-[1.04]">
              Equip your facility with precision medical technology.
            </h2>

            <p className="text-base sm:text-lg text-[#8A8A86] leading-relaxed max-w-2xl font-normal">
              Connect directly with our biomedical engineering specialists to plan turnkey department setups, explore clinical trial evidence, or obtain an institutional procurement proposal.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onRequestProposal}
                className="px-7 py-3.5 rounded-xl bg-[#B11226] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A0E1E] transition-precision shadow-md flex items-center gap-2"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-precision border border-white/10 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Speak with BloodPact</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#8A8A86] font-mono">
              <div>
                <span className="text-white block font-sans font-semibold">Response SLA</span>
                <span>Within 24 business hours</span>
              </div>
              <div>
                <span className="text-white block font-sans font-semibold">Technical Dossiers</span>
                <span>ISO 13485 / IEC 60601-1</span>
              </div>
              <div>
                <span className="text-white block font-sans font-semibold">Turnkey Deployment</span>
                <span>Global Biomedical Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
