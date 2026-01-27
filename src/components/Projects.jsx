import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// ใช้ fadeUpCustom สำหรับกำหนด delay แบบ manual ตาม custom index
const fadeUpCustom = {
  hidden: (i) => ({ opacity: 0, y: 30 }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      {/* HEADINGS */}
      <motion.h2
        custom={0}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        PROJECT
      </motion.h2>

      <motion.p
        custom={1}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>

      {/* PROJECT CARDS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index + 2}
            variants={fadeUpCustom}
            className="group relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 ease-out hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-100 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="whitespace-pre-line absolute inset-0 flex flex-col items-center justify-center text-amber opacity-0 backdrop-blur-3xl transition-all duration-500 ease-in-out group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="mb-8 text-xl font-semibold text-center break-words">
                {project.name}
              </h3>
              <p className="font-light mb-8 px-4 text-center text-xs text-balance text-gray-300">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap justify-center gap-3 sm:gap-4 text-3xl sm:text-4xl lg:text-5xl">
                {project.stackIcons?.map((Icon, index) => (
                  <span
                    key={index}
                    className="transition-transform hover:scale-110"
                  >
                    {Icon}
                  </span>
                ))}
              </div>
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
