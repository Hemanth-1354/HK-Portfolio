'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython,
  FaBootstrap, FaGithub, FaFileExcel, FaChartLine, FaStar, FaHeart, FaBrain, FaBreadSlice, FaCalculator,
  FaCamera, FaPalette, FaFeather, FaLeaf, FaRocket, FaSatellite, FaSpaceShuttle, FaMeteor, FaMoon, FaSun, FaStarAndCrescent, FaGlobe, FaCloud, FaCloudMoon
} from "react-icons/fa"; // Added space-themed icons
import {
  SiDjango, SiFlask, SiNumpy, SiPandas, SiScikitlearn, SiSqlite,
  SiPostgresql, SiSelenium, SiTailwindcss, SiMongodb, SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pastel color scheme configuration
  const colorScheme = {
    primary: "bg-transparent dark:bg-transparent", // Set background to transparent for both themes
    secondary: "bg-transparent dark:bg-transparent",
    accent: "text-[#44318D] dark:text-[#44318D]",
    border: "border-[#44318D] dark:border-[#44318D]", // Preferred border color
    highlight: "bg-[#44318D] dark:bg-[#44318D]",
    text: "text-gray-800 dark:text-gray-200"
  };

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "languages", name: "Languages" },
    { id: "databases", name: "Databases" },
    { id: "aiml", name: "AI/ML" },
  ];

  const skills = [
    { name: "Python", icon: <FaPython color="#306998" />, category: ["languages", "backend"], level: 95 },
    { name: "Django", icon: <SiDjango color="#092E20" />, category: ["backend"], level: 85 },
    { name: "Flask", icon: <SiFlask color="#000000" />, category: ["backend"], level: 80 },
    { name: "Django REST", icon: <SiDjango color="#092E20" />, category: ["backend"], level: 85 },
    { name: "React", icon: <FaReact color="#61dbfb" />, category: ["frontend"], level: 80 },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" />, category: ["frontend", "languages"], level: 85 },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: ["databases"], level: 85 },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, category: ["databases"], level: 80 },
    { name: "SQL", icon: <FaDatabase color="#f39c12" />, category: ["databases"], level: 90 },
    { name: "SQLite", icon: <SiSqlite color="#003B57" />, category: ["databases"], level: 85 },
    { name: "Git", icon: <FaGitAlt color="#f34f29" />, category: ["tools"], level: 90 },
    { name: "GitHub", icon: <FaGithub color="#181717" />, category: ["tools"], level: 90 },
    { name: "Selenium (WebDriver)", icon: <SiSelenium color="#43B02A" />, category: ["tools"], level: 80 },
    { name: "NumPy", icon: <SiNumpy color="#013243" />, category: ["aiml"], level: 85 },
    { name: "Pandas", icon: <SiPandas color="#150458" />, category: ["aiml"], level: 80 },
    { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" />, category: ["aiml"], level: 75 },
    { name: "Matplotlib", icon: <FaChartLine color="#11557C" />, category: ["aiml"], level: 75 },
    {name: "C/C++", icon: <SiCplusplus color="#00599C" />, category: ["languages"], level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38b2ac" />, category: ["frontend"], level: 85 },
    { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" />, category: ["frontend"], level: 85 },
    { name: "CSS", icon: <FaCss3Alt color="#2965f1" />, category: ["frontend"], level: 85 },
    { name: "HTML", icon: <FaHtml5 color="#e34f26" />, category: ["frontend"], level: 95 },
    { name: "MS Excel", icon: <FaFileExcel color="#217346" />, category: ["tools"], level: 90 },
  ];

  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category.includes(activeCategory)
  );

  const getColorByLevel = (level) => {
    if (level >= 85) return "bg-violet-500 dark:bg-violet-500";
    if (level >= 70) return "bg-violet-500 dark:bg-violet-500";
    if (level >= 50) return "bg-violet-500 dark:bg-violet-500";
    return "bg-violet-100 dark:bg-violet-200";
  };

  if (!mounted) return null;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      y: -5,
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

  // Decorative elements using a mix of imported and skill icons
  const decorativeElements = [
    { id: 1, top: '5%', left: '10%', size: 'w-3 h-3', delay: 0, icon: FaRocket, color: 'text-violet-300' },
    { id: 2, top: '15%', right: '12%', size: 'w-4 h-4', delay: 0.3, icon: FaSatellite, color: 'text-violet-400' },
    { id: 3, bottom: '10%', left: '15%', size: 'w-2 h-2', delay: 0.6, icon: FaSpaceShuttle, color: 'text-violet-200' },
    { id: 4, top: '45%', right: '10%', size: 'w-3 h-3', delay: 0.9, icon: FaMeteor, color: 'text-violet-300' },
    { id: 5, top: '25%', left: '20%', size: 'w-3 h-3', delay: 0.5, icon: FaMoon, color: 'text-violet-300' },
    { id: 7, bottom: '15%', left: '5%', size: 'w-2 h-2', delay: 0.8, icon: FaSun, color: 'text-violet-200' },
    { id: 8, top: '55%', right: '20%', size: 'w-3 h-3', delay: 1.0, icon: FaStarAndCrescent, color: 'text-[#61dbfb]' },
    { id: 9, top: '65%', left: '25%', size: 'w-3 h-3', delay: 1.2, icon: FaGlobe, color: 'text-[#306998]' },
    { id: 10, top: '75%', right: '30%', size: 'w-3 h-3', delay: 1.4, icon: FaCloud, color: 'text-[#f0db4f]' },
    { id: 11, top: '85%', left: '35%', size: 'w-3 h-3', delay: 1.6, icon: FaCloudMoon, color: 'text-[#e34f26]' },
    { id: 12, top: '80%', right: '40%', size: 'w-3 h-3', delay: 1.8, icon: FaCss3Alt, color: 'text-[#2965f1]' },
    { id: 13, top: '70%', left: '45%', size: 'w-3 h-3', delay: 2.0, icon: FaGitAlt, color: 'text-[#f34f29]' },
    { id: 14, top: '60%', left: '50%', size: 'w-3 h-3', delay: 2.2, icon: FaPalette, color: 'text-violet-300' },
    { id: 15, top: '50%', right: '55%', size: 'w-3 h-3', delay: 2.4, icon: FaFeather, color: 'text-violet-400' },
    { id: 16, top: '40%', left: '60%', size: 'w-3 h-3', delay: 2.6, icon: FaLeaf, color: 'text-violet-200' },
    { id: 17, top: '35%', right: '15%', size: 'w-4 h-4', delay: 0.7, icon: FaBreadSlice, color: 'text-violet-400' },
    { id: 18, top: '60%', left: '55%', size: 'w-3 h-3', delay: 2.2, icon: FaPalette, color: 'text-violet-300' },
    { id: 19, top: '45%', right: '10%', size: 'w-3 h-3', delay: 0.9, icon: FaHeart, color: 'text-violet-300' },
    { id: 20, top: '50%', right: '5%', size: 'w-3 h-3', delay: 0.9, icon: FaStar, color: 'text-violet-300' },
    { id: 21, bottom: '5%', left: '25%', size: 'w-2 h-2', delay: 0.8, icon: FaCalculator, color: 'text-violet-200' },
  ];

  return (
    <motion.section
      ref={ref}
      className={`w-full px-4 py-16 ${colorScheme.secondary} relative overflow-hidden`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      id="skills"
    >
      // Decorative floating elements
      {decorativeElements.map((element) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} ${element.color} opacity-40 dark:opacity-30`} // Adjusted opacity for light theme
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom
            }}
            initial={{ y: -20, rotate: 0 }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 30, 0],
              transition: {
                duration: 3 + element.id,
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with decorative elements */}
        <motion.div 
          className="text-center mb-12"
          variants={titleVariants}
        >
          <motion.h2 
            className="text-3xl font-bold mb-3 text-black dark:text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className={`h-0.5 w-16 ${colorScheme.highlight} mx-auto`}
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

        {/* Category filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          } : {}}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? `${colorScheme.highlight} text-white shadow-md`
                  : `${colorScheme.primary} ${colorScheme.text} hover:${colorScheme.highlight}/20`
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={inView ? { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          } : {}}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className={`rounded-xl ${colorScheme.primary} p-5 ${colorScheme.border} border-2 shadow-sm hover:shadow-md transition-all h-full flex flex-col`} // Changed border to border-2 for broader border
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { 
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: index * 0.05 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }
                } : {}}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="text-3xl mr-3"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className={`text-lg font-bold ${colorScheme.text}`}>
                    {skill.name}
                  </h3>
                </div>
                
                <div className="mt-auto">
                  <div className="mb-1 flex justify-between">
                    <span className={`text-sm font-medium ${colorScheme.text}`}>Proficiency</span>
                    <span className={`text-sm font-medium ${colorScheme.text}`}>{skill.level}%</span>
                  </div>
                  <motion.div 
                    className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={inView ? { 
                      width: "100%",
                      transition: { delay: 0.3, duration: 0.5 }
                    } : {}}
                  >
                    <motion.div
                      className={`h-2 rounded-full ${getColorByLevel(skill.level)}`}
                      initial={{ width: 0 }}
                      animate={inView ? { 
                        width: `${skill.level}%`,
                        transition: { 
                          delay: 0.5,
                          duration: 1,
                          type: "spring",
                          damping: 10
                        }
                      } : {}}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <motion.div 
            className="text-center py-8 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { duration: 0.5 }
            } : {}}
          >
            No skills found in this category.
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;