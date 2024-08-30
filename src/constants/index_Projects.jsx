import { PROJECTS } from ".";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-10 text-center text-3xl lg:text-5xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-3xl font-semibold">{project.name}</h3>
              <p className="mb-5 px-4 text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200 transition-transform duration-300"
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