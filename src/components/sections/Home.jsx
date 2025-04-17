import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          transition: "all 0.3s ease",
        }}
      ></div>
      
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-500 animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-cyan-500 animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t border-l border-blue-500/30"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 border-t border-r border-blue-500/30"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-b border-l border-blue-500/30"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b border-r border-blue-500/30"></div>
        </div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm font-medium">
              Software Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Muhammad Bilal</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            I'm a Software Engineer who loves crafting clean, scalable Mobile Apps. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="btn-primary text-white py-3 px-8 rounded-full font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn-secondary text-blue-500 py-3 px-8 rounded-full font-medium"
            >
              Contact Me
            </a>
            
            <a
              href="/portfolio/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-blue-500 py-3 px-8 rounded-full font-medium"
            >
              Resume
            </a>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <a 
              href="https://github.com/miabilal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22 6 12 13.01 2 6"></polyline>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/mia_bilal11/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};
