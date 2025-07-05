import React from 'react';
import { ExternalLink, Github, Code, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application built with MERN stack featuring user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveLink: '', // To be updated later
      githubLink: '', // To be updated later
      status: 'Coming Soon',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.',
      tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
      liveLink: '', // To be updated later
      githubLink: '', // To be updated later
      status: 'Coming Soon',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive web application for visualizing various sorting and searching algorithms with step-by-step execution.',
      tech: ['React.js', 'TypeScript', 'CSS3', 'Algorithms'],
      liveLink: '', // To be updated later
      githubLink: '', // To be updated later
      status: 'Coming Soon',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React.js', 'API Integration', 'Chart.js', 'CSS3'],
      liveLink: '', // To be updated later
      githubLink: '', // To be updated later
      status: 'Coming Soon',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my journey through innovative solutions and technical challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white/80" />
                  </div>
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium text-white">{project.status}</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <button
                      className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold/90 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!project.liveLink}
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                    
                    <button
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!project.githubLink}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Future Updates */}
        <div className="mt-12 text-center">
          <div className="bg-gold/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 font-medium">
              🚀 More projects are coming soon! I'm constantly working on new and exciting applications. 
              Stay tuned for updates with live demos and source code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;