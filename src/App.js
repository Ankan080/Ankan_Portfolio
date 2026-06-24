import React, { useState, useEffect } from 'react';
import { 
  Code2, Database, FileSpreadsheet, BarChart2, 
  Terminal, Globe, Cpu, GitBranch, Github, 
  Linkedin, Mail, Download, ExternalLink, 
  Layers, Settings, ShieldCheck, Wrench
} from 'lucide-react';

export default function App() {
  // Navigation & Tab States
  const [activeSkillTab, setActiveSkillTab] = useState('All');
  const [projectTab, setProjectTab] = useState('Personal');
  const [scrolled, setScrolled] = useState(false);
  
  // Track Navbar glass scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Role Typing Animation
  const roles = ["IT Support Analyst", "Technical Support", "Quality Assurance", "Manual Tester", "IT Operations", "Growth Mindset", "Problem Solver", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];
    
    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 80); // Soothing, slightly faster typewriter entry
      
      if (displayedText === currentFullText) {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 40);
      
      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  // Skill Dataset From Video
  const skills = [
    { name: 'Python', level: 85, category: 'Programming Languages', icon: <Code2 size={18} /> },
    { name: 'SQL', level: 80, category: 'Programming Languages', icon: <Database size={18} /> },
    { name: 'Excel', level: 75, category: 'Data Analytics', icon: <FileSpreadsheet size={18} /> },
    { name: 'Power BI', level: 70, category: 'Data Analytics', icon: <BarChart2 size={18} /> },
    { name: 'Tableau', level: 65, category: 'Data Analytics', icon: <BarChart2 size={18} /> },
    { name: 'Pandas', level: 80, category: 'Data Analytics', icon: <Database size={18} /> },
    { name: 'NumPy', level: 70, category: 'Data Analytics', icon: <Terminal size={18} /> },
    { name: 'Scikit-Learn', level: 65, category: 'Machine Learning', icon: <Cpu size={18} /> },
    { name: 'TensorFlow', level: 60, category: 'Machine Learning', icon: <Layers size={18} /> },
    { name: 'Data Preprocessing', level: 70, category: 'Machine Learning', icon: <Settings size={18} /> },
    { name: 'Git', level: 80, category: 'Tools', icon: <GitBranch size={18} /> },
    { name: 'GitHub', level: 80, category: 'Tools', icon: <Github size={18} /> },
    { name: 'VS Code', level: 90, category: 'Tools', icon: <Code2 size={18} /> },
    { name: 'Jupyter Notebook', level: 85, category: 'Tools', icon: <Terminal size={18} /> },
    { name: 'Linux', level: 65, category: 'Tools', icon: <Wrench size={18} /> },
  ];

  // Role Target Cards From Video
  const rolesOfInterests = [
    { title: "Service Desk Engineer", tags: ["ITIL", "Ticket Management", "Troubleshooting", "Customer Service"] },
    { title: "Technical Support Engineer", tags: ["Problem Diagnosis", "Debugging", "Documentation", "Client Communication"] },
    { title: "Contract Roles", tags: ["Adaptability", "Quick Learning", "Project Delivery", "Multi-tasking"] },
    { title: "Apprenticeship Roles", tags: ["Learning Agility", "Mentorship", "Hands-on Practice", "Feedback Integration"] },
    { title: "IT Operations Engineer", tags: ["System Monitoring", "Infrastructure", "Automation", "Incident Response"] },
    { title: "QA Engineer", tags: ["Test Planning", "Bug Tracking", "Automation", "Manual Testing"] },
    { title: "Manual Tester", tags: ["Test Case Design", "Exploratory Testing", "Bug Reporting", "Requirement Analysis"] },
    { title: "Junior Data Analyst", tags: ["SQL", "Python", "Data Visualization", "Statistical Analysis"] },
    { title: "ML Engineer", tags: ["Python", "TensorFlow","Pytorch", "Scikit-Learn", "Model Deployment"] },
  ];

  const filteredSkills = activeSkillTab === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeSkillTab);

  return (
    <div className="min-h-screen bg-var(--background) text-white font-sans overflow-hidden relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Ambient Drifting Background Blobs for Atmosphere */}
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] animate-blob pointer-events-none z-0"></div>
      <div className="absolute top-80 right-[15%] w-80 h-80 bg-cyan-600/10 rounded-full filter blur-[100px] animate-blob pointer-events-none z-0" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-40 left-[20%] w-96 h-96 bg-blue-600/5 rounded-full filter blur-[140px] animate-blob pointer-events-none z-0" style={{ animationDelay: '8s' }}></div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-elegant' : 'bg-transparent'
      }`}>
        <div className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition cursor-pointer flex items-center gap-1.5 group">
          <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
          Ankan Majumdar
        </div>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-wide uppercase text-slate-400">
          {['home', 'about', 'skills', 'projects', 'roles', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-cyan-400 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all transition">{item}</a>
          ))}
        </div>
        <a href="#contact" className="bg-white hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95 text-black font-semibold px-5 py-2 rounded-xl text-xs transition-all shadow-md">
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-28 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 space-y-6 text-left">
          <span className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 text-xs px-3 py-1.5 rounded-xl font-medium backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Available for Opportunities / Immediate Joiner
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white">
            Hi, I'm <span className="gradient-text font-black">Ankan</span>
            <br />
            <span className="text-slate-400 text-2xl sm:text-3xl font-medium mt-4 inline-block border-r border-cyan-400 pr-1.5 min-h-[40px] animate-blink">
              {displayedText}
            </span>
          </h1>
          <p className="text-slate-400 max-w-md leading-relaxed text-sm">
            Passionate about solving real-world problems through technology, continuous learning, and innovation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800 hover:scale-[1.02] border border-white/5 px-5 py-3 rounded-xl font-medium text-xs text-slate-200 transition-all group shadow-sm">
              <Download size={14} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" /> Download Resume
            </button>
            <a href="#contact" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 text-black px-5 py-3 rounded-xl font-semibold text-xs transition-all shadow-lg shadow-cyan-500/10">
              <Mail size={14} /> Contact Me
            </a>
          </div>
        </div>
        
        {/* Soothing Floating Graphic Profile Block */}
        <div className="flex-1 flex justify-center relative animate-float">
          <div className="w-72 h-72 rounded-full border border-dashed border-cyan-400/20 flex items-center justify-center animate-spin-slow">
            <div className="w-56 h-56 rounded-full border border-purple-500/10 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-elegant animate-pulse-glow">
                <span className="text-3xl font-black text-cyan-400 tracking-wider">AM</span>
                <span className="text-[9px] text-slate-500 tracking-widest mt-1 uppercase font-medium">Portfolio Photo</span>
              </div>
            </div>
          </div>
          <span className="absolute right-8 top-12 bg-slate-900/80 border border-white/5 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-400 shadow-sm">Fresher</span>
          <span className="absolute left-8 bottom-12 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm">Open to Work</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-white/5 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Who Am I?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "I am a passionate and dedicated fresher seeking opportunities in the technology domain. With a keen interest in data analytics, I am eager to contribute my skills to innovative teams.",
            "My academic background has equipped me with technical proficiency in programming, data analysis, and problem-solving. I believe in continuous learning and staying updated with emerging technologies.",
            "I approach every challenge with a growth mindset, embracing failures as stepping stones to success. Collaboration and adaptability are core values that guide my professional journey."
          ].map((text, idx) => (
            <div key={idx} className="glass-card p-6 relative overflow-hidden group hover:border-cyan-500/30 hover:translate-y-[-4px] transition-all duration-300 shadow-sm">
              <div className="text-cyan-500/30 group-hover:text-cyan-400 text-2xl font-black mb-3 transition-colors">{idx + 1}</div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-950/40 border-t border-b border-white/5 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Skills</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Technical Proficiency</h2>
          </div>
          
          {/* Smooth Pop Options Filter Bar */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {['All', 'Programming Languages', 'Data Analytics', 'Machine Learning', 'Tools'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 transform active:scale-95 ${
                  activeSkillTab === tab 
                    ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="glass-card p-4 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-cyan-950/20 hover:translate-y-[-2px] transition-all group">
                <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center mb-5 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-200">{skill.name}</h3>
                  <div className="w-full bg-slate-800 h-[3px] rounded-full mt-3 overflow-hidden">
                    <div className="bg-cyan-400 h-[3px] rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block font-medium">{skill.level}% Expertise</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Projects</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">My Work</h2>
        </div>

        <div className="flex justify-center gap-1 bg-slate-950/60 border border-white/5 p-1 rounded-xl max-w-xs mx-auto mb-12">
          {['Academic Projects', 'Personal Projects'].map(tab => {
            const key = tab.split(' ')[0];
            return (
              <button
                key={tab}
                onClick={() => setProjectTab(key)}
                className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  projectTab === key
                    ? 'bg-slate-900 text-cyan-400 shadow-sm border border-white/5'
                    : 'bg-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Container Switch Effect */}
        <div className="grid md:grid-cols-2 gap-6 transition-all duration-500">
          {projectTab === 'Personal' ? (
            <>
              <div className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:translate-y-[-4px] shadow-sm transition-all duration-300 group">
                <div>
                  <div className="bg-cyan-950/50 border border-cyan-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 mb-5">
                    <Globe size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Weather Forecast App</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    A responsive web application that fetches real-time weather data from an API infrastructure ecosystem and displays contextual forecasts.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["React", "TypeScript", "Tailwind CSS"].map(t => (
                      <span key={t} className="bg-slate-950/80 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
                <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start transition-all hover:gap-2">
                  View Details <ExternalLink size={11} />
                </button>
              </div>

              <div className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:translate-y-[-4px] shadow-sm transition-all duration-300 group">
                <div>
                  <div className="bg-cyan-950/50 border border-cyan-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 mb-5">
                    <Layers size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Personal Portfolio</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    A modern, responsive portfolio website to showcase my technical skills, pipeline projects, and credentials to tech recruiters globally.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["React", "TypeScript", "Tailwind CSS"].map(t => (
                      <span key={t} className="bg-slate-950/80 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
                <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start transition-all hover:gap-2">
                  View Details <ExternalLink size={11} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:translate-y-[-4px] shadow-sm transition-all duration-300 group">
                <div>
                  <div className="bg-cyan-950/50 border border-cyan-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 mb-5">
                    <Cpu size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Student Management System</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    A comprehensive web application designed to securely manage student records, multi-tier attendance matrices, and grades.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["React", "Node.js", "PostgreSQL"].map(t => (
                      <span key={t} className="bg-slate-950/80 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
                <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start transition-all hover:gap-2">
                  View Details <ExternalLink size={11} />
                </button>
              </div>

              <div className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:translate-y-[-4px] shadow-sm transition-all duration-300 group">
                <div>
                  <div className="bg-cyan-950/50 border border-cyan-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 mb-5">
                    <BarChart2 size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">E-Commerce Data Analysis</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    Analyzed e-commerce sales datasets to extract data-driven actionable insights for business scaling and optimizations.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["Python", "Pandas", "Power BI"].map(t => (
                      <span key={t} className="bg-slate-950/80 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
                <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start transition-all hover:gap-2">
                  View Details <ExternalLink size={11} />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-24 bg-slate-950/20 border-t border-b border-white/5 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Career Path</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Roles of Interest</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {rolesOfInterests.map((role, idx) => (
              <div key={idx} className="bg-slate-900/20 border border-white/5 p-5 rounded-xl flex flex-col justify-between hover:bg-slate-900/50 hover:border-cyan-500/20 hover:scale-[1.01] transition-all duration-300 shadow-sm">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-200 mb-3">{role.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-950/80 text-slate-400 border border-white/5 text-[9px] px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-3">
            <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/20 transition-all">
              <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center border border-cyan-500/10"><Mail size={16} /></div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email</p>
                <p className="text-xs sm:text-sm text-slate-300">ankanm080@gmail.com</p>
              </div>
            </div>
            <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/20 transition-all">
              <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center border border-cyan-500/10"><ShieldCheck size={16} /></div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-xs sm:text-sm text-slate-300">Kolkata, India</p>
              </div>
            </div>
          </div>

          <form className="md:col-span-3 bg-slate-900/10 border border-white/5 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="bg-slate-950 border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white w-full transition-all" />
              <input type="email" placeholder="your.email@example.com" className="bg-slate-950 border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white w-full transition-all" />
            </div>
            <input type="text" placeholder="What's this about?" className="bg-slate-950 border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white w-full transition-all" />
            <textarea placeholder="Your message..." rows="4" className="bg-slate-950 border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 text-white w-full resize-none transition-all"></textarea>
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs py-3 px-6 rounded-xl transition-all w-full active:scale-[0.99] shadow-md shadow-cyan-500/5">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-xs text-slate-500 space-y-4 relative z-10">
        <p>© 2026 Ankan Majumdar. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-slate-400">
          <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-all"><Github size={15} /></a>
          <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-all"><Linkedin size={15} /></a>
        </div>
      </footer>
    </div>
  );
}