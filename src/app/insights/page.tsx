'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Clock } from 'lucide-react';
import { INSIGHTS } from '@/data/insights';

const TYPES = ['All', 'Clinical Report', 'Engineering Note', 'Field Brief', 'Architecture Memo'] as const;

export default function InsightsPage() {
  const [activeType, setActiveType] = useState<(typeof TYPES)[number]>('All');

  const filtered = useMemo(
    () =>
      activeType === 'All' ? INSIGHTS : INSIGHTS.filter((item) => item.type === activeType),
    [activeType]
  );

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#8A8A86]">
              Clinical Reports & Engineering Notes
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04]">
            Insights from the bedside and the lab.
          </h1>

          <p className="text-lg text-[#8A8A86] leading-relaxed">
            Field briefs, clinical reports, and engineering notes from BloodPact teams working across monitoring, ventilation, hospital connectivity, and signal intelligence.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-precision ${
                activeType === type
                  ? 'bg-black text-white'
                  : 'bg-[#F7F7F5] border border-black/[0.06] text-[#8A8A86] hover:text-black'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {filtered.map((insight) => (
            <article
              key={insight.id}
              id={insight.slug}
              className="p-8 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] hover:border-black/20 transition-precision flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-[#B11226] font-semibold uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5" />
                    {insight.type}
                  </span>
                  <span className="text-[#8A8A86]">{insight.date}</span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A] leading-snug">
                  {insight.title}
                </h2>

                <p className="text-sm text-[#8A8A86] leading-relaxed">{insight.summary}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white border border-black/[0.06] text-[11px] text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <div className="space-y-0.5 text-[#8A8A86]">
                  <div className="font-medium text-black/70">{insight.author}</div>
                  <div className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{insight.readTime} read</span>
                  </div>
                </div>
                <Link
                  href="/research"
                  className="font-semibold text-black hover:text-[#B11226] inline-flex items-center gap-1 transition-precision"
                >
                  <span>Related Research</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A86]">
              Institutional Knowledge Exchange
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Looking for validated whitepapers or trial protocols?
            </h3>
            <p className="text-sm text-[#8A8A86] leading-relaxed">
              Explore active R&amp;D programs or contact clinical affairs for dossier-level documentation under NDA.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/research"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E8E8E5] transition-precision"
            >
              View Research
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#B11226] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A0E1E] transition-precision inline-flex items-center gap-2"
            >
              <span>Contact Clinical Affairs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
