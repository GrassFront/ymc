import React from 'react';
import serviceslast from '../assets/serviceslast.png';
import knifeAndLeaves from '../assets/Knife & Leaves.png';

export default function CulinaryVisionCTA() {
  return (
    <section className="w-full flex flex-col items-center bg-[#FCFAF7] overflow-hidden">
      {/* Container for Desktop 1440 alignment */}
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row bg-[#FCFAF7]">
        
        {/* Left Copy */}
        <div className="flex flex-col items-start px-6 py-12 md:py-16 lg:pt-[56px] lg:pr-[58px] lg:pb-[40px] lg:pl-[92px] gap-[17px] w-full lg:w-[677px] lg:h-[420px] bg-[#FCFAF7] shrink-0">
          
          <div className="font-sans font-semibold text-[13.5px] leading-[16px] tracking-[0.12em] text-[#BF6E21] uppercase">
            READY TO CREATE SOMETHING EXTRAORDINARY?
          </div>

          <div className="flex flex-col gap-0">
            <h2 className="flex flex-wrap items-center gap-x-[9px]">
              <span className="font-serif font-semibold text-[32px] md:text-[39px] leading-[1.2] md:leading-[52px] text-[#0E0E0D]">
                Let's Bring Your
              </span>
              <span className="font-serif italic font-normal text-[32px] md:text-[39px] leading-[1.2] md:leading-[52px] text-[#BF6E21]">
                Culinary
              </span>
            </h2>
            <h2 className="font-serif font-semibold text-[32px] md:text-[39px] leading-[1.2] md:leading-[52px] text-[#0E0E0D]">
              Vision to Life.
            </h2>
          </div>

          <p className="font-sans font-semibold text-[14px] leading-[23px] text-[#33302E] lg:w-[450px]">
            Whether it's a private dinner, a brand campaign,<br className="hidden lg:block" />
            or a full restaurant launch — we're here to craft<br className="hidden lg:block" />
            experiences that truly stand out.
          </p>

          <button className="flex flex-row justify-between items-center px-[clamp(16px,1.5vw+8px,25px)] pr-[clamp(14px,1.5vw+6px,20px)] w-full max-w-[245px] h-[clamp(46px,1.5vw+36px,62px)] bg-[#D4A017] border border-[#EB9E47] hover:bg-[#b88c14] transition-colors mt-[15px] cursor-pointer">
            <span className="font-sans font-semibold text-[clamp(14px,0.8vw+10px,17px)] leading-none text-white whitespace-nowrap">
              Get In Touch
            </span>
            <span className="font-sans font-normal text-[clamp(16px,1vw+12px,23px)] leading-none text-white">
              →
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:w-[763px] lg:h-[420px] shrink-0 relative">
          <div 
            className="w-full h-full lg:absolute lg:top-0 lg:left-0"
            style={{ width: 'calc(100% + max(0px, 50vw - 720px))' }}
          >
            <img 
              src={serviceslast} 
              alt="Chef Michael plating a dish" 
              className="w-full h-full object-cover object-left"
              onError={(e) => {
                // Fallback to a valid unsplash image if local asset is missing/broken
                e.target.src = 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&h=421&q=80';
              }}
            />
          </div>
        </div>
      </div>

      {/* YCM Statement (Bottom Strip) */}
      <div className="w-full max-w-[1440px] h-auto lg:h-[100px] bg-[#FDFCF9] border-t border-[#E6D6BF] flex flex-col lg:flex-row items-center px-6 py-8 lg:py-0 lg:px-[72px] gap-6 lg:gap-[32px]">
        
        <div className="font-serif font-semibold text-[64px] leading-[85px] text-[#DBC7A8] shrink-0">
          M
        </div>

        <p className="font-sans font-normal text-[18px] md:text-[20px] leading-[26px] text-[#383836] max-w-[760px] text-center lg:text-left">
          At YCM Studio, we don't just cook — we create memories,<br className="hidden lg:block" />
          build brands, and inspire the next generation of culinary artists.
        </p>

        <div className="hidden lg:block flex-grow min-w-[20px]" />

        <div className="w-[240px] h-[70px] shrink-0 flex justify-center items-center">
          <img src={knifeAndLeaves} alt="Knife & Leaves" className="w-full h-full object-contain" />
        </div>

      </div>
    </section>
  );
}
