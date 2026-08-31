import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import awardFotterImg from '../../assets/awardfotter.png';

/**
 * ConsultingCTA Component
 * Exact implementation of Figma 'Consulting CTA / Desktop 1440' specs.
 *
 * Container: 1440px x 240px, Background #FDFBF7, Border Radius 14px
 * Left Image: awardfotter.png (501px x 240px)
 * Right Content: 940px x 240px, padding 34px 48px 34px 54px, gap 24px
 * Button: Explore Consulting Services (278px x 62px, Background #D4A017, Border #EB9E47)
 */
export default function ConsultingCTA() {
  return (
    <section className="w-full bg-[#FDFBF7] flex justify-center items-center p-0 overflow-hidden">
      {/* Consulting CTA / Full Width Container */}
      <div className="w-full min-h-[240px] bg-[#FDFBF7] flex flex-col lg:flex-row justify-between items-center lg:items-start">

        {/* Left Photo (image 106) - 501px x 240px */}
        <div className="w-full lg:w-[501px] h-[220px] sm:h-[240px] relative flex-shrink-0 overflow-hidden">
          <img
            src={awardFotterImg}
            alt="Chef Michael Kitchen Consulting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right CTA Content - 940px x 240px */}
        <div className="w-full lg:w-[940px] min-h-[240px] p-6 sm:p-[34px_48px_34px_54px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 lg:gap-[24px]">

          {/* Copy Block */}
          <div className="w-full lg:w-[485px] flex flex-col items-start gap-[10px]">

            {/* Eyebrow */}
            <span className="w-full sm:w-auto font-sans font-semibold text-[13px] leading-[16px] tracking-[0.14em] text-[#B45A08] uppercase whitespace-nowrap">
              LET'S WORK TOGETHER
            </span>

            {/* Headline */}
            <div className="w-full sm:w-[413px] flex flex-col items-start">
              <h2 className="font-serif font-semibold text-[26px] sm:text-[32px] leading-[32px] sm:leading-[38px] text-[#1A1A1A]">
                Elevate Your Culinary Vision
              </h2>
              <div className="flex flex-row items-center gap-[7px]">
                <span className="font-serif font-semibold text-[26px] sm:text-[32px] leading-[32px] sm:leading-[38px] text-[#1A1A1A]">
                  With
                </span>
                <span className="font-serif italic font-normal text-[26px] sm:text-[32px] leading-[32px] sm:leading-[38px] text-[#B45A08]">
                  Expert Guidance.
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="w-full sm:w-[415px] font-sans font-normal text-[14px] leading-[22px] text-[#1A1A1A]">
              From restaurant consulting to kitchen planning and operational excellence — let's build something extraordinary together.
            </p>

          </div>

          {/* Explore Consulting Services CTA Button */}
          <Link
            to="/services"
            className="w-full sm:w-[278px] h-[62px] bg-[#D4A017] border border-[#EB9E47] rounded-[4px] px-[20px] sm:pl-[25px] sm:pr-[20px] flex flex-row justify-between items-center gap-[26px] hover:bg-[#c29112] transition-colors cursor-pointer flex-shrink-0"
          >
            <span className="font-sans font-semibold text-[15px] leading-[18px] text-white whitespace-nowrap">
              Explore Consulting Services
            </span>
            <ArrowRight className="w-[22px] h-[22px] text-white flex-shrink-0" strokeWidth={1.8} />
          </Link>

        </div>

      </div>
    </section>
  );
}
