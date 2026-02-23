import { useInView } from "react-intersection-observer";
import { HERO } from "../constants";
import pachara from "/pachara.jpg";
import { motion } from "framer-motion";

// สร้าง fadeUpCustom เหมือน sections อื่น
const fadeUpCustom = {
  hidden: (i) => ({ opacity: 0, y: 30 }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

// ภาพใช้ custom เช่นกัน แต่แยก scale ด้วย
const imageCustom = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 4 * 0.1 },
  },
};

const Hero = () => {
  const { ref: heroRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="flex flex-wrap min-h-screen items-center px-4 py-10 md:px-16 lg:px-24">
      {/* Text Content */}
      <div className="w-full md:w-1/2" ref={heroRef}>
        <motion.h2
          custom={0}
          variants={fadeUpCustom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4 p-1 text-6xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight"
        >
          {HERO.name}
        </motion.h2>

        <motion.span
          custom={1}
          variants={fadeUpCustom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="block p-2 mb-6 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold bg-gradient-to-r from-[#ef233c] to-[#f9bec7] bg-clip-text text-transparent"
        >
          {HERO.greet3}
        </motion.span>

        <motion.p
          custom={2}
          variants={fadeUpCustom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 mb-8 text-xs sm:text-sm md:text-base max-w-md md:max-w-lg font-light leading-relaxed"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpCustom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <button
            onClick={() => window.open("/Resume-Pachara.pdf", "_blank")}
            className="z-[1] hover:bg-white rounded-xl text-white font-semibold hover:text-black py-3 px-8 md:px-10 border border-white hover:border-transparent transition-colors duration-300"
          >
            ดาวน์โหลด Resume
          </button>
        </motion.div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <motion.img
          variants={imageCustom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          src={pachara}
          alt="pachara"
          className="rounded-3xl w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
