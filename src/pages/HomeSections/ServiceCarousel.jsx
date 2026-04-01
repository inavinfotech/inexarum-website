import React, { useState, useEffect, useCallback, useRef } from "react";
import ServiceCard from "../../components/cards/ServiceCard";
import { SERVICES } from "../../constants/services";

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const timerRef = useRef(null);

  // 👉 Swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* ======================
     SLIDE CONTROLS
  ====================== */
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  /* ======================
     AUTOPLAY
  ====================== */
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }

    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, nextSlide]);

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    clearInterval(timerRef.current);
  };

  /* ======================
     MANUAL NAV
  ====================== */
  const handleManualNavigation = (index) => {
    setActiveIndex(index);
    stopAutoPlay();
  };

  /* ======================
     SWIPE HANDLER
  ====================== */
  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) < 50) return; // swipe threshold

    if (diff > 0) {
      nextSlide(); // swipe left
    } else {
      prevSlide(); // swipe right
    }

    stopAutoPlay();
  };

  return (
    <div
      id="services"
      aria-labelledby="services-heading"
      className="min-h-[60vh] md:min-h-dvh bg-[#F8FAFC] flex flex-col items-center py-10 px-4"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-5">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4"
          >
            Services We Offer
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full py-2 md:py-12 flex flex-col items-center">
          {/* Cards */}
          <div
            className="relative w-full h-100 flex items-center justify-center perspective-distant touch-pan-y"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
            onTouchEnd={handleSwipe}
          >
            {SERVICES.map((service, index) => {
              let offset = index - activeIndex;

              if (offset < -Math.floor(SERVICES.length / 2))
                offset += SERVICES.length;
              if (offset > Math.floor(SERVICES.length / 2))
                offset -= SERVICES.length;

              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  offset={offset}
                  isActive={index === activeIndex}
                  onClick={() => handleManualNavigation(index)}
                />
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-8 md:mt-16 w-full max-w-xl flex items-center relative px-2">
            {/* Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-3">
              {SERVICES.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to service slide ${index + 1}`}
                  onClick={() => handleManualNavigation(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#2a498c]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Progress */}
            <div className="  hidden md:flex items-center gap-4 text-slate-400 text-sm ml-140">
              <span
                className={activeIndex === 0 ? "text-[#2a498c] font-bold" : ""}
              >
                01
              </span>

              <div className="w-28 h-0.5 bg-slate-200 relative rounded-full">
                <div
                  className="absolute left-0 top-0 h-full bg-[#2a498c] transition-all duration-500"
                  style={{
                    width: `${((activeIndex + 1) / SERVICES.length) * 100}%`,
                  }}
                />
              </div>

              <span
                className={
                  activeIndex === SERVICES.length - 1
                    ? "text-[#2a498c] font-bold"
                    : ""
                }
              >
                {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
