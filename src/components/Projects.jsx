import { useMemo, useState } from "react";
import { PROJECTS } from "../constants/ProjectConstants";
import { motion } from "framer-motion";

const fadeUpCustom = {
  hidden: (i) => ({ opacity: 0, y: 30 }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const CATS = ["All", "Web", "Frontend", "Backend", "Fullstack", "Desktop"];

const Projects = () => {
  const [cat, setCat] = useState("All");
  const [visible, setVisible] = useState(6);

  const [openId, setOpenId] = useState(null);

  const normalized = useMemo(() => {
    return PROJECTS.map((p) => ({
      ...p,
      category: p.category || "All",
    }));
  }, []);

  const filtered = useMemo(() => {
    if (cat === "All") return normalized;
    return normalized.filter((p) => p.category === cat);
  }, [cat, normalized]);

  const shown = useMemo(() => filtered.slice(0, visible), [filtered, visible]);

  const handleChangeCat = (next) => {
    setCat(next);
    setVisible(6);
    setOpenId(null);
  };

  const canLoadMore = visible < filtered.length;

  return (
    <section className="pt-20" id="projects">
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
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => handleChangeCat(c)}
            className={[
              "cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
              "border border-white/30",
              c === cat
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        key={`${cat}-${visible}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((project, index) => {
          const isOpen = openId === project.id;

          return (
            <motion.div
              key={project.id}
              custom={index + 2}
              variants={fadeUpCustom}
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 ease-out hover:scale-105"
              onClick={() => setOpenId((prev) => (prev === project.id ? null : project.id))}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-100 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />

              <div
                className={[
                  "whitespace-pre-line absolute inset-0 flex flex-col items-center justify-center",
                  "text-amber backdrop-blur-3xl transition-all duration-500 ease-in-out",
                  "bg-linear-to-t from-black via-transparent to-transparent",
                  "opacity-0 group-hover:opacity-100",
                  isOpen ? "opacity-100" : "",
                  "px-6 sm:px-8",
                ].join(" ")}
              >
                <h3 className="mb-4 sm:mb-6 text-xl font-semibold text-center wrap-break-word">
                  {project.name}
                </h3>

                <p className="font-light mb-5 sm:mb-6 text-center text-xs text-balance text-gray-300 max-w-[42ch]">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap justify-center gap-3 sm:gap-4 text-3xl sm:text-4xl lg:text-5xl px-2">
                  {project.stackIcons?.map((Icon, i) => (
                    <span
                      key={i}
                      className="transition-transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {Icon}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="z-10 hover:bg-white rounded-xl text-white font-semibold hover:text-black py-2 px-6 border border-white/30 transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center">
                    <span>เข้าชมบน GitHub</span>
                  </div>
                </a>

                <div className="mt-4 text-[11px] text-white/60 sm:hidden">
                  แตะอีกครั้งเพื่อปิด
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-12 flex justify-center">
        {canLoadMore ? (
          <button
            type="button"
            onClick={() => setVisible((v) => v + 6)}
            className="cursor-pointer rounded-xl border border-white/30 px-8 py-3 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            ดูเพิ่มเติม
          </button>
        ) : (
          <div className="text-sm text-white/50">
            แสดงครบแล้ว ({filtered.length} รายการ)
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;