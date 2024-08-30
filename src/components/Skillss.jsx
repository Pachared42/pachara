import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const iconVariants = (index) => {
  const amplitude = 10 + index * 5; // ความสูงของการเคลื่อนที่ที่ไม่เท่ากัน
  const duration = 2 + index * 0.5; // ความยาวของการเคลื่อนที่

  return {
    initial: { y: -amplitude },
    animate: {
      y: [
        -amplitude, // จุดเริ่มต้น
        amplitude, // จุดสูงสุด
        -amplitude, // กลับไปที่จุดเริ่มต้น
      ],
      transition: {
        duration: duration,
        ease: "easeInOut", // การเคลื่อนที่ลื่นไหล
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
};

const Skillss = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-5xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={iconVariants(index)}
            initial="initial"
            animate="animate"
            key={index}
            className="rounded-3xl border-4 border-none p-4 flex flex-col items-center"
          >
            {[
              skill.icon1,
              skill.icon2,
              skill.icon3,
              skill.icon4,
              skill.icon5,
            ].map((icon, i) => (
              <div key={i} className="flex items-center justify-center">
                {icon}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skillss;
