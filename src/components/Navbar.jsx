import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <nav className="w-full relative flex justify-center items-center min-h-[72px] sm:min-h-[88px] bg-transparent py-2 z-50 overflow-x-hidden">
      <div className="w-full max-w-[1304px] min-h-[72px] sm:min-h-[88px] flex flex-row justify-between items-center px-3 sm:px-6 lg:px-8 gap-2 sm:gap-4 min-w-0">

        {/* Brand / Logo Lockup */}
        <Link to="/" className="flex flex-row items-center gap-[6px] sm:gap-[9.85px] max-w-full shrink min-w-0 no-underline">
          {/* Logo Icon Area */}
          <div className="w-[clamp(32px,1.5vw+24px,62.67px)] h-[clamp(32px,1.5vw+24px,63.56px)] relative flex-shrink-0 flex items-center justify-center">
            <img src={navLogo} alt="YCM Studio Logo" className="absolute inset-0 w-full h-full object-contain z-10" />
          </div>

          {/* Logo / Divider */}
          <div className="w-[0.9px] h-[clamp(32px,1.5vw+24px,64.46px)] bg-[rgba(38,36,33,0.28)] flex-shrink-0" />

          {/* Name / Studio */}
          <div className="flex flex-col items-start gap-[2px] sm:gap-[6px] max-w-[198.74px] justify-center min-w-0 shrink">
            <span className="font-sans font-normal text-[clamp(13px,0.8vw+10px,25.9619px)] leading-tight tracking-[0.5px] sm:tracking-[0.895238px] text-[#0D0D0C] whitespace-nowrap">
              YCM STUDIO
            </span>
            <span className="font-sans font-semibold text-[clamp(7px,0.4vw+5px,11.6381px)] leading-tight tracking-[1px] sm:tracking-[1.79048px] text-[#0D0D0C] whitespace-nowrap">
              HOSPITAL & CONSULTANCY
            </span>
          </div>
        </Link>

        {/* Horizontal Navigation / Desktop (> 1024px) */}
        <div className="hidden lg:flex flex-row items-center gap-[38px] min-h-[30px] justify-center max-w-full">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path || (currentPath === '' && item.path === '/');
            return (
              <Link
                key={item.label}
                to={item.path}
                className="flex flex-col items-start gap-[10px] group min-h-[30px] justify-start"
              >
                <span
                  className={`font-sans text-[15px] leading-[18px] transition-colors whitespace-nowrap ${isActive
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

        {/* Right Section: Desktop CTA + Mobile Toggle & CTA */}
        <div className="flex flex-row items-center gap-1.5 sm:gap-3 shrink-0 min-w-0">
          {/* Button / Book Chef Michael (Tightened Fluid Clamped Scaling) */}
          <Link
            to="/contact"
            className="flex flex-row justify-center items-center px-[clamp(6px,0.8vw+2px,24px)] py-[clamp(4px,0.5vw+2px,16px)] gap-[clamp(4px,0.5vw+2px,16px)] w-auto lg:w-[215px] h-[clamp(32px,1vw+24px,48px)] bg-[#D4A017] rounded-[5px] hover:bg-[#c29112] transition-colors cursor-pointer border-none outline-none shrink no-underline"
          >
            <span className="font-sans font-medium text-[clamp(11px,0.6vw+8.5px,16px)] leading-none text-[#FAF8F4] whitespace-nowrap">
              Book Chef Michael
            </span>
            <ArrowRight className="w-[clamp(12px,0.6vw+9px,20px)] h-[clamp(12px,0.6vw+9px,20px)] text-[#FAF8F4] flex-shrink-0" strokeWidth={1.6} />
          </Link>

          {/* Hamburger Menu Toggle Icon (Mobile & Tablet < 1024px) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden items-center justify-center p-1 sm:p-2 rounded-md text-[#0D0D0C] hover:text-[#B85E08] focus:outline-none transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <X className="w-[clamp(20px,1vw+16px,28px)] h-[clamp(20px,1vw+16px,28px)] text-[#0D0D0C]" />
            ) : (
              <Menu className="w-[clamp(20px,1vw+16px,28px)] h-[clamp(20px,1vw+16px,28px)] text-[#0D0D0C]" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Drawer Menu (< 1024px) */}
      {isOpen && (
        <>
          {/* Semi-transparent Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity"
          />

          {/* Vertical Drawer Panel */}
          <div className="fixed top-0 right-0 w-[clamp(260px,20vw+200px,320px)] h-full bg-[#FBFAF6] z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col gap-6">
              {/* Drawer Header */}
              <div className="flex justify-between items-center border-b border-[#0D0D0C]/15 pb-4">
                <span className="font-sans font-bold text-[18px] text-[#0D0D0C]">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-[#0D0D0C] hover:text-[#B85E08] focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Vertical Nav Links */}
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPath === item.path || (currentPath === '' && item.path === '/');
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-sans text-[16px] sm:text-[17px] py-2.5 transition-colors border-b border-[#0D0D0C]/10 flex justify-between items-center ${isActive
                          ? 'font-semibold text-[#B85E08]'
                          : 'font-medium text-[#141312] hover:text-[#B85E08]'
                        }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#B85E08]" />}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer CTA */}
            <div className="pt-4 border-t border-[#0D0D0C]/10 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex flex-row justify-center items-center px-4 py-3 gap-2 w-full bg-[#D4A017] rounded-[5px] hover:bg-[#c29112] transition-colors no-underline"
              >
                <span className="font-sans font-medium text-[15px] text-[#FAF8F4]">
                  Book Chef Michael
                </span>
                <ArrowRight className="w-4 h-4 text-[#FAF8F4]" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
