import React from 'react';
import { Code, Database, Globe, GitBranch, Zap, Trophy } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'HTML', 'CSS', 'JavaScript (pursuing)'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Tools & Technologies',
      icon: GitBranch,
      skills: ['GitHub', 'Git', 'VS Code', 'Linux'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Core Competencies',
      icon: Zap,
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gray-900 overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 rounded-2xl p-6 h-full hover:bg-gray-700 transition-colors duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 font-playfair">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-2xl font-playfair font-bold text-white">Recent Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white">Winner - Innovera National Level Hackathon 2025</h4>
                <p className="text-gray-300">Recognized for innovative problem-solving and technical excellence</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white">Finalist - Smart India Hackathon 2024</h4>
                <p className="text-gray-300">Selected among top teams nationwide for innovative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;