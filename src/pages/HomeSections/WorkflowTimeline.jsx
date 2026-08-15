import { WORKFLOW_STEPS } from "../../data/workflowSteps";

const WorkflowTimeline = () => {
  return (
    <section
      id="how-it-works"
      className="py-12 px-6 bg-slate-50 border-t border-b border-slate-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            How We Partner With You
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-2">
            A structured, transparent engineering process designed to deliver quality software on time.
          </p>
        </div>

        {/* Clean, Standard Timeline List */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-8">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.id} className="relative pl-8 md:pl-10 group">
              {/* Dot indicator */}
              <div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#2a498c] shadow-xs" />

              {/* Step number and Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-1.5 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2a498c]">
                  Phase 0{step.id}
                </span>
                <span className="hidden md:inline text-slate-300">|</span>
                <h3 className="text-base font-bold text-slate-800 tracking-tight">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;
