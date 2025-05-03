"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBookOpen, FaCalendarAlt } from "react-icons/fa";

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

  // Enhanced animation variants
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

  // Title animations
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
      className="w-full px-6 py-16 bg-white dark:bg-black"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      id="education"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Decorative element - subtle */}
        <motion.div 
          className="absolute top-10 right-0 opacity-5 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { 
            opacity: 0.03, 
            scale: 1,
            rotate: -10,
            transition: { delay: 0.5, duration: 0.8 }
          } : {}}
        >
          <div className="text-7xl font-bold select-none">EDU</div>
        </motion.div>

        {/* Enhanced Section Heading */}
        <motion.div 
          className="text-center mb-20 relative"
          variants={titleVariants}
        >
          <div className="inline-block relative">
            <motion.span
              className="absolute -left-10 top-2 text-3xl"
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 0.2, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <FaGraduationCap />
            </motion.span>
            
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 relative inline-block">
              Education Journey
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white rounded-full"
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
            My academic path from foundational learning to specialized technical education
          </motion.p>
        </motion.div>

        {/* Timeline with vertical line */}
        <motion.div
          className="absolute left-6 top-40 bottom-10 w-0.5 bg-gray-300 dark:bg-gray-700"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-10">
          {educationItems.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              variants={item}
              className="relative flex items-start pl-16"
            >
              {/* Timeline node with logo */}
              <motion.div
                className="absolute left-0 top-4 z-10"
                initial={{ scale: 0 }}
                animate={inView ? { 
                  scale: 1,
                  transition: { 
                    delay: 0.5 + index * 0.15,
                    type: "spring",
                    stiffness: 200
                  }
                } : {}}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black p-0.5 flex items-center justify-center overflow-hidden shadow-md" 
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    width={48}
                    height={48}
                    alt={edu.alt}
                    src={edu.logo}
                    className="object-cover rounded-full"
                    priority={index === 0}
                  />
                </motion.div>
              </motion.div>

              {/* Horizontal connector line */}
              <motion.div 
                className="absolute left-12 top-10 h-0.5 w-6 bg-black dark:bg-white"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />

              {/* Education card - distinctive design */}
              <Link
                href={edu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <motion.div
                  className="rounded-lg bg-white dark:bg-black border-2 border-black dark:border-white p-5 shadow-md"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.08)",
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  }}
                >
                  {/* Top section with institution and grade */}
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
                      className="text-md font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-md"
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
                  
                  {/* Animated separator line */}
                  <motion.div
                    className="h-0.5 w-full bg-gray-200 dark:bg-gray-800 mb-4"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                  
                  {/* Bottom section with details */}
                  <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
                    <motion.div 
                      className="flex items-center text-md text-gray-800 dark:text-gray-200"
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.15 }}
                    >
                      <FaBookOpen className="mr-2 text-black dark:text-white" />
                      {edu.degree}
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center text-gray-600 dark:text-gray-400 font-medium"
                      initial={{ opacity: 0, x: 8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.15 }}
                    >
                      <FaCalendarAlt className="mr-2 text-black dark:text-white" />
                      {edu.period}
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Subtle decorative dots */}
        <motion.div 
          className="absolute bottom-0 left-0 w-16 h-16 opacity-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-black dark:bg-white" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;