import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Mail, Phone, ExternalLink, Send, Sparkles } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { num: '01', label: 'Overview / Hero', id: 'hero' },
    { num: '02', label: 'About Anas Khan', id: 'about' },
    { num: '03', label: 'Technical Arsenal', id: 'stack' },
    { num: '04', label: 'Featured Projects', id: 'projects' },
    { num: '05', label: 'Contact & Inquiries', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(id);
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0b100e] border-l border-white/10 z-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/50 overflow-y-auto"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#42e896] animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-neutral-300 font-bold font-display">
                    PORTFOLIO NAVIGATION
                  </span>
                </div>
                <button
                  id="close-menu-button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-8 space-y-2">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className="w-full group flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 text-left transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#42e896] opacity-70 group-hover:opacity-100">
                          {item.num}
                        </span>
                        <span className="text-lg sm:text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#42e896]" />
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Quick Action Button */}
              <div className="mt-8 p-4 rounded-2xl bg-[#121c17] border border-[#42e896]/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#42e896]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Available for immediate work</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Looking for a Junior Web Developer for web projects or opportunities? Let&apos;s build something exceptional.
                </p>
                <button
                  onClick={() => handleItemClick('contact')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#42e896] hover:bg-[#38cf84] text-black font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send a Project Inquiry</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3 text-xs text-neutral-400">
              <div className="text-white font-medium mb-1">Direct Contacts</div>
              <a
                href="mailto:ak28anaskhan@gmail.com"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-[#42e896] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#42e896]" />
                <span>ak28anaskhan@gmail.com</span>
              </a>
              <a
                href="tel:+923220235506"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-[#42e896] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#42e896]" />
                <span>+92 322 0235506</span>
              </a>

              <div className="flex items-center gap-3 pt-3 text-[11px] text-neutral-400">
                <a
                  href="https://www.linkedin.com/in/anas-khan-005b22332/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#42e896] transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://github.com/anaskhan28ak"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#42e896] transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="text-[10px] text-neutral-600 pt-1">
                ©2025 Anas Khan • Karachi, Pakistan
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

