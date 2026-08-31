import React from 'react';
import { GALLERY_HERO_DATA } from '../../data/galleryData';
import HeritageDivider from './HeritageDivider';
import BotanicalBranch from './BotanicalBranch';

/**
 * GalleryHero Component
 * Exact implementation of Figma 'Gallery Hero / Desktop 1440' specs.
 *
 * Single Source of Truth: Figma CSS Layers & Screenshot
 * Background: #FAF8F4
 * Width: 1440px max
 * Height: 524px (desktop)
 */
export default function GalleryHero() {
  const { eyebrow, headlineLine1, headlineLine2Prefix, headlineLine2Accent, description, photoCards } =
    GALLERY_HERO_DATA;

  return (
    <section className="w-full bg-[#FAF8F4] overflow-hidden flex justify-center items-center">
      {/* Outer 1440px Desktop Container */}
      <div className="w-full max-w-[1440px] min-h-[524px] flex flex-col lg:flex-row justify-between items-center lg:pr-[40px] pr-0 py-8 lg:py-0">

        {/* Left Copy Section: Gallery Hero / Copy */}
        <div className="w-full lg:w-[620px] h-auto lg:h-[524px] flex flex-col items-start justify-center px-6 sm:px-12 lg:pl-[78px] lg:pr-[50px] lg:pt-[82px] lg:pb-[60px] gap-[22px] z-10">

          {/* Eyebrow */}
          <span className="w-full lg:w-[470px] font-sans font-semibold text-[13px] leading-[16px] tracking-[2.8px] text-[#B45A08] uppercase">
            {eyebrow}
          </span>

          {/* Gallery Headline */}
          <h1 className="w-full lg:w-[342px] font-serif font-semibold text-[40px] sm:text-[48px] lg:text-[54px] leading-[48px] sm:leading-[56px] lg:leading-[62px] text-[#1A1A1A]">
            {headlineLine1} <br />
            <span>{headlineLine2Prefix}</span>
            <span className="italic text-[#B45A08]">{headlineLine2Accent}</span>
          </h1>

          {/* Heritage Divider */}
          <HeritageDivider className="my-1" />

          {/* Gallery Description */}
          <p className="w-full lg:w-[465px] font-sans font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[30px] text-[#1A1A1A]">
            {description}
          </p>

        </div>

        {/* Right Collage Section: Gallery Hero / Collage */}
        <div className="w-full lg:w-[820px] h-[380px] sm:h-[460px] lg:h-[524px] relative flex justify-center items-center isolate overflow-hidden lg:overflow-visible my-4 lg:my-0">

          {/* Scaling wrapper to preserve exact pixel positions at all screen sizes */}
          <div className="w-[820px] h-[524px] relative transform scale-[0.45] xs:scale-[0.55] sm:scale-[0.72] md:scale-[0.85] lg:scale-100 origin-center lg:origin-right flex-shrink-0">

            {/* Botanical Branch / Background Accent Vector */}
            <BotanicalBranch />

            {/* Watercolor Splatter / Editable Vector Dots */}
            <div
              className="absolute rounded-full bg-[#E4C49E] opacity-70 pointer-events-none"
              style={{
                left: '5.24%',
                top: '70.91%',
                width: '14px',
                height: '14px',
                zIndex: 1,
              }}
            />
            <div
              className="absolute rounded-full bg-[#E4C49E] opacity-70 pointer-events-none"
              style={{
                left: '18.1%',
                top: '92.73%',
                width: '10px',
                height: '10px',
                zIndex: 1,
              }}
            />
            <div
              className="absolute rounded-full bg-[#E4C49E] opacity-50 pointer-events-none"
              style={{
                left: '91.9%',
                top: '63.64%',
                width: '16px',
                height: '16px',
                zIndex: 1,
              }}
            />
            <div
              className="absolute rounded-full bg-[#E4C49E] opacity-50 pointer-events-none"
              style={{
                left: '76.19%',
                top: '5%',
                width: '12px',
                height: '12px',
                zIndex: 1,
              }}
            />

            {/* Photo Cards mapped from Data Array */}
            {photoCards.map((card) => {
              return (
                <React.Fragment key={card.id}>
                  {/* Photo Card Container */}
                  <div
                    className="absolute bg-white p-[6px] transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      width: `${card.width}px`,
                      height: `${card.height}px`,
                      left: `${card.left}px`,
                      top: `${card.top}px`,
                      transform: `rotate(${card.rotation}deg)`,
                      boxShadow: '0px 5px 10px rgba(31, 23, 13, 0.22)',
                      zIndex: card.zIndex,
                    }}
                  >
                    {/* Inner Replaceable Photo */}
                    <div
                      className="overflow-hidden bg-[#FAF8F4]"
                      style={{
                        width: `${card.imgWidth}px`,
                        height: `${card.imgHeight}px`,
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: card.objectPosition || 'center'
                        }}
                      />
                    </div>
                  </div>

                  {/* Optional Paper Tape Accent */}
                  {card.tape && (
                    <div
                      className="absolute bg-[rgba(235,224,204,0.6)] backdrop-blur-[1px] border border-[rgba(215,200,175,0.4)] shadow-sm pointer-events-none"
                      style={{
                        width: `${card.tape.width}px`,
                        height: `${card.tape.height}px`,
                        left: `${card.tape.left}px`,
                        top: `${card.tape.top}px`,
                        transform: `rotate(${card.tape.rotation}deg)`,
                        zIndex: card.tape.zIndex,
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
