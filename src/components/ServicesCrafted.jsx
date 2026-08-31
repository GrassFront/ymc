import React from 'react';
import pvtdinning from '../assets/pvtdinning.png';
import consulting from '../assets/consulting.png';
import events from '../assets/events.png';
import workshop from '../assets/workshop.png';
import brand from '../assets/brand.png';
import circluar1 from '../assets/Icon Circle1.png';
import circluar2 from '../assets/Icon Circle2.png';
import circluar3 from '../assets/Icon Circle3.png';
import circluar4 from '../assets/Icon Circle4.png';
import circluar5 from '../assets/Icon Circle5.png';

const servicesData = [
  {
    num: '01',
    title: 'Private Dining',
    description: 'Bespoke, chef-led dining experiences for homes, celebrations, and intimate events.',
    img: pvtdinning,
    icon: <img src={circluar1} alt="Icon 1" className="w-[94px] h-[94px] rounded-full object-contain" />
  },
  {
    num: '02',
    title: 'Consulting\n(YCM Studio)',
    description: 'Restaurant, café, and hotel consultancy — from kitchen planning to full operational launch.',
    img: consulting,
    icon: <img src={circluar2} alt="Icon 2" className="w-[94px] h-[94px] rounded-full object-contain" />
  },
  {
    num: '03',
    title: 'Events',
    description: 'Live culinary appearances, festivals, and corporate hospitality experiences.',
    img: events,
    icon: <img src={circluar3} alt="Icon 3" className="w-[94px] h-[94px] rounded-full object-contain" />
  },
  {
    num: '04',
    title: 'Workshops &\nMasterclasses',
    description: 'Hands-on culinary training for aspiring chefs and food enthusiasts.',
    img: workshop,
    icon: <img src={circluar4} alt="Icon 4" className="w-[94px] h-[94px] rounded-full object-contain" />
  },
  {
    num: '05',
    title: 'Brand\nCollaborations',
    description: 'Sponsored content, recipe development, and campaign partnerships for food & lifestyle brands.',
    img: brand,
    icon: <img src={circluar5} alt="Icon 5" className="w-[94px] h-[94px] rounded-full object-contain" />
  }
];

export default function ServicesCrafted() {
  return (
    <section className="w-full bg-[#FCFAF7] py-16 lg:py-[28px] lg:h-[827px] relative flex flex-col items-center">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-[8px] w-full max-w-[1100px] px-6 lg:absolute lg:top-[28px]">
        <span className="font-sans font-semibold text-[14px] leading-[17px] tracking-[0.24em] text-[#B86B21] uppercase text-center">
          WHAT WE DO
        </span>
        <h2 className="flex flex-wrap justify-center items-center gap-x-[10px] text-center w-full">
          <span className="font-serif font-semibold text-[32px] md:text-[46px] leading-[1.2] lg:leading-[61px] text-[#0E0E0D]">
            Services Crafted For
          </span>
          <span className="font-serif italic font-normal text-[32px] md:text-[46px] leading-[1.2] lg:leading-[61px] text-[#B86B21]">
            Excellence
          </span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-[14px] w-full lg:w-[1307px] px-4 lg:px-0 mt-12 lg:mt-0 lg:absolute lg:top-[166px] lg:left-1/2 lg:-translate-x-1/2">
        {servicesData.map((service, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-start w-[250px] min-h-[600px] bg-white rounded-[10px] shadow-[0px_3px_12px_rgba(46,36,23,0.11)] overflow-hidden shrink-0"
          >
            {/* Content Top */}
            <div className="flex flex-col items-start px-[22px] py-[24px] pr-[26px] pb-[18px] w-full h-[335px] shrink-0">
              
              <div className="flex flex-row justify-between items-start w-full h-[94px] mb-[13px]">
                <div className="flex flex-col items-start gap-[12px] h-[58px]">
                  <span className="font-serif italic font-normal text-[33px] leading-[44px] text-[#B86B21]">
                    {service.num}
                  </span>
                  <div className="w-[38px] h-[2px] bg-[#CC964F]" />
                </div>
                
                <div className="flex justify-center items-center w-[94px] h-[94px] shrink-0">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-serif font-semibold text-[25px] leading-[30px] text-[#0E0E0D] whitespace-pre-line mb-[13px]">
                {service.title}
              </h3>
              
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#33302E]">
                {service.description}
              </p>
            </div>

            {/* Service Image */}
            <div className="w-[250px] h-[213px] shrink-0">
              <img 
                src={service.img} 
                alt={service.title.replace('\n', ' ')} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Action Bottom */}
            <div className="flex flex-col items-center w-[250px] h-[52px] bg-[#D4A017] hover:bg-[#b88c14] transition-colors cursor-pointer shrink-0">
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
