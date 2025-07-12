import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:mail.ekdeep@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      label: 'mail.ekdeep@gmail.com'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Ekdeepgill22',
      icon: <Github className="h-5 w-5" />,
      label: 'github.com/Ekdeepgill22'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ekdeep-singh-gill',
      icon: <Linkedin className="h-5 w-5" />,
      label: 'linkedin.com/in/ekdeep-singh-gill'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ekdeep Singh Gill</h3>
            <p className="text-gray-400 leading-relaxed">
              Building intelligent systems that create real-world impact through 
              innovative technology and thoughtful design.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About Me', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.querySelector(`#${item.toLowerCase().replace(' me', '').replace(' ', '')}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200">
                    {link.icon}
                  </div>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 Ekdeep Singh Gill. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Open to opportunities • Currently seeking internships</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;