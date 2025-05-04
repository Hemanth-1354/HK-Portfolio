"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import * as si from "react-icons/si";
import { 
  FaBolt, FaChartLine, FaCogs, FaLayerGroup, FaBriefcase, 
  FaStar, FaHeart, FaRegSnowflake, FaRegCircle, FaRegLightbulb,
  FaPython, FaJs, FaGitAlt, FaDatabase, FaFileExcel, FaHtml5, FaCss3Alt
} from "react-icons/fa";


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
  "Django": { icon: si.SiDjango, color: "#092E20", bg: "bg-green-100 dark:bg-green-900" },
  "REST APIs": { icon: si.SiPostman, color: "#FF6C37", bg: "bg-orange-100 dark:bg-orange-900" },
  "REST Client": { icon: FaBolt, color: "#FCCB35", bg: "bg-yellow-100 dark:bg-yellow-900" },
  "JWT": { icon: si.SiJsonwebtokens, color: "#000000", bg: "bg-gray-100 dark:bg-gray-700" },
  "JavaScript": { icon: FaJs, color: "#F7DF1E", bg: "bg-yellow-100 dark:bg-yellow-900" },
  "Flask": { icon: si.SiFlask, color: "#000000", bg: "bg-gray-100 dark:bg-gray-700" },
  "Tailwind CSS": { icon: si.SiTailwindcss, color: "#38B2AC", bg: "bg-teal-100 dark:bg-teal-900" },
  "Python": { icon: FaPython, color: "#3776AB", bg: "bg-blue-100 dark:bg-blue-900" },
  "XGBoost": { icon: FaChartLine, color: "#008000", bg: "bg-green-100 dark:bg-green-900" },
  "Random Forest": { icon: FaCogs, color: "#FF4500", bg: "bg-red-100 dark:bg-red-900" },
  "Bootstrap": { icon: si.SiBootstrap, color: "#7952B3", bg: "bg-purple-100 dark:bg-purple-900" },
  "Material UI": { icon: FaLayerGroup, color: "#0081CB", bg: "bg-blue-100 dark:bg-blue-900" },
  "ShadCN": { icon: si.SiShadcnui, color: "#000000", bg: "bg-gray-100 dark:bg-gray-700" },
  "HTML": { icon: FaHtml5, color: "#E34F26", bg: "bg-orange-100 dark:bg-orange-900" },
  "CSS": { icon: FaCss3Alt, color: "#1572B6", bg: "bg-blue-100 dark:bg-blue-900" },
  "Git": { icon: FaGitAlt, color: "#F05033", bg: "bg-red-100 dark:bg-red-900" },
  "SQL": { icon: FaDatabase, color: "#336791", bg: "bg-blue-100 dark:bg-blue-900" },
  "MS Excel": { icon: FaFileExcel, color: "#217346", bg: "bg-green-100 dark:bg-green-900" }
};

const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -3,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bounce = {
    initial: { scale: 1 },
    tap: { 
      scale: 0.97,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      } 
    }
  };

  // Decorative elements data
  const decorativeElements = [
    // Floating shapes
    { id: 1, top: '15%', left: '5%', size: 'w-3 h-3', delay: 0, icon: FaRegCircle, color: 'text-pink-300' },
    { id: 2, top: '25%', right: '10%', size: 'w-4 h-4', delay: 0.3, icon: FaHeart, color: 'text-pink-400' },
    { id: 3, bottom: '20%', left: '8%', size: 'w-2 h-2', delay: 0.6, icon: FaRegSnowflake, color: 'text-pink-200' },
    { id: 4, top: '40%', right: '5%', size: 'w-3 h-3', delay: 0.9, icon: FaRegLightbulb, color: 'text-pink-300' },
    { id: 5, top: '60%', left: '10%', size: 'w-2 h-2', delay: 1.2, icon: FaStar, color: 'text-pink-400' },
    { id: 6, bottom: '30%', right: '7%', size: 'w-3 h-3', delay: 1.5, icon: FaRegCircle, color: 'text-pink-200' }
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full px-4 py-16 bg-white dark:bg-black relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      id="experience"
    >
      {/* Decorative floating elements */}
      {decorativeElements.map((element) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} ${element.color} opacity-20 dark:opacity-30`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom
            }}
            initial={{ y: -10, rotate: 0 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 20, 0],
              transition: {
                duration: 5 + element.id,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay
              }
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}

      {/* Decorative section separator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 dark:via-pink-700 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { 
          scaleX: 1,
          transition: { duration: 1, delay: 0.3 }
        } : {}}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header with decorative elements */}
        <motion.div 
          className="text-center mb-16 relative"
          variants={titleVariants}
        >
          {/* Pink accent elements */}
          <motion.div
            className="absolute -top-6 -left-10 text-4xl text-pink-300 opacity-40"
            initial={{ scale: 0, rotate: -30 }}
            animate={inView ? { 
              scale: 1,
              rotate: 0,
              transition: { 
                delay: 0.5,
                type: "spring"
              }
            } : {}}
          >
            <FaHeart />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-6 -right-10 text-4xl text-pink-300 opacity-40"
            initial={{ scale: 0, rotate: 30 }}
            animate={inView ? { 
              scale: 1,
              rotate: 0,
              transition: { 
                delay: 0.7,
                type: "spring"
              }
            } : {}}
          >
            <FaStar />
          </motion.div>

          <div className="inline-flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { 
                scale: 1,
                transition: { 
                  type: "spring",
                  stiffness: 200
                }
              } : {}}
            >
              <FaBriefcase className="text-2xl text-black dark:text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Work Experince
            </h2>
          </div>
          <motion.div
            className="h-0.5 w-16 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={inView ? { 
              scaleX: 1,
              transition: {
                delay: 0.3,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }
            } : {}}
          />
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Dotted timeline with decorative elements */}
          <motion.div
            className="absolute left-8 top-0 h-full flex flex-col items-center justify-between py-2 z-0"
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { duration: 0.8 }
            } : {}}
          >
            {[...Array(experiences.length + 1)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="w-1 h-1 rounded-full bg-pink-300 dark:bg-pink-600" />
                {i < experiences.length && (
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={inView ? { 
                      scale: 1, 
                      rotate: 0,
                      transition: { 
                        delay: 0.5 + i * 0.2,
                        type: "spring"
                      }
                    } : {}}
                    className="text-pink-400 dark:text-pink-300 text-xs"
                  >
                    {i % 2 === 0 ? <FaHeart /> : <FaStar />}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <div className="space-y-10 pl-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={item}
              custom={index}
              whileHover="hover"
            >
                {/* Timeline dot with decorative icon */}
                <motion.div
                  className="absolute -left-11 top-4 h-5 w-5 rounded-full border-2 border-pink-400 dark:border-pink-300 bg-white dark:bg-gray-900 flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { 
                    scale: 1,
                    transition: { 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 300
                    }
                  } : {}}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-pink-500 dark:bg-pink-300"
                    animate={{
                      scale: [1, 1.3, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }
                    }}
                  />
                </motion.div>

                {/* Experience Card with enhanced decorations */}
                <motion.div
                  className={`rounded-lg border-2 border-pink-200 dark:border-pink-700 overflow-hidden ${activeIndex === index ? 'shadow-lg' : 'shadow-md'} bg-white dark:bg-black relative`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { 
                    opacity: 1,
                    x: 0,
                    transition: { 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 100
                    }
                  } : {}}
                  variants={bounce}
                  whileTap="tap"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {/* Card corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-300 dark:border-pink-500 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-pink-300 dark:border-pink-500 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-pink-300 dark:border-pink-500 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-300 dark:border-pink-500 rounded-br-lg" />

                  {/* Card Header */}
                  <div className="p-5 bg-white dark:bg-black flex justify-between items-start cursor-pointer">
                    <div>
                      <h3 className="font-bold text-lg text-black dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.p 
                        className="text-xs font-bold bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded text-pink-800 dark:text-pink-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.duration}
                      </motion.p>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-pink-500 dark:text-pink-300"
                      >
                        ▼
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        className="bg-gray-50 dark:bg-black overflow-hidden"
                      >
                        <div className="p-5 pt-0">
                          <ul className="space-y-3 mb-5">
                            {exp.description.map((item, i) => (
                              <motion.li
                                key={i}
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-start"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { 
                                    delay: i * 0.1 
                                  }
                                }}
                              >
                                <span className="text-pink-500 dark:text-pink-300 mr-2 mt-1 font-bold">▹</span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                          
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: 1,
                              transition: { delay: 0.2 }
                            }}
                          >
                           {exp.tags.map((tag, i) => {
                          const IconData = iconMap[tag] || { 
                            icon: FaRegCircle, 
                            color: "#000000",
                            bg: "bg-gray-100 dark:bg-gray-700"
                          };
                          const Icon = IconData.icon;
                              return (
                            <motion.span
                              key={i}
                              className={`text-xs font-bold px-3 py-1.5 ${IconData.bg} border border-gray-200 dark:border-gray-700 rounded-full text-black dark:text-white flex items-center gap-1.5 relative group`}
                              whileHover={{ 
                                scale: 1.05,
                              }}
                            >
                                  {Icon && (
                                    <>
                                      <Icon 
                                        size={12} 
                                        style={{ color: IconData.color }} 
                                        className="flex-shrink-0"
                                      />
                                      {/* Enhanced sparkle effect */}
                                      <motion.span
                                        className="absolute -top-1 -right-1 text-xs text-pink-400"
                                        initial={{ scale: 0 }}
                                        whileHover={{
                                          scale: [0, 1.5, 1],
                                          rotate: [0, 45],
                                          transition: {
                                            duration: 0.5
                                          }
                                        }}
                                      >
                                        ✨
                                      </motion.span>
                                    </>
                                  )}
                                  {tag}
                                </motion.span>
                              );
                            })}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;