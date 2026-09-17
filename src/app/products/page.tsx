'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, SlidersHorizontal, ShoppingBag, ShieldCheck, Download } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProcurementModal from '@/components/common/ProcurementModal';
import ProductSpecList from '@/components/common/ProductSpecList';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [procurementModalOpen, setProcurementModalOpen] = useState(false);
  const [activeProductForQuote, setActiveProductForQuote] = useState<string | undefined>();

  const handleOpenQuote = (productName?: string) => {
    setActiveProductForQuote(productName);
    setProcurementModalOpen(true);
  };

  const filtered = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.categorySlug === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-28 sm:pt-36 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              BloodPact Medical Systems
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-[-0.02em] text-[#0A0A0A] leading-[1.12]">
            Medical equipment engineered without compromise.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Explore our complete portfolio of clinical monitors, ventilators, surgical imaging platforms, and hospital infrastructure systems.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-black/[0.06] mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8A8A86] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by product name, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-black/[0.08] text-xs text-black placeholder-[#8A8A86] focus:outline-none focus:border-black/30"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 text-xs">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-precision ${
                  selectedCategory === c.id
                    ? 'bg-black text-white font-semibold'
                    : 'bg-white border border-black/[0.06] text-[#8A8A86] hover:text-black'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group p-7 sm:p-8 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] hover:border-black/20 hover:shadow-lg transition-precision flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A8A86]">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-black/[0.06] text-black">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-white/60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-slow"
                  />
                </div>

                <h2 className="font-serif text-[22px] sm:text-[24px] font-normal tracking-[-0.01em] text-[#0A0A0A] mb-3 leading-snug group-hover:text-[#B11226] transition-precision">
                  {product.name}
                </h2>

                <p className="text-[14px] text-[#5C5C58] leading-7 mb-2 max-w-[36ch]">
                  {product.description}
                </p>

                <ProductSpecList specs={product.specs.slice(0, 3)} compact />
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between gap-3 text-xs">
                {product.price ? (
                  <div>
                    <span className="text-[10px] text-[#8A8A86] block">PRICE</span>
                    <span className="font-bold text-sm text-black">{product.price}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-[10px] text-[#8A8A86] block">DEPLOYMENT</span>
                    <span className="font-mono text-black font-medium text-[11px]">Institutional RFQ</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenQuote(product.name)}
                    className="px-3.5 py-2 rounded-lg bg-black text-white hover:bg-[#B11226] font-semibold text-xs transition-precision"
                  >
                    {product.procurementType === 'ecommerce' ? 'Order Supply' : 'Request Proposal'}
                  </button>

                  <Link
                    href={`/products/${product.slug}`}
                    className="p-2 rounded-lg border border-black/10 hover:bg-black/5 text-black transition-precision"
                    title="View Technical Details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Consultation Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Enterprise Healthcare Procurement
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Equipping a new hospital wing or clinical department?
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
              Our clinical solutions team drafts custom proposals encompassing facility sizing, device interoperability, electrical certifications, and continuous service agreements.
            </p>
          </div>

          <button
            onClick={() => handleOpenQuote()}
            className="px-7 py-3.5 rounded-xl bg-[#B11226] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A0E1E] transition-precision shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Request Institutional Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ProcurementModal
        isOpen={procurementModalOpen}
        onClose={() => setProcurementModalOpen(false)}
        defaultProduct={activeProductForQuote}
      />
    </main>
  );
}
