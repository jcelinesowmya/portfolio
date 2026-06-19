"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Presentation,
} from "lucide-react";

const achievements = [
  {
    title: "International Conference",
    icon: Presentation,
    image: "/achievements/conference.jpeg",
    certificate: "/achievements/conference.jpeg",
    description:
      "Presented research on HRL for Complex Robotic Tasks.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "National Conference",
    icon: Award,
    image: "/achievements/national.jpeg",
    certificate: "/achievements/national.jpeg",
    description:
      "Presented research on Password Cracking by Combining Hash and Salt Algorithms.",
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "World IP Day Competition",
    icon: Trophy,
    image: "/achievements/worldip.jpeg",
    certificate: "/achievements/worldip.jpeg",
    description:
      "Secured 2nd Place in Poster Making Competition.",
    color: "from-yellow-400 to-orange-500",
  },

  {
    title: "Sketch 'O' Sketch",
    icon: Medal,
    image: "/achievements/sketch.jpeg",
    certificate: "/achievements/sketch.jpeg",
    description:
      "Received Certificate of Excellence in National Online Drawing Competition.",
    color: "from-green-500 to-cyan-500",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />

      <div className="absolute top-24 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            My Journey
          </p>

          <h2 className="gradient-text text-5xl md:text-6xl font-extrabold mt-4">
            Academic Activities
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {achievements.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.a
                key={index}
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .8,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl cursor-pointer"
              >

                {/* Certificate Image */}

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40"></div>

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: .8 }}
                    className={`absolute top-5 left-5 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </motion.div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-white mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-8 text-justify">
                    {item.description}
                  </p>

                </div>

              </motion.a>

            );

          })}

        </div>

      </div>
    </section>
  );
}