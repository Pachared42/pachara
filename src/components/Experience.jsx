import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            type: "spring",
            stiffness: 70,
        },
    }),
};

const fadeUpHeading = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeUpSubText = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
};

const Experience = () => {
    return (
        <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20" id="experience">
            <div className="max-w-3xl sm:max-w-4xl mx-auto">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpHeading}
                    className="mb-2 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
                >
                    EXPERIENCES
                </motion.h1>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpSubText}
                    className="tracking-wider text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-base sm:text-[1.2rem]"
                >
                    ดูรายละเอียดเพิ่มเติม
                </motion.p>

                <div className="relative">
                    <div className="flex flex-col gap-10 px-4 sm:gap-14 sm:px-0 sm:pl-10">
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
                                <div className="flex flex-col gap-1 p-4 sm:p-5 rounded-md">
                                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 tracking-tight">
                                        {exp.title}
                                    </h3>

                                    <p className="text-sm text-gray-300">
                                        <span className="font-medium">{exp.company}</span>
                                    </p>
                                    <p className="text-sm text-gray-400 italic">
                                        {exp.duration}
                                    </p>

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
