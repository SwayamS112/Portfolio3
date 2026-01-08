import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJsonwebtokens,
  SiMysql,
  SiShadcnui,
  SiSteamworks,
  SiReactrouter,
  SiFramer,
  SiChartdotjs,
  SiVercel,
  SiAxios,
  SiCloudinary,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "ShadcnUi", icon: SiShadcnui, color: "text-sky-500" },
  { name: "React Router", icon: SiReactrouter, color: "text-red-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "Chart.js", icon: SiChartdotjs, color: "text-orange-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-300" },
  { name: "Axios", icon: SiAxios, color: "text-purple-400" },

];

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
      {techStack.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            style={{ animation: `float ${6 + index}s ease-in-out infinite` }}
            className="group flex flex-col items-center gap-4
            backdrop-blur-xl bg-white/5 border border-white/10
            rounded-2xl p-6 transition-all duration-300
            hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]
            hover:-translate-y-2"
          >
            <Icon
              className={`text-5xl ${tech.color}
              transition-transform duration-300
              group-hover:scale-110`}
            />

            <span className="text-sm text-slate-300">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
