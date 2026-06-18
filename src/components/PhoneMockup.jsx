import React from "react";

const PhoneMockup = ({ imageUrl, className = "" }) => {
  return (
    <div
      className={`relative w-35 h-70 sm:w-45 sm:h-90 flex flex-col bg-white
      rounded-[30px] border-[6px] border-black shadow-2xl
      overflow-hidden ${className}`}
    >
      {/* Notch (Z-20 to overlay status bar center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-20 flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
      </div>

      {/* Simulated Classy Status Bar to push image below notch */}
      <div className="h-5 w-full bg-white flex items-center justify-between px-3 text-[7px] font-bold text-slate-700 select-none shrink-0 relative z-10 pt-0.5">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span>5G</span>
          <div className="w-3.5 h-2 border border-slate-400 rounded-[3px] p-[1px] flex items-center">
            <div className="w-full h-full bg-slate-600 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Image container pushed below status bar */}
      <div className="flex-1 w-full overflow-hidden bg-slate-50">
        <img
          src={imageUrl}
          alt="App UI"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
