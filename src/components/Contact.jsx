import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
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

const Contact = () => {
    return (
        <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 bg-transparent" id="contact">
            <div className="max-w-xl mx-auto text-center">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpHeading}
                    className="mb-2 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
                >
                    CONTACT ME
                </motion.h1>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpSubText}
                    className="tracking-wider text-center text-transparent font-light pb-4 sm:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-base sm:text-[1.2rem]"
                >
                    ดูรายละเอียดเพิ่มเติม
                </motion.p>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                    className="text-sm sm:text-base text-gray-400 mb-8 px-2 sm:px-0 leading-relaxed"
                >
                    สนใจร่วมงานหรืออยากพูดคุยเพิ่มเติม
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={2}
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
                >
                    {SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-full text-white hover:text-purple-400 transition-colors shadow-lg hover:scale-105 transform duration-200"
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={3}
                    className="text-xs sm:text-sm text-gray-500"
                >
                    &copy; {new Date().getFullYear()} เขียนด้วย React และความหลงใหล 💜
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
