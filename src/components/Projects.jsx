import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-1 text-center text-4xl lg:text-6xl font-bold">PROJECT</h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]">
        ดูรายละเอียดเพิ่มเติม
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
          >
            {/* เพิ่มขนาดของรูปภาพ */}
            <img
              src={project.image}
              alt={project.name}
              className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-250 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent">
              {/* ลดขนาดของตัวหนังสือ */}
              <h3 className="mb-8 text-2xl font-semibold">{project.name}</h3>
              <p className="mb-8 px-4 text-center text-sm text-balance">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="z-[1] padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent--"
              >
                <div className="flex items-center">
                  <span>เข้าชมบน GitHub</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
