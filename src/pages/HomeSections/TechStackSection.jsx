import { useState, useMemo } from "react";
import LogoCard from "../../components/cards/LogoCard";
import { TECH_DATA } from "../../constants/techData";
import SectionHeader from "../../components/SectionHeader";

const CATEGORIES = [
  { key: "BACKEND", label: "Backend" },
  { key: "FRONTEND", label: "Frontend" },
  { key: "DATABASES", label: "Databases" },
  { key: "CMS", label: "CMS" },
  { key: "CLOUD_TESTING", label: "Cloud & Testing" },
  { key: "DEVOPS", label: "DevOps" },
];

const TechStackPage = () => {
  const [activeTab, setActiveTab] = useState("BACKEND");

  const filteredTech = useMemo(() => {
    return TECH_DATA.filter((tech) => tech.category === activeTab);
  }, [activeTab]);

  return (
    <section className="min-h-dvh py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <SectionHeader subtitle="Our" title="Tech Stack" />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            aria-pressed={activeTab === key}
            className={`relative text-sm font-medium transition-all duration-300
              ${
                activeTab === key
                  ? "text-transparent bg-clip-text bg-linear-to-r from-[#2a498c] to-[#8c97e7]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
          >
            {label}

            {activeTab === key && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#8c97e7] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Logos Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-16 gap-y-14 place-items-center">
          {filteredTech.map((tech) => (
            <LogoCard key={tech.id} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackPage;
