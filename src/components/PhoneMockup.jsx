import React from "react";

const PhoneMockup = ({ imageUrl, className = "" }) => {
  return (
    <div
      className={`relative w-35 h-70 sm:w-45 sm:h-90
      bg-black rounded-[30px] border-[6px] border-black shadow-2xl
      overflow-hidden ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-15 h-4.5 bg-black rounded-b-xl z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
      </div>

      <img
        src={imageUrl}
        alt="App UI"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PhoneMockup;
