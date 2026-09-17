'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Activity, Cpu, Layers, FileText, Stethoscope } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { AI_CAPABILITIES } from '@/data/intelligence';
import { HOSPITAL_SOLUTIONS } from '@/data/hospitalSolutions';
import { SPECIALTIES } from '@/data/specialties';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Filtered lists
  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.category.toLowerCase().includes(normalizedQuery) ||
      p.description.toLowerCase().includes(normalizedQuery)
  ).slice(0, 4);

  const filteredAI = AI_CAPABILITIES.filter(
    (a) =>
      a.title.toLowerCase().includes(normalizedQuery) ||
      a.tagline.toLowerCase().includes(normalizedQuery) ||
      a.description.toLowerCase().includes(normalizedQuery)
  ).slice(0, 3);

  const filteredSolutions = HOSPITAL_SOLUTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(normalizedQuery) ||
      s.description.toLowerCase().includes(normalizedQuery)
  ).slice(0, 2);

  const filteredSpecialties = SPECIALTIES.filter(
    (sp) =>
      sp.name.toLowerCase().includes(normalizedQuery) ||
      sp.summary.toLowerCase().includes(normalizedQuery)
  ).slice(0, 3);

  const totalResults =
    filteredProducts.length +
    filteredAI.length +
    filteredSolutions.length +
    filteredSpecialties.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm transition-precision"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0A0A0A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-5 py-4 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-white/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search medical systems, AI intelligence, hospital solutions, specialties..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-white/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-precision"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {normalizedQuery && totalResults === 0 && (
            <div className="py-12 text-center text-white/50 text-sm">
              No matching clinical systems or documentation found for &ldquo;{query}&rdquo;.
            </div>
          )}

          {/* Products Group */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8A8A86] px-3 mb-2 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#B11226]" />
                <span>Medical Equipment & Systems</span>
              </div>
              <div className="space-y-1">
                {filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.06] transition-precision group"
                  >
                    <div>
                      <div className="font-medium text-sm text-white group-hover:text-[#FFFFFF] flex items-center gap-2">
                        <span>{p.name}</span>
                        {p.isFlagship && (
                          <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-[#B11226]/20 text-[#B11226] border border-[#B11226]/30">
                            Flagship
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#8A8A86] line-clamp-1">{p.headline}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-precision shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* AI Group */}
          {filteredAI.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8A8A86] px-3 mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#29A56C]" />
                <span>BloodPact Intelligence & Algorithms</span>
              </div>
              <div className="space-y-1">
                {filteredAI.map((ai) => (
                  <Link
                    key={ai.id}
                    href="/ai"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.06] transition-precision group"
                  >
                    <div>
                      <div className="font-medium text-sm text-white">{ai.title}</div>
                      <div className="text-xs text-[#8A8A86] line-clamp-1">{ai.tagline}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-precision shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Solutions */}
          {filteredSolutions.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8A8A86] px-3 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-white/60" />
                <span>Hospital Infrastructure Solutions</span>
              </div>
              <div className="space-y-1">
                {filteredSolutions.map((sol) => (
                  <Link
                    key={sol.id}
                    href={`/hospital-solutions#${sol.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.06] transition-precision group"
                  >
                    <div>
                      <div className="font-medium text-sm text-white">{sol.title}</div>
                      <div className="text-xs text-[#8A8A86] line-clamp-1">{sol.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-precision shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Specialties */}
          {filteredSpecialties.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8A8A86] px-3 mb-2 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-white/60" />
                <span>Clinical Specialties</span>
              </div>
              <div className="space-y-1">
                {filteredSpecialties.map((spec) => (
                  <Link
                    key={spec.id}
                    href={`/specialties/${spec.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.06] transition-precision group"
                  >
                    <div>
                      <div className="font-medium text-sm text-white">{spec.name}</div>
                      <div className="text-xs text-[#8A8A86] line-clamp-1">{spec.summary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-precision shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between text-xs text-[#8A8A86] bg-black/40">
          <span>Navigate clinical ecosystem</span>
          <div className="flex items-center gap-2">
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
