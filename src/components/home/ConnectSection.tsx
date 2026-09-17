'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Network, Server, Shield, ArrowRight, Check, Monitor, Cpu, Layers } from 'lucide-react';

export default function ConnectSection() {
  const [selectedNode, setSelectedNode] = useState<string>('icu-monitors');

  const nodes = [
    { id: 'icu-monitors', name: 'ICU Monitor M5', protocol: 'HL7 FHIR R4', packets: '500 pkts/s', status: 'Continuous' },
    { id: 'ventilators', name: 'Apex Ventilator V9', protocol: 'IEEE 11073-MDC', packets: '120 pkts/s', status: 'Continuous' },
    { id: 'c-arm', name: 'Aether C-Arm Robotic', protocol: 'DICOM 3.0 / TLS 1.3', packets: '60 fps Video', status: 'Intraoperative' },
    { id: 'ultrasound', name: 'VividScan Ultrasound', protocol: 'DICOM Multi-Frame', packets: 'On-Demand', status: 'Active' },
    { id: 'lab', name: 'Chemistry Analyzer', protocol: 'ASTM / LIS Stream', packets: 'Batch Sync', status: 'Verified' },
    { id: 'mobile', name: 'BP Monitor X1 (Transport)', protocol: 'Cellular 5G / Wi-Fi 6', packets: '250 pkts/s', status: 'Transit' },
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#FFFFFF] text-black border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
              BloodPact Connect
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Every device. One healthcare layer.
          </h2>

          <p className="text-lg sm:text-xl text-[#8A8A86] font-normal leading-relaxed">
            Eliminate fragmented hospital data silos. BloodPact Connect aggregates bedside monitors, ventilators, and surgical instruments into a unified, secure HL7 FHIR telemetry stream.
          </p>
        </div>

        {/* Clean Architectural Topology Diagram */}
        <div className="rounded-2xl bg-[#F7F7F5] border border-black/[0.08] p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex items-center justify-between pb-6 border-b border-black/[0.08] text-xs">
            <div className="flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#29A56C]" />
              <span className="font-semibold text-black">HOSPITAL TOPOLOGY ACTIVE</span>
              <span className="text-black/40">|</span>
              <span className="text-black/60">Deterministic Latency &lt; 12ms</span>
            </div>
            <span className="font-mono text-xs text-[#8A8A86] hidden sm:inline-block">
              ZERO NETWORK BUFFER LOSS
            </span>
          </div>

          {/* 4 Architectural Layers */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center relative">
            {/* Layer 1: Medical Devices */}
            <div className="p-5 rounded-xl bg-white border border-black/[0.08] space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A86] flex items-center justify-between">
                <span>01. Physical Tier</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
              </div>
              <h4 className="font-bold text-sm text-[#0A0A0A]">Bedside Medical Devices</h4>
              <p className="text-xs text-[#8A8A86]">
                Multi-vendor monitors, ventilators, infusion stations, and diagnostic carts.
              </p>
              <div className="space-y-1 pt-2 border-t border-black/[0.06] text-[11px] font-mono text-black/75">
                <div>• ICU Monitor M5</div>
                <div>• Apex Ventilator V9</div>
                <div>• C-Arm Surgical Suite</div>
                <div>• Diagnostic Ultrasound</div>
              </div>
            </div>

            {/* Layer 2: BloodPact Connect Hub */}
            <div className="p-5 rounded-xl bg-black text-white border border-black space-y-3 shadow-md relative">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A86] flex items-center justify-between">
                <span className="text-[#B11226] font-bold">02. Edge Layer</span>
                <span className="w-2 h-2 rounded-full bg-[#29A56C] animate-pulse" />
              </div>
              <h4 className="font-bold text-sm text-white">BloodPact Connect Hub</h4>
              <p className="text-xs text-[#8A8A86]">
                Connect Gateway G100 normalizing serial, analog & IP packets into HL7 FHIR.
              </p>
              <div className="space-y-1 pt-2 border-t border-white/10 text-[11px] font-mono text-white/70">
                <div>• 2,400 pkts/s processing</div>
                <div>• TPM 2.0 Hardware Crypt</div>
                <div>• Sub-12ms determinism</div>
              </div>
            </div>

            {/* Layer 3: Secure Health Data Layer & Intelligence */}
            <div className="p-5 rounded-xl bg-white border border-black/[0.08] space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A86] flex items-center justify-between">
                <span>03. Data & AI Tier</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
              </div>
              <h4 className="font-bold text-sm text-[#0A0A0A]">BloodPact Intelligence</h4>
              <p className="text-xs text-[#8A8A86]">
                Secure health data repository & real-time signal decomposition algorithms.
              </p>
              <div className="space-y-1 pt-2 border-t border-black/[0.06] text-[11px] font-mono text-black/75">
                <div>• Wavelet Feature Engine</div>
                <div>• Alarm Fatigue Filtering</div>
                <div>• Trend Forecasting</div>
              </div>
            </div>

            {/* Layer 4: Clinical Applications */}
            <div className="p-5 rounded-xl bg-white border border-black/[0.08] space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A86] flex items-center justify-between">
                <span>04. Application Tier</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#29A56C]" />
              </div>
              <h4 className="font-bold text-sm text-[#0A0A0A]">Clinical Applications</h4>
              <p className="text-xs text-[#8A8A86]">
                EHR integration, central nursing stations, mobile clinician alerting.
              </p>
              <div className="space-y-1 pt-2 border-t border-black/[0.06] text-[11px] font-mono text-black/75">
                <div>• Central Station Dashboard</div>
                <div>• Hospital EHR Direct Charting</div>
                <div>• Executive Analytics</div>
              </div>
            </div>
          </div>

          {/* Connected Gateway Product Highlight */}
          <div className="pt-8 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden bg-black">
              <Image
                src="/images/connect-gateway.jpg"
                alt="BloodPact Connect Gateway G100 Milled Aluminum Chassis"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8 space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A86]">
                FLAGSHIP INFRASTRUCTURE HARDWARE
              </div>
              <h4 className="text-xl font-bold text-[#0A0A0A] tracking-tight">
                BloodPact Connect Gateway G100
              </h4>
              <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                Milled from a solid billet of 6061-T6 aerospace aluminum for passive convection cooling in sterile hospital environments. Features dual SFP+ 10GbE fiber uplinks, 4 galvanic-isolated medical serial ports, and an onboard TPM 2.0 cryptoprocessor for zero-trust hospital network integration.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/connect"
                  className="text-xs font-semibold text-black hover:text-[#B11226] flex items-center gap-1 transition-precision"
                >
                  <span>View Connect Architecture Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
