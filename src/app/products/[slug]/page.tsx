'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Heart,
  Gauge,
  Wind,
  Thermometer,
  Download,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProcurementModal from '@/components/common/ProcurementModal';
import ProductSpecList from '@/components/common/ProductSpecList';

export default function ProductOrCategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const category = CATEGORIES.find((c) => c.id === slug && c.id !== 'all');
  const product = PRODUCTS.find((p) => p.slug === slug);

  const [activeSignalTab, setActiveSignalTab] = useState<'ecg' | 'spo2' | 'nibp' | 'resp' | 'temp'>('ecg');
  const [procurementOpen, setProcurementOpen] = useState(false);
  const [datasheetDownloaded, setDatasheetDownloaded] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>();

  if (!category && !product) {
    notFound();
  }

  const handleDownloadDatasheet = () => {
    setDatasheetDownloaded(true);
    setTimeout(() => setDatasheetDownloaded(false), 4000);
  };

  const openQuote = (name?: string) => {
    setQuoteProduct(name);
    setProcurementOpen(true);
  };

  if (category) {
    const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.id);

    return (
      <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A86] mb-8">
            <Link href="/products" className="hover:text-black transition-precision">
              Products
            </Link>
            <span>/</span>
            <span className="text-black font-semibold">{category.name}</span>
          </div>

          <div className="max-w-3xl mb-14 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
                Product Category
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
              {category.name}
            </h1>
            <p className="text-lg text-[#8A8A86] leading-relaxed">
              Precision systems engineered for {category.name.toLowerCase()} environments across acute and institutional care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categoryProducts.map((item) => (
              <div
                key={item.id}
                className="group p-7 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] hover:border-black/20 transition-precision flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-white/60">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-slow"
                    />
                  </div>
                  <h2 className="font-serif text-[22px] font-semibold tracking-[-0.02em] text-[#0A0A0A] mb-3 leading-snug group-hover:text-[#B11226] transition-precision">
                    {item.name}
                  </h2>
                  <p className="text-[14px] leading-7 text-[#5C5C58] mb-1 max-w-[34ch]">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
                  <button
                    onClick={() => openQuote(item.name)}
                    className="px-3.5 py-2 rounded-lg bg-black text-white hover:bg-[#B11226] font-semibold text-xs transition-precision"
                  >
                    Request Proposal
                  </button>
                  <Link
                    href={`/products/${item.slug}`}
                    className="p-2 rounded-lg border border-black/10 hover:bg-black/5 text-black transition-precision"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
              <Link
                key={c.id}
                href={`/products/${c.id}`}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-precision ${
                  c.id === category.id
                    ? 'bg-black text-white'
                    : 'bg-[#F7F7F5] border border-black/[0.06] text-[#8A8A86] hover:text-black'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <ProcurementModal
          isOpen={procurementOpen}
          onClose={() => setProcurementOpen(false)}
          defaultProduct={quoteProduct}
        />
      </main>
    );
  }

  // product is guaranteed here after the guard above
  const selected = product!;

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#FFFFFF] border-b border-black/[0.06] overflow-hidden">
        <div className="absolute inset-0 medical-grid-light opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A86] mb-8">
            <Link href="/products" className="hover:text-black transition-precision">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products/${selected.categorySlug}`}
              className="hover:text-black transition-precision"
            >
              {selected.category}
            </Link>
            <span>/</span>
            <span className="text-black font-semibold">{selected.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-[#F7F7F5] text-xs font-medium text-black">
                <span className="w-2 h-2 rounded-full bg-[#B11226]" />
                <span>{selected.badge || 'Precision Clinical System'}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.08]">
                {selected.name}
              </h1>

              <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-[#0A0A0A] font-medium tracking-[-0.02em] leading-snug">
                {selected.headline}
              </p>

              <p className="text-[16px] sm:text-[17px] text-[#5C5C58] leading-8 max-w-md">
                {selected.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openQuote(selected.name)}
                  className="px-7 py-3.5 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision shadow-sm flex items-center gap-2"
                >
                  <span>Request Institutional Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownloadDatasheet}
                  className="px-5 py-3.5 rounded-xl bg-[#F7F7F5] hover:bg-[#E8E8E5] text-black font-semibold text-xs transition-precision border border-black/[0.08] flex items-center gap-2"
                >
                  {datasheetDownloaded ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#29A56C]" />
                      <span>Datasheet Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-black/70" />
                      <span>Download Technical Dossier</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center gap-2 text-xs text-[#8A8A86]">
                <ShieldCheck className="w-4 h-4 text-[#29A56C]" />
                <span>ISO 13485 Quality Standards • Hospital Clinical Evaluation Dossier Ready</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#F7F7F5] border border-black/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  priority
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected.signals && selected.signals.length > 0 && (
        <section className="py-24 sm:py-36 bg-[#000000] text-white border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
                Clinical Interface Engineering
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-white">
                See what matters.
              </h2>
              <p className="text-lg text-[#8A8A86] leading-relaxed">
                Every pixel of the clinical display is dedicated to rapid clinician comprehension during high-pressure physiological changes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: 'ecg', name: 'ECG Lead II & V5', icon: Heart },
                { id: 'spo2', name: 'Continuous SpO₂', icon: Activity },
                { id: 'nibp', name: 'Dual Arterial NIBP', icon: Gauge },
                { id: 'resp', name: 'Impedance Respiration', icon: Wind },
                { id: 'temp', name: 'Core Temperature', icon: Thermometer },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSignalTab(tab.id as typeof activeSignalTab)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-precision flex items-center gap-2 ${
                    activeSignalTab === tab.id
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/[0.06] text-white/70 hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/15 shadow-2xl font-mono">
              {activeSignalTab === 'ecg' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#8A8A86]">
                    <span className="text-[#29A56C] font-bold">ECG II (Diagnostic 0.05-150Hz)</span>
                    <span>Sweep Speed: 25 mm/s | Gain: 10 mm/mV</span>
                  </div>
                  <div className="h-28 w-full relative flex items-center overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
                      <path
                        d="M 0 30 L 60 30 L 70 28 L 75 30 L 85 30 L 90 20 L 95 50 L 105 5 L 115 45 L 120 30 L 135 30 L 150 24 L 165 30 L 220 30 L 230 28 L 235 30 L 245 30 L 250 20 L 255 50 L 265 5 L 275 45 L 280 30 L 295 30 L 310 24 L 325 30 L 380 30 L 390 28 L 395 30 L 405 30 L 410 20 L 415 50 L 425 5 L 435 45 L 440 30 L 455 30 L 470 24 L 485 30 L 600 30"
                        fill="none"
                        stroke="#29A56C"
                        strokeWidth="2"
                        className="animate-ecg-sweep"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/80 pt-2 border-t border-white/10">
                    <span>
                      Heart Rate: <strong>72 BPM</strong>
                    </span>
                    <span className="text-[#29A56C]">Sinus Rhythm Regular</span>
                  </div>
                </div>
              )}

              {activeSignalTab === 'spo2' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#8A8A86]">
                    <span className="text-[#00D2C4] font-bold">SpO₂ Photoplethysmogram</span>
                    <span>Optical Wavelength: 660nm / 940nm</span>
                  </div>
                  <div className="h-28 w-full relative flex items-center overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
                      <path
                        d="M 0 45 Q 25 45 40 20 Q 55 5 70 30 Q 80 45 100 45 Q 125 45 140 20 Q 155 5 170 30 Q 180 45 200 45 Q 225 45 240 20 Q 255 5 270 30 Q 280 45 300 45 Q 325 45 340 20 Q 355 5 370 30 Q 380 45 400 45 Q 425 45 440 20 Q 455 5 470 30 Q 480 45 500 45 Q 525 45 540 20 Q 555 5 570 30 Q 580 45 600 45"
                        fill="none"
                        stroke="#00D2C4"
                        strokeWidth="2"
                        className="animate-ecg-sweep"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/80 pt-2 border-t border-white/10">
                    <span>
                      Oxygen Saturation: <strong>99%</strong>
                    </span>
                    <span className="text-[#29A56C]">Signal Quality High</span>
                  </div>
                </div>
              )}

              {activeSignalTab === 'nibp' && (
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#8A8A86]">SYSTOLIC / DIASTOLIC</span>
                      <div className="text-4xl sm:text-5xl font-bold text-white mt-1">
                        120 / 80 <span className="text-sm font-normal text-[#8A8A86]">mmHg</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#8A8A86]">MEAN ARTERIAL (MAP)</span>
                      <div className="text-2xl font-bold text-[#E5A93C] mt-1">93 mmHg</div>
                    </div>
                  </div>
                </div>
              )}

              {activeSignalTab === 'resp' && (
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-xs text-[#8A8A86]">RESPIRATORY RATE</span>
                    <div className="text-4xl font-bold text-white mt-1">
                      16 <span className="text-sm font-normal text-[#8A8A86]">RPM</span>
                    </div>
                  </div>
                </div>
              )}

              {activeSignalTab === 'temp' && (
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-xs text-[#8A8A86]">CORE TEMP (T1)</span>
                    <div className="text-4xl font-bold text-white mt-1">
                      36.8 <span className="text-sm font-normal text-[#8A8A86]">°C</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8A8A86] font-[family-name:var(--font-display)]">
              Engineering Specifications
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-[#0A0A0A]">
              Technical Specifications
            </h2>
            <p className="text-base leading-7 text-[#5C5C58] max-w-xl">
              Hardware tolerances, signal filters, and connectivity for this system.
            </p>
          </div>

          <ProductSpecList specs={selected.specs} />

          <div className="mt-16 p-6 rounded-2xl bg-white border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-black/70">
              <ShieldCheck className="w-5 h-5 text-[#29A56C] shrink-0" />
              <span>
                Compliance with IEC 60601-1, ISO 13485, and IEC 62304 Medical Device Software Lifecycle.
              </span>
            </div>
            <button
              onClick={() => openQuote(selected.name)}
              className="px-5 py-2 rounded-xl bg-black text-white hover:bg-[#B11226] font-semibold text-xs uppercase tracking-wider transition-precision shrink-0"
            >
              Request Pricing & RFP
            </button>
          </div>
        </div>
      </section>

      <ProcurementModal
        isOpen={procurementOpen}
        onClose={() => setProcurementOpen(false)}
        defaultProduct={quoteProduct || selected.name}
      />
    </main>
  );
}
