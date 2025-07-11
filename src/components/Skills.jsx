import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skillGroups = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", glow: "hover:shadow-[0_0_20px_#f97316]", level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", glow: "hover:shadow-[0_0_20px_#3b82f6]", level: 85 },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", glow: "hover:shadow-[0_0_20px_#facc15]", level: 80 },
    { name: "React", icon: <FaReact />, color: "text-cyan-400", glow: "hover:shadow-[0_0_20px_#22d3ee]", level: 85 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", glow: "hover:shadow-[0_0_20px_#22c55e]", level: 75 },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700", glow: "hover:shadow-[0_0_20px_#15803d]", level: 70 },
    { name: "Python", icon: <FaPython />, color: "text-blue-600", glow: "hover:shadow-[0_0_20px_#2563eb]", level: 88 },
  ],
  Tools: [
    { name: "Git", icon: <FaGit />, color: "text-red-500", glow: "hover:shadow-[0_0_20px_#ef4444]", level: 80 },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-800", glow: "hover:shadow-[0_0_20px_#4b5563]", level: 82 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>

      {Object.entries(skillGroups).map(([group, skills]) => (
        <div key={group} className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">{group}</h3>

          <div className="flex gap-4 overflow-x-auto px-1 md:grid md:grid-cols-3 lg:grid-cols-4 no-scrollbar">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`min-w-[170px] bg-white/30 backdrop-blur-xl border border-white/30 rounded-xl
                shadow-md hover:scale-105 transition duration-500 p-4 flex flex-col items-center text-center
                ${skill.glow}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl mb-2 ${skill.color}`}>{skill.icon}</div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">{skill.name}</h3>

                {/* Radial Progress */}
                <div className="relative w-14 h-14">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle cx="50%" cy="50%" r="22" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="22"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="138"
                      strokeDashoffset={138 - (138 * skill.level) / 100}
                      className={skill.color}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-700">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
