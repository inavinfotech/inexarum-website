import SectionHeader from "../../components/SectionHeader";
import StepCard from "../../components/cards/StepCard";
import { WORKFLOW_STEPS } from "../../constants/workflowSteps";

const WorkflowTimeline = () => {
  const columns = [
    WORKFLOW_STEPS.slice(0, 2),
    WORKFLOW_STEPS.slice(2, 4),
    WORKFLOW_STEPS.slice(4, 6),
  ];

  return (
    <section
      id="how-it-works"
      className="py-10 md:py-24 px-4 bg-gray-50 overflow-hidden"
    >
      <SectionHeader
        subtitle="How development"
        title="through Alcaline works"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative">
          {/* Central line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-[#2a498c] to-[#8c97e7] -translate-y-1/2" />

          {/* Trophy */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-3xl">
            🏆
          </div>

          <div className="grid grid-cols-3 gap-x-12">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col items-center">
                <StepCard step={col[0]} isTop />
                <div className="h-32" />
                <div className="translate-x-10">
                  <StepCard step={col[1]} isTop={false} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-12 border-l-2 border-gray-50 pl-6 ml-4">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.id} className="relative">
              <div className="absolute -left-8 top-1/2 w-4 h-0.5 bg-gray-50" />
              <StepCard step={step} isTop />
            </div>
          ))}
          <div className="text-3xl  ml-39 mt-2.5">🏆</div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;
