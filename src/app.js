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
  
  // Dynamic Role Typing Animation
  const roles = ["IT Support Analyst", "Technical Support", "Quality Assurance", "Manual Tester", "IT Operations", "growth mindset", "Problem Solver", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];
    
    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 100);
      
      if (displayedText === currentFullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 50);
      
      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  // Skill Dataset From Video
  const skills = [
    { name: 'Python', level: 85, category: 'Programming Languages', icon: <Code2 /> },
    { name: 'SQL', level: 80, category: 'Programming Languages', icon: <Database /> },
    { name: 'Excel', level: 75, category: 'Data Analytics', icon: <FileSpreadsheet /> },
    { name: 'Power BI', level: 70, category: 'Data Analytics', icon: <BarChart2 /> },
    { name: 'Tableau', level: 65, category: 'Data Analytics', icon: <BarChart2 /> },
    { name: 'Pandas', level: 80, category: 'Data Analytics', icon: <Database /> },
    { name: 'NumPy', level: 70, category: 'Data Analytics', icon: <Terminal /> },
    { name: 'Scikit-Learn', level: 65, category: 'Machine Learning', icon: <Cpu /> },
    { name: 'TensorFlow', level: 60, category: 'Machine Learning', icon: <Layers /> },
    { name: 'Data Preprocessing', level: 70, category: 'Machine Learning', icon: <Settings /> },
    { name: 'Git', level: 80, category: 'Tools', icon: <GitBranch /> },
    { name: 'GitHub', level: 80, category: 'Tools', icon: <Github /> },
    { name: 'VS Code', level: 90, category: 'Tools', icon: <Code2 /> },
    { name: 'Jupyter Notebook', level: 85, category: 'Tools', icon: <Terminal /> },
    { name: 'Linux', level: 65, category: 'Tools', icon: <Wrench /> },
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
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#030712]/80 backdrop-blur-md z-50 border-b border-slate-800/60 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-400 cursor-pointer">Ankan Majumdar</div>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#roles" className="hover:text-cyan-400 transition">Roles</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-full text-sm transition">
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-36 pb-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="flex-1 space-y-6 z-10">
          <span className="inline-flex items-center gap-2 bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 text-xs px-3 py-1 rounded-full font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Available for Opportunities / Immediate Joiner
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight min-h-[140px]">
            Hi, I'm <span className="text-cyan-400">Ankan</span>
            <br />
            <span className="text-slate-300 text-4xl mt-3 inline-block border-r-2 border-cyan-400 pr-1 animate-blink">
              {displayedText}
            </span>
          </h1>
          <p className="text-slate-400 max-w-lg leading-relaxed text-base">
            Passionate about solving real-world problems through technology, continuous learning, and innovation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-5 py-3 rounded-xl font-medium text-sm transition group">
              <Download size={16} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" /> Download Resume
            </button>
            <a href="#contact" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-xl font-semibold text-sm transition">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>
        
        {/* Animated Graphic */}
        <div className="flex-1 flex justify-center relative scale-90 md:scale-100">
          <div className="absolute inset-0 bg-cyan-500/5 rounded-full filter blur-3xl w-72 h-72 mx-auto my-auto"></div>
          <div className="w-80 h-80 rounded-full border border-dashed border-cyan-500/20 flex items-center justify-center animate-spin-slow">
            <div className="w-64 h-64 rounded-full border border-cyan-500/10 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-slate-900/40 border border-cyan-500/30 backdrop-blur-sm flex flex-col items-center justify-center shadow-2xl shadow-cyan-950/50">
                <span className="text-4xl font-black text-cyan-400 tracking-wider">AM</span>
                <span className="text-[10px] text-slate-500 tracking-widest mt-1 uppercase font-semibold">Profile Photo</span>
              </div>
            </div>
          </div>
          <span className="absolute right-4 top-12 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full text-xs font-semibold text-slate-400">Fresher</span>
          <span className="absolute left-4 bottom-12 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400">Open to Work</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-slate-900 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl font-extrabold mt-2">Who Am I?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "I am a passionate and dedicated fresher seeking opportunities in the technology domain. With a keen interest in data analytics, I am eager to contribute my skills to innovative teams.",
            "My academic background has equipped me with technical proficiency in programming, data analysis, and problem-solving. I believe in continuous learning and staying updated with emerging technologies.",
            "I approach every challenge with a growth mindset, embracing failures as stepping stones to success. Collaboration and adaptability are core values that guide my professional journey."
          ].map((text, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl relative overflow-hidden hover:border-cyan-500/30 transition">
              <div className="text-cyan-400 text-3xl font-black mb-4 opacity-40">{idx + 1}</div>
              <p className="text-slate-300 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-950/30 border-t border-b border-slate-900/80 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Skills</span>
            <h2 className="text-4xl font-extrabold mt-2">Technical Proficiency</h2>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {['All', 'Programming Languages', 'Data Analytics', 'Machine Learning', 'Tools'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition ${
                  activeSkillTab === tab 
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-xl flex flex-col justify-between hover:border-slate-700 transition group relative">
                <div className="text-cyan-400 bg-cyan-950/40 w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-cyan-900/30">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">{skill.name}</h3>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-3 overflow-hidden">
                    <div className="bg-cyan-500 h-1 rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block font-medium">{skill.level}% Expertise</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl font-extrabold mt-2">My Work</h2>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['Academic Projects', 'Personal Projects'].map(tab => (
            <button
              key={tab}
              onClick={() => setProjectTab(tab.split(' ')[0])}
              className={`px-6 py-2 rounded-xl text-xs font-bold tracking-wide transition border ${
                projectTab === tab.split(' ')[0]
                  ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800'
                  : 'bg-transparent text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {projectTab === 'Personal' ? (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/20 transition">
              <div>
                <div className="bg-cyan-950/40 border border-cyan-900/40 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                  <Globe size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3">Weather Forecast App</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A responsive web application that fetches real-time weather data from an API infrastructure ecosystem and displays contextual forecasts.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "TypeScript", "Tailwind CSS"].map(t => (
                    <span key={t} className="bg-slate-950 text-slate-400 text-[10px] px-2.5 py-1 rounded-md border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
              <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 self-start">
                View Details <ExternalLink size={12} />
              </button>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/20 transition">
              <div>
                <div className="bg-cyan-950/40 border border-cyan-900/40 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                  <Layers size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3">Personal Portfolio</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A modern, responsive portfolio website to showcase my technical skills, pipeline projects, and credentials to tech recruiters globally.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "TypeScript", "Tailwind CSS"].map(t => (
                    <span key={t} className="bg-slate-950 text-slate-400 text-[10px] px-2.5 py-1 rounded-md border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
              <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 self-start">
                View Details <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/20 transition">
              <div>
                <div className="bg-cyan-950/40 border border-cyan-900/40 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3">Student Management System</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A comprehensive web application designed to securely manage student records, multi-tier attendance matrices, and grades.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "Node.js", "PostgreSQL"].map(t => (
                    <span key={t} className="bg-slate-950 text-slate-400 text-[10px] px-2.5 py-1 rounded-md border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
              <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 self-start">
                View Details <ExternalLink size={12} />
              </button>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/20 transition">
              <div>
                <div className="bg-cyan-950/40 border border-cyan-900/40 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                  <BarChart2 size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Commerce Data Analysis</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Analyzed e-commerce sales datasets to extract data-driven actionable insights for business scaling and optimizations.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Python", "Pandas", "Power BI"].map(t => (
                    <span key={t} className="bg-slate-950 text-slate-400 text-[10px] px-2.5 py-1 rounded-md border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
              <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 self-start">
                View Details <ExternalLink size={12} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-24 bg-slate-950/20 border-t border-b border-slate-900/70 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Career Path</span>
            <h2 className="text-4xl font-extrabold mt-2">Roles of Interest</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {rolesOfInterests.map((role, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-slate-800/60 p-6 rounded-xl flex flex-col justify-between hover:bg-slate-900/50 transition">
                <div>
                  <h4 className="font-bold text-base text-slate-200 mb-4">{role.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-950/60 text-slate-400 border border-slate-800/40 text-[9px] px-2 py-0.5 rounded">
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
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl font-extrabold mt-2">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex items-center gap-4">
              <div className="text-cyan-400 bg-cyan-950/40 w-10 h-10 rounded-lg flex items-center justify-center"><Mail size={18} /></div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
                <p className="text-sm text-slate-300">ankanm080@gmail.com</p>
              </div>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex items-center gap-4">
              <div className="text-cyan-400 bg-cyan-950/40 w-10 h-10 rounded-lg flex items-center justify-center"><ShieldCheck size={18} /></div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-sm text-slate-300">Kolkata, India</p>
              </div>
            </div>
          </div>

          <form className="md:col-span-3 bg-slate-900/20 border border-slate-800/60 p-8 rounded-2xl space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 text-white w-full" />
              <input type="email" placeholder="your.email@example.com" className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 text-white w-full" />
            </div>
            <input type="text" placeholder="What's this about?" className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 text-white w-full" />
            <textarea placeholder="Your message..." rows="4" className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 text-white w-full resize-none"></textarea>
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-sm py-3 px-6 rounded-xl transition w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900/80 py-12 px-6 text-center text-xs text-slate-500 space-y-4">
        <p>© 2026 Ankan Majumdar. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition"><Github size={16} /></a>
          <a href="#" className="hover:text-cyan-400 transition"><Linkedin size={16} /></a>
        </div>
      </footer>
    </div>
  );
}