"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import * as si from "react-icons/si";
import { FaBolt, FaChartLine, FaCogs, FaLayerGroup} from "react-icons/fa";

const experiences = [
  {
    title: "Django Developer Intern",
    company: "Techsnap Educations LLP",
    logo: "/icons/techsnap-logo1.png",
    duration: "January 2025 - March 2025",
    description: [
      "Built authentication for an e-commerce project using Django REST Framework.",
      "Tested 20+ API endpoints for a college ERP system.",
      "Improved API structure for better frontend-backend integration.",
    ],
    tags: ["Django", "REST APIs", "JWT", "REST Client"],
  },
  {
    title: "Machine Learning Intern",
    company: "CodeAlpha",
    logo: "/icons/codealpha.png",
    duration: "September 2024 - October 2024",
    description: [
      "Developed a Flask application for cardiovascular disease risk prediction using XGBoost with 92% accuracy.",
      "Created a Random Forest-based credit scoring model improving accuracy by 20%.",
      "Integrated ML algorithms with web technologies reducing processing time by 30%.",
    ],
    tags: ["Python", "Flask", "XGBoost", "Random Forest"]
  },
  {
    title: "Web Developer Intern",
    company: "Prodigy Info Tech",
    logo: "/icons/prodigyinfotech.png",
    duration: "September 2024",
    description: [
      "Engineered a responsive weather app increasing user engagement by 40%.",
      "Designed an interactive Tic Tac Toe game reducing page load time by 35%.",
      "Adopted agile methodologies increasing team productivity by 20%."
    ],
    tags: ["JavaScript", "Tailwind CSS", "Bootstrap", "HTML"]
  },
  {
    title: "Frontend Developer Intern",
    company: "Edunet Foundation – IBM",
    logo: "/icons/Edunet.png",
    duration: "June 2024 - July 2024",
    description: [
      "Built a responsive portfolio website using HTML, CSS, JavaScript, and Material UI.",
      "Created a gym landing page with ShadCN and Material UI for responsive design.",
      "Developed UI for login and signup pages using ShadCN and Material UI."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Material UI", "ShadCN"]
  }
  
  
  
  
];

const iconMap = {
  Django: si.SiDjango,
  "REST APIs": si.SiPostman,
  "REST Client": FaBolt, 
  REST: si.SiPostman,
  JWT: si.SiJsonwebtokens,
  Testing: si.SiTestinglibrary,
  JavaScript: si.SiJavascript,
  Flask: si.SiFlask,
  "Tailwind CSS": si.SiTailwindcss,
  APIs: si.SiApachenetbeanside,
  React: si.SiReact,
  HTML: si.SiHtml5,
  CSS: si.SiCss3,
  Python: si.SiPython,
  "XGBoost": FaChartLine,  
  "Random Forest": FaCogs,
  Bootstrap: si.SiBootstrap,
  "Material UI": FaLayerGroup,
  ShadCN: si.SiShadcnui,
};


const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full px-4 py-12" id="experience">
      <motion.div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="mb-16 text-center" ref={headerRef}>
          <motion.h2
            className="text-4xl font-bold text-black dark:text-white mb-5 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: headerInView ? 1 : 0,
              y: headerInView ? 0 : 20,
            }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            Work Experience
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-black dark:bg-white rounded-full"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: headerInView ? 1 : 0,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              style={{ originX: 0 }}
            />
          </motion.h2>
        </motion.div>

        {/* Timeline Line */}
        {/* Removed the timeline line here */}

        {/* Experience Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3 + index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                },
              }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 -top-8 h-5 w-5 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              >
                <motion.div
                  className="h-2 w-2 rounded-full bg-background"
                  animate={{
                    scale: [1, 1.5, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    },
                  }}
                />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className="h-full bg-card border-4 border-border rounded-2xl p-6 shadow-lg flex flex-col hover:shadow-xl font-bold"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  },
                }}
              >
                {/* Company Logo */}
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.25, 0.95, 1.15, 1],
                    transition: {
                      duration: 0.8,
                      type: "tween",
                      stiffness: 400,
                    },
                  }}
                >
                  {exp.logo && (
                    <motion.div
                      className="h-10 w-10 rounded-lg bg-background border-2 border-black dark:border-white flex items-center justify-center overflow-hidden"
                      animate={{
                        y: [0, -3, 0],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        },
                      }}
                    >
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={32}
                        height={32}
                        className="object-contain p-1"
                      />
                    </motion.div>
                  )}
                </motion.div>

                {/* Title and Company */}
                <div className="text-center mb-4">
                  <motion.h3
                    className="text-xl font-bold text-foreground mb-1"
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 500 },
                    }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p
                    className="text-primary font-medium"
                    whileHover={{
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    {exp.company}
                  </motion.p>
                </div>

                {/* Duration */}
                <motion.div
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-5"
                  whileHover={{ scale: 1.02, transition: { type: "spring" } }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.4,
                      },
                    }}
                  >
                    ⏳
                  </motion.span>
                  {exp.duration}
                </motion.div>

                {/* Descriptions */}
                <ul className="flex-1 space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground text-sm flex items-start font-medium dark:hover:text-white hover:text-black"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: 0.5 + index * 0.2 + i * 0.1,
                          type: "spring",
                          stiffness: 100,
                        },
                      }}
                      whileHover={{
                        x: 5,
                        fontWeight: 600,
                        transition: { type: "spring" },
                      }}
                    >
                      <motion.span
                        className="mr-2 mt-1 text-primary"
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          },
                        }}
                      >
                        •
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {exp.tags.map((tag, i) => {
                    const Icon = iconMap[tag] || null;
                    return (
                      <motion.span
                        key={i}
                        className="text-xs px-3 py-1.5 bg-muted rounded-full text-muted-foreground flex items-center gap-1 hover:text-black dark:hover:text-white"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: 0.7 + index * 0.2 + i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 10,
                            duration: 0.15,
                          },
                        }}
                      >
                        {Icon && <Icon size={14} />} {tag}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
