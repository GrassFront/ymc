import React, { useState } from 'react';
import { Lock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import instaLogo from '../assets/insta.logo.png';
import youtubeLogo from '../assets/youtube.logo.png';
import fbLogo from '../assets/fb.logo.png';
import linkedinLogo from '../assets/Linkedin.logo.png';
import xLogo from '../assets/x.logo.png';

export default function ContactForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState('');

  const enquiryOptions = [
    'Private Dining',
    'Consulting',
    'Events',
    'Workshops',
    'Brand Collaboration',
    'Media',
    'Other'
  ];

  return (
    <div className="box-border flex flex-row items-start px-9 py-8 gap-9 mx-auto w-[1360px] min-h-[904px] bg-white border border-[#B45A08]/20 rounded-xl font-['Inter']">

      {/* Contact Information (Left Column) */}
      <div className="flex flex-col justify-between items-start gap-[18px] w-[399px] h-full bg-white">

        {/* Section Label */}
        <div className="flex flex-row items-center gap-[18px] w-full">
          <div className="text-[#B45A08] font-semibold text-[18px] leading-[22px] tracking-[0.12em]">
            GET IN TOUCH
          </div>
          <div className="w-[50px] h-[1px] bg-[#B45A08]"></div>
        </div>

        {/* Studio Address */}
        <div className="flex flex-row items-start gap-[18px] w-full">
          {/* Icon */}
          <div className="flex flex-col justify-center items-center w-[64px] h-[64px] bg-white border border-[#B45A08] rounded-full shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B86A12" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          {/* Copy */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="font-semibold text-[18px] leading-[22px] text-[#1A1A1A]">
              Studio Address
            </div>
            <div className="font-normal text-[16px] leading-[27px] text-[#1A1A1A]">
              YCM Studio SCO [number], Sector 25 Panchkula, Haryana, India
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-row items-start gap-[18px] w-full">
          {/* Icon */}
          <div className="flex flex-col justify-center items-center w-[64px] h-[64px] bg-white border border-[#B45A08] rounded-full shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B86A12" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          {/* Copy */}
          <div className="flex flex-col items-start gap-2">
            <div className="font-semibold text-[18px] leading-[22px] text-[#1A1A1A]">
              Email
            </div>
            <div className="font-normal text-[16px] leading-[27px] text-[#1A1A1A]">
              chefmichaelycm@gmail.com
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-row items-center gap-[18px] w-full">
          {/* Icon */}
          <div className="flex flex-col justify-center items-center w-[64px] h-[64px] bg-white border border-[#B45A08] rounded-full shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B86A12" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          {/* Copy */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="font-semibold text-[18px] leading-[22px] text-[#1A1A1A]">
              Phone
            </div>
            <div className="font-normal text-[16px] leading-[27px] text-[#1A1A1A]">
              +91 88007 57146
            </div>
          </div>
        </div>

        {/* Website */}
        <div className="flex flex-row items-center gap-[18px] w-full">
          {/* Icon */}
          <div className="flex flex-col justify-center items-center w-[64px] h-[64px] bg-white border border-[#B45A08] rounded-full shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B86A12" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          {/* Copy */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="font-semibold text-[18px] leading-[22px] text-[#1A1A1A]">
              Website
            </div>
            <div className="font-normal text-[16px] leading-[27px] text-[#1A1A1A]">
              www.chefmichael.in
            </div>
          </div>
        </div>

        {/* Follow Chef Michael */}
        <div className="font-semibold text-[17px] leading-[21px] text-[#1A1A1A] mt-4">
          Follow Chef Michael
        </div>

        {/* Social Links */}
        <div className="flex flex-row items-start gap-[14px] w-full">
          <a href="#" className="opacity-100 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={instaLogo} alt="Instagram" className="w-[46px] h-[46px] object-contain" />
          </a>
          <a href="#" className="w-[46px] h-[46px] rounded-full border border-[rgba(180,90,8,0.3)] flex items-center justify-center hover:bg-[rgba(180,90,8,0.05)] transition-colors flex-shrink-0">
            <img src={youtubeLogo} alt="YouTube" className="w-[24px] h-[24px] object-contain" />
          </a>
          <a href="#" className="w-[46px] h-[46px] rounded-full border border-[rgba(180,90,8,0.3)] flex items-center justify-center hover:bg-[rgba(180,90,8,0.05)] transition-colors flex-shrink-0">
            <img src={fbLogo} alt="Facebook" className="w-[24px] h-[24px] object-contain" />
          </a>
          <a href="#" className="opacity-100 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={xLogo} alt="X" className="w-[46px] h-[46px] object-contain" />
          </a>
          <a href="#" className="opacity-100 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={linkedinLogo} alt="LinkedIn" className="w-[46px] h-[46px] object-contain" />
          </a>
        </div>

        {/* Quick Connect */}
        <div className="box-border flex flex-row items-start p-[14px_16px] gap-[18px] w-[399px] h-[120px] bg-white border border-[#B45A08]/20 rounded-lg mt-auto">
          {/* QR */}
          <div className="w-[84px] h-[84px] flex items-center justify-center bg-white flex-shrink-0">
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="84" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10 10H34V34H10V10ZM16 16V28H28V16H16Z" fill="#111111" />
              <rect x="20" y="20" width="4" height="4" fill="#111111" />
              <path fillRule="evenodd" clipRule="evenodd" d="M50 10H74V34H50V10ZM56 16V28H68V16H56Z" fill="#111111" />
              <rect x="60" y="20" width="4" height="4" fill="#111111" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10 50H34V74H10V50ZM16 56V68H28V56H16Z" fill="#111111" />
              <rect x="20" y="60" width="4" height="4" fill="#111111" />
              <rect x="50" y="50" width="10" height="10" fill="#111111" />
              <rect x="64" y="50" width="10" height="10" fill="#111111" />
              <rect x="50" y="64" width="10" height="10" fill="#111111" />
              <rect x="40" y="40" width="10" height="10" fill="#111111" />
              <rect x="10" y="40" width="20" height="6" fill="#111111" />
              <rect x="68" y="68" width="6" height="6" fill="#111111" />
            </svg>
          </div>
          <div className="flex flex-col items-start gap-2 w-[170px]">
            <div className="font-semibold text-[17px] leading-[21px] text-[#B45A08]">
              Quick Connect
            </div>
            <div className="font-normal text-[14px] leading-[22px] text-[#1A1A1A]">
              Scan the QR code to chat on WhatsApp or book an appointment.
            </div>
          </div>
        </div>

      </div>

      {/* Vertical Divider */}
      <div className="w-[1px] h-full bg-[#B45A08] opacity-20"></div>

      {/* Enquiry Form (Right Column) */}
      <div className="flex flex-col items-start gap-[16px] w-[820px] h-full bg-white">

        {/* Section Label */}
        <div className="flex flex-row items-center gap-[18px] w-full">
          <div className="text-[#B45A08] font-semibold text-[18px] leading-[22px] tracking-[0.1em]">
            SEND US AN ENQUIRY
          </div>
          <div className="w-[50px] h-[1px] bg-[#B45A08]"></div>
        </div>

        {/* Name and Phone */}
        <div className="flex flex-row items-start gap-[16px] w-full">
          <input
            type="text"
            placeholder="Your Name *"
            className="box-border flex flex-col justify-center items-start px-6 w-[402px] h-[60px] bg-[#FDFBF7] border border-[#B45A08]/20 rounded-lg font-normal text-[17px] leading-[21px] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-80 outline-none focus:border-[#B45A08]"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            className="box-border flex flex-col justify-center items-start px-6 w-[402px] h-[60px] bg-[#FDFBF7] border border-[#B45A08]/20 rounded-lg font-normal text-[17px] leading-[21px] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-80 outline-none focus:border-[#B45A08]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address *"
          className="box-border flex flex-col justify-center items-start px-6 w-[820px] h-[60px] bg-[#FDFBF7] border border-[#B45A08]/20 rounded-lg font-normal text-[17px] leading-[21px] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-80 outline-none focus:border-[#B45A08]"
        />

        {/* Enquiry Type (Select representation) */}
        <div className="box-border flex flex-col items-start pt-[18px] px-6 gap-[14px] w-[820px] h-auto pb-4 bg-[#FDFBF7] border border-[#B45A08]/20 rounded-lg transition-all duration-300">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex flex-row justify-between items-center w-full opacity-80 cursor-pointer"
          >
            <div className={`font-normal text-[17px] leading-[21px] ${selectedEnquiry ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>
              {selectedEnquiry || 'Enquiry Type *'}
            </div>
            <div className="w-[22px] h-[22px] flex items-center justify-center">
              {isDropdownOpen ? (
                <ChevronUp className="w-[20px] h-[20px] text-[#B86A12]" strokeWidth={1.5} />
              ) : (
                <ChevronDown className="w-[20px] h-[20px] text-[#B86A12]" strokeWidth={1.5} />
              )}
            </div>
          </div>

          {isDropdownOpen && (
            <>
              <div className="w-full h-[1px] bg-[#B45A08] opacity-20"></div>
              {/* Options */}
              <div className="flex flex-col items-start gap-[10px] w-full opacity-80 mt-2">
                {enquiryOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => { setSelectedEnquiry(option); setIsDropdownOpen(false); }}
                    className="font-normal text-[16px] leading-[19px] text-[#1A1A1A] cursor-pointer hover:text-[#B45A08] transition-colors w-full"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Message */}
        <textarea
          placeholder="Tell us about your project or enquiry *"
          className="box-border flex flex-col items-start pt-[20px] px-6 w-[820px] h-[130px] bg-[#FDFBF7] border border-[#B45A08]/20 rounded-lg font-normal text-[17px] leading-[21px] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-80 outline-none focus:border-[#B45A08] resize-none"
        ></textarea>

        {/* Submit Button */}
        <button className="box-border flex flex-row justify-center items-center px-5 gap-[26px] w-[820px] h-[62px] bg-[#D4A017] border border-[#EB9E47] rounded hover:bg-[#B8860B] transition-colors mt-2">
          <span className="font-semibold text-[17px] leading-[21px] text-white">
            Send Enquiry
          </span>
          <ArrowRight className="w-[20px] h-[20px] text-white" strokeWidth={1.5} />
        </button>

        {/* Privacy Note */}
        <div className="flex flex-row items-center gap-[14px] mt-2">
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <Lock className="w-[18px] h-[18px] text-[#B86A12]" strokeWidth={2} />
          </div>
          <div className="font-semibold text-[14px] leading-[17px] text-[#1A1A1A]">
            We respect your privacy. Your information is safe with us.
          </div>
        </div>

      </div>
    </div>
  );
}
