import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ai Skin Analyzer App",
      description: "AI-powered skin analysis app that detects skin type, wrinkles, acne, and more — helping users monitor and improve their skin health..",
      image: "/src/assets/images/project1.png",
      link: "https://project1.com",
      github: "https://github.com/miabilal/Skin-Analyzer",
      technologies: ["Flutter", "Ai Api", "Firebase"]
    },
    {
      id: 2,
      title: "Ai Age Detection App",
      description: "A smart facial recognition app that accurately estimates a person’s age using advanced AI and image processing.",
      image: "/src/assets/images/project2.png",
      link: "https://project2.com",
      github: "https://github.com/miabilal/age_detection_app",
      technologies: ["Flutter", "TensorFlow", "Sqlite"]
    },
    {
      id: 3,
      title: "Location Based Task Reminder App",
      description: "A location-based task reminder app that notifies users of important tasks precisely when they reach specific places..",
      image: "/src/assets/images/project3.png",
      link: "https://project3.com",
      github: "https://github.com/miabilal/location_reminder",
      technologies: ["Flutter", "Node.js", "Microservices"]
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t border-l border-blue-500/30"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 border-t border-r border-blue-500/30"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-b border-l border-blue-500/30"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b border-r border-blue-500/30"></div>
        </div>
      </div>
      
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl animate-float" style={{ animationDelay: "1s" }}></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card glass rounded-xl overflow-hidden glass-hover"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-2 px-4 rounded-full text-sm font-medium"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary py-2 px-4 rounded-full text-sm font-medium"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/miabilal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2 py-3 px-6 rounded-full text-blue-500"
            >
              <span>View More on GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
