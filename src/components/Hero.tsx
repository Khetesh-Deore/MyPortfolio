import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Code, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Khetesh Deore';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Hi, I'm <span className="text-white">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate Computer Engineering student specializing in MERN stack development 
              and competitive programming. Winner of Innovera National Hackathon 2025.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/Khetesh-Deore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-200 group"
            >
              <Github className="w-6 h-6 text-white group-hover:text-blue-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/khetesh-deore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-blue-300" />
            </a>
            <a
              href="https://leetcode.com/u/KheteshDeore2246/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-200 group"
            >
              <Code className="w-6 h-6 text-white group-hover:text-blue-300" />
            </a>
          </div>
          
          <div className="mt-8">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
          
          <div className="mt-16">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              <span className="text-sm font-medium mr-2">Explore my work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;