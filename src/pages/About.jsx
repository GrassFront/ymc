import React from 'react';
import { Link } from 'react-router-dom';
import aboutFirstImg from '../assets/aboutfirst.png';
import about2 from '../assets/about2.png';
import about3Youtube from '../assets/about3.png';
import about3Dish from '../assets/about3 (2).png';
import about4 from '../assets/about4.png';
import abiut5 from '../assets/abiut5.png';
import about6 from '../assets/about6.png';
import about7 from '../assets/about7.png';
import aboutlst from '../assets/aboutlst.png';
import philosphy from '../assets/philosphy.png';
import ornamentImg from '../assets/Ornament.png';
import workImg from '../assets/work.png';

export default function About() {
  const Ornament = () => (
    <img src={ornamentImg} alt="Ornament line" className="w-full h-full object-contain" />
  );

  return (
    <div className="w-full bg-[#FFFFFF] flex flex-col items-center font-['Inter']">

      {/* --- Full Width Hero Section --- */}
      <div className="w-full min-h-0 md:min-h-[659px] h-auto relative flex flex-col md:flex-row justify-center items-center md:items-start bg-[#FBFAF6] py-6 md:py-0 overflow-hidden">

        {/* Image anchored to right on desktop / centered top on mobile */}
        <div className="w-full max-w-sm mx-auto md:mx-0 md:max-w-[900px] md:w-[55vw] md:absolute md:right-0 md:top-0 h-auto md:h-[659px] z-[1] shrink-0 px-4 md:px-0 mb-6 md:mb-0">
          <img
            src={aboutFirstImg}
            alt="Chef Michael"
            className="w-full max-w-sm mx-auto h-auto object-contain md:object-cover md:h-full md:max-w-none"
          />

          {/* Hero / Photo Fade (anchored to left edge of the image container on desktop) */}
          <div
            className="hidden md:block absolute left-0 top-0 w-[103px] h-[659px] z-[2] pointer-events-none"
            style={{ background: 'linear-gradient(88.3deg, #FBFAF6 1.44%, rgba(251, 249, 244, 0.92) 43.47%, rgba(251, 249, 244, 0) 92.03%)' }}
          />
        </div>

        {/* 1440px Grid Container for Content */}
        <div className="w-full max-w-[1440px] min-h-0 md:min-h-[659px] h-auto relative z-[3] flex flex-col md:flex-row pointer-events-none">

          {/* Biography Panel (Left) */}
          <div className="flex flex-col items-center md:items-start w-full md:w-[640px] min-h-0 md:min-h-[659px] h-auto px-4 sm:px-6 md:px-12 lg:px-[86px] pt-2 md:pt-[62px] pb-6 md:pb-[46px] gap-[16px] shrink-0 box-border pointer-events-auto text-center md:text-left">

            {/* Eyebrow */}
            <div className="w-full max-w-[74px] h-[18px] font-['Inter'] font-semibold text-[15px] leading-[18px] tracking-[0.24em] text-[#B3661F] uppercase shrink-0 whitespace-nowrap">
              WHO IS
            </div>

            {/* Name Heading */}
            <h1 className="w-full max-w-[410px] font-['Playfair_Display'] font-semibold text-[44px] sm:text-[60px] lg:text-[72px] leading-tight text-[#0B0C0C] m-0 shrink-0 flex items-center justify-center md:justify-start">
              Chef
            </h1>

            {/* Name Accent */}
            <h1 className="w-full max-w-[410px] font-['Playfair_Display'] font-semibold text-[44px] sm:text-[60px] lg:text-[72px] leading-tight text-[#D4A017] m-0 shrink-0 flex items-center justify-center md:justify-start">
              Michael
            </h1>

            {/* Ornament */}
            <div className="w-[205px] h-[18px] shrink-0 mt-[2px] mb-[2px]">
              <Ornament />
            </div>

            {/* Roles */}
            <div className="w-full max-w-[420px] font-['Inter'] font-semibold text-[14px] sm:text-[16px] leading-[19px] text-[#0B0C0C] shrink-0 flex items-center justify-center md:justify-start">
              Celebrity Chef • Food Consultant • Culinary Trainer
            </div>

            {/* Bio Paragraph 1 */}
            <p className="w-full max-w-[420px] font-['Inter'] font-normal text-[14px] leading-[21px] text-[#383836] m-0 shrink-0 mt-[6px]">
              Chef Michael is a celebrity chef, culinary trainer and hospitality consultant with over 15 years of experience across luxury hotel kitchens, restaurant consulting and digital media.
            </p>

            {/* Bio Paragraph 2 */}
            <p className="w-full max-w-[420px] font-['Inter'] font-normal text-[14px] leading-[21px] text-[#383836] m-0 shrink-0">
              Through YCM Studio, he has built a community of over 2 million food enthusiasts while helping aspiring chefs, restaurants and brands achieve measurable culinary success.
            </p>

            {/* Signature */}
            <div className="w-[168px] h-[40px] font-['Playfair_Display'] italic font-normal text-[30px] leading-[40px] text-[#0B0C0C] shrink-0 mt-[4px]">
              Chef Michael
            </div>

          </div>

          {/* Chef Quote (Overlaid on Image, positioned relative to grid) */}
          <div className="relative md:absolute left-0 md:left-[973px] top-0 md:top-[469px] w-full max-w-[440px] min-h-[150px] h-auto bg-[#FFFFFF] flex flex-row items-start pt-[23px] pr-[24px] pb-[20px] pl-[28px] gap-[14px] box-border shadow-sm pointer-events-auto mt-6 md:mt-0 mx-4 sm:mx-6 md:mx-0">
            {/* Quote Mark */}
            <div className="w-[22px] h-[64px] font-['Playfair_Display'] font-semibold text-[48px] leading-[64px] text-[#B3661F] shrink-0">
              “
            </div>

            {/* Quote Copy */}
            <div className="flex flex-col items-start gap-[8px] w-full max-w-[340px] shrink-0 mt-[6px]">
              {/* Quote text */}
              <div className="w-full font-['Playfair_Display'] font-semibold text-[18px] sm:text-[20px] leading-[28px] text-[#131210]">
                Food is not just what we serve.<br />It is what people remember.
              </div>
              {/* Attribution */}
              <div className="w-full font-['Inter'] font-semibold text-[13.5px] leading-[16px] text-[#B3661F] flex items-center">
                — Chef Michael
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Our Journey Section --- */}
      <div className="w-full bg-[#FFFFFF] flex justify-center overflow-hidden pb-16">
        <div className="w-full max-w-[1440px] min-h-[1086px] flex flex-col lg:flex-row items-start lg:items-center justify-between p-0 box-border relative isolate mx-auto px-4 sm:px-8 lg:px-0 gap-8 lg:gap-0">

          {/* Journey Story (Left Column) */}
          <div className="flex flex-col items-start w-full lg:w-[500px] h-auto lg:h-[1050px] pt-8 lg:pt-[80px] pr-4 sm:pr-8 lg:pr-[32px] pb-8 lg:pb-[42px] pl-4 sm:pl-12 lg:pl-[86px] gap-[18px] box-border shrink-0">

            <div className="font-['Inter'] font-semibold text-[14px] leading-[17px] tracking-[0.22em] text-[#B0631F] uppercase shrink-0 whitespace-nowrap">
              OUR JOURNEY
            </div>

            <div className="w-full max-w-[390px] font-['Playfair_Display'] font-semibold text-[32px] sm:text-[44px] leading-tight text-[#0F0F0E] shrink-0 flex items-center">
              15+ Years of
            </div>

            <div className="w-full max-w-[390px] font-['Playfair_Display'] italic font-normal text-[28px] sm:text-[38px] leading-tight text-[#B0631F] shrink-0 flex items-center">
              Culinary Excellence
            </div>

            <div className="w-full max-w-[390px] font-['Inter'] font-normal text-[14px] leading-[23px] text-[#403D38] shrink-0 mt-[4px]">
              From professional kitchens to inspiring millions, here's a journey built on passion, learning and relentless dedication.
            </div>

            {/* Portrait Collage */}
            <div className="w-full max-w-[390px] h-[550px] sm:h-[690px] relative mt-[20px] shrink-0">

              {/* Main Image */}
              <div className="absolute left-0 top-0 w-full max-w-[390px] h-[450px] sm:h-[564px] bg-black">
                <img src={about2} alt="Chef with awards" className="w-full h-full object-cover" />
              </div>

              {/* Experience Badge */}
              <div className="absolute right-4 sm:left-[265px] top-[300px] sm:top-[378px] w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] bg-[#D1A875] border-[2px] border-[#A66626] rounded-full flex flex-col justify-center items-center gap-[4px] z-[2] box-border shadow-sm">
                <div className="font-['Playfair_Display'] font-semibold text-[32px] sm:text-[42px] leading-none text-[#0F0F0E] text-center">
                  15+
                </div>
                <div className="font-['Inter'] font-semibold text-[9px] sm:text-[11px] leading-[13px] text-[#2E2114] text-center flex items-center justify-center">
                  YEARS OF<br />EXPERIENCE
                </div>
              </div>

              {/* Bottom Photo Row */}
              <div className="absolute left-[-4px] bottom-[0px] w-full max-w-[398px] h-[220px] sm:h-[272px] flex flex-row items-end z-[1]">
                {/* YCM Photo (Youtube) */}
                <div className="w-[180px] sm:w-[223px] h-[190px] sm:h-[237px] bg-[#FFFFFF] p-[8px] box-border shadow-[0px_3px_8px_rgba(0,0,0,0.14)] rotate-[2.44deg] -mr-[40px] sm:-mr-[60px] z-[1] flex flex-col">
                  <img src={about3Youtube} className="w-full h-full object-cover" alt="YouTube content" />
                </div>

                {/* Journey Photo (Dish) */}
                <div className="w-[170px] sm:w-[221px] h-[100px] sm:h-[128px] bg-[#FFFFFF] p-[8px] box-border shadow-[0px_3px_8px_rgba(0,0,0,0.14)] rotate-[-1.61deg] z-[2] mb-[12px] flex flex-col">
                  <img src={about3Dish} className="w-full h-full object-cover" alt="Dish" />
                </div>
              </div>

            </div>
          </div>
          {/* Timeline (Middle Column) */}
          <div className="w-full lg:w-[540px] h-auto min-h-[1031px] pt-8 lg:pt-[64px] pb-8 lg:pb-[36px] flex flex-col justify-between items-center shrink-0 box-border gap-6 lg:gap-0">

            {[
              {
                step: '01',
                title: 'Started in professional 4-star\nand 5-star hotel kitchens across India',
                body: 'Mastering culinary operations, menu development,\nkitchen management, and food innovation.'
              },
              {
                step: '02',
                title: 'Earned an International\nCulinary Certification\nfrom the Moroccan Institute\nof Culinary Art.',
                body: ''
              },
              {
                step: '03',
                title: 'Expanded into culinary education,\nrestaurant consultancy, and\ndigital content creation.',
                body: 'Bringing knowledge, creativity and real-world\nexperience to aspiring chefs and brands.'
              },
              {
                step: '04',
                title: 'Founded YCM Studio',
                body: 'to help aspiring chefs, restaurant owners,\nand food brands achieve real business and\nculinary success.'
              },
              {
                step: '05',
                title: 'Built a digital community\nof 2M+ across Instagram, YouTube\nand Facebook.',
                body: ''
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center w-full max-w-[500px] min-h-[190px] gap-[12px] sm:gap-[18px] p-0 mx-auto">

                {/* Rail */}
                <div className="flex flex-col items-center w-[48px] sm:w-[62px] min-h-[190px] p-0 shrink-0">
                  {/* Top Line */}
                  <div className={`w-[1px] h-[55px] bg-[#C7A880] ${index === 0 ? 'hidden' : ''}`}></div>

                  {/* Step Circle */}
                  <div className="w-[44px] sm:w-[56px] h-[44px] sm:h-[56px] bg-[#FBFAF6] border border-[#B89463] rounded-full flex flex-row justify-center items-center p-0 box-border shrink-0">
                    <div className="font-['Inter'] font-semibold text-[18px] sm:text-[23px] leading-[28px] text-[#B0631F]">
                      {item.step}
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className={`w-[1px] bg-[#C7A880] ${index === 0 ? 'h-[134px]' : index === 4 ? 'hidden' : 'h-[79px]'}`}></div>
                </div>

                {/* Connector */}
                <div className="flex flex-row items-center w-[24px] sm:w-[48px] h-[18px] p-0 shrink-0">
                  <div className="w-full h-[1px] bg-[#BD8C47]"></div>
                  <div className="w-[7px] h-[7px] bg-[#B0631F] rounded-full shrink-0"></div>
                </div>

                {/* Copy */}
                <div className="flex flex-col items-start gap-[12px] w-full max-w-[350px] p-0 shrink-0">
                  <div className="w-full font-['Inter'] font-semibold text-[14px] sm:text-[16px] leading-[22px] text-[#0F0F0E] whitespace-pre-wrap">
                    {item.title}
                  </div>
                  {item.body && (
                    <div className="w-full font-['Inter'] font-normal text-[12px] leading-[18px] text-[#4D4740] whitespace-pre-wrap">
                      {item.body}
                    </div>
                  )}
                </div>

              </div>
            ))}

          </div>

          {/* Journey Photos (Right Column) */}
          <div className="w-full lg:w-[360px] h-auto lg:h-[1031px] pt-8 lg:pt-[65px] pb-[40px] flex flex-row lg:flex-col items-center justify-center flex-wrap lg:flex-nowrap shrink-0 box-border z-[5] gap-4 lg:gap-0">

            {[
              { src: about4, rotate: '4deg', objPos: '50% 15%' },
              { src: abiut5, rotate: '-3deg', objPos: '50% 20%' },
              { src: about6, rotate: '2deg', objPos: '50% 15%' },
              { src: about7, rotate: '-3deg', objPos: '50% 10%' }, // Desk (4th)
              { src: aboutlst, rotate: '3deg', objPos: '50% 15%' } // Plaque (5th)
            ].map((photo, i) => (
              <div
                key={i}
                className="flex flex-col items-start p-[8px] w-[240px] sm:w-[270px] h-[170px] sm:h-[190px] bg-[#FFFFFF] shadow-[0px_3px_8px_rgba(0,0,0,0.14)] shrink-0 box-border relative"
                style={{
                  transform: `rotate(${photo.rotate})`,
                  marginTop: i === 0 ? '0px' : '-10px lg:-36px'
                }}
              >
                <img src={photo.src} className="w-full h-full object-cover shrink-0" style={{ objectPosition: photo.objPos }} alt={`Journey photo ${i + 1}`} />
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* --- Section 3: My Philosophy --- */}
      <div className="w-full bg-[#FCFBF9] flex justify-center overflow-hidden">
        <div className="w-full max-w-[1440px] min-h-[601px] h-auto bg-[#FCFBF9] flex flex-col lg:flex-row justify-between items-start shrink-0 mx-auto relative px-4 sm:px-8 lg:px-0 py-8 lg:py-0 gap-8 lg:gap-0">
          
          {/* Left Image */}
          <div 
            className="w-full lg:w-[654px] h-[350px] sm:h-[450px] lg:h-[601px] bg-cover bg-center shrink-0 rounded lg:rounded-none" 
            style={{ 
              backgroundImage: `url(${philosphy})`,
            }}
          ></div>
          
          {/* Philosophy Panel */}
          <div className="w-full lg:w-[694px] min-h-[610px] h-auto flex flex-row items-start shrink-0 relative z-[2]">
            
            {/* Philosophy Copy */}
            <div className="w-full max-w-[570px] h-auto flex flex-col items-start pt-4 lg:pt-[62px] pr-4 sm:pr-8 lg:pr-[25px] pb-4 lg:pb-[42px] pl-4 sm:pl-8 lg:pl-[58px] gap-[18px] box-border shrink-0">
              
              {/* Eyebrow */}
              <div className="h-[17px] font-['Inter'] font-semibold text-[14px] leading-[17px] tracking-[0.2em] text-[#B3631B] shrink-0 whitespace-nowrap">
                MY PHILOSOPHY
              </div>
              
              {/* Heading */}
              <div className="w-full max-w-[500px] font-['Playfair_Display'] font-semibold text-[32px] sm:text-[44px] leading-tight sm:leading-[59px] text-[#0E0E0D] shrink-0">
                Cook. Create. Connect.
              </div>
              
              {/* Ornament */}
              <div className="w-[205px] h-[18px] shrink-0 flex items-center">
                <Ornament />
              </div>
              
              {/* Body */}
              <div className="w-full max-w-[500px] font-['Inter'] font-normal text-[14px] sm:text-[14.5px] leading-[24px] text-[#403D38] shrink-0">
                I believe great cooking starts with fresh ingredients, passion and respect for every flavour. Simple techniques, balanced seasoning and attention to detail can transform ordinary ingredients into memorable dishes.
              </div>
              
              {/* Quote Box */}
              <div className="w-full max-w-[500px] min-h-[150px] h-auto flex flex-row items-start pt-[14px] pb-[10px] gap-[14px] box-border shrink-0">
                
                {/* Quote Mark */}
                <div className="w-[24px] h-[71px] font-['Playfair_Display'] font-semibold text-[44px] sm:text-[53px] leading-[71px] text-[#B3631B] shrink-0">
                  “
                </div>
                
                {/* Quote Copy */}
                <div className="w-full max-w-[420px] flex flex-col items-start gap-[10px] shrink-0">
                  
                  {/* Quote Text */}
                  <div className="w-full font-['Playfair_Display'] italic font-normal text-[18px] sm:text-[22px] leading-[29px] text-[#0E0E0D] shrink-0">
                    Food should not only satisfy hunger; it should create happiness and bring people together.
                  </div>
                  
                  {/* Attribution */}
                  <div className="w-full font-['Inter'] font-semibold text-[14px] leading-[17px] text-[#B3631B] shrink-0">
                    — Chef Michael
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>

      {/* --- Section 4: Work With Chef Michael CTA --- */}
      <div className="w-full bg-[#FFFFFF] flex justify-center overflow-hidden relative py-8 lg:py-0">
        {/* Full-Bleed Background Image */}
        <div 
          className="absolute left-0 right-0 top-0 lg:top-[-5px] h-full lg:h-[327px] bg-cover bg-[right_center] z-[1]" 
          style={{ backgroundImage: `url(${workImg})` }}
        ></div>

        <div className="w-full max-w-[1440px] min-h-[317px] h-auto relative shrink-0 mx-auto z-[2] px-4 sm:px-12 lg:px-0 py-8 lg:py-0">
          {/* Copy Content */}
          <div className="relative lg:absolute left-0 lg:left-[85px] top-0 lg:top-[43px] w-full max-w-[500px] min-h-[236px] flex flex-col items-start gap-[16px] p-0 z-[2]">
            
            {/* Eyebrow */}
            <div className="h-[17px] font-['Inter'] font-semibold text-[14px] leading-[17px] tracking-[0.18em] text-[#C26E1F] shrink-0 whitespace-nowrap uppercase">
              Let's create something amazing
            </div>
            
            {/* Heading */}
            <div className="w-full max-w-[488px] font-['Playfair_Display'] font-semibold text-[32px] sm:text-[44px] leading-tight sm:leading-[59px] text-[#0E0E0D] shrink-0">
              Work With Chef Michael
            </div>
            
            {/* Body */}
            <div className="w-full max-w-[500px] font-['Inter'] font-medium text-[16px] sm:text-[18px] leading-[22px] text-[#403D38] shrink-0">
              From private dining to full restaurant launches, let's bring your culinary vision to life.
            </div>
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="flex flex-row justify-between items-center w-full max-w-[305px] h-[clamp(46px,1.5vw+36px,64px)] bg-[#D4A017] border border-[#ED9E47] px-[clamp(16px,1.5vw+10px,30px)] pr-[clamp(14px,1.5vw+8px,24px)] box-border shrink-0 cursor-pointer hover:bg-[#c29215] transition-colors mt-[2px] shadow-sm no-underline"
            >
              <span className="font-['Inter'] font-semibold text-[clamp(13.5px,0.8vw+10px,15px)] leading-none text-[#F5F2EB] whitespace-nowrap">
                Work With Chef Michael
              </span>
              <span className="font-['Inter'] font-normal text-[clamp(16px,1vw+12px,22px)] leading-none text-[#F5F2EB]">
                →
              </span>
            </Link>
            
          </div>
        </div>
      </div>

    </div>
  );
}
