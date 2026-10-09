import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  X, 
  Sparkles, 
  ShoppingBag, 
  Scissors, 
  BookOpen,
  Activity,
  Compass,
  Globe,
  Briefcase
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterTabs = [
    'All',
    'Own Product',
    'Client Projects',
    'Hackathons',
    'Exam Projects',
  ];

  const projects: Project[] = [
    {
      id: 'bloompath',
      title: 'BloomPath',
      subtitle: 'AI-Powered Habit Tracker Webapp',
      category: 'Own Product',
      filterCategory: 'Own Product',
      icon: Sparkles,
      description:
        'Developed a responsive habit tracker website based on managing daily tasks and sprinting fast over productivity goals. Created clean layouts and interactive web components with a focus on usability and responsive design. Features "E.V", an integrated AI companion acting as a Friend, Teacher, Guider, and Planner.',
      highlights: [
        'Developed a responsive habit tracker for managing daily tasks and goal sprinting.',
        'Integrated "E.V" AI companion serving as Friend, Teacher, Guider, and Planner.',
        'Clean layouts and interactive web components highly focused on productivity and usability.',
      ],
      tags: ['React', 'JavaScript', 'AI Assistant (E.V)', 'Productivity', 'Habit Tracker', 'CSS3'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'khan-medico',
      title: 'Khan Medico',
      subtitle: 'Hospital Management & AI Health System',
      category: 'Client Project',
      filterCategory: 'Client Projects',
      icon: Activity,
      description:
        'Developed a responsive hospital website based on a comprehensive management system. Implemented multi-role authentication for Doctor, Receptionist, Patient, and Admin Panel, alongside two specialized AI features: an AI Diet Planner based on doctor precautions and an AI Disease Tracker based on symptoms.',
      highlights: [
        'Engineered multi-role authentication: Doctor, Receptionist, Patient, and Admin Panel.',
        'Integrated AI Diet Planner generating meal advice according to doctor precautions.',
        'Implemented AI Disease Tracker evaluating health recommendations based on symptoms.',
        'Created clean layouts and responsive components for medical management workflows.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'AI Healthcare', 'Multi-role Auth'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'career-ai',
      title: 'Career.AI',
      subtitle: 'AI-Driven Career Guidance Platform',
      category: 'Vision Aptech Competition',
      filterCategory: 'Hackathons',
      icon: Compass,
      description:
        'Developed a responsive career guidance journey website tailored for studies, courses, and certifications for the Vision Aptech Competition. Integrated "Carry", an AI companion functioning as a Friend, Teacher, Guider, and Planner to assist users in establishing milestones and achieving goals.',
      highlights: [
        'Vision Aptech Competition project for guided study roadmaps and career exploration.',
        'Integrated "Carry" AI companion serving as Friend, Teacher, Guider, and Planner.',
        'Enables users to establish milestones and achieve roadmap goals throughout their journey.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'AI Companion (Carry)', 'Bootstrap', 'Career Roadmaps'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'wandersync',
      title: 'WanderSync',
      subtitle: 'AI Travel Planner & Tour Website',
      category: 'Ticket to Techwizz (Global)',
      filterCategory: 'Hackathons',
      icon: Globe,
      description:
        'Developed a responsive tour website based on an intelligent AI travel planner system for the Ticket to Techwizz Global Competition. Created clean layouts and interactive web components with a dedicated focus on usability, fluid responsive design, and intuitive tour planning.',
      highlights: [
        'Developed for the Ticket to Techwizz Global Competition.',
        'Integrated AI Travel Planner system generating automated trip schedules and recommendations.',
        'Created clean layouts and interactive web components with mobile-first responsiveness.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'AI Travel Planner', 'Responsive Web', 'Bootstrap'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'skillsprint',
      title: 'SkillSprint',
      subtitle: 'AI Job & Internship Onboarding Journey',
      category: 'Techwizz (Global Competition)',
      filterCategory: 'Hackathons',
      icon: Briefcase,
      description:
        'Developed a responsive job & internship onboarding journey website for the Techwizz Global Competition. Focused on solving new-hire onboarding friction by utilizing AI to manage company policies, departmental rules, and task assignment without managers needing to re-read policies every time.',
      highlights: [
        'Built for the Techwizz Global Competition to streamline internship and job onboarding.',
        'Integrated AI policy manager eliminating manual policy re-reading during new hires.',
        'Automates departmental workflow setups and smart task assignments for staff.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'AI Task Manager', 'HR Tech', 'Bootstrap'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'elegance-salon',
      title: 'Elegance Salon',
      subtitle: 'AI-Enhanced Salon Web Application',
      category: 'E-Project Exam',
      filterCategory: 'Exam Projects',
      icon: Scissors,
      description:
        'Developed a comprehensive salon web application using HTML5, CSS3, JavaScript, PHP, and MySQL. Implemented interactive service selection features and integrated an innovative AI-powered image-generation feature that provides personalized visual previews based on user photos.',
      highlights: [
        'Integrated AI-powered image generation for personalized hairstyle and beard visual previews.',
        'Implemented service selection features for hairstyles, haircuts, hair colors, and beard styles.',
        'Engineered full-stack data flow with PHP backend and MySQL relational database.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'AI Generation'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'aura-watches',
      title: 'Aura Watches',
      subtitle: 'Dynamic E-Commerce Website',
      category: 'E-Project Exam',
      filterCategory: 'Exam Projects',
      icon: ShoppingBag,
      description:
        'Developed a dynamic e-commerce website for luxury watches using HTML5, CSS3, JavaScript, Bootstrap, and jQuery. Implemented responsive layouts, interactive frontend components, and product-focused pages with a user-friendly shopping experience.',
      highlights: [
        'Developed dynamic e-commerce product catalogs and cart interaction.',
        'Implemented responsive layouts and interactive frontend components.',
        'Designed product-focused pages with a user-friendly shopping experience.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'E-Commerce'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
    {
      id: 'beacon-publishers',
      title: 'Beacon Publishers',
      subtitle: 'Responsive Publisher Website',
      category: 'Client Project',
      filterCategory: 'Client Projects',
      icon: BookOpen,
      description:
        'Developed a responsive publisher website for a commercial client using HTML5, CSS3, JavaScript, and Bootstrap. Created clean layouts and interactive web components with a dedicated focus on usability, readability, and responsive design.',
      highlights: [
        'Client-commissioned responsive publisher website built to client specifications.',
        'Created clean editorial layouts and interactive web components.',
        'Focused on high usability, fluid typography, and mobile-first responsiveness.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Client Project'],
      githubUrl: 'https://github.com/anaskhan28ak',
      liveUrl: 'https://github.com/anaskhan28ak',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.filterCategory === selectedCategory);

  return (
    <section id="projects" className="w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#090e0b]/78 backdrop-blur-xl border-y border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#42e896]/10 border border-[#42e896]/20 text-[#42e896] text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // Selected Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
              Featured Works.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Own products, client deliverables, hackathon competitions, and academic exam applications showcasing frontend engineering, backend development, and AI integrations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          {filterTabs.map((tab) => {
            const count = tab === 'All'
              ? projects.length
              : projects.filter((p) => p.filterCategory === tab).length;
            const isActive = selectedCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#42e896] text-black shadow-lg shadow-[#42e896]/20'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#0c120f] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#42e896]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#42e896]/10 text-[#42e896] border border-[#42e896]/20">
                      {proj.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-[#42e896] transition-colors"
                        title="Open Live Preview"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#42e896]/10 flex items-center justify-center text-[#42e896] shrink-0 border border-[#42e896]/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#42e896] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed mb-6 mt-3">
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#42e896] mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags and Details trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-neutral-400 font-mono">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs text-[#42e896] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-[#0e1512] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#42e896] uppercase tracking-wider font-mono">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  Project Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42e896] mt-1 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#42e896] hover:bg-[#38cf84] text-black text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <span>Launch Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
