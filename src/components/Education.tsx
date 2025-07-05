import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.E. in Computer Engineering',
      institution: 'K.K. Wagh Institute Of Engineering Education and Research',
      location: 'Nashik',
      period: '2023 - 2027',
      status: 'Pursuing',
      description: 'Focused on software engineering, data structures, algorithms, and modern web technologies.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'K.A.A.N.M. Sonawane Arts, Science and Commerce College',
      location: 'Satana, Nashik',
      period: '2023',
      status: '73.33%',
      description: 'Completed with distinction in Science stream, building a strong foundation in mathematics and computer science.',
      color: 'from-green-500 to-teal-600'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'K.B.H.V. Arai',
      location: 'Satana, Nashik',
      period: '2021',
      status: '95%',
      description: 'Achieved excellence in academics with a focus on science and mathematics.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const memberships = [
    {
      organization: 'Young Indians (Yi) Club',
      role: 'Active Member',
      description: 'Participating in leadership development and social impact initiatives.',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">
            Education & <span className="text-gold">Memberships</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional associations
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-white mb-8 text-center">
            Academic Background
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/30 hidden lg:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full z-10"></div>
                    
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${edu.color} mb-4`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                            {edu.status}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-playfair font-bold text-white mb-2">
                          {edu.degree}
                        </h4>
                        
                        <p className="text-gold font-medium mb-2">
                          {edu.institution}
                        </p>
                        
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Memberships */}
        <div>
          <h3 className="text-2xl font-playfair font-bold text-white mb-8 text-center">
            Professional Memberships
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gold/20 rounded-lg mr-4">
                    <membership.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {membership.organization}
                    </h4>
                    <p className="text-gold text-sm">
                      {membership.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {membership.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;