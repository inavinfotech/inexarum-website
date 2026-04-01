import React from "react";
import { motion } from "framer-motion";
import SupportForm from "./SupportForm";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  return (
    <section id="hire" className="py-10 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Start Your Project"
          subtitle="Ready to transform your ideas into reality?"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <SupportForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
