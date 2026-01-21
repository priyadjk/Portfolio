
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-serif font-bold tracking-tighter hover:text-indigo-400 transition-colors">
          {PERSONAL_INFO.name.split(' ')[0]}.
        </a>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
          <a href="#work" className="hover:text-zinc-100 transition-colors">Work</a>
          <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">Expertise</a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
        </div>
        
        <a 
          href="#contact" 
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
