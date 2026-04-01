import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { submitSupportQuery } from "../database/queries";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await submitSupportQuery(formData);
      if (result === "error") {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again later.");
      } else {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          contact_number: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to connect to the server.");
    }
  };

  const inputClasses =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300";
  const labelClasses =
    "flex items-center gap-2 text-sm font-medium text-gray-600 mb-2 ml-1";

  return (
    <div className="relative w-full max-w-2xl lg:max-w-6xl mx-auto group">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-xl">
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
          Send us a message
        </h3>
        <p className="text-gray-600 mb-8">
          We'll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="lg:col-span-1 lg:row-start-1">
            <label className={labelClasses}>
              <User size={16} /> Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={inputClasses}
            />
          </div>
          <div className="lg:col-span-1 lg:row-start-1">
            <label className={labelClasses}>
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={inputClasses}
            />
          </div>

          <div className="lg:col-span-1 lg:col-start-1 lg:row-start-2">
            <label className={labelClasses}>
              <Phone size={16} /> Phone
            </label>
            <input
              type="tel"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              placeholder="+1 234 567 890"
              required
              className={inputClasses}
            />
          </div>
          <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2">
            <label className={labelClasses}>
              <FileText size={16} /> Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              required
              className={inputClasses}
            />
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1 flex flex-col">
            <label className={labelClasses}>
              <MessageSquare size={16} /> Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              className={`${inputClasses} flex-1 resize-none`}
            ></textarea>
          </div>

          <div className="lg:col-span-4 pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="group w-full relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 overflow-hidden"
            >
              <span className="relative flex items-center gap-2">
                {status === "loading" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                  >
                    <Send size={18} />
                  </motion.div>
                ) : (
                  <Send size={18} />
                )}
                {status === "loading" ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>

          <div className="lg:col-span-4">
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700"
                >
                  <CheckCircle size={20} />
                  <p>Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700"
                >
                  <AlertCircle size={20} />
                  <p>{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
