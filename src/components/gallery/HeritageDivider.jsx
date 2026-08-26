import React from 'react';

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
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M12 1L15.5 4.5L12 8L8.5 4.5L12 1Z"
          stroke="#B45A08"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M4.5 5.5L8 9L4.5 12.5L1 9L4.5 5.5Z"
          stroke="#B45A08"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M19.5 5.5L23 9L19.5 12.5L16 9L19.5 5.5Z"
          stroke="#B45A08"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M12 9.5L15.5 13L12 16.5L8.5 13L12 9.5Z"
          stroke="#B45A08"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      {/* Right Vector Line */}
      <div className="w-[78px] h-[0px] border-t-[1.2px] border-[#B45A08]" />
    </div>
  );
}
