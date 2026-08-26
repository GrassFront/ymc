import React from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryCTA from '../components/gallery/GalleryCTA';

export default function Gallery() {
  return (
    <div className="w-full min-h-screen bg-[#FCFAF7] flex flex-col">
      {/* Gallery Hero Section */}
      <GalleryHero />

      {/* Gallery Filters & Grid Section */}
      <GalleryGrid />

      {/* Gallery CTA Band Section */}
      <GalleryCTA />
    </div>
  );
}
