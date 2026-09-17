export interface Specialty {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  keySystems: string[];
  clinicalFocus: string;
  impactMetrics: { label: string; value: string }[];
}

export const SPECIALTIES: Specialty[] = [
  {
    id: 'cardiology',
    slug: 'cardiology',
    name: 'Cardiology',
    category: 'Cardiovascular Medicine',
    summary: 'Precision electrophysiology, continuous multi-vector ST segment analysis, and automated echocardiographic strain mapping.',
    keySystems: ['BloodPact Monitor M5', 'VividScan Ultrasound Cart U8', 'Signal Analysis Algorithm Suite'],
    clinicalFocus: 'Real-time telemetry monitoring for coronary care units, interventional cath labs, and cardiac step-down wings.',
    impactMetrics: [
      { label: 'ST Trend Sensitivity', value: '0.01 mV micro-voltage' },
      { label: 'Arrhythmia Detection', value: '24 validated morphological classes' },
    ],
  },
  {
    id: 'critical-care',
    slug: 'critical-care',
    name: 'Critical Care',
    category: 'Intensive Medicine',
    summary: 'Integrated hemodynamic stabilization, adaptive mechanical ventilation, and multi-parameter central nursing intelligence.',
    keySystems: ['Apex Ventilator V9', 'BloodPact Monitor M5', 'Connect Gateway G100'],
    clinicalFocus: 'Synchronized lung-protective ventilation and invasive arterial pressure monitoring in adult, pediatric, and neonatal ICUs.',
    impactMetrics: [
      { label: 'Weaning Optimization', value: 'Automated RSBI tracking' },
      { label: 'Data Ingestion', value: '100% continuous multi-device sync' },
    ],
  },
  {
    id: 'emergency-medicine',
    slug: 'emergency-medicine',
    name: 'Emergency Medicine',
    category: 'Acute Care',
    summary: 'Rapid trauma assessment, uninterrupted mobile telemetry from ambulance to resuscitation bay, and defibrillator readiness.',
    keySystems: ['BP Monitor X1 (Transport)', 'Rapid Defibrillator D7', 'Point-of-Care Ultrasound'],
    clinicalFocus: 'Field-ruggedized monitoring for rapid door-to-balloon and acute triage workflows.',
    impactMetrics: [
      { label: 'Boot-to-Monitor Time', value: '< 3.2 seconds' },
      { label: 'Drop Resistance', value: '1.2m impact certified' },
    ],
  },
  {
    id: 'respiratory-care',
    slug: 'respiratory-care',
    name: 'Respiratory Care',
    category: 'Pulmonology',
    summary: 'Turbine-driven invasive and high-flow nasal cannula systems with lung mechanics telemetry and real-time resistance tracking.',
    keySystems: ['Apex Ventilator V9', 'BreatheFlow High-Flow System', 'Heated Breathing Circuits'],
    clinicalFocus: 'ARDS management, non-invasive COPD titration, and post-extubation weaning support.',
    impactMetrics: [
      { label: 'Peak Inspiratory Flow', value: 'Up to 260 L/min' },
      { label: 'Gas Source Autonomy', value: 'Zero central pipeline requirement' },
    ],
  },
  {
    id: 'surgery',
    slug: 'surgery',
    name: 'Surgery & Anesthesia',
    category: 'Surgical Disciplines',
    summary: 'Intraoperative 3D robotic fluoroscopy, depth-of-anesthesia monitoring, and low-dose radiation management.',
    keySystems: ['Aether C-Arm Robotic Suite', 'Anesthesia Monitoring Station', 'Surgical Video Router'],
    clinicalFocus: 'Vascular, orthopedic, and neurosurgical hybrid suites demanding sub-millimeter visualization.',
    impactMetrics: [
      { label: 'Spatial Resolution', value: '3.2 lp/mm high contrast' },
      { label: 'Dose Modulation', value: 'Up to 60% reduction' },
    ],
  },
  {
    id: 'diagnostics',
    slug: 'diagnostics',
    name: 'Diagnostics & Pathology',
    category: 'Laboratory & Imaging',
    summary: 'High-throughput clinical chemistry analyzers, point-of-care blood gas systems, and digital pathology integration.',
    keySystems: ['VividScan Ultrasound U8', 'Automated Chemistry Analyzer L-900', 'DICOM PACS Server'],
    clinicalFocus: 'Immediate statutory laboratory results and digital pathology slide consultation networks.',
    impactMetrics: [
      { label: 'Analytical Precision', value: '< 1.5% CV repeatability' },
      { label: 'Test Processing', value: '900 samples/hour' },
    ],
  },
  {
    id: 'orthopedics',
    slug: 'orthopedics',
    name: 'Orthopedics',
    category: 'Musculoskeletal',
    summary: 'Intraoperative joint alignment imaging, implant position verification, and outpatient rehabilitation telemetry.',
    keySystems: ['Aether C-Arm Robotic Suite', 'Kinematic Sensor Modules'],
    clinicalFocus: 'Precision guidance during arthroplasty, trauma fixation, and spinal reconstruction.',
    impactMetrics: [
      { label: 'Angular Precision', value: '0.1° robotic calibration' },
      { label: 'Implant Fit Accuracy', value: 'Sub-millimeter verification' },
    ],
  },
  {
    id: 'pediatrics',
    slug: 'pediatrics',
    name: 'Pediatrics & Neonatology',
    category: 'Pediatric Care',
    summary: 'Micro-volume ventilation, gentle neonatal skin-safe sensor adhesives, and ultra-low noise acoustic patient monitoring.',
    keySystems: ['Apex Ventilator V9 (Neonatal mode)', 'Neonatal Micro-SpO₂ Sensors'],
    clinicalFocus: 'NICU incubators and pediatric intensive care units requiring 0.3 kg patient capability.',
    impactMetrics: [
      { label: 'Minimum Tidal Volume', value: '2 mL calibrated delivery' },
      { label: 'Auditory Stress Profile', value: '< 42 dBA whisper quiet' },
    ],
  },
];
