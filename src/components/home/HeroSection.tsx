'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Activity, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onRequestProposal: () => void;
}

export default function HeroSection({ onRequestProposal }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 bg-[#FFFFFF] text-black overflow-hidden flex flex-col justify-between">
      {/* Subtle precision millimeter grid overlay */}
      <div className="absolute inset-0 medical-grid-light opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 my-auto">
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-[#F7F7F5] text-xs font-medium text-black/80 mb-6 sm:mb-8 animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-[#B11226]" />
          <span className="font-semibold tracking-tight">BloodPact Ecosystem</span>
          <span className="text-black/30">|</span>
          <span className="text-black/60 font-normal">Connected Medical Systems & Clinical AI</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Headline Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[76px] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.08] max-w-xl">
              Technology built around life.
            </h1>

            <p className="text-lg sm:text-[20px] text-[#5C5C58] font-normal leading-8 max-w-lg">
              Medical systems, intelligent healthcare technology and connected infrastructure engineered for modern care.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="px-7 py-3.5 rounded-xl bg-[#000000] text-white font-semibold text-sm hover:bg-[#B11226] transition-precision shadow-sm flex items-center gap-2 group"
              >
                <span>Explore BloodPact</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-precision" />
              </Link>

              <button
                onClick={onRequestProposal}
                className="px-6 py-3.5 rounded-xl bg-[#F7F7F5] hover:bg-[#E8E8E5] text-black font-semibold text-sm transition-precision border border-black/[0.06] flex items-center gap-1.5"
              >
                <span>Request Institutional Proposal</span>
              </button>
            </div>

            {/* Technical Telemetry Badges */}
            <div className="pt-6 border-t border-black/[0.06] grid grid-cols-3 gap-4 max-w-md text-xs">
              <div>
                <div className="text-[11px] text-[#8A8A86] uppercase font-medium">Standard</div>
                <div className="font-semibold text-black mt-0.5">ISO 13485</div>
              </div>
              <div>
                <div className="text-[11px] text-[#8A8A86] uppercase font-medium">Interoperability</div>
                <div className="font-semibold text-black mt-0.5">HL7 FHIR R4</div>
              </div>
              <div>
                <div className="text-[11px] text-[#8A8A86] uppercase font-medium">Telemetry Rate</div>
                <div className="font-semibold text-black mt-0.5">&lt; 12ms Latency</div>
              </div>
            </div>
          </div>

          {/* Right Hero Product Render Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center">
              {/* Product floating container with realistic studio lighting shadow */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.12)] border border-black/[0.06] bg-[#F7F7F5] group">
                <Image
                  src="/images/hero-monitor.jpg"
                  alt="BloodPact Monitor M5 Flagship Patient Monitoring System"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-slow"
                />

                {/* Live Telemetry Floating Indicator Tag */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-white flex items-center gap-3 text-xs shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#29A56C] animate-pulse" />
                    <span className="font-mono text-[11px] font-semibold tracking-wider">LIVE TELEMETRY</span>
                  </div>
                  <span className="text-white/30">|</span>
                  <div className="font-mono text-xs text-white/90">HR 72 BPM</div>
                </div>

                {/* Bottom Model Tag */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/10 text-black text-xs shadow-md">
                  <div className="text-[10px] text-[#8A8A86] font-semibold uppercase tracking-wider">
                    Patient Monitoring
                  </div>
                  <div className="font-bold text-sm text-[#0A0A0A]">BloodPact Monitor M5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom division bar */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full mt-12 pt-8 border-t border-black/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="space-y-1">
            <span className="font-semibold text-black uppercase tracking-wider text-[11px]">01. Medical</span>
            <p className="text-[#8A8A86]">Clinical equipment & precision hardware</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-black uppercase tracking-wider text-[11px]">02. Intelligence</span>
            <p className="text-[#8A8A86]">Signal analytics & clinical AI models</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-black uppercase tracking-wider text-[11px]">03. Connect</span>
            <p className="text-[#8A8A86]">Unified hospital IoT telemetry layer</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-black uppercase tracking-wider text-[11px]">04. Institutional</span>
            <p className="text-[#8A8A86]">Turnkey facility planning & procurement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
