'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, ShoppingBag } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductSpecList from '@/components/common/ProductSpecList';

interface MedicalCatalogSectionProps {
  onRequestProposal: (productName?: string) => void;
}

export default function MedicalCatalogSection({ onRequestProposal }: MedicalCatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <section className="py-24 sm:py-36 bg-[#FFFFFF] text-black border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B11226]" />
              <span className="text-xs uppercase font-semibold tracking-wider text-[#8A8A86]">
                Clinical Hardware Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#0A0A0A] leading-[1.06]">
              Medical technology across the continuum of care.
            </h2>
            <p className="text-base sm:text-lg text-[#8A8A86] font-normal leading-relaxed">
              Every system is engineered to uncompromising clinical tolerances. From high-acuity resuscitation bays to long-term telemetry networks.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B11226] group transition-precision shrink-0 pb-1"
          >
            <span>View Complete Medical Catalog ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-precision" />
          </Link>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-precision ${
                selectedCategory === cat.id
                  ? 'bg-black text-white font-semibold'
                  : 'bg-[#F5F5F3] text-[#8A8A86] hover:text-black hover:bg-[#E8E8E5]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Editorial Product Grid with Visual Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isLarge = product.gridSpan === 'large';
            const isHorizontal = product.gridSpan === 'horizontal';

            return (
              <div
                key={product.id}
                className={`group rounded-2xl bg-[#F5F5F3] p-7 sm:p-8 flex flex-col justify-between border border-black/[0.04] hover:border-black/15 transition-precision ${
                  isHorizontal ? 'md:col-span-2 lg:col-span-2' : isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A8A86]">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-black/[0.05] text-black/75">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Visual Container */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-white/60">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-slow"
                    />
                  </div>

                  {/* Product Title & Copy */}
                  <h3 className="font-serif text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#0A0A0A] mb-3 leading-snug group-hover:text-[#B11226] transition-precision">
                    {product.name}
                  </h3>

                  <p className="text-[14px] leading-7 text-[#5C5C58] mb-2 max-w-[34ch]">
                    {product.description}
                  </p>

                  <ProductSpecList specs={product.specs.slice(0, 2)} compact />
                </div>

                {/* Bottom Action Row */}
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
                    {product.procurementType === 'ecommerce' ? (
                      <button
                        onClick={() => onRequestProposal(product.name)}
                        className="px-3.5 py-2 rounded-lg bg-black text-white hover:bg-[#B11226] font-medium transition-precision flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order Supply</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onRequestProposal(product.name)}
                        className="px-3.5 py-2 rounded-lg bg-black text-white hover:bg-[#B11226] font-medium transition-precision"
                      >
                        Request Proposal
                      </button>
                    )}

                    <Link
                      href={`/products/${product.slug}`}
                      className="p-2 rounded-lg border border-black/10 hover:bg-black/5 text-black transition-precision"
                      title="Technical Datasheet"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
