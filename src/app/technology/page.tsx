import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Network, ShieldCheck, Activity } from 'lucide-react';

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              Technology Architecture
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Precision medical engineering meets clinical intelligence.
          </h1>
          <p className="text-lg text-[#8A8A86] leading-relaxed">
            BloodPact Technology is organized into two interlocking pillars: BloodPact Connect (the physical and network layer) and BloodPact Intelligence (the algorithmic and analytics layer).
          </p>
        </div>

        {/* 2 Flagship Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Pillar 1: BloodPact Intelligence */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#000000] text-white flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#B11226]/20 border border-[#B11226]/40 flex items-center justify-center text-[#B11226]">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86] block">
                FLAGSHIP AI SOFTWARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                BloodPact Intelligence
              </h2>
              <p className="text-sm text-[#8A8A86] leading-relaxed">
                Algorithms and software designed to organize complex medical information, identify meaningful physiological patterns, and eliminate alarm fatigue across critical care units.
              </p>
              <ul className="space-y-2 text-xs text-white/80 font-mono pt-2">
                <li>• Continuous Physiological Wavelet Decomposition</li>
                <li>• Real-Time ST Segment Elevation Discrepancy Tracking</li>
                <li>• Automated Intraoperative Feature Segmentation</li>
              </ul>
            </div>

            <Link
              href="/ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-[#B11226] hover:text-white font-semibold text-xs uppercase tracking-wider transition-precision"
            >
              <span>Explore Intelligence Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pillar 2: BloodPact Connect */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F7F5] border border-black/[0.08] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-black/[0.05] flex items-center justify-center text-black">
                <Network className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86] block">
                HOSPITAL IOT TELEMETRY LAYER
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
                BloodPact Connect
              </h2>
              <p className="text-sm text-[#8A8A86] leading-relaxed">
                A deterministic, zero-buffer telemetry network connecting multi-vendor bedside devices into hospital EHRs with HL7 FHIR R4 interoperability and sub-12ms latency.
              </p>
              <ul className="space-y-2 text-xs text-black/75 font-mono pt-2">
                <li>• Milled Aluminum Connect Gateway G100</li>
                <li>• Multi-Vendor IEEE 11073 & DICOM Aggregation</li>
                <li>• TPM 2.0 Hardware Zero-Trust Security</li>
              </ul>
            </div>

            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision"
            >
              <span>Explore Connect Infrastructure</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
