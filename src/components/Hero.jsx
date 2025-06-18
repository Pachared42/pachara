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
    <section className="flex min-h-screen flex-wrap items-center px-4 py-8 md:px-12 lg:px-24">
      {/* Text Content */}
      <div className="w-full md:w-1/2" ref={heroRef}>
        <motion.h2
          variants={textVariants(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-6 p-2 text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] xl:text-[8rem] leading-snug md:leading-tight lg:leading-[5rem] xl:leading-[8rem] font-bold"
        >
          {HERO.name}
        </motion.h2>

        <motion.span
          variants={textVariants(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent font-semibold"
        >
          {HERO.greet}
        </motion.span>

        <motion.p
          variants={textVariants(0.6)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-light mb-6 p-2 text-base sm:text-lg md:text-xl max-w-lg"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          variants={textVariants(0.9)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 flex flex-col gap-4 md:flex-row"
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
      <div className="w-full md:w-1/2 lg:p-8 mt-8 md:mt-0">
        <div className="flex justify-center">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            src={pachara}
            alt="pachara"
            className="rounded-3xl max-w-full w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
