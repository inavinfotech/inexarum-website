import React from "react";

const DottedArrow = ({ side = "right", className = "" }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`relative w-48 h-32 ${className}`}
    >
      {/* Curved dotted line */}
      <div
        className={`
          absolute
          w-full h-full
          border-t-2 border-dashed
          ${isLeft ? "rounded-tl-[120px]" : "rounded-tr-[120px]"}
          ${isLeft ? "left-0" : "right-0"}
        `}
        style={{
          borderImage: "linear-gradient(90deg, #2a498c, #8c97e7) 1",
        }}
      />

      {/* Arrow head */}
      <div
        className={`
          absolute
          w-3 h-3
          border-l-2 border-b-2
          border-[#2a498c]
          ${isLeft ? "left-1 top-6 rotate-45" : "right-1 bottom-2 -rotate-135"}
        `}
      />
    </div>
  );
};

export default DottedArrow;
