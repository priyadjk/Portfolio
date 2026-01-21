
import React from 'react';
import { jsPDF } from 'jspdf';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, SKILLS, EXPERIENCES, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const doc = new jsPDF();
    const margin = 20;
    let y = 20;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(PERSONAL_INFO.name, margin, y);
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const contactInfo = `${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}`;
    doc.text(contactInfo, margin, y);
    y += 6;
    doc.text(`LinkedIn: ${PERSONAL_INFO.socials.linkedin}`, margin, y);
    y += 5;
    doc.text(`GitHub: ${PERSONAL_INFO.socials.github}`, margin, y);
    y += 10;

    // Line separator
    doc.setLineWidth(0.5);
    doc.line(margin, y, 210 - margin, y);
    y += 10;

    // Summary
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("SUMMARY", margin, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, 170);
    doc.text(summaryLines, margin, y);
    y += (summaryLines.length * 5) + 5;

    // Education
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("EDUCATION", margin, y);
    y += 7;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("B. Tech – CSE – Specialization in Artificial Intelligence & Data Science", margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${PERSONAL_INFO.university} | 2022- 2026 | CGPA – 9.27`, margin, y);
    y += 12;

    // Experience
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("PROFESSIONAL EXPERIENCE", margin, y);
    y += 7;
    EXPERIENCES.forEach(exp => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(`${exp.position} - ${exp.company}`, margin, y);
      doc.setFont("helvetica", "italic");
      doc.text(exp.period, 190 - margin, y, { align: "right" });
      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const expDesc = doc.splitTextToSize(exp.description, 170);
      doc.text(expDesc, margin, y);
      y += (expDesc.length * 5) + 5;
    });

    // Projects
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("PROJECTS", margin, y);
    y += 7;
    PROJECTS.forEach(proj => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(proj.title, margin, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const projDesc = doc.splitTextToSize(proj.description, 170);
      doc.text(projDesc, margin, y);
      y += (projDesc.length * 5) + 3;
    });
    y += 5;

    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("CORE SKILLS", margin, y);
    y += 7;
    SKILLS.forEach(s => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(`${s.category}: `, margin, y);
      doc.setFont("helvetica", "normal");
      doc.text(s.items.join(', '), margin + 40, y);
      y += 6;
    });

    doc.save(`${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />

        {/* About Me Section */}
        <section id="about" className="py-24 px-6 border-y border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-4">Discovery</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">About Me</h3>
              <div className="space-y-6 text-xl text-zinc-300 leading-relaxed font-light">
                <p>
                  {PERSONAL_INFO.bio}
                </p>
                <div className="pt-4 space-y-4">
                  <p className="text-zinc-400 text-lg">
                    <span className="text-indigo-400 font-semibold">Education:</span> {PERSONAL_INFO.university} (2022-2026)
                  </p>
                  <p className="text-zinc-500 text-lg italic border-l-2 border-indigo-500 pl-6 max-w-2xl">
                    "{PERSONAL_INFO.summary}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
              <div>
                <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold">Selected Works</h3>
              </div>
              <p className="text-zinc-500 text-lg max-w-sm">
                Practical implementation of AI, Data Science, and software engineering concepts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section id="skills" className="py-24 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2">Capabilities</h2>
                <h3 className="text-4xl font-serif font-bold mb-10">Skills and Expertise</h3>
                
                <div className="space-y-12">
                  {SKILLS.map(skill => (
                    <div key={skill.category} className="group">
                      <h4 className="text-xl font-bold mb-6 flex items-center group-hover:text-indigo-400 transition-colors">
                        <span className="w-10 h-[1px] bg-indigo-500 mr-4"></span>
                        {skill.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {skill.items.map(item => (
                          <span 
                            key={item} 
                            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
                              ${item.toLowerCase().includes("python") 
                                ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20" 
                                : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600"
                              }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-800">
                  <button 
                    onClick={handleDownloadResume}
                    className="inline-flex items-center space-x-3 text-zinc-100 hover:text-indigo-400 font-bold transition-all group"
                  >
                    <i className="fas fa-file-pdf text-xl"></i>
                    <span className="border-b-2 border-indigo-500 pb-0.5">Download Full Resume (PDF)</span>
                    <i className="fas fa-download text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"></i>
                  </button>
                  <p className="text-zinc-500 text-xs mt-2 italic">Format: Industry-Standard PDF</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-8">Professional Trajectory</h3>
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="relative pl-12 pb-12 last:pb-0 group">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-indigo-600 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
                    <div className="absolute left-[5px] top-6 w-[2px] h-full bg-zinc-800"></div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{exp.period}</p>
                    <h4 className="text-xl font-bold mb-1">{exp.position}</h4>
                    <p className="text-indigo-400 font-medium mb-4">{exp.company}</p>
                    <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2">Connect</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-bold mb-12 italic">Let's build something intelligent.</h3>
              
              <div className="flex flex-col items-center space-y-8">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="inline-block bg-white text-zinc-950 px-10 py-5 rounded-full text-xl font-bold hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
                >
                  Get In Touch
                </a>
                
                {/* Secondary Social Quick Links */}
                <div className="flex items-center space-x-8 text-zinc-400">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">Explore Profiles</span>
                  <div className="flex items-center space-x-6">
                    <a 
                      href={PERSONAL_INFO.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 flex items-center group"
                    >
                      <i className="fab fa-github"></i>
                      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 text-xs font-bold uppercase tracking-widest">GitHub</span>
                    </a>
                    <a 
                      href={PERSONAL_INFO.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-2xl hover:text-indigo-400 hover:scale-110 transition-all duration-300 flex items-center group"
                    >
                      <i className="fab fa-linkedin"></i>
                      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-24 flex flex-wrap justify-center gap-12 pt-12 border-t border-zinc-900">
                <div className="text-center">
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-bold">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg hover:text-indigo-400 transition-colors">{PERSONAL_INFO.email}</a>
                </div>
                <div className="text-center">
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-bold">Contact Number</p>
                  <p className="text-lg text-zinc-300">{PERSONAL_INFO.phone}</p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-bold">Location</p>
                  <p className="text-lg text-zinc-300">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Gemini AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
