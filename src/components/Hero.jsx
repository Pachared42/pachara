import { useInView } from "react-intersection-observer";
import { HERO } from "../constants";
import pachara from "/pachara.jpg";
import { motion } from "framer-motion";

const textVariants = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: delay,
    },
  },
});

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 12,
      delay: 0.3,
    },
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
      variants={textVariants(0)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-4 p-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
    >
      {HERO.name}
    </motion.h2>

    <motion.span
      variants={textVariants(0.3)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="block p-2 mb-6 text-lg sm:text-xl md:text-3xl font-semibold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent"
    >
      {HERO.greet}
    </motion.span>

    <motion.p
      variants={textVariants(0.6)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="p-2 mb-8 text-base sm:text-lg md:text-xl max-w-md md:max-w-lg font-light leading-relaxed"
    >
      {HERO.description}
    </motion.p>

    <motion.div
      variants={textVariants(0.9)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="p-2 flex flex-col gap-4 sm:flex-row sm:items-center"
    >
      <button
        onClick={() => window.open("mailto:pachared.amr12@gmail.com")}
        className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-8 md:px-10 border border-white hover:border-transparent transition-colors duration-300"
      >
        ติดต่อฉันมาได้นะ
      </button>
    </motion.div>
  </div>

  {/* Image Content */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
    <motion.img
      variants={imageVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      src={pachara}
      alt="pachara"
      className="rounded-3xl w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-cover"
    />
  </div>
</section>

  );
};

export default Hero;