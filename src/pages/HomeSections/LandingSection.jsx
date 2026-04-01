import React from "react";
import { FEATURES } from "../../constants/features";
import SectionHeader from "../../components/SectionHeader";
/* Decorative Dot */
const DecorativeDot = ({ position, color }) => {
  const positionMap = {
    "top-left": "-top-6 -left-6",
    "top-right": "-top-6 -right-6",
    "bottom-left": "-bottom-6 -left-6",
    "bottom-right": "-bottom-6 -right-6",
    "bottom-center": "-bottom-4 left-1/2 -translate-x-1/2",
    "top-center": "-top-4 left-1/2 -translate-x-1/2",
  };

  const colorMap = {
    orange: "bg-gradient-to-br from-orange-400 to-orange-500",
    pink: "bg-gradient-to-br from-[#2a498c] to-[#8c97e7]",
  };

  return (
    <div
      className={`absolute w-12 h-12 rounded-full opacity-80 ${positionMap[position]} ${colorMap[color]}`}
    />
  );
};

/* Main Component */
const LandingSection = () => {
  return (
    <div className="min-h-dvh py-10 md:py-20">
      {/* Reusable Section Header */}
      <SectionHeader subtitle="Way of building" title="Great Software" />

      <main className="max-w-7xl mx-auto px-6 lg:px-24 space-y-16 md:space-y-32">
        {FEATURES.map((item, index) => (
          <section
            key={index}
            className={`flex flex-col ${
              item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12 lg:gap-24 items-center`}
          >
            {/* Text */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>

              {item.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="border-l-2 border-[#8c97e7] pl-6">
                <blockquote className="italic text-[#8c97e7]">
                  "{item.quote}"
                </blockquote>
                <cite className="block text-sm text-gray-500 mt-2">
                  — {item.attribution}
                </cite>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 relative">
              {item.dots.map((dot, i) => (
                <DecorativeDot key={i} {...dot} />
              ))}

              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default LandingSection;
