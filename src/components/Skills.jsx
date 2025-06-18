import { SKILLS } from "../constants";
import { TOOLS } from "../constants";
import { DATABASES } from "../constants";
import { motion } from "framer-motion";

// ฟังก์ชันสำหรับสร้าง animation เด้ง ๆ
const floatingVariants = (index) => {
  const amplitude = 2 + index * 1; // ลดค่าระยะสูงขึ้นลงให้เล็กลง
  const duration = 6 + index * 4;

  return {
    initial: { y: -amplitude },
    animate: {
      y: [-amplitude, amplitude, -amplitude],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
};


// Motion สำหรับหัวข้อและคำอธิบาย
const fadeUpHeading = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUpSubText = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } 
  },
};

const fadeUpItemGroup = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } 
  },
};

// Component แสดงกลุ่ม item พร้อม animation
const AnimatedItemGroup = ({ data, extractItems }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUpItemGroup}  // ใช้ fadeUp animation ที่นี่
    className="flex flex-wrap items-center justify-center gap-1 pt-2"
  >
    {data.map((item, index) => (
      <motion.div
        key={index}
        variants={floatingVariants(index)}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        className="rounded-3xl border-4 border-none pl-2 pr-2 flex flex-col items-center"
      >
        {extractItems(item).map((content, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            aria-label={`Item: ${content}`}
          >
            {content}
          </div>
        ))}
      </motion.div>
    ))}
  </motion.div>
);

// ส่วนหลัก
const Skills = () => {
  return (
    <section className="flex max-w-4xl flex-col pt-20" id="skills">

      {/* SKILLS Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h1 variants={fadeUpHeading} className="mb-1 text-center text-4xl lg:text-6xl font-bold">
          SKILL
        </motion.h1>
        <motion.p
          variants={fadeUpSubText}
          className="tracking-[0.5em] text-center text-transparent font-light pb-5 
          bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]"
        >
          ดูรายละเอียดเพิ่มเติม
        </motion.p>
        <AnimatedItemGroup
          data={SKILLS}
          extractItems={(item) => [
            item.skill1,
            item.skill2,
            item.skill3,
            item.skill4,
            item.skill5,
            item.skill6,
          ]}
        />
      </motion.div>

      {/* TOOLS Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h1
          variants={fadeUpHeading}
          className="pt-20 mb-1 text-center text-4xl lg:text-6xl font-bold"
        >
          TOOL
        </motion.h1>
        <motion.p
          variants={fadeUpSubText}
          className="tracking-[0.5em] text-center text-transparent font-light pb-5 
          bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]"
        >
          ดูรายละเอียดเพิ่มเติม
        </motion.p>
        <AnimatedItemGroup
          data={TOOLS}
          extractItems={(item) => [item.tool1, item.tool2, item.tool3, item.tool4, item.tool5, item.tool6]}
        />
      </motion.div>

      {/* DATABASE Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h1
          variants={fadeUpHeading}
          className="pt-20 mb-1 text-center text-4xl lg:text-6xl font-bold"
        >
          DATABASE
        </motion.h1>
        <motion.p
          variants={fadeUpSubText}
          className="tracking-[0.5em] text-center text-transparent font-light pb-5 
          bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]"
        >
          ดูรายละเอียดเพิ่มเติม
        </motion.p>
        <AnimatedItemGroup
          data={DATABASES}
          extractItems={(item) => [item.database1]}
        />
      </motion.div>

    </section>
  );
};

export default Skills;
