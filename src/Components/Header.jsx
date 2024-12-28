import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/anant infinity logomark.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <header className="fixed w-full bg-[#f9f9f9] z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12 lg:px-[240px]">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-[64px] text-gray-600 font-medium">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#2d2d2d] hover:font-semibold hover:underline-offset-1 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#2d2d2d] hover:font-semibold hover:underline-offset-1 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#2d2d2d] hover:font-semibold hover:underline-offset-1 transition"
          >
            Contact
          </button>
        </nav>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#f9f9f9] shadow-md md:hidden`}
        >
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium p-4">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#2d2d2d] hover:font-semibold hover:underline-offset-1 transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-[#2d2d2d] hover:font-semibold hover:underline-offset-1 transition"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#2d2d2d] hover:font-semibold hover:underline-offset-1 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
