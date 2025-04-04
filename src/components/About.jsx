import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Briefcase, Mail, ArrowRight } from "lucide-react";

const IndiaFlag = () => (
  <svg className="inline mx-1" width="18" height="18" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="#f93" />
    <rect width="64" height="42.67" fill="#fff" />
    <rect width="64" height="21.33" fill="#128807" />
    <circle cx="32" cy="32" r="6.4" fill="#008" />
    <circle cx="32" cy="32" r="5.33" fill="#fff" />
    <circle cx="32" cy="32" r="1.6" fill="#008" />
  </svg>
);

const CanadaFlag = () => (
  <svg className="inline mx-1" width="18" height="18" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="#f00" />
    <rect x="16" width="12" height="64" fill="#fff" />
    <rect y="16" width="64" height="12" fill="#fff" />
    <polygon
      points="32,16 36,24 44,24 36,28 40,36 32,30 24,36 28,28 20,24 28,24"
      fill="#f00"
    />
  </svg>
);

export default function About() {
  return (
    <div
      id="about"
      className="bg-black text-white border-b-[1px] border-dashed border-slate-500/50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-purple-500/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-blue-500/20"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <section className="container p-8 text-center relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent inline-block">
            <code>&lt;About Me/&gt;</code> 👨‍💻
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Short Introduction */}
        <motion.div
          className="max-w-3xl mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a passionate{" "}
            <span className="font-semibold text-white">
              Full Stack Developer
            </span>{" "}
            🚀 with expertise in building modern web applications. I specialize
            in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold">
              React, Next.js, Node.js, PHP
            </span>{" "}
            and database management. Currently pursuing my studies in Canada 🇨🇦
            while originally from India 🇮🇳.
          </p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Beyond coding 💻, I love helping others—especially students and
            professionals transitioning to Canada. If you're from India and have
            any queries about moving to Canada, feel free to reach out! 📩 I
            respond to all messages every Sunday 📅 and will do my best to
            assist you! ✨
          </motion.p>
        </motion.div>

        {/* Animated Stats Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {[
            {
              icon: <Code size={36} className="text-purple-500" />,
              text: "3+ Years of Coding",
              emoji: "🧑‍💻",
            },
            {
              icon: <Users size={36} className="text-blue-500" />,
              text: "10+ Happy Clients",
              emoji: "😊",
            },
            {
              icon: <Briefcase size={36} className="text-green-500" />,
              text: "5+ Completed Projects",
              emoji: "🚀",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg flex flex-col items-center border border-gray-700/50 hover:border-purple-500/30 transition-all"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              {item.icon}
              <h3 className="mt-3 text-lg font-semibold text-white flex items-center">
                {item.text} <span className="ml-2">{item.emoji}</span>
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <motion.a
            href="/contact"
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg font-medium shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10 flex items-center">
              <Mail className="mr-2" size={20} />
              Get in Touch
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
            />
          </motion.a>

          <motion.p
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            I'm always happy to help with Canada queries! 🇮🇳→🇨🇦
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
