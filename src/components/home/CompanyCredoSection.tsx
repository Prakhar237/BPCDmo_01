'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart, Award, FileCheck2 } from 'lucide-react';

export default function CompanyCredoSection() {
  return (
    <section className="py-28 sm:py-36 bg-[#FFFFFF] text-black border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
              Company Credo & Engineering Discipline
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Medicine is becoming software, hardware and intelligence at once.
          </h2>

          <p className="text-lg sm:text-xl text-[#8A8A86] font-normal leading-relaxed">
            BloodPact Life exists at that intersection. We bring physical medical equipment, intelligent software algorithms, and connected healthcare infrastructure together into one unified ecosystem designed around the realities of modern care.
          </p>
        </div>

        {/* Mission & Vision Twin Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F7F5] border border-black/[0.06] space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#B11226] font-bold">
              Our Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Make advanced healthcare technology more accessible, connected and intelligent.
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
              We engineer medical hardware and intelligent clinical telemetry with uncompromising reliability, removing technical complexity so clinicians can focus on what matters most: human life.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F7F5] border border-black/[0.06] space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
              Our Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Build an ecosystem where medical equipment, healthcare data and intelligent systems work together seamlessly.
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
              A healthcare landscape without fragmented data islands—where bedside monitors, ventilators, laboratory analyzers, and hospital EHR systems form an unbroken circle of care.
            </p>
          </div>
        </div>

        {/* Trust, Quality & Regulatory Transparency */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F5F5F3] border border-black/[0.06]">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Clinical Trust & Regulatory Framework
            </span>
            <h4 className="text-2xl font-bold tracking-tight text-[#0A0A0A]">
              Quality governance without fabricated claims.
            </h4>
            <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
              We maintain rigorous medical manufacturing standards. Regulatory dossiers and technical documentation are prepared under international statutory frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-white border border-black/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-black font-bold">
                <ShieldCheck className="w-4 h-4 text-[#29A56C]" />
                <span>ISO 13485 QMS Framework</span>
              </div>
              <p className="text-[#8A8A86] leading-relaxed text-[11px]">
                Comprehensive quality management system for design, testing, verification, and risk management of clinical medical devices.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-black/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-black font-bold">
                <Award className="w-4 h-4 text-[#29A56C]" />
                <span>IEC 60601-1 Electrical Safety</span>
              </div>
              <p className="text-[#8A8A86] leading-relaxed text-[11px]">
                Defibrillation-proof patient isolation, rigorous electromagnetic compatibility (EMC), and galvanic isolation across all patient leads.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-black/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-black font-bold">
                <FileCheck2 className="w-4 h-4 text-[#29A56C]" />
                <span>Open Technical Files</span>
              </div>
              <p className="text-[#8A8A86] leading-relaxed text-[11px]">
                Biomedical departments and institutional review committees can request complete technical specifications, software architecture, and risk files.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
