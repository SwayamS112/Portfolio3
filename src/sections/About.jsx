import useSectionBackground from "../hooks/useSectionBackground";

export default function About() {
  useSectionBackground(
    "rgba(56, 189, 248, 0.16)",
    "rgba(99, 102, 241, 0.16)"
  );

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-sky-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Building scalable
            <span className="block bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              real-world applications
            </span>
          </h2>

          <p className="mt-6 text-slate-300 max-w-xl leading-relaxed">
            I’m a Computer Science student and MERN Stack Developer focused on
            building clean user interfaces, reliable backend systems, and
            production-ready applications using modern web technologies.
          </p>

          <p className="mt-4 text-slate-300 max-w-xl leading-relaxed">
            I enjoy working on end-to-end solutions — from UI design to API
            development — with an emphasis on performance and maintainability.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Projects Built", value: "6+" },
            { label: "Tech Stack", value: "MERN" },
            { label: "Frontend Focus", value: "React" },
            { label: "Experience", value: "Hands-on" },
          ].map((item) => (
            <div
              key={item.label}
              className="backdrop-blur-xl bg-white/5 border border-white/10
              rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-white">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
