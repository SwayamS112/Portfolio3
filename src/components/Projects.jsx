import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SpendSense",
    desc: "An AI-based expense tracker that categorizes spending automatically.",
    github: "https://github.com/SwayamS112/Spend-Sense2",
    live: "https://example.com/spendsense",
    tech: ["React", "Tailwind", "MongoDB", "Chart.js"],
    date: "2024",
    image: "https://via.placeholder.com/400x160?text=Project+Demo"
  },
  {
    title: "CampusConnect",
    desc: "College event platform for viewing and registering for campus events.",
    github: "https://github.com/SwayamS112/Event_Stalker-Project",
    live: "https://example.com/campusconnect",
    tech: ["Node", "Express", "MongoDB"],
    date: "2023",
    image: "https://via.placeholder.com/400x160?text=Project+Demo"
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio showcasing full-stack projects.",
    github: "https://github.com/SwayamS112/portfolio2",
    live: "https://example.com/portfolio",
    tech: ["React", "TailwindCSS"],
    date: "2024",
    image: "https://via.placeholder.com/400x160?text=Project+Demo"
  },
  {
    title: "Google Search Clone",
    desc: "A basic project: a clone of Google search (UI only, no advanced features).",
    github: "https://github.com/SwayamS112/google-search-clone", // Use your real repo if available, else keep as placeholder
    live: "https://example.com/google-search-clone",
    tech: ["React", "CSS"],
    date: "2023",
    image: "https://via.placeholder.com/400x160?text=Google+Search+Clone"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 text-white rounded-2xl my-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Number and Divider */}
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[#64ffda] text-base font-mono">03.</p>
          <div className="h-0.5 w-12 bg-[#64ffda]/40 rounded" />
        </div>
        <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          A selection of my favorite projects, showcasing my skills in full-stack development and UI design.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Demo Image */}
                <img
                  src={proj.image}
                  alt={proj.title + " demo"}
                  className="w-full h-40 object-cover rounded-lg mb-4 border border-white/10"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#64ffda]">{proj.title}</h3>
                  <span className="text-xs text-gray-400 font-mono">{proj.date}</span>
                </div>
                <p className="text-gray-200 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded-full text-xs font-semibold border border-[#64ffda]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href={proj.github}
                  className="flex-1 text-center bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-[#64ffda]/40 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code ↗
                </a>
                <a
                  href={proj.live}
                  className="flex-1 text-center bg-neutral-900/40 border border-[#8f43ff] text-[#8f43ff] px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-[#8f43ff]/40 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
