import React from 'react';

/**
 * Botanical Branch / Editable Vector
 * Figma Specs:
 * Width: 185px, Height: 245px
 * Left: 28px, Top: 34px
 * Opacity: 0.65
 * Vector Stroke: 2px solid #DFC9AB
 */
export default function BotanicalBranch({ className = '' }) {
  return (
    <svg
      width="185"
      height="245"
      viewBox="0 0 185 245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute opacity-65 pointer-events-none ${className}`}
      style={{
        left: '28px',
        top: '34px',
        width: '185px',
        height: '245px',
      }}
    >
      {/* Central Curved Stem */}
      <path
        d="M140 10C125 60 90 120 40 235"
        stroke="#DFC9AB"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Pair of Top Leaves */}
      <path
        d="M135 15C150 10 165 18 160 32C145 35 132 25 135 15Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M135 15C125 0 110 5 112 20C122 28 132 22 135 15Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf Pair 2 */}
      <path
        d="M120 50C140 45 155 55 150 70C132 72 120 62 120 50Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M120 50C100 40 88 52 92 68C105 72 118 64 120 50Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf Pair 3 */}
      <path
        d="M102 95C125 90 138 102 134 118C116 120 102 108 102 95Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M102 95C80 82 68 95 72 112C88 116 100 106 102 95Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf Pair 4 */}
      <path
        d="M80 145C102 140 115 152 110 168C92 170 78 158 80 145Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M80 145C58 132 46 145 50 162C66 166 78 156 80 145Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf Pair 5 */}
      <path
        d="M58 190C78 185 90 198 85 212C68 215 56 202 58 190Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M58 190C36 178 24 190 28 208C44 212 56 200 58 190Z"
        stroke="#DFC9AB"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
