'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, FileSpreadsheet, Headphones } from 'lucide-react';
import { HOSPITAL_SOLUTIONS, PROCUREMENT_WORKFLOW_STEPS } from '@/data/hospitalSolutions';
import ProcurementModal from '@/components/common/ProcurementModal';

export default function HospitalSolutionsPage() {
  const [procurementOpen, setProcurementOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string | undefined>();

  const handleOpenProposal = (solutionTitle?: string) => {
    setSelectedSolution(solutionTitle);
    setProcurementOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              BloodPact Institutional Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Built for entire healthcare systems.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Turnkey biomedical engineering, facility equipment planning, and lifecycle maintenance for intensive care units, modular operating theatres, and regional hospital networks.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleOpenProposal()}
              className="px-7 py-3.5 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision shadow-sm flex items-center gap-2"
            >
              <span>Request Turnkey Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Architectural Hospital Showcase Banner */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-md border border-black/[0.08] bg-white">
          <Image
            src="/images/hospital-architecture.jpg"
            alt="Sterile Hospital Architecture and Integrated ICU Suites"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-8 sm:p-12">
            <div className="text-white max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8A86]">
                INTEGRATED CLINICAL ENVIRONMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Designed for clinical speed, sterility, and acoustic calm.
              </h2>
            </div>
          </div>
        </div>

        {/* Turnkey Solution Packages */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Department Infrastructure Suites
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Turnkey Facility Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86]">
              Engineered bundles ready for clinical commissioning with unified telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HOSPITAL_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="p-8 rounded-2xl bg-[#F7F7F5] border border-black/[0.06] hover:border-black/20 transition-precision flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#B11226] font-bold">{sol.code}</span>
                    <span className="px-2.5 py-0.5 rounded bg-black/[0.05] text-black/75">
                      {sol.leadTime}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#0A0A0A] tracking-tight">{sol.title}</h4>
                  <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">{sol.description}</p>

                  <div className="pt-4 border-t border-black/[0.06] space-y-2">
                    <span className="text-[10px] uppercase font-mono text-[#8A8A86] block">
                      Included Systems
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {sol.includedSystems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-black/80 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B11226]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8A8A86]">{sol.category}</span>
                  <button
                    onClick={() => handleOpenProposal(sol.title)}
                    className="px-5 py-2.5 rounded-xl bg-black text-white hover:bg-[#B11226] text-xs font-semibold uppercase tracking-wider transition-precision"
                  >
                    Request Proposal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Workflow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F5F3] border border-black/[0.06] mb-20">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              End-to-End Commissioning
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Five-Step Institutional Workflow
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86]">
              How we partner with medical boards, biomedical directors, and healthcare leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCUREMENT_WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="space-y-3">
                <div className="font-mono text-2xl font-bold text-[#B11226]">{step.step}</div>
                <h4 className="font-bold text-sm text-[#0A0A0A] leading-snug">{step.title}</h4>
                <p className="text-xs text-[#8A8A86] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProcurementModal
        isOpen={procurementOpen}
        onClose={() => setProcurementOpen(false)}
        defaultProduct={selectedSolution}
      />
    </main>
  );
}
