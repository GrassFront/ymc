import React from 'react';
import { AWARDS_HERO_DATA } from '../../data/awardsData';

/**
 * AwardsHero Component
 * Slightly increased photo column width to match Figma design expansive layout.
 */
export default function AwardsHero() {
  const {
    eyebrow,
    headlineLine1,
    headlinePrefix,
    headlineAccent,
    description,
    heroImage,
    heroImageAlt,
  } = AWARDS_HERO_DATA;

  return (
    <section className="w-full bg-[#FAF8F4] overflow-hidden flex justify-center items-center">
      {/* Awards Hero / Frame 182 Container */}
      <div
        className="w-full max-w-[1440px] min-h-[492px] lg:h-[492px] bg-[#FAF8F4] flex flex-col lg:flex-row justify-between items-center relative overflow-hidden"
        style={{ isolation: 'isolate' }}
      >
        
        {/* Awards Hero / Copy */}
        <div className="w-full lg:w-[660px] xl:w-[690px] h-auto lg:h-[492px] flex flex-col items-start justify-center px-6 sm:px-12 lg:pl-[72px] lg:pr-[24px] lg:pt-[92px] lg:pb-[72px] gap-[24px] z-[10]">
          
          {/* Eyebrow */}
          <span className="w-full lg:w-[540px] font-sans font-semibold text-[14px] leading-[17px] tracking-[2.5px] text-[#B45A08] uppercase">
            {eyebrow}
          </span>

          {/* Awards Headline */}
          <h1 className="w-full lg:w-[630px] font-serif font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[46px] sm:leading-[54px] lg:leading-[60px] text-[#1A1A1A]">
            {headlineLine1} <br />
            <span>{headlinePrefix}</span>
            <span className="italic text-[#B45A08]">{headlineAccent}</span>
          </h1>

          {/* Heritage Divider (220px x 20px) */}
          <div className="w-[220px] h-[20px] relative flex items-center justify-between flex-none my-1">
            <div className="w-[90px] h-[0px] border-t-[1.2px] border-[#B45A08]" />
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
            <div className="w-[90px] h-[0px] border-t-[1.2px] border-[#B45A08]" />
          </div>

          {/* Awards Description */}
          <p className="w-full lg:w-[600px] font-sans font-normal text-[15px] sm:text-[16px] leading-[28px] sm:leading-[32px] text-[#1A1A1A]">
            {description}
          </p>

        </div>

        {/* Right Photo Column - Increased Width (lg:w-[750px] xl:w-[780px]) */}
        <div className="w-full lg:w-[750px] xl:w-[780px] h-[360px] sm:h-[430px] lg:h-[492px] relative flex-none z-[1] overflow-hidden flex items-center justify-center bg-[#FAF8F4]">
          
          {/* Soft Left Linear Gradient Overlay */}
          <div
            className="hidden lg:block absolute left-0 top-0 w-[220px] h-full z-[3] pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, #FAF8F4 0%, rgba(250, 248, 244, 0.8) 40%, rgba(250, 248, 244, 0) 100%)',
            }}
          />

          {/* award1.png Image slightly zoomed in for perfect framing */}
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full h-full object-contain object-center scale-[1.08] transition-transform duration-300"
            style={{
              objectFit: 'contain',
              objectPosition: 'center center',
            }}
          />

        </div>

      </div>
    </section>
  );
}
