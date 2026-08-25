import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import navLogo from '../assets/navlogo.png';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Awards', path: '/awards' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

const SERVICES = [
  { label: 'Private Dining', path: '/services#private-dining' },
  { label: 'Consulting (YCM Studio)', path: '/services#consulting' },
  { label: 'Events', path: '/services#events' },
  { label: 'Workshops & Masterclasses', path: '/services#workshops' },
  { label: 'Brand Collaborations', path: '/services#collaborations' },
];

const MEDIA = [
  { label: 'Recipes', path: '/media#recipes' },
  { label: 'Videos', path: '/media#videos' },
  { label: 'Press & Features', path: '/media#press' },
  { label: 'Interviews', path: '/media#interviews' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0A06] flex flex-col items-center">
      {/* Container to maintain max-width matching the design, centered */}
      <div className="w-full max-w-[1440px] flex flex-col">

        {/* Footer Main */}
        <div className="flex flex-row justify-between items-start pt-[34px] pb-[25px] px-[86px] gap-[38px] w-full min-h-[320px]">

          {/* Brand Column */}
          <div className="flex flex-col items-start gap-[16px] w-[340px]">
            {/* Brand / Chef Michael Lockup */}
            <div className="flex flex-row items-center gap-[9.85px] w-[321px] h-[64.46px]">
              {/* Logo Icon Area */}
              <div className="w-[62.67px] h-[63.56px] relative flex-shrink-0 flex items-center justify-center">
                <img src={navLogo} alt="YCM Studio Logo" className="absolute inset-0 w-full h-full object-contain z-10" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>

              {/* Divider */}
              <div className="w-[0.9px] h-[64.46px] bg-[rgba(38,36,33,0.28)] flex-shrink-0" />

              {/* Name / Studio */}
              <div className="flex flex-col items-start gap-[6px] w-[198.74px]">
                <span className="font-sans font-normal text-[25.9619px] leading-[31px] tracking-[0.895238px] text-[#FFFFFF] whitespace-nowrap">
                  YCM STUDIO
                </span>
                <span className="font-sans font-semibold text-[12px] leading-[15px] tracking-[1.79048px] text-[#FFFFFF] whitespace-nowrap">
                  HOSPITAL & CONSULTANCY
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="font-sans font-normal text-[14px] leading-[21px] text-[#FFFFFF] w-[330px]">
              Celebrity Chef. Food Consultant.<br />
              Culinary Trainer. Crafting memorable<br />
              experiences through food, creativity,<br />
              and passion.
            </p>

            {/* Social Links */}
            <div className="flex flex-row items-start gap-[18px] h-[46px] mt-[4px]">
              <a href="#" className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#B86E2B] flex items-center justify-center hover:bg-[#B86E2B]/20 transition-colors group">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFFFFF]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#B86E2B] flex items-center justify-center hover:bg-[#B86E2B]/20 transition-colors group">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFFFFF]">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#B86E2B] flex items-center justify-center hover:bg-[#B86E2B]/20 transition-colors group">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFFFFF]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#D79C4C] flex items-center justify-center hover:bg-[#D79C4C]/20 transition-colors group">
                {/* Custom X SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFFFFF]">
                  <path d="M4 4l16 16M4 20L20 4" />
                </svg>
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#D79C4C] flex items-center justify-center hover:bg-[#D79C4C]/20 transition-colors group">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFFFFF]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start gap-[13px] w-[150px]">
            <h3 className="font-sans font-extrabold text-[14px] leading-[17px] tracking-[0.16em] text-[#FFFFFF] uppercase mb-[4px]">
              QUICK LINKS
            </h3>
            {QUICK_LINKS.map((link) => (
              <Link key={link.label} to={link.path} className="font-sans font-normal text-[14px] leading-[17px] text-[#FFFFFF] hover:text-[#D79C4C] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-start gap-[13px] w-[250px]">
            <h3 className="font-sans font-extrabold text-[14px] leading-[17px] tracking-[0.16em] text-[#FFFFFF] uppercase mb-[4px]">
              SERVICES
            </h3>
            {SERVICES.map((link) => (
              <Link key={link.label} to={link.path} className="font-sans font-normal text-[14px] leading-[17px] text-[#FFFFFF] hover:text-[#D79C4C] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Media Column */}
          <div className="flex flex-col items-start gap-[13px] w-[160px]">
            <h3 className="font-sans font-extrabold text-[14px] leading-[17px] tracking-[0.16em] text-[#FFFFFF] uppercase mb-[4px]">
              MEDIA
            </h3>
            {MEDIA.map((link) => (
              <Link key={link.label} to={link.path} className="font-sans font-normal text-[14px] leading-[17px] text-[#FFFFFF] hover:text-[#D79C4C] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-start gap-[16px] w-[250px]">
            <h3 className="font-sans font-extrabold text-[14px] leading-[17px] tracking-[0.16em] text-[#FFFFFF] uppercase mb-[4px]">
              CONTACT
            </h3>

            <div className="flex flex-row items-start gap-[13px] w-[250px]">
              <MapPin className="w-[18px] h-[18px] text-[#B86D29] flex-shrink-0 mt-[2px]" strokeWidth={1.6} />
              <span className="font-sans font-normal text-[14px] leading-[21px] text-[#FFFFFF]">
                YCM Studio,<br />
                Panchkula, Haryana, India
              </span>
            </div>

            <div className="flex flex-row items-start gap-[13px] w-[250px]">
              <Phone className="w-[18px] h-[18px] text-[#B86D29] flex-shrink-0" strokeWidth={1.6} />
              <a href="tel:+919876543210" className="font-sans font-normal text-[14px] leading-[21px] text-[#FFFFFF] hover:text-[#D79C4C] transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="flex flex-row items-start gap-[13px] w-[250px]">
              <Mail className="w-[18px] h-[18px] text-[#B86D29] flex-shrink-0" strokeWidth={1.5} />
              <a href="mailto:hello@chefmichael.in" className="font-sans font-normal text-[14px] leading-[21px] text-[#FFFFFF] hover:text-[#D79C4C] transition-colors">
                hello@chefmichael.in
              </a>
            </div>

            <div className="flex flex-row items-start gap-[13px] w-[250px]">
              <Globe className="w-[18px] h-[18px] text-[#B86D29] flex-shrink-0" strokeWidth={1.5} />
              <a href="https://www.chefmichael.in" target="_blank" rel="noreferrer" className="font-sans font-normal text-[14px] leading-[21px] text-[#FFFFFF] hover:text-[#D79C4C] transition-colors">
                www.chefmichael.in
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-row justify-between items-center px-[80px] w-full h-[70px] border-t border-[#333330]">
          <span className="font-sans font-normal text-[12.5px] leading-[15px] text-[#FFFFFF] opacity-50">
            © 2025 Chef Michael | YCM Studio. All Rights Reserved.
          </span>
          <div className="flex flex-row items-center gap-[14px] opacity-50">
            <Link to="/privacy-policy" className="font-sans font-normal text-[12.5px] leading-[15px] text-[#FFFFFF] hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <span className="font-sans font-normal text-[12.5px] leading-[15px] text-[#FFFFFF]">|</span>
            <Link to="/terms-conditions" className="font-sans font-normal text-[12.5px] leading-[15px] text-[#FFFFFF] hover:opacity-100 transition-opacity">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
