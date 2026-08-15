import SEOHead from "../components/SEOHead";
import Hero from "./HomeSections/Hero";
import StatsSection from "./HomeSections/StatsSection";
import ServiceCarousel from "./HomeSections/ServiceCarousel";
import ProductsSection from "./HomeSections/ProductsSection";
import TestimonialSection from "./HomeSections/TestimonialSection";
import CaseStudySection from "./HomeSections/CaseStudySection";
import LandingSection from "./HomeSections/LandingSection";
import ApproachSection from "./HomeSections/ApproachSection";
import TechStackSection from "./HomeSections/TechStackSection";
import WorkflowTimeline from "./HomeSections/WorkflowTimeline";
import BlogsSection from "./HomeSections/BlogsSection";
import CertificationsSection from "./HomeSections/CertificationsSection";
import ContactSection from "../components/ContactSection";
import CTABanner from "../components/CTABanner";

const Home = () => {
  return (
    <div className="w-full">
      <SEOHead
        title="Home"
        description="iNexarum is a DPIIT recognized digital agency in India offering custom web development, mobile app development, AI-driven automation, and scalable software solutions."
        keywords="web development, AI solutions, digital agency, iNexarum, software development India, DPIIT recognized startup"
        path="/"
      />
      <Hero />

      <CTABanner
        title="Ready to build something great?"
        subtitle="Our team is ready to bring your vision to life with cutting-edge technology."
        buttonText="Start Your Project"
        to="/contact"
        theme="gradient"
      />

      <ServiceCarousel />
      <ProductsSection />
      <ApproachSection />

      <StatsSection />

      <LandingSection />
      <TechStackSection />
      <WorkflowTimeline />

      <CTABanner
        title="Want results like these?"
        subtitle="See how we've transformed businesses with scalable, AI-powered solutions."
        buttonText="View Case Studies"
        to="/case-studies"
        theme="dark"
      />

      <CaseStudySection />
      <CertificationsSection />
      <TestimonialSection />
      <BlogsSection />

      <CTABanner
        title="Let's discuss your project"
        subtitle="Get a free consultation and project estimate within 24 hours."
        buttonText="Get Free Consultation"
        to="/contact"
        theme="light"
      />

      <ContactSection />
    </div>
  );
};

export default Home;
