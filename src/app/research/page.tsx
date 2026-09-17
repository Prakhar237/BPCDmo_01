'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, FlaskConical, Download, ExternalLink } from 'lucide-react';
import { RESEARCH_TOPICS } from '@/data/research';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              BloodPact Research & Development
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-white leading-[1.04]">
            Researching what comes next.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Investigating non-invasive hemodynamics, deterministic signal filtering, and real-time intraoperative inference. All research is conducted under rigorous clinical trial protocols.
          </p>
        </div>

        {/* 12 Core Research Areas Grid */}
        <div className="mb-20">
          <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86] block mb-4">
            Active Research Domains
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs font-mono">
            {[
              'Medical AI Validation',
              'Patient Monitoring',
              'Medical Signal Processing',
              'Healthcare Analytics',
              'Connected Devices',
              'Computer Vision',
              'Remote Healthcare',
              'Preventive Healthcare',
              'Smart Hospitals',
              'Wearable Medical Sensors',
              'Clinical Workflow Automation',
              'Digital Health Infrastructure',
            ].map((domain, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 text-white/80 hover:border-white/30 hover:text-white transition-precision"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Research Papers */}
        <div className="space-y-6 mb-24">
          <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86] block">
            Published Manuscripts & Pre-Prints
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_TOPICS.map((paper) => (
              <div
                key={paper.id}
                id={paper.id}
                className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-precision flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8A8A86]">
                    <span>{paper.category}</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05] text-white">
                      {paper.status} • {paper.publicationYear}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="pt-2 text-xs font-mono text-white/60">
                    Lead: {paper.leadInvestigator}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#8A8A86] block">
                      {paper.metrics.label}
                    </span>
                    <span className="font-mono text-white font-bold text-sm">
                      {paper.metrics.value}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert('Research technical manuscript PDF dispatched to your session.')}
                      className="px-4 py-2 rounded-lg bg-white text-black hover:bg-[#B11226] hover:text-white font-semibold text-xs transition-precision flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
