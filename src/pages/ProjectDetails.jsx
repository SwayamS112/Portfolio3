import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-slate-300 hover:text-white transition"
          >
            ← Back
          </button>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>

          <div className="w-24 h-[3px] bg-gradient-to-r from-indigo-400 to-purple-500 my-6" />

          <p className="text-slate-400 max-w-xl">
            {project.description}
          </p>

          {/* STATS – SEPARATE BOXES */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            {/* TECHNOLOGIES COUNT */}
            <div
              className="group relative flex items-center gap-2
              px-6 py-3 rounded-xl font-medium text-white
              border border-white/10 overflow-hidden
              transition hover:-translate-y-0.5"
            >
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-r from-indigo-500 to-purple-500"
              />
              <div className="relative z-10">
                <p className="text-2xl font-bold text-white">
                  {project.technologies.length}
                </p>
                <p className="text-xs text-slate-400">
                  Technologies Used
                </p>
              </div>
            </div>

            {/* FEATURES COUNT */}
            <div
              className="group relative flex items-center gap-2
              px-6 py-3 rounded-xl font-medium text-white
              border border-white/10 overflow-hidden
              transition hover:-translate-y-0.5"
            >
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-r from-purple-500 to-pink-500"
              />
              <div className="relative z-10">
                <p className="text-2xl font-bold text-white">
                  {project.features.length}
                </p>
                <p className="text-xs text-slate-400">
                  Key Features
                </p>
              </div>
            </div>
          </div>

         {/* ACTION BUTTONS */}
          <div className="mt-10 flex gap-4">
            {/* LIVE DEMO */}
            <a
              href={project.live}
              target="_blank"
              className="group relative flex items-center gap-2
              px-6 py-3 rounded-xl font-medium text-white
              border border-white/10 overflow-hidden
              transition hover:-translate-y-0.5"
            >
              <span
                className="absolute inset-0 opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-r from-indigo-500 to-purple-500"
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaExternalLinkAlt /> Live Demo
              </span>
            </a>

            {/* GITHUB */}
            <a
              href={project.github}
              target="_blank"
              className="group relative flex items-center gap-2
              px-6 py-3 rounded-xl font-medium text-white
              border border-white/10 overflow-hidden
              transition hover:-translate-y-0.5"
            >
              <span
                className="absolute inset-0 opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-r from-purple-500 to-pink-500"
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaGithub /> GitHub
              </span>
            </a>
          </div>

          {/* TECHNOLOGIES */}
          <h3 className="mt-14 text-lg font-semibold text-white">
            Technologies Used
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm
                bg-white/5 border border-white/10 text-slate-300
                hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]
                transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

          {/* IMAGE CARD */}
          <div
            className="group rounded-2xl overflow-hidden
            backdrop-blur-xl bg-white/5 border border-white/10
            hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]
            transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover
              group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* KEY FEATURES CARD */}
          <div
            className="rounded-2xl p-6 backdrop-blur-xl bg-white/5
            border border-white/10 relative
            hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
            transition"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              ⭐ Key Features
            </h3>

            <ul className="space-y-3 text-slate-300 text-lg">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="relative pl-4 hover:text-white transition"
                >
                  <span className="absolute left-0 text-indigo-400">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
