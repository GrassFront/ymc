import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import navLogo from '../assets/navlogo.png';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Awards', path: '/awards' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="w-full relative flex justify-center items-center min-h-[88px] bg-transparent py-2">
      <div className="w-full max-w-[1304px] min-h-[88px] flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-4 md:gap-0">

        {/* Brand / Logo Lockup */}
        <div className="flex flex-row items-center gap-[9.85px] max-w-full">
          {/* Logo Icon Area */}
          <div className="w-[62.67px] h-[63.56px] relative flex-shrink-0 flex items-center justify-center">
            <img src={navLogo} alt="YCM Studio Logo" className="absolute inset-0 w-full h-full object-contain z-10" />
          </div>

          {/* Logo / Divider */}
          <div className="w-[0.9px] h-[64.46px] bg-[rgba(38,36,33,0.28)] flex-shrink-0" />

          {/* Name / Studio */}
          <div className="flex flex-col items-start gap-[6px] max-w-[198.74px] justify-center">
            <span className="font-sans font-normal text-[22px] sm:text-[25.9619px] leading-tight tracking-[0.895238px] text-[#0D0D0C] whitespace-nowrap">
              YCM STUDIO
            </span>
            <span className="font-sans font-semibold text-[10px] sm:text-[11.6381px] leading-tight tracking-[1.79048px] text-[#0D0D0C] whitespace-nowrap">
              HOSPITAL & CONSULTANCY
            </span>
          </div>
        </div>

        {/* Navigation / Desktop & Mobile */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-[38px] min-h-[30px] flex-wrap justify-center max-w-full">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path || (currentPath === '' && item.path === '/');
            return (
              <Link
                key={item.label}
                to={item.path}
                className="flex flex-col items-start gap-[10px] group min-h-[30px] justify-start"
              >
                <span
                  className={`font-sans text-[14px] sm:text-[15px] leading-[18px] transition-colors whitespace-nowrap ${isActive
                      ? 'font-semibold text-[#B85E08]'
                      : 'font-medium text-[#141312] group-hover:text-[#B85E08]'
                    }`}
                >
                  {item.label}
                </span>
                {/* Active Indicator */}
                {isActive && (
                  <div className="w-full h-[2px] bg-[#B85E08]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Button / Book Chef Michael */}
        <Link to="/contact" className="flex flex-row justify-center items-center px-[20px] sm:px-[24px] py-[12px] sm:py-[16px] gap-[12px] sm:gap-[16px] w-auto sm:w-[215px] h-[44px] sm:h-[48px] bg-[#D4A017] rounded-[5px] hover:bg-[#c29112] transition-colors cursor-pointer border-none outline-none shrink-0">
          <span className="font-sans font-medium text-[14px] sm:text-[16px] leading-[20px] text-[#FAF8F4] whitespace-nowrap">
            Book Chef Michael
          </span>
          <ArrowRight className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#FAF8F4] flex-shrink-0" strokeWidth={1.6} />
        </Link>

      </div>
    </nav>
  );
}
