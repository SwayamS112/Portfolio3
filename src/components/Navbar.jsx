import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Add react-icons if not already

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 font-medium text-white">
          <li><a href="#home" className="hover:text-[#64ffda] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</a></li>
        </ul>

        {/* Resume Button + Work Badge (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/assets/resume.pdf"
            download
            className="relative group inline-block px-5 py-2 border border-[#64ffda] text-[#64ffda] rounded-md font-medium overflow-hidden transition duration-300 hover:bg-[#64ffda]/10"
          >
            <span className="relative z-10">Resume</span>
            <span className="absolute left-0 top-0 w-full h-full bg-[#64ffda]/20 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
          </a>

          <span className="bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
            Available for work
          </span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a192f] text-white px-4 py-6 space-y-4 shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-[#64ffda] transition-colors">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-[#64ffda] transition-colors">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-[#64ffda] transition-colors">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-[#64ffda] transition-colors">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-[#64ffda] transition-colors">Contact</a>

          <a
            href="/assets/resume.pdf"
            download
            className="mt-4 inline-block w-full text-center px-5 py-2 border border-[#64ffda] text-[#64ffda] rounded-md font-medium hover:bg-[#64ffda]/10 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
