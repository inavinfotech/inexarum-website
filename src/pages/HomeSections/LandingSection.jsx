import { FEATURES } from "../../data/features";

const LandingSection = () => {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
          Our Principles
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          How We Build Quality Software
        </h2>
      </div>

      <main className="max-w-6xl mx-auto px-6 space-y-12">
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 lg:gap-16 items-center`}
          >
            {/* Text column */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                {item.title}
              </h3>

              {item.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="border-l-2 border-slate-300 pl-4 py-1">
                <blockquote className="italic text-slate-500 text-xs md:text-sm">
                  "{item.quote}"
                </blockquote>
                <cite className="block text-xs font-semibold text-slate-400 mt-1">
                  — {item.attribution}
                </cite>
              </div>
            </div>

            {/* Image column (Simple, tight preview without decorative dots) */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="rounded-lg overflow-hidden border border-slate-100 shadow-xs bg-slate-50">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default LandingSection;
