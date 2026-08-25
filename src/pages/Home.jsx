import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero1 (1).png';
import capicon from '../assets/capicon.png';
import commicon from '../assets/commicon.png';
import trusticon from '../assets/trusticon.png';
import consulicon from '../assets/consulicon.png';
import frame152 from '../assets/Frame 152.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';
import butterChicken from '../assets/butterchickenrollade.png';
import purpleCarrot from '../assets/purplecarrotbabypulao.png';
import noorKebab from '../assets/nooremalaikabab.png';
import crunchyChicken from '../assets/crunchychicken.png';

export default function Home() {
  const stats = [
    {
      value: '15+',
      label: 'Years of\nCulinary Excellence',
      icon: <img src={capicon} alt="Culinary Excellence" className="w-[56px] h-[56px] object-contain" />
    },
    {
      value: '2M+',
      label: 'Digital\nCommunity',
      icon: <img src={commicon} alt="Digital Community" className="w-[56px] h-[56px] object-contain" />
    },
    {
      value: '18+',
      label: 'Trusted Brand\nPartnerships',
      icon: <img src={trusticon} alt="Brand Partnerships" className="w-[56px] h-[56px] object-contain" />
    },
    {
      value: '11+',
      label: 'Hospitality\nConsultancy',
      icon: <img src={consulicon} alt="Hospitality Consultancy" className="w-[56px] h-[56px] object-contain" />
    }
  ];

  const signatureDishes = [
    {
      title: 'Butter Chicken Roulade',
      description: 'Comfort, elevated.',
      image: butterChicken
    },
    {
      title: 'Purple Baby Carrot Pulao',
      description: 'Colourful. Wholesome. Delicious.',
      image: purpleCarrot
    },
    {
      title: 'Noor-e-Malai Kebab',
      description: 'Royal flavours, timeless taste.',
      image: noorKebab
    },
    {
      title: 'Crunchy Tortilla Chicken Salad',
      description: 'Crunchy. Fresh. Satisfying.',
      image: crunchyChicken
    }
  ];

  const Ornament = () => (
    <svg width="86" height="8" viewBox="0 0 86 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="4" x2="36" y2="4" stroke="#B45A08" strokeWidth="1"/>
      <line x1="50" y1="4" x2="86" y2="4" stroke="#B45A08" strokeWidth="1"/>
      <circle cx="43" cy="4" r="3.5" stroke="#B45A08" strokeWidth="1"/>
    </svg>
  );

  return (
    <div className="w-full bg-[#FBF9F4] flex flex-col items-center overflow-x-hidden font-['Inter'] relative min-h-[836px]">

      {/* Background Image Area (Bleeds to right edge of screen) */}
      <div
        className="absolute top-0 right-0 h-[754px] bg-no-repeat bg-cover bg-left z-0"
        style={{
          backgroundImage: `url("${heroImage}")`,
          width: 'calc(776px + max(0px, (100vw - 1440px) / 2))'
        }}
      >
        {/* Vertical Left Fade */}
        <div
          className="absolute left-[-150px] top-0 w-[200px] h-full"
          style={{ background: 'linear-gradient(90deg, #FBF9F4 0%, rgba(251, 249, 244, 0.72) 62%, rgba(251, 249, 244, 0) 100%)' }}
        ></div>

        {/* Horizontal Bottom Fade */}
        <div
          className="absolute left-0 bottom-[-50px] w-full h-[150px]"
          style={{ background: 'linear-gradient(0deg, #FBF9F4 0%, rgba(251, 249, 244, 0.8) 50%, rgba(251, 249, 244, 0) 100%)' }}
        ></div>
      </div>

      {/* Desktop 1440 Container for Content */}
      <div className="relative w-full max-w-[1440px] h-[836px] shrink-0 z-10 pointer-events-auto">

        {/* Hero Editable Content */}
        <div className="absolute left-[110px] top-[45px] w-[541px] h-[585px]">

          {/* Kicker */}
          <div className="absolute left-0 top-[2px] flex flex-row items-center gap-[7px]">
            <span className="font-semibold text-[16px] leading-[19px] tracking-[1.4px] text-[#B55906]">
              OYE HOYE HOYE HOYE
            </span>
            <div className="w-[30px] h-[2px] bg-[#B55906]"></div>
          </div>

          {/* Headline */}
          <div className="absolute left-0 top-[36px] w-[541px] h-[208px]">
            <h1 className="font-['Playfair_Display'] font-medium text-[78px] leading-[104px] tracking-[0.02em] text-[#090807] m-0">
              Turning Every
            </h1>
            <h1 className="font-['Playfair_Display'] font-medium text-[78px] leading-[104px] tracking-[0.02em] text-[#090807] m-0">
              Dish Into A
            </h1>
          </div>

          {/* Script */}
          <div
            className="absolute left-[-8.15px] top-[229.78px] w-[430px] h-[90px] font-['Allura'] font-normal text-[72px] leading-[78px] tracking-[0px] text-[#D4A017] -rotate-[3.68deg]"
          >
            Masterpiece!
          </div>

          {/* Ornament */}
          <div className="absolute left-0 top-[340px] w-[158px] h-[12px] flex items-center justify-center">
            <svg width="158" height="12" viewBox="0 0 158 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="6" x2="70" y2="6" stroke="#B45A08" strokeWidth="1" />
              <line x1="88" y1="6" x2="158" y2="6" stroke="#B45A08" strokeWidth="1" />
              <rect x="79" y="0" width="8.48528" height="8.48528" transform="rotate(45 79 0)" stroke="#B45A08" strokeWidth="1" />
            </svg>
          </div>

          {/* Roles */}
          <div className="absolute left-0 top-[366px] w-[470px] h-[28px] font-['Inter'] font-semibold text-[15.5px] leading-[24px] tracking-[0px] text-[#090807]">
            Celebrity Chef • Food Consultant • Culinary Trainer
          </div>

          {/* Description */}
          <div className="absolute left-0 top-[410px] w-[465px] h-[80px] font-['Inter'] font-normal text-[15.5px] leading-[25px] tracking-[0px] text-[#090807]">
            Chef Michael brings 15+ years of culinary excellence<br />
            to kitchens, brands, and dining tables across<br />
            India and beyond.
          </div>

          {/* Buttons Container */}
          <div className="absolute left-0 top-[505px] flex flex-row gap-[25px]">
            {/* Primary CTA */}
            <button className="box-border flex flex-row justify-center items-center px-[24px] h-[48px] bg-[#D4A017] rounded-[5px] gap-[16px] hover:bg-[#c29215] transition-colors group">
              <span className="font-medium text-[16px] leading-[20px] text-[#FAF8F4]">
                Book Chef Michael
              </span>
              <ArrowRight className="w-[20px] h-[20px] text-[#FAF8F4] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </button>

            {/* Secondary CTA */}
            <button className="box-border flex flex-row justify-center items-center px-[24px] h-[48px] bg-[#FAF8F4] border border-[#B45A08] rounded-[5px] gap-[16px] hover:bg-[#F2EFE8] transition-colors group">
              <span className="font-medium text-[16px] leading-[20px] text-[#B45A08]">
                Explore Services
              </span>
              <ArrowRight className="w-[20px] h-[20px] text-[#D4A017] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </button>
          </div>

        </div>

        {/* Stats Panel */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[641px] w-[1272px] h-[160px] bg-[#FEFDFB] rounded-[16px] shadow-[0px_8px_28px_rgba(64,46,26,0.12)] flex items-center px-[25px]">

          <div className="flex flex-row items-center w-full justify-between px-4">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>

                {/* Metric */}
                <div className="flex flex-row items-center gap-[24px] w-[250px]">
                  {/* Icon */}
                  <div className="w-[56px] h-[56px] shrink-0 flex items-center justify-center">
                    {stat.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <div className="font-['Playfair_Display'] font-semibold text-[38px] leading-[42px] text-[#1A1A1A]">
                      {stat.value}
                    </div>
                    <div className="font-medium text-[14px] leading-[19px] text-[#1A1A1A] whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Divider (except for last item) */}
                {index < stats.length - 1 && (
                  <div className="w-[1px] h-[88px] bg-[#B85E08] opacity-[0.22]"></div>
                )}

              </React.Fragment>
            ))}
          </div>

        </div>

      </div>

      {/* --- Second Part: Culinary Visionary --- */}
      <div className="w-full bg-[#FAF7EF] flex justify-center py-[20px] shrink-0 z-20 relative">
        <div className="w-[1440px] flex justify-center items-center">

          {/* Main Flex Container */}
          <div className="w-[1277px] flex flex-row justify-between items-center gap-[18px]">

            {/* Left Image (Chef) */}
            <div className="relative w-[520px] h-[494px] shrink-0 flex items-center justify-center">
              <img src={frame152} alt="Chef Michael" className="max-w-full max-h-full object-contain" />
            </div>

            {/* Right Content Area */}
            <div className="flex flex-row justify-between items-start w-[757px] h-[398px]">

              {/* Text and Button Column */}
              <div className="flex flex-col items-start gap-[34px] w-[454px]">

                {/* Text Block */}
                <div className="flex flex-col items-start gap-[16px] w-[454px]">

                  {/* Headings */}
                  <div className="flex flex-col items-start gap-[17px] w-full">
                    {/* Kicker */}
                    <div className="font-semibold text-[16px] leading-[19px] tracking-[1.2px] text-[#B45A08] uppercase">
                      COOK. CREATE. CONNECT.
                    </div>

                    {/* Main Headings */}
                    <div className="flex flex-col items-start gap-[2px] w-full">
                      <div className="font-['Playfair_Display'] font-semibold text-[40px] leading-[43px] text-[#0E0D0C]">
                        More Than A Chef,
                      </div>
                      <div className="flex flex-row items-center gap-[10px]">
                        <span className="font-['Playfair_Display'] font-semibold text-[40px] leading-[53px] text-[#0E0D0C]">
                          A
                        </span>
                        <span className="font-['Playfair_Display'] italic font-normal text-[38px] leading-[51px] text-[#B45A08]">
                          Culinary
                        </span>
                        <span className="font-['Playfair_Display'] font-semibold text-[40px] leading-[53px] text-[#0E0D0C]">
                          Visionary
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="w-[454px] h-[138px] font-['Inter'] font-normal text-[14.5px] leading-[23px] tracking-[0px] text-[#0E0D0C] whitespace-nowrap">
                    Chef Michael is a celebrity chef, culinary trainer and hospitality<br />
                    consultant with over 15 years of experience across luxury hotel<br />
                    kitchens, restaurant consulting and digital media. Through YCM<br />
                    Studio, he has built a community of over 2 million food enthusiasts<br />
                    while helping aspiring chefs, restaurants and brands achieve<br />
                    measurable culinary success.
                  </div>
                </div>

                {/* Read His Story Button */}
                <button className="box-border flex flex-row justify-center items-center px-[24px] h-[44px] bg-[#FAF8F4] border border-[#B45A08] rounded-[5px] gap-[16px] hover:bg-[#F2EFE8] transition-colors group cursor-pointer">
                  <span className="font-medium text-[16px] leading-[20px] text-[#B45A08]">
                    Read His Story
                  </span>
                  <ArrowRight className="w-[20px] h-[20px] text-[#D4A017] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </button>
              </div>

              {/* Gallery / Culinary Moments */}
              <div className="flex flex-col items-start gap-[4px] w-[268px] shrink-0">
                <img src={hero3} alt="Culinary Moment 1" className="w-[268px] h-[130px] object-cover" />
                <img src={hero4} alt="Culinary Moment 2" className="w-[268px] h-[130px] object-cover" />
                <img src={hero5} alt="Culinary Moment 3" className="w-[268px] h-[130px] object-cover" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- Third Part: Signature Dishes --- */}
      <div className="w-full bg-[#FFFFFF] flex justify-center shrink-0 z-10 relative overflow-hidden h-[866px]">
        <div className="w-[1440px] relative h-[866px]">
          
          {/* Frame 173 */}
          <div className="absolute left-[86px] top-[58px] w-[1300px] h-[754px] flex flex-row items-center gap-[30px]">
            
            {/* Frame 149 (Main Content) */}
            <div className="flex flex-col items-center gap-[32px] w-[1226px] h-[754px]">
              
              {/* Frame 148 */}
              <div className="flex flex-col items-start gap-[52px] w-[1226px] h-[666px]">
                
                {/* Frame 147 (Header Section) */}
                <div className="flex flex-col items-start gap-[24px] w-[1226px] h-[168px]">
                  
                  {/* Frame 144 (Eyebrow) */}
                  <div className="flex flex-row items-center gap-[14px] w-[377px] h-[19px]">
                    <div className="w-[60px] h-[1px] bg-[#B45A08] opacity-[0.35] shrink-0" />
                    <span className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[5px] text-[#B45A08] uppercase whitespace-nowrap shrink-0">
                      SIGNATURE DISHES
                    </span>
                    <div className="w-[60px] h-[1px] bg-[#B45A08] opacity-[0.35] shrink-0" />
                  </div>

                  {/* Frame 146 */}
                  <div className="flex flex-row justify-between items-center gap-[292px] w-[1226px] h-[125px]">
                    
                    {/* Frame 145 (Headings) */}
                    <div className="flex flex-col items-start gap-[7px] w-[435px]">
                      <h2 className="font-['Playfair_Display'] font-semibold text-[44px] leading-[59px] text-[#0E0D0C] m-0">
                        Crafted With Passion,
                      </h2>
                      <h2 className="font-['Playfair_Display'] italic font-normal text-[44px] leading-[59px] text-[#D4A017] m-0">
                        Served With Purpose.
                      </h2>
                    </div>

                    {/* Section / Introduction */}
                    <div className="w-[443px] font-['Inter'] font-normal text-[16px] leading-[28px] text-[#0E0D0C]">
                      A curated look at Chef Michael's signature creations — made with the finest ingredients and a touch of creativity.
                    </div>
                    
                  </div>
                </div>

                {/* Dish Cards Row */}
                <div className="flex flex-row items-start gap-[14px] w-[1226px] h-[446px]">
                  {signatureDishes.map((dish, idx) => (
                    <div key={idx} className="w-[296px] h-[446px] bg-[#FEFDFB] rounded-[10px] overflow-hidden flex flex-col items-center">
                      {/* Image */}
                      <div className="w-[296px] h-[300px] shrink-0">
                        <img src={dish.image} alt={dish.title} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Content below image */}
                      <div className="w-full h-[146px] flex flex-col items-center justify-center gap-[15px] pt-[10px]">
                        <Ornament />
                        <div className="flex flex-col items-center gap-[10px] w-full px-4">
                          <h3 className="font-['Playfair_Display'] font-semibold text-[19px] leading-[25px] text-center text-[#0E0D0C] m-0 w-[240px]">
                            {dish.title}
                          </h3>
                          <p className="font-['Playfair_Display'] italic font-normal text-[15px] leading-[20px] text-center text-[#B45A08] m-0 w-[240px] px-2 whitespace-pre-wrap">
                            {dish.description}
                          </p>
                        </div>
                        <Ornament />
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* View Full Menu Button */}
              <button className="box-border flex flex-row justify-center items-center px-[24px] py-[16px] w-[250px] h-[56px] bg-[#FAF8F4] border border-[#B45A08] rounded-[5px] gap-[16px] hover:bg-[#F2EFE8] transition-colors group cursor-pointer">
                <span className="font-['Inter'] font-medium text-[16px] leading-[20px] text-[#B45A08]">
                  View Full Menu
                </span>
                <ArrowRight className="w-[20px] h-[20px] text-[#D4A017] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </button>

            </div>

            {/* Frame 172 (Carousel Arrows) */}
            <div className="flex flex-col items-start gap-[18px] w-[44px] h-[106px] shrink-0">
              <button className="box-border flex items-center justify-center w-[44px] h-[44px] rounded-full border border-[rgba(180,90,8,0.45)] hover:bg-[#FAF8F4] transition-colors cursor-pointer group">
                <ArrowLeft className="w-[18px] h-[18px] text-[#B45A08] group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </button>
              <button className="box-border flex items-center justify-center w-[44px] h-[44px] rounded-full border border-[rgba(180,90,8,0.45)] hover:bg-[#FAF8F4] transition-colors cursor-pointer group">
                <ArrowRight className="w-[18px] h-[18px] text-[#B45A08] group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}
