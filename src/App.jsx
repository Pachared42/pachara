import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from './style/StarsBackground';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => 1 -Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
    };
  } , []);

  return (
    <div className="relative bg-fixed bg-cover bg-center bg-img">
      {/* ใส่ฉากหลัง Star */}
      <StarsCanvas />

      {/* เนื้อหาเว็บ */}
      <div className="relative z-10 flex flex-col items-center p-6 container mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        {/* <Experience /> */}
        {/* ปิดการใช้งาน Experience ชั่วคราว */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;