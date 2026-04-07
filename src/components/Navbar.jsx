import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets/assets";
import { navItems } from "../constants/navItems";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
          <Link
            to="/"
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
          </Link>
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

        <Link
          to="/contact"
          aria-label="Contact us"
          className="hidden md:block px-5 py-2 rounded-md
          bg-linear-to-r from-[#2a498c] to-[#8c97e7]
          text-white shadow-lg shadow-[#8c97e7]/40
          hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Contact us
        </Link>

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-0 left-0 w-full bg-white z-40 flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-2xl font-bold text-[#1c3a70] hover:text-[#8c97e7] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.1 }}
              >
                <Link
                  to="/contact"
                  aria-label="Contact us"
                  className="mt-4 px-8 py-3 rounded-xl bg-linear-to-r from-[#2a498c] to-[#8c97e7] text-white font-bold text-lg shadow-xl shadow-[#8c97e7]/40"
                  onClick={() => setIsOpen(false)}
                >
                  Contact us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
