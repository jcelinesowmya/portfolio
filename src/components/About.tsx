"use client";

import { motion } from "framer-motion";

export default function About() {
  const interests = [
  "Software Development",
  "Python Development",
  "Backend Development",
  "Web Development",
  "Database Management",
  "Software Design",
  "User Interface Development",
  "Technology Innovation",
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold gradient-text">
            About Me
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Get to know more about me and my career journey.
          </p>
        </motion.div>

        {/* Main Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* About Card */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass hover-card p-10"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              About Me
            </h3>

            <p className="text-gray-300 text-lg leading-9 text-justify">
              I am an aspiring Software Developer with a strong passion for Python programming, backend development, and web development. I have a solid foundation in Python, SQL, HTML, and CSS, and I enjoy applying my skills to build efficient, scalable, and user-friendly applications.

I am passionate about solving real-world problems through technology and continuously expanding my technical expertise by learning new tools and frameworks. My goal is to build a successful career as a Software Developer, contributing to innovative software solutions while growing as a technology professional.
            </p>
          </motion.div>

          {/* Career Goal */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass hover-card p-10"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Career Goal
            </h3>

            <p className="text-gray-300 text-lg leading-9 text-justify">
              Seeking an opportunity to begin my career as a Software Developer
              where I can apply my Python, Web Development, and Database skills
              while continuously learning modern technologies and contributing
              to innovative software projects.
            </p>
          </motion.div>

        </div>

        {/* Area of Interest */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass hover-card p-10 mt-12"
        >
          <h3 className="text-3xl font-bold text-cyan-400 text-center mb-10">
            Areas of Interest
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {interests.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-5 text-center transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_#06b6d4]"
              >
                <p className="text-gray-200 font-semibold">
                  {item}
                </p>
              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}