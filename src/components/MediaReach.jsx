import React from 'react';
import media5 from '../assets/media5.png';
import media6 from '../assets/media6.png';
import media7 from '../assets/media7.png';
import media8 from '../assets/media8.png';
import media9 from '../assets/media9.png';
import media10 from '../assets/media10.png';
import frameImg from '../assets/Frameicon.png';
import instaIcon from '../assets/Insta Icon.png';
import youtubeIcon from '../assets/Youtube Icon.png';
import fbIcon from '../assets/FaceBook Icon.png';
import reelIcon from '../assets/Reel Icon.png';

// Ornaments
const SmallOrnament = () => (
  <img src={frameImg} alt="Ornament" className="w-[115px] h-auto object-contain" />
);

const metrics = [
  {
    platform: 'Instagram',
    value: '1.4M+',
    label: 'Followers\non Instagram',
    icon: <img src={instaIcon} alt="Instagram" className="w-[58px] h-[58px] object-contain" />
  },
  {
    platform: 'YouTube',
    value: '174K+',
    label: 'Subscribers\non YouTube',
    icon: <img src={youtubeIcon} alt="YouTube" className="w-[64px] h-[46px] object-contain" />
  },
  {
    platform: 'Facebook',
    value: '1.1M+',
    label: 'Followers\non Facebook',
    icon: <img src={fbIcon} alt="Facebook" className="w-[58px] h-[58px] object-contain" />
  },
  {
    platform: 'Reels',
    value: '3.25M',
    label: 'Views\nLast 10 Reels',
    icon: <img src={reelIcon} alt="Reels" className="w-[58px] h-[58px] object-contain" />
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
