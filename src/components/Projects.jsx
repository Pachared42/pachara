import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-12 text-center text-4xl lg:text-6xl font-bold">Projects</h2>
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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent">
              {/* ลดขนาดของตัวหนังสือ */}
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mb-4 px-4 text-center text-sm">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-gray-200 transition-transform duration-300"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
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
