"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
  title: "Crop Recommendations: Ensuring Optimal Yields with Smart Selections ",
  date: "January 2025",
  description:
    "Developed an intelligent crop recommendation system using Python by analyzing agricultural data. Built a responsive web interface using HTML and CSS to provide accurate crop suggestions based on user inputs.",
  technologies: ["Python", "HTML5", "CSS3"],
  image: "/project-images/crop.jpg",
  live: "https://crop-recommendations-ensuring-optimal.onrender.com/",
  github: "https://github.com/jcelinesowmya/Crop-Recommendations-Ensuring-Optimal-Yields-with-Smart-Selections-",
},

  {
  title: "Stream IT",
  date: "June 2022",
  description:
    "Designed and developed a Netflix-inspired streaming platform using HTML, CSS, PHP, and XAMPP with responsive UI and media management features.",
  technologies: ["HTML5", "CSS3", "PHP", "XAMPP"],
  image: "/project-images/streamit.jpg",
  live: "",
  github: "",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold gradient-text">
            Projects
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Some of the projects that showcase my technical skills and creativity.
          </p>

        </motion.div>

        {/* Project Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="glass hover-card rounded-3xl overflow-hidden"
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  📅 {project.date}
                </p>

                <p className="text-gray-300 leading-8 mt-5 text-justify">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech, i) => (

                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 text-gray-200 hover:bg-cyan-500 hover:text-white transition duration-300"
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

                {/* Button */}

                <div className="mt-8 flex gap-4 flex-wrap">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                     <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
                      >
                        GitHub
                      </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}