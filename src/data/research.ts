export interface ResearchTopic {
  id: string;
  category: string;
  title: string;
  abstract: string;
  leadInvestigator: string;
  status: 'Published' | 'Clinical Validation' | 'Pre-Print' | 'Active R&D';
  publicationYear: string;
  metrics: { label: string; value: string };
}

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: 'res-01',
    category: 'Medical Signal Processing',
    title: 'Continuous Wavelet Decomposition for Real-Time ST Segment Elevation Discrepancy Detection',
    abstract: 'Evaluates multi-lead wavelet transformation algorithms in detecting sub-millivolt ischemic shifts in high-motion ambulatory settings, filtering high-frequency surgical cautery artifacts while preserving QRS integrity.',
    leadInvestigator: 'Division of Electrophysiology & Signal Intelligence',
    status: 'Published',
    publicationYear: '2026',
    metrics: { label: 'Signal-to-Noise Ratio Gain', value: '+14.6 dB' },
  },
  {
    id: 'res-02',
    category: 'Non-Invasive Hemodynamics',
    title: 'Photoplethysmographic Pulse Arrival Time for Continuous Arterial Blood Pressure Estimation',
    abstract: 'Investigates cuffless arterial pressure estimation using multi-wavelength photoplethysmography cross-correlated with Lead II R-wave peaks in post-cardiac surgical cohorts.',
    leadInvestigator: 'Clinical Hemodynamics R&D Group',
    status: 'Clinical Validation',
    publicationYear: '2026',
    metrics: { label: 'Mean Absolute Error', value: '< 4.2 mmHg' },
  },
  {
    id: 'res-03',
    category: 'Connected Infrastructure',
    title: 'Zero-Buffer Telemetry Routing in High-Density Hospital IoT Mesh Architectures',
    abstract: 'Demonstrates deterministic latency packet routing across IEEE 802.11ax hospital backbones, ensuring continuous vital sign fidelity during intra-facility patient transit without data loss.',
    leadInvestigator: 'BloodPact Connect Engineering Lab',
    status: 'Published',
    publicationYear: '2025',
    metrics: { label: 'Packet Drop Rate', value: '0.0001%' },
  },
  {
    id: 'res-04',
    category: 'Medical Computer Vision',
    title: 'Real-Time Edge-Accelerated Segmentation of Left Ventricular Endocardial Boundaries',
    abstract: 'Presents an on-device tensor network for automated biplane Simpson ejection fraction computation during standard bedside echocardiography scans with physician oversight.',
    leadInvestigator: 'BloodPact Intelligence Imaging Team',
    status: 'Pre-Print',
    publicationYear: '2026',
    metrics: { label: 'Inference Latency', value: '8.4 ms/frame' },
  },
];
