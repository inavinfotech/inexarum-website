const LogoCard = ({ tech }) => {
  return (
    <div className="flex items-center justify-center h-20 w-32 bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-lg shadow-xs hover:shadow-sm transition-all duration-300 hover:-translate-y-1">
      <img
        src={tech.logo}
        alt={tech.name}
        loading="lazy"
        className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default LogoCard;