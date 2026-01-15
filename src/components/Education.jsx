import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

// fadeUp แบบ custom delay ตาม index
const fadeUpCustom = {
    hidden: (i) => ({ opacity: 0, y: 30 }),
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
};

// รายการ education ขึ้นแบบมี delay เริ่มหลังหัวข้อกับข้อความ
const fadeVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 + i * 0.1, // offset 0.6 วินาที หลังหัวข้อและข้อความ
            type: "spring",
            stiffness: 70,
        },
    }),
};

const Education = () => {
    return (
        <section className="pt-20" id="education">
            <div className="max-w-3xl sm:max-w-4xl mx-auto">
                {/* หัวข้อ */}
                <motion.h1
                    custom={0}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
                >
                    EDUCATION
                </motion.h1>

                {/* ข้อความ */}
                <motion.p
                    custom={1}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
                    >
                    ดูรายละเอียดเพิ่มเติม
                </motion.p>

                {/* รายการ education */}
                <div className="relative">
                    <div className="flex flex-col gap-10 px-0 sm:gap-14 sm:px-0">
                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeVariant}
                                className="relative"
                            >
                                <div className="flex flex-col gap-1 rounded-md">
                                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] tracking-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        <span className="font-medium">{edu.institution}</span>
                                    </p>
                                    <p className="text-sm text-gray-400 italic">{edu.duration}</p>
                                    <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                        {edu.description}
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

export default Education;
