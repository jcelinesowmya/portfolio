"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-300 uppercase tracking-[6px] font-semibold text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 whitespace-nowrap">
          <span className="gradient-text">
            CELINE SOWMYA J
          </span>
          </h1>

          

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white font-light tracking-wide text-justify">
            Passionate about Software Development and solving real-world problems through innovative technology. I enjoy building efficient, scalable, and user-friendly applications using Python and modern web technologies while continuously learning and growing as a developer.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="/resume.pdf"
              target="_blank"
              className="primary-btn"
>
          
              Download Resume
            </a>

            <a
              href="#about"
              className="primary-btn"

            >
              About Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >

            {/* Glow */}

            <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-500 opacity-30 scale-110"></div>

            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={420}
              height={420}
              priority
              className="relative rounded-full border-4 border-cyan-400 shadow-[0_0_60px_#06b6d4]"
            />

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}