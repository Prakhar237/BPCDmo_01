'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, ShieldCheck, Activity, Layers, AlertCircle } from 'lucide-react';
import { AI_CAPABILITIES } from '@/data/intelligence';
import InteractiveAIDemo from '@/components/home/InteractiveAIDemo';
import ProcurementModal from '@/components/common/ProcurementModal';

export default function IntelligencePage() {
  const [procurementOpen, setProcurementOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#000000] text-white pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Flagship AI Opening: Pure Black, Leica/Apple Precision */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-[#8A8A86]">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span>BLOODPACT INTELLIGENCE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white leading-[1.02]">
            Intelligence should make medicine clearer.
          </h1>

          <p className="text-lg sm:text-2xl text-[#8A8A86] leading-relaxed font-normal max-w-3xl">
            BloodPact Intelligence develops algorithms and software designed to organize complex medical information, identify meaningful patterns and support healthcare workflows.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setProcurementOpen(true)}
              className="px-6 py-3 rounded-xl bg-[#B11226] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A0E1E] transition-precision shadow-sm"
            >
              Request AI Software Trial
            </button>
            <Link
              href="#demonstration"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-precision"
            >
              Interactive Signal Lab ↓
            </Link>
          </div>
        </div>

        {/* Live Signal Demonstration Console */}
        <div id="demonstration" className="mb-24 sm:mb-32">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Real-Time Feature Extraction Console
            </span>
            <span className="text-xs text-white/50">Continuous Wavelet Decomposition</span>
          </div>
          <InteractiveAIDemo />
        </div>

        {/* 7 Individual Capabilities with Detailed Breakdown */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Medically Responsible Core Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Seven Algorithmic Foundations
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
              We reject exaggerated AI claims. BloodPact algorithms are deterministic, verifiable, and designed to support clinician judgment rather than replace medical authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-precision flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#B11226] font-bold">{cap.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29A56C]" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white">{cap.title}</h3>
                  <p className="text-xs font-semibold text-white/70">{cap.tagline}</p>
                  <p className="text-xs text-[#8A8A86] leading-relaxed">{cap.description}</p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#8A8A86] block">
                      Clinical Utility
                    </span>
                    <span className="text-white/80 text-[11px] leading-snug block mt-0.5">
                      {cap.clinicalApplication}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-xs">
                    {cap.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-white/40 block">{m.label}</span>
                        <span className="font-mono text-white text-[11px]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Safety & Regulatory Architecture */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-white/15 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#29A56C]">
            <ShieldCheck className="w-4 h-4" />
            <span>CLINICAL AI GOVERNANCE & ISO COMPLIANCE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Algorithm Verification Without Hype
          </h3>

          <p className="text-xs sm:text-sm text-[#8A8A86] max-w-3xl leading-relaxed">
            BloodPact Life follows rigorous international software lifecycle standards (IEC 62304). Every diagnostic model runs in isolation on local edge hardware with continuous physician-in-the-loop oversight. Model outputs include probabilistic confidence intervals and traceable signal artifact indices.
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#8A8A86] gap-4 font-mono">
            <span>FDA & CE Technical Dossiers Formatted</span>
            <span>Zero Remote Telemetry Leaks</span>
            <span>On-Premises Edge Inference</span>
          </div>
        </div>
      </div>

      <ProcurementModal isOpen={procurementOpen} onClose={() => setProcurementOpen(false)} />
    </main>
  );
}
