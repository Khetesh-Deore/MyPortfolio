import React from 'react';
import { ChevronDown, Github, Linkedin, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight">
              <span className="block">Khetesh</span>
              <span className="block text-gold">Deore</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            I am a <span className="text-gold font-medium">Software Engineer</span> passionate about creating innovative solutions with modern web technologies and competitive programming.
          </p>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/Khetesh-Deore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/khetesh-deore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://leetcode.com/u/KheteshDeore2246/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
            >
              <Code className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
          </div>
          
          <div className="pt-12">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center text-gray-400 hover:text-gold transition-colors duration-200 group"
            >
              <span className="text-sm font-medium mr-2">Explore my work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-gold to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;