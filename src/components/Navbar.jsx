import React, { useState } from "react";
import { logo } from "../assets/assets";
import { navItems } from "../constants/navItems";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="flex justify-between items-center px-6 md:px-10 py-2.5
        bg-white md:bg-white/20 backdrop-blur-md shadow-[0_4px_20px_#0000001A]
        fixed top-0 left-0 w-full z-50"
      >
        {/* Logo */}
        <div className="flex items-center h-12">
          <a
            href="/"
            aria-label="Go to home"
            className="flex items-center gap-1 group"
          >
            <img
              // src={"./Mlogo.png"}
              src={logo}
              alt="iNexarum logo"
              width="auto"
              height="full"
              className="cursor-pointer object-contain h-10"
            />
            <span className="text-2xl md:text-3xl font-black bg-linear-to-r from-[#2a498c] to-[#8c97e7] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity tracking-tight">
              iNexarum
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-black hover:text-[#8c97e7] cursor-pointer transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          aria-label="Contact us"
          className="hidden md:block px-5 py-2 rounded-md
          bg-linear-to-r from-[#2a498c] to-[#8c97e7]
          text-white shadow-lg shadow-[#8c97e7]/40
          hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Contact us
        </a>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col justify-between w-7 h-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 bg-[#1c3a70] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-[#1c3a70] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-[#1c3a70] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white/50 backdrop-blur-md flex flex-col items-center space-y-6 py-6 z-40">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base hover:text-[#8c97e7] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contact"
            aria-label="Contact us"
            className="border border-[#8c97e7] text-[#8c97e7] px-5 py-1 rounded-md hover:bg-[#8c97e7] hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
