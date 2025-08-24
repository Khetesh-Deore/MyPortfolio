import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kheteshsamadhandeore@gmail.com',
      link: 'mailto:kheteshsamadhandeore@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9529178362',
      link: 'tel:+919529178362'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'K.K.Wagh Boys Hostel, Nashik – 422003',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Khetesh-Deore',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/khetesh-deore',
      color: 'hover:text-blue-400'
    },
    {
      icon: Code,
      label: 'LeetCode',
      url: 'https://leetcode.com/u/KheteshDeore2246/',
      color: 'hover:text-yellow-400'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-900 overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.label}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-700 text-white rounded-lg transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;