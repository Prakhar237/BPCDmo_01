import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Shield, Activity, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white border-t border-white/[0.08] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/[0.08] gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#B11226] text-[11px] font-semibold tracking-[0.18em] text-white font-[family-name:var(--font-display)]">
                BP
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-white">
                  BloodPact
                </span>
                <span className="font-serif text-xl italic text-white/55">Life</span>
              </span>
            </div>
            <p className="text-[#8A8A86] text-base sm:text-lg max-w-md font-normal leading-relaxed">
              Medical technology. Intelligent care. Engineered across physical equipment, digital infrastructure, and clinical signal algorithms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#8A8A86]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#29A56C]" />
              <span>Connect Telemetry Engine Active</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
              <Shield className="w-3.5 h-3.5 text-white/60" />
              <span>ISO 13485 Management Framework</span>
            </div>
          </div>
        </div>

        {/* 6 Clean Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16 text-sm">
          {/* Col 1: Products */}
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-[#8A8A86]">
              <li>
                <Link href="/products/bloodpact-monitor-m5" className="hover:text-white transition-precision flex items-center gap-1">
                  <span>Monitor M5</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#B11226]/20 text-[#B11226] border border-[#B11226]/30">Flagship</span>
                </Link>
              </li>
              <li>
                <Link href="/products/patient-monitoring" className="hover:text-white transition-precision">
                  Patient Monitoring
                </Link>
              </li>
              <li>
                <Link href="/products/apex-ventilator-v9" className="hover:text-white transition-precision">
                  Apex Ventilator V9
                </Link>
              </li>
              <li>
                <Link href="/products/precision-carm-surgical" className="hover:text-white transition-precision">
                  Robotic C-Arm Suite
                </Link>
              </li>
              <li>
                <Link href="/products/diagnostics" className="hover:text-white transition-precision">
                  Diagnostic Ultrasound
                </Link>
              </li>
              <li>
                <Link href="/products/consumables" className="hover:text-white transition-precision">
                  Medical Consumables
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Technology */}
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4">
              Technology
            </h4>
            <ul className="space-y-2.5 text-[#8A8A86]">
              <li>
                <Link href="/ai" className="hover:text-white transition-precision">
                  BloodPact Intelligence
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-white transition-precision">
                  BloodPact Connect
                </Link>
              </li>
              <li>
                <Link href="/ai#demonstration" className="hover:text-white transition-precision">
                  Signal Processing Lab
                </Link>
              </li>
              <li>
                <Link href="/connect#architecture" className="hover:text-white transition-precision">
                  Health Data Architecture
                </Link>
              </li>
              <li>
                <Link href="/connect#gateway" className="hover:text-white transition-precision">
                  Connect Gateway G100
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[#8A8A86]">
              <li>
                <Link href="/hospital-solutions#icu" className="hover:text-white transition-precision">
                  ICU Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/hospital-solutions#ot" className="hover:text-white transition-precision">
                  Operating Theatres
                </Link>
              </li>
              <li>
                <Link href="/hospital-solutions#ed" className="hover:text-white transition-precision">
                  Emergency & Trauma
                </Link>
              </li>
              <li>
                <Link href="/hospital-solutions#workflow" className="hover:text-white transition-precision">
                  Procurement Workflow
                </Link>
              </li>
              <li>
                <Link href="/hospital-solutions" className="hover:text-white transition-precision">
                  Enterprise Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Specialties */}
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-[#8A8A86]">
              <li>
                <Link href="/specialties/cardiology" className="hover:text-white transition-precision">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/specialties/critical-care" className="hover:text-white transition-precision">
                  Critical Care
                </Link>
              </li>
              <li>
                <Link href="/specialties/surgery" className="hover:text-white transition-precision">
                  Surgery & Anesthesia
                </Link>
              </li>
              <li>
                <Link href="/specialties/respiratory-care" className="hover:text-white transition-precision">
                  Respiratory Care
                </Link>
              </li>
              <li>
                <Link href="/specialties/pediatrics" className="hover:text-white transition-precision">
                  Pediatrics & NICU
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Research & Insights */}
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4">
              Research
            </h4>
            <ul className="space-y-2.5 text-[#8A8A86]">
              <li>
                <Link href="/research" className="hover:text-white transition-precision">
                  R&D Initiatives
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-precision">
                  Clinical Insights
                </Link>
              </li>
              <li>
                <Link href="/research#signal-processing" className="hover:text-white transition-precision">
                  Wavelet Signal Studies
                </Link>
              </li>
              <li>
                <Link href="/research#hemodynamics" className="hover:text-white transition-precision">
                  Pulse Arrival Time
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Company & Support */}
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[#8A8A86]">
              <li>
                <Link href="/company" className="hover:text-white transition-precision">
                  Mission & Credo
                </Link>
              </li>
              <li>
                <Link href="/company#engineering" className="hover:text-white transition-precision">
                  Engineering Principles
                </Link>
              </li>
              <li>
                <Link href="/company#regulatory" className="hover:text-white transition-precision">
                  Regulatory Dossiers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-precision">
                  Institutional Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Medical Disclaimer Notice */}
        <div className="py-8 border-t border-b border-white/[0.08] text-xs text-[#8A8A86] leading-relaxed">
          <p className="max-w-5xl">
            <strong className="text-white font-medium">Medical Notice & Regulatory Framework: </strong>
            Information presented on BloodPact Life is intended for product, technology and educational purposes. Specific medical devices and software may be subject to regulatory requirements depending on their intended use and jurisdiction. Healthcare professionals should rely on appropriate clinical judgment and approved product documentation when making clinical decisions. BloodPact Life adheres to ISO 13485 quality management frameworks; clinical deployment occurs strictly under authorized statutory jurisdictions.
          </p>
        </div>

        {/* Bottom Legal & Region Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A8A86] gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} BloodPact Life Inc. All rights reserved.</span>
            <Link href="/company#privacy" className="hover:text-white transition-precision">
              Privacy Policy
            </Link>
            <Link href="/company#terms" className="hover:text-white transition-precision">
              Terms of Supply
            </Link>
            <Link href="/company#regulatory" className="hover:text-white transition-precision">
              Regulatory Information
            </Link>
            <Link href="/company#disclaimer" className="hover:text-white transition-precision">
              Medical Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-2 text-white/70">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Operations / International Clinical Supply</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
