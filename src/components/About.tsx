import React from 'react';
import { User, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-900 overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-gray-700 flex items-center justify-center">
                <User className="w-32 h-32 text-gray-300" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-white">
                Passionate Software Engineer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer Engineering student at K.K. Wagh Institute with a strong passion for 
                software development and competitive programming. My journey in tech has been marked by 
                continuous learning and innovation, from mastering data structures and algorithms to 
                building full-stack applications with the MERN stack.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As a winner of the Innovera National Level Hackathon 2025 and finalist in Smart India 
                Hackathon 2024, I thrive on solving complex problems and creating impactful solutions. 
                I'm always eager to take on new challenges and contribute to meaningful projects.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Born April 22, 2006</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 9529178362</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kheteshsamadhandeore@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Nashik, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;