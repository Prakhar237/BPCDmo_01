'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import ProductStorytelling from '@/components/home/ProductStorytelling';
import MedicalCatalogSection from '@/components/home/MedicalCatalogSection';
import IntelligenceSection from '@/components/home/IntelligenceSection';
import ConnectSection from '@/components/home/ConnectSection';
import HospitalSolutionsSection from '@/components/home/HospitalSolutionsSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import ResearchSection from '@/components/home/ResearchSection';
import CompanyCredoSection from '@/components/home/CompanyCredoSection';
import InstitutionalCTASection from '@/components/home/InstitutionalCTASection';
import ProcurementModal from '@/components/common/ProcurementModal';

export default function HomePage() {
  const [procurementModalOpen, setProcurementModalOpen] = useState(false);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string | undefined>();

  const handleOpenProcurement = (productName?: string) => {
    setSelectedProductForInquiry(productName);
    setProcurementModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Cinematic Hero */}
      <HeroSection onRequestProposal={() => handleOpenProcurement()} />

      {/* 2. Ecosystem Overview */}
      <EcosystemSection />

      {/* 3. Flagship Product Storytelling (Monitor M5 interactive signals) */}
      <ProductStorytelling />

      {/* 4. Equipment Catalog Across Continuum of Care */}
      <MedicalCatalogSection onRequestProposal={handleOpenProcurement} />

      {/* 5. BloodPact Intelligence & Interactive AI Demonstration */}
      <IntelligenceSection />

      {/* 6. BloodPact Connect (One Healthcare Layer) */}
      <ConnectSection />

      {/* 7. Hospital Solutions & 5-Step Procurement Workflow */}
      <HospitalSolutionsSection onRequestProposal={() => handleOpenProcurement()} />

      {/* 8. Clinical Specialties */}
      <SpecialtiesSection />

      {/* 9. Innovation & Research Programs */}
      <ResearchSection />

      {/* 10. Company Credo, Mission & Governance */}
      <CompanyCredoSection />

      {/* 11. Institutional Procurement Call To Action */}
      <InstitutionalCTASection onRequestProposal={() => handleOpenProcurement()} />

      {/* Global Modal Instance */}
      <ProcurementModal
        isOpen={procurementModalOpen}
        onClose={() => setProcurementModalOpen(false)}
        defaultProduct={selectedProductForInquiry}
      />
    </main>
  );
}
