"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python Programming Certification",
    issuer: "Udemy",
    year: "2026",
    image: "/certificates/python-cert.jpeg", 

    pdf: "/certificates/python-cer.pdf",
  },
  {
  title: "Python Basic Certification",
  issuer: "HackerRank",
  year: "2026",       
  image: "/certificates/python-basic.jpeg",
  pdf: "/certificates/python-basic.pdf",
  },

  {
    title: "Diploma in Computer Application (DCA)",
    issuer: "Infinisol Technology",
    year: "2021",
    image: "/certificates/dca.jpeg",
    pdf: "/certificates/dca-cert.pdf"
    
  },

  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON",
    year: "2026",
    image: "/certificates/tcs-ion.jpeg",
    pdf: "/certificates/tcs-ion-cert.pdf",
  },
  
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Certifications that demonstrate my technical knowledge and continuous learning.
          </p>

        </motion.div>

        {/* Certificate Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {certifications.map((certificate, index) => (

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
                scale: 1.03,
              }}
              className="glass hover-card rounded-3xl overflow-hidden"
            >

              {/* Certificate Image */}

              <div className="relative h-56 bg-gray-900">

                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Award
                      size={70}
                      className="text-cyan-400"
                    />
                  </div>
                )}

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {certificate.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-2">
                  📅 {certificate.year}
                </p>

                <div className="mt-8">

                  <a
                    href={certificate.pdf}
                    target="_blank"
                    className="primary-btn inline-flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Certificate
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}