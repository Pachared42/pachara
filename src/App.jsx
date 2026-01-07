import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StarsCanvas from './style/StarsBackground';
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative bg-fixed bg-cover bg-center bg-img">
      {/* ใส่ฉากหลัง Star */}
      <StarsCanvas />

      {/* เนื้อหาเว็บ */}
      <div className="relative z-10 flex flex-col items-center p-8 container mx-auto">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        {/* <Experience /> */}
        {/* ปิดการใช้งาน Experience ชั่วคราว */}
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

