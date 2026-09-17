'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Network, Server, ShieldCheck, Cpu, CheckCircle2, Lock } from 'lucide-react';
import ProcurementModal from '@/components/common/ProcurementModal';

export default function ConnectPage() {
  const [procurementOpen, setProcurementOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              BloodPact Connect Infrastructure
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Every device. One healthcare layer.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Eliminate isolated hospital data islands. BloodPact Connect provides a unified, deterministic telemetry mesh linking intensive care monitors, surgical C-arms, ventilators, and clinical dashboards.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setProcurementOpen(true)}
              className="px-6 py-3 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision shadow-sm"
            >
              Request Connect Deployment Proposal
            </button>
          </div>
        </div>

        {/* Hardware Gateway Showcase */}
        <div className="rounded-3xl bg-[#000000] text-white p-8 sm:p-14 mb-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-[#8A8A86]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29A56C]" />
                <span>CORE CONNECT HARDWARE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                BloodPact Connect Gateway G100
              </h2>

              <p className="text-sm sm:text-base text-[#8A8A86] leading-relaxed">
                Milled from a solid billet of 6061-T6 aluminum for fanless, sterile operation in cleanrooms and ICUs. Capable of ingesting 2,400 concurrent telemetry packets/sec with zero buffer drop.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono text-white/80">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#8A8A86]">Chassis Material</span>
                  <span>CNC-Milled Anodized Aluminum</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#8A8A86]">Network Uplinks</span>
                  <span>Dual SFP+ 10GbE + Wi-Fi 6E</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#8A8A86]">Medical Isolation</span>
                  <span>4× Galvanic-Isolated RS-232/485</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#8A8A86]">Security Crypt</span>
                  <span>Hardware TPM 2.0 with AES-256</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
              <Image
                src="/images/connect-gateway.jpg"
                alt="BloodPact Connect Gateway G100 Milled Aluminum Enclosure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Architectural Layers */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              End-to-End Topology
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Deterministic Data Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86]">
              How vital signals move seamlessly from bedside transducers to hospital electronic records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Device Ingestion',
                desc: 'Captures continuous raw serial & Ethernet telemetry from monitors, ventilators, and surgical instruments.',
                badge: 'Multi-Vendor',
              },
              {
                step: '02',
                title: 'Connect Gateway G100',
                desc: 'Edge processor timestamps, normalizes, and packages data into standardized HL7 FHIR R4 resources.',
                badge: '< 12ms Latency',
              },
              {
                step: '03',
                title: 'Secure Health Data Layer',
                desc: 'End-to-end encrypted hospital repository compliant with enterprise HIPAA and GDPR data governance.',
                badge: 'AES-256 / TLS 1.3',
              },
              {
                step: '04',
                title: 'Clinical Applications',
                desc: 'Real-time telemetry feeds central nursing consoles, mobile clinician alerts, and EHR charts.',
                badge: 'Zero Drop',
              },
            ].map((layer) => (
              <div
                key={layer.step}
                className="p-6 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B11226] font-bold">{layer.step}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/[0.05] text-black">
                    {layer.badge}
                  </span>
                </div>
                <h4 className="font-bold text-base text-[#0A0A0A]">{layer.title}</h4>
                <p className="text-xs text-[#8A8A86] leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProcurementModal isOpen={procurementOpen} onClose={() => setProcurementOpen(false)} />
    </main>
  );
}
