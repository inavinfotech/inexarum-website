import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center w-full mb-8 pt-4 pb-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
