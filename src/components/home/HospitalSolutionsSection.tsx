'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, CheckCircle2, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import { HOSPITAL_SOLUTIONS, PROCUREMENT_WORKFLOW_STEPS } from '@/data/hospitalSolutions';

interface HospitalSolutionsSectionProps {
  onRequestProposal: () => void;
}

export default function HospitalSolutionsSection({ onRequestProposal }: HospitalSolutionsSectionProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#F7F7F5] text-black border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
              Institutional Infrastructure
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Built for entire healthcare systems.
          </h2>

          <p className="text-lg sm:text-xl text-[#8A8A86] font-normal leading-relaxed">
            BloodPact Institutional equips tertiary hospitals, surgical centers, and regional health authorities with turnkey department infrastructure, biomedical logistics, and lifecycle technical management.
          </p>
        </div>

        {/* Architectural Hospital Showcase Banner */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-md border border-black/[0.08] bg-white">
          <Image
            src="/images/hospital-architecture.jpg"
            alt="Modern Minimalist Hospital Architecture and Critical Care Suites"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-xl space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8A86]">
                ARCHITECTURAL PLANNING & TURNKEY COMMISSIONING
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Sterile, ergonomic environments engineered around the clinical team.
              </h3>
            </div>
          </div>
        </div>

        {/* Turnkey Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HOSPITAL_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="p-7 rounded-2xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-lg transition-precision flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8A8A86]">{sol.code}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-black/70">
                    {sol.leadTime}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0A0A0A] tracking-tight">{sol.title}</h4>
                  <p className="text-xs text-[#8A8A86] mt-2 leading-relaxed">{sol.description}</p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] space-y-1.5">
                  <span className="text-[10px] uppercase font-mono text-[#8A8A86] block">Included Core Systems</span>
                  {sol.includedSystems.map((sys, idx) => (
                    <div key={idx} className="text-xs text-black/80 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#B11226]" />
                      <span>{sys}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.06]">
                <button
                  onClick={onRequestProposal}
                  className="w-full py-2.5 rounded-xl bg-[#F5F5F3] hover:bg-black hover:text-white text-xs font-semibold text-black transition-precision text-center"
                >
                  Request Facility Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Procurement Experience */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Institutional Procurement Protocol
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
              From facility requirements to clinical commissioning.
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
              We do not treat advanced medical technology like conventional retail. Every institutional contract receives dedicated biomedical engineering oversight.
            </p>
          </div>

          {/* 5 Sequential Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCUREMENT_WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="space-y-3 relative">
                <div className="font-mono text-2xl font-bold text-[#B11226]">{step.step}</div>
                <h4 className="font-bold text-sm text-[#0A0A0A] leading-snug">{step.title}</h4>
                <p className="text-xs text-[#8A8A86] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[#8A8A86]">
              <ShieldCheck className="w-4 h-4 text-[#29A56C]" />
              <span>Full compliance with institutional hospital procurement mandates.</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-transparent hover:bg-black/[0.04] text-black font-semibold text-xs transition-precision"
              >
                Speak with Specialist
              </Link>

              <button
                onClick={onRequestProposal}
                className="px-6 py-2.5 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision flex items-center gap-1.5 shadow-sm"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
