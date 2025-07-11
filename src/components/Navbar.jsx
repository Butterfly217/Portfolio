import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100/60 backdrop-blur-md text-black py-4 px-6 fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Swati Negi</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 bg-gray-100/90 backdrop-blur-lg rounded-lg p-4 space-y-3 text-sm font-medium text-black shadow">
          <li><a href="#about" onClick={toggleMenu} className="block hover:text-blue-600 transition">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="block hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
