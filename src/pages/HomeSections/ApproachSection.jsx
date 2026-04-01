import React from "react";
import { APPROACH_ITEMS } from "../../constants/approach";
import SectionHeader from "../../components/SectionHeader";

const ApproachSection = () => {
  return (
    <section id="approach" className="py-10 px-4 md:px-8 lg:px-16  bg-[#F7F7FA]  max-w-7xl mx-auto">
      
      {/* Reusable Section Header */}
      <SectionHeader
        subtitle="Our design and"
        title="development approach"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {APPROACH_ITEMS.map((item) => (
          <div
            key={item.id}
            className="
              group
              bg-white
              border border-gray-100
              rounded-lg
              p-8
              flex gap-6
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            {/* Icon */}
            <div
              className={`
                shrink-0
                w-14 h-14
                rounded-xl
                flex items-center justify-center
                shadow-lg
                transition-transform duration-300
                group-hover:scale-105
                ${item.iconBgColor}
              `}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;
