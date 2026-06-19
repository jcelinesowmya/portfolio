"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const internships = [
  {
    title: "Python Programming Internship",
    company: "YBI Foundation",
    period: "October 2024",
    certificate: "/internship/python-internship.jpeg",
    description:
      "Completed a Python Programming Internship, I gained practical knowledge of Python through structured learning and hands-on coding exercises. The internship strengthened my understanding of core programming concepts while improving my logical thinking and problem-solving skills.",
  },

  {
    title: "HTML Internship",
    company: "Infinisol Technology",
    period: "April 2021",
    certificate: "/internship/html-internship.jpeg",
    description:
      "Completed an internship in HTML where I learned webpage creation, responsive layouts, forms, tables, semantic HTML, and modern web development practices.",
  },
];

export default function Internship() {
  return (
    <section
      id="internship"
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
            Internship Experience
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Practical industry experience gained through internships and hands-on learning.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

          {internships.map((internship, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
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
              className={`relative mb-20 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Timeline Icon */}

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_25px_#06b6d4] z-10">
                <Briefcase size={22} />
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                className="glass hover-card ml-16 md:ml-0 md:w-5/12 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-bold text-cyan-400">
                  {internship.title}
                </h3>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-3 text-gray-300">
                    <Building2 size={18} className="text-cyan-400" />
                    {internship.company}
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar size={18} className="text-cyan-400" />
                    {internship.period}
                  </div>

                </div>

                <p className="text-gray-300 leading-8 text-justify mt-6">
                  {internship.description}
                </p>
                <a
  href={internship.certificate}
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-8"
>
  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-cyan-500/30 group">
    <Image
      src={internship.certificate}
      alt={internship.title}
      fill
      sizes="(max-width:768px) 100vw, 50vw"
      className="object-cover transition duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
      Click to View Certificate
    </div>
  </div>
</a>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}