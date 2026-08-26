import React from 'react';
import {
  FEATURED_AWARDS,
  MORE_AWARDS,
  AWARDS_QUOTE,
} from '../../data/awardsData';
import navLogo from '../../assets/navlogo.png';
import {
  Star,
  Award,
  FileCheck,
  Building2,
  Crown,
} from 'lucide-react';

/**
 * AwardsContent Component
 * Exact implementation of Figma 'Awards Content / Desktop 1440' specs.
 *
 * Background: #FDFBF8
 * Sections:
 *   1. Featured Awards Heading & 4 Cards (270px x 330px, Laurel vector icon)
 *   2. More Awards & Recognitions List (5 rows, border #D6BFA1, height 59px each)
 *   3. Awards Quote Panel (Background #F9F3EA, height 210px, Quote mark, Chef Michael signature & Seal)
 */
export default function AwardsContent() {
  const getAwardIcon = (type) => {
    switch (type) {
      case 'star':
        return <Star className="w-[20px] h-[20px] text-[#B45A08]" strokeWidth={1.8} />;
      case 'crown':
        return <Crown className="w-[20px] h-[20px] text-[#B45A08]" strokeWidth={1.8} />;
      case 'certificate':
        return <FileCheck className="w-[20px] h-[20px] text-[#B45A08]" strokeWidth={1.8} />;
      case 'building':
        return <Building2 className="w-[20px] h-[20px] text-[#B45A08]" strokeWidth={1.8} />;
      case 'award':
      default:
        return <Award className="w-[20px] h-[20px] text-[#B45A08]" strokeWidth={1.8} />;
    }
  };

  return (
    <section className="w-full bg-[#FDFBF8] flex justify-center items-center py-[30px] px-4 sm:px-8 lg:px-[48px] overflow-hidden">
      
      {/* Outer 1344px Max Desktop Container */}
      <div className="w-full max-w-[1344px] flex flex-col gap-[34px] items-center">
        
        {/* ========================================================================= */}
        {/* 1. FEATURED AWARDS HEADING */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-row justify-center items-center gap-[22px] py-2">
          {/* Ornament Left */}
          <div className="hidden sm:flex w-[112px] h-[18px] items-center">
            <div className="w-full h-[0px] border-t-[1.2px] border-[#B45A08]" />
          </div>

          {/* Heading Title */}
          <h2 className="font-serif font-semibold text-[24px] sm:text-[28px] leading-[37px] text-center text-[#B45A08] tracking-wide whitespace-nowrap">
            FEATURED AWARDS
          </h2>

          {/* Ornament Right */}
          <div className="hidden sm:flex w-[112px] h-[18px] items-center">
            <div className="w-full h-[0px] border-t-[1.2px] border-[#B45A08]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. FEATURED AWARDS CARDS (4 Cards) */}
        {/* ========================================================================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {FEATURED_AWARDS.map((award) => (
            <div
              key={award.id}
              className="w-full max-w-[270px] mx-auto h-[330px] bg-white rounded-[8px] overflow-hidden shadow-sm border border-[rgba(214,191,161,0.4)] flex flex-col transition-all duration-300 hover:shadow-md"
            >
              {/* Award Image (270px x 220px) */}
              <div className="w-full h-[220px] bg-[#FAF8F4] overflow-hidden">
                <img
                  src={award.image}
                  alt={award.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Award Content (270px x 110px) */}
              <div className="w-full h-[110px] p-[14px_16px_12px_16px] flex flex-row items-start gap-[10px] bg-white">
                
                {/* Golden Laurel Icon */}
                <div className="w-[42px] h-[42px] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 30C11.3726 30 6 24.6274 6 18C6 14 8 10 11 8M18 30C24.6274 30 30 24.6274 30 18C30 14 28 10 25 8"
                      stroke="#B45A08"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 12C9 14 9 17 10 19M26 12C27 14 27 17 26 19"
                      stroke="#B45A08"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="18" cy="12" r="2" fill="#B45A08" />
                  </svg>
                </div>

                {/* Copy Block */}
                <div className="flex flex-col justify-start items-start gap-[3px] overflow-hidden">
                  <h3 className="font-serif font-semibold text-[15px] sm:text-[16px] leading-[20px] text-[#131210] line-clamp-2">
                    {award.name}
                  </h3>
                  <p className="font-sans font-normal text-[12.5px] leading-[17px] text-[#38332E] line-clamp-2">
                    {award.description}
                  </p>
                  <span className="font-sans font-semibold text-[13px] leading-[16px] text-[#B45A08]">
                    {award.year}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. MORE AWARDS & RECOGNITIONS LIST */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col gap-[12px] mt-4">
          <h3 className="font-serif font-semibold text-[22px] sm:text-[25px] leading-[33px] text-[#B45A08] uppercase">
            MORE AWARDS & RECOGNITIONS
          </h3>

          <div className="w-full border border-[#D6BFA1] rounded-[8px] overflow-hidden bg-white shadow-sm">
            {MORE_AWARDS.map((item, index) => (
              <div
                key={item.id}
                className={`w-full min-h-[59px] flex flex-col sm:flex-row items-start sm:items-center px-[18px] py-3 sm:py-0 gap-[12px] sm:gap-[16px] ${
                  index !== MORE_AWARDS.length - 1
                    ? 'border-b border-[#E6D6BF]'
                    : ''
                }`}
              >
                {/* Award Icon */}
                <div className="w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
                  {getAwardIcon(item.iconType)}
                </div>

                {/* Award Title */}
                <span className="w-full sm:w-[390px] font-sans font-semibold text-[15px] leading-[18px] text-[#1A1A1A] flex-shrink-0">
                  {item.name}
                </span>

                {/* Award Description */}
                <span className="font-sans font-normal text-[14px] leading-[17px] text-[#1A1A1A] opacity-90">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. AWARDS QUOTE PANEL */}
        {/* ========================================================================= */}
        <div className="w-full min-h-[210px] bg-[#F9F3EA] rounded-[8px] px-6 sm:px-[44px] py-8 lg:py-0 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-[28px] mt-4">
          
          {/* Quote Mark */}
          <span className="font-serif font-semibold text-[72px] sm:text-[96px] leading-[72px] sm:leading-[128px] text-[rgba(209,179,138,0.38)] flex-shrink-0 select-none">
            “
          </span>

          {/* Quote Body */}
          <p className="w-full lg:w-[720px] font-serif font-semibold text-[22px] sm:text-[28px] lg:text-[30px] leading-[34px] sm:leading-[44px] text-[#1A1A1A]">
            {AWARDS_QUOTE.text}
          </p>

          {/* Signature */}
          <span className="w-full lg:w-[220px] font-serif italic font-normal text-[24px] sm:text-[30px] leading-[40px] text-[#B45A08] whitespace-nowrap flex-shrink-0">
            {AWARDS_QUOTE.signature}
          </span>

          {/* Chef Michael Seal */}
          <div className="w-[130px] h-[132px] flex flex-col justify-center items-center gap-[8px] flex-shrink-0">
            <span className="font-sans font-semibold text-[9px] leading-[11px] tracking-[2.4px] text-center text-[#D6B891] uppercase whitespace-nowrap">
              CHEF MICHAEL
            </span>
            <div className="w-[75px] h-[82px] flex items-center justify-center">
              <img
                src={navLogo}
                alt="YCM Studio Seal"
                className="w-[75px] h-[82px] object-contain opacity-50"
              />
            </div>
            <span className="font-sans font-semibold text-[8px] leading-[10px] tracking-[2.1px] text-center text-[#D6B891] uppercase whitespace-nowrap">
              YCM STUDIO
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
