import React from "react";
import { ChevronRight } from "lucide-react";
import PhoneMockup from "../PhoneMockup";

const CaseStudyCard = ({ study }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-sm mb-12 min-h-112.5">
      {/* Visual Section */}
      <div
        className={`w-full md:w-[40%] flex items-center justify-center p-8 ${study.bgColor}`}
      >
        <div className="flex space-x-6">
          <PhoneMockup imageUrl={study.imageLeft} className="translate-y-4" />
          <PhoneMockup imageUrl={study.imageRight} className="-translate-y-4" />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`w-full md:w-[60%] flex flex-col justify-center p-8 sm:p-16 ${study.bgCardColor}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          {study.title}
        </h2>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
          {study.description}
        </p>

        <a
          href="#"
          className="flex items-center text-[#8c97e7] font-semibold text-sm hover:opacity-80 mt-auto"
        >
          Read more <ChevronRight size={18} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
