import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="flex max-w-4xl flex-col pt-20" id="about">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeUp}
          className="mb-1 text-center text-4xl lg:text-6xl font-bold"
        >
          ABOUT ME
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]"
        >
          ดูรายละเอียดเพิ่มเติม
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ABOUT.map((About, index) => (
          <motion.p
            key={index}
            variants={fadeUp}
            className="mb-4 text-lg lg:text-xl text-center font-light"
          >
            {About}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
