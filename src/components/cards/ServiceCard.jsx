import React from "react";

const ServiceCard = ({ service, offset, isActive, onClick }) => {
  const isVisible = Math.abs(offset) <= 2; //Math.abs() = absolute value (minus hatane ke liye)
  const absOffset = Math.abs(offset); //absOffset = card center se kitni door hai

  const xOffset = offset * 280;
  const scale = 1 - absOffset * 0.15;
  const opacity = 1 - absOffset * 0.4;
  const zIndex = 10 - absOffset;
  const blur = absOffset > 0 ? `blur(${absOffset}px)` : "none";

  return (
    <div
      onClick={onClick}
      className={`absolute w-[320px] md:w-95 h-85 md:h-95 p-8 md:p-10
        rounded-3xl bg-white cursor-pointer select-none
        ${isActive ? "shadow-2xl ring-1 ring-[#8c97e7]/20" : "shadow-lg"}
        transition-all duration-700 ease-out group`}
      style={{
        display: isVisible ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        transform: `translateX(${xOffset}px) scale(${scale})`,
        opacity,
        zIndex,
        filter: blur,
      }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center 
        justify-center mb-8 bg-linear-to-br ${service.accentColor}
        text-white shadow-lg transition-transform duration-500 
        group-hover:scale-110 group-hover:rotate-6`}
      >
        {service.icon}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3
          className={`text-xl md:text-2xl font-bold transition-colors duration-300 
          ${isActive ? "text-[#1E293B]" : "text-[#475569]"}`}
        >
          {service.title}
        </h3>

        <p
          className={`text-sm md:text-base leading-relaxed transition-opacity duration-500 
          ${isActive ? "text-slate-500" : "text-slate-400 line-clamp-3"}`}
        >
          {service.description}
        </p>
      </div>

      {/* Active Line */}
      <div
        className={`mt-8 h-1 rounded-full transition-all duration-700 ease-out
        ${
          isActive
            ? `w-16 bg-linear-to-r ${service.accentColor}`
            : "w-0 bg-transparent"
        }`}
      />

      {/* Hover Border */}
      <div
        className={`absolute inset-0 rounded-3xl border-2 pointer-events-none
        transition-opacity duration-300
        ${
          isActive
            ? "border-[#2a498c]/10 opacity-100"
            : "border-transparent opacity-0 group-hover:opacity-50 group-hover:border-[#8c97e7]/20"
        }`}
      />
    </div>
  );
};

export default ServiceCard;
