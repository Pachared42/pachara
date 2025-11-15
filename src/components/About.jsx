import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const fadeUpCustom = {
  hidden: (i) => ({ opacity: 0, y: 30 }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const About = () => {
  return (
    <section className="flex max-w-4xl flex-col pt-20" id="about">
      {/* ABOUT ME */}
      <motion.h2
        custom={0}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        ABOUT ME
      </motion.h2>

      {/* ดูรายละเอียดเพิ่มเติม */}
      <motion.p
        custom={1}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>

      {/* เนื้อหา ABOUT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ABOUT.map((text, index) => (
          <motion.p
            key={index}
            custom={index + 2} // เริ่ม delay ต่อจาก h2 และ p ด้านบน
            variants={fadeUpCustom}
            className="mb-4 text-xs sm:text-sm md:text-base font-light"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
