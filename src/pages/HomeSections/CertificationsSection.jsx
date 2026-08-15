import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import {
  dpiitCert,
  ceeCert,
  dentakrisCert,
  dewanTyresCert1,
  dewanTyresCert2,
  econsCert,
} from "../../assets/assets";

const CERTIFICATIONS = [
  {
    id: "dpiit",
    title: "DPIIT Recognized Startup",
    subtitle: "Govt. of India Startup India Program",
    description:
      "iNexarum is officially recognized as a startup by DPIIT, Government of India — validating our innovation, scalability, and technical leadership.",
    image: dpiitCert,
    icon: <ShieldCheck className="w-4 h-4" />,
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    id: "cee",
    title: "Education Excellence Award",
    subtitle: "Confederation of Education Excellence (CEE)",
    description:
      "Honored by CEE for delivering innovative EdTech solutions, workforce learning systems, and enterprise educational technology platforms.",
    image: ceeCert,
    icon: <Award className="w-4 h-4" />,
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    id: "dentakris",
    title: "Healthcare Solutions",
    subtitle: "Dentakris Certificate of Excellence",
    description:
      "Recognized for custom healthcare software engineering, HIPAA-compliant patient management tools, and digital system integration.",
    image: dentakrisCert,
    icon: <CheckCircle2 className="w-4 h-4" />,
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
  },
  {
    id: "dewan-tyres-1",
    title: "Industrial Transformation",
    subtitle: "Dewan Tyres Corporate Certificate",
    description:
      "Awarded for designing and engineering high-impact digital platforms, brand identity, and e-commerce readiness for Dewan Tyres Pvt. Ltd.",
    image: dewanTyresCert1,
    icon: <Award className="w-4 h-4" />,
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
  },
  {
    id: "dewan-tyres-2",
    title: "Digital Platform Excellence",
    subtitle: "Dewan Tyres Engineering Milestone",
    description:
      "Recognized for delivering resilient web platform architecture, customer engagement portals, and digital workflow automation.",
    image: dewanTyresCert2,
    icon: <CheckCircle2 className="w-4 h-4" />,
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
  },
  {
    id: "econs-solution",
    title: "Engineering Consultancy",
    subtitle: "Econs Solution Certificate",
    description:
      "Official certificate from Econs Solution for enterprise cloud architecture, IT infrastructure, and custom software delivery.",
    image: econsCert,
    icon: <ShieldCheck className="w-4 h-4" />,
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Trusted by Government & Industry
            </h2>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative bg-white border border-slate-200 rounded-lg p-5 cursor-pointer transition-all duration-200 hover:border-slate-300 hover:shadow-xs"
              >
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
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-2">
                  {cert.subtitle}
                </p>
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
              className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-modal overflow-auto border border-slate-200"
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
                <h3 className="text-lg font-bold text-slate-800">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  {selectedCert.subtitle}
                </p>
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
