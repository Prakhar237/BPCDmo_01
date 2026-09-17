'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, FlaskConical, ExternalLink } from 'lucide-react';
import { RESEARCH_TOPICS } from '@/data/research';

export default function ResearchSection() {
  const researchDomains = [
    'Medical AI Validation',
    'High-Fidelity Signal Processing',
    'Non-Invasive Hemodynamics',
    'Deterministic Mesh Telemetry',
    'Surgical Computer Vision',
    'Clinical Workflow Automation',
    'Preventive Health Sensors',
    'Zero-Trust Health Data',
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#000000] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
                BloodPact Research & Development
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-white leading-[1.04]">
              Researching what comes next.
            </h2>

            <p className="text-lg sm:text-xl text-[#8A8A86] font-normal leading-relaxed">
              We operate fundamental research programs spanning electrophysiology, non-invasive optics, and real-time inference models designed to advance clinical medicine.
            </p>
          </div>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#B11226] group transition-precision shrink-0 pb-1"
          >
            <span>View All Research Papers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-precision" />
          </Link>
        </div>

        {/* Research Domain Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-16">
          {researchDomains.map((domain, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-[#8A8A86] font-mono hover:border-white/30 hover:text-white transition-precision"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Research Papers Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_TOPICS.map((paper) => (
            <div
              key={paper.id}
              className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-precision flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8A8A86]">
                  <span>{paper.category}</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] text-white/80">
                    {paper.status} • {paper.publicationYear}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-[#8A8A86] leading-relaxed">
                  {paper.abstract}
                </p>
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

                <Link
                  href="/research"
                  className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white text-white hover:text-black transition-precision text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
