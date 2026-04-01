import Hero from "./HomeSections/Hero";
import ServiceCarousel from "./HomeSections/ServiceCarousel";
import LeadingCom from "./HomeSections/LeadingCom";
import ClientsSection from "./HomeSections/ClientsSection";
import TestimonialSection from "./HomeSections/TestimonialSection";
import CaseStudySection from "./HomeSections/CaseStudySection";
import LandingSection from "./HomeSections/LandingSection";
import ApproachSection from "./HomeSections/ApproachSection";
import TechStackSection from "./HomeSections/TechStackSection";
import WorkflowTimeline from "./HomeSections/WorkflowTimeline";
import BlogsSection from "./HomeSections/BlogsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ClientsSection />
      <LeadingCom />
      <ServiceCarousel />
      <ApproachSection />
      <LandingSection />
      <TechStackSection />
      <WorkflowTimeline />
      <CaseStudySection />
      <TestimonialSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
