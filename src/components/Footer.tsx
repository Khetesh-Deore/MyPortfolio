import React from 'react';
import { Heart, Code } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-playfair font-bold mb-2">
              Khetesh Deore
            </h3>
            <p className="text-gray-400">
              Software Engineer & Problem Solver
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Khetesh Deore</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Khetesh Deore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;