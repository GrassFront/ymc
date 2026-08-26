import React from 'react';
import AwardsHero from '../components/awards/AwardsHero';
import AwardsContent from '../components/awards/AwardsContent';
import ConsultingCTA from '../components/awards/ConsultingCTA';

export default function Awards() {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF8] flex flex-col">
      {/* Awards Hero Section */}
      <AwardsHero />

      {/* Awards Content Section */}
      <AwardsContent />

      {/* Consulting CTA Section */}
      <ConsultingCTA />
    </div>
  );
}
