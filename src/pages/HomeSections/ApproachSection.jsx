import { APPROACH_ITEMS } from "../../data/approach";

const ApproachSection = () => {
  return (
    <section
      id="approach"
      className="py-12 px-6 bg-white max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
          Methodology
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Our Development Approach
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {APPROACH_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group bg-slate-50 border border-slate-100 rounded-lg p-5 flex gap-4 transition-colors duration-200 hover:border-slate-200"
          >
            {/* Icon (Classy size reduction) */}
            <div
              className={`
              shrink-0
              w-10 h-10
              rounded-md
              flex items-center justify-center
              shadow-xs
              ${item.iconBgColor}
            `}
            >
              <div className="w-5 h-5 text-white flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-slate-800 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;
