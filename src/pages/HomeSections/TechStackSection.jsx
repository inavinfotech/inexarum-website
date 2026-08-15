import { useState, useMemo } from "react";
import LogoCard from "../../components/cards/LogoCard";
import { TECH_DATA } from "../../data/techData";

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
    <section className="py-12 px-6 max-w-6xl mx-auto border-t border-slate-100 bg-[#FCFDFE]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Our Technology Stack
        </h2>
      </div>

      {/* Tabs (Tighter, neat gap) */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 border-b border-slate-150 pb-3">
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            aria-pressed={activeTab === key}
            className={`text-xs md:text-sm font-semibold transition-colors duration-200 pb-1 relative
            ${
              activeTab === key
                ? "text-[#2a498c]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {label}

            {activeTab === key && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a498c] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Logos Grid (Compact grid layout with standard card wrappers) */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
          {filteredTech.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-lg shadow-xs hover:border-slate-300 transition-colors"
            >
              <LogoCard tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackPage;
