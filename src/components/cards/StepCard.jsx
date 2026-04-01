const StepCard = ({ step, isTop }) => {
  return (
    <div className="relative w-full max-w-87.5">
      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold bg-linear-to-r from-[#2a498c] to-[#8c97e7] bg-clip-text text-transparent">
            #{step.id}
          </span>
          <h3 className="font-bold text-gray-800 text-base">
            {step.title}
          </h3>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Connector */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#8c97e7] ${
          isTop ? "h-16 -bottom-16" : "h-16 -top-16"
        }`}
      >
        {/* <div
          className={`absolute left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#8c97e7] ${
            isTop ? "bottom-0" : "top-0"
          }`}
        /> */}
      </div>
    </div>
  );
};

export default StepCard;