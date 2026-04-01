import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center w-full mb-16 py-8">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black bg-linear-to-r from-[#2a498c] to-[#8c97e7] bg-clip-text text-transparent tracking-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
      <div className="h-1.5 w-24 bg-linear-to-r from-[#2a498c] to-[#8c97e7] mt-8 rounded-full opacity-80"></div>
    </div>
  );
};

export default PageHeader;
