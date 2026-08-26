import React from 'react';
import MediaHero from '../components/MediaHero';
import MediaReach from '../components/MediaReach';
import MediaPressKit from '../components/MediaPressKit';

export default function Media() {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <MediaHero />
      <MediaReach />
      <MediaPressKit />
      {/* Additional sections can be added here */}
    </div>
  );
}
