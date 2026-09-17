'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SPECIALTIES } from '@/data/specialties';

export default function SpecialtiesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              Clinical Specialties
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Precision technology across medical disciplines.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Every clinical specialty requires distinct physiological monitoring capabilities, sensor responsiveness, and diagnostic algorithm profiles.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SPECIALTIES.map((spec) => (
            <Link
              key={spec.id}
              href={`/specialties/${spec.slug}`}
              className="p-8 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] hover:border-black/20 hover:shadow-md transition-precision flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8A8A86] uppercase tracking-wider">{spec.category}</span>
                  <span className="w-2 h-2 rounded-full bg-[#B11226]" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#B11226] transition-precision">
                  {spec.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">{spec.summary}</p>

                <div className="pt-4 border-t border-black/[0.06] space-y-2">
                  <span className="text-[10px] uppercase font-mono text-[#8A8A86] block">
                    Core Deployed Hardware
                  </span>
                  <div className="space-y-1 text-xs text-black/80 font-medium">
                    {spec.keySystems.map((sys, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29A56C]" />
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#8A8A86] font-mono line-clamp-1">{spec.clinicalFocus}</span>
                <span className="font-semibold text-black group-hover:text-[#B11226] flex items-center gap-1 transition-precision shrink-0 ml-3">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
