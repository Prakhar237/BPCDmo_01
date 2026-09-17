import React from 'react';

interface Spec {
  label: string;
  value: string;
}

export default function ProductSpecList({
  specs,
  compact = false,
}: {
  specs: Spec[];
  compact?: boolean;
}) {
  if (compact) {
    return (
      <dl className="space-y-3.5 py-5 border-t border-black/[0.06]">
        {specs.map((sp) => (
          <div key={sp.label} className="space-y-1">
            <dt className="font-[family-name:var(--font-display)] text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8A86]">
              {sp.label}
            </dt>
            <dd className="text-[13px] leading-6 text-[#0A0A0A]">{sp.value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      {specs.map((sp) => (
        <div key={sp.label} className="space-y-2 pb-6 border-b border-black/[0.08]">
          <dt className="font-[family-name:var(--font-display)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8A86]">
            {sp.label}
          </dt>
          <dd className="text-[15px] leading-7 text-[#0A0A0A]">{sp.value}</dd>
        </div>
      ))}
    </dl>
  );
}
