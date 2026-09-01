import React from 'react';
import leafIcon from '../../assets/leaf.png';

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
    <img
      src={leafIcon}
      alt="Leaf Icon"
      className={`absolute opacity-65 pointer-events-none ${className}`}
      style={{
        left: '28px',
        top: '34px',
        width: '185px',
        height: '245px',
        objectFit: 'contain'
      }}
    />
  );
}
