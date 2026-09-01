import React from 'react';
import vectorIcon from '../../assets/Editable Vector.png';

/**
 * Heritage Divider / Editable Vector
 * Figma Specs:
 * Width: 192px, Height: 20px
 * Border/Stroke: 1.2px solid #B45A08
 */
export default function HeritageDivider({ className = '' }) {
  return (
    <div className={`w-[192px] h-[20px] relative flex items-center justify-between flex-none ${className}`}>
      {/* Left Vector Line */}
      <div className="w-[78px] h-[0px] border-t-[1.2px] border-[#B45A08]" />

      {/* Center Ornamental Vector Icon */}
      <img src={vectorIcon} alt="Divider Icon" className="flex-shrink-0" style={{ height: '18px', objectFit: 'contain' }} />

      {/* Right Vector Line */}
      <div className="w-[78px] h-[0px] border-t-[1.2px] border-[#B45A08]" />
    </div>
  );
}
