import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Docker"],
  },
];

export default function Skills() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-sky-400">
            Tech Stack
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to build scalable, modern web
            applications with a strong focus on performance and user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group relative backdrop-blur-xl bg-white/5
                border border-white/10 rounded-2xl p-8
                hover:-translate-y-2 transition-all duration-300
                shadow-lg"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-r from-sky-400/20 to-indigo-500/20 blur-xl"
              />

              <h3 className="relative text-xl font-semibold text-white mb-5">
                {skill.title}
              </h3>

              <ul className="relative space-y-3 text-slate-300 text-sm">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
