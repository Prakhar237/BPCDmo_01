'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Network, Building2, FlaskConical } from 'lucide-react';

export default function EcosystemSection() {
  const divisions = [
    {
      id: 'medical',
      title: 'BloodPact Medical',
      icon: Activity,
      tagline: 'Precision equipment & clinical systems.',
      description: 'Engineered hardware built for surgical suites, critical care units, and diagnostic laboratories. Designed with tactile restraint, high thermal resilience, and zero failure tolerance.',
      href: '/products',
      stats: '12+ Flagship Systems',
    },
    {
      id: 'intelligence',
      title: 'BloodPact Intelligence',
      icon: Cpu,
      tagline: 'AI algorithms & signal analytics.',
      description: 'Medically responsible algorithmic software analyzing continuous physiological waveforms, structuring complex multi-modal feeds, and mitigating bedside alarm fatigue.',
      href: '/ai',
      stats: '7 Validated Capabilities',
    },
    {
      id: 'connect',
      title: 'BloodPact Connect',
      icon: Network,
      tagline: 'Unified hospital telemetry infrastructure.',
      description: 'Edge gateways and secure software protocols bridging multivendor bedside equipment directly into hospital EHRs with sub-12ms determinism.',
      href: '/connect',
      stats: 'HL7 FHIR R4 Ready',
    },
    {
      id: 'institutional',
      title: 'BloodPact Institutional',
      icon: Building2,
      tagline: 'Hospital procurement & turnkey setups.',
      description: 'End-to-end infrastructure planning for ICU wings, modular operating rooms, and regional health systems. Structured procurement with guaranteed technical SLAs.',
      href: '/hospital-solutions',
      stats: 'Turnkey Commissioning',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] text-black border-t border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
              One Integrated Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#0A0A0A] leading-[1.08]">
            Medicine is becoming software, hardware and intelligence at once.
          </h2>
          <p className="text-base sm:text-lg text-[#8A8A86] font-normal leading-relaxed">
            BloodPact Life operates at this intersection. We unify precision medical engineering, clinical signal algorithms, and connected hospital infrastructure into one cohesive clinical ecosystem.
          </p>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <Link
                key={div.id}
                href={div.href}
                className="group relative p-7 rounded-2xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-precision flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-black/[0.04] group-hover:bg-[#B11226]/10 flex items-center justify-center text-black group-hover:text-[#B11226] transition-precision">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8A8A86]">0{i + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#B11226] transition-precision">
                      {div.title}
                    </h3>
                    <p className="text-xs font-semibold text-black/60 mt-1">
                      {div.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#8A8A86] leading-relaxed">
                    {div.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/[0.05] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#8A8A86] text-[11px]">{div.stats}</span>
                  <div className="flex items-center gap-1 font-semibold text-black group-hover:text-[#B11226] group-hover:translate-x-1 transition-precision">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
