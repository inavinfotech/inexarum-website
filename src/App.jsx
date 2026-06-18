import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppWidget from "./components/WhatsAppWidget";

const Home = lazy(() => import("./pages/Home"));
const AllCaseStudies = lazy(() => import("./pages/AllCaseStudies"));
const AllBlogs = lazy(() => import("./pages/AllBlogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const PreloaderHandler = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      const timer = setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);
  return null;
};

// Smooth transition wrapper for pages
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full flex flex-col min-h-full"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll handling via Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-dvh w-full overflow-x-hidden flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Suspense fallback={null}>
          <PreloaderHandler />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/case-studies" element={<PageWrapper><AllCaseStudies /></PageWrapper>} />
              <Route path="/blogs" element={<PageWrapper><AllBlogs /></PageWrapper>} />
              <Route path="/blogs/:id" element={<PageWrapper><BlogDetail /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
