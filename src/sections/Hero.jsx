import useTypewriter from "../hooks/useTypewriter";
import useSectionBackground from "../hooks/useSectionBackground";

export default function Hero() {

  useSectionBackground(
    "rgba(139, 92, 246, 0.18)",   // purple
    "rgba(99, 102, 241, 0.18)"    // indigo
  );

  const typedText = useTypewriter([
    "Full Stack Developer & MERN Stack Developer",
    "Computer Science Student",
    "Tech Enthusiast",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full
            bg-purple-500/10 border border-purple-400/20
            text-purple-300 text-sm"
          >
            ✨ Ready to Innovate
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Full Stack
            <br />
            <span
              className="bg-gradient-to-r from-purple-400 to-indigo-400
              bg-clip-text text-transparent"
            >
              Developer
            </span>
          </h1>

          {/* Typewriter */}
          <p className="mt-6 text-xl text-purple-300 font-medium h-[32px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Description */}
          <p className="mt-6 text-slate-400 max-w-xl">
            Enhancing digital experiences that are smooth, scalable,
            and built to leave a lasting impression.
          </p>

          {/* Tech Pills */}
          <div className="mt-8 flex gap-3 flex-wrap">
            {["React", "JavaScript", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm
                bg-white/5 border border-white/10 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-5">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl bg-purple-500
              text-white font-medium hover:bg-purple-600 transition"
            >
              Projects ↗
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20
              hover:bg-white/10 transition"
            >
              Contact ✉
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl
              bg-gradient-to-r from-purple-500/40 to-indigo-500/40
              blur-3xl opacity-50"
            />

            {/* Glass Card */}
            <div
              className="relative backdrop-blur-xl bg-white/5
              border border-white/10 rounded-3xl p-4 shadow-2xl"
            >
              <img
                src="/images/profile.png"
                alt="Swayam Sood"
                className="w-72 md:w-80 h-[420px]
                object-cover rounded-2xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
