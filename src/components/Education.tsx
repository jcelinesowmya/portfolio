"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Science",
    institution: "St. Anne's Arts and Science College, Chennai",
    year: "2023 - 2025",
    score: "CGPA / Percentage: 83%",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Holy Cross Arts and Science College (Autonomous), Nagercoil",
    year: "2020 - 2023",
    score: "CGPA / Percentage: 74%",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Sacred Heart Matric Higher Secondary School",
    year: "2019 - 2020",
    score: "Percentage: 70%",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Sacred Heart Matric Higher Secondary School",
    year: "2017 - 2018",
    score: "Percentage: 85%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold gradient-text">
            Education
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            My academic journey and educational background.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Timeline Line */}

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 -translate-x-1/2 rounded-full"></div>

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              } relative`}
            >

              {/* Icon */}

              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-cyan-500 items-center justify-center shadow-[0_0_30px_#06b6d4] z-20">

                <GraduationCap size={28} />

              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -10,
                }}
                className="w-full md:w-[45%] glass hover-card p-8 rounded-3xl"
              >

                <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                  {item.degree}
                </h3>

                <p className="text-gray-300 text-lg">
                  {item.institution}
                </p>

                <div className="flex flex-wrap gap-4 mt-6">

                  <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full">
                    📅 {item.year}
                  </span>

                  <span className="bg-green-500/20 text-green-300 px-5 py-2 rounded-full">
                    🎓 {item.score}
                  </span>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}