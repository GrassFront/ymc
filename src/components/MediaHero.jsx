import React from 'react';
import mediaImage from '../assets/media1.png';

const HeritageOrnament = () => (
  <svg width="220" height="22" viewBox="0 0 220 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 11H89" stroke="#B86A12" strokeWidth="1.5" />
    <path d="M131 11H220" stroke="#B86A12" strokeWidth="1.5" />
    <path d="M100 15 C95 15 92 10 92 10 C92 10 95 5 100 5 C105 5 108 10 108 10 C108 10 105 15 100 15 Z" stroke="#B86A12" strokeWidth="1.5" fill="none" />
    <path d="M120 15 C125 15 128 10 128 10 C128 10 125 5 120 5 C115 5 112 10 112 10 C112 10 115 15 120 15 Z" stroke="#B86A12" strokeWidth="1.5" fill="none" />
    <path d="M110 8 L110 14" stroke="#B86A12" strokeWidth="1.5" />
  </svg>
);

export default function MediaHero() {
  return (
    <section className="w-full bg-[#FAF8F4] overflow-hidden flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center lg:items-center bg-[#FAF8F4] relative lg:pl-[64px] lg:pr-0">
        
        {/* Copy */}
        <div className="flex flex-col items-start px-6 py-12 lg:p-0 gap-[24px] w-full lg:w-[610px] shrink-0 z-10 lg:h-[356px] justify-center">
          
          <div className="flex flex-row items-center gap-[16px]">
            <span className="font-sans font-semibold text-[18px] leading-[22px] tracking-[0.2em] text-[#B45A08] uppercase">
              MEDIA
            </span>
            <div className="w-[64px] h-[1px] bg-[#B45A08]" />
          </div>

          <h1 className="flex flex-row items-baseline flex-wrap gap-x-[8px]">
            <span className="font-serif font-semibold text-[44px] leading-[54px] lg:text-[54px] lg:leading-[72px] text-[#1A1A1A]">
              In The
            </span>
            <span className="font-serif font-semibold text-[44px] leading-[54px] lg:text-[54px] lg:leading-[72px] text-[#B45A08]">
              Media.
            </span>
          </h1>

          <div className="font-serif italic font-normal text-[24px] leading-[34px] lg:text-[31px] lg:leading-[42px] text-[#1A1A1A]">
            Features. Appearances. Press Coverage.
          </div>

          <div className="w-[220px] h-[22px] flex items-center shrink-0">
            <HeritageOrnament />
          </div>

          <p className="font-sans font-normal text-[16px] leading-[28px] lg:text-[20px] lg:leading-[35px] text-[#1A1A1A] max-w-[464px]">
            From television to digital platforms, magazines to podcasts — Chef Michael’s culinary journey and expertise continue to inspire millions.
          </p>
        </div>

        {/* Visual */}
        <div className="relative w-full h-[400px] lg:w-[766px] lg:h-[482px] shrink-0 lg:order-1 mt-6 lg:mt-0">
          
          {/* Photo Fade for desktop */}
          <div 
            className="hidden lg:block absolute left-0 top-0 w-[108px] h-full z-10" 
            style={{
              background: 'linear-gradient(88.3deg, #FAF8F4 1.44%, rgba(250, 248, 244, 0.92) 43.47%, rgba(250, 248, 244, 0) 92.03%)'
            }}
          />

          {/* Fallback image resolution logic inline */}
          <img 
            src={mediaImage} 
            alt="Chef Michael surrounded by media microphones" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1541812837330-9751dc5d70f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=766&h=482&q=80';
            }}
          />
        </div>

      </div>
    </section>
  );
}
