import SupportForm from "./SupportForm";

const ContactSection = () => {
  return (
    <section id="hire" className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Start Your Project
          </h2>
        </div>

        <div className="mt-6">
          <SupportForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
