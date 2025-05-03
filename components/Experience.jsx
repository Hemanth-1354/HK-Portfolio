"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import * as si from "react-icons/si";
import { FaBolt, FaChartLine, FaCogs, FaLayerGroup } from "react-icons/fa";

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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full px-4 py-16 bg-white dark:bg-black" id="experience">
      <motion.div className="max-w-7xl mx-auto">
        {/* Header with animated underline */}
        <motion.div 
          className="mb-24 text-center" 
          ref={headerRef}
        >
          <motion.h2
            className="text-5xl font-bold text-black dark:text-white mb-5 relative inline-block"
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
              className="absolute -bottom-2 left-0 w-full h-1 bg-black dark:bg-white rounded-full"
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
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute left-1/4 -translate-x-1/2 opacity-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.05, 
              scale: 1,
              rotate: 15,
              transition: { delay: 0.5, duration: 1 }
            }}
          >
            <div className="text-9xl font-bold">&lt;/&gt;</div>
          </motion.div>
        </motion.div>

        {/* Timeline decoration */}
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2 z-0"
            initial={{ scaleY: 0 }}
            animate={{ 
              scaleY: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
            style={{ transformOrigin: "top" }}
          />
          
          {/* Animated dots along timeline */}
          {[0, 0.33, 0.66, 1].map((position, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black dark:bg-white"
              style={{ top: `${position * 100}%` }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                transition: { 
                  delay: 0.5 + i * 0.2,
                  duration: 0.5
                }
              }}
            />
          ))}

          {/* Experience Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative z-10"
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
              >
                {/* Timeline connector */}
                <motion.div
                  className="absolute top-8 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: 1,
                    transition: { delay: 0.5 + index * 0.2, duration: 0.8 }
                  }}
                />

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 -top-8 h-6 w-6 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white transform -translate-x-1/2 z-20 flex items-center justify-center"
                  animate={{
                    boxShadow: ["0 0 0 0 rgba(0,0,0,0.2)", "0 0 0 10px rgba(0,0,0,0)", "0 0 0 0 rgba(0,0,0,0)"],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    },
                  }}
                >
                  <motion.div
                    className="h-2 w-2 rounded-full bg-black dark:bg-white"
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
                  className="h-full bg-white dark:bg-black border-2 border-black dark:border-white rounded-xl p-8 shadow-lg flex flex-col"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Company Logo with animated frame */}
                  <motion.div
                    className="mb-6 flex justify-center relative"
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                      transition: {
                        duration: 0.8,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {exp.logo && (
                      <motion.div
                        className="h-14 w-14 rounded-lg bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center overflow-hidden p-2 relative"
                        animate={{
                          y: [0, -5, 0],
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                          },
                        }}
                      >
                        {/* Decorative corners */}
                        <motion.div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black dark:border-white" />
                        <motion.div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black dark:border-white" />
                        <motion.div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black dark:border-white" />
                        <motion.div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black dark:border-white" />
                        
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Title and Company with hover effect */}
                  <div className="text-center mb-6">
                    <motion.h3
                      className="text-2xl font-bold text-black dark:text-white mb-2"
                      whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 500 },
                      }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.div className="flex items-center justify-center">
                      <motion.p
                        className="text-black dark:text-white font-medium text-lg"
                        whileHover={{
                          scale: 1.03,
                          transition: { type: "spring", stiffness: 400 },
                        }}
                      >
                        {exp.company}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Duration with animated icon */}
                  <motion.div
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-6 font-medium"
                    whileHover={{ scale: 1.05, transition: { type: "spring" } }}
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 15, -15, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.4,
                        },
                      }}
                    >
                      ⏳
                    </motion.span>
                    {exp.duration}
                  </motion.div>

                  {/* Description items with animated bullets */}
                  <ul className="flex-1 space-y-4 mb-8">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 text-sm flex items-start font-medium hover:text-black dark:hover:text-white"
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
                          className="mr-3 mt-1 text-black dark:text-white text-lg"
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

                  {/* Tags with staggered animation */}
                  <div className="flex flex-wrap justify-center gap-3 mt-auto">
                    {exp.tags.map((tag, i) => {
                      const Icon = iconMap[tag] || null;
                      return (
                        <motion.span
                          key={i}
                          className="text-xs px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white"
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
                          {Icon && <Icon size={14} className="text-black dark:text-white" />} {tag}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements at the bottom */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 1.5, duration: 0.8 }
          }}
        >
          <motion.div 
            className="h-px w-24 bg-black dark:bg-white"
            animate={{
              width: ["0%", "100%", "0%"],
              x: ["-50%", "0%", "50%"],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;