'use client';

import React, { useState } from 'react';
import { Cpu, Activity, AlertCircle, CheckCircle2, Sliders, RefreshCw } from 'lucide-react';
import { SIGNAL_PRESETS, SignalPreset } from '@/data/intelligence';

export default function InteractiveAIDemo() {
  const [selectedPreset, setSelectedPreset] = useState<SignalPreset>(SIGNAL_PRESETS[0]);
  const [filterArtifacts, setFilterArtifacts] = useState<boolean>(true);
  const [samplingFrequency, setSamplingFrequency] = useState<string>('500 Hz (Diagnostic)');

  return (
    <div className="rounded-2xl bg-[#0A0A0A] border border-white/15 p-6 sm:p-8 text-white space-y-6 shadow-2xl">
      {/* Console Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#B11226]/20 border border-[#B11226]/40 flex items-center justify-center text-[#B11226]">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                BLOODPACT INTELLIGENCE ENGINE v4.2
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#29A56C] animate-pulse" />
            </div>
            <p className="text-[11px] text-[#8A8A86]">Continuous Physiological Wavelet & Feature Decomposition</p>
          </div>
        </div>

        {/* Diagnostic Preset Selector */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#8A8A86] uppercase font-mono">Test Signal:</span>
          <select
            value={selectedPreset.id}
            onChange={(e) => {
              const found = SIGNAL_PRESETS.find((p) => p.id === e.target.value);
              if (found) setSelectedPreset(found);
            }}
            className="bg-black border border-white/15 text-xs text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-white/40 font-mono"
          >
            {SIGNAL_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3-Column Pipeline: Input -> Engine Processing -> Structured Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Col: INPUT (Signal Stream) */}
        <div className="lg:col-span-4 rounded-xl bg-black/80 border border-white/10 p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A86] mb-3 pb-2 border-b border-white/10">
              <span className="text-white font-semibold">INPUT SIGNAL</span>
              <span>{selectedPreset.lead}</span>
            </div>

            {/* Simulated Live Waveform */}
            <div className="h-28 w-full bg-black rounded-lg border border-white/5 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 medical-grid-dense-dark opacity-30 pointer-events-none" />
              <svg className="w-full h-full px-2" viewBox="0 0 300 80" preserveAspectRatio="none">
                {selectedPreset.id === 'normal-sinus' && (
                  <path
                    d="M 0 40 L 40 40 L 50 35 L 55 40 L 65 40 L 70 20 L 75 70 L 85 10 L 95 60 L 100 40 L 115 40 L 130 32 L 145 40 L 180 40 L 190 35 L 195 40 L 205 40 L 210 20 L 215 70 L 225 10 L 235 60 L 240 40 L 255 40 L 270 32 L 285 40 L 300 40"
                    fill="none"
                    stroke="#29A56C"
                    strokeWidth="1.8"
                    className="animate-ecg-sweep"
                  />
                )}
                {selectedPreset.id === 'atrial-fib' && (
                  <path
                    d="M 0 42 Q 10 38 20 42 Q 30 46 40 40 L 50 18 L 56 68 L 64 12 L 70 54 L 74 42 Q 90 38 105 44 L 112 18 L 118 68 L 124 12 L 130 54 L 136 42 Q 150 46 170 38 L 180 18 L 186 68 L 192 12 L 198 54 L 204 42 Q 220 40 250 44 L 258 18 L 264 68 L 270 12 L 276 54 L 282 42 Q 290 40 300 42"
                    fill="none"
                    stroke="#E5A93C"
                    strokeWidth="1.8"
                    className="animate-ecg-sweep"
                  />
                )}
                {selectedPreset.id === 'ischemia-trend' && (
                  <path
                    d="M 0 40 L 40 40 L 50 37 L 55 40 L 65 40 L 70 22 L 75 68 L 85 14 L 95 56 L 100 48 L 125 48 L 135 56 L 145 40 L 180 40 L 190 37 L 195 40 L 205 40 L 210 22 L 215 68 L 225 14 L 235 56 L 240 48 L 265 48 L 275 56 L 285 40 L 300 40"
                    fill="none"
                    stroke="#B11226"
                    strokeWidth="1.8"
                    className="animate-ecg-sweep"
                  />
                )}
                {selectedPreset.id === 'respiratory-desat' && (
                  <path
                    d="M 0 50 Q 30 20 60 50 Q 90 80 120 50 Q 150 10 180 50 Q 210 90 240 50 Q 270 30 300 50"
                    fill="none"
                    stroke="#00D2C4"
                    strokeWidth="1.8"
                    className="animate-ecg-sweep"
                  />
                )}
              </svg>
            </div>
          </div>

          <div className="space-y-2 text-xs font-mono text-[#8A8A86]">
            <div className="flex justify-between">
              <span>Sampling Rate</span>
              <span className="text-white">{samplingFrequency}</span>
            </div>
            <div className="flex justify-between">
              <span>Signal Quality</span>
              <span className="text-[#29A56C]">{selectedPreset.signalQuality}</span>
            </div>
            <div className="flex justify-between">
              <span>Artifact Filter</span>
              <button
                onClick={() => setFilterArtifacts(!filterArtifacts)}
                className={`text-[10px] px-2 py-0.5 rounded ${
                  filterArtifacts ? 'bg-[#29A56C]/20 text-[#29A56C]' : 'bg-white/10 text-white'
                }`}
              >
                {filterArtifacts ? 'ACTIVE (Wavelet Pass)' : 'OFF (Raw)'}
              </button>
            </div>
          </div>
        </div>

        {/* Center Col: PROCESSING (Intelligence Core) */}
        <div className="lg:col-span-4 rounded-xl bg-black/80 border border-white/10 p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A86] mb-3 pb-2 border-b border-white/10">
              <span className="text-white font-semibold">PROCESSING MATRIX</span>
              <span>Feature Extraction</span>
            </div>

            {/* Neural / Signal Decomposition Nodes */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-white/60">QRS R-Peak Locator</span>
                <span className="text-[#29A56C] font-semibold">{selectedPreset.heartRate} bpm locked</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-white/60">Morphology Classifier</span>
                <span className="text-white font-semibold">Continuous Wavelet</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-white/60">Confidence Index</span>
                <span className="text-white font-semibold">{selectedPreset.confidence}%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-white/60">Baseline Wander</span>
                <span className="text-[#29A56C] font-semibold">Filtered (&lt;0.05 Hz)</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#B11226]/10 border border-[#B11226]/20 text-[11px] text-white/80 leading-relaxed font-mono">
            <span className="text-[#B11226] font-bold">CORE EVENT:</span> {selectedPreset.rhythmStatus}
          </div>
        </div>

        {/* Right Col: OUTPUT (Structured Clinical Intelligence) */}
        <div className="lg:col-span-4 rounded-xl bg-black/80 border border-white/10 p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A86] mb-3 pb-2 border-b border-white/10">
              <span className="text-white font-semibold">STRUCTURED CLINICAL OUTPUT</span>
              <span className="text-[#29A56C]">Synthesized</span>
            </div>

            <div className="space-y-2 mb-4">
              <span className="text-[11px] uppercase font-mono text-[#8A8A86] block">Extracted Findings:</span>
              <ul className="space-y-1.5 text-xs text-white/90 font-mono">
                {selectedPreset.findings.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B11226] mt-1.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-white/10">
            <div>
              <span className="text-[10px] uppercase font-mono text-[#8A8A86] block">Clinical Context:</span>
              <p className="text-xs text-white/80 mt-0.5 leading-relaxed">
                {selectedPreset.recommendedAction}
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8A8A86]">
              <span>Latency: 4.8ms</span>
              <span>Audit Hash: #9FA20C</span>
            </div>
          </div>
        </div>
      </div>

      {/* Required Mandatory Disclaimer */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A86] gap-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#B11226] shrink-0" />
          <span className="font-semibold text-white/90">
            Demonstration interface. Not intended for clinical diagnosis.
          </span>
        </div>
        <span>Algorithms operate strictly under physician-directed clinical protocols.</span>
      </div>
    </div>
  );
}
