import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesCrafted from '../components/ServicesCrafted';
import CulinaryVisionCTA from '../components/CulinaryVisionCTA';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <ServicesHero />
      <ServicesCrafted />
      <CulinaryVisionCTA />
      {/* Additional sections can be added here */}
    </div>
  );
}
