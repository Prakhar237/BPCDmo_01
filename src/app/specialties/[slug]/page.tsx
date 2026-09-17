'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { SPECIALTIES } from '@/data/specialties';
import { PRODUCTS } from '@/data/products';
import ProcurementModal from '@/components/common/ProcurementModal';

export default function SpecialtyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const specialty = SPECIALTIES.find((s) => s.slug === slug);
  const [procurementOpen, setProcurementOpen] = useState(false);

  if (!specialty) {
    notFound();
  }

  const activeSpecialty = specialty as (typeof SPECIALTIES)[number];

  const relatedProducts = PRODUCTS.filter((product) =>
    activeSpecialty.keySystems.some(
      (system) =>
        product.name.toLowerCase().includes(system.toLowerCase().split('(')[0].trim().toLowerCase()) ||
        system.toLowerCase().includes(product.name.toLowerCase())
    )
  ).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="pt-28 sm:pt-36 pb-20 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A86] mb-8">
            <Link href="/specialties" className="hover:text-black transition-precision">
              Specialties
            </Link>
            <span>/</span>
            <span className="text-black font-semibold">{activeSpecialty.name}</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
                {activeSpecialty.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
              {activeSpecialty.name}
            </h1>

            <p className="text-xl text-[#0A0A0A] font-medium tracking-tight">{activeSpecialty.summary}</p>

            <p className="text-base text-[#8A8A86] leading-relaxed">{activeSpecialty.clinicalFocus}</p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setProcurementOpen(true)}
                className="px-6 py-3 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision inline-flex items-center gap-2"
              >
                <span>Request Specialty Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/products"
                className="px-6 py-3 rounded-xl bg-[#F7F7F5] border border-black/[0.08] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E8E8E5] transition-precision"
              >
                Browse Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#F7F7F5] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">Clinical impact metrics</h2>
            <p className="text-sm text-[#8A8A86] mt-2">
              Representative performance indicators for {activeSpecialty.name.toLowerCase()} deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSpecialty.impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-8 rounded-2xl bg-white border border-black/[0.06] space-y-2"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
                  {metric.label}
                </span>
                <div className="text-3xl font-bold tracking-tight text-[#0A0A0A]">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">Core deployed systems</h2>
              <p className="text-sm text-[#8A8A86] mt-2">
                Hardware and software typically specified for this clinical pathway.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-[#8A8A86]">
              <ShieldCheck className="w-4 h-4 text-[#29A56C]" />
              <span>ISO 13485-aligned configuration guidance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {activeSpecialty.keySystems.map((system) => (
              <div
                key={system}
                className="p-6 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] space-y-3"
              >
                <Activity className="w-5 h-5 text-[#B11226]" />
                <h3 className="text-lg font-bold tracking-tight text-[#0A0A0A]">{system}</h3>
                <p className="text-xs text-[#8A8A86] leading-relaxed">
                  Configured for {activeSpecialty.name.toLowerCase()} workflows with BloodPact Connect interoperability.
                </p>
              </div>
            ))}
          </div>

          {relatedProducts.length > 0 && (
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A] mb-6">
                Matching catalog equipment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="p-5 rounded-xl border border-black/[0.08] hover:border-black/25 transition-precision flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8A86]">
                        {product.category}
                      </div>
                      <div className="font-semibold text-black group-hover:text-[#B11226] transition-precision">
                        {product.name}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-[#B11226] group-hover:translate-x-0.5 transition-precision" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Institutional Procurement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Build a {activeSpecialty.name.toLowerCase()} equipment proposal.
            </h2>
            <p className="text-sm text-[#8A8A86] leading-relaxed">
              Clinical solutions will map facility profile, device interoperability, and continuous support for your {activeSpecialty.name.toLowerCase()} program.
            </p>
          </div>
          <button
            onClick={() => setProcurementOpen(true)}
            className="px-7 py-3.5 rounded-xl bg-[#B11226] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A0E1E] transition-precision inline-flex items-center gap-2 shrink-0"
          >
            <span>Start RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ProcurementModal
        isOpen={procurementOpen}
        onClose={() => setProcurementOpen(false)}
        defaultProduct={`${activeSpecialty.name} specialty package`}
      />
    </main>
  );
}
