import { ChevronRight } from "lucide-react";
import PhoneMockup from "../PhoneMockup";

const CaseStudyCard = ({ study }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-lg overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 mb-6 bg-white">
      {/* Visual Section (Compact) */}
      <div
        className={`w-full md:w-[35%] flex items-center justify-center p-6 ${study.bgColor}`}
      >
        <div className="flex space-x-4">
          <PhoneMockup imageUrl={study.imageLeft} className="translate-y-2" />
          <PhoneMockup imageUrl={study.imageRight} className="-translate-y-2" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[65%] flex flex-col justify-center p-6 md:p-8 bg-white">
        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">
          {study.title}
        </h3>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
          {study.description}
        </p>

        <a
          href="#"
          className="inline-flex items-center text-xs font-semibold text-[#2a498c] hover:underline mt-auto"
        >
          Read case study <ChevronRight size={14} className="ml-0.5" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
