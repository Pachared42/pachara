import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="w-full backdrop-blur-md text-white px-4 py-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-sm text-gray-400"
                >
                    © {new Date().getFullYear()} Pachara Portfolio. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
