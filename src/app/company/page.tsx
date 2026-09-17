'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart, Award, FileCheck2, Users, CheckCircle2 } from 'lucide-react';

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              About BloodPact Life
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.02]">
            Medicine is becoming software, hardware and intelligence at once.
          </h1>

          <p className="text-xl sm:text-2xl text-[#8A8A86] leading-relaxed font-normal">
            BloodPact Life exists at that intersection. We bring physical medical equipment, intelligent algorithms, and connected healthcare infrastructure together into one ecosystem designed around the realities of modern care.
          </p>
        </div>

        {/* Mission & Vision Twin Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F7F5] border border-black/[0.06] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B11226] font-bold">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Make advanced healthcare technology more accessible, connected and intelligent.
            </h2>
            <p className="text-sm text-[#8A8A86] leading-relaxed">
              We engineer medical hardware and intelligent clinical telemetry with uncompromising reliability, removing technical complexity so clinicians can focus on what matters most: human life.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F7F5] border border-black/[0.06] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Build an ecosystem where medical equipment, healthcare data and intelligent systems work together seamlessly.
            </h2>
            <p className="text-sm text-[#8A8A86] leading-relaxed">
              A hospital where clinical systems anticipate physiologic changes, communicate without latency, and empower clinical teams with clear, structured intelligence.
            </p>
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Core Disciplines
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Our Engineering Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86]">
              Four non-negotiable principles that guide every hardware prototype, circuit board layout, and algorithmic model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Restraint Over Spectacle',
                desc: 'In critical care, visual noise kills focus. We prioritize high-contrast legibility and purposeful animations over flashy gradients.',
              },
              {
                title: 'Deterministic Reliability',
                desc: 'No black-box hallucinations. All algorithms are mathematically grounded in continuous wavelets and physiological bounds.',
              },
              {
                title: 'Tactile Precision',
                desc: 'Physical dials with haptic feedback, unibody CNC aluminum enclosures, and medical connectors that lock with absolute confidence.',
              },
              {
                title: 'Open Interoperability',
                desc: 'No proprietary lock-in. HL7 FHIR, IEEE 11073, and open telemetry protocols are built natively into our firmware.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F5F5F3] border border-black/[0.04] space-y-3">
                <span className="font-mono text-xs text-[#B11226] font-bold">0{i + 1}</span>
                <h4 className="font-bold text-base text-[#0A0A0A]">{item.title}</h4>
                <p className="text-xs text-[#8A8A86] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Governance Section */}
        <div id="regulatory" className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] text-white space-y-6 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#29A56C]">
            <ShieldCheck className="w-4 h-4" />
            <span>REGULATORY QUALITY MANAGEMENT & STATUTORY TRANSPARENCY</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Clinical Quality Architecture
          </h3>

          <p className="text-xs sm:text-sm text-[#8A8A86] max-w-3xl leading-relaxed">
            BloodPact Life operates an ISO 13485-compliant Quality Management System. We adhere strictly to statutory medical device directives (EU MDR, IEC 60601, IEC 62304) without fabricating premature regulatory clearances. Clinical files and technical dossiers are open to institutional review committees upon verification of medical credentials.
          </p>

          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-[#8A8A86]">
            <div>
              <strong className="text-white block font-sans">IEC 60601-1</strong>
              <span>Medical Electrical Safety & Isolation</span>
            </div>
            <div>
              <strong className="text-white block font-sans">IEC 62304</strong>
              <span>Medical Device Software Lifecycle</span>
            </div>
            <div>
              <strong className="text-white block font-sans">ISO 14971</strong>
              <span>Risk Management for Medical Devices</span>
            </div>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer Notice */}
        <div id="disclaimer" className="p-6 rounded-2xl bg-[#F7F7F5] border border-black/[0.08] text-xs text-[#8A8A86] leading-relaxed">
          <h4 className="font-semibold text-black mb-1">Official Medical Disclaimer</h4>
          <p>
            Information presented on BloodPact Life is intended for product, technology and educational purposes. Specific medical devices and software may be subject to regulatory requirements depending on their intended use and jurisdiction. Healthcare professionals should rely on appropriate clinical judgment and approved product documentation when making clinical decisions.
          </p>
        </div>
      </div>
    </main>
  );
}
