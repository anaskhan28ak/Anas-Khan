import React from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  return (
    <header className="w-full flex items-center justify-between pt-6 sm:pt-8 md:pt-10 px-6 sm:px-10 md:px-14 z-20">
      {/* Brand Name */}
      <div className="flex items-center">
        <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase font-display">
          ANAS KHAN
        </span>
      </div>

      {/* Menu Capsule Pill */}
      <button
        id="hero-menu-pill-button"
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="group bg-white hover:bg-neutral-100 text-black px-4 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-3 sm:gap-4 shadow-md transition-all duration-200 cursor-pointer active:scale-95 select-none"
      >
        <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-neutral-900">
          Menu
        </span>
        {/* Capsule icon with inner dots/dash */}
        <div className="bg-neutral-900 group-hover:bg-black text-white w-6 h-3.5 rounded-full flex items-center justify-center gap-[2px] px-1 transition-colors">
          <span className="w-1 h-1 rounded-full bg-white inline-block"></span>
          <span className="w-1.5 h-[2px] rounded-full bg-white/70 inline-block"></span>
        </div>
      </button>
    </header>
  );
};
