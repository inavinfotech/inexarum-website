import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { PRODUCTS } from "../../data/productsData";

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
            <Sparkles size={13} className="text-[#2a498c]" />
            Product Ecosystem
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Purpose-Built Digital Products & Platforms
          </h2>
          <p className="mt-3 text-xs md:text-sm text-slate-500 leading-relaxed">
            Discover our suite of proprietary platforms and enterprise solutions, designed to accelerate digital transformation, financial management, and smart automation.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon/Logo, Name & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      {product.logo ? (
                        <div className="w-11 h-11 rounded-lg border border-slate-200 bg-white p-1.5 flex items-center justify-center shadow-xs shrink-0">
                          <img
                            src={product.logo}
                            alt={`${product.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 ${product.iconBg}`}
                        >
                          <IconComponent size={22} />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#2a498c] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs font-medium text-slate-500">
                          {product.tagline}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border shrink-0 ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Enterprise Ready
                  </span>
                  {product.link.startsWith("http") ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2a498c] hover:text-[#1e3362] group-hover:translate-x-0.5 transition-all"
                    >
                      Visit Product
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      to={product.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2a498c] hover:text-[#1e3362] group-hover:translate-x-0.5 transition-all"
                    >
                      Request Demo / Info
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
