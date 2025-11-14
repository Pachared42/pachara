import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
    return (
        <footer className="w-full text-white px-4 py-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-sm"
                >
                    © {new Date().getFullYear()} Pachara Portfolio. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
