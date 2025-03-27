import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section className="container p-8 text-center bg-[#02343F] text-[#F0EDCC]">
      {/* Animated Header */}
      <motion.h1
        className="text-4xl text-[#F0EDCC] font-bold bg-gradient-to-r from-purple-500 to-indigo-500  bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About Me */}
        <code>&lt;About Me/&gt;</code>
        {/* <p>&lt;About Me /&gt;</p> */}
      </motion.h1>

      {/* Short Introduction */}
      <motion.p
        className="text-[#F0EDCC] dark:text-gray-300 mt-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I'm a passionate{" "}
        <span className="font-semibold">Full Stack Developer</span> with
        expertise in building web applications using modern technologies. I
        specialize in{" "}
        <span className="text-indigo-500 font-semibold">
          React, Next.js, Node.js, PHP
        </span>
        , and database management.
      </motion.p>

      {/* Animated Stats Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="p-6 bg-[#02343F] dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          <Code size={36} className="text-purple-500" />
          <h3 className="mt-3 text-lg font-semibold text-[#F0EDCC]  dark:text-white">
            3+ Years of Coding
          </h3>
        </motion.div>

        <motion.div
          className="p-6 bg-[#02343F] dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          <Users size={36} className="text-blue-500" />
          <h3 className="mt-3 text-lg font-semibold text-[#F0EDCC] dark:text-white">
            10+ Happy Clients
          </h3>
        </motion.div>

        <motion.div
          className="p-6 bg-[#02343F] dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          <Briefcase size={36} className="text-green-500" />
          <h3 className="mt-3 text-lg font-semibold text-[#F0EDCC] dark:text-white">
            5+ Completed Projects
          </h3>
        </motion.div>
      </div>

      {/* Contact Button */}
      <motion.a
        href="/contact"
        className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg font-medium shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
