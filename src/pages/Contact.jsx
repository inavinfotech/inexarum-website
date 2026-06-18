import React, { useEffect } from "react";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import SupportForm from "../components/SupportForm";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-dvh bg-[#FCFDFE] text-slate-900 pt-24 pb-16 px-6">
      <SEOHead
        title="Contact Us"
        description="Get in touch with iNexarum for your next web development, AI, or software project. We're here to help you scale your digital presence."
        keywords="contact iNexarum, hire web developers, AI consultation, software development contact"
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inexarum.in/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://inexarum.in/contact" }
          ]
        }}
      />
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hi? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold text-slate-800">Contact Information</h2>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm">
                Reach out to us through any of these channels. We're always open
                to discussing new projects, creative ideas or opportunities to
                be part of your visions.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <ContactItem
                icon={<Mail className="text-slate-500" size={16} />}
                title="Email Us"
                detail="hello@inexarum.in"
                link="mailto:hello@inexarum.in"
              />
              <ContactItem
                icon={<Phone className="text-slate-500" size={16} />}
                title="Call Us"
                detail="+91 92860 70075"
                link="tel:+919286070075"
              />
              <ContactItem
                icon={<MapPin className="text-slate-500" size={16} />}
                title="Our Office"
                detail="Meerut, Uttar Pradesh, India"
              />
              <ContactItem
                icon={<Globe className="text-slate-500" size={16} />}
                title="Social Media"
                detail="@inexarum"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-8">
            <SupportForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, detail, link }) => (
  <div className="flex items-center gap-3 bg-white p-3 border border-slate-100 rounded-lg shadow-xs hover:border-slate-200 transition-colors">
    <div className="flex items-center justify-center p-2 rounded bg-slate-50 border border-slate-100 shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">
        {title}
      </h4>
      {link ? (
        <a
          href={link}
          className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#2a498c] transition-colors truncate block"
        >
          {detail}
        </a>
      ) : (
        <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">{detail}</p>
      )}
    </div>
  </div>
);

export default Contact;
