/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { MenuDrawer } from './components/MenuDrawer';
import { Check, Menu, ArrowUp, Send, Mail, Phone, ExternalLink } from 'lucide-react';
import backgroundImage from './assets/images/background.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyDetail = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position to display the floating header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full min-h-screen text-white selection:bg-[#42e896]/30 selection:text-[#42e896] relative isolate">
      {/* The visual field stays fixed while the portfolio content moves above it. */}
      <div className="fixed inset-0 -z-20 overflow-hidden bg-[#060907]" aria-hidden="true">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full scale-110 object-cover object-center opacity-90 blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#030604]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(2,5,3,0.18)_50%,rgba(2,5,3,0.66)_100%)]" />
      </div>
      
      {/* Sticky / Floating Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between ${
          scrolledPastHero
            ? 'bg-[#090e0b]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-transparent pointer-events-none'
        }`}
      >
        {/* Brand */}
        <div
          className={`flex items-center gap-2.5 transition-opacity duration-200 ${
            scrolledPastHero ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#42e896] shadow-sm shadow-[#42e896]/50"></span>
            <span className="font-bold text-sm tracking-wider uppercase font-display text-white group-hover:text-[#42e896] transition-colors">
              ANAS KHAN
            </span>
          </button>
        </div>

        {/* Action Links & Menu Trigger */}
        <div
          className={`flex items-center gap-3 sm:gap-4 transition-opacity duration-200 ${
            scrolledPastHero ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        >
          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-300">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#42e896] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('stack')}
              className="hover:text-[#42e896] transition-colors cursor-pointer"
            >
              Stack
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-[#42e896] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#42e896] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Dynamic Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-2 hover:bg-neutral-200 transition-all active:scale-95 shadow-md cursor-pointer pointer-events-auto"
            title="Open Portfolio Menu"
          >
            <span>Menu</span>
            <span className="font-mono text-xs">•••</span>
          </button>
        </div>
      </header>

      {/* 1. Hero Section (Fills full view, zero black margin) */}
      <HeroSection
        onOpenMenu={() => setIsMenuOpen(true)}
        onCopyDetail={handleCopyDetail}
        onScrollToAbout={() => scrollToSection('about')}
      />

      {/* 2. About Section */}
      <AboutSection onCopyDetail={handleCopyDetail} />

      {/* 3. Tech Stack Section */}
      <TechStackSection />

      {/* 4. Selected Projects Section */}
      <ProjectsSection />

      {/* 5. Contact Section */}
      <ContactSection onCopyNotice={showToast} />

      {/* Footer */}
      <footer className="w-full py-12 px-4 sm:px-8 md:px-12 bg-black/35 backdrop-blur-xl border-t border-white/10 relative z-20 text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="font-bold text-white tracking-wider font-display">
              ANAS KHAN
            </span>
            <span className="text-neutral-500 hidden sm:inline">|</span>
            <span>Junior Web Developer • Software Engineering (ACCP AI) & DAE Electronics • Aptech & SEZIST</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Dynamic Slide-out Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Toast Notification Container */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-[#0d1612] border border-[#42e896]/60 text-white rounded-full text-xs sm:text-sm font-medium shadow-2xl shadow-black/80 flex items-center gap-2.5 backdrop-blur-md"
          >
            <div className="w-5 h-5 rounded-full bg-[#42e896]/20 flex items-center justify-center text-[#42e896]">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
