import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-30 flex flex-col items-center justify-center
                     transition-all duration-500 ease-in-out
                     ${
                       menuOpen
                         ? "opacity-100 pointer-events-auto"
                         : "opacity-0 pointer-events-none"
                     }
                   `}
    >
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
          style={{ transitionDelay: "0.1s" }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: "0.2s" }}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: "0.3s" }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: "0.4s" }}
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300 btn-primary py-2 px-8 rounded-full
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: "0.5s" }}
        >
          Resume
        </a>
      </div>

      <div className="absolute bottom-8 text-gray-500 text-sm">
        <p>© 2024 Muhammad Bilal</p>
      </div>
    </div>
  );
};
