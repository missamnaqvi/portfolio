import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="Home"
      className="bg-black text-white border-b-[1px] border-dashed border-slate-500"
    >
      <section className="container flex flex-col items-center justify-center min-h-screen text-center p-6 px-3 md:px-6">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-400">Javad Naqvi</span>
        </motion.h1>
        <motion.p
          className="text-xl text-slate-500 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full Stack Developer | Web & Infrastructure Enthusiast. I specialize
          in creating scalable applications using modern technologies like
          React, Node.js, Java, and more.
        </motion.p>
        <motion.div
          className="flex space-x-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://github.com/naqvijavad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/javadnaqvi57"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a href="mailto:naqvijavad57@gmail.com">
            <FaEnvelope className="text-3xl hover:text-blue-400 transition" />
          </a>
        </motion.div>
        <motion.a
          href="#projects"
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-black rounded-lg text-lg font-medium shadow-lg  transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          View My Work
        </motion.a>
      </section>
    </div>
  );
}
