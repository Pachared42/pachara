import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";

// fadeUp แบบ custom delay ตาม index
const fadeUpCustom = {
    hidden: (i) => ({ opacity: 0, y: 30 }),
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
};

const Contact = () => {
    return (
        <section className="py-20 sm:py-20 bg-transparent" id="contact">
            <div className="max-w-xl mx-auto text-center">
                {/* หัวข้อ CONTACT ME */}
                <motion.h1
                    custom={0}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
                >
                    CONTACT ME
                </motion.h1>

                {/* ข้อความ ดูรายละเอียดเพิ่มเติม */}
                <motion.p
                    custom={1}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tracking-wider text-center text-transparent font-light pb-4 sm:pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
                >
                    ดูรายละเอียดเพิ่มเติม
                </motion.p>

                {/* ข้อความบรรยาย */}
                <motion.p
                    custom={2}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-sm sm:text-base text-gray-400 mb-6 sm:px-0 leading-relaxed"
                >
                    หากคุณสนใจร่วมงาน หรืออยากพูดคุยเพิ่มเติมสามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้ยินดีพูดคุยและแลกเปลี่ยนไอเดียครับ
                </motion.p>

                {/* โซเชียลมีเดียไอคอน */}
                <motion.div
                    custom={3}
                    variants={fadeUpCustom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-6"
                >
                    {SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-full text-white transition-colors shadow-lg hover:scale-105 transform duration-200"
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
