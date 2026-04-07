import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { GooglePage, logo } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/#services" },
        { label: "Mobile Apps", href: "/#services" },
        { label: "AI Solutions", href: "/#services" },
        { label: "Cloud Infrastructure", href: "/#services" },
        { label: "Digital Marketing", href: "/#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/#about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blogs", href: "/blogs" },
        { label: "How it Works", href: "/#how-it-works" },
        { label: "Careers", href: "/#careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#F8FAFC] pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#2a498c] via-[#8c97e7] to-[#a4afff]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8c97e7]/5 blur-[120px] rounded-full" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#2a498c]/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-2">
                <img src={logo} alt="iNexarum Logo" className="h-10 w-auto object-contain" />
                <span className="text-2xl font-black bg-linear-to-r from-[#2a498c] to-[#8c97e7] bg-clip-text text-transparent">
                  iNexarum
                </span>
              </div>
            </Link>
            
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              Empowering global enterprises with resilient software engineering, 
              intelligent AI automation, and scalable digital ecosystems.
            </p>

            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-slate-600 group cursor-pointer hover:text-[#2a498c] transition-colors">
                <div className="p-2 rounded-lg bg-white shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-[#8c97e7]" />
                </div>
                <span className="font-medium">contact@inexarum.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 group cursor-pointer hover:text-[#2a498c] transition-colors">
                <div className="p-2 rounded-lg bg-white shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-[#8c97e7]" />
                </div>
                <span className="font-medium">+91 92860 70075</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 rounded-lg bg-white shadow-md border border-slate-100">
                  <MapPin size={18} className="text-[#8c97e7]" />
                </div>
                <span className="font-medium">Meerut, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className={`space-y-6 ${section.title === "Services" ? "max-md:hidden" : ""}`}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1E293B]">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className="text-slate-500 hover:text-[#2a498c] hover:translate-x-1 flex items-center gap-1 transition-all duration-300"
                      >
                        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 transition-all" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-slate-400 text-sm font-medium">
                © {currentYear} iNexarum Private Limited.
              </p>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-sm">
                <Sparkles size={12} className="text-[#8c97e7]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Enterprise Grade Secure</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center 
                  text-slate-400 hover:text-[#2a498c] hover:border-[#2a498c]/20 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Trust Badge Placeholder */}
            <div className="hidden lg:block">
              <img src={GooglePage} alt="Google Partner" className="h-10 opacity-70 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
