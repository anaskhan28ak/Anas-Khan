import React, { useState } from 'react';
import techStackImage from '../assets/images/tech_stack.png';
import { 
  Code2, 
  Server, 
  Database, 
  Globe, 
  GitBranch, 
  Layout, 
  Lightbulb, 
  Check, 
  Sparkles 
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const skillsList = [
    'Problem Solving',
    'Responsive Web Development',
    'Frontend & Backend Development',
    'Database Management',
    'Quick Learner',
    'Team Collaboration',
  ];

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code2,
      tools: [
        { name: 'HTML5', color: '#e34f26' },
        { name: 'CSS3', color: '#1572b6' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'Bootstrap', color: '#7952b3' },
        { name: 'jQuery', color: '#0769ad' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      tools: [
        { name: 'PHP', color: '#777bb4' },
        { name: 'Laravel', color: '#ff2d20' },
        { name: 'Python', color: '#3776ab' },
        { name: 'C#', color: '#239120' },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      icon: Database,
      tools: [
        { name: 'MySQL', color: '#00758f' },
        { name: 'SQL', color: '#e48e00' },
        { name: 'Firestore', color: '#ffca28' },
      ],
    },
    {
      id: 'cms',
      title: 'CMS',
      icon: Globe,
      tools: [{ name: 'WordPress', color: '#21759b' }],
    },
    {
      id: 'version_control',
      title: 'Version Control',
      icon: GitBranch,
      tools: [
        { name: 'Git', color: '#f05032' },
        { name: 'GitHub', color: '#ffffff' },
      ],
    },
    {
      id: 'web_dev',
      title: 'Web Development',
      icon: Layout,
      tools: [
        { name: 'Responsive Web Design', color: '#42e896' },
        { name: 'Basic Full-Stack Development', color: '#42e896' },
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 bg-transparent overflow-hidden selection:bg-[#42e896]/30 selection:text-[#42e896]"
    >
      {/* Ambient background glow matching the hero and about sections */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[800px] sm:w-[1300px] h-[500px] sm:h-[850px] ambient-blur-glow rounded-full opacity-55"></div>
      </div>

      {/* Screen Reader Semantic Accessibility */}
      <div className="sr-only">
        <h2>My Tech Stack</h2>
        <p>
          Technologies and tools I work with to build modern, responsive, and user-focused web applications.
        </p>
        <h3>Frontend Development</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
        </ul>
        <h3>Backend Development</h3>
        <ul>
          <li>PHP</li>
          <li>Laravel</li>
          <li>Python</li>
          <li>C#</li>
        </ul>
        <h3>Database</h3>
        <ul>
          <li>MySQL</li>
          <li>SQL</li>
          <li>Firestore</li>
        </ul>
        <h3>CMS</h3>
        <ul>
          <li>WordPress</li>
        </ul>
        <h3>Version Control</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
        <h3>Web Development</h3>
        <ul>
          <li>Responsive Web Design</li>
          <li>Basic Full-Stack Development</li>
        </ul>
        <h3>Additional Skills</h3>
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Main Container - Fullscreen Stretched Layout Matching User Reference */}
      <div className="relative w-full max-w-[1536px] mx-auto flex flex-col items-center justify-center z-10 px-2 sm:px-4 md:px-6 py-6 sm:py-10">
        
        {/* Visual Graphic Container with Pixel-Perfect Aspect Ratio and Interactive Overlays */}
        <div className="relative w-full aspect-[1536/1024] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] border border-white/10 bg-[#0a0f0d]">
          
          {/* Exact Reference Artwork */}
          <img
            src={techStackImage}
            alt="Tech Stack - Anas Khan Portfolio"
            className="w-full h-full object-contain object-center select-none pointer-events-none"
          />

          {/* Interactive Overlay Hotspots on the Bento Cards */}

          {/* Hotspot 1: Frontend Development Card */}
          <div
            onMouseEnter={() => setActiveCard('frontend')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'frontend'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '34.5%',
              top: '9.8%',
              width: '35.5%',
              height: '21.0%',
            }}
          />

          {/* Hotspot 2: Backend Development Card */}
          <div
            onMouseEnter={() => setActiveCard('backend')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'backend'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '71.5%',
              top: '9.8%',
              width: '25.0%',
              height: '21.0%',
            }}
          />

          {/* Hotspot 3: Database Card (MySQL) */}
          <div
            onMouseEnter={() => setActiveCard('database')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'database'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '34.5%',
              top: '32.4%',
              width: '35.5%',
              height: '18.5%',
            }}
          />

          {/* Hotspot 4: CMS Card (WordPress) */}
          <div
            onMouseEnter={() => setActiveCard('cms')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'cms'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '71.5%',
              top: '32.4%',
              width: '25.0%',
              height: '18.5%',
            }}
          />

          {/* Hotspot 5: Version Control Card (Git & GitHub) */}
          <div
            onMouseEnter={() => setActiveCard('version_control')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'version_control'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '34.5%',
              top: '52.6%',
              width: '30.5%',
              height: '19.5%',
            }}
          />

          {/* Hotspot 6: Web Development Card */}
          <div
            onMouseEnter={() => setActiveCard('web_dev')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'web_dev'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '66.5%',
              top: '52.6%',
              width: '30.0%',
              height: '19.5%',
            }}
          />

          {/* Hotspot 7: Additional Skills Strip */}
          <div
            onMouseEnter={() => setActiveCard('additional')}
            onMouseLeave={() => setActiveCard(null)}
            className={`absolute rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto cursor-default ${
              activeCard === 'additional'
                ? 'bg-[#42e896]/5 border border-[#42e896]/40 shadow-[0_0_30px_rgba(66,232,150,0.12)]'
                : 'border border-transparent'
            }`}
            style={{
              left: '34.5%',
              top: '73.8%',
              width: '62.0%',
              height: '18.2%',
            }}
          />

        </div>

        {/* Mobile / Tablet Screen Responsive Cards Breakdown (Visible on < lg screens) */}
        <div className="flex lg:hidden flex-col w-full max-w-2xl gap-5 mt-8 pt-6 border-t border-white/10">
          
          <div className="text-center">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              MY TECH STACK
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#42e896] uppercase mt-1">
              TECH STACK
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-lg mx-auto">
              Technologies and tools I work with to build modern, responsive, and user-focused web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="rounded-xl border border-white/10 bg-[#0c120f] p-4 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-3 text-[#42e896]">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">
                      {cat.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-200"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Chips for Mobile */}
          <div className="rounded-xl border border-white/10 bg-[#0c120f] p-4 mt-1">
            <div className="flex items-center gap-2 mb-3 text-[#42e896]">
              <Lightbulb className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">
                Additional Skills
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#42e896]/10 text-neutral-200 border border-[#42e896]/20"
                >
                  <Check className="w-3 h-3 text-[#42e896]" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mt-2">
            <span className="text-xs font-mono text-[#42e896] tracking-widest uppercase">
              CODE / BUILD / IMPROVE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
