import React from "react";
import PageHeader from "../components/PageHeader";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { CASE_STUDIES } from "../constants/caseStudies";
import SEOHead from "../components/SEOHead";

const AllCaseStudies = () => {
  return (
    <div className="min-h-dvh bg-[#F7F7FA] py-24 px-4">
      <SEOHead
        title="Case Studies"
        description="Explore iNexarum's successful projects and case studies. See how we've helped businesses with custom software and digital solutions."
        path="/case-studies"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inexarum.in/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://inexarum.in/case-studies" }
          ]
        }}
      />
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
