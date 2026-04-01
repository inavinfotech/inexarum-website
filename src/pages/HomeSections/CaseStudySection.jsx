import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CaseStudyCard from "../../components/cards/CaseStudyCard";
import SectionHeader from "../../components/SectionHeader";
import { CASE_STUDIES } from "../../constants/caseStudies";

const CaseStudy = () => {
  return (
    <section
      id="case-studies"
      className="min-h-dvh bg-[#F7F7FA] py-10 md:py-15 px-4 max-w-7xl mx-auto"
    >
      {/* Reusable Section Header */}
      <SectionHeader subtitle="Our recent" title="Case studies" />

      {/* Cards */}
      <div className="space-y-8">
        {CASE_STUDIES.slice(0, 3).map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      {/* Footer Link */}
      <div className="flex justify-end mt-8">
        <Link
          to="/case-studies"
          className="flex items-center text-[#8c97e7] font-bold text-lg hover:underline"
        >
          Read more case studies <ChevronRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CaseStudy;
