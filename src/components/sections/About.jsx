import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  
  const frontendSkills = [
    "Flutter",
    "SwiftUi",
    "XML",
    "jetpack Compose",
  ];

  const backendSkills = ["Dart", "swift","Kotlin", "Firebase", "MongoDB", "Node.js"];

  return (
    <section
      id="about"
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
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="glass rounded-xl p-6 glass-hover">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-black overflow-hidden">
                      <img 
                        src="/portfolio/src/assets/images/profile.jpg" 
                        alt="Muhammad Bilal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Muhammad Bilal</h3>
                  <p className="text-gray-400 text-center mb-4">Software Engineer</p>
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/miabilal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/miabilal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a 
                      href="https://medium.com/@mbilal01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22 6 12 13.01 2 6"></polyline>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/miabilal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="glass rounded-xl p-6 glass-hover">
                <div className="flex border-b border-white/10 mb-6">
                  <button 
                    className={`py-2 px-4 font-medium transition-colors ${
                      activeTab === "skills" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("skills")}
                  >
                    Skills
                  </button>
                  <button 
                    className={`py-2 px-4 font-medium transition-colors ${
                      activeTab === "education" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("education")}
                  >
                    Education
                  </button>
                  <button 
                    className={`py-2 px-4 font-medium transition-colors ${
                      activeTab === "experience" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    Experience
                  </button>
                </div>
                
                <div className={`${activeTab === "skills" ? "block" : "hidden"}`}>
                  <p className="text-gray-300 mb-6">
                    Passionate Software Engineer with 4 years of expertise in building scalable Mobile
                    applications and creating innovative solutions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass rounded-xl p-6 glass-hover">
                      <h3 className="text-xl font-bold mb-4 text-gradient">Frontend</h3>
                      <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key) => (
                          <span
                            key={key}
                            className="skill-badge bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass rounded-xl p-6 glass-hover">
                      <h3 className="text-xl font-bold mb-4 text-gradient">Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                          <span
                            key={key}
                            className="skill-badge bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${activeTab === "education" ? "block" : "hidden"}`}>
                  <div className="glass rounded-xl p-6 glass-hover">
                    <h3 className="text-xl font-bold mb-4 text-gradient">Education</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M2 10v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">B.S. in Computer Science</h4>
                          <p className="text-gray-400">Awkum University (2017-2021)</p>
                          <p className="text-gray-400 text-sm mt-1">
                            Relevant Coursework: Data Structures, Algorithms, Software Engineering, Operating Systems, Computer Networks, Database Management Systems, Object Oriented Programming, Computer Organization and Architecture, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${activeTab === "experience" ? "block" : "hidden"}`}>
                  <div className="glass rounded-xl p-6 glass-hover">
                    <h3 className="text-xl font-bold mb-4 text-gradient">Work Experience</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Software Engineer at CodeOrbit</h4>
                          <p className="text-gray-400">2022 - 2024</p>
                          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                            <li>Designing and implementing user interfaces that were both visually appealing and highly functional.</li>
                            <li>Integrating with various backend APIs and services to fetch and display data.</li>
                            <li>Implementing state management solutions to manage complex application states efficiently.</li>
                            <li>Optimizing app performance and ensuring smooth user experiences across different devices and screen sizes.</li>
                            <li>Conducting thorough testing and debugging to identify and resolve issues promptly.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
