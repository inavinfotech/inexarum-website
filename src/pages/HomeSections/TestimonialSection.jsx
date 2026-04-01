import React, { useState, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import { INITIAL_TESTIMONIALS } from "../../constants/testimonials";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const testimonials = INITIAL_TESTIMONIALS;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const current = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials],
  );

  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* Section Header */}
      <SectionHeader subtitle="Why customers love" title="working with us" />

      {/* Quote Section */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 flex justify-center items-center">
        {/* Left Arrow (Desktop only) */}
        <button
          aria-label="Previous testimonial"
          onClick={handlePrev}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white items-center justify-center hover:text-[#8c97e7] hover:border-[#8c97e7] transition"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow (Desktop only) */}
        <button
          aria-label="Next testimonial"
          onClick={handleNext}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white items-center justify-center hover:text-[#8c97e7] hover:border-[#8c97e7] transition"
        >
          <ChevronRight />
        </button>

        {/* Quote Box */}
        <div className="relative max-w-3xl text-center px-6 md:px-12 py-4">
          <Quote className="absolute -top-2 left-0 md:-top-6 md:-left-6 text-[#8c97e7] w-8 h-8 md:w-10 md:h-10" />

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed relative z-10 px-2 sm:px-4">
            {current.quote}
          </p>

          <Quote className="absolute -bottom-2 right-0 md:-bottom-6 md:-right-6 text-[#8c97e7] w-8 h-8 md:w-10 md:h-10 rotate-180" />
        </div>
      </div>

      {/* Avatars */}
      <div className="w-full overflow-hidden">
        {/* <h3 className="text-center text-2xl font-bold mb-12">Testimonials</h3> */}

        {/* Mobile View: Shows only 3 items (prev, current, next) */}
        <div className="flex md:hidden justify-center items-end gap-2 sm:gap-4 w-full px-2">
          {[
            testimonials[
              (activeIndex - 1 + testimonials.length) % testimonials.length
            ],
            testimonials[activeIndex],
            testimonials[(activeIndex + 1) % testimonials.length],
          ].map((t, i) => {
            const isCenter = i === 1;
            const originalIndex = testimonials.findIndex((x) => x.id === t.id);
            return (
              <div
                key={`mobile-${t.id}`}
                onClick={() => setActiveIndex(originalIndex)}
                className={`flex flex-col items-center shrink-0 w-[110px] sm:w-[130px] cursor-pointer transition-all duration-300 ${
                  isCenter
                    ? "scale-110 opacity-100 transform -translate-y-2"
                    : "scale-95 opacity-40 mt-4"
                }`}
              >
                <img
                  src={t.imageUrl}
                  alt={t.author}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md object-cover"
                />
                <div className="flex mt-3 gap-0.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={isCenter ? 14 : 12}
                      className={
                        starIndex < t.stars
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>
                <div className="h-10 mt-2 flex items-start justify-center">
                  <p
                    className={`text-xs sm:text-sm font-medium text-slate-600 text-center leading-tight ${isCenter ? "" : "truncate w-full px-2"}`}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Shows all items */}
        <div className="hidden md:flex flex-wrap justify-center gap-15 px-4">
          {testimonials.map((t, idx) => (
            <div
              key={`desktop-${t.id}`}
              onClick={() => setActiveIndex(idx)}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                activeIndex === idx
                  ? "scale-110 opacity-100"
                  : "scale-95 opacity-40 hover:opacity-70"
              }`}
            >
              {/* Avatar */}
              <img
                src={t.imageUrl}
                alt={t.author}
                className="w-20 h-20 rounded-full shadow-md object-cover"
              />

              {/* Stars */}
              <div className="flex mt-3 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < t.stars
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>

              {/* Company */}
              <p className="text-sm mt-2 font-medium text-slate-600 text-center">
                {t.company}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Arrows Bottom */}
        <div className="flex justify-between items-center w-full px-8 md:hidden max-w-md mx-auto">
          <button
            aria-label="Previous testimonial"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#2a498c] text-[#2a498c] bg-white flex items-center justify-center active:scale-95 transition shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#2a498c] text-[#2a498c] bg-white flex items-center justify-center active:scale-95 transition shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
