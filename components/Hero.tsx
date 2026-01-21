
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-indigo-500 font-semibold tracking-widest uppercase mb-4 text-sm">Available for Collaborations</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8">
            Hello, I am <span className="text-white underline decoration-indigo-500/50 underline-offset-8 decoration-4">{PERSONAL_INFO.name}</span> <br/>
            <span className="text-zinc-500 text-4xl md:text-6xl italic block mt-4">a {PERSONAL_INFO.title}.</span>
          </h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="group flex items-center space-x-2 text-lg font-semibold border-b-2 border-indigo-500 pb-1 hover:text-indigo-400 transition-all">
              <span>Read more about me</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </a>
            <div className="flex items-center space-x-4 text-2xl text-zinc-500">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors"><i className="fab fa-github"></i></a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
