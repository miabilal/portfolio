import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-[rgba(10, 10, 10, 0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#home" 
            className="font-mono text-2xl font-bold text-white flex items-center"
          >
            <span className="text-blue-500 mr-1">&lt;</span>
            M<span className="text-gradient">.Bilal</span>
            <span className="text-blue-500 ml-1">/&gt;</span>
          </a>

          <div
            className="w-8 h-8 relative cursor-pointer z-40 md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white py-2 px-5 rounded-full font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
