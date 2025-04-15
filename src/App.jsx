import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StarsCanvas from './components/main/StarsBackground';

const App = () => {
  return (
    <div className="relative bg-fixed bg-cover bg-center bg-img">
      {/* ใส่ฉากหลัง Star */}
      <StarsCanvas />

      {/* เนื้อหาเว็บ */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default App;

