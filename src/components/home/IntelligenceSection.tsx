'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cpu, Activity } from 'lucide-react';
import { AI_CAPABILITIES } from '@/data/intelligence';
import InteractiveAIDemo from './InteractiveAIDemo';

export default function IntelligenceSection() {
  return (
    <section className="py-28 sm:py-36 bg-[#000000] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Flagship Opening: Minimalist, cinematic, tiny red indicator */}
        <div className="max-w-3xl mb-20 sm:mb-28 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              BloodPact Intelligence
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white leading-[1.02]">
            Intelligence should make medicine clearer.
          </h2>

          <p className="text-lg sm:text-2xl text-[#8A8A86] font-normal leading-relaxed">
            BloodPact Intelligence develops algorithms and software designed to organize complex medical information, identify meaningful patterns and support healthcare workflows.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#8A8A86]">
            <span>Deterministic Wavelet Models</span>
            <span>•</span>
            <span>Zero Hallucination Tolerance</span>
            <span>•</span>
            <span>Clinician-in-the-Loop</span>
          </div>
        </div>

        {/* Live Interactive Signal Analysis Console */}
        <div className="mb-24 sm:mb-32">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Interactive Simulation Environment
            </span>
            <span className="text-xs text-white/50">Simulated 12-Lead Acquisition</span>
          </div>
          <InteractiveAIDemo />
        </div>

        {/* 7 Individual Medically Responsible Capabilities */}
        <div>
          <div className="mb-12 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Core Algorithmic Capabilities
              </h3>
              <p className="text-xs text-[#8A8A86] mt-1">
                Seven focused applications built for clinical utility, workflow efficiency, and validated reliability.
              </p>
            </div>
            <Link
              href="/ai"
              className="text-xs font-semibold text-white hover:text-[#B11226] flex items-center gap-1 transition-precision"
            >
              <span>Explore Intelligence Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="group p-7 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-precision flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#B11226] font-semibold">{cap.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#29A56C] transition-precision" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-white transition-precision">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-white/70 font-medium mt-1">
                      {cap.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#8A8A86] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                  <div className="text-[10px] uppercase font-mono text-[#8A8A86]">Clinical Benchmark</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {cap.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="text-white/40 block text-[10px]">{m.label}</span>
                        <span className="font-mono text-white text-[11px] font-medium">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
