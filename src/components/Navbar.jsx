// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 font-medium text-white">
          <li><a href="#home" className="hover:text-[#64ffda] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</a></li>
        </ul>
        {/* Available for Work Badge */}
        <div className="hidden md:block ml-6">
          <span className="bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
            Available for work
          </span>
        </div>
        {/* Hamburger for Mobile (to be implemented) */}
        <div className="md:hidden flex items-center">
          {/* Hamburger menu will go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
