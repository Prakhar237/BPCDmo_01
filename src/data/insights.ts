export interface Insight {
  id: string;
  slug: string;
  type: 'Clinical Report' | 'Engineering Note' | 'Field Brief' | 'Architecture Memo';
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const INSIGHTS: Insight[] = [
  {
    id: 'ins-01',
    slug: 'icu-display-ergonomics',
    type: 'Clinical Report',
    title: 'Display Ergonomics in High-Acuity ICUs: Reducing Cognitive Load Without Losing Signal Fidelity',
    summary:
      'A field synthesis of bedside monitor layouts across 18 ICUs, evaluating alarm density, waveform hierarchy, and glanceable numeric zones during night-shift acuity peaks.',
    author: 'Clinical Experience Office',
    date: '2026-08-12',
    readTime: '8 min',
    tags: ['ICU', 'Human Factors', 'Patient Monitoring'],
  },
  {
    id: 'ins-02',
    slug: 'telemetry-mesh-latency',
    type: 'Engineering Note',
    title: 'Deterministic Latency Budgets for Hospital Telemetry Meshes',
    summary:
      'How BloodPact Connect allocates per-hop timing budgets across Wi-Fi 6E and wired edge gateways to keep continuous ECG streams within clinical usability thresholds.',
    author: 'Connect Systems Engineering',
    date: '2026-07-28',
    readTime: '6 min',
    tags: ['Connect', 'Networking', 'Telemetry'],
  },
  {
    id: 'ins-03',
    slug: 'st-segment-artifact-filtering',
    type: 'Engineering Note',
    title: 'Preserving Ischemic Detail While Filtering Surgical Electrocautery Noise',
    summary:
      'Walkthrough of wavelet-domain artifact rejection used in Monitor M5 signal pipelines, including validation against annotated cautery epochs from intraoperative recordings.',
    author: 'Signal Intelligence Lab',
    date: '2026-06-19',
    readTime: '11 min',
    tags: ['ECG', 'Signal Processing', 'Surgery'],
  },
  {
    id: 'ins-04',
    slug: 'turnkey-icu-commissioning',
    type: 'Field Brief',
    title: 'Commissioning a 24-Bed ICU: Lessons from Turnkey Deployment Week One',
    summary:
      'Practical notes from biomedical engineering partners on power sequencing, HL7 FHIR endpoint validation, and bedside training cadence during first-week go-live.',
    author: 'Institutional Deployment Team',
    date: '2026-05-03',
    readTime: '7 min',
    tags: ['Hospital Solutions', 'ICU', 'Deployment'],
  },
  {
    id: 'ins-05',
    slug: 'clinician-in-the-loop-ai',
    type: 'Architecture Memo',
    title: 'Clinician-in-the-Loop Design for Medical Signal Intelligence',
    summary:
      'Why BloodPact Intelligence surfaces structured hypotheses with confidence bands instead of opaque diagnoses — and how audit trails support institutional governance.',
    author: 'BloodPact Intelligence Architecture',
    date: '2026-04-14',
    readTime: '9 min',
    tags: ['AI', 'Governance', 'Clinical Workflow'],
  },
  {
    id: 'ins-06',
    slug: 'ventilator-weaning-telemetry',
    type: 'Clinical Report',
    title: 'Respiratory Mechanics Telemetry That Supports Weaning Conversations',
    summary:
      'How synchronized compliance, resistance, and RSBI trends on Apex V9 help respiratory therapists and intensivists align on extubation readiness without extra charting burden.',
    author: 'Critical Care Clinical Affairs',
    date: '2026-03-22',
    readTime: '5 min',
    tags: ['Ventilation', 'Critical Care', 'Workflow'],
  },
];
