import React, { useState } from 'react';
import { GALLERY_FILTERS, GALLERY_GRID_ITEMS } from '../../data/galleryData';

/**
 * GalleryGrid Component with Tab-Specific Reshuffling & Transitions
 * 
 * Features:
 * - "All" Tab: Renders the full 13-item master grid (4 rows matching Figma specs)
 * - Category Tabs: Dynamic filtering & reshuffling customized per tab
 * - Fluid CSS Transitions: Smooth scale and opacity transitions on tab switches
 * - Balanced Spanning: Fills row width dynamically without awkward whitespace
 */
export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFilterChange = (filterId) => {
    if (filterId === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filterId);
      setIsTransitioning(false);
    }, 150);
  };

  // Helper to retrieve tab-specific items & layout order
  const getFilteredItems = () => {
    switch (activeFilter) {
      case 'signature-dishes':
        return GALLERY_GRID_ITEMS.filter(
          (item) => item.category === 'signature-dishes'
        );
      case 'events':
        return GALLERY_GRID_ITEMS.filter(
          (item) => item.category === 'events'
        );
      case 'brand-shoots':
        return GALLERY_GRID_ITEMS.filter(
          (item) => item.category === 'brand-shoots'
        );
      case 'awards':
        return GALLERY_GRID_ITEMS.filter((item) =>
          [
            'chef-michael-live',
            'training-future-chefs',
            'seafood-platter',
            'butter-chicken-roulade',
          ].includes(item.id)
        );
      case 'behind-scenes':
        return GALLERY_GRID_ITEMS.filter((item) =>
          [
            'in-the-kitchen',
            'precision-and-passion',
            'behind-the-scenes',
            'live-culinary-experience',
          ].includes(item.id)
        );
      default:
        return GALLERY_GRID_ITEMS;
    }
  };

  const filteredItems = getFilteredItems();
  const rows = [1, 2, 3, 4];

  return (
    <section className="w-full bg-[#FCFAF7] flex flex-col items-center px-4 sm:px-8 lg:px-[48px] py-[20px] gap-[16px] overflow-hidden">
      
      {/* Gallery Filters Bar */}
      <div className="w-full max-w-[1180px] h-auto min-h-[60px] flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center gap-[12px] sm:gap-[18px] py-2 hide-scrollbar overflow-x-auto">
        {GALLERY_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`h-[44px] flex items-center justify-center rounded-[22px] border border-[#D6A363] px-5 transition-all duration-300 cursor-pointer flex-shrink-0 ${
                isActive
                  ? 'bg-[#D4A017] text-white shadow-md scale-[1.02]'
                  : 'bg-transparent text-[#12110F] hover:bg-[#F2C39033]'
              }`}
              style={{
                minWidth: `${Math.min(filter.width, 160)}px`,
              }}
            >
              <span className="font-sans font-semibold text-[13px] leading-[16px] whitespace-nowrap">
                {filter.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid Area (1360px Max Width) with Smooth Transition Wrapper */}
      <div
        className={`w-full max-w-[1360px] flex flex-col gap-[8px] my-2 transition-all duration-300 transform ${
          isTransitioning
            ? 'opacity-0 scale-[0.98]'
            : 'opacity-100 scale-100'
        }`}
      >
        {activeFilter === 'all' ? (
          // Master Grid Layout (13 items across 4 exact rows matching Figma)
          rows.map((rowNum) => {
            const rowItems = GALLERY_GRID_ITEMS.filter(
              (item) => item.row === rowNum
            );
            const rowHeight = rowItems[0]?.height || 240;

            return (
              <div
                key={rowNum}
                className="w-full flex flex-col lg:flex-row gap-[8px] justify-between items-stretch"
                style={{
                  minHeight: `${rowHeight}px`,
                }}
              >
                {rowItems.map((item) => (
                  <GalleryCard key={item.id} item={item} useFlexGrow />
                ))}
              </div>
            );
          })
        ) : (
          // Dynamic Tab-Specific Reshuffled Layout
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {filteredItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                isGrid
                cardIndex={idx}
                totalCount={filteredItems.length}
              />
            ))}
          </div>
        )}
      </div>

    </section>
  );
}

/**
 * Individual Gallery Card Component with Hover & Overlay Effects
 */
function GalleryCard({ item, useFlexGrow = false, isGrid = false, cardIndex = 0, totalCount = 0 }) {
  // Determine if item in grid view should span 2 columns to keep rows balanced
  const isOddLast = isGrid && totalCount % 3 === 1 && cardIndex === totalCount - 1;
  const colSpanClass = isOddLast ? 'sm:col-span-2 lg:col-span-3' : '';

  return (
    <div
      className={`group relative rounded-[7px] overflow-hidden bg-[#2E241A] flex flex-col justify-end transition-all duration-500 hover:shadow-xl w-full ${colSpanClass}`}
      style={{
        flexGrow: useFlexGrow ? item.flexGrow : 1,
        flexShrink: useFlexGrow ? 1 : 0,
        flexBasis: useFlexGrow ? `${item.flexGrow}px` : 'auto',
        height: isGrid ? '260px' : `${item.height || 240}px`,
      }}
    >
      {/* Gallery Image with Zoom Effect */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Warm Golden Caption Overlay */}
      <div
        className="relative z-10 w-full h-[70px] bg-[rgba(242,195,144,0.72)] backdrop-blur-[3px] px-[18px] pt-[14px] pb-[10px] flex flex-col justify-center gap-[2px] border-t border-[rgba(255,255,255,0.4)] transition-all duration-300 group-hover:bg-[rgba(242,195,144,0.9)]"
      >
        <h3 className="font-sans font-semibold text-[15px] leading-[18px] text-[#000000] truncate">
          {item.title}
        </h3>
        <p className="font-sans font-normal text-[12px] leading-[15px] text-[#000000] opacity-90 truncate">
          {item.categoryLabel}
        </p>
      </div>
    </div>
  );
}
