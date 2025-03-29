import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SoleMate – E-commerce App",
    description:
      "Improved app performance by 40%, enhancing speed & reliability. Integrated Firebase Authentication, reducing unauthorized access by 80%. Developed the backend using Java & Firebase for seamless operations.",
    image:
      "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Update with actual image paths
  },
  {
    title: "Drivetest Scheduler – Kiosk Application",
    description:
      "Integrated role-based access control, cutting scheduling errors by 40%. Developed using React, Node.js, Express & MongoDB, increasing efficiency by 50%. Led the team in implementing secure user management, improving system performance by 20%.",
    image: "../../public/driving.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-black text-white border-b-[1px] border-dashed border-slate-500"
    >
      <div className="container px-6">
        <h2 className="text-4xl font-bold text-center text-white dark:text-white mb-12">
          <code>&lt;Projects/&gt;</code>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              {/* Project Description */}
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
