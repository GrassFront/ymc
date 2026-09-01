import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ChevronDown, ChevronUp, ArrowRight, Lock, Mic } from 'lucide-react';
import contactHeroImg from '../assets/conatct1.jpg';
import mapBgImg from '../assets/map.jpg';
import ContactForm from '../components/ContactForm';

export default function Contact() {
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
    <div className="w-full flex flex-col items-center bg-[#FFFFFF] overflow-hidden">

      {/* Contact Hero / Full Bleed */}
      <div className="w-full min-h-[425px] h-auto bg-[#FFFFFF] flex flex-col lg:flex-row items-stretch relative overflow-hidden">

        {/* Left Spacer (Centers the content on screens > 1440px) */}
        <div className="hidden lg:block flex-shrink-0 bg-[#FFFFFF]" style={{ width: 'calc(max(0px, (100vw - 1440px) / 2))' }} />

        {/* Hero Copy */}
        <div className="flex-shrink-0 flex flex-col justify-center items-start pt-8 lg:pt-[42px] pr-4 sm:pr-8 lg:pr-[40px] pb-8 lg:pb-[42px] pl-4 sm:pl-12 lg:pl-[72px] gap-[26px] w-full lg:w-[640px] min-h-[425px] h-auto bg-[#FFFFFF] z-10 relative">

          {/* Eyebrow */}
          <div className="flex flex-row items-center gap-[18px]">
            <span className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[22px] tracking-[0.16em] text-[#B45A08] uppercase">
              CONTACT
            </span>
            <div className="w-[50px] sm:w-[66px] h-[1px] bg-[#B45A08]" />
          </div>

          {/* Heading */}
          <div className="flex flex-row items-start gap-[14px]">
            <span className="font-serif font-normal text-[44px] sm:text-[64px] leading-tight sm:leading-[85px] text-[#1A1A1A]">
              Let’s
            </span>
            <span className="font-serif font-normal text-[44px] sm:text-[64px] leading-tight sm:leading-[85px] text-[#B45A08]">
              Connect
            </span>
          </div>

          {/* Ornament */}
          <div className="w-[196px] h-[18px] relative flex items-center">
            {/* Decorative SVG for ornament */}
            <svg width="196" height="18" viewBox="0 0 196 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="9" x2="196" y2="9" stroke="#B86A12" strokeWidth="1" />
              <rect x="83" y="2" width="30" height="14" fill="#FFFFFF" />
              <path d="M98 4L105 14H91L98 4Z" fill="#B86A12" />
            </svg>
          </div>

          {/* Subtext */}
          <p className="font-serif italic font-normal text-[22px] sm:text-[30px] leading-snug sm:leading-[42px] text-[#1A1A1A] w-full max-w-[345px]">
            Let’s create, collaborate and inspire through the joy of great food.
          </p>
        </div>

        {/* Photo */}
        <div className="w-full lg:flex-grow relative h-[300px] sm:h-[425px] min-w-0">
          {/* Soft Fade */}
          <div className="hidden lg:block absolute left-0 top-0 w-[150px] h-[425px] bg-gradient-to-r from-[#FFFFFF] to-[rgba(255,255,255,0)] z-10" />
          <img src={contactHeroImg} alt="Contact Hero" className="w-full h-full object-cover object-center z-0" />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-[1440px] flex flex-col items-center pt-8 sm:pt-[60px] px-4 sm:px-8 lg:px-[54px] mx-auto bg-[#FFFFFF]">
        <ContactForm />
      </div>

      {/* Studio Location */}
      <div className="box-border flex flex-col items-center py-[18px] px-4 sm:px-8 lg:px-[54px] gap-[16px] w-full max-w-[1440px] h-auto bg-white mx-auto font-['Inter'] mb-10">
        
        {/* Section Title */}
        <div className="flex flex-row items-center justify-center gap-[14px] sm:gap-[18px] w-full max-w-[468px] min-h-[27px]">
          {/* Ornament Left */}
          <svg width="86" height="12" viewBox="0 0 86 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50px] sm:w-[86px] shrink-0">
            <path d="M0 6H35" stroke="#B86A12" strokeWidth="1.5"/>
            <path d="M51 6H86" stroke="#B86A12" strokeWidth="1.5"/>
            <path d="M35 6C38 6 40 4 43 1C46 4 48 6 51 6C48 6 46 7 43 8C40 7 38 6 35 6Z" fill="#B86A12"/>
          </svg>
          
          <div className="w-auto whitespace-nowrap text-center font-['Playfair_Display'] font-semibold text-[16px] sm:text-[20px] leading-[27px] tracking-[0.08em] text-[#B45A08]">
            OUR STUDIO LOCATION
          </div>

          {/* Ornament Right */}
          <svg width="86" height="12" viewBox="0 0 86 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50px] sm:w-[86px] shrink-0">
            <path d="M0 6H35" stroke="#B86A12" strokeWidth="1.5"/>
            <path d="M51 6H86" stroke="#B86A12" strokeWidth="1.5"/>
            <path d="M35 6C38 6 40 4 43 1C46 4 48 6 51 6C48 6 46 7 43 8C40 7 38 6 35 6Z" fill="#B86A12"/>
          </svg>
        </div>

        {/* Frame 184 */}
        <div className="flex flex-col items-center gap-[24px] w-full max-w-[1332px] h-auto">
          
          {/* Map and Visit Card */}
          <div 
            className="relative box-border w-full max-w-[1328px] min-h-[262px] h-auto border border-[#B45A08]/20 rounded-[10px] bg-cover bg-center p-4 lg:p-0 flex flex-col lg:block justify-end"
            style={{ backgroundImage: `url(${mapBgImg})` }}
          >
            {/* Map Pin Icon */}
            <div className="hidden lg:block absolute left-[45%] top-[35%]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#B86A12" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#B86A12"/>
                <circle cx="12" cy="9" r="2.5" fill="white" />
              </svg>
            </div>

            {/* Visit YCM Studio Card */}
            <div className="relative lg:absolute flex flex-col items-start p-[20px_26px_16px] gap-[12px] w-full max-w-[338px] min-h-[247px] left-0 lg:left-auto lg:right-4 top-0 lg:top-[7px] bg-white shadow-[0px_4px_14px_rgba(51,33,13,0.12)] rounded-[10px] mx-auto lg:mx-0">
              <div className="w-full max-w-[230px] font-['Playfair_Display'] font-semibold text-[24px] sm:text-[30px] leading-tight sm:leading-[40px] text-[#1A1A1A]">
                Visit YCM Studio
              </div>
              
              <div className="w-full max-w-[286px] font-['Inter'] font-semibold text-[14px] sm:text-[16px] leading-[25px] text-[#1A1A1A]">
                YCM Studio<br/>
                SCO [number]<br/>
                Sector 25, Panchkula<br/>
                Haryana, India
              </div>

              <button className="box-border flex flex-row justify-center items-center px-[clamp(12px,1.2vw+6px,18px)] gap-[clamp(8px,0.8vw+4px,14px)] w-full max-w-[250px] h-[clamp(36px,1vw+28px,42px)] border border-[#C48F45] rounded-[4px] mt-2 group hover:bg-[#FBF8F2] transition-colors cursor-pointer">
                <span className="font-semibold text-[clamp(12.5px,0.8vw+9px,14px)] leading-none text-[#B45A08] whitespace-nowrap">
                  Open in Google Maps
                </span>
                <ArrowRight className="w-[clamp(14px,0.8vw+10px,20px)] h-[clamp(16px,0.8vw+12px,24px)] text-[#B45A08] group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Media Enquiries Banner */}
          <div className="box-border flex flex-col lg:flex-row justify-between items-center p-4 sm:p-[24px] lg:px-[54px] w-full max-w-[1332px] min-h-[168px] h-auto bg-[#FBF8F2] border border-[#B86B12]/15 shadow-[0px_5px_16px_rgba(56,41,23,0.1)] gap-6 lg:gap-0 rounded-[10px]">
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[40px] text-center sm:text-left">
              {/* Microphone Icon */}
              <div className="box-border flex flex-col justify-center items-center w-[80px] sm:w-[112px] h-[80px] sm:h-[112px] bg-[#FFFEFB] border-[1.5px] border-[#B86B12]/85 rounded-full flex-shrink-0">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B86A12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                  <line x1="8" y1="22" x2="16" y2="22"></line>
                  <line x1="9" y1="9" x2="15" y2="9"></line>
                  <line x1="9" y1="5" x2="15" y2="5"></line>
                </svg>
              </div>

              {/* Copy */}
              <div className="flex flex-col justify-center items-center sm:items-start gap-[8px] sm:gap-[14px] w-full max-w-[488px]">
                <div className="w-full font-semibold text-[16px] sm:text-[18px] leading-[22px] tracking-[0.12em] text-[#B86B12]">
                  MEDIA ENQUIRIES
                </div>
                <div className="w-full font-['Playfair_Display'] font-medium text-[16px] sm:text-[20px] leading-snug sm:leading-[34px] text-[#171613]">
                  For interviews, press features, television appearances, brand media requests, or event collaborations.
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-[100px] bg-[#B86B12]/24"></div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px] w-full lg:w-auto">
              {/* Contact Details */}
              <div className="flex flex-col justify-center items-center sm:items-start gap-[16px] sm:gap-[22px] w-full max-w-[247px]">
                {/* Email */}
                <div className="flex flex-row items-center gap-[14px] sm:gap-[18px] w-full max-w-[280px]">
                  <Mail className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-[#B86A12] flex-shrink-0" strokeWidth={1.5} />
                  <div className="font-semibold text-[15px] sm:text-[18px] leading-[22px] text-[#171613] truncate">
                    media@chefmichael.in
                  </div>
                </div>
                {/* Phone */}
                <div className="flex flex-row items-center gap-[14px] sm:gap-[18px] w-full max-w-[280px]">
                  <Phone className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-[#B86A12] flex-shrink-0" strokeWidth={1.5} />
                  <div className="font-semibold text-[15px] sm:text-[18px] leading-[22px] text-[#171613]">
                    +91 98765 43210
                  </div>
                </div>
              </div>

              {/* Send Media Enquiry Button */}
              <button className="box-border flex flex-row justify-between items-center px-[clamp(16px,1.5vw+8px,25px)] w-full sm:w-[260px] h-[clamp(44px,1.5vw+34px,58px)] bg-[#D4A017] border border-[#EB9E47] hover:bg-[#B8860B] transition-colors group rounded cursor-pointer">
                <span className="font-semibold text-[clamp(13.5px,0.8vw+10px,17px)] leading-none text-white whitespace-nowrap">
                  Send Media Enquiry
                </span>
                <ArrowRight className="w-[clamp(16px,0.8vw+12px,23px)] h-[clamp(18px,0.8vw+14px,28px)] text-white group-hover:translate-x-1 transition-transform flex-shrink-0" strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
