import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { logo } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={15} />, href: "https://facebook.com/inexarum", label: "Facebook" },
    { icon: <Twitter size={15} />, href: "https://twitter.com/inexarum", label: "Twitter" },
    { icon: <Linkedin size={15} />, href: "https://linkedin.com/company/inexarum", label: "LinkedIn" },
    { icon: <Instagram size={15} />, href: "https://instagram.com/inexarum", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top block: Logo, description, and socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-200">
          <div className="text-center md:text-left space-y-2">
            <Link to="/" className="inline-flex items-center gap-1.5">
              <img src={logo} alt="iNexarum Logo" className="h-5 w-auto object-contain" />
              <span className="text-base font-bold text-slate-800 tracking-tight">
                iNexarum
              </span>
            </Link>
            <p className="text-slate-500 text-[11px] leading-relaxed max-w-sm">
              Empowering global enterprises with resilient software engineering and intelligent AI automation.
            </p>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow iNexarum on ${social.label}`}
                  className="w-7 h-7 rounded border border-slate-200 bg-white flex items-center justify-center 
                  text-slate-400 hover:text-[#2a498c] hover:border-slate-300 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-[10px] text-slate-500 font-medium">
              <span className="flex items-center gap-1"><Mail size={11} /> contact@inexarum.in</span>
              <span className="flex items-center gap-1"><Phone size={11} /> +91 92860 70075</span>
            </div>
          </div>
        </div>

        {/* Bottom block: legal links and copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="text-slate-400 text-[11px]">
              © {currentYear} iNexarum Private Limited. All rights reserved.
            </p>
          </div>

          <div className="flex gap-3 text-[11px] text-slate-500 font-medium justify-center flex-wrap">
            <a href="/#about" className="hover:text-[#2a498c]">About</a>
            <span>•</span>
            <a href="/#services" className="hover:text-[#2a498c]">Services</a>
            <span>•</span>
            <a href="/case-studies" className="hover:text-[#2a498c]">Case Studies</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-[#2a498c]">Privacy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-[#2a498c]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
