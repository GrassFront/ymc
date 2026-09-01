import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import navLogo from '../../assets/navlogo.png';
import botanicalOrnamentImg from '../../assets/Botanical_Ornament.png';

/**
 * GalleryCTA Component
 * Exact implementation of Figma 'Gallery CTA / Desktop 1440' specs.
 *
 * Outer Container: 1440px x 184px, Background #FDFBF8
 * CTA Band: 1344px x 154px, Background #FCF8F2, Shadow 0px 5px 14px rgba(46, 31, 15, 0.1), Border Radius 12px
 */
export default function GalleryCTA() {
  return (
    <section className="w-full bg-[#FDFBF8] flex justify-center items-center py-[15px] px-4 overflow-hidden">
      
      {/* CTA Band / Auto Layout */}
      <div className="w-full max-w-[1344px] min-h-[154px] bg-[#FCF8F2] shadow-[0px_5px_14px_rgba(46,31,15,0.1)] rounded-[12px] p-6 lg:p-[18px_22px] flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-[18px]">
        
        {/* Botanical Ornament */}
        <div className="w-[70px] h-[118px] flex justify-center items-center flex-shrink-0">
          <img
            src={botanicalOrnamentImg}
            alt="Botanical Ornament"
            className="w-[69px] h-[116px] object-contain"
          />
        </div>

        {/* Headline Copy */}
        <div className="w-full lg:w-[370px] h-auto lg:h-[110px] flex flex-col justify-center items-start gap-[4px]">
          <span className="font-sans font-semibold text-[11px] leading-[13px] tracking-[1.5px] text-[#BA6E29] uppercase">
            LET'S CREATE SOMETHING EXTRAORDINARY
          </span>
          <h2 className="font-serif font-semibold text-[26px] sm:text-[31px] leading-[32px] sm:leading-[38px] text-[#12100F]">
            Your Vision. My Craft.
          </h2>
          <h3 className="font-serif italic font-normal text-[25px] sm:text-[30px] leading-[31px] sm:leading-[37px] text-[#BA6E29]">
            Unforgettable Results.
          </h3>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[1px] h-[92px] bg-[#D4BFA1] flex-shrink-0" />

        {/* Supporting Copy */}
        <div className="w-full lg:w-[320px] h-auto lg:h-[66px] flex flex-col justify-center items-start gap-[2px]">
          <p className="font-sans font-normal text-[14px] leading-[22px] text-[#12100F]">
            From private dining to brand collaborations — let's make it memorable.
          </p>
        </div>

        {/* Get In Touch CTA Button */}
        <Link
          to="/contact"
          className="w-full sm:w-auto max-w-[250px] h-[clamp(44px,1.5vw+34px,58px)] bg-[#D4A017] border border-[#EB9E47] rounded-[4px] px-[clamp(14px,1.5vw+8px,25px)] sm:pl-[clamp(16px,1.5vw+10px,25px)] sm:pr-[clamp(14px,1.5vw+8px,20px)] flex flex-row justify-between items-center gap-[clamp(12px,1.2vw+8px,26px)] hover:bg-[#c29112] transition-colors cursor-pointer flex-shrink-0 no-underline"
        >
          <span className="font-sans font-semibold text-[clamp(13.5px,0.8vw+10px,17px)] leading-none text-white whitespace-nowrap">
            Get In Touch
          </span>
          <ArrowRight className="w-[clamp(16px,0.8vw+12px,22px)] h-[clamp(16px,0.8vw+12px,22px)] text-white flex-shrink-0" strokeWidth={1.8} />
        </Link>

        {/* Chef Michael Seal */}
        <div className="w-[130px] h-[132px] flex flex-col justify-center items-center gap-[8px] flex-shrink-0">
          <span className="font-sans font-semibold text-[9px] leading-[11px] tracking-[2.4px] text-center text-[#D6B891] uppercase whitespace-nowrap">
            CHEF MICHAEL
          </span>
          <div className="w-[75px] h-[82px] flex items-center justify-center">
            <img
              src={navLogo}
              alt="YCM Studio Chef Emblem"
              className="w-[75px] h-[82px] object-contain opacity-70"
            />
          </div>
          <span className="font-sans font-semibold text-[8px] leading-[10px] tracking-[2.1px] text-center text-[#D6B891] uppercase whitespace-nowrap">
            YCM STUDIO
          </span>
        </div>

      </div>
    </section>
  );
}
