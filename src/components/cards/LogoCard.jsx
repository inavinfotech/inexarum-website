const LogoCard = ({ tech }) => {
  return (
    <div className="flex items-center justify-center h-24 w-36 transition-transform duration-300 hover:scale-110">
      <img
        src={tech.logo}
        alt={tech.name}
        loading="lazy"
        className="max-h-16 object-contain transition-transform duration-300"
      />
    </div>
  );
};

export default LogoCard;