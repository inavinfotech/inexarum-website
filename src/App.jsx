import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";

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

function App() {
  useEffect(() => {
    // Scroll handling
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-dvh w-full overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={null}>
          <PreloaderHandler />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<AllCaseStudies />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
