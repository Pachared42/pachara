import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      {/* ห่อหัวข้อกับ motion div */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10"
      >
        <motion.h2
          variants={fadeUp}
          className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
        >
          PROJECT
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]"
        >
          ดูรายละเอียดเพิ่มเติม
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            className="group relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 ease-out hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-100 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-in-out group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="mb-8 text-2xl font-semibold">{project.name}</h3>
              <p className="font-light mb-8 px-4 text-center text-sm text-balance">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border border-white transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center">
                  <span>เข้าชมบน GitHub</span>
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;