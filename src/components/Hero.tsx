"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-8 lg:px-10 pt-24 lg:pt-0"
    >
      <div className="max-w-7xl mx-auto w-full">

      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] items-center gap-10">  
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-cyan-300 uppercase tracking-[6px] font-semibold text-sm sm:text-base lg:text-xl mb-4">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">
                CELINE SOWMYA J
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl leading-8 text-white font-light text-left lg:text-justify">
              Passionate about Software Development and solving real-world
              problems through innovative technology. I enjoy building
              efficient, scalable, and user-friendly applications using Python
              and modern web technologies while continuously learning and
              growing as a developer.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-10">
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
            className="order-1 lg:order-2 flex justify-center"
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
                width={430}
                height={430}
                sizes="(max-width:640px) 250px,
                       (max-width:768px) 300px,
                       (max-width:1024px) 360px,
                       430px"
                priority
                className="relative rounded-full border-4 border-cyan-400 shadow-[0_0_60px_#06b6d4]
                  w-60 h-60
                  sm:w-72 sm:h-72
                  md:w-80 md:h-80
                  lg:w-[400px] lg:h-[400px]
                  xl:w-[430px] xl:h-[430px]
                  object-cover"
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}