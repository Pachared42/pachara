import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

// Animation fadeUp แบบมี delay ตาม custom index
const fadeUpCustom = {
    hidden: (i) => ({ opacity: 0, y: 30 }),
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
};

// Animation รายการ experience ทีละอันแบบมี delay ตามลำดับ index + offset
const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 + i * 0.1, // offset 0.6 เพื่อให้ต่อจากหัวข้อกับข้อความ
            type: "spring",
            stiffness: 70,
        },
    }),
};

const Experience = () => {
    return (
        <section className="sm:px-6 pt-20 sm:py-20" id="experience">
            <div className="max-w-3xl sm:max-w-4xl mx-auto">
                {/* หัวข้อ EXPERIENCES */}
                <motion.h1
                    custom={0}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
                >
                    EXPERIENCES
                </motion.h1>

                {/* ข้อความ ดูรายละเอียดเพิ่มเติม */}
                <motion.p
                    custom={1}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tracking-wider text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
                >
                    ดูรายละเอียดเพิ่มเติม
                </motion.p>

                {/* รายการประสบการณ์ */}
                <div className="relative">
                    <div className="flex flex-col gap-10 px-0 sm:gap-14 sm:px-0 sm:pl-10">
                        {EXPERIENCES.map((exp, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                                className="relative"
                            >
                                <div className="flex flex-col gap-1 sm:p-5 rounded-md">
                                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] tracking-tight">
                                        {exp.title}
                                    </h3>

                                    <p className="text-sm text-gray-300">
                                        <span className="font-medium">{exp.company}</span>
                                    </p>
                                    <p className="text-sm text-gray-400 italic">{exp.duration}</p>

                                    <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
