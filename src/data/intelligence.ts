export interface AICapability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  clinicalApplication: string;
  metrics: { label: string; value: string }[];
}

export const AI_CAPABILITIES: AICapability[] = [
  {
    id: 'clinical-data',
    number: '01',
    title: 'Clinical Data Intelligence',
    tagline: 'Turn complex healthcare datasets into structured information.',
    description: 'Normalizes and correlates heterogenous hospital feeds—from bedside telemetry to laboratory biochemical panels—into a unified, standardized clinical data model.',
    clinicalApplication: 'ICU central station multi-modal synthesis and longitudinal patient record normalization.',
    metrics: [
      { label: 'Standard', value: 'HL7 FHIR R4' },
      { label: 'Ingestion Latency', value: '< 12ms' },
      { label: 'Harmonization', value: 'Cross-vendor schema mapping' },
    ],
  },
  {
    id: 'signal-analysis',
    number: '02',
    title: 'Signal Analysis',
    tagline: 'Analyze medical signals and time-series data for relevant patterns.',
    description: 'High-frequency digital signal filtering and wavelet decomposition designed to extract subtle morphology changes from multi-lead ECGs and arterial pressure lines without baseline wandering.',
    clinicalApplication: 'Continuous artifact rejection and micro-voltage morphology tracking in electrophysiology.',
    metrics: [
      { label: 'Sampling Bandwidth', value: '0.05 Hz - 150 Hz' },
      { label: 'Noise Rejection', value: '50/60 Hz notch + adaptive baseline' },
      { label: 'Resolution', value: '24-bit ADC fidelity' },
    ],
  },
  {
    id: 'predictive-models',
    number: '03',
    title: 'Predictive Models',
    tagline: 'Explore clinically relevant trends using validated datasets.',
    description: 'Identifies statistically significant shifts in continuous hemodynamic stability hours before traditional single-threshold monitor alarms trigger.',
    clinicalApplication: 'Early deterioration risk indexing and ICU step-down readiness assessment.',
    metrics: [
      { label: 'Validation Framework', value: 'Multi-center retrospective trials' },
      { label: 'Temporal Window', value: '2h - 6h trend forecasting' },
      { label: 'Output', value: 'Hemodynamic Stability Index' },
    ],
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Medical Computer Vision',
    tagline: 'Develop computer-vision systems for appropriate medical applications.',
    description: 'Applies deep spatial edge detection and anatomical feature segmentation to intraoperative fluoroscopy, ultrasound acoustic frames, and diagnostic imaging.',
    clinicalApplication: 'Assists in automated left ventricular ejection fraction calculation and catheter tip boundary localization.',
    metrics: [
      { label: 'Inference', value: 'On-device edge acceleration' },
      { label: 'Frame Rate', value: '60 fps real-time overlay' },
      { label: 'Safety', value: 'Clinician-in-the-loop oversight' },
    ],
  },
  {
    id: 'clinical-documentation',
    number: '05',
    title: 'Clinical Documentation',
    tagline: 'Help organize and structure healthcare documentation.',
    description: 'Automatically drafts chronologically structured clinical handover notes by synthesizing bedside equipment events, administered titrations, and vital parameter shifts.',
    clinicalApplication: 'ICU shift-change handoff synthesis and procedural documentation timestamping.',
    metrics: [
      { label: 'Time Saved', value: 'Up to 35 mins per shift' },
      { label: 'Audit Trail', value: '100% verifiable source timestamps' },
      { label: 'Vocabulary', value: 'SNOMED CT & ICD-10 mapping' },
    ],
  },
  {
    id: 'workflow-intelligence',
    number: '06',
    title: 'Workflow Intelligence',
    tagline: 'Reduce repetitive administrative and operational tasks.',
    description: 'Context-aware alarm prioritization that groups related physiological alerts into single actionable events, mitigating alarm fatigue across nursing units.',
    clinicalApplication: 'Smart audible alert filtering based on patient movement and probe decoupling detection.',
    metrics: [
      { label: 'Alarm Fatigue Reduction', value: 'Up to 58% false-alarm suppression' },
      { label: 'Priority Escalation', value: 'Rule-based hierarchical dispatch' },
      { label: 'Bed-to-Nurse Latency', value: '< 250ms direct alerting' },
    ],
  },
  {
    id: 'healthcare-analytics',
    number: '07',
    title: 'Healthcare Analytics',
    tagline: 'Provide institutions with clearer visibility into healthcare operations and data.',
    description: 'Gives clinical directors and hospital administrators granular operational visibility into equipment utilization rates, ventilator weaning timelines, and bed occupancy dynamics.',
    clinicalApplication: 'Asset allocation across emergency departments and intensive care capacity planning.',
    metrics: [
      { label: 'Dashboards', value: 'Executive & Departmental views' },
      { label: 'Compliance', value: 'Automated quality reporting' },
      { label: 'Integration', value: 'Enterprise EHR connector' },
    ],
  },
];

export interface SignalPreset {
  id: string;
  name: string;
  lead: string;
  heartRate: number;
  rhythmStatus: string;
  signalQuality: string;
  confidence: number;
  findings: string[];
  recommendedAction: string;
}

export const SIGNAL_PRESETS: SignalPreset[] = [
  {
    id: 'normal-sinus',
    name: 'Normal Sinus Rhythm',
    lead: 'Lead II (Diagnostic 0.05-150Hz)',
    heartRate: 72,
    rhythmStatus: 'Regular P-P & R-R Intervals',
    signalQuality: '99.4% (Optimal Electrode Contact)',
    confidence: 98.8,
    findings: [
      'Normal PR interval (158 ms)',
      'Isoelectric ST segment (0.02 mV deviation)',
      'Uniform QRS morphology (88 ms duration)',
      'Normal QTc interval (412 ms Bazett)',
    ],
    recommendedAction: 'Standard continuous monitoring protocol. No intervention required.',
  },
  {
    id: 'atrial-fib',
    name: 'Atrial Arrhythmia (Irregular R-R)',
    lead: 'Lead II + V5 Dual-Vector',
    heartRate: 114,
    rhythmStatus: 'Irregularly Irregular Ventricular Response',
    signalQuality: '97.2% (Motion artifact filtered)',
    confidence: 96.4,
    findings: [
      'Absence of discrete P waves with fibrillatory baseline',
      'Variable R-R intervals (mean ventricular rate 114 bpm)',
      'Normal narrow QRS complex (92 ms)',
      'Hemodynamic stability index preserved at 84/100',
    ],
    recommendedAction: 'Flag for clinical review. Verify electrolyte panel and 12-lead baseline.',
  },
  {
    id: 'ischemia-trend',
    name: 'ST Segment Depression Trend',
    lead: 'Lead V4-V6 Precordial Sweep',
    heartRate: 88,
    rhythmStatus: 'Sinus with progressive ST deviation',
    signalQuality: '98.9% (Verified filter pass)',
    confidence: 95.1,
    findings: [
      'Horizontal ST depression of 1.8 mm (0.18 mV) in Lead V5',
      'Symmetric T wave inversion developing over 45 min interval',
      'Preserved R-wave voltage with no Q-wave formation',
      'Calculated myocardial workload index elevated',
    ],
    recommendedAction: 'Prompt bedside evaluation recommended. Verify 12-lead ECG and cardiac biomarkers.',
  },
  {
    id: 'respiratory-desat',
    name: 'Cheyne-Stokes Respiratory Coupling',
    lead: 'Transthoracic Impedance + SpO₂ Pleth',
    heartRate: 64,
    rhythmStatus: 'Cyclical hyperpnea-apnea coupling',
    signalQuality: '96.8% (Respiratory sync locked)',
    confidence: 94.7,
    findings: [
      'Crescendo-decrescendo tidal volume variation (60s cycle)',
      'Central apnea phase duration 18 seconds',
      'Concomitant cyclic SpO₂ oscillation between 96% and 88%',
      'Cerebral perfusion index monitored stable',
    ],
    recommendedAction: 'Review non-invasive ventilation titration and baseline neurological assessment.',
  },
];
