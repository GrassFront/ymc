import React from 'react';
import media5 from '../assets/media5.png';
import media6 from '../assets/media6.png';
import media7 from '../assets/media7.png';
import media8 from '../assets/media8.png';
import media9 from '../assets/media9.png';
import media10 from '../assets/media10.png';

// Ornaments
const SmallOrnament = () => (
  <svg width="115" height="18" viewBox="0 0 115 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 9H45" stroke="#B86A12" strokeWidth="1.5" />
    <path d="M70 9H115" stroke="#B86A12" strokeWidth="1.5" />
    <path d="M52 13 C48 13 45 9 45 9 C45 9 48 5 52 5 C56 5 58 9 58 9 C58 9 56 13 52 13 Z" stroke="#B86A12" strokeWidth="1.5" fill="none" />
    <path d="M63 13 C67 13 70 9 70 9 C70 9 67 5 63 5 C59 5 57 9 57 9 C57 9 59 13 63 13 Z" stroke="#B86A12" strokeWidth="1.5" fill="none" />
    <path d="M57.5 6 V12" stroke="#B86A12" strokeWidth="1.5" />
  </svg>
);

const metrics = [
  {
    platform: 'Instagram',
    value: '1.4M+',
    label: 'Followers\non Instagram',
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="12" y1="46" x2="46" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9CE34" />
            <stop offset="0.5" stopColor="#EE2A7B" />
            <stop offset="1" stopColor="#6228D7" />
          </linearGradient>
        </defs>
        <rect x="7" y="7" width="44" height="44" rx="12" stroke="url(#ig-grad)" strokeWidth="4" />
        <circle cx="29" cy="29" r="10" stroke="url(#ig-grad)" strokeWidth="4" />
        <circle cx="41" cy="17" r="3" fill="url(#ig-grad)" />
      </svg>
    )
  },
  {
    platform: 'YouTube',
    value: '174K+',
    label: 'Subscribers\non YouTube',
    icon: (
      <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="2" width="62" height="42" rx="12" fill="#FF0000" />
        <path d="M40 23 L26 15 V31 L40 23 Z" fill="white" />
      </svg>
    )
  },
  {
    platform: 'Facebook',
    value: '1.1M+',
    label: 'Followers\non Facebook',
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="56" height="56" rx="28" fill="#1877F2" />
        <path d="M35 17h-4c-3 0-5 2-5 5v3h-3v5h3v17h6V30h4l1-5h-5v-2c0-1 0-2 2-2h3v-4z" fill="white" />
      </svg>
    )
  },
  {
    platform: 'Reels',
    value: '3.25M',
    label: 'Views\nLast 10 Reels',
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="42" height="38" rx="6" stroke="#C97812" strokeWidth="4" />
        <path d="M25 10 L15 22 M33 10 L23 22 M41 10 L31 22 M49 10 L39 22" stroke="#C97812" strokeWidth="3" />
        <path d="M8 22 H50" stroke="#C97812" strokeWidth="4" />
        <path d="M25 28 V40 L35 34 Z" fill="#C97812" />
      </svg>
    )
  }
];

const featuredLogos = [
  { name: 'ZEE TV', img: media5, w: 104, h: 64 },
  { name: 'NDTV GOODTIMES', img: media6, w: 137, h: 32 },
  { name: 'The Print', img: media7, w: 111, h: 64 },
  { name: 'FEMINA', img: media8, w: 104, h: 25 },
  { name: 'Outlook', img: media9, w: 117, h: 25 },
  { name: 'INDIA TODAY', img: media10, w: 107, h: 49 },
];

export default function MediaReach() {
  return (
    <section className="w-full bg-[#FAF8F4] flex flex-col items-center py-12 lg:py-[28px] lg:px-[48px] overflow-hidden">
      <div className="w-full max-w-[1344px] flex flex-col items-center gap-[20px]">
        
        {/* Digital Reach Heading */}
        <div className="flex flex-row items-center justify-center gap-[10px] md:gap-[20px] w-full mt-4 lg:mt-0">
          <div className="w-[80px] md:w-[115px] shrink-0"><SmallOrnament /></div>
          <h2 className="font-serif font-semibold text-[22px] md:text-[30px] leading-[40px] tracking-[0.05em] text-[#B45A08] whitespace-nowrap">
            OUR DIGITAL REACH
          </h2>
          <div className="w-[80px] md:w-[115px] shrink-0"><SmallOrnament /></div>
        </div>

        {/* Digital Reach Metrics Container */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-center w-full lg:h-[240px] bg-[#FDFBF7] border-[0.5px] border-[#B45A08] rounded-[12px] p-6 lg:py-[20px] lg:px-[22px] gap-6 lg:gap-0 mt-2">
          {metrics.map((metric, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col justify-center items-center py-[24px] gap-[16px] w-full lg:w-[280px] h-[200px] bg-[#FDFBF7] rounded-[10px] shrink-0">
                <div className="flex justify-center items-center h-[58px]">
                  {metric.icon}
                </div>
                <div className="font-serif font-semibold text-[42px] leading-[48px] text-[#1A1A1A]">
                  {metric.value}
                </div>
                <div className="font-sans font-normal text-[16px] leading-[24px] text-center text-[#1A1A1A] whitespace-pre-line">
                  {metric.label}
                </div>
              </div>
              {idx < metrics.length - 1 && (
                <div className="hidden lg:block w-[1px] h-[160px] bg-[#B45A08] opacity-25 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Featured In Heading */}
        <div className="flex flex-row items-center justify-center gap-[10px] md:gap-[20px] w-full mt-8 lg:mt-6">
          <div className="w-[80px] md:w-[115px] shrink-0"><SmallOrnament /></div>
          <h2 className="font-serif font-semibold text-[22px] md:text-[30px] leading-[40px] tracking-[0.05em] text-[#B45A08] whitespace-nowrap">
            FEATURED IN
          </h2>
          <div className="w-[80px] md:w-[115px] shrink-0"><SmallOrnament /></div>
        </div>

        {/* Featured Logos Container */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center w-full gap-4 lg:gap-0 mt-2">
          {featuredLogos.map((logo, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-center items-center py-[24px] w-[150px] lg:w-[170px] h-[140px] bg-[#FDFBF7] border border-[#B45A08] rounded-[10px] shrink-0 px-2 text-center"
            >
              <img 
                src={logo.img} 
                alt={logo.name}
                className="w-full h-full object-cover"
                style={{ width: `${logo.w}px`, height: `${logo.h}px` }}
              />
            </div>
          ))}

          {/* More to come box */}
          <div className="flex flex-col justify-center items-center gap-[8px] w-[150px] lg:w-[170px] h-[140px] bg-[#FDFBF7] border border-[#B45A08] rounded-[10px] shrink-0">
            <span className="font-serif font-semibold text-[40px] leading-[53px] text-[#B45A08]">
              +
            </span>
            <span className="font-sans font-semibold text-[14px] leading-[17px] text-[#1A1A1A]">
              More to come
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
