
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col h-full hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/5">
      {/* Accent Corner Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <i className="fas fa-code text-4xl text-indigo-500"></i>
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-10">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-indigo-500"></span>
            <p className="text-indigo-500 text-[10px] font-bold uppercase tracking-[0.2em]">{project.role}</p>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[9px] font-bold text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-zinc-800/50 mt-auto">
          <div className="flex items-center space-x-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors">
                <i className="fab fa-github text-base"></i>
                <span>Source</span>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors group/link">
                <span>Live Demo</span>
                <i className="fas fa-external-link-alt text-[10px] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"></i>
              </a>
            )}
          </div>
          
          <div className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
             <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
