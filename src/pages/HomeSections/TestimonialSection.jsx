import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { INITIAL_TESTIMONIALS } from "../../data/testimonials";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = INITIAL_TESTIMONIALS;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <section className="bg-slate-50 py-12 px-6 border-t border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Client Success Stories
          </h2>
        </div>

        {/* Standard Testimonial Slider Box */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-10 shadow-xs relative">
          {/* Quote Icon */}
          <div className="text-[#2a498c]/10 absolute top-4 left-4">
            <Quote size={40} className="fill-current" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4 pt-4">
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < current.stars
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-200"
                  }
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed italic max-w-2xl">
              "{current.quote}"
            </p>

            {/* Client Info */}
            <div className="pt-2">
              <h4 className="font-bold text-slate-800 text-sm md:text-base">
                {current.author}
              </h4>
              <p className="text-xs text-[#2a498c] font-semibold uppercase tracking-wider">
                {current.company}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-50">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} className="text-slate-600" />
            </button>

            {/* Pagination dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex
                      ? "bg-[#2a498c]"
                      : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} className="text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
