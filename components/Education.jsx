"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaCalendarAlt,
  FaUniversity,
  FaAward,
  FaCertificate
} from "react-icons/fa";
import { 
  FiBookmark,
  FiFeather,
  FiAnchor,
  FiCloud
} from "react-icons/fi";


const Education = () => {
  const educationItems = [
    {
      id: 1,
      href: "https://srmap.edu.in/",
      logo: "/Education/srmlogo.jpeg",
      alt: "SRM University AP Logo",
      institution: "SRM University, Amaravati",
      period: "2022 - 2026",
      grade: "8.53 CGPA",
      degree: "B.Tech in Computer Science",
    },
    {
      id: 2,
      href: "https://navodaya.gov.in/",
      logo: "/Education/navodayalogo.jpeg",
      alt: "Jawahar Navodaya Vidyalaya Logo",
      institution: "Jawahar Navodaya Vidyalaya (CBSE)",
      period: "2020 - 2022",
      grade: "89.2%",
      degree: "12th Grade - PCM",
    },
    {
      id: 3,
      href: "https://navodaya.gov.in/",
      logo: "/Education/navodayalogo.jpeg",
      alt: "Jawahar Navodaya Vidyalaya Logo",
      institution: "Jawahar Navodaya Vidyalaya (CBSE)",
      period: "2019 - 2020",
      grade: "93.8%",
      degree: "10th Grade",
    },
  ];



  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Floating shapes data
  const floatingElements = [
    { id: 1, top: '10%', left: '3%', size: 'w-4 h-4', delay: 0, icon: FiBookmark, color: 'text-sky-300' },
    { id: 2, top: '25%', right: '5%', size: 'w-5 h-5', delay: 0.3, icon: FiFeather, color: 'text-sky-400' },
    { id: 3, bottom: '15%', left: '7%', size: 'w-3 h-3', delay: 0.6, icon: FiAnchor, color: 'text-sky-300' },
    { id: 4, top: '50%', right: '8%', size: 'w-4 h-4', delay: 0.9, icon: FiCloud, color: 'text-sky-400' }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: index * 0.15
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full px-6 py-16 bg-white dark:bg-black relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      id="education"
    >
      {/* Floating decorative elements */}
      {floatingElements.map((element) => {
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
              y: [0, -20, 0],
              rotate: [0, 15, 0],
              transition: {
                duration: 6 + element.id,
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

      {/* Sky blue gradient separator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300 dark:via-sky-600 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { 
          scaleX: 1,
          transition: { duration: 1, delay: 0.3 }
        } : {}}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Enhanced Section Heading with sky blue accent */}
        <motion.div 
          className="text-center mb-20 relative"
          variants={titleVariants}
        >
          <div className="inline-block relative">
            <motion.span
              className="absolute -left-10 top-2 text-3xl text-sky-400"
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <FaUniversity />
            </motion.span>
            
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 relative inline-block">
              Academic Journey
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"
                variants={underlineVariants}
                style={{ originX: 0 }}
              />
            </h2>
          </div>
          
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            My path from foundational learning to specialized technical education
          </motion.p>
        </motion.div>

        {/* Timeline with sky blue accents */}
        <div className="relative">
          {/* Dotted timeline with decorative icons */}
          <motion.div
            className="absolute left-6 top-0 h-full flex flex-col items-center justify-between py-4 z-0"
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { duration: 0.8 }
            } : {}}
          >
            {[...Array(educationItems.length + 1)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="w-1 h-1 rounded-full bg-sky-300 dark:bg-sky-600" />
                {i < educationItems.length && (
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
                    className="text-sky-400 dark:text-sky-300 text-xs"
                  >
                    {i % 2 === 0 ? <FaAward /> : <FaCertificate />}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <div className="space-y-10 pl-12">
            {educationItems.map((edu, index) => (
              <motion.div
                key={edu.id}
                custom={index}
                variants={item}
                className="relative"
              >
                {/* Timeline node with logo */}
                <motion.div
                  className="absolute -left-11 top-4 h-5 w-5 rounded-full border-2 border-sky-400 dark:border-sky-300 bg-white dark:bg-gray-900 flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { 
                    scale: 1,
                    transition: { 
                      delay: 0.5 + index * 0.15,
                      type: "spring",
                      stiffness: 300
                    }
                  } : {}}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-sky-500 dark:bg-sky-300"
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

                {/* Education Card with sky blue accents */}
                <Link
                  href={edu.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <motion.div
                    className="rounded-lg border-2 border-sky-200 dark:border-sky-700 overflow-hidden bg-white dark:bg-black shadow-md relative"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px rgba(14, 165, 233, 0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    {/* Card corner decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-300 dark:border-sky-500 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-300 dark:border-sky-500 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-300 dark:border-sky-500 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-300 dark:border-sky-500 rounded-br-lg" />

                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <motion.h3 
                          className="font-bold text-lg text-black dark:text-white"
                          initial={{ opacity: 0, y: 8 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.15 }}
                        >
                          {edu.institution}
                        </motion.h3>
                        
                        <motion.div 
                          className="text-md font-bold text-white bg-sky-500 dark:bg-sky-600 px-3 py-1 rounded-md"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            delay: 0.7 + index * 0.15,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {edu.grade}
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="h-0.5 w-full bg-gradient-to-r from-sky-300 to-sky-500 mb-4"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                      />
                      
                      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
                        <motion.div 
                          className="flex items-center text-md text-gray-800 dark:text-gray-200"
                          initial={{ opacity: 0, x: -8 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.15 }}
                        >
                          <FaBookOpen className="mr-2 text-sky-500 dark:text-sky-400" />
                          {edu.degree}
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center text-gray-600 dark:text-gray-400 font-medium"
                          initial={{ opacity: 0, x: 8 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.9 + index * 0.15 }}
                        >
                          <FaCalendarAlt className="mr-2 text-sky-500 dark:text-sky-400" />
                          {edu.period}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;