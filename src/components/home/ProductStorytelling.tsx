'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, Heart, Wind, Thermometer, Gauge, ArrowRight, Check } from 'lucide-react';

export default function ProductStorytelling() {
  const [activeSignal, setActiveSignal] = useState<'all' | 'ecg' | 'spo2' | 'nibp' | 'resp' | 'temp'>('all');
  const [heartRate, setHeartRate] = useState<number>(72);
  const [spo2, setSpo2] = useState<number>(99);
  const [nibp, setNibp] = useState<string>('120/80');

  // Subtle natural clinical physiological variation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => 71 + Math.floor(Math.sin(Date.now() / 3000) * 3));
      setSpo2((prev) => 98 + Math.floor(Math.random() * 2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const signals = [
    {
      id: 'ecg',
      name: 'ECG Lead II',
      icon: Heart,
      color: '#29A56C', // Clinical green
      unit: 'BPM',
      value: heartRate,
      range: 'Diagnostic 0.05–150 Hz',
      description: 'High-frequency 24-bit acquisition resolving sub-millivolt ST segments and micro-potentials.',
    },
    {
      id: 'spo2',
      name: 'SpO₂ Plethysmogram',
      icon: Activity,
      color: '#00D2C4',
      unit: '%',
      value: spo2,
      range: 'Perfusion Index 4.8%',
      description: 'Low-perfusion tolerance maintaining waveform coherence during severe vasoconstriction.',
    },
    {
      id: 'nibp',
      name: 'Arterial Pressure (NIBP)',
      icon: Gauge,
      color: '#E5A93C',
      unit: 'mmHg',
      value: nibp,
      range: 'MAP 93 mmHg',
      description: 'Step-deflation oscillometry with automated cuff artifact rejection algorithm.',
    },
    {
      id: 'resp',
      name: 'Impedance Respiration',
      icon: Wind,
      color: '#E06D53',
      unit: 'RPM',
      value: 16,
      range: 'Capnography sync',
      description: 'Transthoracic impedance detection with real-time apnea detection threshold.',
    },
    {
      id: 'temp',
      name: 'Core Temperature',
      icon: Thermometer,
      color: '#FFFFFF',
      unit: '°C',
      value: '36.8',
      range: 'Dual Channel T1/T2',
      description: 'Precision thermistor probe integration for continuous thermal balance monitoring.',
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#000000] text-white overflow-hidden border-b border-white/[0.08]">
      {/* Precision dark technical grid */}
      <div className="absolute inset-0 medical-grid-dense-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-[#8A8A86]">
            <span className="w-2 h-2 rounded-full bg-[#B11226]" />
            <span>PATIENT MONITORING ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-white leading-[1.04]">
            Every signal matters.
          </h2>

          <p className="text-lg sm:text-xl text-[#8A8A86] font-normal leading-relaxed">
            BloodPact monitoring systems bring essential patient information into one clear clinical view.
          </p>
        </div>

        {/* Clinical Interface Storytelling Display Simulation */}
        <div className="relative max-w-5xl mx-auto rounded-2xl bg-[#0A0A0A] border border-white/15 p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top Medical Monitor Status Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 text-xs gap-4 font-mono text-[#8A8A86]">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white tracking-wide">BED 04 — ICU ACUITY 1</span>
              <span className="flex items-center gap-1.5 text-[#29A56C]">
                <span className="w-2 h-2 rounded-full bg-[#29A56C] animate-pulse" />
                <span>TELEMETRY SYNCHRONIZED</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span>ADULT PROFILE</span>
              <span>FILTER: DIAGNOSTIC</span>
              <span className="text-white">BATTERY: 98% (AC DUAL)</span>
            </div>
          </div>

          {/* Interactive Signal Selector Tabs */}
          <div className="py-5 flex flex-wrap items-center gap-2 border-b border-white/10">
            <button
              onClick={() => setActiveSignal('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-precision ${
                activeSignal === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.05] text-[#8A8A86] hover:text-white'
              }`}
            >
              All 5 Signals Active
            </button>
            {signals.map((sig) => (
              <button
                key={sig.id}
                onClick={() => setActiveSignal(sig.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-precision flex items-center gap-1.5 ${
                  activeSignal === sig.id
                    ? 'bg-[#B11226] text-white font-semibold'
                    : 'bg-white/[0.05] text-[#8A8A86] hover:text-white'
                }`}
              >
                <span>{sig.name}</span>
              </button>
            ))}
          </div>

          {/* Waveform Canvas & Numeric Display Grid */}
          <div className="py-6 space-y-4 font-mono">
            {/* 1. ECG Signal */}
            {(activeSignal === 'all' || activeSignal === 'ecg') && (
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-precision">
                <div className="md:col-span-3 space-y-0.5">
                  <div className="text-xs font-bold text-[#29A56C] flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5" />
                    <span>ECG II (mV)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {heartRate} <span className="text-xs font-normal text-[#8A8A86]">BPM</span>
                  </div>
                  <div className="text-[10px] text-[#8A8A86]">ST: +0.02 mV | QTc: 412ms</div>
                </div>

                <div className="md:col-span-9 h-16 w-full relative overflow-hidden flex items-center">
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
              </div>
            )}

            {/* 2. SpO2 Signal */}
            {(activeSignal === 'all' || activeSignal === 'spo2') && (
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-precision">
                <div className="md:col-span-3 space-y-0.5">
                  <div className="text-xs font-bold text-[#00D2C4] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>SpO₂ PLETH</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {spo2} <span className="text-xs font-normal text-[#8A8A86]">%</span>
                  </div>
                  <div className="text-[10px] text-[#8A8A86]">PI: 4.8% | Pulse 72</div>
                </div>

                <div className="md:col-span-9 h-16 w-full relative overflow-hidden flex items-center">
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
              </div>
            )}

            {/* 3. NIBP / Arterial Pressure */}
            {(activeSignal === 'all' || activeSignal === 'nibp') && (
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-precision">
                <div className="md:col-span-3 space-y-0.5">
                  <div className="text-xs font-bold text-[#E5A93C] flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>NIBP (Sys/Dia)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {nibp} <span className="text-xs font-normal text-[#8A8A86]">mmHg</span>
                  </div>
                  <div className="text-[10px] text-[#8A8A86]">MAP: 93 mmHg | Auto 15m</div>
                </div>

                <div className="md:col-span-9 flex items-center justify-between text-xs text-[#8A8A86] px-4 py-2 bg-white/[0.02] rounded-lg border border-white/5">
                  <div>
                    <span className="text-white/40 block text-[10px]">PULSE PRESSURE</span>
                    <span className="font-semibold text-white">40 mmHg</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">CALIBRATION</span>
                    <span className="font-semibold text-[#29A56C]">Verified Iso-standard</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">TIME SINCE READ</span>
                    <span className="font-semibold text-white">2 min ago</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">CUFF STATUS</span>
                    <span className="font-semibold text-white">Deflated (Rest)</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4 & 5. Respiration & Temperature Combined Row */}
            {(activeSignal === 'all' || activeSignal === 'resp' || activeSignal === 'temp') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#E06D53] flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5" />
                      <span>RESPIRATION</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                      16 <span className="text-xs font-normal text-[#8A8A86]">RPM</span>
                    </div>
                    <div className="text-[10px] text-[#8A8A86]">Impedance Transthoracic</div>
                  </div>
                  <div className="w-32 h-10">
                    <svg className="w-full h-full" viewBox="0 0 100 30">
                      <path
                        d="M 0 15 Q 15 0 30 15 Q 45 30 60 15 Q 75 0 90 15 L 100 15"
                        fill="none"
                        stroke="#E06D53"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Thermometer className="w-3.5 h-3.5 text-[#B11226]" />
                      <span>TEMPERATURE</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                      36.8 <span className="text-xs font-normal text-[#8A8A86]">°C</span>
                    </div>
                    <div className="text-[10px] text-[#8A8A86]">Core Esophageal Probe T1</div>
                  </div>
                  <div className="text-right text-xs">
                    <span className="text-[10px] text-[#8A8A86] block">PERIPHERAL T2</span>
                    <span className="font-semibold text-white">35.4 °C</span>
                    <span className="text-[10px] text-[#29A56C] block">Delta: 1.4 °C</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Banner */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">
                One display. Five essential signals.
              </h4>
              <p className="text-xs text-[#8A8A86] mt-0.5">
                Engineered for rapid cognition during critical surgical and intensive care interventions.
              </p>
            </div>

            <Link
              href="/products/bloodpact-monitor-m5"
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#B11226] hover:text-white transition-precision flex items-center gap-1.5 shrink-0"
            >
              <span>Explore Monitor M5 Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
