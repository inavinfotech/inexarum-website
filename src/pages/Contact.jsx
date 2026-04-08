import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import SupportForm from "../components/SupportForm";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-24 pb-20 px-6">
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
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hi? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-2"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Reach out to us through any of these channels. We're always open
                to discussing new projects, creative ideas or opportunities to
                be part of your visions.
              </p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <ContactItem
                icon={<Mail className="text-blue-500" />}
                title="Email Us"
                detail="hello@inexarum.in"
                link="mailto:hello@inexarum.in"
              />
              <ContactItem
                icon={<Phone className="text-blue-500" />}
                title="Call Us"
                detail="+91 9286070075"
                link="tel:+919286070075"
              />
              <ContactItem
                icon={<MapPin className="text-blue-500" />}
                title="Our Office"
                detail="Meerut, India"
              />
              <ContactItem
                icon={<Globe className="text-blue-500" />}
                title="Social Media"
                detail="@inexarum"
              />
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block relative pt-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-20 w-40 h-40 bg-cyan-600/5 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <SupportForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, detail, link }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 p-3 bg-white/5 border border-white/10 rounded-lg">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        {title}
      </h4>
      {link ? (
        <a
          href={link}
          className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        >
          {detail}
        </a>
      ) : (
        <p className="text-xl font-semibold text-gray-900">{detail}</p>
      )}
    </div>
  </div>
);

export default Contact;
