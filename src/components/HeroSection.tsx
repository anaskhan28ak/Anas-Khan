import React, { useState } from 'react';
import heroCardImage from '../assets/images/anas_khan_card.png';
import { ChevronDown, Copy, Check, ExternalLink, Mail, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenMenu: () => void;
  onCopyDetail: (text: string, label: string) => void;
  onScrollToAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMenu,
  onCopyDetail,
  onScrollToAbout,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    setCopiedKey(label);
    onCopyDetail(text, label);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-3 py-6 sm:px-6 md:px-8"
    >
      {/* Ambient background glow matching the emerald aesthetic */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[800px] sm:w-[1300px] h-[500px] sm:h-[850px] ambient-blur-glow rounded-full opacity-60" />
      </div>

      {/* Screen Reader Semantic Text for SEO & Accessibility */}
      <div className="sr-only">
        <h1>ANAS KHAN - Web Developer</h1>
        <p>Hey, I&apos;m a Web Developer, Anas Khan.</p>
        <p>
          Motivated and detail-oriented Junior Web Developer with a strong foundation in software engineering and modern web technologies. Currently pursuing DAE in Electronics from SEZIST college and a diploma in Software Engineering (ACCP AI) from Aptech.
        </p>
        <p>Email: ak28anaskhan@gmail.com | Phone: +92 322 0235506</p>
      </div>

      {/* Main Exact Reference Card Container */}
      <div className="relative w-[min(1288px,94vw)] aspect-[1288/915] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_90px_rgba(66,232,150,0.14)] bg-[#070b09] transition-all">
        
        {/* Exact Reference Artwork (Face, lighting, typography, and card composition) */}
        <img
          src={heroCardImage}
          alt="Anas Khan Junior Web Developer Portfolio Hero"
          className="w-full h-full object-contain object-center select-none pointer-events-none"
        />

        {/* ================= Interactive Hotspots ================= */}

        {/* Hotspot 1: Top Right Menu Button */}
        <button
          id="hero-menu-button-hotspot"
          onClick={onOpenMenu}
          aria-label="Open portfolio menu"
          className="group absolute rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]"
          style={{
            left: '79.2%',
            top: '2.2%',
            width: '13.0%',
            height: '4.9%',
          }}
          title="Open Menu"
        >
          <div className="w-full h-full rounded-full group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center" />
        </button>

        {/* Hotspot 2: Email (Bottom Left) */}
        <button
          onClick={() => handleCopy('ak28anaskhan@gmail.com', 'email')}
          aria-label="Copy email address"
          className="group absolute cursor-pointer rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/70"
          style={{
            left: '6.5%',
            top: '88.2%',
            width: '18.0%',
            height: '2.8%',
          }}
          title="Click to copy email: ak28anaskhan@gmail.com"
        >
          <div className="w-full h-full rounded border border-transparent group-hover:border-[#42e896]/40 group-hover:bg-[#42e896]/10 transition-all flex items-center justify-end pr-1">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#42e896] bg-black/90 px-1.5 py-0.5 rounded shadow flex items-center gap-1 font-mono">
              {copiedKey === 'email' ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
              {copiedKey === 'email' ? 'Copied!' : 'Copy Email'}
            </span>
          </div>
        </button>

        {/* Hotspot 3: Phone (Bottom Left) */}
        <button
          onClick={() => handleCopy('+92 322 0235506', 'phone number')}
          aria-label="Copy phone number"
          className="group absolute cursor-pointer rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/70"
          style={{
            left: '6.5%',
            top: '91.0%',
            width: '14.0%',
            height: '2.8%',
          }}
          title="Click to copy phone: +92 322 0235506"
        >
          <div className="w-full h-full rounded border border-transparent group-hover:border-[#42e896]/40 group-hover:bg-[#42e896]/10 transition-all flex items-center justify-end pr-1">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#42e896] bg-black/90 px-1.5 py-0.5 rounded shadow flex items-center gap-1 font-mono">
              {copiedKey === 'phone number' ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
              {copiedKey === 'phone number' ? 'Copied!' : 'Copy Phone'}
            </span>
          </div>
        </button>

        {/* Hotspot 4: LinkedIn Link (Bottom Right) */}
        <a
          href="https://www.linkedin.com/in/anas-khan-005b22332/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Anas Khan LinkedIn profile"
          className="group absolute cursor-pointer rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/70"
          style={{
            left: '64.8%',
            top: '89.6%',
            width: '6.2%',
            height: '2.8%',
          }}
          title="Open LinkedIn Profile"
        >
          <div className="w-full h-full rounded border border-transparent group-hover:border-[#42e896]/40 group-hover:bg-[#42e896]/10 transition-all" />
        </a>

        {/* Hotspot 5: GitHub Link (Bottom Right) */}
        <a
          href="https://github.com/anaskhan28ak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Anas Khan GitHub profile"
          className="group absolute cursor-pointer rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/70"
          style={{
            left: '71.4%',
            top: '89.6%',
            width: '5.5%',
            height: '2.8%',
          }}
          title="Open GitHub Profile"
        >
          <div className="w-full h-full rounded border border-transparent group-hover:border-[#42e896]/40 group-hover:bg-[#42e896]/10 transition-all" />
        </a>

        {/* Hotspot 6: WhatsApp Link (Bottom Right) */}
        <a
          href="https://wa.me/923220235506"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group absolute cursor-pointer rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/70"
          style={{
            left: '77.2%',
            top: '89.6%',
            width: '7.3%',
            height: '2.8%',
          }}
          title="Chat on WhatsApp: +92 322 0235506"
        >
          <div className="w-full h-full rounded border border-transparent group-hover:border-[#42e896]/40 group-hover:bg-[#42e896]/10 transition-all" />
        </a>

        {/* Hotspot 7: Email Link (Bottom Right) */}
        <button
          onClick={() => handleCopy('ak28anaskhan@gmail.com', 'email')}
          aria-label="Copy email address"
          className="group absolute cursor-pointer rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/70"
          style={{
            left: '84.8%',
            top: '89.6%',
            width: '4.8%',
            height: '2.8%',
          }}
          title="Click to copy email: ak28anaskhan@gmail.com"
        >
          <div className="w-full h-full rounded border border-transparent group-hover:border-[#42e896]/40 group-hover:bg-[#42e896]/10 transition-all flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#42e896] bg-black/90 px-1 py-0.5 rounded shadow flex items-center gap-1 font-mono">
              {copiedKey === 'email' ? 'Copied!' : ''}
            </span>
          </div>
        </button>

      </div>

      {/* Mobile-Friendly Quick Contact Strip (Displays on small screens where text might be compact) */}
      <div className="flex md:hidden flex-wrap items-center justify-center gap-2.5 mt-5 pt-3 border-t border-white/10 w-full max-w-md text-xs text-neutral-300">
        <button
          onClick={() => handleCopy('ak28anaskhan@gmail.com', 'email')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-[#42e896] transition-colors border border-white/5"
        >
          <Mail className="w-3.5 h-3.5 text-[#42e896]" />
          <span>ak28anaskhan@gmail.com</span>
        </button>
        <button
          onClick={() => handleCopy('+92 322 0235506', 'phone number')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-[#42e896] transition-colors border border-white/5"
        >
          <Phone className="w-3.5 h-3.5 text-[#42e896]" />
          <span>+92 322 0235506</span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={onScrollToAbout}
        className="group mt-4 flex flex-col items-center text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-[#54f494] sm:text-[11px] cursor-pointer"
      >
        Scroll to explore
        <ChevronDown className="mt-1 h-4 w-4 animate-bounce text-[#54f494]" />
      </button>
    </section>
  );
};
