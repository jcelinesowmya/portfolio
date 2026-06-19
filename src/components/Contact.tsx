"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  FileText,
  Award,
  MapPin,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "celinesowmyaj0202@gmail.com",
    icon: Mail,
    href: "mailto:celinesowmyaj0202@gmail.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Location",
    value: "No.63 Ganesh Nagar 1st Cross Arakkonam, Ranipet",
    icon: MapPin,
    href: "https://www.google.com/maps/@13.0957852,79.6636627,17.77z?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
    color: "from-green-500 to-emerald-500",
  },
  {
  title: "Phone",
  value: "+91 9655741870",
  icon: Phone,
  href: "tel:+919655741870",
  color: "from-orange-500 to-red-500",
},
  {
    title: "LinkedIn",
    value: "linkedin.com/in/your-linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/celine-sowmya-j/",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "HackerRank",
    value: "View Profile",
    icon: Award,
    href: "https://www.hackerrank.com/profile/jcelinesowmya",
    color: "from-green-500 to-lime-500",
  },
  {
    title: "Resume",
    value: "Download Resume",
    icon: FileText,
    href: "/resume.pdf",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>

      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Let's Connect
          </p>

          <h2 className="gradient-text text-5xl md:text-6xl font-extrabold mt-4">
            Contact Me
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {contacts.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .7,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden relative"
              >

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${item.color}`}
                />

                <div className="relative">

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-6`}
                  >
                    <Icon
                      size={38}
                      className="text-white"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 break-words">
                    {item.value}
                  </p>

                </div>

              </motion.a>

            );

          })}

        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <h3 className="text-3xl font-bold gradient-text">
            Thank You for Visiting!
          </h3>

          <p className="text-gray-400 mt-5 text-lg">
           I'm always excited to connect with professionals, collaborate on innovative projects, and explore internship and entry-level opportunities in software development.
          </p>

          <div className="mt-12 border-t border-white/10 pt-8 text-gray-500">
            © 2026 <span className="text-cyan-400 font-semibold">Celine Sowmya J</span>. All Rights Reserved.
          </div>

        </motion.div>

      </div>
    </section>
  );
}