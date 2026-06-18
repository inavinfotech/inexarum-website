import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CaseStudyCard from "../../components/cards/CaseStudyCard";
import { CASE_STUDIES } from "../../data/caseStudies";

const CaseStudy = () => {
  return (
    <section
      id="case-studies"
      className="py-12 bg-white max-w-6xl mx-auto px-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
            Case Studies
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Our Work in Action
          </h2>
        </div>

        <Link
          to="/case-studies"
          className="inline-flex items-center text-xs md:text-sm font-semibold text-[#2a498c] hover:underline"
        >
          View all case studies
          <ChevronRight size={14} className="ml-0.5" />
        </Link>
      </div>

      {/* Case Study Cards (Tighter Spacing) */}
      <div className="space-y-6">
        {CASE_STUDIES.slice(0, 3).map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
