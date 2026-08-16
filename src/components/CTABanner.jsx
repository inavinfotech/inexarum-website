import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Classy and professional CTA banner with tighter spacing and structured borders.
 * Uses responsive margins to look great and detached from edges on mobile viewports.
 */
const CTABanner = ({
  title = "Ready to build something great?",
  subtitle = "Our team is ready to bring your vision to life with cutting-edge technology.",
  buttonText = "Get Started",
  to = "/contact",
  theme = "gradient",
}) => {
  const themes = {
    gradient: {
      bg: "bg-[#0F172A]", // Solid deep navy/slate
      text: "text-white",
      subtext: "text-slate-400",
      btn: "bg-[#2a498c] text-white hover:bg-[#1e3362] border border-[#2a498c]",
    },
    dark: {
      bg: "bg-[#1E293B]",
      text: "text-white",
      subtext: "text-slate-400",
      btn: "bg-[#2a498c] text-white hover:bg-[#1e3362] border border-[#2a498c]",
    },
    light: {
      bg: "bg-white border border-slate-200",
      text: "text-[#0F172A]",
      subtext: "text-slate-500",
      btn: "bg-[#2a498c] text-white hover:bg-[#1e3362]",
    },
  };

  const t = themes[theme] || themes.gradient;

  return (
    <div
      className={`${t.bg} rounded-lg px-6 py-6 md:px-10 md:py-8 mx-6 lg:mx-auto max-w-6xl my-6 overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className={`text-lg md:text-xl font-bold ${t.text} leading-tight`}>
            {title}
          </h3>
          <p className={`text-xs md:text-sm ${t.subtext} mt-1.5 max-w-xl leading-relaxed`}>
            {subtitle}
          </p>
        </div>

        <Link
          to={to}
          className={`group flex items-center gap-1.5 px-4 py-2 rounded font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 w-full md:w-auto justify-center ${t.btn}`}
        >
          {buttonText}
          <ArrowRight
            size={13}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default CTABanner;
