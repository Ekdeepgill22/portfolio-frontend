import React from 'react';
import { GraduationCap, Code2, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mission-Driven Developer</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm a final-year Information Technology student at Guru Nanak Dev Engineering College, 
                driven by a mission to develop technology that creates real-world impact. My passion lies 
                in building intelligent systems that combine the power of Python, MERN stack, and AI/ML 
                to solve modern challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Technical Expertise</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm equally comfortable crafting secure APIs with FastAPI, managing data in MongoDB, 
                designing interactive UIs with React and Tailwind CSS, and deploying intelligent models 
                using TensorFlow and Scikit-Learn.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Project Experience</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I've collaboratively completed projects like NewsShield, a real-time fake news detection 
                platform, and KhetAI, a farmer advisory system powered by image-based crop disease detection. 
                These solutions reflect my ability to blend backend engineering with user-friendly design 
                and applied machine learning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Beyond Code</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you'll probably find me on the sports field or vibing to music—two 
                things that keep me energized and inspired. I enjoy designing in Figma, contributing to 
                open-source, and staying current with new technologies through hackathons and community events.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Let's collaborate to create something meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;