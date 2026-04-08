import { Link } from "react-router-dom";
import HeroVisual from "../../assets/hero-new.png";
import { ChevronRight, Sparkles, Globe, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] md:h-screen w-full overflow-hidden bg-white flex items-center justify-center pt-6 lg:pt-20"
    >
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#a4afff]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#8c97e7]/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#2a498c]/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content (Text) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge Indicator */}
          <div 
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8c97e7]/20 bg-white/50 backdrop-blur-md shadow-sm animate-fadeIn"
          >
            <Sparkles size={16} className="text-[#8c97e7]" />
            <span className="text-xs md:text-sm font-semibold text-[#2a498c]/80 tracking-wide">
              Next Generation Digital Agency
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] md:leading-[1.05] animate-scaleReveal"
          >
            <span className="bg-linear-to-r from-[#2a498c] via-[#8c97e7] to-[#a4afff] bg-clip-text text-transparent">
              Ideate. Implement.
            </span>
            <br />
            <span className="text-[#1E293B]">Initiate the Future.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-base md:text-lg text-slate-500 max-w-xl font-medium leading-relaxed animate-fadeInUp">
            Empowering businesses with resilient software, AI-driven automation, 
            and scalable digital ecosystems. iNexarum blends strategy, design, 
            and engineering for the modern enterprise.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/contact"
              className="group px-6 py-3.5 rounded-xl bg-[#2a498c] text-white font-bold text-base 
              flex items-center gap-2 hover:bg-[#8c97e7] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#2a498c]/20"
            >
              Get Started Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/case-studies"
              className="px-6 py-3.5 rounded-xl border-2 border-[#2a498c]/10 bg-white text-[#2a498c] font-bold text-base
              hover:border-[#2a498c]/20 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Right Content (Image) - Hidden on mobile */}
        <div className="hidden lg:block flex-1 max-w-xl relative animate-float">
          <img 
            src={HeroVisual} 
            alt="iNexarum Digital Agency - Next-Gen Software and AI Interface" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(140,151,231,0.15)] rounded-3xl"
          />
          
          {/* Decorative Floating Cards */}
          <div className="absolute -left-10 top-20 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#a4afff]/20 text-[#2a498c]"><Globe size={20} /></div>
              <div className="text-left"><p className="text-xs font-bold text-[#2a498c]">Global Scale</p><p className="text-[10px] text-slate-500">Ready for enterprise</p></div>
            </div>
          </div>

          <div className="absolute -right-5 top-40 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#8c97e7]/20 text-[#2a498c]"><Terminal size={20} /></div>
              <div className="text-left"><p className="text-xs font-bold text-[#2a498c]">AI Optimized</p><p className="text-[10px] text-slate-500">Smart engineering</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
