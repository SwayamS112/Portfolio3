import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl bg-white/5 backdrop-blur-xl
      border border-white/10 overflow-hidden
      hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
      transition-all duration-500">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover
          group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            className="text-purple-400 hover:underline"
          >
            Live Demo ↗
          </a>

          <Link
            to={`/project/${project.id}`}
            className="text-slate-300 hover:text-white"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
