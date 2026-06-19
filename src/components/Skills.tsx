"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Language",
    skills: ["Python"],
  },
  {
    category: "Database Query Language",
    skills: ["SQL"],
  },
  {
    category: "Database Management System",
    skills: ["MySQL"],
  },
  {
    category: "Web Technologies",
    skills: ["HTML5", "CSS3"],
  },
  {
    category: "Programming Concepts",
    skills: [
      "OOP",
      "Functions",
      "Modules & Packages",
      "Exception Handling",
      "File Handling",
      "Collections",
      "Control Statements",
    ],
  },
  {
    category: "SQL Concepts",
    skills: [
      "DDL",
      "DML",
      "DQL",
      "Joins",
      "Constraints",
      "Subqueries",
      "Views",
      "Group By",
      "Aggregate Functions",
    ],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Tools & IDEs",
    skills: [
      "VS Code",
      "PyCharm",
      "MySQL Workbench",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold gradient-text">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Technologies and tools that I use to build software solutions.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {skillsData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="glass hover-card rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {item.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {item.skills.map((skill, skillIndex) => (

                  <motion.span
                    key={skillIndex}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="px-5 py-3 rounded-full bg-white/5 border border-cyan-500/20 text-gray-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-300 transition duration-300 shadow-md"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}