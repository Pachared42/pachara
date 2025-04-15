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
    <section className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2" ref={heroRef}>
        <motion.h2
          variants={textVariants(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-8 p-2 text-5xl font-bold md:text-5xl lg:text-[8rem] lg:leading-[8rem]"
        >
          {HERO.name}
        </motion.h2>

        <motion.span
          variants={textVariants(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 text-3xl lg:text-5xl bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent font-semibold"
        >
          {HERO.greet}
        </motion.span>

        <motion.p
          variants={textVariants(0.6)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-light mb-6 p-2 text-balance text-lx"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          variants={textVariants(0.9)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-md p-2 flex flex-col gap-4 md:flex-row"
        >
          <button
            onClick={() => window.open("mailto:pachared.amr12@gmail.com")}
            className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            ติดต่อฉันมาได้นะ
          </button>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            src={pachara}
            width={500}
            height={500}
            alt="pachara"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;