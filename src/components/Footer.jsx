import React, { memo } from "react";
import { GooglePage, logo } from "../assets/assets";

/* ======================
   DATA
====================== */
const FOOTER_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Areas We Serve", href: "#areas" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
  label: "Instagram",
  href: "https://instagram.com",
  icon: (
    <>
      {/* Outer rounded square */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Camera lens */}
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Top-right small circle */}
      <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    </>
  ),
}
];

/* ======================
   ICONS
====================== */
const SocialIcon = memo(({ label, href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="w-10 h-10 flex items-center justify-center rounded-full
           bg-white border border-white
           text-black hover:text-[#8c97e7]
           hover:border-[#2a498c] transition
           shadow-lg shadow-black/25
           hover:-translate-y-0.5 hover:shadow-black/40
           focus-visible:ring-2 focus-visible:ring-[#2a498c]">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  </a>
));

/* ======================
   FOOTER
====================== */
const Footer = () => {
  return (
    <footer className="bg-[#F7F7FA] text-[#718096]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 pt-20 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* BRAND */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" aria-label="Go to home">
              <img
                src={logo}
                alt="iNexarum logo"
                width="160"
                height="40"
                className="cursor-pointer"
              />
            </a>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Delivers product engineering, AI automation, and managed IT
              solutions to build scalable digital products.
            </p>

            <a href="#home" aria-label="Google page">
              <img
                src={GooglePage}
                alt="Google page"
                width="180"
                height="60"
                className="cursor-pointer"
              />
            </a>
          </div>

          {/* LINKS */}
          <nav className="md:col-span-3">
            <h3 className="text-lg font-semibold text-[#4A5568] mb-6">
              Links
            </h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[#8c97e7] transition
                               focus-visible:outline-none
                               focus-visible:ring-2 focus-visible:ring-[#2a498c]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <address className="md:col-span-4 not-italic flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#4A5568] mb-6">
                Contact us
              </h3>
              <p className="mb-6">
                We're here to help you build future-ready software.
              </p>
              <a
                href="tel:+919286070075"
                className="font-medium hover:text-[#8c97e7] transition"
              >
                +91 92860 70075
              </a>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <SocialIcon key={label} label={label} href={href}>
                  {icon}
                </SocialIcon>
              ))}
            </div>
          </address>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-[#8c97e7]/20 text-center text-sm">
          © {new Date().getFullYear()} iNexarum Pvt. Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;