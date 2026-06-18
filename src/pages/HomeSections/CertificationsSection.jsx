import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Award, BadgeCheck } from "lucide-react";
import { dpiitCert, GooglePage } from "../../assets/assets";

const CERTIFICATIONS = [
  {
    id: "dpiit",
    title: "DPIIT Recognized Startup",
    subtitle: "Department for Promotion of Industry & Internal Trade",
    description:
      "iNexarum is officially recognized as a startup by DPIIT, Government of India — validating our innovation, scalability, and commitment to building impactful technology solutions.",
    image: dpiitCert,
    icon: <ShieldCheck className="w-4 h-4" />,
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    id: "google",
    title: "Google Verified Business",
    subtitle: "Google Business Profile",
    description:
      "iNexarum is verified on Google, ensuring trust and authenticity for clients worldwide.",
    image: GooglePage,
    icon: <BadgeCheck className="w-4 h-4" />,
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
  },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section className="py-12 px-6 bg-[#FCFDFE] border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1F5F9] text-xs font-semibold text-[#1E293B] border border-slate-200 mb-3">
              <Award size={13} className="text-[#2a498c]" />
              Trust & Recognitions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Trusted by Government & Industry
            </h2>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative bg-white border border-slate-200 rounded-lg p-5 cursor-pointer transition-all duration-200 hover:border-slate-300 hover:shadow-xs"
              >
                {/* Header Badge */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border ${cert.badgeColor} text-xs font-semibold mb-4`}>
                  {cert.icon}
                  {cert.title}
                </div>

                {/* Image Preview (Classy layout) */}
                <div className="relative rounded border border-slate-100 overflow-hidden mb-4 bg-slate-50 p-2 flex justify-center items-center h-40">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-xs">
                      View Document
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  {cert.subtitle}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[85vh] overflow-auto border border-slate-200"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                aria-label="Close certificate view"
              >
                <X size={16} className="text-slate-600" />
              </button>

              {/* Header */}
              <div className="p-5 border-b border-slate-100">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border ${selectedCert.badgeColor} text-xs font-semibold mb-2`}>
                  {selectedCert.icon}
                  {selectedCert.title}
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  {selectedCert.subtitle}
                </h3>
              </div>

              {/* Certificate Image */}
              <div className="p-5 bg-slate-50 flex justify-center">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} - Full Certificate`}
                  className="max-w-full h-auto rounded border border-slate-200 shadow-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificationsSection;
