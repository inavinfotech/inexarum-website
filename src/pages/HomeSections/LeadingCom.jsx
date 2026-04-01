import React from "react";
import { TeamImage } from "../../assets/assets";

const LeadingCom = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-10 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div
            aria-hidden="true"
            className="w-16 h-1.5 bg-linear-to-r from-[#2a498c] to-[#8c97e7] rounded-full"
          ></div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-gray-800 leading-tight">
            Leading companies trust us <br />
            <span className="font-bold">to develop software</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
            We help businesses turn ideas into scalable, production-ready
            software. Our team integrates seamlessly with your vision to deliver
            secure, high-performance digital products that grow with your
            business.
          </p>

          <a
            href="#approach"
            aria-label="Learn more about our software development services"
            className="inline-flex items-center gap-2 text-[#2a498c] font-semibold group"
          >
            See more Information
            <span className="group-hover:translate-x-1 transition-transform">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Image Content */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-[#2a498c] rounded-4xl opacity-0 group-hover:opacity-10 transition-opacity z-10"></div>

          <img
            src={TeamImage}
            alt="Team working"
            className="w-full h-auto rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Play Button */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Play company introduction video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#2a498c] rounded-full flex items-center justify-center text-white pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingCom;
