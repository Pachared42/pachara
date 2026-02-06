import { SKILLS } from "../constants";
import { TOOLS } from "../constants";
import { DATABASES } from "../constants";
import { CLOUDS } from "../constants";
import { motion } from "framer-motion";

const floatingVariants = (index) => {
  const amplitude = 2 + index * 1;
  const duration = 6 + index * 4;

  return {
    initial: { y: -amplitude },
    animate: {
      y: [-amplitude, amplitude, -amplitude],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: 3,
        repeatType: "reverse",
      },
    },
  };
};

const fadeUpCustom = {
  hidden: (i) => ({ opacity: 0, y: 30 }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const AnimatedItemGroup = ({ data, extractItems }) => (
  <div className="flex flex-wrap items-center justify-center gap-8 pt-2">
    {data.map((item, index) => (
      <motion.div
        key={index}
        variants={floatingVariants(index)}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        className="rounded-3xl pl-3 pr-3 flex flex-col items-center"
      >
        {extractItems(item).map((content, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            aria-label={`Item icon`}
          >
            {content}
          </div>
        ))}
      </motion.div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section className="relative mx-auto w-full max-w-4xl flex flex-col pt-20 overflow-visible" id="skills">
      {/* SKILL */}
      <motion.h1
        custom={0}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        SKILL
      </motion.h1>
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
      <motion.div
        custom={2}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={SKILLS}
          extractItems={(item) => [
            item.skill
          ]}
        />
      </motion.div>

      {/* TOOL */}
      <motion.h1
        custom={3}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        TOOL
      </motion.h1>
      <motion.p
        custom={4}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={5}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={TOOLS}
          extractItems={(item) => [
            item.tool
          ]}
        />
      </motion.div>

      {/* DATABASE */}
      <motion.h1
        custom={6}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        DATABASE
      </motion.h1>
      <motion.p
        custom={7}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={8}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={DATABASES}
          extractItems={(item) => [
            item.database
          ]}
        />
      </motion.div>

      {/* CLOUD */}
      <motion.h1
        custom={6}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        CLOUD
      </motion.h1>
      <motion.p
        custom={7}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={8}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={CLOUDS}
          extractItems={(item) => [
            item.cloud
          ]}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
