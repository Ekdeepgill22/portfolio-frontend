
import { ExternalLink, Github, Shield, Sprout } from 'lucide-react';
import { toast } from 'react-hot-toast';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Projects = () => {
  const projects = [
    {
      title: 'NewsShield – Fake News Detection System',
      description: 'Developed a web app that detects fake news using a machine learning classifier and SERP API for real-time verification.',
      features: [
        'Clean, interactive UI for analysis input and result visualization',
        'Achieved 90%+ accuracy on test datasets',
        'Real-time verification using SERP API integration'
      ],
      tech: ['Python', 'Flask', 'Pandas', 'Scikit-Learn', 'Tailwind CSS', 'SERP API'],
      icon: <Shield className="h-8 w-8" />,
      gradient: 'from-blue-500 to-indigo-600',
      demoUrl: 'https://news-shield.onrender.com',
      githubUrl: 'https://github.com/Ekdeepgill22/News_Shield',
      uiImage: `${backendUrl}/static/ui/NewsShield_ui.jpg`,
    },
    {
      title: 'KhetAI – Crop Disease Detection & Farmer Advisory',
      description: 'Full-stack web app to detect crop diseases from uploaded images using AI.',
      features: [
        'Real-time diagnosis across 20+ Indian crops via Kindwise API',
        'JWT-based user auth with diagnosis history dashboard',
        'Comprehensive farmer advisory system with treatment recommendations'
      ],
      tech: ['Python', 'FastAPI', 'MongoDB', 'React.js', 'Kindwise API'],
      icon: <Sprout className="h-8 w-8" />,
      gradient: 'from-emerald-500 to-green-600',
      demoUrl: '#',
      githubUrl: 'https://github.com/Ekdeepgill22/crop-disease-detection',
      uiImage: `${backendUrl}/static/ui/khetai_ui.jpg`,
    }
  ];

  const handleDemoClick = (demoUrl: string, e: React.MouseEvent) => {
    if (demoUrl === '#') {
      e.preventDefault();
      toast(
        <div style={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
          <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>🚧</span>
          <span style={{ fontWeight: 600 }}>Live Demo Coming Soon!</span>
          <div style={{ marginTop: 6 }}>
            This project is currently under deployment and will be available shortly.<br/>
            <span style={{ color: '#b45309', fontWeight: 500 }}>Stay tuned — the live experience will be worth the wait!</span>
          </div>
        </div>,
        {
          duration: 6000,
          style: {
            background: '#fffbe6',
            color: '#1a1a1a',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            border: '1.5px solid #facc15',
            padding: '1.2rem 1.5rem',
            minWidth: '320px',
            maxWidth: '90vw',
          },
          icon: null,
        }
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Showcasing real-world applications that solve meaningful problems
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                      onClick={e => handleDemoClick(project.demoUrl, e)}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-96 flex items-center justify-center shadow-lg">
                  {project.uiImage ? (
                    <img
                      src={project.uiImage}
                      alt={project.title + ' UI screenshot'}
                      className="max-h-80 rounded-lg object-contain"
                      style={{ maxWidth: '95%', maxHeight: '95%', padding: 0, background: 'none', boxShadow: 'none' }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center text-white shadow-lg mx-auto mb-4`}>
                        {project.icon}
                      </div>
                      <p className="text-gray-600 font-medium">Project Screenshot</p>
                      <p className="text-gray-500 text-sm mt-2">UI Preview Coming Soon</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;