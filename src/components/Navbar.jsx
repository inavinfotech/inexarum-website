import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { logo } from "../assets/assets";
import { navItems } from "../data/navItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12
        ${
          isScrolled
            ? "bg-white border-b border-slate-200 py-3 shadow-xs"
            : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Go to home"
            className="flex items-center gap-1.5 group"
          >
            <img
              src={logo}
              alt="iNexarum logo"
              className="h-7 w-auto object-contain transition-all duration-300"
            />
            <span className="font-extrabold text-slate-800 text-lg md:text-xl tracking-tight transition-all duration-300">
              iNexarum
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-500 hover:text-[#2a498c] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            aria-label="Contact us"
            className="hidden md:inline-flex px-4 py-2 rounded bg-[#2a498c] text-white hover:bg-[#1e3362] transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            Contact
          </Link>

          {/* Hamburger Button */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-slate-800 transition-transform duration-200 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-slate-800 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-slate-800 transition-transform duration-200 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown with smooth height/opacity transition */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 z-40 overflow-hidden shadow-md"
            >
              <div className="py-6 px-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-semibold text-slate-700 hover:text-[#2a498c] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  to="/contact"
                  className="inline-flex justify-center px-4 py-2 rounded bg-[#2a498c] text-white text-xs font-semibold uppercase tracking-wider text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
