import React, { useState, useEffect } from 'react';
import { 
  Code2, Database, FileSpreadsheet, BarChart2, 
  Terminal, Globe, Cpu, GitBranch, Github, 
  Linkedin, Mail, Download, ExternalLink, 
  Layers, Settings, ShieldCheck, Wrench, Eye, Brain, MapPin, Award, BookOpen, Trophy, TestTube, PieChart, Headset, Activity, TrendingUp, DollarSign, Package
} from 'lucide-react';
import profileImg from './assets/pp3.png';

export default function App() {
  const [activeSkillTab, setActiveSkillTab] = useState('All');
  const [projectTab, setProjectTab] = useState('Academic');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated roles - only relevant target roles
  const roles = ["Data Analyst", "Business Intelligence (BI) Analyst", "Reporting Analyst", "Data Analyst Associate", "MIS Analyst", "Business Analyst", "Operations Analyst", "Marketing Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];
    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 80);
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

  // Updated skills with correct levels
  const skills = [
    { name: 'Python', level: 80, category: 'Programming', icon: <Code2 size={18} /> },
    { name: 'SQL', level: 85, category: 'Programming', icon: <Database size={18} /> },
    { name: 'Pandas', level: 88, category: 'Data Analytics', icon: <Database size={18} /> },
    { name: 'NumPy', level: 80, category: 'Data Analytics', icon: <Terminal size={18} /> },
    { name: 'Power BI', level: 80, category: 'Data Analytics', icon: <BarChart2 size={18} /> },
    { name: 'Excel', level: 85, category: 'Data Analytics', icon: <FileSpreadsheet size={18} /> },
    { name: 'Scikit-Learn', level: 70, category: 'Machine Learning', icon: <Cpu size={18} /> },
    { name: 'TensorFlow', level: 70, category: 'Machine Learning', icon: <Layers size={18} /> },
    { name: 'OpenCV', level: 80, category: 'Computer Vision', icon: <Eye size={18} /> },
    { name: 'Git/GitHub', level: 85, category: 'Tools', icon: <GitBranch size={18} /> },
    { name: 'FastAPI', level: 70, category: 'Tools', icon: <Globe size={18} /> },
    { name: 'VS Code', level: 90, category: 'Tools', icon: <Code2 size={18} /> },
    { name: 'Jupyter', level: 90, category: 'Tools', icon: <Terminal size={18} /> },
    { name: 'Linux', level: 65, category: 'Tools', icon: <Wrench size={18} /> },
  ];

  // Actual projects
  const academicProjects = [
    {
      icon: <Cpu size={18} />,
      title: "Skin Disease Detection System",
      desc: "CNN-based skin disease classification system capable of identifying multiple skin conditions from images with high accuracy using deep learning.",
      tags: ["PyTorch", "OpenCV", "FastAPI", "CNN"],
      github: "#",
    },
  ];

  const personalProjects = [
    {
      icon: <Globe size={18} />,
      title: "Personal Portfolio Website",
      desc: "Modern, responsive portfolio website showcasing technical skills, projects, and credentials. Built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      github: "#",
    },
    {
      icon: <Database size={18} />,
      title: "IT Service Desk Analytics Platform",
      desc: "End-to-end data analyst project featuring automated support ticket generation, a FastAPI backend for issue classification, SQL-driven SLA analysis, and an interactive frontend dashboard.",
      tags: ["Python", "FastAPI", "SQL", "Pandas", "HTML"],
      github: "#",
    },
    {
      icon: <Brain size={18} />,
      title: "E-Commerce Transaction Audit Pipeline",
      desc: "End-to-end data reconciliation system that cross-checks transaction records across web frontends, payment gateways, and internal databases to automatically detect financial discrepancies, dropped webhooks, and revenue leakage.",
      tags: ["Python", "Pandas", "SQL", "FastAPI", "Pytest"],
      github: "#",
    },
  ];

  // Updated target roles only
  const rolesOfInterest = [
  {title: "Data Analyst", icon: <BarChart2 size={20} />, tags: ["SQL", "Python", "Excel", "Power BI", "Data Visualization"],},
  {title: "BI Analyst", icon: <PieChart size={20} />, tags: ["Power BI", "SQL", "DAX", "Dashboard Development", "Data Warehousing"],},
  {title: "Business Analyst", icon: <FileSpreadsheet size={20} />, tags: ["SQL", "Excel", "Power BI", "KPI Reporting", "Stakeholder Communication"],},
  {title: "Reporting Analyst", icon: <FileSpreadsheet size={20} />, tags: ["SQL", "Excel", "Power BI", "Report Automation", "Dashboarding"],},
  {title: "MIS Analyst", icon: <Database size={20} />, tags: ["Advanced Excel", "SQL", "Power BI", "MIS Reporting", "Data Management"],},
  {title: "Data Analytics Associate", icon: <BarChart2 size={20} />, tags: ["SQL", "Python", "Power BI", "EDA", "Statistical Analysis"],},
  {title: "Operations Analyst", icon: <Activity size={20} />, tags: ["SQL", "Excel", "Power BI", "Process Optimization", "Performance Analysis"],},
  {title: "Marketing Analyst", icon: <TrendingUp size={20} />, tags: ["SQL", "Excel", "Google Analytics", "Power BI", "Campaign Analysis"],},
  {title: "Financial Data Analyst", icon: <DollarSign size={20} />, tags: ["Excel", "SQL", "Power BI", "Financial Reporting", "Forecasting"],},
  {title: "Product Analyst", icon: <Package size={20} />, tags: ["SQL", "Python", "A/B Testing", "Product Metrics", "User Analytics"],},
  {title: "Junior Data Scientist", icon: <Brain size={20} />, tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "EDA"],},
  {title: "DBA Trainee", icon: <Database size={20} />, tags: ["MySQL", "PostgreSQL", "Query Optimization", "Database Design", "Backup & Recovery"],},
];

  // Certifications
  const certifications = [
    { name: "Cloud Financial Management", org: "AWS / EduSkills", year: "2025", color: "cyan", link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=784f1e9c258204a6db689d222565a3f4" },
    { name: "Problem Solving Using Computational Thinking", org: "University of Michigan / Coursera", year: "2023", color: "purple", link: "https://coursera.org/share/b006ad117c1f4ea083b5dd6d5715d291" },
    { name: "NPTEL Project Management", org: "NPTEL - IIT Roorkee", year: "2024", color: "cyan", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/110/noc25-mg71/Course/NPTEL25MG71S44950135704733404.pdf" },
    { name: "Machine Learning Specialization", org: "DeepLearning.AI / Coursera", year: "2024", color: "purple", link: "#" },
    { name: "Python for Everybody", org: "University of Michigan", year: "2023", color: "cyan", link: "#" },
  ];

  // Experience / Training
  const experiences = [
    { title: "Academic Projects", org: "B.Tech IT — Final Year", period: "2024–2026", desc: "Developed CNN-based skin disease detection as part of curriculum and self-initiated learning.", icon: <BookOpen size={18} /> },
    { title: "NPTEL Certification Training", org: "NPTEL - IIT Roorkee", period: "2025", desc: "Completed NPTEL's Project Management course, gaining expertise in software project lifecycle, risk management, and Agile methodologies.", icon: <Award size={18} /> },
    { title: "Basics of IT, S&T in Indian Railway", org: "Rail Kaushal Vikas Yojna", period: "2023", desc: "Studied real-world network topologies and IT operations of railway signaling systems to understand large-scale telecom architectures.", icon: <Trophy size={18} /> },
    { title: "Open Source & Personal Projects", org: "GitHub", period: "2026–Present", desc: "Actively building and maintaining personal projects in 'IT Service Desk Analytics Platform', 'E-Commerce Transaction Audit Pipeline' and Data Analytics, with code published on GitHub for community use.", icon: <Github size={18} /> },
  ];

  const filteredSkills = activeSkillTab === 'All'
    ? skills
    : skills.filter(s => s.category === activeSkillTab);

  const activeProjects = projectTab === 'Academic' ? academicProjects : personalProjects;

  return (
    // Line 70 (Fixed version):
<div className="min-h-screen bg-[var(--background)] text-white font-sans overflow-hidden relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Background Blobs */}
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
        <div className="hidden md:flex gap-6 text-xs font-medium tracking-wide uppercase text-slate-400">
          {['home', 'about', 'skills', 'projects', 'experience', 'roles', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-cyan-400 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all transition">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:flex items-center gap-1.5 bg-slate-900/60 hover:bg-slate-800 border border-white/5 px-4 py-2 rounded-xl font-medium text-xs text-slate-200 transition-all group">
            <Download size={13} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" /> Resume
          </a>
          <a href="#contact" className="bg-white hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95 text-black font-semibold px-5 py-2 rounded-xl text-xs transition-all shadow-md">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-12 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 space-y-6 text-left">
          <span className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 text-xs px-3 py-1.5 rounded-xl font-medium backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Available for Opportunities · Immediate Joiner
          </span>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white">
              Hi, I'm <span className="gradient-text font-black">Ankan</span>
            </h1>
            <p className="text-slate-400 text-sm font-medium mt-2">Final Year B.Tech (Information Technology)</p>
            <p className="text-slate-500 text-xs mt-0.5">Service Desk Engineer · QA Tester · DBA Trainee · Data Analyst · Machine Learning Enthusiast · Software Developer</p>
            <div className="mt-4">
              <span className="text-slate-400 text-2xl sm:text-3xl font-medium border-r border-cyan-400 pr-1.5 min-h-[40px] animate-blink inline-block">
                {displayedText}
              </span>
            </div>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed text-sm">
            Passionate about solving real-world problems through data-driven decisions, machine learning, and computer vision.
          </p>
          
          {/* Hero Stats */}
          <div className="flex flex-wrap gap-4 py-2 border-t border-white/5 pt-4">
            {[
              { val: "5+", label: "Technical Projects" },
              { val: "5+", label: "Certifications" },
              { val: "200+", label: "Hours Learning" },
              { val: "Open", label: "To Intern / Fresher" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-black gradient-text">{stat.val}</div>
                <div className="text-[10px] text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#" className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800 hover:scale-[1.02] border border-white/5 px-5 py-3 rounded-xl font-medium text-xs text-slate-200 transition-all group shadow-sm">
              <Download size={16} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" /> Download Resume
            </a>
            <a href="https://github.com/Ankan080" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800 hover:scale-[1.02] border border-white/5 px-5 py-3 rounded-xl font-medium text-xs text-slate-200 transition-all group shadow-sm">
              <Github size={16} className="text-cyan-400" /> GitHub
            </a>
            <a href="https://linkedin.com/ankan080" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 text-black px-5 py-3 rounded-xl font-semibold text-xs transition-all shadow-lg shadow-cyan-500/10">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        
        {/* Floating Profile Block */}
        <div className="flex-1 flex justify-center items-center relative animate-float min-h-[300px]">
          
          {/* Three staggering ripples for a continuous smooth wave */}
          <div className="absolute w-56 h-56 rounded-full border border-cyan-400/50 animate-smooth-ripple" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-56 h-56 rounded-full border border-cyan-400/50 animate-smooth-ripple" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute w-56 h-56 rounded-full border border-purple-500/50 animate-smooth-ripple" style={{ animationDelay: '2.6s' }}></div>
          
          {/* Inner Photo Container (Static rotation, keeps pulse effect) */}
          <div className="relative w-44 h-44 rounded-full bg-slate-900/60 border border-white/10 shadow-elegant animate-pulse-glow overflow-hidden z-10">
            {/* The Image */}
            <img 
              src={profileImg} 
              alt="Ankan Majumdar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badges */}
          <span className="absolute right-8 top-12 z-20 bg-slate-900/80 border border-white/5 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-400 shadow-sm">Fresher</span>
          <span className="absolute left-8 bottom-12 z-20 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm">Open to Work</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 border-t border-white/5 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Who Am I?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "I am a Final-Year B.Tech IT student and Data Analyst focused on robust backend development with Python, SQL, and FastAPI.",
            "Proven ability to build automated data audit pipelines, computer vision systems, and interactive dashboards to solve complex business problems",
            "I am actively seeking internships, apprenticeships, and entry-level opportunities where I can contribute, learn from industry professionals, and grow into a high-impact technology professional."
          ].map((text, idx) => (
            <div key={idx} className="glass-card p-6 relative overflow-hidden group hover:border-cyan-500/30 hover:translate-y-[-4px] transition-all duration-300 shadow-sm">
              <div className="text-cyan-500/30 group-hover:text-cyan-400 text-2xl font-black mb-3 transition-colors">{idx + 1}</div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-slate-950/40 border-t border-b border-white/5 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Skills</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Technical Proficiency</h2>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {['All', 'Programming', 'Data Analytics', 'Machine Learning', 'Computer Vision', 'Tools'].map(tab => (
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
              <div key={index} className="glass-card p-4 flex flex-col justify-between hover:border-cyan-400/40 hover:translate-y-[-2px] transition-all group">
                <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center mb-5 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-200">{skill.name}</h3>
                  <div className="w-full bg-slate-800 h-[3px] rounded-full mt-3 overflow-hidden">
                    <div className="bg-cyan-400 h-[3px] rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Projects</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">My Work</h2>
        </div>

        <div className="flex justify-center gap-1 bg-slate-950/60 border border-white/5 p-1 rounded-xl max-w-xs mx-auto mb-10">
          {[['Academic', 'Academic'], ['Personal', 'Personal']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setProjectTab(key)}
              className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                projectTab === key
                  ? 'bg-slate-900 text-cyan-400 shadow-sm border border-white/5'
                  : 'bg-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 transition-all duration-500">
          {activeProjects.map((proj, idx) => (
            <div key={idx} className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:translate-y-[-4px] shadow-sm transition-all duration-300 group">
              <div>
                <div className="bg-cyan-950/50 border border-cyan-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 mb-5">
                  {proj.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map(t => (
                    <span key={t} className="bg-slate-950/80 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
              <a href={proj.github} className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start transition-all hover:gap-2">
                <Github size={11} /> View on GitHub <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Training Section */}
      <section id="experience" className="py-12 bg-slate-950/30 border-t border-b border-white/5 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Background</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Experience & Training</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card p-6 hover:border-cyan-500/20 hover:translate-y-[-3px] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 bg-cyan-950/50 w-10 h-10 rounded-lg flex items-center justify-center border border-cyan-500/20 shrink-0 group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-sm text-slate-200 group-hover:text-cyan-400 transition-colors">{exp.title}</h4>
                      <span className="text-[10px] text-slate-500 border border-white/5 px-2 py-0.5 rounded-lg shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-[10px] text-cyan-400/70 font-medium mb-2">{exp.org}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-12 px-6 max-w-6xl mx-auto relative z-10 overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Credentials</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Certifications</h2>
        </div>
        
        {/* Scrolling Wrapper */}
        <div className="relative flex overflow-hidden group">
          <div className="flex flex-nowrap gap-4 w-max animate-swipe hover-pause">
            {[...certifications, ...certifications].map((cert, idx) => (
              <a key={idx} href={cert.link} className="glass-card w-[320px] p-5 flex flex-col gap-3 hover:border-cyan-500/30 hover:translate-y-[-3px] transition-all duration-300 group shrink-0">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 ${
                    cert.color === 'cyan' 
                      ? 'bg-cyan-950/50 border-cyan-500/20 text-cyan-400'
                      : 'bg-purple-950/50 border-purple-500/20 text-purple-400'
                  } group-hover:scale-110 transition-transform`}>
                    <Award size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs text-slate-200 leading-tight group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                    <p className="text-[10px] text-slate-500 mt-1">{cert.org} · {cert.year}</p>
                  </div>
                </div>
                <span className="text-[10px] text-cyan-400 font-medium inline-flex items-center gap-1 self-end">
                  Verify <ExternalLink size={9} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Target Roles Section */}
      <section id="roles" className="py-12 bg-slate-950/20 border-t border-b border-white/5 px-6 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Career Path</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Target Roles</h2>
            <p className="text-slate-500 text-xs mt-2 max-w-sm mx-auto">Open to internships, apprenticeships, and fresher opportunities in these domains</p>
          </div>

          {/* Scrolling Wrapper */}
          <div className="relative flex overflow-hidden group">
            <div className="flex flex-nowrap gap-4 w-max animate-swipe-slow hover-pause">
              {[...rolesOfInterest, ...rolesOfInterest].map((role, idx) => (
                <div key={idx} className="bg-slate-900/20 border border-white/5 w-[280px] p-5 rounded-xl flex flex-col gap-3 hover:bg-slate-900/50 hover:border-cyan-500/20 hover:scale-[1.01] transition-all duration-300 shadow-sm shrink-0">
                  <div className="text-cyan-400 bg-cyan-950/50 w-10 h-10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                    {role.icon}
                  </div>
                  <h4 className="font-bold text-sm text-slate-200">{role.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-950/80 text-slate-400 border border-white/5 text-[9px] px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Get In Touch</h2>
          <p className="text-slate-500 text-xs mt-2">Reach out via email, LinkedIn, or GitHub — I respond within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <a href="mailto:ankanm080@gmail.com" className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/20 transition-all group">
              <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center border border-cyan-500/10 group-hover:scale-110 transition-transform"><Mail size={16} /></div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email</p>
                <p className="text-xs text-slate-300">ankanm080@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ankan080/" target="_blank" rel="noreferrer" className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/20 transition-all group">
              <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center border border-cyan-500/10 group-hover:scale-110 transition-transform"><Linkedin size={16} /></div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
                <p className="text-xs text-slate-300">linkedin.com/in/ankan080</p>
              </div>
            </a>
            <a href="https://github.com/Ankan080" target="_blank" rel="noreferrer" className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/20 transition-all group">
              <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center border border-cyan-500/10 group-hover:scale-110 transition-transform"><Github size={16} /></div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">GitHub</p>
                <p className="text-xs text-slate-300">github.com/Ankan080</p>
              </div>
            </a>
            <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="text-cyan-400 bg-cyan-950/50 w-9 h-9 rounded-lg flex items-center justify-center border border-cyan-500/10"><MapPin size={16} /></div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Contact</p>
                <p className="text-xs text-slate-300">+91-7439278822 / +91-8697242905</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-xs text-slate-300">Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/10 border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-center text-center gap-5 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Ready to Collaborate?</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                I'm actively looking for internship and fresher roles in Data Analytics, ML, and Software Development. Let's connect!
              </p>
            </div>
            <a href="mailto:ankanm080@gmail.com" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs py-3 px-8 rounded-xl transition-all w-full active:scale-[0.99] shadow-md shadow-cyan-500/5 flex items-center justify-center gap-2">
              <Mail size={14} /> Send Email
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs font-medium transition-all">
              <Download size={13} /> Download My Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-xs text-slate-500 space-y-4 relative z-10">
        <p>Ankan Majumdar · Final Year B.Tech IT · Data Analyst & ML Enthusiast</p>
        <p>© 2025 Ankan Majumdar. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-slate-400">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all"><Github size={15} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all"><Linkedin size={15} /></a>
          <a href="mailto:ankanm080@gmail.com" className="hover:text-cyan-400 hover:scale-110 transition-all"><Mail size={15} /></a>
        </div>
      </footer>
    </div>
  );
}
