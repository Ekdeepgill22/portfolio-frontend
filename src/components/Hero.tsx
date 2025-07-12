import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const Hero = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Ekdeep Singh Gill
                </span>
              </h1>
              <div className="flex flex-wrap gap-2 text-lg md:text-xl text-gray-600">
                <span className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span>MERN Stack Developer</span>
                </span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-indigo-600" />
                  <span>Python Developer</span>
                </span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-emerald-600" />
                  <span>AI/ML Enthusiast</span>
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                B.Tech in Information Technology (2022–2026)
              </p>
              <p className="text-xl text-gray-800 font-medium">
                Turning ideas into interactive, data-driven solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={`${backendUrl}/static/ui/portfolio_pic.jpg`}
                alt="Ekdeep Singh Gill profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-600 shadow-2xl bg-white"
                style={{ objectFit: 'cover', background: '#fff' }}
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;