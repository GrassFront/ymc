import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import vectorLogo from '../assets/vectorold.png';
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
import circular1 from '../assets/circluar.png';
import circular2 from '../assets/circlular2nd.png';
import circular3 from '../assets/circular 3.png';
import circular4 from '../assets/circluar 4.png';
import circular5 from '../assets/circlur5.png';
import rajdhaniLogo from '../assets/rajdhani.png';
import bbqLogo from '../assets/bbq.png';
import vadilalLogo from '../assets/vadilal1.png';
import wellwithLogo from '../assets/wellwith.png';
import wickedLogo from '../assets/wicked.png';
import kamaaLogo from '../assets/kamaa.png';
import jankiLogo from '../assets/janki.png';
import woodenLogo from '../assets/wooden.png';
import vectorImage from '../assets/vectorold.png';
import ornamentImg from '../assets/Ornament2.png';

// Consultancy Project Images
import kamaaProjectImg from '../assets/kamaclub.png';
import sissuProjectImg from '../assets/cafesisu.png';
import jankiProjectImg from '../assets/jankibakery.png';
import sinaProjectImg from '../assets/sinabeackclub.png';
import wingsProjectImg from '../assets/worldsofwing.png';

// Awards Images
import celebChefImg from '../assets/bestcelebchef.png';
import foodConsultantImg from '../assets/bestfoodconsultnt.png';
import kingChefImg from '../assets/kingchef.png';

const awardsData = [
  {
    image: celebChefImg,
    name: 'Best Celebrity Chef',
    description: 'Awarded by Padma Shri\nChef Sanjeev Kapoor.',
    year: '2025'
  },
  {
    image: foodConsultantImg,
    name: 'Best Food Consultant',
    description: 'For outstanding contribution\nto the hospitality industry.',
    year: '2025'
  },
  {
    image: kingChefImg,
    name: 'King Chef Award',
    description: 'Presented for excellence\nin culinary arts.',
    year: '2024'
  }
];

// Contact CTA Images
import contactLeftImg from '../assets/herolastleft.png';
import contactRightImg from '../assets/serviceslast.png';

const consultancyProjects = [
  {
    name: 'Kamaa Club',
    scope: 'Concept Development,\nMenu Engineering & Setup',
    location: 'Thailand Pattaya',
    image: kamaaProjectImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    )
  },
  {
    name: 'Cafe Sissu',
    scope: 'Kitchen Setup, Operations\n& Staff Training',
    location: 'Lahaul Spiti',
    image: sissuProjectImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.87A4 4 0 0 1 7.41 6M18 13.87A4 4 0 0 0 16.59 6" />
        <path d="M12 3v3" />
        <path d="M12 6a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4Z" />
        <path d="M2 14h20" />
      </svg>
    )
  },
  {
    name: 'Janki Bakery',
    scope: 'Complete Setup, Costing\n& Standardization',
    location: 'Rohtak Haryana',
    image: jankiProjectImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    )
  },
  {
    name: 'Sina Beach Club',
    scope: 'Operational Restructuring\n& Menu Revamp',
    location: 'Thailand',
    image: sinaProjectImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="2 8 8 2 14 8 20 2" />
      </svg>
    )
  },
  {
    name: 'World of Wings',
    scope: 'F&B Strategy, Menu Design\n& Staff Training',
    location: 'Chandigarh',
    image: wingsProjectImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    )
  }
];

const servicesData = [
  {
    number: '01',
    title: 'Private Dining',
    tagline: 'EXCLUSIVE. PERSONAL.\nUNFORGETTABLE.',
    description: 'Bespoke, chef-led dining\nexperiences for homes,\ncelebrations, and\nintimate events.',
    icon: circular1,
  },
  {
    number: '02',
    title: 'Consulting\n(YCM Studio)',
    tagline: 'STRATEGY. DESIGN. SUCCESS.',
    description: 'Restaurant, café, and\nhotel consultancy — from\nkitchen planning to full\noperational launch.',
    icon: circular2,
  },
  {
    number: '03',
    title: 'Workshops &\nMasterclasses',
    tagline: 'LEARN. PRACTICE. MASTER.',
    description: 'Hands-on culinary training\nfor aspiring chefs and\nfood enthusiasts of\nall levels.',
    icon: circular3,
  },
  {
    number: '04',
    title: 'Events',
    tagline: 'ENGAGE. ENTERTAIN.\nINSPIRE.',
    description: 'Live culinary appearances,\nfestivals, and corporate\nhospitality experiences\nthat leave a lasting impact.',
    icon: circular4,
  },
  {
    number: '05',
    title: 'Brand\nCollaborations',
    tagline: 'CREATE. COLLABORATE.\nELEVATE.',
    description: 'Sponsored content, recipe\ndevelopment, and campaign\npartnerships for food &\nlifestyle brands.',
    icon: circular5,
  }
];

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
      <line y1="4" x2="36" y2="4" stroke="#B45A08" strokeWidth="1" />
      <line x1="50" y1="4" x2="86" y2="4" stroke="#B45A08" strokeWidth="1" />
      <circle cx="43" cy="4" r="3.5" stroke="#B45A08" strokeWidth="1" />
    </svg>
  );

  return (
    <div className="w-full bg-[#FBF9F4] flex flex-col items-center overflow-x-hidden font-['Inter'] relative min-h-[836px]">

      {/* Background Image Area (Bleeds to right edge of screen on desktop) */}
      <div
        className="absolute top-0 right-0 h-[650px] sm:h-[754px] bg-no-repeat bg-cover bg-left z-0 w-full lg:w-[calc(776px_+_max(0px,_(100%_-_1440px)_/_2))] opacity-30 lg:opacity-100"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      >
        {/* Vertical Left Fade */}
        <div
          className="hidden lg:block absolute left-[-150px] top-0 w-[200px] h-full"
          style={{ background: 'linear-gradient(90deg, #FBF9F4 0%, rgba(251, 249, 244, 0.72) 62%, rgba(251, 249, 244, 0) 100%)' }}
        ></div>

        {/* Horizontal Bottom Fade */}
        <div
          className="absolute left-0 bottom-[-50px] w-full h-[150px]"
          style={{ background: 'linear-gradient(0deg, #FBF9F4 0%, rgba(251, 249, 244, 0.8) 50%, rgba(251, 249, 244, 0) 100%)' }}
        ></div>
      </div>

      {/* Desktop 1440 Container for Content */}
      <div className="relative w-full max-w-[1440px] min-h-[836px] lg:h-[836px] shrink-0 z-10 pointer-events-auto flex flex-col justify-between pt-6 lg:pt-0 pb-12 lg:pb-0 px-4 sm:px-8 lg:px-[110px]">

        {/* Hero Editable Content */}
        <div className="relative lg:absolute left-0 lg:left-[110px] top-0 lg:top-[45px] w-full max-w-[541px] min-h-[585px] flex flex-col justify-start">

          {/* Kicker */}
          <div className="flex flex-row items-center gap-[7px] mb-3">
            <span className="font-semibold text-[14px] sm:text-[16px] leading-[19px] tracking-[1.4px] text-[#B55906]">
              OYE HOYE HOYE HOYE
            </span>
            <div className="w-[30px] h-[2px] bg-[#B55906]"></div>
          </div>

          {/* Headline */}
          <div className="w-full max-w-[541px]">
            <h1 className="font-['Playfair_Display'] font-medium text-[42px] sm:text-[60px] lg:text-[78px] leading-[1.1] sm:leading-[1.15] lg:leading-[104px] tracking-[0.02em] text-[#090807] m-0">
              Turning Every
            </h1>
            <h1 className="font-['Playfair_Display'] font-medium text-[42px] sm:text-[60px] lg:text-[78px] leading-[1.1] sm:leading-[1.15] lg:leading-[104px] tracking-[0.02em] text-[#090807] m-0">
              Dish Into A
            </h1>
          </div>

          {/* Script */}
          <div
            className="w-full max-w-[430px] font-['Allura'] font-normal text-[36px] sm:text-[56px] lg:text-[72px] leading-tight lg:leading-[78px] tracking-[0px] text-[#D4A017] -rotate-[3.68deg] my-1 sm:my-2"
          >
            Masterpiece!
          </div>

          {/* Ornament */}
          <div className="w-[158px] h-[12px] flex items-center justify-center my-3">
            <svg width="158" height="12" viewBox="0 0 158 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="6" x2="70" y2="6" stroke="#B45A08" strokeWidth="1" />
              <line x1="88" y1="6" x2="158" y2="6" stroke="#B45A08" strokeWidth="1" />
              <rect x="79" y="0" width="8.48528" height="8.48528" transform="rotate(45 79 0)" stroke="#B45A08" strokeWidth="1" />
            </svg>
          </div>

          {/* Roles */}
          <div className="w-full max-w-[470px] font-['Inter'] font-semibold text-[14px] sm:text-[15.5px] leading-[24px] tracking-[0px] text-[#090807] mb-3">
            Celebrity Chef • Food Consultant • Culinary Trainer
          </div>

          {/* Description */}
          <div className="w-full max-w-[465px] font-['Inter'] font-normal text-[14px] sm:text-[15.5px] leading-[25px] tracking-[0px] text-[#090807] mb-6">
            Chef Michael brings 15+ years of culinary excellence to kitchens, brands, and dining tables across India and beyond.
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-[25px] w-full max-w-[480px]">
            {/* Primary CTA */}
            <button className="box-border flex flex-row justify-center items-center px-[clamp(10px,1vw+4px,24px)] py-[clamp(6px,0.6vw+2px,16px)] h-[clamp(36px,1vw+28px,48px)] bg-[#D4A017] rounded-[5px] gap-[clamp(6px,0.6vw+2px,16px)] hover:bg-[#c29215] transition-colors group cursor-pointer w-full sm:w-auto">
              <span className="font-medium text-[clamp(12.5px,0.6vw+9.5px,16px)] leading-none text-[#FAF8F4] whitespace-nowrap">
                Book Chef Michael
              </span>
              <ArrowRight className="w-[clamp(13px,0.6vw+9px,20px)] h-[clamp(13px,0.6vw+9px,20px)] text-[#FAF8F4] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </button>

            {/* Secondary CTA */}
            <button className="box-border flex flex-row justify-center items-center px-[clamp(10px,1vw+4px,24px)] py-[clamp(6px,0.6vw+2px,16px)] h-[clamp(36px,1vw+28px,48px)] bg-[#FAF8F4] border border-[#B45A08] rounded-[5px] gap-[clamp(6px,0.6vw+2px,16px)] hover:bg-[#F2EFE8] transition-colors group cursor-pointer w-full sm:w-auto">
              <span className="font-medium text-[clamp(12.5px,0.6vw+9.5px,16px)] leading-none text-[#B45A08] whitespace-nowrap">
                Explore Services
              </span>
              <ArrowRight className="w-[clamp(13px,0.6vw+9px,20px)] h-[clamp(13px,0.6vw+9px,20px)] text-[#D4A017] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </button>
          </div>

        </div>

        {/* Stats Panel */}
        <div className="relative lg:absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[641px] mt-8 lg:mt-0 w-full max-w-[1272px] min-h-[160px] h-auto bg-[#FEFDFB] rounded-[16px] shadow-[0px_8px_28px_rgba(64,46,26,0.12)] flex items-center p-4 sm:px-[25px] py-6">

          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center w-full justify-between gap-6 lg:gap-4 px-2 sm:px-4">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>

                {/* Metric */}
                <div className="flex flex-row items-center gap-[16px] sm:gap-[24px] w-full sm:w-[220px] lg:w-[250px] justify-center sm:justify-start">
                  {/* Icon */}
                  <div className="w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] shrink-0 flex items-center justify-center">
                    {stat.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <div className="font-['Playfair_Display'] font-semibold text-[32px] sm:text-[38px] leading-[42px] text-[#1A1A1A]">
                      {stat.value}
                    </div>
                    <div className="font-medium text-[13px] sm:text-[14px] leading-[19px] text-[#1A1A1A] whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Divider (except for last item) */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-[88px] bg-[#B85E08] opacity-[0.22]"></div>
                )}

              </React.Fragment>
            ))}
          </div>

        </div>

      </div>

      {/* --- Second Part: Culinary Visionary --- */}
      <div className="w-full bg-[#FAF7EF] flex justify-center py-[40px] lg:py-[20px] shrink-0 z-20 relative">
        <div className="w-full max-w-[1440px] flex justify-center items-center px-4 sm:px-8 lg:px-0">

          {/* Main Flex Container */}
          <div className="w-full max-w-[1277px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[18px]">

            {/* Left Image (Chef) */}
            <div className="relative w-full max-w-[520px] h-auto max-h-[494px] shrink-0 flex items-center justify-center">
              <img src={frame152} alt="Chef Michael" className="w-full h-auto max-h-[494px] object-contain" />
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[757px] min-h-[398px] gap-8 sm:gap-4">

              {/* Text and Button Column */}
              <div className="flex flex-col items-start gap-[24px] sm:gap-[34px] w-full max-w-[454px]">

                {/* Text Block */}
                <div className="flex flex-col items-start gap-[16px] w-full">

                  {/* Headings */}
                  <div className="flex flex-col items-start gap-[17px] w-full">
                    {/* Kicker */}
                    <div className="font-semibold text-[14px] sm:text-[16px] leading-[19px] tracking-[1.2px] text-[#B45A08] uppercase">
                      COOK. CREATE. CONNECT.
                    </div>

                    {/* Main Headings */}
                    <div className="flex flex-col items-start gap-[2px] w-full">
                      <div className="font-['Playfair_Display'] font-semibold text-[32px] sm:text-[40px] leading-tight sm:leading-[43px] text-[#0E0D0C]">
                        More Than A Chef,
                      </div>
                      <div className="flex flex-row items-center gap-[10px] flex-wrap">
                        <span className="font-['Playfair_Display'] font-semibold text-[32px] sm:text-[40px] leading-tight sm:leading-[53px] text-[#0E0D0C]">
                          A
                        </span>
                        <span className="font-['Playfair_Display'] italic font-normal text-[30px] sm:text-[38px] leading-tight sm:leading-[51px] text-[#B45A08]">
                          Culinary
                        </span>
                        <span className="font-['Playfair_Display'] font-semibold text-[32px] sm:text-[40px] leading-tight sm:leading-[53px] text-[#0E0D0C]">
                          Visionary
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="w-full font-['Inter'] font-normal text-[14px] sm:text-[14.5px] leading-[23px] tracking-[0.01em] text-[#0E0D0C]">
                    Chef Michael is a celebrity chef, culinary trainer and hospitality consultant with over 15 years of experience across luxury hotel kitchens, restaurant consulting and digital media. Through YCM Studio, he has built a community of over 2 million food enthusiasts while helping aspiring chefs, restaurants and brands achieve measurable culinary success.
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
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-[8px] sm:gap-[4px] w-full sm:w-[268px] shrink-0 overflow-x-auto">
                <img src={hero3} alt="Culinary Moment 1" className="w-[200px] sm:w-[268px] h-[130px] object-cover rounded sm:rounded-none shrink-0" />
                <img src={hero4} alt="Culinary Moment 2" className="w-[200px] sm:w-[268px] h-[130px] object-cover rounded sm:rounded-none shrink-0" />
                <img src={hero5} alt="Culinary Moment 3" className="w-[200px] sm:w-[268px] h-[130px] object-cover rounded sm:rounded-none shrink-0" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- Third Part: Signature Dishes --- */}
      <div className="w-full bg-[#FFFFFF] flex justify-center shrink-0 z-10 relative overflow-hidden py-12 lg:py-[58px] min-h-[866px]">
        <div className="w-full max-w-[1440px] relative min-h-[754px] px-4 sm:px-8 lg:px-[86px]">

          {/* Main Container */}
          <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center gap-[30px] mx-auto">

            {/* Main Content */}
            <div className="flex flex-col items-center gap-[32px] w-full max-w-[1226px]">

              {/* Header & Cards Container */}
              <div className="flex flex-col items-start gap-[40px] lg:gap-[52px] w-full">

                {/* Header Section */}
                <div className="flex flex-col items-start gap-[24px] w-full">

                  {/* Eyebrow */}
                  <div className="flex flex-row items-center gap-[14px] w-full max-w-[377px]">
                    <div className="w-[60px] h-[1px] bg-[#B45A08] opacity-[0.35] shrink-0" />
                    <span className="font-['Inter'] font-semibold text-[14px] sm:text-[16px] leading-[19px] tracking-[4px] sm:tracking-[5px] text-[#B45A08] uppercase whitespace-nowrap shrink-0">
                      SIGNATURE DISHES
                    </span>
                    <div className="w-[60px] h-[1px] bg-[#B45A08] opacity-[0.35] shrink-0" />
                  </div>

                  {/* Headings & Subtext */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-[200px] w-full">

                    {/* Headings */}
                    <div className="flex flex-col items-start gap-[7px] w-full max-w-[435px]">
                      <h2 className="font-['Playfair_Display'] font-semibold text-[32px] sm:text-[44px] leading-tight sm:leading-[59px] text-[#0E0D0C] m-0">
                        Crafted With Passion,
                      </h2>
                      <h2 className="font-['Playfair_Display'] italic font-normal text-[32px] sm:text-[44px] leading-tight sm:leading-[59px] text-[#D4A017] m-0">
                        Served With Purpose.
                      </h2>
                    </div>

                    {/* Section Introduction */}
                    <div className="w-full max-w-[443px] font-['Inter'] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#0E0D0C]">
                      A curated look at Chef Michael's signature creations — made with the finest ingredients and a touch of creativity.
                    </div>

                  </div>
                </div>

                {/* Dish Cards Row */}
                <div className="flex flex-row flex-wrap xl:flex-nowrap justify-center items-start gap-[14px] w-full">
                  {signatureDishes.map((dish, idx) => (
                    <div key={idx} className="w-[296px] h-[446px] bg-[#FEFDFB] rounded-[10px] overflow-hidden flex flex-col items-center border border-black/5 shadow-sm shrink-0">
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
              <button className="box-border flex flex-row justify-center items-center px-[clamp(14px,1.2vw+8px,24px)] py-[clamp(10px,0.8vw+6px,16px)] w-auto sm:w-[250px] max-w-full h-[clamp(42px,1.2vw+34px,56px)] bg-[#FAF8F4] border border-[#B45A08] rounded-[5px] gap-[clamp(8px,0.8vw+4px,16px)] hover:bg-[#F2EFE8] transition-colors group cursor-pointer">
                <span className="font-['Inter'] font-medium text-[clamp(13.5px,0.8vw+9.5px,16px)] leading-none text-[#B45A08] whitespace-nowrap">
                  View Full Menu
                </span>
                <ArrowRight className="w-[clamp(14px,0.8vw+10px,20px)] h-[clamp(14px,0.8vw+10px,20px)] text-[#D4A017] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </button>

            </div>

            {/* Carousel Arrows */}
            <div className="hidden lg:flex flex-col items-start gap-[18px] w-[44px] h-[106px] shrink-0">
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

      {/* --- Fourth Part: Services Section --- */}
      <div id="services" className="flex flex-col items-center justify-center w-full bg-[#FCFBF9] py-[58px] px-4 md:px-[86px] overflow-x-hidden font-sans">
        <div className="flex flex-col items-center max-w-[1268px] w-full gap-[38px]">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-row items-center justify-center gap-[28px] w-full max-w-[360px]">
              <div className="w-[66px] h-[1px] bg-[#B45A08]/40" />
              <span className="font-semibold text-[16px] leading-[19px] tracking-[5px] text-[#B45A08] uppercase whitespace-nowrap">
                OUR SERVICES
              </span>
              <div className="w-[66px] h-[1px] bg-[#B45A08]/40" />
            </div>
          </div>

          {/* Heading and Introduction */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1268px] gap-6 md:gap-[80px]">
            <div className="flex flex-row items-baseline gap-4 w-full md:w-auto justify-center md:justify-start">
              <h2 className="font-serif font-semibold text-[48px] leading-[64px] text-[#0E0D0C]">
                Our
              </h2>
              <h2 className="font-serif font-semibold text-[48px] leading-[64px] text-[#D4A017]">
                Services
              </h2>
            </div>
            <div className="max-w-[670px] w-full">
              <p className="font-normal text-[16px] leading-[28px] text-[#0E0D0C] text-center md:text-right">
                From an intimate private dinner to a full restaurant launch explore<br className="hidden lg:block" />
                the ways Chef Michael and YCM Studio can bring your culinary vision to life.
              </p>
            </div>
          </div>

          {/* Services Cards */}
          <div className="flex flex-row flex-wrap xl:flex-nowrap justify-center items-start gap-[20px] w-full max-w-[1268px] mt-[9px]">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-[25px_20px_22px] w-[230px] h-[458px] bg-white border border-black/10 rounded-[10px] box-border shadow-[0px_8px_20px_rgba(64,46,26,0.06)]"
              >
                {/* Icon Container */}
                <div className="flex flex-row justify-center items-center w-[92px] h-[92px] shrink-0 relative">
                  <img src={service.icon} alt={service.title} className="absolute inset-0 w-full h-full object-contain" />
                </div>

                <div className="w-[1px] h-[12px] shrink-0" />

                {/* Number Row */}
                <div className="flex flex-row items-center gap-[12px] h-[16px]">
                  <div className="w-[26px] h-[1px] bg-[#B45A08]/65" />
                  <span className="font-semibold text-[13px] leading-[16px] text-[#B45A08]">
                    {service.number}
                  </span>
                  <div className="w-[26px] h-[1px] bg-[#B45A08]/65" />
                </div>

                <div className="w-[1px] h-[10px] shrink-0" />

                {/* Content */}
                <div className="flex flex-col items-center gap-[8px] w-[190px] h-[208px]">
                  <h3 className="font-serif font-semibold text-[24px] leading-[26px] text-center text-[#0E0D0C] h-[56px] flex items-center justify-center whitespace-pre-wrap">
                    {service.title}
                  </h3>
                  <p className="font-semibold text-[11px] leading-[18px] text-center tracking-[0.9px] text-[#B45A08] h-[42px] uppercase whitespace-pre-line">
                    {service.tagline}
                  </p>
                  <p className="font-normal text-[13px] leading-[23px] text-center text-[#0E0D0C] h-[94px] whitespace-pre-line">
                    {service.description}
                  </p>
                </div>

                <div className="flex-1 min-h-[26px]" />

                {/* Action */}
                <div className="flex flex-col items-center gap-[14px] w-[190px]">
                  <div className="w-[182px] h-[1px] bg-[#B45A08]/25" />
                  <button className="flex flex-row items-center gap-1 hover:opacity-80 transition-opacity">
                    <span className="font-semibold text-[14px] leading-[17px] text-[#B45A08]">
                      Learn More
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.91669 7.00008H11.0834M11.0834 7.00008L7.58335 3.50008M11.0834 7.00008L7.58335 10.5001" stroke="#B45A08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services CTA */}
          <div className="flex flex-row justify-center items-center w-full mt-[9px]">
            <button className="flex flex-row justify-center items-center p-[16px_24px] gap-[16px] w-[310px] h-[56px] bg-[#FAF8F4] border border-[#B45A08] rounded-[5px] hover:bg-[#B45A08]/5 transition-colors">
              <span className="font-medium text-[16px] leading-[20px] text-[#B45A08]">
                View All Services
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8333" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
      {/* --- Fifth Part: Trusted Brands --- */}
      <div className="w-full bg-[#FFFFFF] flex flex-col items-center justify-center py-[64px] px-4 font-sans relative">
        <div className="flex flex-col items-center w-full max-w-[1440px]">

          {/* Eyebrow */}
          <div className="flex flex-row items-center gap-[14px] h-[19px]">
            <div className="w-[28px] flex items-center justify-center">
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5H27M27 5L23 1M27 5L23 9" stroke="#B45A08" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-[16px] leading-[19px] tracking-[2.5px] text-[#B45A08] uppercase whitespace-nowrap">
              TRUSTED BY LEADING BRANDS
            </span>
            <div className="w-[28px] flex items-center justify-center">
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 5H1M1 5L5 1M1 5L5 9" stroke="#B45A08" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-row items-baseline justify-center gap-[12px] h-[56px] mt-[14px]">
            <h2 className="font-serif font-semibold text-[42px] leading-[56px] text-[#0E0D0C] m-0">
              Brands That
            </h2>
            <h2 className="font-serif italic font-normal text-[42px] leading-[56px] text-[#D4A017] m-0">
              Trust
            </h2>
            <h2 className="font-serif font-semibold text-[42px] leading-[56px] text-[#0E0D0C] m-0">
              Our Craft
            </h2>
          </div>

          {/* Middle Ornament */}
          <div className="flex items-center justify-center w-[132px] h-[12px] mt-[8px]">
            <img src={vectorImage} alt="Ornament" className="w-full h-full object-contain opacity-80" />
          </div>

          {/* Description */}
          <p className="font-normal text-[16px] leading-[23px] text-center text-[#0E0D0C] max-w-[458px] mt-[16px]">
            Proud to collaborate with India's most loved food and<br className="hidden md:block" />
            lifestyle brands to create memorable culinary experiences.
          </p>

          {/* Brands Panel */}
          <div className="mt-[32px] w-full max-w-[1220px] h-auto min-h-[124px] bg-[#FEFDFB] border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_18px_rgba(64,46,26,0.06)] rounded-[12px] flex flex-row items-center justify-between px-[14px] py-[16px] overflow-x-auto box-border gap-[5px]">

            {/* Rajdhani */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={rajdhaniLogo} alt="Rajdhani" className="w-[120px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* Barbeque Nation */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={bbqLogo} alt="Barbeque Nation" className="w-[110px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* Vadilal */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={vadilalLogo} alt="Vadilal" className="w-[100px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* wellwith */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={wellwithLogo} alt="Wellwith" className="w-[115px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* Wicked Gud */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={wickedLogo} alt="Wicked Gud" className="w-[90px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* Kamaa Club */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={kamaaLogo} alt="Kamaa Club" className="w-[125px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* Janki */}
            <div className="flex flex-row justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={jankiLogo} alt="Janki" className="w-[110px] h-auto object-contain" />
            </div>

            <div className="w-[1px] h-[84px] bg-[rgba(180,90,8,0.12)] shrink-0" />

            {/* Wooden Home */}
            <div className="flex flex-col justify-center items-center w-[130px] h-[92px] shrink-0">
              <img src={woodenLogo} alt="Wooden Home" className="h-[88px] w-auto object-contain" />
            </div>

          </div>

        </div>
      </div>


      {/* --- Sixth Part: Consultancy --- */}
      <div className="flex flex-col items-center justify-between w-full bg-[#FBF9F4] py-[44px] px-4 md:px-[86px] overflow-x-hidden font-sans">

        {/* Header */}
        <div className="flex flex-col items-center gap-[10px] w-full max-w-[1000px] mx-auto min-h-[228px]">

          {/* Eyebrow */}
          <div className="flex flex-row justify-center items-center gap-[18px] w-full max-w-[390px] min-h-[25px]">
            <div className="w-[40px] sm:w-[72px] h-[1px] bg-[#C99C5C] shrink-0" />
            <span className="font-sans font-semibold text-[14px] sm:text-[16px] leading-[19px] text-center tracking-[0.18em] text-[#B45A08] uppercase whitespace-nowrap">
              CONSULTANCY
            </span>
            <div className="w-[40px] sm:w-[72px] h-[1px] bg-[#C99C5C] shrink-0" />
          </div>

          {/* Headline */}
          <div className="flex flex-row justify-center items-center gap-[8px] flex-wrap h-auto mt-[10px] text-center">
            <h2 className="font-serif font-semibold text-[32px] sm:text-[42px] leading-tight sm:leading-[56px] text-[#0E0D0C] m-0">
              Delivered. Designed.
            </h2>
            <h2 className="font-serif italic font-normal text-[32px] sm:text-[42px] leading-tight sm:leading-[56px] text-[#D4A017] m-0">
              Delicious.
            </h2>
          </div>

          {/* Ornament */}
          <div className="flex items-center justify-center w-[168px] h-[22px] mt-[-5px] mb-[10px]">
            <img src={ornamentImg} alt="Ornament" className="w-full h-full object-contain" />
          </div>

          {/* Description */}
          <p className="w-full max-w-[820px] font-sans font-normal text-[16px] leading-[27px] text-center text-[#0E0D0C] m-0">
            Chef Michael has successfully delivered end-to-end hospitality consultancy<br className="hidden md:block" />
            projects that create experiences and drive real business results.
          </p>

        </div>

        {/* Project Cards */}
        <div className="flex flex-row justify-start xl:justify-center items-start gap-[16px] w-full max-w-[1228px] mx-auto overflow-x-auto mt-[40px] pb-6 px-4 xl:px-0 scrollbar-hide">
          {consultancyProjects.map((project, index) => (
            <div key={index} className="flex flex-col items-start w-[232px] h-[330px] bg-[#FFFFFF] rounded-[10px] shrink-0">

              {/* Media Stack */}
              <div className="flex flex-col items-center w-[232px] h-[205px]">
                {/* Project Image */}
                <div className="w-[232px] h-[174px] rounded-t-[10px] overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>

                {/* Project Icon */}
                <div className="flex flex-row justify-center items-center w-[58px] h-[58px] bg-[#FFFFFF] rounded-full shadow-[0px_2px_5px_rgba(0,0,0,0.12)] -mt-[29px] z-10">
                  <div className="w-[31px] h-[31px] flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-center p-[4px_14px_10px] gap-[7px] w-[232px] h-[125px]">
                {/* Project Name */}
                <h3 className="w-[204px] font-sans font-semibold text-[14px] leading-[17px] text-center uppercase text-[#0E0D0C] m-0 truncate">
                  {project.name}
                </h3>

                {/* Project Scope */}
                <p className="w-[204px] h-[42px] font-sans font-normal text-[12px] leading-[21px] text-center text-[#0E0D0C] m-0 whitespace-pre-line overflow-hidden">
                  {project.scope}
                </p>

                {/* Location */}
                <div className="flex flex-row justify-center items-center gap-[7px] w-[190px] h-[22px] mt-auto">
                  {/* Location Pin */}
                  <div className="w-[15px] h-[18px] flex items-center justify-center">
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 17C7.5 17 14 11.5333 14 6.66667C14 2.98477 11.0899 0 7.5 0C3.91015 0 1 2.98477 1 6.66667C1 11.5333 7.5 17 7.5 17Z" stroke="#B45A08" strokeWidth="1.6" />
                      <circle cx="7.5" cy="6.5" r="2.5" fill="#000000" stroke="#B45A08" strokeWidth="1.4" />
                    </svg>
                  </div>
                  {/* Project Location */}
                  <span className="font-sans font-semibold text-[13px] leading-[16px] tracking-[0.05em] uppercase text-[#0E0D0C] whitespace-nowrap truncate">
                    {project.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- Seventh Part: Awards --- */}
      <div className="flex flex-col xl:flex-row justify-center items-center w-full bg-[#FFFFFF] py-[68px] px-4 md:px-[86px] gap-[34px] font-sans">
        <div className="flex flex-col xl:flex-row justify-between items-center w-full max-w-[1440px] gap-12 xl:gap-[34px]">

          {/* Editorial Copy */}
          <div className="flex flex-col justify-center items-start gap-[18px] w-full max-w-[330px] h-auto xl:h-[370px]">

            {/* Heading */}
            <div className="flex flex-col items-start w-full">
              <h2 className="font-serif font-semibold text-[30px] leading-[40px] text-[#131210] m-0">
                Recognised for Passion.
              </h2>
              <div className="flex flex-row items-center gap-[6px] flex-nowrap whitespace-nowrap">
                <h2 className="font-serif font-semibold text-[30px] leading-[40px] text-[#131210] m-0">
                  Respected for
                </h2>
                <h2 className="font-serif italic font-normal text-[30px] leading-[40px] text-[#D4A017] m-0">
                  Excellence.
                </h2>
              </div>
            </div>

            {/* Ornament */}
            <div className="flex items-center w-[72px] h-[12px]">
              <img src={ornamentImg} alt="Ornament" className="w-full h-full object-contain" />
            </div>

            {/* Description */}
            <p className="w-full max-w-[320px] font-sans font-normal text-[14.5px] leading-[23px] text-[#454038] m-0">
              Honoured with prestigious awards and<br className="hidden sm:block" />
              recognitions that reflect a journey<br className="hidden sm:block" />
              built on dedication, creativity,<br className="hidden sm:block" />
              and culinary excellence.
            </p>

            {/* CTA */}
            <Link to="/media" className="flex flex-row justify-center items-center px-[20px] h-[46px] border border-[#C48F45] rounded-[4px] gap-[14px] hover:bg-[#FBF9F4] transition-colors mt-2 text-decoration-none">
              <span className="font-sans font-semibold text-[14px] leading-[17px] text-[#B45A08]">
                See All Awards
              </span>
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M4 12H16M16 12L10 6M16 12L10 18" stroke="#B45A08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

          </div>

          {/* Award Cards */}
          <div className="flex flex-row justify-start xl:justify-center items-center gap-[16px] w-full max-w-[842px] overflow-x-auto pb-4 xl:pb-0 hide-scrollbar">
            {awardsData.map((award, index) => (
              <div key={index} className="flex flex-col items-start w-[270px] h-[330px] bg-[#FBF9F4] rounded-[8px] shrink-0">

                {/* Image */}
                <div className="w-[270px] h-[220px] rounded-t-[8px] overflow-hidden">
                  <img src={award.image} alt={award.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex flex-row items-start p-[14px_16px_12px_20px] gap-[10px] w-[270px] h-[110px]">

                  {/* Laurel Icon */}
                  <div className="w-[42px] h-[42px] flex items-center justify-center shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 20C8 20 6 15 12 12C12 12 8 10 6 12" stroke="#B45A08" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24 20C24 20 26 15 20 12C20 12 24 10 26 12" stroke="#B45A08" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 24C10 24 9 19 14 17C14 17 11 15 9 17" stroke="#B45A08" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 24C22 24 23 19 18 17C18 17 21 15 23 17" stroke="#B45A08" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 28C12 28 11 23 16 21C16 21 13 19 11 21" stroke="#B45A08" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 28C20 28 21 23 16 21C16 21 19 19 21 21" stroke="#B45A08" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-col items-start gap-[3px] w-[182px]">
                    <h3 className="font-serif font-semibold text-[17px] leading-[23px] text-[#131210] m-0 w-full truncate">
                      {award.name}
                    </h3>
                    <p className="font-sans font-normal text-[13px] leading-[18px] text-[#38332E] m-0 w-full whitespace-pre-line h-[36px]">
                      {award.description}
                    </p>
                    <span className="font-sans font-semibold text-[13px] leading-[16px] text-[#B45A08] m-0 mt-1">
                      {award.year}
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- Eighth Part: Contact CTA --- */}
      <div className="w-full bg-[#090807] flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row items-stretch lg:aspect-[1440/320]">

          {/* Left Image */}
          <div className="w-full h-[320px] lg:h-auto lg:w-[40.97%] relative">
            <img src={contactLeftImg} alt="Catering Spread" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Center Content */}
          <div className="w-full lg:w-[38.19%] bg-[#F7F0EA] flex flex-col justify-center items-center py-[40px] lg:py-[26px] px-4 box-border">
            <div className="flex flex-col items-start w-full max-w-[382px] gap-[12px]">

              {/* Headline */}
              <div className="flex flex-col items-start w-full">
                <h2 className="font-serif font-semibold text-[26px] lg:text-[33px] leading-tight lg:leading-[44px] text-[#010101] m-0">
                  Let’s Create Something
                </h2>
                <div className="flex flex-row items-center gap-[6px] lg:gap-[8px] flex-wrap">
                  <h2 className="font-serif italic font-normal text-[26px] lg:text-[33px] leading-tight lg:leading-[44px] text-[#BF6609] m-0">
                    Memorable
                  </h2>
                  <h2 className="font-serif font-semibold text-[26px] lg:text-[33px] leading-tight lg:leading-[44px] text-[#010101] m-0">
                    Together
                  </h2>
                </div>
              </div>

              {/* Ornament */}
              <div className="flex items-center w-[120px] h-[14px]">
                <svg width="120" height="14" viewBox="0 0 120 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="7" x2="48" y2="7" stroke="#9B5A11" strokeWidth="1" />
                  <line x1="72" y1="7" x2="120" y2="7" stroke="#9B5A11" strokeWidth="1" />
                  <rect x="56.5" y="4.5" width="5" height="5" transform="rotate(45 56.5 4.5)" stroke="#B96B10" strokeWidth="1" />
                </svg>
              </div>

              {/* Description */}
              <p className="font-sans font-normal text-[14px] leading-[21px] text-[#1E1815] m-0 w-full">
                Whether it’s a private dinner,<br />
                a brand campaign,<br />
                or a full restaurant launch—<br />
                get in touch to start the conversation.
              </p>

              {/* CTA Button */}
              <Link to="/contact" className="flex flex-row justify-center items-center px-[clamp(14px,1.2vw+8px,22px)] h-[clamp(38px,1vw+30px,44px)] bg-[#C77A1D] rounded-[4px] gap-[clamp(8px,0.8vw+4px,14px)] hover:bg-[#B56A15] transition-colors mt-[4px] no-underline">
                <span className="font-sans font-semibold text-[clamp(12.5px,0.8vw+9px,14px)] leading-none text-[#F7F5ED] whitespace-nowrap">
                  Work with Chef Michael
                </span>
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-[clamp(13px,0.8vw+9px,19px)] h-[clamp(15px,0.8vw+11px,23px)]">
                  <path d="M3.5 11.5H15.5M15.5 11.5L9.5 5.5M15.5 11.5L9.5 17.5" stroke="#F7F5ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-[320px] lg:h-auto lg:w-[20.84%] relative">
            <img src={contactRightImg} alt="Chef Michael" className="absolute inset-0 w-full h-full object-cover object-right" />
          </div>

        </div>
      </div>

    </div>
  );
}
