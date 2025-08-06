import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  // Programming Languages
  { name: "C", type: "Programming Language", category: "Programming Languages", proficiency: 85, used: 6 },
  { name: "C++", type: "Programming Language", category: "Programming Languages", proficiency: 88, used: 8 },
  { name: "Java", type: "Programming Language", category: "Programming Languages", proficiency: 80, used: 5 },
  // Frontend
  { name: "HTML", type: "Frontend", category: "Frontend", proficiency: 95, used: 12 },
  { name: "CSS", type: "Frontend", category: "Frontend", proficiency: 93, used: 12 },
  { name: "TailwindCSS", type: "Frontend", category: "Frontend", proficiency: 90, used: 8 },
  { name: "JavaScript", type: "Frontend", category: "Frontend", proficiency: 92, used: 12 },
  { name: "ReactJS", type: "Frontend", category: "Frontend", proficiency: 90, used: 10 },
  { name: "Aceternity UI", type: "Frontend", category: "Frontend", proficiency: 80, used: 3 },
  { name: "Bootstrap", type: "Frontend", category: "Frontend", proficiency: 85, used: 7 },
  { name: "ChartJS", type: "Frontend", category: "Frontend", proficiency: 75, used: 4 },
  // Backend
  { name: "NodeJS", type: "Backend", category: "Backend", proficiency: 88, used: 8 },
  { name: "ExpressJS", type: "Backend", category: "Backend", proficiency: 85, used: 8 },
  { name: "MongoDB", type: "Backend", category: "Backend", proficiency: 83, used: 6 },
  { name: "MySQL", type: "Backend", category: "Backend", proficiency: 78, used: 4 },
  // Tech & Soft Skills
  { name: "Git/GitHub", type: "Tech", category: "Tech & Soft Skills", proficiency: 90, used: 15 },
  { name: "Docker", type: "Tech", category: "Tech & Soft Skills", proficiency: 75, used: 3 },
  { name: "Canva", type: "Tech", category: "Tech & Soft Skills", proficiency: 85, used: 6 },
  { name: "Filmora", type: "Tech", category: "Tech & Soft Skills", proficiency: 80, used: 4 },
  { name: "Vercel", type: "Tech", category: "Tech & Soft Skills", proficiency: 80, used: 5 },
  { name: "Shadcn", type: "Tech", category: "Tech & Soft Skills", proficiency: 70, used: 2 },
  { name: "NodeMailer", type: "Tech", category: "Tech & Soft Skills", proficiency: 75, used: 3 },
  { name: "Leadership", type: "Soft Skill", category: "Tech & Soft Skills", proficiency: 90, used: 10 },
  { name: "Teamwork", type: "Soft Skill", category: "Tech & Soft Skills", proficiency: 92, used: 12 },
  { name: "Project Management", type: "Soft Skill", category: "Tech & Soft Skills", proficiency: 88, used: 8 },
];

const categories = [
  { label: "All", value: "All" },
  { label: "Programming Languages", value: "Programming Languages" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Tech & Soft Skills", value: "Tech & Soft Skills" },
];

const categoryHeadings = {
  All: "All Tech",
  "Programming Languages": "Programming Languages",
  Frontend: "Frontend",
  Backend: "Backend",
  "Tech & Soft Skills": "Tech & Soft Skills",
};

const Skills = () => {
  const [selected, setSelected] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    selected === "All"
      ? skills
      : skills.filter((skill) => skill.category === selected);

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

  return (
    <section id="skills" className="py-20 px-4 text-white relative rounded-2xl my-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Number and Divider */}
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[#64ffda] text-base font-mono">02.</p>
          <div className="h-0.5 w-12 bg-[#64ffda]/40 rounded" />
        </div>
        <h2 className="text-4xl font-bold mb-2">Technical Expertise</h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          A comprehensive overview of my technical skills across the full development stack, from frontend frameworks to cloud infrastructure.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelected(cat.value);
                setShowAll(false); // Reset when category changes
              }}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 backdrop-blur-md
                ${selected === cat.value
                  ? "bg-[#64ffda]/20 border-[#64ffda] text-[#64ffda] shadow"
                  : "bg-white/10 border-white/20 text-white hover:bg-[#64ffda]/10 hover:text-[#64ffda]"}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Category Heading */}
        <h3 className="text-2xl font-semibold mb-6 text-[#64ffda]">
          {categoryHeadings[selected]}
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-white text-lg">{skill.name}</span>
                <span className="text-xs text-gray-400 bg-neutral-900 px-2 py-0.5 rounded-full ml-2 capitalize">{skill.type}</span>
              </div>
              {/* Proficiency Bar */}
              <div className="w-full bg-neutral-800 rounded-full h-2 mt-2 mb-2">
                <div
                  className="bg-gradient-to-r from-[#64ffda] to-[#8f43ff] h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-between w-full mt-1">
                <span className="text-[#64ffda] font-mono text-sm">{skill.proficiency}%</span>
                <span className="text-xs text-gray-400">{skill.used}+ proj.</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button - Visible only on Mobile */}
        {/* Show More / Show Less Button - Visible on All Screens */}
         {filteredSkills.length > 6 && (
           <div className="mt-8 text-center">
             <button
               onClick={() => setShowAll(!showAll)}
               className="px-6 py-3 rounded-full bg-[#64ffda]/20 text-[#64ffda] border border-[#64ffda] font-semibold hover:bg-[#64ffda]/30 transition-all"
             >
              {showAll ? "Show Less" : "Show More"}
             </button>
           </div>
         )}

      </div>
    </section>
  );
};

export default Skills;
