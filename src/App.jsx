import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./style/StarsBackground";
import LoadingOverlay from "./style/LoadingOverlay";

const App = () => {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.0,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (loading) lenis.stop();
    else lenis.start();
  }, [loading]);

  const handleReset = () => {
    setLoading(true);
    setTimeout(() => window.location.reload(), 250);
  };

  return (
    <div className="relative bg-fixed bg-cover bg-center bg-img">
      <LoadingOverlay open={loading} />

      <StarsCanvas />

      <div className="relative z-10 flex flex-col items-center p-6 container mx-auto">
        <Navbar onReset={handleReset} />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;