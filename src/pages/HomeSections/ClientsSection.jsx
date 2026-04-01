import { CLIENT_LOGOS } from "../../constants/clientsLogos";

const ClientsSection = () => {
  return (
    <section className="max-w-full mx-auto py-10 w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-14 px-4 sm:px-8 md:px-30">
        <div className="space-y-3 md:space-y-4 text-left">
          <div className="w-12 md:w-16 h-1.5 bg-linear-to-r from-[#2a498c] to-[#8c97e7] rounded-full" />
          <h2 className="text-2xl sm:text-4xl md:text-4xl text-gray-800">
            Meet the People <br />
            <span className="font-bold">We are Working With</span>
          </h2>
        </div>
      </div>

      {/* Auto-Scrolling Logos Ticker */}
      <div className="relative bg-[#F7F7FA] py-10 lg:py-4 w-[98vw] max-w-none md:w-full ml-[calc(-50vw+50%)] md:ml-0 overflow-hidden group">
        {/* Transparent Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F7F7FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F7F7FA] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex w-max shrink-0 animate-[infinite-scroll_25s_linear_infinite]">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map(
            (logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="shrink-0 w-40 sm:w-56 lg:w-64 lg:h-24 flex items-center justify-center px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  title={logo.name}
                  className="
                    h-14 lg:h-16 w-auto object-contain
                    opacity-75 hover:opacity-100
                    transition-all duration-300
                    hover:scale-105
                  "
                />
              </div>
            ),
          )}
        </div>
      </div>

      {/* Inline styles for the keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
      `,
        }}
      />
    </section>
  );
};

export default ClientsSection;
