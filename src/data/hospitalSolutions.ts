export interface HospitalSolution {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  leadTime: string;
  includedSystems: string[];
  specs: { label: string; value: string }[];
}

export const HOSPITAL_SOLUTIONS: HospitalSolution[] = [
  {
    id: 'icu-turnkey',
    code: 'HS-ICU-01',
    title: 'High-Acuity ICU Infrastructure',
    category: 'Critical Infrastructure',
    description: 'Complete bedside ecosystem integration for intensive care units: ceiling pendants, invasive hemodynamic monitors, synchronized lung-protective ventilators, and central nursing station telemetry.',
    leadTime: '4–6 Weeks Deployment',
    includedSystems: ['BloodPact Monitor M5 Bedside Hubs', 'Apex Ventilator V9 Workstations', 'Connect G100 Telemetry Gateways', 'Central Multi-Bed Nursing Consoles'],
    specs: [
      { label: 'Capacity Standard', value: '10 to 60 Bed Modular Configurations' },
      { label: 'Network Redundancy', value: 'Dual independent fiber backbones + UPS isolated feeds' },
      { label: 'Interoperability', value: 'Automated bi-directional HL7 FHIR EHR charting' },
    ],
  },
  {
    id: 'or-hybrid',
    code: 'HS-OT-02',
    title: 'Digital Operating Theatre Suite',
    category: 'Surgical Setup',
    description: 'Ergonomic, sterile surgical environment equipped with motorized robotic C-arms, low-latency intraoperative 4K video routing, laminar air flow monitoring, and zero-footprint medical arms.',
    leadTime: '6–8 Weeks Deployment',
    includedSystems: ['Aether C-Arm Robotic Suite', 'Surgical Video Router & Matrix', 'Sterile Touch Control Terminals', 'Anesthetic Gas & Monitoring Workstation'],
    specs: [
      { label: 'Video Latency', value: '< 1ms uncompressed intraoperative visualization' },
      { label: 'Radiation Shielding', value: 'Integrated barrier dosimetry compliant with IEC regulations' },
      { label: 'Sterility Rating', value: 'ISO Class 5 Laminar Cleanroom airflow integration' },
    ],
  },
  {
    id: 'ed-trauma',
    code: 'HS-ED-03',
    title: 'Emergency & Trauma Department Setup',
    category: 'Emergency Medicine',
    description: 'Rapid-triage monitoring systems, ruggedized defibrillators, point-of-care ultrasound, and instant patient check-in telemetry built for high patient turnover and extreme clinical resilience.',
    leadTime: '3–4 Weeks Deployment',
    includedSystems: ['BP Monitor X1 Transport Monitors', 'Rapid Defibrillator D7', 'VividScan Point-of-Care Ultrasound', 'Emergency Triage Wall Displays'],
    specs: [
      { label: 'Transit Seamlessness', value: 'Zero vital signal disruption between ambulance and bay' },
      { label: 'Disinfection Protocol', value: 'Continuous UV-C and chemical resistance rating' },
      { label: 'Battery Backup', value: '8+ hours field transit operational autonomy' },
    ],
  },
  {
    id: 'diagnostic-suite',
    code: 'HS-DX-04',
    title: 'Diagnostic Imaging & Pathology Wing',
    category: 'Diagnostics',
    description: 'Turnkey diagnostic centers pairing high-dynamic ultrasound workstations, digital pathology slide scanners, and automated biochemistry analyzers with secure picture archiving (PACS).',
    leadTime: '4–6 Weeks Deployment',
    includedSystems: ['VividScan Ultrasound Cart U8', 'Automated Chemistry Analyzer L-900', 'DICOM PACS Edge Storage Server'],
    specs: [
      { label: 'Throughput', value: 'Up to 900 clinical tests / hour automated processing' },
      { label: 'Storage Archiving', value: '10-year immutable audit-compliant DICOM vault' },
      { label: 'Security', value: 'End-to-end HIPAA / GDPR data encryption' },
    ],
  },
];

export const PROCUREMENT_WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Tell us about your facility.',
    description: 'Share your institution type, target bed capacity, department requirements, and existing technical infrastructure.',
  },
  {
    step: '02',
    title: 'Define equipment requirements.',
    description: 'Our clinical biomedical engineers evaluate your clinical workflows, technical datasheets, and regulatory compliance standards.',
  },
  {
    step: '03',
    title: 'Receive a tailored proposal.',
    description: 'Receive an institutional proposal containing system schematics, interoperability architecture, service SLAs, and multi-tier pricing.',
  },
  {
    step: '04',
    title: 'Procurement and deployment.',
    description: 'Turnkey logistics, on-site commissioning, electrical safety certification, and medical staff clinical orientation.',
  },
  {
    step: '05',
    title: 'Support and maintenance.',
    description: '24/7 dedicated biomedical engineering standby, guaranteed replacement turnaround, and continuous OTA software updates.',
  },
];
