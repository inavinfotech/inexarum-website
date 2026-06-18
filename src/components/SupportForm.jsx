import { useState } from "react";
import { Send, User, Mail, Phone, FileText, MessageSquare } from "lucide-react";
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
    "w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#2a498c] focus:ring-1 focus:ring-[#2a498c] transition-colors";
  const labelClasses =
    "flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5";

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-xs">
        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Send us a message
        </h3>
        <p className="text-slate-500 text-xs md:text-sm mb-6">
          We'll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className={labelClasses}>
              <User size={14} className="text-slate-400" /> Name
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
          <div>
            <label className={labelClasses}>
              <Mail size={14} className="text-slate-400" /> Email
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

          <div>
            <label className={labelClasses}>
              <Phone size={14} className="text-slate-400" /> Phone
            </label>
            <input
              type="tel"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              placeholder="+1 (234) 567-890"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>
              <FileText size={14} className="text-slate-400" /> Subject
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

          <div className="md:col-span-2 flex flex-col">
            <label className={labelClasses}>
              <MessageSquare size={14} className="text-slate-400" /> Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              className={`${inputClasses} h-28 resize-none`}
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-1.5 px-6 py-2.5 font-semibold text-white bg-[#2a498c] hover:bg-[#1e3362] rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={15} />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status === "success" && (
            <div className="md:col-span-2 mt-4 p-3 bg-emerald-50 border border-emerald-100 rounded text-xs text-emerald-800">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="md:col-span-2 mt-4 p-3 bg-red-50 border border-red-100 rounded text-xs text-red-800">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
