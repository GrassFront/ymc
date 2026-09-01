import React from 'react';
import serviceImage from '../assets/service1.png';
import ornament1Img from '../assets/Ornament1.png';

export default function ServicesHero() {
  return (
    <section className="w-full bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row relative z-10">
        
        {/* Left Copy */}
        <div className="flex flex-col items-start px-6 py-12 md:py-16 xl:px-[70px] xl:pt-[62px] xl:pb-[54px] xl:gap-[22px] gap-6 w-full xl:w-[656px] min-h-0 xl:h-[575px] bg-[#FCFAF7] z-10 relative shrink-0">
          
          <div className="text-[#BA6B1F] font-sans font-semibold text-[15px] leading-[18px] tracking-[0.22em] uppercase mt-2 xl:mt-0">
            OUR SERVICES
          </div>

          <div className="flex flex-col gap-0 xl:w-[515px]">
            <h1 className="font-serif font-semibold text-[38px] sm:text-[44px] leading-[52px] xl:text-[66px] xl:leading-[88px] text-[#0B0C0C]">
              How We Can
            </h1>
            <h1 className="font-serif font-semibold text-[38px] sm:text-[44px] leading-[52px] xl:text-[66px] xl:leading-[88px] text-[#0B0C0C] flex flex-wrap gap-x-2 items-center">
              <span>Work</span>
              <span className="font-serif italic font-normal text-[#BA6B1F]">Together</span>
            </h1>
          </div>

          <div className="w-[205px] h-[18px] my-2 xl:my-0 flex items-center">
            <img src={ornament1Img} alt="Ornament" className="w-full h-full object-contain" />
          </div>
          
          <p className="font-sans font-normal text-[15.5px] leading-[25px] text-[#333330] max-w-[500px]">
            From an intimate private dinner to a full restaurant<br className="hidden xl:block" />
            launch — explore the ways Chef Michael and<br className="hidden xl:block" />
            YCM Studio can bring your culinary vision to life.
          </p>

          <button className="flex flex-row justify-between items-center px-[clamp(16px,1.5vw+8px,24px)] pr-[clamp(14px,1.5vw+6px,20px)] w-full max-w-[250px] h-[clamp(46px,1.5vw+36px,62px)] bg-[#D4A017] border border-[#ED9E47] hover:bg-[#b88c14] transition-colors mt-2 xl:mt-0 cursor-pointer">
            <span className="font-sans font-semibold text-[clamp(14px,0.8vw+10px,16px)] leading-none text-white whitespace-nowrap">
              Let's Work Together
            </span>
            <span className="font-sans font-normal text-[clamp(16px,1vw+12px,22px)] leading-none text-white">
              →
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] xl:absolute xl:right-0 xl:top-0 xl:w-[784px] xl:h-[575px] shrink-0">
          <div 
            className="w-full h-full xl:absolute xl:top-0 xl:left-0"
          >
            {/* Gradient Fade for Desktop */}
            <div 
              className="hidden xl:block absolute left-0 top-0 w-[103px] h-full z-10" 
              style={{
                background: 'linear-gradient(88.3deg, #FCFAF7 1.44%, rgba(252, 250, 247, 0.92) 43.47%, rgba(252, 250, 247, 0) 92.03%)'
              }}
            />
            <img 
              src={serviceImage} 
              alt="Chef Michael working in the kitchen" 
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
