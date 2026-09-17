'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SPECIALTIES } from '@/data/specialties';

export default function SpecialtiesSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#FFFFFF] text-black border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
                Clinical Specialization
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#0A0A0A] leading-[1.06]">
              Engineered across acute clinical disciplines.
            </h2>
            <p className="text-base sm:text-lg text-[#8A8A86] font-normal leading-relaxed">
              Every medical discipline has unique physiological challenges. BloodPact systems adapt through specialized sensor configurations and algorithm profiles.
            </p>
          </div>

          <Link
            href="/specialties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B11226] group transition-precision shrink-0 pb-1"
          >
            <span>Explore All Specialties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-precision" />
          </Link>
        </div>

        {/* 8-Card Specialty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec) => (
            <Link
              key={spec.id}
              href={`/specialties/${spec.slug}`}
              className="group p-6 rounded-2xl bg-[#F5F5F3] hover:bg-black hover:text-white transition-precision flex flex-col justify-between border border-black/[0.04]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A8A86] group-hover:text-white/60">
                    {spec.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30 group-hover:bg-[#B11226] transition-precision" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-white transition-precision">
                  {spec.name}
                </h3>

                <p className="text-xs text-[#8A8A86] group-hover:text-white/70 leading-relaxed">
                  {spec.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.06] group-hover:border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#8A8A86] group-hover:text-white/50 text-[11px]">Primary Systems</span>
                  <span className="font-semibold text-black group-hover:text-white text-[11px]">
                    {spec.keySystems[0]}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-black group-hover:text-white group-hover:translate-x-1 transition-precision pt-1">
                  <span>Clinical View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
