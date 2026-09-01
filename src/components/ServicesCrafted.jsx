import React from 'react';
import pvtdinning from '../assets/pvtdinning.png';
import consulting from '../assets/consulting.png';
import events from '../assets/events.png';
import workshop from '../assets/workshop.png';
import brand from '../assets/brand.png';

const servicesData = [
  {
    num: '01',
    title: 'Private Dining',
    description: 'Bespoke, chef-led dining experiences for homes, celebrations, and intimate events.',
    img: pvtdinning,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B86B16" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13C6 9.68629 8.68629 7 12 7C15.3137 7 18 9.68629 18 13H6Z" />
        <path d="M12 7V4M10 4H14" />
        <path d="M4 15H20" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Consulting\n(YCM Studio)',
    description: 'Restaurant, café, and hotel consultancy — from kitchen planning to full operational launch.',
    img: consulting,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B86B16" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21H21" />
        <path d="M5 21V7L12 3L19 7V21" />
        <path d="M9 21V11H15V21" />
        <path d="M9 7H15" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Events',
    description: 'Live culinary appearances, festivals, and corporate hospitality experiences.',
    img: events,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B86B16" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2V6M8 2V6M3 10H21" />
        <path d="M12 14L13 16L15 16.5L13.5 18L14 20L12 19L10 20L10.5 18L9 16.5L11 16L12 14Z" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Workshops &\nMasterclasses',
    description: 'Hands-on culinary training for aspiring chefs and food enthusiasts.',
    img: workshop,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B86B16" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.5C6 11.567 7.567 10 9.5 10C9.5 7.51472 11.5147 5.5 14 5.5C16.4853 5.5 18.5 7.51472 18.5 10C20.433 10 22 11.567 22 13.5C22 15.433 20.433 17 18.5 17H6C4.067 17 2.5 15.433 2.5 13.5C2.5 11.567 4.067 10 6 10" />
        <path d="M8 17V21H20V17" />
      </svg>
    )
  },
  {
    num: '05',
    title: 'Brand\nCollaborations',
    description: 'Sponsored content, recipe development, and campaign partnerships for food & lifestyle brands.',
    img: brand,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B86B16" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L15 3V17L11 15H5C4.44772 15 4 14.5523 4 14V6C4 5.44772 4.44772 5 5 5H11Z" />
        <path d="M15 10C16.6569 10 18 11.3431 18 13" />
        <path d="M15 6C18.866 6 22 9.13401 22 13" />
      </svg>
    )
  }
];

export default function ServicesCrafted() {
  return (
    <section className="w-full bg-[#FCFAF7] py-12 lg:py-16 relative flex flex-col items-center">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-[8px] w-full max-w-[1100px] px-6">
        <span className="font-sans font-semibold text-[14px] leading-[17px] tracking-[0.24em] text-[#B86B21] uppercase text-center">
          WHAT WE DO
        </span>
        <h2 className="flex flex-wrap justify-center items-center gap-x-[10px] text-center w-full">
          <span className="font-serif font-semibold text-[28px] sm:text-[36px] md:text-[46px] leading-[1.2] text-[#0E0E0D]">
            Services Crafted For
          </span>
          <span className="font-serif italic font-normal text-[28px] sm:text-[36px] md:text-[46px] leading-[1.2] text-[#B86B21]">
            Excellence
          </span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-[14px] w-full max-w-[1307px] px-4 mt-8 lg:mt-10">
        {servicesData.map((service, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-start w-full sm:w-[250px] min-h-[580px] bg-white rounded-[10px] shadow-[0px_3px_12px_rgba(46,36,23,0.11)] overflow-hidden shrink-0"
          >
            {/* Content Top */}
            <div className="flex flex-col items-start px-[22px] py-[24px] pr-[26px] pb-[18px] w-full min-h-[335px] shrink-0">
              
              <div className="flex flex-row justify-between items-start w-full h-[94px] mb-[13px]">
                <div className="flex flex-col items-start gap-[12px] h-[58px]">
                  <span className="font-serif italic font-normal text-[33px] leading-[44px] text-[#B86B21]">
                    {service.num}
                  </span>
                  <div className="w-[38px] h-[2px] bg-[#CC964F]" />
                </div>
                
                <div className="flex justify-center items-center w-[84px] sm:w-[94px] h-[84px] sm:h-[94px] bg-[#FCFAF5] rounded-full shrink-0">
                  <div className="w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex justify-center items-center">
                    {service.icon}
                  </div>
                </div>
              </div>

              <h3 className="font-serif font-semibold text-[22px] sm:text-[25px] leading-[30px] text-[#0E0E0D] whitespace-pre-line mb-[13px]">
                {service.title}
              </h3>
              
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#33302E]">
                {service.description}
              </p>
            </div>

            {/* Service Image */}
            <div className="w-full h-[213px] shrink-0 mt-auto">
              <img 
                src={service.img} 
                alt={service.title.replace('\n', ' ')} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Action Bottom */}
            <div className="flex flex-col items-center w-full h-[52px] bg-[#D4A017] hover:bg-[#b88c14] transition-colors cursor-pointer shrink-0">
              <div className="w-[182px] h-[1px] bg-[rgba(180,90,8,0.25)]" />
              <span className="font-sans font-semibold text-[14px] leading-[17px] text-white mt-[14px]">
                Learn More &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
