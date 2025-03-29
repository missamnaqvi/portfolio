import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Engineer Internship",
    company: "RadicalX",
    duration: "Nov 2023 - Feb 2024",
    description:
      "Researched advanced ML algorithms, leading to a 30% performance boost. Coordinated with a team for deep learning projects, achieving a 40% faster completion rate.",
  },
  {
    title: "Software Developer",
    company: "Haniya Business Solutions",
    duration: "Jul 2021 - Aug 2022",
    description:
      "Developed user interfaces for 7+ client websites, increasing user engagement by 20%. Ensured robust endpoint security and managed critical incident recovery.",
  },
  {
    title: "Software Developer Internship",
    company: "Internship",
    duration: "Jan 2021 - Jun 2021",
    description:
      "Improved user experiences, fixed bugs, and ensured cross-browser compatibility, boosting website traffic by 15%.",
  },
];

const education = [
  {
    institution: "Conestoga College",
    degree: "Web Development - Post Grad",
    result: "CGPA: 3.88",
  },
  {
    institution: "Bhavnagar University",
    degree: "Bachelor of Computer Applications",
    result: "Percentage: 7.8/10",
  },
];

const EducationItem = ({ edu }) => (
  <motion.div
    className="education-content text-white py-[10px] px-[20px] flex gap-[10px] sm:gap-[40px] border-l-[2px] border-[#F0EDCC] border-solid"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex">
      <div className="caption font-weight-bold blue--text">JUL 2019 - 2023</div>
    </div>
    <div className="flex flex-col pl-3">
      <strong>{edu.degree}</strong>
      <div className="caption mb-2">{edu.institution}</div>
    </div>
  </motion.div>
);

const ExperienceItem = ({ exp }) => (
  <motion.div
    className="experience-content py-[10px] px-[20px] flex gap-[10px] sm:gap-[40px] border-l-[2px] border-[#F0EDCC] border-solid"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col pl-3">
      <strong>{exp.title}</strong>
      <div className="caption mb-2">{exp.company}</div>
      <div className="caption mb-2">{exp.duration}</div>
      <p>{exp.description}</p>
    </div>
  </motion.div>
);

const Qualification = () => {
  return (
    <div
      id="Resume"
      className="py-5 px-4 bg-black text-white border-b-[1px] border-dashed border-slate-500"
    >
      <div className="container flex flex-wrap w-full header mb-8">
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0 flex flex-col gap-5 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white">
            <code>&lt;Education/&gt;</code>
          </h2>
          {education.map((edu, index) => (
            <EducationItem key={index} edu={edu} />
          ))}
        </div>
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0 flex flex-col gap-5 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-left">
            <code>&lt;Experience/&gt;</code>
          </h2>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
