import React from "react";

const SectionHeader = ({ subtitle, title, align = "center" }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} mb-10 md:mb-20`}>
      {/* Gradient Line */}
      <div className="w-16 h-1.5 bg-linear-to-r from-[#2a498c] to-[#8c97e7] rounded-full mb-4" />

      {/* Subtitle */}
      {subtitle && (
        <h2 className="text-2xl md:text-4xl font-normal text-slate-800">
          {subtitle}
        </h2>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
