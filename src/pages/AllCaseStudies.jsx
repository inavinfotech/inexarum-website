import React from "react";
import PageHeader from "../components/PageHeader";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { CASE_STUDIES } from "../constants/caseStudies";

const AllCaseStudies = () => {
  return (
    <div className="min-h-dvh bg-[#F7F7FA] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          subtitle="Explore how we've helped our clients succeed."
          title="All Case Studies"
        />

        <div className="space-y-12 mt-12">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCaseStudies;
