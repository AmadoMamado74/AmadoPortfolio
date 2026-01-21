
import React, { useState, useRef } from 'react';
import {
  PortfolioData,
  Experience,
  Education,
  Project
} from './types';

type SectionId = 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'extra';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('summary');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isScrollingRef = useRef(false);

  const sectionRefs = {
    summary: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    extra: useRef<HTMLElement>(null),
  };
  const footerRef = useRef<HTMLElement>(null);

  // Scroll Spy Logic
  React.useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 150;

      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id as SectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [data, setData] = useState<PortfolioData>({
    contact: {
      name: "Ahmed Mohamed Hesham",
      email: "amadomamadoooo@gmail.com",
      phone: "+20 106 707 0499",
      linkedin: "https://www.linkedin.com/in/amadoo",
      github: "github.com/ahmedhesham",
      location: "Cairo, Egypt",
      portfolioUrl: "mechatronics.eui.edu"
    },
    summary: "Mechatronics Engineering student specializing in automation, control systems, mechanical design, and embedded programming. Demonstrated leadership as Mechatronics Department Representative with hands-on experience in robotics, multidisciplinary project execution, and cross-functional teamwork in fast-paced technical environments.",
    workExperience: [
      {
        id: '1',
        company: "Halliburton",
        role: "Wireline & Perforation Intern",
        period: "Sept 2025",
        location: "Katameya, Egypt",
        description: [
          "Acquired practical experience in wireline operations (open/cased-hole logging), pressure control systems, and tool maintenance.",
          "Proposed safety and efficiency improvements for workshop operations.",
          "Presented technical findings to company managers and instructors."
        ]
      },
      {
        id: '2',
        company: "Siemens Energy",
        role: "Spark Program Intern",
        period: "Aug 2025",
        location: "Ain Sokhna, Egypt",
        description: [
          "Operational insights into power generation and AI for predictive maintenance.",
          "Analyzed industrial cybersecurity and supply chain coordination."
        ]
      },
      {
        id: '3',
        company: "Schneider Electric",
        role: "Process Automation Intern",
        period: "July 2025",
        location: "Cairo, Egypt",
        description: [
          "Trained in industrial automation systems: PLC programming (Schneider, Foxboro DCS, Triconex) and HMI design.",
          "Gained exposure to digitization and digital transformation in industrial sectors."
        ]
      }
    ],
    education: [
      {
        id: 'e1',
        institution: "Egyptian University of Informatics",
        degree: "B.Sc. in Mechatronics Engineering, Level 4",
        period: "2022 – Present",
        location: "Egypt",
        gpa: "3.17"
      },
      {
        id: 'e2',
        institution: "Bashaer International School",
        degree: "IGCSE Program",
        period: "2019 – 2022",
        location: "Egypt"
      }
    ],
    skills: {
      mechanical: ["SolidWorks", "Autocad", "FEA", "G code", "Cnc machining", "3d printing"],
      systems: ["system identification", "Control", "plc", "TIA Portal", "Factory IO", "PLC SIM", "XINJE", "Ladder programing", "root locus", "Zigler", "PID tuning", "Matlab", "Simulink", "Simscape", "C programming", "Arm assembly language", "stm 32 Microelectronics"],
      electrical: ["PCB design", "Schematic capture", "protues", "EasyEda"]
    },
    projectCategories: [
      {
        title: "Mechanical Design & Simulation",
        projects: [
          {
            id: 'p1',
            title: "Double Mechanism Elevator",
            description: "Designed a compact elevator system using linear actuators and a scissor mechanism in SolidWorks; optimized for stability and space efficiency.",
            technologies: ["SolidWorks", "Actuators", "FEA", "Mechanical Design"]
          },
          {
            id: 'p2',
            title: "SDOF Resonance Frequency Vibration Test",
            description: "Developed a single-degree-of-freedom vibration system; modeled in SolidWorks and simulated dynamic behavior using Simscape Multibody to identify resonance conditions.",
            technologies: ["SolidWorks", "Simscape", "Dynamics", "Modeling"]
          },
          {
            id: 'p3',
            title: "5-DOF Robotic Arm",
            description: "Designed and built a robotic arm with five degrees of freedom, focusing on mechanical structure, joint configuration, and control system integration.",
            technologies: ["SolidWorks", "Robotics", "Design"]
          }
        ]
      },
      {
        title: "Embedded Systems, Control & Automation",
        projects: [
          {
            id: 'p4',
            title: "PLC-Based Bottle Capping & Filling Machine",
            description: "Engineered an automated production line using a XINJE PLC; integrated photoelectric sensors for detection, submersible pumps for filling, and pneumatic cylinders controlled by solenoids for the capping mechanism.",
            technologies: ["PLC", "XINJE", "Sensors", "Pneumatics"]
          },
          {
            id: 'p5',
            title: "DC Motor Speed Controller (PID)",
            description: "Designed a closed-loop speed controller using PID algorithms and implemented data cleaning techniques to filter electrical noise from the motor and microcontroller circuits. Performed system identification and modeling in MATLAB to optimize tuning parameters based on refined real-time encoder feedback.",
            technologies: ["PID", "MATLAB", "Control Systems", "Filters"]
          },
          {
            id: 'p6',
            title: "Autonomous Robotic Car with Target Manipulation",
            description: "Built an STM32-based robotic car capable of obstacle avoidance and target detection; integrated a 5-DOF robotic arm for object handling using embedded C programming and real-time control logic.",
            technologies: ["STM32", "Embedded C", "PID", "Robotics"]
          }
        ]
      },
      {
        title: "Programming Projects",
        projects: [
          {
            id: 'p7',
            title: "Snake Game (C Language)",
            description: "Developed a terminal-based snake game using C, implementing movement logic, collision detection, and scoring.",
            technologies: ["C", "Logic", "Low-level"]
          },
          {
            id: 'p8',
            title: "Country Guessing Game (C Language)",
            description: "Created a command-line guessing game in C, using string manipulation, conditionals, and loop structures for user interaction.",
            technologies: ["C", "Strings", "Interaction"]
          }
        ]
      },
      {
        title: "Data Analysis & Business Applications",
        projects: [
          {
            id: 'p9',
            title: "Solar Energy Data Analysis",
            description: "Analyzed over 700,000 solar energy data entries using Microsoft Excel; created data dashboards and visualizations to determine optimal installation periods and geographic locations.",
            technologies: ["Excel", "Data Analysis", "Visualization"]
          },
          {
            id: 'p10',
            title: "Solar Power Bank Business Pitch",
            description: "Developed a complete business plan for solar-powered charging banks; conducted market research, cost analysis, and built financial models including balance sheets, income statements, and ROI projections.",
            technologies: ["Business Plan", "Finance", "Market Research"]
          }
        ]
      }
    ],
    extracurriculars: [
      "Chassis Head – Formula Student Club, EUI",
      "Mechatronics Department Representative, EUI"
    ]
  });



  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = sectionRefs[id].current;
    if (element) {
      isScrollingRef.current = true;
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Allow scroll spy to resume after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  const scrollToContact = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const NavButton = ({ label, id, active }: { label: string, id: SectionId, active: boolean }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`group relative px-2 md:px-4 xl:px-6 py-4 transition-all duration-300 ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
    >
      <span className="relative z-10 text-[6.5px] md:text-[9px] xl:text-[10px] font-bold uppercase tracking-tight md:tracking-[0.2em] xl:tracking-[0.3em] whitespace-nowrap">
        {label}
      </span>
      {active && (
        <div className="absolute bottom-4 left-2 md:left-4 xl:left-6 right-2 md:right-4 xl:right-6 h-0.5 bg-white shadow-[0_0_10px_white]" />
      )}
    </button>
  );

  const visibleCategories = showAllProjects ? data.projectCategories : data.projectCategories.slice(0, 2);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-['Inter'] overflow-x-hidden">

      {/* PERSISTENT BACKGROUND - WORLD CLASS ENGINEERING AESTHETIC */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black">
          <img
            src="/background.jpg"
            className="w-full h-full object-cover grayscale brightness-[0.45] contrast-[1.1] opacity-75 transition-all duration-1000 object-[50%_25%]"
            alt="Ahmed Mohamed Hesham"
          />
        </div>
        {/* Adjusted gradient for better background visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] no-print border-b border-white/5 bg-black/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 h-20 md:h-24">
        <div className="hidden lg:flex items-center space-x-1">
          <NavButton id="summary" label="Summary" active={activeSection === 'summary'} />
          <NavButton id="experience" label="Work" active={activeSection === 'experience'} />
          <NavButton id="education" label="Education" active={activeSection === 'education'} />
          <NavButton id="skills" label="Skills" active={activeSection === 'skills'} />
          <NavButton id="projects" label="Projects" active={activeSection === 'projects'} />
          <NavButton id="extra" label="Extra" active={activeSection === 'extra'} />
        </div>

        <div className="lg:hidden flex items-center overflow-x-auto no-scrollbar py-2 max-w-[80%] border-l border-white/10 ml-1 gap-0">
          <NavButton id="summary" label="Summary" active={activeSection === 'summary'} />
          <NavButton id="experience" label="Work" active={activeSection === 'experience'} />
          <NavButton id="education" label="Edu" active={activeSection === 'education'} />
          <NavButton id="skills" label="Skills" active={activeSection === 'skills'} />
          <NavButton id="projects" label="Proj" active={activeSection === 'projects'} />
          <NavButton id="extra" label="Extra" active={activeSection === 'extra'} />
        </div>

        <button
          onClick={scrollToContact}
          className="group relative px-3 md:px-8 py-1.5 md:py-3 bg-white text-black rounded-full transition-all duration-300 hover:bg-zinc-200 active:scale-95 shadow-2xl shrink-0"
        >
          <span className="relative z-10 text-[7px] md:text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em]">Connect</span>
        </button>
      </nav>

      <div className="relative z-10 pt-24">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-8">
          <header className="max-w-[1800px] mx-auto w-full text-left">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Ahmed Mohamed<br /><span className="text-zinc-500">Hesham</span>
            </h1>

            <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-32">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[9px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[1em] uppercase mb-2 md:mb-4">Location</span>
                <span className="text-lg md:text-2xl font-light uppercase tracking-widest text-white">
                  {data.contact.location}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[9px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[1em] uppercase mb-2 md:mb-4">Network</span>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="text-lg md:text-2xl font-light uppercase tracking-widest text-zinc-400 hover:text-white transition-all underline decoration-zinc-800 underline-offset-[16px]">
                  LINKEDIN
                </a>
              </div>
            </div>
          </header>
        </section>

        {/* MAIN CONTENT */}
        <main className="relative">

          {/* Executive Summary Section */}
          <section ref={sectionRefs.summary} className="px-4 md:px-8 py-8 md:py-48">
            <div className="max-w-[1800px] mx-auto">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-32">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">00</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.05em] md:-ml-20 text-white text-left break-words">Executive Summary</h3>
              </div>
              <div className="relative p-6 md:p-16 border border-white/10 bg-black/40 backdrop-blur-md group">
                <div className="flex items-center justify-between gap-6 mb-8 md:mb-12">
                  <span className="text-zinc-400 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.5em] md:tracking-[1em]">Strategic Overview</span>
                </div>
                <p className="text-lg md:text-2xl lg:text-3xl font-extralight leading-relaxed md:leading-tight text-white italic tracking-tight text-left">
                  "{data.summary}"
                </p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section ref={sectionRefs.experience} className="pt-8 md:pt-48 pb-8 md:pb-48 px-4 md:px-8">
            <div className="max-w-[1800px] mx-auto">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-40">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">01</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.15em] md:-ml-20 text-white text-left break-words">Work Experience</h3>
              </div>
              <div className="space-y-16 md:space-y-48">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="group relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16">
                    <div className="md:col-span-1 text-left">
                      <span className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2 md:mb-4">{exp.period}</span>
                      <h4 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">{exp.company}</h4>
                    </div>
                    <div className="md:col-span-3 border-l-0 md:border-l border-white/5 pl-0 md:pl-16 group-hover:border-white/20 transition-all duration-700 text-left">
                      <h5 className="text-lg md:text-xl font-light text-zinc-400 mb-4 md:mb-10 uppercase tracking-[0.2em]">{exp.role}</h5>
                      <ul className="space-y-3 md:space-y-8">
                        {exp.description.map((d, i) => (
                          <li key={i} className="text-zinc-400 text-[14px] md:text-lg leading-relaxed font-light hover:text-white transition-colors">{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section ref={sectionRefs.education} className="pt-8 md:pt-48 pb-8 md:pb-48 px-4 md:px-8">
            <div className="max-w-[1800px] mx-auto">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-40">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">02</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.15em] md:-ml-20 text-white text-left break-words">Education</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-10">
                {data.education.map((edu) => (
                  <div key={edu.id} className="p-4 md:p-12 border border-white/10 bg-black/20 hover:border-white/40 transition-all duration-700 backdrop-blur-sm text-left">
                    <span className="text-[8px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest">{edu.period}</span>
                    <h4 className="text-lg md:text-2xl font-bold mt-2 md:mt-6 uppercase text-white">{edu.institution}</h4>
                    <p className="text-[12px] md:text-xl font-light text-zinc-400 mt-2 md:mt-6 tracking-wide italic">{edu.degree}</p>
                    {edu.gpa && (
                      <div className="mt-4 md:mt-10 pt-4 md:pt-8 border-t border-white/10 flex items-baseline justify-start gap-2 md:gap-4">
                        <span className="text-lg md:text-2xl font-black text-white uppercase tracking-tight">CGPA</span>
                        <span className="text-sm md:text-xl font-medium text-zinc-500">{edu.gpa}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section ref={sectionRefs.skills} className="pt-8 md:pt-48 pb-8 md:pb-48 px-4 md:px-8">
            <div className="max-w-[1800px] mx-auto">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-40">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">03</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.15em] md:-ml-20 text-white text-left break-words">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                {/* Mechanical Engineering */}
                <div className="space-y-8 md:space-y-10">
                  <h4 className="text-xs md:text-2xl font-black text-white uppercase tracking-tight md:tracking-[0.15em] mb-3 md:mb-12 border-b border-white/20 pb-2 md:pb-8 flex items-start">
                    Mechanical<br />Engineering
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-5">
                    {data.skills.mechanical.map((s) => (
                      <div key={s} className="group flex items-center gap-3 transition-all duration-300">
                        <div className="w-1 h-1 bg-white/40 group-hover:bg-white transition-all shrink-0" />
                        <span className="text-[10px] md:text-[14px] font-medium uppercase tracking-tight md:tracking-[0.1em] text-zinc-400 group-hover:text-white transition-colors">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System & Controls */}
                <div className="space-y-8 md:space-y-10">
                  <h4 className="text-xs md:text-2xl font-black text-white uppercase tracking-tight md:tracking-[0.15em] mb-3 md:mb-12 border-b border-white/20 pb-2 md:pb-8 flex items-start">
                    System &<br />Controls
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-5">
                    {data.skills.systems.map((s) => (
                      <div key={s} className="group flex items-center gap-3 transition-all duration-300">
                        <div className="w-1 h-1 bg-white/40 group-hover:bg-white transition-all shrink-0" />
                        <span className="text-[10px] md:text-[14px] font-medium uppercase tracking-tight md:tracking-[0.1em] text-zinc-400 group-hover:text-white transition-colors">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Electrical Engineering */}
                <div className="space-y-8 md:space-y-10">
                  <h4 className="text-xs md:text-2xl font-black text-white uppercase tracking-tight md:tracking-[0.15em] mb-3 md:mb-12 border-b border-white/20 pb-2 md:pb-8 flex items-start">
                    Electrical<br />Engineering
                  </h4>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
                    {data.skills.electrical.map((s) => (
                      <div key={s} className="group flex items-center gap-3 transition-all duration-300">
                        <div className="w-1 h-1 bg-white/40 group-hover:bg-white transition-all shrink-0" />
                        <span className="text-[10px] md:text-[14px] font-medium uppercase tracking-tight md:tracking-[0.1em] text-zinc-400 group-hover:text-white transition-colors">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section ref={sectionRefs.projects} className="pt-8 md:pt-48 pb-8 md:pb-48 px-4 md:px-8">
            <div className="max-w-[1800px] mx-auto">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-40">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">04</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.15em] md:-ml-20 text-white text-left break-words">Projects</h3>
              </div>

              <div className="space-y-16 md:space-y-32 mb-16 transition-all duration-700">
                {visibleCategories.map((category, idx) => (
                  <div key={idx} className="space-y-8 md:space-y-16">
                    <h4 className="text-white text-lg md:text-5xl font-black uppercase tracking-tight border-b-2 md:border-b-4 border-white pb-4 md:pb-6 inline-block text-left w-full md:w-auto">{category.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      {category.projects.map((p) => (
                        <div key={p.id} className="p-6 md:p-10 border border-white/10 bg-black/40 hover:bg-black/60 hover:border-white/40 transition-all duration-700 backdrop-blur-sm group text-left">
                          <h4 className="text-xl md:text-3xl font-bold uppercase leading-tight mb-4 md:mb-8 text-white">{p.title}</h4>
                          <p className="text-zinc-300 text-[12px] md:text-lg font-light leading-relaxed mb-6 md:mb-12">{p.description}</p>
                          <div className="flex flex-wrap justify-start gap-2 md:gap-3">
                            {p.technologies.map(t => (
                              <span key={t} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest py-1 md:py-2 px-3 md:px-4 bg-white/5 text-zinc-400 group-hover:text-white transition-colors">{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-12 py-5 border border-white/10 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                >
                  {showAllProjects ? 'See Less' : 'See More Projects'}
                </button>
              </div>
            </div>
          </section>

          {/* Extracurricular Activities */}
          <section ref={sectionRefs.extra} className="pt-8 md:pt-48 pb-8 md:pb-48 px-4 md:px-8">
            <div className="max-w-[1800px] mx-auto transition-all">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-40">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">05</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.15em] md:-ml-20 text-white text-left break-words">Extracurriculars</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data.extracurriculars.map((act, i) => (
                  <div key={i} className="flex flex-col justify-center p-6 md:p-10 border border-white/10 h-auto md:h-80 min-h-[160px] hover:border-white/40 transition-all duration-700 backdrop-blur-sm group hover:bg-black/40">
                    <span className="text-[8px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-[0.5em] md:tracking-[1em] mb-4 md:mb-10 block group-hover:text-zinc-300">Contribution.0{i + 1}</span>
                    <span className="text-[14px] md:text-2xl font-light uppercase tracking-tight text-white group-hover:text-white leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <footer ref={footerRef} className="pt-8 md:pt-64 pb-16 border-t border-white/10 no-print">
            <div className="max-w-[1800px] mx-auto px-4 md:px-8">
              <div className="flex flex-row items-center gap-4 md:gap-12 mb-8 md:mb-40 text-left">
                <span className="text-zinc-300/10 text-5xl md:text-[14rem] font-black leading-none select-none">06</span>
                <h3 className="text-[6.5vw] md:text-8xl font-bold uppercase tracking-tighter md:tracking-[0.15em] md:-ml-20 text-white text-left break-words">Contact</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-12 max-w-[1400px] mx-auto items-stretch">
                {/* Phone Card */}
                <div className="flex flex-col items-center justify-center p-6 md:p-16 border border-white/20 bg-white/5 hover:border-white hover:bg-white/10 transition-all duration-500 text-center group min-h-[140px] md:min-h-[220px] rounded-sm backdrop-blur-md">
                  <span className="text-[8px] md:text-[12px] font-bold uppercase tracking-[0.5em] md:tracking-[1em] text-zinc-400 block mb-4 md:mb-8 group-hover:text-white transition-colors">Direct Phone</span>
                  <span className="text-[10px] sm:text-sm md:text-3xl font-light tracking-[0.1em] text-white group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">
                    {data.contact.phone}
                  </span>
                </div>

                {/* Email Card */}
                <div className="flex flex-col items-center justify-center p-6 md:p-16 border border-white/20 bg-white/5 hover:border-white hover:bg-white/10 transition-all duration-500 text-center group min-h-[140px] md:min-h-[220px] rounded-sm overflow-hidden backdrop-blur-sm">
                  <span className="text-[8px] md:text-[12px] font-bold uppercase tracking-[0.5em] md:tracking-[1em] text-zinc-400 block mb-4 md:mb-8 group-hover:text-white transition-colors">Direct Email</span>
                  <span className="text-[10px] sm:text-sm md:text-2xl font-light tracking-tight text-white group-hover:scale-105 transition-transform duration-500 truncate w-full px-2 md:px-4">
                    {data.contact.email}
                  </span>
                </div>
              </div>

              <div className="mt-64 text-center">
                <span className="text-[11px] font-bold uppercase tracking-[3em] text-zinc-600">{data.contact.name} — MMXXV</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
