import React, { useState } from 'react';
import profileImage from '../assets/images/anas_profile_resume.png';
import { 
  GraduationCap, 
  Languages, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight,
  UserCheck
} from 'lucide-react';

interface AboutSectionProps {
  onCopyDetail?: (text: string, label: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCopyDetail }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    setCopiedKey(label);
    if (onCopyDetail) {
      onCopyDetail(text, label);
    } else {
      navigator.clipboard.writeText(text);
    }
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const strengths = [
    'Problem Solving',
    'Responsive Web Development',
    'Frontend & Backend Development',
    'Database Management',
    'Quick Learner',
    'Team Collaboration',
  ];

  const languages = [
    { name: 'English', proficiency: 'Professional Working' },
    { name: 'Urdu', proficiency: 'Native / Bilingual' },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent overflow-hidden selection:bg-[#42e896]/30 selection:text-[#42e896]"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[800px] sm:w-[1300px] h-[500px] sm:h-[850px] ambient-blur-glow rounded-full opacity-45" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto z-10 flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#42e896]/10 border border-[#42e896]/20 text-[#42e896] text-xs font-semibold uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>01 // Profile & Background</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-display">
              About <span className="text-[#54f494] drop-shadow-[0_0_24px_rgba(84,244,148,0.3)]">Me.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md">
            Junior Web Developer pursuing DAE in Electronics from SEZIST and Software Engineering (ACCP AI) at Aptech, focused on building practical, user-focused digital solutions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Portrait & Profile Identity (Span 4) */}
          <div className="md:col-span-4 bg-[#0a0f0d]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 flex flex-col items-center text-center justify-between shadow-xl shadow-black/50 hover:border-[#42e896]/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#42e896]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative w-40 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#42e896]/30 shadow-[0_0_25px_rgba(66,232,150,0.15)] mb-4 bg-[#050806]">
              <img
                src={profileImage}
                alt="Anas Khan"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#42e896] border border-[#42e896]/30">
                Verified
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white tracking-wide font-display">
                ANAS KHAN
              </h3>
              <p className="text-xs font-semibold text-[#42e896] uppercase tracking-wider font-mono">
                Junior Web Developer
              </p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#42e896] shrink-0" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>

            {/* Direct Profile Links */}
            <div className="flex items-center justify-center gap-2.5 mt-5 w-full pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/anas-khan-005b22332/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/5 hover:border-[#42e896]/40 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#42e896]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/anaskhan28ak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/5 hover:border-[#42e896]/40 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#42e896]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Card 2: Professional Summary & Mission (Span 8) */}
          <div className="md:col-span-8 bg-[#0a0f0d]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/50 hover:border-[#42e896]/40 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#42e896]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 text-[#42e896] text-xs font-mono uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Professional Summary</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                Building practical, user-focused digital experiences with modern web technologies.
              </h3>
              <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed font-normal mb-6">
                Motivated and detail-oriented Junior Web Developer with a strong foundation in software engineering and modern web technologies. Currently pursuing DAE in Electronics from SEZIST college and a diploma in Software Engineering (ACCP AI) from Aptech, with a keen interest in web development and building practical, user-focused solutions. As a fresher, eager to apply technical knowledge, gain professional experience, and contribute to a dynamic development team while continuously learning and improving.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleCopy('ak28anaskhan@gmail.com', 'email')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-[#42e896] text-xs font-medium border border-white/5 hover:border-[#42e896]/30 transition-colors cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#42e896]" />
                <span>ak28anaskhan@gmail.com</span>
                {copiedKey === 'email' ? <Check className="w-3 h-3 text-[#42e896]" /> : <Copy className="w-3 h-3 text-neutral-400" />}
              </button>

              <button
                onClick={() => handleCopy('+92 322 0235506', 'phone')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-[#42e896] text-xs font-medium border border-white/5 hover:border-[#42e896]/30 transition-colors cursor-pointer"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#42e896]" />
                <span>+92 322 0235506</span>
                {copiedKey === 'phone' ? <Check className="w-3 h-3 text-[#42e896]" /> : <Copy className="w-3 h-3 text-neutral-400" />}
              </button>
            </div>
          </div>

          {/* Card 3: Education (Span 5) */}
          <div className="md:col-span-5 bg-[#0a0f0d]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-black/50 hover:border-[#42e896]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#42e896]">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">Education</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#42e896]/10 text-[#42e896] border border-[#42e896]/20">
                  Dual Track
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="border-l-2 border-[#42e896] pl-3 py-0.5">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">
                    Aptech | Computer Education Institute
                  </h4>
                  <p className="text-xs font-semibold text-[#42e896]">
                    Diploma of Software Engineering (ACCP AI)
                  </p>
                </div>

                <div className="border-l-2 border-[#42e896]/50 pl-3 py-0.5">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">
                    Safee Edhi Zahabi (SEZIST) | Technical College
                  </h4>
                  <p className="text-xs font-semibold text-[#42e896]">
                    DAE in Electronics
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Badge Inside Education Column */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 mb-2.5">
                <Languages className="w-3.5 h-3.5 text-[#42e896]" />
                <span className="uppercase tracking-wider">Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-200"
                  >
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-[10px] text-[#42e896] font-mono">({lang.proficiency})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Key Strengths (Span 7) */}
          <div className="md:col-span-7 bg-[#0a0f0d]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-black/50 hover:border-[#42e896]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#42e896]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">Key Strengths</span>
                </div>
                <span className="text-xs text-neutral-400 font-mono">Core Competencies</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
                Key abilities applied across software engineering projects, collaboration with multidisciplinary teams, and fast adoption of emerging technologies:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#42e896]/30 hover:bg-[#42e896]/5 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#42e896]/15 flex items-center justify-center text-[#42e896] shrink-0 group-hover:bg-[#42e896] group-hover:text-black transition-colors">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-neutral-200 group-hover:text-white transition-colors">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[#42e896] text-[11px] uppercase tracking-wider">
                Leadership • Exceptional Communication • Strategic
              </span>
              <a
                href="#projects"
                className="text-[#42e896] hover:underline flex items-center gap-1 font-medium"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
