import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { CLIENT_LOGOS } from "../../data/clientsLogos";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between bg-white pt-24 pb-8"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Main Content (Centered vertically) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 w-full text-center">
        {/* Simple single badge */}
        <div className="mb-4 inline-flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-50 text-[10px] md:text-xs font-semibold text-emerald-800 border border-emerald-100">
            <ShieldCheck size={12} className="text-emerald-600" />
            DPIIT Recognized Startup • Government of India
          </span>
        </div>

        {/* Clean, standard heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight max-w-3xl mx-auto">
          Resilient Software Engineering & Intelligent AI Automation
        </h1>

        {/* Short, clear sub-headline */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          We partner with enterprises and startups to engineer custom software platforms, deploy smart automation, and manage modern cloud systems.
        </p>

        {/* Tighter, elegant button group */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center w-full sm:w-auto">
          <Link
            to="/contact"
            className="group px-5 py-2.5 rounded bg-[#2a498c] text-white font-semibold text-xs uppercase tracking-wider
            flex items-center gap-1 hover:bg-[#1e3362] transition-colors w-full sm:w-auto justify-center"
          >
            Get Started
            <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/case-studies"
            className="px-5 py-2.5 rounded border border-slate-200 bg-white text-slate-600 font-semibold text-xs uppercase tracking-wider
            hover:bg-slate-50 hover:text-slate-800 transition-colors w-full sm:w-auto justify-center"
          >
            View Projects
          </Link>
        </div>

        {/* Flat, professional trust stats in a clean horizontal strip */}
        <div className="mt-8 pt-6 border-t border-slate-100 w-full max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>50+ Projects Delivered</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>30+ Global Clients</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>99% Client Retention</span>
          </div>
        </div>
      </div>

      {/* Integrated Logo Ticker (At the bottom of the fold) */}
      <div className="relative z-10 w-full pt-6 border-t border-slate-100">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
          Trusted by organizations globally
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Overlays */}
          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scroller */}
          <div className="flex w-max shrink-0 animate-[infinite-scroll_25s_linear_infinite]">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="shrink-0 w-28 md:w-36 flex items-center justify-center px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  title={logo.name}
                  className="h-6 md:h-8 w-auto object-contain opacity-40 hover:opacity-80 transition-all duration-250"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inlined CSS for scroller to guarantee portability */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
