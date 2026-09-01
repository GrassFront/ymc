import React from 'react';
import coverImg from '../assets/media2.png';
import topImg from '../assets/media2 (2).png';
import blImg from '../assets/media3.png';
import brImg from '../assets/media4.png';

const assetsConfig = [
  {
    title: 'Official Bio',
    desc: 'Detailed biography\nand achievements.',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="36" r="35" stroke="#B86A12" strokeWidth="1" />
        <rect x="24" y="16" width="24" height="40" rx="2" stroke="#B86A12" strokeWidth="1.5" />
        <circle cx="36" cy="26" r="4" stroke="#B86A12" strokeWidth="1.5" />
        <path d="M28 40h16M28 44h16M28 48h10" stroke="#B86A12" strokeWidth="1.5" />
        <path d="M28 34 c0-3 3-5 8-5 s8 2 8 5" stroke="#B86A12" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'High-resolution Photos',
    desc: 'Curated photos for\nmedia use.',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="36" r="35" stroke="#B86A12" strokeWidth="1" />
        <rect x="22" y="24" width="30" height="22" rx="2" stroke="#B86A12" strokeWidth="1.5" />
        <rect x="20" y="22" width="30" height="22" rx="2" stroke="#B86A12" strokeWidth="1.5" fill="#FAF8F4" />
        <circle cx="28" cy="28" r="2" fill="#B86A12" />
        <path d="M20 38 l8-8 l6 6 l4-4 l8 8" stroke="#B86A12" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    title: 'Logo Assets',
    desc: 'Chef Michael & YCM\nStudio logo files.',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="36" r="35" stroke="#B86A12" strokeWidth="1" />
        <path d="M22 28h12l2-4h14v22H22V28z" stroke="#B86A12" strokeWidth="1.5" fill="#FAF8F4" />
        <path d="M20 30h28v18H20V30z" stroke="#B86A12" strokeWidth="1.5" fill="#FAF8F4" />
        <path d="M30 36l4-2l4 2v6h-8v-6z" stroke="#B86A12" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Media Kit PDF',
    desc: 'Overview, profile,\nand key highlights.',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="36" r="35" stroke="#B86A12" strokeWidth="1" />
        <rect x="24" y="16" width="24" height="32" rx="2" stroke="#B86A12" strokeWidth="1.5" />
        <path d="M38 16l10 10v0" stroke="#B86A12" strokeWidth="1.5" />
        <rect x="28" y="38" width="16" height="8" rx="2" fill="#B86A12" />
        <text x="36" y="44" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">PDF</text>
      </svg>
    )
  }
];

export default function MediaPressKit() {
  return (
    <section className="w-full flex justify-center py-12 lg:py-[40px] px-4 lg:px-[48px] bg-[#FAF8F4]">
      
      {/* Desktop 1440 Container */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start p-[24px] gap-[24px] w-full max-w-[1440px] bg-[#FAF8F4] border-[0.5px] border-[#B45A08] rounded-[14px]">
        
        {/* Press Kit Cover */}
        <div className="w-full md:w-[320px] h-[400px] xl:h-[472px] shrink-0 rounded-[10px] overflow-hidden bg-gray-200">
          <img 
            src={coverImg} 
            alt="Press Kit Cover" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541812837330-9751dc5d70f0?auto=format&fit=crop&w=320&h=472&q=80' }}
          />
        </div>

        {/* Press Kit Content */}
        <div className="flex flex-col items-start gap-[14px] w-full xl:w-[648px] xl:h-[448px] shrink-0">
          
          <h2 className="font-serif font-semibold text-[26px] leading-[35px] tracking-[0.03em] text-[#B45A08]">
            DOWNLOADABLE MEDIA BRAND KIT
          </h2>
          
          <p className="font-sans font-normal text-[17px] leading-[28px] text-[#1A1A1A] max-w-[419px]">
            Everything you need to feature, write, or collaborate with Chef Michael — in one place.
          </p>

          {/* Press Kit Assets */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between items-center w-full min-h-[210px] gap-4 sm:gap-0 mt-4 xl:mt-8">
            {assetsConfig.map((asset, idx) => (
              <div key={idx} className="flex flex-col justify-center items-center py-[24px] gap-[16px] w-[140px] xl:w-[150px] h-[210px] shrink-0">
                <div className="w-[72px] h-[72px] shrink-0">
                  {asset.icon}
                </div>
                <div className="font-sans font-semibold text-[16px] leading-[19px] text-center text-[#1A1A1A]">
                  {asset.title}
                </div>
                <div className="font-sans font-normal text-[13px] leading-[19px] text-center text-[#1A1A1A] whitespace-pre-line">
                  {asset.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Download Press Kit Button */}
          <button className="flex flex-row justify-between items-center px-[clamp(16px,1.5vw+8px,25px)] pr-[clamp(14px,1.5vw+6px,20px)] gap-[clamp(12px,1.2vw+8px,26px)] w-full max-w-[380px] h-[clamp(46px,1.5vw+36px,62px)] bg-[#D4A017] border border-[#EB9E47] rounded-[4px] mt-6 hover:bg-[#C29012] transition-colors cursor-pointer group">
            <span className="font-sans font-semibold text-[clamp(13px,0.8vw+9.5px,16px)] leading-none text-white whitespace-nowrap">
              Download Press Kit (PDF / ZIP)
            </span>
            <span className="font-sans font-normal text-[clamp(16px,1vw+12px,23px)] leading-none text-white group-hover:translate-y-1 transition-transform flex-shrink-0">
              ↓
            </span>
          </button>
        </div>

        {/* Press Kit Photo Collage */}
        <div className="flex flex-col items-start gap-[10px] w-full md:w-[352px] xl:h-[449px] shrink-0 mt-8 xl:mt-0">
          
          {/* Top Image */}
          <div className="w-full h-[149px] rounded-[10px] overflow-hidden bg-gray-200">
            <img 
              src={topImg} 
              alt="Culinary Dish" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=352&h=149&q=80' }}
            />
          </div>

          {/* Bottom Images Row */}
          <div className="flex flex-row items-center gap-[9px] w-full h-[290px]">
            
            {/* Bottom Left Image */}
            <div className="w-[179px] h-full rounded-[10px] overflow-hidden bg-gray-200 shrink-0">
              <img 
                src={blImg} 
                alt="Chef Portrait" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=179&h=290&q=80' }}
              />
            </div>

            {/* Bottom Right Image */}
            <div className="flex-1 h-full rounded-[10px] overflow-hidden bg-gray-200 min-w-[164px]">
              <img 
                src={brImg} 
                alt="Chef Working" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=164&h=290&q=80' }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
