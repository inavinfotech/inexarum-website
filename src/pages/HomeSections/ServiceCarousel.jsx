import { SERVICES } from "../../data/services";

const ServiceCarousel = () => {
  return (
    <section
      id="services"
      className="py-12 bg-slate-50 border-t border-b border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Our Core Services & Solutions
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mt-2">
            Engineering robust products, custom software platforms, and automation systems tailored for business acceleration.
          </p>
        </div>

        {/* Professional Services Grid (Classy Standard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Accent Icon Wrapper */}
                <div className={`w-10 h-10 rounded-md flex items-center justify-center mb-4 bg-linear-to-br ${service.accentColor} text-white shadow-xs`}>
                  {/* Render service icon with standard styling */}
                  <div className="w-5 h-5 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Read More link */}
              <div className="pt-2 border-t border-slate-50 flex justify-start">
                <span className="text-xs font-semibold text-[#2a498c] hover:underline cursor-pointer flex items-center gap-1">
                  Learn more
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
