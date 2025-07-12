import React from 'react';
import { Code, Database, Wrench, Brain, Layers, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="h-6 w-6" />,
      skills: ['React.js', 'Node.js', 'Flask', 'Tailwind CSS', 'TensorFlow', 'Scikit-Learn'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: ['MongoDB (NoSQL)', 'MySQL (SQL)'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['AWS', 'Docker', 'Git', 'GitHub', 'Jenkins', 'Render', 'Vercel','Postman'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="h-6 w-6" />,
      skills: ['Figma', 'Canva', 'Responsive Web Design'],
      color: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Other',
      icon: <Brain className="h-6 w-6" />,
      skills: ['Machine Learning', 'Model Deployment', 'REST APIs'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}></div>
                    <span className="font-medium text-sm leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              I'm constantly exploring new technologies and frameworks to stay current with industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;